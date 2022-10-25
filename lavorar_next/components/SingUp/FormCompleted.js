import { useRouter } from "next/router";
import { useFormData } from "../../context/FormContext";
import { fetcher } from "../../lib/api";
import { setToken } from "../../lib/auth";


export default function FormCompleted() {
    const { data } = useFormData();
    const router = useRouter();

    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }

    async function test() {
        console.log('start timer');
        await delay(1000);
        console.log('after 1 second');
    }

    test();

    const redirection = async (inputValue) => {
        try {
            const responseData = await fetcher(
                `${process.env.NEXT_PUBLIC_STRAPI_URL}/auth/local/register`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                    method: 'POST',
                }
            );
            // setregistration(true)
            console.log(responseData)
            setToken(responseData);
            router.replace('/')
            // setUser({ ...user, user: responseData.user, jwt: responseData.jwt })
            // console.log('id user', user)
        } catch (error) {
            console.error(error);
        }

    };

    const promiseOptions = () =>
        new Promise((resolve) => {
            setTimeout(() => {
                resolve(redirection());
            }, 1000);
        });

    promiseOptions()
    return (
        <>
            <h1 className="text-5xl text-center font-bold">
                Bienvenido, Gracias por Registrarte! {' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                    {data.firstName + ' ' + data.lastName}
                </span>
                <span>👋 🎉</span>
            </h1>
        </>
    );
}
