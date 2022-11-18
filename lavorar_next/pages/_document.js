import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head />
            <body
                className="bg-gray-50 
      dark:bg-gray-800
      text-gray-700  dark:text-gray-100"
            >
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}