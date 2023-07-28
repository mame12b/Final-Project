import React from 'react'
import Layout from '../shareholder'
import Head from 'next/head';
import Link from 'next/link';

function dashboared() {

  return (
    <Layout>
   
    
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>User Dashboard - Shareholder Management System</title>
      </Head>
      <div className="max-w-5xl mx-auto py-16 px-4">
        <h1 className="text-3xl font-medium text-gray-800 mb-8">Welcome to the User Dashboard</h1>
        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* <div className="flex items-center p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300 ease-in-out">
              <div className="rounded-full bg-blue-500 text-white p-2 mr-4">
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
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v8a2 2 0 002 2h10a2 2 0 002-2v-8m-7 7v-4"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-medium text-gray-800 mb-2">Share Dividend</h2>
                <p className="text-gray-700">
                  Calculate your share of the dividend based on your number of shares.
                </p>
              </div>
            </div>
            <div className="flex items-center p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300 ease-in-out">
              <div className="rounded-full bg-green-500 text-white p-2 mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-medium text-gray-800 mb-2">Proxy Voting</h2>
                <p className="text-gray-700">
                  Vote on important shareholder matters even if you can't attend the meeting.
                </p>
              </div>
            </div> */}
            {/* <div className="flex items-center p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300 ease-in-out">
              <div className="rounded-full bg-yellow-500 text-white p-2 mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-medium text-gray-800 mb-2">Shareholder Meetings</h2>
                <p className="text-gray-700">
                  Find out about upcoming shareholder meetings and view meeting materials.
                </p>
              </div>
            </div> */}
                 <div className="flex items-center p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300 ease-in-out">
            <Link href="http://localhost:3000/shareholder/myshare">
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
                <h2 className="text-lg font-medium text-gray-800 mb-2">My Share Amount</h2>
                <p className="text-gray-700">
                  View your current share amount and any changes that have been made.
                </p>
              </div>
            </div>
            <div className="flex items-center p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300 ease-in-out">
            <Link href="http://localhost:3000/shareholder/news">
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
                  Read the latest news about the company and its shareholders.
                </p>
              </div>
            </div>
            <div className="flex items-center p-4 rounded-lg hover:bg-gray-100 transition-colors duration-300 ease-in-out">
               <Link href="http://localhost:3000/shareholder/report">
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
            <Link href="http://localhost:3000/shareholder/buy">
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
                <h2 className="text-lg font-medium text-gray-800 mb-2">Buy Share</h2>
                <p className="text-gray-700">
                  Increase your share to be more profitable.
                </p>
              </div>
            </div>
            <div className="flex items-center p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300 ease-in-out">
            <Link href="http://localhost:3000/shareholder/chat">
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
                  Start a chat with an administrator to get help with any issues or questions.
                </p>
              </div>
            </div>
            <div className="flex items-center p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300 ease-in-out">
            <Link href="http://localhost:3000/shareholder/setting">
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