const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-5">
      <h2 className="text-xl mb-6">Admin Panel</h2>

      <ul className="space-y-4">
        <li className="cursor-pointer">Dashboard</li>
        <li className="cursor-pointer">Applications</li>
        <li className="cursor-pointer">Violations</li>
        <li className="cursor-pointer">Map View</li>
      </ul>
    </div>
  );
};

export default Sidebar;