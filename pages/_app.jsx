import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/globals.css";
import Layout from "./layout/Layout";
import { SessionProvider, getSession } from "next-auth/react";
import Router from "next/router";
import nProgress from "nprogress";
import "nprogress/nprogress.css";

nProgress.configure({ easing: 'ease', speed: 500, });

Router.events.on("routeChangeStart", () => nProgress.start());
Router.events.on("routeChangeComplete", () => nProgress.done())
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}


export default MyApp;
