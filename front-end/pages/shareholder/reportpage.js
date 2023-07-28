import React, { useState, useEffect } from 'react'
import ReportCard from '../components/ReportCard'

const ReportPage = () => {
  const [reports, setReports] = useState([])

  useEffect(() => {
    async function fetchReports() {
      const response = await fetch('/api/getReports')
      const data = await response.json()
      setReports(data)
    }

    fetchReports()
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-2xl font-bold mb-8">Reports</div>
      <div className="flex flex-col md:flex-row">
        {reports.map(item => (
          <ReportCard
            key={item.id}
            title={item.title}
            description={item.description}
            type={item.type}
            file={item.file}
          />
        ))}
      </div>
    </div>
  )
}

export default ReportPage