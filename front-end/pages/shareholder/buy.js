import Head from "next/head";
import { useEffect, useState } from "react";
import {useRouter} from "next/router";
import Layout from '../shareholder'

const buy = () => {
  let user;
  const router=useRouter();
  const [firstname, setFirstName] = useState("");
  const [middlename, setMiddleName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo,setPhoneNo]=useState("");
  const [shareamount, setShareAmount] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
     user= JSON.parse(sessionStorage.getItem("user"));
    console.log(user)
    setEmail(user.email);
    setFirstName(user.firstname);
    setLastName(user.lastname);
    setMiddleName(user.middlename);
    setPhoneNo(user.phoneNo);
  },[])
  const handleSubmit = async (event) => {
    event.preventDefault();
    // TODO: Handle form submission
    const addshareamount = {
      firstname,
      middlename,
      lastname,
      email,
      phoneNo,
      shareamount,
    };
    const response = await fetch("http://localhost:8000/api/addshareamount", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addshareamount),
    });
    console.log(response)
    const data = await response.json();
    if (response.ok) {
      if(!data.error){
      setFirstName("");
      setMiddleName("");
      setLastName("");
      setEmail("");
      setPhoneNo("");
      setShareAmount("");
      setError("");
      console.log(data);
      router.push(data.message)}
      else{
        setError(data.error);
      }
     
    } else {
      setError(data.message);
    }
  };

  return (
    <Layout>
    <div className="max-w-lg mx-auto mt-10 pt-10 rounded-lg bg-gray-400">
      <Head>
        <title className="">Buy a share</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1 className="font-bold text-gray-700 text-center mb-8 text-2xl">
          Buy And Increase Your Profit
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="grid grid-cols-3 gap-x-4 ">
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block mb-2 font-bold text-gray-700"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              required
              className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              onChange={(event) => setFirstName(event.target.value)}
              value={firstname}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="middleName"
              className="block mb-2 font-bold text-gray-700"
            >
              Middle Name
            </label>
            <input
              type="text"
              id="middleName"
              required
              className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              onChange={(event) => setMiddleName(event.target.value)}
              value={middlename}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="lastName"
              className="block mb-2 font-bold text-gray-700"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              required
              className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              onChange={(event) => setLastName(event.target.value)}
              value={lastname}
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 font-bold text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            autoComplete="email"
            required
            className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            // onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="phoneNo"
            className="block mb-2 font-bold text-gray-700"
          >
            Phone No
          </label>
          <input
            type="tel"
            id="phoneNo"
            required
            autoComplete="tel"
            className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            onChange={(event) => setPhoneNo(event.target.value)}
            value={phoneNo}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="shareAmount"
            className="block mb-2 font-bold text-gray-700"
          >
            Share Amount
          </label>
          <input
            type="number"
            id="shareAmount"
            required
            className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            onChange={(event) => setShareAmount(event.target.value)}
            value={shareamount}
          />
        </div>
        <div className="mb-8">
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 mb-16"
          >
            BUY
          </button>
          {error && <p className="text-red-500 mb-7">{error}</p>}
        </div>
      </form>
    </div>
    </Layout>
  )
}

export default buy