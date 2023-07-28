import Footer from "./Footer"
import Navbar from "./Navbar"
//import Navbar from "../Navbar";
const Heator = ({children}) =>{
  return(
    <>
<Navbar/>
{children}
<Footer/>
</>
  );
};
export default Heator;