import React from 'react';
import '../styles/main.scss';
import Router from 'next/router';
import nProgress from 'nprogress';
import Layout from '../components/layout/layout';

function MyApp({ Component, pageProps }) {

 React.useEffect(() => {
   const start = () => nProgress.start();
   const end = () => nProgress.done();

   Router.events.on("routeChangeStart", start);
   Router.events.on("routeChangeComplete", end);
   Router.events.on("routeChangeError", end);

   return () =>{
    Router.events.off("routeChangeStart", start);
    Router.events.off("routeChangeComplete", end);
    Router.events.off("routeChangeError", end);
 

   }
  } ,[])

  return <Layout> <Component {...pageProps} /></Layout>
}

export default MyApp
