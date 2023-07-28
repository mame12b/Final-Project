import React, { useState, useEffect } from 'react'
import NewsCard from './newspage'
import Layout from '../shareholder'
import { useRouter } from 'next/router'
const news = () => {
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
    showLayout && <Layout>
     <div className='px-10 py-6'>
     <div className="text-2xl font-bold ">News</div>
     <div className="grid grid-cols-1 grid-flow-row sm:grid-cols-2 md:grid-cols-3  justify-center gap-5 mt-8  ">
         {news && <NewsCard adminnews={news}/>} 
       </div>
     </div>
     </Layout> 

  )
}
export default news