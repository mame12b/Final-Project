import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../admin1';
export default function shareholder_details() {
  const [user, setUser] = useState(null);
  const router =useRouter();
 const id=router.query.id
 console.log(id)
  const [error, setError] = useState(null)
  useEffect(() => {
    async function fetchShareholdesInfo() {
      const users= JSON.parse(sessionStorage.getItem("user"));
      if(users){
        const config = {
          headers: {
            Authorization: `Bearer ${users.token}`,
          },
        }
        const response = await fetch(`http://localhost:8000/api/share/edit_shareholder/${id}`,config)
        const data = await response.json()
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
 fetchShareholdesInfo()
  }, [])
  return (
    user &&
   <Layout>   
    <div className="bg-gray-100 min-h-screen ">
      <div className="max-w-5xl mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-gray-200 rounded-lg p-4 shadow">
          <div className="bg-white border border-gray-200 rounded-lg p-4 shadow">
            <h2 className="text-lg font-medium text-red-400 mb-4">Shareholder Detail Information</h2>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">First Name:<span className='pl-2 text-green-600'>{user.firstname}</span></span> 
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Middle Name:<span className='pl-2 text-green-600'>{user.middlename}</span></span> 
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Last name:<span className='pl-2 text-green-600'>{user.lastname}</span></span> 
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Email:<span className='pl-2 text-green-600'>{user.email}</span></span> 
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Phone:<span className='pl-2 text-green-600'>{user.phoneNo}</span></span> 
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">City:<span className='pl-2 text-green-600'>{user.city}</span></span> 
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Subcity:<span className='pl-2 text-green-600'>{user.subcity}</span></span> 
            </p>
           
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">wereda:<span className='pl-2 text-green-600'>{user.wereda}</span></span> 
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">country:<span className='pl-2 text-green-600'>{user.country}</span></span> 
            </p>
             <p className="text-gray-600 mb-2">
              <span className="font-semibold">HouseNo:<span className='pl-2 text-green-600'>{user.houseNo}</span></span> 
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">ShareAmount:<span className='pl-2 text-green-600'>{user.shareamount.toFixed(2)}</span></span> 
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
 
  );
}
