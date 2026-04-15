import { useState } from "react";

const AIUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<"success" | "failure" | "">("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpload = () => {
    if (!file) {
      setResult("failure");
      setMessage("Please select a file");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const fileName = file.name.toLowerCase();

      if (fileName.includes("2006") || fileName.includes("plan")) {
        setResult("success");
        setMessage("Plan Approved");
      } else {
        setResult("failure");
        setMessage("Plan Rejected");
      }

      setLoading(false);
    }, 1000);
  };

  return (
    <div className="upload-section">
      <h2>AI-Assisted Automated Scrutiny</h2>

      <div className="upload-row">
        <input
          type="file"
          accept=".pdf"
          onChange={(e) => {
            if (e.target.files) {
              setFile(e.target.files[0]);
            }
          }}
        />

        <button className="upload-btn" onClick={handleUpload}>
          Upload
        </button>
      </div>

      {loading && (
        <div className="loader-container">
          <div className="spinner"></div>
          <p>Uploading...</p>
        </div>
      )}

      {!loading && result !== "" && (
        <div className="result-box">
          <span style={{ color: result === "success" ? "green" : "red" }}>
            {result === "success" ? "✅" : "❌"} {message}
          </span>
        </div>
      )}
    </div>
  );
};

export default AIUpload;