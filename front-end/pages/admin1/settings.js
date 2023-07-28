import React, { useEffect } from 'react'
import Layout from '../admin1'
import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from "next/router";



export default function Settings() {
  // Define state variables for the user's name, email, password, and night mode setting
  const router = useRouter();
  let user;
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState('');
  const [nightModeEnabled, setNightModeEnabled] = useState(false);
  useEffect(()=>{
    user= JSON.parse(sessionStorage.getItem("user"));
    if(user){
     setName(user.firstname)
     setEmail(user.email)
    }
   })
  //  if(!user){
  //   router.push('/')
  //  }

  // Handle form submission for name and email changes
  const handleNameEmailSubmit = (event) => {
    event.preventDefault();
    // Use an API call or database update to save the user's updated name and email
    alert(`Name: ${name}\nEmail: ${email}\nChanges saved successfully!`);
  };
 
  // Handle form submission for password change
  const handlePasswordSubmit =async (event) => {
    event.preventDefault();
    if(user){
      const update={password,id:user._id}
      // const config = {
      //   headers: {
      //     Authorization: `Bearer ${user.token}`,
      //   },
      // }
    const response=await fetch(`http://localhost:8000/api/user/`,{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(update),
    });
    const data=await response.json();
    if (response.ok) {
      setName('');
      setPassword('');
      setEmail('');
      console.log(data);
      console.log(response);
      alert(`New Password: ${password}\nPassword changed successfully!`);
    } else {
      // setError(data.message);
      console.log(data.message)
    }  
  }
  else{
    console.log("not authoried")
  }
}
    // Use an API call or database update to save the user's updated password


  // Handle toggle for night mode setting
  const handleNightModeToggle = () => {
    setNightModeEnabled(!nightModeEnabled);
  };


  return (
   <Layout>

    <div className={`bg-${nightModeEnabled ? 'gray-900' : 'gray-100'} min-h-screen text-${nightModeEnabled ? 'white' : 'black'}`}>
      <Head>
        <title>User Settings - Shareholder Management System</title>
      </Head>
      <div className="max-w-5xl mx-auto py-16 px-4">
        <h1 className="text-3xl font-medium text-gray-800 mb-8">User Settings</h1>
        <div className={`bg-${nightModeEnabled ? 'gray-800' : 'white'} border border-gray-200 rounded-lg p-4 shadow`}>
          <form  onSubmit={handleNameEmailSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={`border border-gray-300 rounded-lg px-4 py-2 w-full ${nightModeEnabled ? 'bg-gray-700 text-white' : ''}`}
                value={name}
                // onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={`border border-gray-300 rounded-lg px-4 py-2 w-full ${nightModeEnabled ? 'bg-gray-700 text-white' : ''}`}
                value={email}
                // onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            {/* <button
              type="submit"
              className={`bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg px-4 py-2 ${nightModeEnabled ? 'bg-gray-700' : ''}`}
            >
              Save Name and Email Changes
            </button> */}
          </form>
          <div className="my-8 border-b border-gray-200"></div>
          <form  onSubmit={handlePasswordSubmit}>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                New Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className={`border border-gray-300 rounded-lg px-4 py-2 w-full ${nightModeEnabled ? 'bg-gray-700 text-white' : ''}`}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <button
              type="submit"
              className={`bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg px-4 py-2 ${nightModeEnabled ? 'bg-gray-700' : ''}`}
            >
              Change Password
            </button>
          </form>
          <div className="my-8 border-b border-gray-200"></div>
          <div className="flex items-center">
            <label htmlFor="night-mode-toggle" className="mr-4 font-medium">
              Night Mode
            </label>
            <div className="relative inline-block w-10 mr-2 align-middle select-none">
              <input
                type="checkbox"
                id="night-mode-toggle"
                name="night-mode-toggle"
                className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                checked={nightModeEnabled}
                onChange={handleNightModeToggle}
              />
              <label
                htmlFor="night-mode-toggle"
                className={`toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer ${nightModeEnabled ? 'bg-blue-500' : ''}`}
              ></label>
              {/* {user && <input type='hidden' name='id' value={user._id}></input>} */}
            </div>
            <span className="text-gray-700">{nightModeEnabled ? 'Enabled' : 'Disabled'}</span>
          </div>
        </div>
      </div>
    </div>
    </Layout> 
  );
}
