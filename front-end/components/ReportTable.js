
import shareholder from "@/pages/shareholder";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const ReportTable = ({ shareholderActivities }) => {
  const [addshare, setaddshare] = useState(null);
  const router = useRouter();
  let user;
  useEffect(()=>{
    const fetchShareholders=async ()=>{
      user= JSON.parse(sessionStorage.getItem("user"));
    if(user){
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
      const response=await fetch('http://localhost:8000/api/addshareamount',config)
      const data=await response.json()
      if(response.ok){
        setaddshare(data)
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
    fetchShareholders()
  },[])
  // const totalupdatedshareholder=
   const totalShareAmount=shareholderActivities && shareholderActivities.map((shareholder)=>(shareholder.shareamount)).reduce((previousValue, currentValue) => {
    return previousValue+=currentValue;
  }, 0).toFixed(2)
  const totalShareholders=shareholderActivities && shareholderActivities.length
  const maxShareAmount=shareholderActivities && shareholderActivities.map((shareholder)=>(shareholder.shareamount)).reduce((prevval,curval)=>{
    if(prevval > curval) return prevval;
    else return curval;
  }).toFixed(2)
  const minshareAmount=shareholderActivities && shareholderActivities.map((shareholder)=>(shareholder.shareamount)).reduce((prevval,curval)=>{
    if(prevval < curval) return prevval;
    else return curval;
  }).toFixed(2)
  console.log(maxShareAmount,minshareAmount)
  const TotalIncreasedShare=addshare && addshare.map((shareholder)=>(shareholder.shareamount)).reduce((previousValue, currentValue) => {
    return previousValue+=currentValue;
  }, 0).toFixed(2)
  return (
    <table className="table-auto mb-4" id="shareholder-activities-table">
      <thead>
        <tr>
        <th className="px-4 py-2">Total Shareholders</th>
          <th className="px-4 py-2">Total ShareAmount</th>
          <th className="px-4 py-2">Increased ShareAmount</th>
          <th className="px-4 py-2">Maximum ShareAmount</th>
          <th className="px-4 py-2">Minimum ShareAmount</th>

        </tr>
      </thead>
      <tbody>
          <tr>
          <td className="border px-4 py-2">{totalShareholders}</td>
            <td className="border px-4 py-2">{totalShareAmount}</td>
            <td className="border px-4 py-2">{TotalIncreasedShare}</td>
            <td className="border px-4 py-2">{maxShareAmount}</td>
            <td className="border px-4 py-2">{minshareAmount}</td>
          </tr>
      </tbody>
    </table>
  );
};

export default ReportTable;