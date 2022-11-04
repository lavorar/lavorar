import { useFetchUser } from '../lib/authContext';
import LoginComponent from '../components/SingUp/LoginComponent';
import { getTokenFromServerCookie } from '../lib/auth';
import SignUpLayout from '../components/Layouts/SignUpLayout';
import DonateComponent from '../components/donate/DonateComponent';
const Donate = () => {
    const { user, loading } = useFetchUser();
    return (
        <SignUpLayout user={user}>
            <DonateComponent />
        </SignUpLayout>
    );
};

export default Donate;





export async function getServerSideProps({ req }) {
    const us= true
    const jwt = getTokenFromServerCookie(req);
    if (!jwt) {
        return {
            redirect: {
                destination: '/login',
            },
        };
    } else {
        
        return {
            props: {
                us,
            },
        };
    }
}