// pages/index.js

import React, { useEffect, useState } from "react";
import ReportForm from "@/components/ReportForm";
import ReportTable from "@/components/ReportTable";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import Layout from '../shareholder'
import { useRouter } from "next/router";

const Report = () => {
  const [share, setshare] = useState(null);
  const [shareholderActivities, setShareholderActivities] = React.useState([]);
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
      const response=await fetch('http://localhost:8000/api/share',config)
      const data=await response.json()
      if(response.ok){
        setshare(data)
      }
      else{
        setError(data)
      }
    }
    else{
      console.log("not authoried")
      router.push("/login");
    }
    }
    fetchShareholders()
  },[])

  // const handleShareholderActivitiesUpdate = (activities) => {
  //   setshare(activities);
  // };

  const handleDownloadReport = () => {
    const doc = new jsPDF();
    doc.autoTable({ html: "#shareholder-activities-table" });
    doc.save("share-management-report.pdf");
  };

  return (
    <Layout>
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Share Management Report Generator</h1>
      {/* {share && <ReportForm onShareholderActivitiesUpdate={share} />} */}
      <ReportTable shareholderActivities={share} />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={handleDownloadReport}>Download Report</button>
    </div>
    </Layout>
  );
};

export default Report;