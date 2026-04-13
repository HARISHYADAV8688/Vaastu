type Application = {
  id: number;
  name: string;
  status: string;
};

type Props = {
  data: Application[];
  onApprove: (id: number) => void;
  onReject: (id: number) => void;
};

const ApplicationsTable = ({ data, onApprove, onReject }: Props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {data.map((app) => (
          <tr key={app.id}>
            <td>{app.id}</td>
            <td>{app.name}</td>
            <td>{app.status}</td>
            <td>
          <button onClick={() => onApprove(app.id)}>Approve</button>
<button onClick={() => onReject(app.id)}>Reject</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ApplicationsTable;