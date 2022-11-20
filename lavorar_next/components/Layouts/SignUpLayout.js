import Head from 'next/head'
import React, { Children } from 'react'
import FormProvider from '../../context/FormContext'
import { UserProvider } from '../../lib/AuthContext'

const SignUpLayout = ({ user, loading = false, children }) => {
    return (
        <UserProvider value={{ user, loading }}>
            <FormProvider>
                <Head>
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                    <link rel="manifest" href="/site.webmanifest" />
                    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                    <meta name="msapplication-TileColor" content="#da532c" />
                    <meta name="theme-color" content="#ffffff" />
                    <link width="50" rel="icon" type="image/svg+xml" href="/Lavorar-logo-negativo.svg" />
                    <title>Lavorar</title>
                </Head>
                <nav className="bg-gray-300
                 dark:bg-gray-700 text-gray-900  dark:text-white-ghost px-2 sm:px-4 p-0 sticky w-full z-10 top-0 py-1 left-0">
                    <a href="/" className="flex items-center  ">
                        <img src="/Lavorar-logo-negativo.svg" className="mr-6 w-16" alt="LAvorar Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">LavorAr</span>
                    </a>
                </nav>
                <div className='mt-3 p-2 md:p-5'>

                    {children}
                </div>
            </FormProvider>
        </UserProvider>
    )
}

export default SignUpLayout