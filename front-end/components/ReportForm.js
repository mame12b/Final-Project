
import React from "react";

const ReportForm= ({ onShareholderActivitiesUpdate, shareholderActivities }) => {
  if(onShareholderActivitiesUpdate)  {
    onShareholderActivitiesUpdate.map((share)=>console.log(share.firstname))
  }
  const [formData, setFormData] = React.useState({
    shareholderName: "",
    activityType: "",
    activityYear: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newActivity = {
      shareholderName: formData.shareholderName,
      activityType: formData.activityType,
      activityYear: formData.activityYear,
    };
    // onShareholderActivitiesUpdate(Array.isArray(shareholderActivities) ? [...shareholderActivities, newActivity] : [newActivity]);
    setFormData({
      shareholderName: "",
      activityType: "",
      activityYear: "",
    });
  };

  return (
    <form className="mb-4" onSubmit={handleSubmit}>
      <div className="mb-2">
        <label className="mr-2 font-bold" htmlFor="shareholderName">Shareholder Name:</label>
        <input className="border rounded px-4 py-2 w-64" type="text" id="shareholderName" name="shareholderName" value={onShareholderActivitiesUpdate[0].firstname} onChange={handleChange} />
      </div>
      <div className="mb-2">
        <label className="mr-2 font-bold" htmlFor="activityType">Activity Type:</label>
        <input className="border rounded px-4 py-2 w-64" type="text" id="activityType" name="activityType" value={formData.activityType} onChange={handleChange} />
      </div>
      <div className="mb-2">
        <label className="mr-2 font-bold" htmlFor="activityYear">Activity Year:</label>
        <input className="border rounded px-4 py-2 w-64" type="text" id="activityYear" name="activityYear" value={formData.activityYear} onChange={handleChange} />
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Add Activity</button>
    </form>
  );
};

export default ReportForm;