import { useState, useEffect } from "react";
import Layout from "../admin1";
import { useRouter } from "next/router";
const MyComponent = () => {
  const rou =useRouter();
const totalshare=rou.query.shareamount
  const [totalProfit, setTotalProfit] = useState(0);
  const [totalShareAmount, setTotalShareAmount] = useState(totalshare);
  const [error, setError] = useState("");
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const user=JSON.parse(sessionStorage.getItem("user"));
    // TODO: Handle form submission
    const sharedividend = {
     totalProfit,
     totalShareAmount
    };
    const response = await fetch("http://localhost:8000/api/calculate-dividend", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify(sharedividend),
    });
    const data = await response.json();
    if (response.ok) {
      // alert("successfully ")
      setTotalProfit(0)
      setTotalShareAmount(0)
      setError("");
      console.log(data);
    } else {
      setError(data.message);
    }
  };
  return (
    <Layout>
      <div className="h-screen justify-center">
        <div className="ml-36 mt-12 font-bold text-2xl">
          <h2>Share Dividend</h2>
        </div>
        <form onSubmit={handleFormSubmit} className="">
          <div className="w-3/5 h-96 mt-10 ml-36 p-10 border border-slate-300 items-center bg-gray-300">
            <div className="p-4">
              <label className="block mb-2 font-bold text-gray-700">Total profit:</label>
              <input
              className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                type="number"
                value={totalProfit}
                required
                onChange={(event) => setTotalProfit(event.target.value)}
              />
            </div>

            <div className="p-4">
              <label className="block mb-2 font-bold text-gray-700">Total Share Amount:</label>
              <input
              className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                type="number"
                value={totalShareAmount}
                // onChange={(event) => setTotalShareAmount(event.target.value)}
              />
            </div>

            <div className="flex gap-14 mt-16">
              <button 
              className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 mb-16"
               type="submit">Calculate dividends</button>
              {/* <button
              className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 mb-16"
               type="submit">Update</button> */}
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};
export default MyComponent;
