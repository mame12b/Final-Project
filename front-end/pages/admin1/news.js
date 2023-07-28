import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { BsArrowRightShort } from "react-icons/bs";
import Layout from '../admin1'
import NewsCard from "../shareholder/newspage";
import { useRouter } from "next/router";
import AdminNewsCard from "./news2";
function news() {
  const [news, setNews] = useState(null)
  const [error, setError] = useState(null)
  const router = useRouter();
  const [showLayout,setShowLayout]=useState(false)
  useEffect(() => {
    async function fetchNews() {
      const user= JSON.parse(sessionStorage.getItem("user"));
      if(user){
        const config = {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
        const response = await fetch('http://localhost:8000/api/adminnews',config)
        const data = await response.json()
        if(response.ok){
          setNews(data)
          setShowLayout(true)
          console.log(response)
          console.log(data)

        }
        else{
          setError(data)
          console.log(data.message)
        }
      }
      else{
        console.log("not authoried")
        router.push("/login");
      }
    }
 fetchNews()
  }, [])
  return (
    <Layout>
    <div className="h-screen w-full bg-gray-200 mb-10 p-4">
    <div className='px-10 py-6'>
        <div className="w-40 p-2 bg-sky-500 xl:ml-80 sm:-ml-96 h-10 border border-gray-600 rounded-2xl text-center text-lg font-semibold text-white ">
          <Link href="/admin1/newscreate">Create News</Link>
        </div>
        <div className="grid grid-cols-1 grid-flow-row sm:grid-cols-2 md:grid-cols-3  justify-center gap-5 mt-8  ">
         {news && <AdminNewsCard adminnews={news}/>} 
       </div>
      </div>
    </div>
    </Layout>
  );
}

export default news;
