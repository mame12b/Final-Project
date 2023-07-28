import "../styles/globals.css";
// import Layout from "../components/Layout";
// import SLayout from "../components/SLayout";
import { AuthContextProvider } from '@/context/AuthContext';

function MyApp({ Component,
  pageProps: { session, ...pageProps },
}) {
  
  if (Component.getLayout){
    return Component.getLayout(<Component {...pageProps} />
    )
  }
 
    
  

  return (
    <>
    
    <AuthContextProvider>
    <Component {...pageProps}  />
  </AuthContextProvider>
   
    
    </>
  );
  }


export default MyApp;
