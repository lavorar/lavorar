import { data } from 'autoprefixer';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Layout from '../components/Layouts/mainLayout';
import { fetcher } from '../lib/api';
import { getIdFromLocalCookie, getTokenFromServerCookie } from '../lib/auth';
import { useFetchUser } from '../lib/authContext';
import MyProfileComponent from '../components/profile/MyProfile'

// import VerifiedIcon from "@mui/icons-material/Verified";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import BasicRating from '../components/elements/Rating';
// import ButtonCard from '../components/elements/ButtonCard';
// import BackgroundLetterAvatars from '../components/elements/AvatarInitials';
// import Image from 'next/image';

const Profile = ({ avatar }) => {
    const { user, loading } = useFetchUser();

    const [image, setImage] = useState(null);
    const router = useRouter();

    // const uploadToClient = (event) => {
    //     if (event.target.files && event.target.files[0]) {
    //         const tmpImage = event.target.files[0];
    //         setImage(tmpImage);
    //     }
    // };
    // const uploadToServer = async () => {
    //     const formData = new FormData();
    //     const file = image;
    //     formData.append('inputFile', file);
    //     formData.append('user_id', await getIdFromLocalCookie());
    //     try {
    //         const responseData = await fetcher('/api/upload', {
    //             method: 'POST',
    //             body: formData,
    //         });
    //         if (responseData.message === 'success') {
    //             router.reload('/profile');
    //         }
    //     } catch (error) {
    //         console.error(JSON.stringify(error));
    //     }
    // };
    return (
        <Layout user={user}>
            <MyProfileComponent user={user} />
        </Layout>
    );
};

export default Profile;

export async function getServerSideProps({ req }) {
    const jwt = getTokenFromServerCookie(req);
    if (!jwt) {
        return {
            redirect: {
                destination: '/',
            },
        };
    } else {
        const responseData = await fetcher(
            `${process.env.NEXT_PUBLIC_STRAPI_URL}/users/me`,
            {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            }
        );
        const avatar = responseData.avatar ? responseData.avatar : 'default_avatar';
        return {
            props: {
                avatar,
            },
        };
    }
}