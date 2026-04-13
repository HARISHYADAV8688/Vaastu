import "./dashboard.css";
import { useNavigate } from "react-router-dom";
import { useState,  } from "react";
import MapView from "../Components/MapView";
import ApplicationsTable from "../Components/ApplicationsTable";
const AdminDashboard = () => {
  const navigate = useNavigate();
const [file, setFile] = useState<File | null>(null);
const [result, setResult] = useState<string | null>(null);

const [applications, setApplications] = useState([
  { id: 101, name: "Ramesh", status: "Pending", lat: 17.385, lng: 78.4867 },
  { id: 102, name: "Suresh", status: "Approved", lat: 17.39, lng: 78.48 },
  { id: 103, name: "Mahesh", status: "Violation", lat: 17.38, lng: 78.49 },
]);
const handleAddApplication = (newApp: any) => {
  setApplications((prev) => [...prev, newApp]);
};
const stats = {
  approved: applications.filter((a) => a.status === "Approved").length,
  pending: applications.filter((a) => a.status === "Pending").length,
  violations: applications.filter((a) => a.status === "Violation").length,
};
const handleApprove = (id: number) => {
  setApplications((prev) =>
    prev.map((app) =>
      app.id === id ? { ...app, status: "Approved" } : app
    )
  );
};

const handleReject = (id: number) => {
  setApplications((prev) =>
    prev.map((app) =>
      app.id === id ? { ...app, status: "Violation" } : app
    )
  );
};

const handleUpload = () => {
  if (!file) {
    setResult("❌ Please select a file");
    return;
  }

  if (file.size > 2 * 1024 * 1024) {
    setResult("❌ File too large (max 2MB)");
    return;
  }

  const fileName = file.name.toLowerCase();

  // fake AI logic
  if (fileName.includes("plan")) {
    setResult("✅ Plan is valid");
  } else {
    setResult("❌ Invalid building plan");
  }
};


  return (
   <div className="admin-dashboard">
      
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>VAASTU</h2>
        <ul>
          <li>Dashboard</li>
          <li>Applications</li>
          <li>Violations</li>
          <li>Map View</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main">
        <header className="header">
          <button onClick={() => navigate("/Home")}>⬅ Back</button>
          <h1>Admin Dashboard</h1>
        </header>

        {/* Cards */}
     <div className="cards">
          <div className="card green">
            <h3>Approved</h3>
           <p>{stats.approved}</p>
          </div>

          <div className="card yellow">
            <h3>Pending</h3>
        <p>{stats.pending}</p>
          </div>

          <div className="card red">
            <h3>Violations</h3>
         <p>{stats.violations}</p>
          </div>
        </div>

        {/* Map */}
        <div className="map">
          <h3>Map View</h3>
  <MapView data={applications} onAdd={handleAddApplication} />
        </div>
<div style={{ marginTop: "20px" }}>
  <h3>Upload Building Plan</h3>

  <input
    type="file"
    accept=".pdf"
    onChange={(e) => {
      if (e.target.files) {
        setFile(e.target.files[0]);
      }
    }}
  />

  <button onClick={handleUpload}>Upload</button>
  {result && (
  <div
    style={{
      marginTop: "10px",
      padding: "10px",
      background: "#f1f5f9",
      borderRadius: "8px",
      fontWeight: "bold",
    }}
  >
    {result}
  </div>
)}

</div>
        {/* Table */}
    <ApplicationsTable
  data={applications}
  onApprove={handleApprove}
  onReject={handleReject}
/>

      </main>
    </div>
  );
};

export default AdminDashboard;