import { data } from 'autoprefixer';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Layout from '../components/Layouts/mainLayout';
import { fetcher } from '../lib/api';
import { getTokenFromServerCookie } from '../lib/auth';
import MyProfileComponent from '../components/profile/MyProfile'

const Profile = ({ user }) => {
    const [image, setImage] = useState(null);
    const router = useRouter();


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
        console.log(jwt)
        const user = await fetcher(
            `${process.env.NEXT_PUBLIC_STRAPI_URL}/users/me?populate=*`,
            {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            }
        );
        return {
            props: {
                user,
            },
        };
    }
}