import { useFetchUser } from '../lib/authContext';
import RegisterComponent from '../components/SingUp/RegisterComponent';
import { getIdFromLocalCookie, getTokenFromServerCookie } from '../lib/auth';
import { fetcher } from '../lib/api';
import { useRouter } from 'next/router';
import SignUpLayout from '../components/Layouts/SignUpLayout';
import Progress from '../components/SingUp/Progress';
import { useState } from 'react';
import LenderChoice from '../components/SingUp/SecondStep';
import LenderOptions from '../components/SingUp/LenderOptions';
import LastStep from '../components/SingUp/LastStep';
import FormCompleted from '../components/SingUp/FormCompleted';
const Register = (jwt) => {
    const { user } = useFetchUser();
    const [formStep, setFormStep] = useState(2);
    
    const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);    
    const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);
    const back2FormStep = () => setFormStep((currentStep) => currentStep - 2);
    return (
        <SignUpLayout user={user}>
            <div className=" w-full min-h-screen justify-between">
                <div className="w-full p-2 md:max-w-md md:mx-auto">
                    <Progress currentStep={formStep} prevFormStep={prevFormStep} back2FormStep={back2FormStep} >                        
                        {formStep >= 0 && (
                            <RegisterComponent formStep={formStep} nextFormStep={nextFormStep} s />
                        )}
                        {formStep >= 1 && (
                            <LenderChoice formStep={formStep} nextFormStep={nextFormStep} />
                        )}
                        {formStep >= 2 && (
                            <LenderOptions formStep={formStep} nextFormStep={nextFormStep}  />
                        )}

                        {formStep >= 3 && (
                        <LastStep formStep={formStep} nextFormStep={nextFormStep} />
                        )}
                        {formStep > 3 && (
                            <FormCompleted />
                        )}
                    </Progress>                    
                </div>                
            </div>
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
    else {
        return {
            props: {
                us,
            },
        };
    }
}