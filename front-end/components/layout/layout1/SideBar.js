import { forwardRef, useState } from "react";
import Link from "next/link";
import { HomeIcon, CreditCardIcon, UserIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import {HiDocumentReport} from "react-icons/hi";
import {BsFillChatLeftFill} from "react-icons/bs";
import {BsListTask} from "react-icons/bs";
import { BsHouseAddFill } from "react-icons/bs";
import { BsCameraFill } from "react-icons/bs";
import { Cog8ToothIcon } from "@heroicons/react/24/outline";
const SideBar = forwardRef(({ showNav }, ref) => {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (

   <div className="">
    <div ref={ref} className="object-cover fixed w-56 bg-slate-500 shadow-sm scroll-mb-20 top-0 left-0 bottom-0 max-h-screen mt-14 overflow-y-auto ">
      <div className="flex justify-center mt-6 mb-10">
        <picture>
          <img
            className="w-24 h-auto rounded-full"
            src="/assets/logo/sm.jpg"
            alt="company logo"
          />
        </picture>
        
      </div>
      {/* <div className="-mt-7 text-center font-bold underline mb-6 text-xl">
            <h2>Warkaw Aksion</h2>
        </div> */}

      <div className="flex flex-col ">
        <Link href="/admin1/dashboard">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "admin1/dashboard"
                ? "bg-orange-100 text-gray-900"
                : "text-gray-300 hover:bg-orange-100 hover:text-gray-900"
            }`}
          >
            <div className="mr-2">
              <HomeIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Dashboard</p>
            </div>
          </div>
        </Link>
        <Link href="/admin1/shareholder_list">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "admin1/shareholder_list"
                ? "bg-orange-100 text-gray-900"
                : "text-gray-300 hover:bg-orange-100 hover:text-gray-900"
            }`}
          >
            <div className="mr-2">
              <UserIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Shareholder</p>
            </div>
          </div>
        </Link>
        <Link href="/admin1/news">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
            router.pathname == "/admin1/news"
                ? "bg-orange-100 text-gray-900"
                : "text-gray-300 hover:bg-orange-100 hover:text-gray-900"
            }`}
          >
            <div className="mr-2">
              <CreditCardIcon className="h-5 w-5" />
            </div>
            <div>
              <p>News</p>
            </div>
          </div>
        </Link>


        {/* <Link href="#" onClick={toggleNested}  */}
        {/* <ul>
        <li onClick={() => handleItemClick(0)}
        className={activeIndex === 0 ? 'active' : ''}> */}
          
        <Link href="#" onClick={() => handleItemClick(0)}
        className={activeIndex === 0 ? 'active' : ''}
        >
          
        <div>
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/admin1/news"
                ? "bg-orange-100 text-gray-900"
                : "text-gray-300 hover:bg-orange-100 hover:text-gray-900"
            }`}
          >
            <div className="mr-2">
              <CreditCardIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Sell</p>
            </div>
            </div>
            {activeIndex === 0 &&(<ul className="px-3">
           
           <li onClick={() => handleItemClick(0)}
        className={activeIndex === 0 ? 'active' : ''}>
            <Link href="/admin1/newBuyersList">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/admin1/news"
                ? "bg-orange-100 text-orange-500"
                : "text-black hover:bg-sky-900 hover:text-gray-900"
            }`}
          >
            <div className="mr-2">
              <CreditCardIcon className="h-5 w-5" />
            </div>
            <div>
              <p>New Buyer</p>
            </div>
          </div>
        </Link>
           </li>
           <li>
           <Link href="/admin1/buyersList">
        
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/admin1/buyersList"
                ? "bg-orange-100 text-gray-900"
                : "text-black hover:bg-sky-900 hover:text-gray-900"
            }`}
          >
            <div className="mr-2">
              <CreditCardIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Old Buyer</p>
            </div>
          </div>
        </Link>
           </li>
            </ul> )}
          </div>
        </Link>
        {/* </li>
        </ul> */}


        <Link href="/admin1/report">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/admin1/report"
                ? "bg-orange-100 text-gray-900"
                : "text-gray-300 hover:bg-orange-100 hover:text-gray-900"
            }`}
          >
            <div className="mr-2">
              <HiDocumentReport className="h-5 w-5" />
            </div>
            <div>
              <p>Reports</p>
            </div>
          </div>
        </Link>
      
        <Link href="/admin1/chat">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/admin1/chat"
                ? "bg-orange-100 text-gray-900"
                : "text-gray-300 hover:bg-orange-100 hover:text-gray-900"
            }`}
          >
            <div className="mr-2">
              <BsFillChatLeftFill className="h-5 w-5" />
            </div>
            <div>
              <p>Chat</p>
            </div>
          </div>
        </Link>
        
        <Link href="/admin1/settings">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/admin1/settings"
                ? "bg-orange-100 text-gray-900"
                : "text-gray-300 hover:bg-orange-100 hover:text-gray-900"
            }`}
          >
            <div className="mr-2">
              <Cog8ToothIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Settings</p>
            </div>
          </div>
        </Link>
        
      </div>
    </div>
   </div>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;
