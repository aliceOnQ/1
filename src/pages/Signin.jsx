import { theme } from 'antd';
import { Helmet } from "react-helmet-async"
import { useSearchParams } from 'react-router-dom';
import Header from "../components/Header"
import Footer from "../components/Footer"

import { useEffect } from "react";

function Login() {
   const {
      token: { colorBgBase, colorTextBase },
   } = theme.useToken();
   const [searchParams] = useSearchParams();
   const redirect = searchParams.get('redirect');
   useEffect(()=>{
      window.scrollTo(0,-10);
    },[])

   return(
      <MotionDiv className="mainLayout">
         <Helmet>
            <title>login</title>
            <style>{`
               body { 
                  background-color: ${colorBgBase}; 
                  color: ${colorTextBase}
               }
            `}</style>
         </Helmet>
         <Header
            className="layoutHeader"
            title="Login"
            slogan="An example made by Vite."
         />
         <div className="layoutContent container">
            <LoginCard redirect={redirect} />
         </div>
         <Footer className="layoutFooter" />
      </MotionDiv>
   );
}

export default Login;
