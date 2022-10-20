import { useFetchUser } from '../lib/authContext';
import Layout from '../components/Layouts/mainLayout';
import RegisterComponent from '../components/RegisterComponent';
const Register = () => {
    const { user, loading } = useFetchUser();
    return (
        <Layout user={user}>
            <RegisterComponent />
        </Layout>
    );
};

export default Register;