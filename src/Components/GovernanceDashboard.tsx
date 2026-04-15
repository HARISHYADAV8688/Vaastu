import MapView from "../Components/MapView";

const GovernanceDashboard = ({ applications, onAdd }: any) => {
  return (
    <div className="map">
      <h2>Governance Dashboard</h2>

      <MapView data={applications} onAdd={onAdd} />
    </div>
  );
};

export default GovernanceDashboard;