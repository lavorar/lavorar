import { useFetchUser } from '../lib/AuthContext';
import Layout from '../components/Layouts/mainLayout';
import LoginComponent from '../components/SingUp/LoginComponent';
import { getTokenFromServerCookie } from '../lib/auth';
import SignUpLayout from '../components/Layouts/SignUpLayout';
const Login = () => {
    const { user, loading } = useFetchUser();
    return (
        <SignUpLayout user={user}>
            <LoginComponent />
        </SignUpLayout>
    );
};

export default Login;

export async function getServerSideProps({ req }) {
    const us = true
    const jwt = getTokenFromServerCookie(req);
    if (jwt) {
        return {
            redirect: {
                destination: '/',
            },
        };
    }
    else {
        return {
            props: {
                us,
            },
        };
    }
}