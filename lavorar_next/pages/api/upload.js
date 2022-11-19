import { IncomingForm } from 'formidable';
import cloudinary from 'cloudinary';
import { getTokenFromServerCookie } from '../../lib/auth';
import axios from 'axios';
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
});

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function upload(req, res) {
    if (req.method === 'POST') {
        const data = await new Promise((resolve, reject) => {
            const form = new IncomingForm();

            form.parse(req, (err, fields, files) => {
                if (err) return reject(err);
                resolve({ fields, files });
            });
        });
        const { user_id } = data.fields;
        // console.log(data)
        //  return res.json(user_id );
         const file = data?.files?.inputFile.filepath;

         try {
             const response = await cloudinary.v2.uploader.upload(file, {
                 public_id: user_id,
                 width: 150,
                 heigth: 150,
                 crop: 'scale',
                 invalidate: true
             });
             const { public_id, version } = response;
             let img = version + '/' + public_id
             const jwt = getTokenFromServerCookie(req);

             const responseUpdateAvatar = await axios.put(`${process.env.NEXT_PUBLIC_STRAPI_URL}/users/${user_id}`,
                 {
                     avatar: img
                 },
                 {
                     headers: {
                         'Content-Type': 'application/json',
                         Authorization: `Bearer ${jwt}`
                     }
                 })
             return res.json({ message: 'success', data: data });


         } catch (error) {
             console.error(JSON.stringify(error));
             return res.json(error)
         }
    } else {
        return res.status(403).send('Forbidden');
    }
}