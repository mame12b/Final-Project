import Head from "next/head";
import { useState } from "react";
import Link from "next/link";

const ContactPage = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    const contact={Name,Email,Message}
    const response = await fetch("http://localhost:8000/api/contactus", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact)
    });
  const data = await response.json();
  if (response.ok) {
     setName("");
     setEmail("");
     setMessage("");
     setError("");
    console.log(data);
  } else {
    setError(data.message);
  }
}

  return (
    <div id='contact'>
      <Head>
        <title>Contact Us - Shareholder Management System</title>
      </Head>
      <section className="bg-slate-100">
      <div className="pt-10 sm:pt-15 hover:scale-110 ease-in duration-300">
      <h1 className="text-4xl font-bold text-center">Welcome to our company </h1>
      </div>
      <div
       className="container flex flex-col items-center mx-auto py-20 space-y-10 md:flex-row md:mx-auto w-full  "
      >
          
        <div className=" md:w-1/2 ml-20">
          <img src="/assets/logo/contact.jpg" alt=""  className='rounded-xl hover:scale-110 ease-in duration-300'/>
        </div>
      <div className=" m-auto flex flex-col items-center justify-center  md:w-1/2 w-full hover:scale-110 ease-in duration-300">
      
        <div className="relative w-full max-w-md px-4 sm:px-6 md:px-8 py-3 bg-gray-200 shadow-md rounded-3xl">
          <div className="max-w-md mx-auto">
            <div className="flex items-center space-x-5">
              <div className="h-14 w-14 bg-indigo-900 rounded-full flex flex-shrink-0 justify-center items-center text-white text-2xl font-mono">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </div>
              <div className="block font-semibold text-xl self-start text-gray-700">
                <h2 className="leading-relaxed">Contact Us</h2>
                <p className="text-sm text-gray-500 font-normal leading-relaxed">
                  We're here to help and answer any question you might have. We look forward to hearing from you.
                </p>
              </div>
            </div>
            <div className="divide-y divide-gray-600">
              <div className="py-8 text-base gap-4 leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7  ">
                <form onSubmit={handleSubmit}>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="input rounded-md border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 block w-full px-3 py-2 placeholder-gray-400 sm:text-sm"
                      placeholder="Name"
                      value={Name}
                      onChange={(event) => setName(event.target.value)}
                      required
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="input rounded-md border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 block w-full px-3 py-2 placeholder-gray-400 sm:text-sm"
                      placeholder="Email"
                      value={Email}
                      onChange={(event) => setEmail(event.target.value)}
                      required
                    />
                  </div>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      className="input rounded-md border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 block w-full px-3 py-2 placeholder-gray-400 sm:text-sm"
                      placeholder="Message"
                      value={Message}
                      onChange={(event) => setMessage(event.target.value)}
                      required
                    ></textarea>
                  </div>
                  <div className="text-right mt-5">
                    <button
                      type="submit"
                      className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      </div>
      </section>
    </div>
  );
};

export default ContactPage;