import ApplicationsTable from "../Components/ApplicationsTable";

const GISMonitoring = ({ applications, onApprove, onReject }: any) => {
  return (
    <div className="table-section">
      <h2>GIS & Satellite Monitoring</h2>

      <ApplicationsTable
        data={applications}
        onApprove={onApprove}
        onReject={onReject}
      />
    </div>
  );
};

export default GISMonitoring;