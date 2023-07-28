// import React from 'react'
// import Layout from '../admin1'

// function dashboared() {

//   return (
//     <Layout>
//     <div className='h-screen '>
//       <div className='flex gab-16 text-center -ml-36 mt-8'>
//       <div className='w-64 bg-gray-600 text-center text-2xl rounded-xl h-36 border border-gray-700 ml-32'>
//      <h1 className='text-cener mt-10 text-3xl text-green-500 '>
//       Total
//      </h1>
//       </div>
//       <div className='w-64 bg-gray-600 text-center text-2xl rounded-xl h-36 border border-gray-700 ml-32'>
//      <h1 className='text-cener mt-10 text-3xl text-green-500 '>
//       Total
//      </h1>
//       </div>
//       <div className='w-64 bg-gray-600 text-center text-2xl rounded-xl h-36 border border-gray-700 ml-32'>
//      <h1 className='text-cener mt-10 text-3xl text-green-500 '>
//       Total
//      </h1>
//       </div>
//       </div>
//       <div className='flex gab-20 mt-10'>
     
//       </div>
//     </div>
//     </Layout>
//   )
// }

// export default dashboared
import React from 'react'
import Layout from '../admin1'
import Head from 'next/head';
import Link from 'next/link';

function dashboared() {

  return (
    <Layout>
   
    
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Admin Dashboard - Shareholder Management System</title>
      </Head>
      <div className="max-w-5xl mx-auto py-16 px-4">
        <h1 className="text-3xl font-medium text-gray-800 mb-8">Welcome to the Admin Dashboard</h1>
        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                 <div className="flex items-center p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300 ease-in-out">
            <Link href="http://localhost:3000/admin1/shareholder_list">
              <div className="rounded-full bg-teal-500 text-white p-2 mr-4 hover:scale-105 ease-in duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              </Link>
              <div>
                <h2 className="text-lg font-medium text-gray-800 mb-2">Shareholder Record</h2>
                <p className="text-gray-700">
                maintains a registry of all shareholders, including their personal information and share ownership information
                </p>
              </div>
            </div>
            <div className="flex items-center p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300 ease-in-out">
            <Link href="http://localhost:3000/admin1/news">
              <div className="rounded-full bg-purple-500 text-white p-2 mr-4 hover:scale-105 ease-in duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              </Link>
              <div>
                <h2 className="text-lg font-medium text-gray-800 mb-2">News</h2>
                <p className="text-gray-700">
                  Infrom latest share news and call  metting to shareholders
                </p>
              </div>
            </div>
            <div className="flex items-center p-4 rounded-lg hover:bg-gray-100 transition-colors duration-300 ease-in-out">
               <Link href="http://localhost:3000/admin1/report">
            <div className="rounded-full bg-red-500 text-white p-2 mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              </Link>
              <div>
                <h2 className="text-lg font-medium text-gray-800 mb-2"> Reports</h2>
                <p className="text-gray-700">
                  View reports about the share.
                </p>
              </div>
            </div>
            <div className="flex items-center p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300 ease-in-out">
            <Link href="http://localhost:3000/admin1/newBuyersList">
              <div className="rounded-full bg-pink-500 text-white p-2 mr-4 hover:scale-105 ease-in duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              </Link>
              <div>
                <h2 className="text-lg font-medium text-gray-800 mb-2">Sell Share</h2>
                <p className="text-gray-700">
                  Sell share to new and old buyer
                </p>
              </div>
            </div>
            <div className="flex items-center p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300 ease-in-out">
            <Link href="http://localhost:3000/admin1/chat">
              <div className="rounded-full bg-indigo-500 text-white p-2 mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              </Link>
              <div>
                <h2 className="text-lg font-medium text-gray-800 mb-2">Chat with Admins</h2>
                <p className="text-gray-700">
                  Start a chat with an shareholders to receive any queastion and answer.
                </p>
              </div>
            </div>
            <div className="flex items-center p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300 ease-in-out">
            <Link href="http://localhost:3000/admin1/settings">
              <div className="rounded-full bg-gray-500 text-white p-2 mr-4">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                </div>
                </Link>
                <div>
                <h2 className="text-lg font-medium text-gray-800 mb-2">Setting</h2>
                <p className="text-gray-700">
                  you can change your password 
                </p>
              </div>
                </div>
                </div>
                </div>
                </div>
                </div>
               
    </Layout>
  )
}

export default dashboared