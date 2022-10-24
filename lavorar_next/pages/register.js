import { useFetchUser } from '../lib/authContext';
import RegisterComponent from '../components/SingUp/RegisterComponent';
import { getIdFromLocalCookie, getTokenFromServerCookie } from '../lib/auth';
import { fetcher } from '../lib/api';
import { useRouter } from 'next/router';
import SignUpLayout from '../components/Layouts/SignUpLayout';
import Progress from '../components/SingUp/Progress';
import { useState } from 'react';
const Register = (jwt) => {
    const { user } = useFetchUser();  
    const [formStep, setFormStep] = useState(2);

    const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);

    const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);
    return (
        <SignUpLayout user={user}>          
            <Progress currentStep={formStep} prevFormStep={prevFormStep} > </Progress>          
            <RegisterComponent />
            {/* {formStep >= 0 && (
                <PersonalInfo formStep={formStep} nextFormStep={nextFormStep} />
            )}
            {formStep >= 1 && (
                <BillingInfo formStep={formStep} nextFormStep={nextFormStep} />
            )}
            {formStep >= 2 && (
                <ConfirmPurchase formStep={formStep} nextFormStep={nextFormStep} />
            )}

            {formStep > 2 && <FormCompleted />} */}
        </SignUpLayout>
    );
};

export default Register;

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
    else{
        return {
           props: {
                us,
           },
       };
    } 
}