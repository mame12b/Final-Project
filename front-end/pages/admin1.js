import { useState, useEffect, Fragment } from "react";
import SideBar from "@/components/layout/layout1/SideBar";
import TopBar from "@/components/layout/layout1/TopBar";
import { Transition } from "@headlessui/react";
// import AdminFooter from "@/components/AdminFooter";
import { useRouter } from "next/router";


export default function Layout({ children }) {

  
  let user;

  const router=useRouter()
  const [showNav, setShowNav] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [showLayout,setShowLayout]=useState(false)
  function handleResize() {
    if (innerWidth <=640 ) {
      setShowNav(false);
      setIsMobile(true);
    } else {
      setShowNav(true);
      setIsMobile(false);
    }
  }

  useEffect(() => {
    if (typeof window != undefined) {
      addEventListener("resize", handleResize);
    }


  user= JSON.parse(sessionStorage.getItem("user"));
    if(!user)
    {
      router.push('/login')
    }
    if(user && user.roll===2){
      setShowLayout(true)
    }
    
    return () => {
      removeEventListener("resize", handleResize);
    };
  }, 
  []);

  return (

    showLayout && 
    <>
     <TopBar showNav={showNav} setShowNav={setShowNav} />
      <Transition
        as={Fragment}
        show={showNav}
        enter="transform transition duration-[400ms]"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transform duration-[400ms] transition ease-in-out"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <SideBar showNav={showNav} />
      </Transition>
      <main
        className={`pt-16 transition-all duration-[400ms] ${
          showNav && !isMobile ? "pl-56" : ""
        }`}
      >
        <div className="md:px-16 px-4 md:table-fixed ">{children}</div>
        {/* <AdminFooter /> */}
      </main>
      </>
       );
}
