import { useFetchUser } from '../lib/AuthContext';
import LoginComponent from '../components/SingUp/LoginComponent';
import { getTokenFromLocalCookie, getTokenFromServerCookie } from '../lib/auth';
import SignUpLayout from '../components/Layouts/SignUpLayout';
import DonateComponent from '../components/donate/DonateComponent';
import { fetcher } from '../lib/api';
const Donate = ({ user }) => {
    // const { user, loading } = useFetchUser();
    return (
        <SignUpLayout user={user} >
            <DonateComponent />
        </SignUpLayout>
    );
};

export default Donate;





export async function getServerSideProps({ req }) {
    const jwt = getTokenFromServerCookie(req);
    if (!jwt) {
        return {
            redirect: {
                destination: '/login',
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