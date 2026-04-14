import { TableCard } from "../../components/ui/TableCard";

const sampleMembers = [
  ["Ayesha Perera", "ayesha@example.com", "2 books", "Active"],
  ["Nimal Silva", "nimal@example.com", "1 book", "Active"],
  ["Kasun Fernando", "kasun@example.com", "0 books", "Inactive"]
];

export function MembersPage() {
  return (
    <div className="space-y-6">
      <div className="card p-6">
        <h2 className="text-2xl font-semibold">Member Management</h2>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
          Register members, view profiles, and monitor current borrowing
          activity.
        </p>
      </div>

      <TableCard title="Members" actionLabel="Add Member">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-500 dark:bg-slate-800 dark:text-slate-300">
            <tr>
              <th className="px-6 py-4 font-medium">Name</th>
              <th className="px-6 py-4 font-medium">Email</th>
              <th className="px-6 py-4 font-medium">Borrowed</th>
              <th className="px-6 py-4 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {sampleMembers.map(([name, email, borrowed, status]) => (
              <tr key={email} className="border-t border-slate-200 dark:border-slate-800">
                <td className="px-6 py-4 font-medium">{name}</td>
                <td className="px-6 py-4">{email}</td>
                <td className="px-6 py-4">{borrowed}</td>
                <td className="px-6 py-4">{status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableCard>
    </div>
  );
}
