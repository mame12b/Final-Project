import { useEffect, useState } from 'react';
import ShareholderTable from '@/components/Admin/BuyerTable';
import Layout from '../admin1'
import BuyerTable from '@/components/Admin/BuyerTable';

const buyersList = () => {
const [share, setshare] = useState(null);
  useEffect(()=>{
      const fetchShareholders=async ()=>{
        const user= JSON.parse(sessionStorage.getItem("user"));
        if(user){
          const config = {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
      const response=await fetch('http://localhost:8000/api/addshareamount',config)
      const data=await response.json()
      if(response.ok){
        setshare(data)
        console.log(data)
      }
      else{
        setError(data)
        console.log(data.message)
      }
    }
    else{
      console.log("not authoried")
      rou.push("/login");
    }
    }
    fetchShareholders()
  },[])


  return (
    <Layout>
    <>
    <div>
    <h1 className="text-2xl font-bold mb-4 ">Shareholder List</h1>
    </div>
    <div className='min-w-full border p-4 bg-slate-100 h-screen border-gray-200'>    
    <div className="container mx-auto py-2">
         {share &&<BuyerTable  shareholders={share}/>}
      </div>
     </div> 
    </>
    </Layout>
  )
}

export default buyersList