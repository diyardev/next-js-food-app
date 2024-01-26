import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {

  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Abel&family=Dancing+Script:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com"  crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;500&display=swap"
          rel="stylesheet"
          crossOrigin="true"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
       
      </body>
    </Html>
  );
}
