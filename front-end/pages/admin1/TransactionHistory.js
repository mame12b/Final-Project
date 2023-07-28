import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../admin1';
import { data } from 'autoprefixer';
import { formatDistance, formatDistanceToNow } from 'date-fns';


// Define the UserProfile component
export default function TransactionHistory() {
  const rou =useRouter();
   const email=rou.query.email;
   let data;
  const [user, setUser] = useState(null);
  const router = useRouter();
  const [error, setError] = useState(null)
  const [showLayout,setShowLayout]=useState(false)
  useEffect(() => {
    async function fetchUser() {
      const users= JSON.parse(sessionStorage.getItem("user"));
      if(users){
        const config = {
          headers: {
            Authorization: `Bearer ${users.token}`,
          },
        }
      // if(user && user.roll===0){
        const response = await fetch(`http://localhost:8000/api/transaction/${email}`,config)
        data = await response.json()
        if(response.ok){
          setUser(data)
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
 fetchUser()
  }, [])
  return (
    user &&
   <Layout>   
    <div className="bg-gray-100 min-h-screen flex item-center">
      <div className="max-w-5xl mx-auto py-16 px-4 ">
        <h1 className="text-3xl font-medium text-blue-400 mb-8">Transaction History</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-gray-200 rounded-lg p-4 shadow">
          <div className="bg-white border border-gray-200 rounded-lg p-4 shadow">
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">First Name:<span className='pl-2 text-green-600'>{user.first_name}</span></span> 
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Last Name:<span className='pl-2 text-green-600'>{user.last_name}</span></span> 
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Amount:<span className='pl-2 text-green-600'>{user.amount}</span></span> 
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Currency:<span className='pl-2 text-green-600'>{user.currency}</span></span> 
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Email:<span className='pl-2 text-green-600'>{user.email}</span></span> 
            </p> 
            <p className='italic text-normal text-right text-blue-950 pb-0 '>{formatDistanceToNow(new Date(user.createdAt),{addSuffix:true})}</p>
   
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
 
  );
}
