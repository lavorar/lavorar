import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head />
            <body
                className="bg-gradient-to-r
      from-gray-300
      via-gray-200
      to-gray-200 
      dark:bg-gradient-to-r
      dark:from-gray-900
      dark:via-gray-800
      dark:to-gray-700"
            >
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}