import { TableCard } from "../../components/ui/TableCard";

const sampleTransactions = [
  ["Atomic Habits", "Ayesha Perera", "Issued", "2026-04-14", "2026-04-21"],
  ["Clean Code", "Nimal Silva", "Returned", "2026-04-10", "2026-04-13"],
  ["Deep Work", "Kasun Fernando", "Overdue", "2026-04-01", "2026-04-08"]
];

export function TransactionsPage() {
  return (
    <div className="space-y-6">
      <div className="card p-6">
        <h2 className="text-2xl font-semibold">Borrowing Transactions</h2>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
          Issue books, return books, and monitor due dates and overdue items.
        </p>
      </div>

      <TableCard title="Transactions" actionLabel="Issue Book">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-500 dark:bg-slate-800 dark:text-slate-300">
            <tr>
              <th className="px-6 py-4 font-medium">Book</th>
              <th className="px-6 py-4 font-medium">Member</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium">Borrowed</th>
              <th className="px-6 py-4 font-medium">Due</th>
            </tr>
          </thead>
          <tbody>
            {sampleTransactions.map(([book, member, status, borrowedAt, dueAt]) => (
              <tr key={`${book}-${member}`} className="border-t border-slate-200 dark:border-slate-800">
                <td className="px-6 py-4 font-medium">{book}</td>
                <td className="px-6 py-4">{member}</td>
                <td className="px-6 py-4">{status}</td>
                <td className="px-6 py-4">{borrowedAt}</td>
                <td className="px-6 py-4">{dueAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableCard>
    </div>
  );
}
