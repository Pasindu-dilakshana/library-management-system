import { OverviewChart } from "../../components/charts/OverviewChart";
import { StatCard } from "../../components/ui/StatCard";
import { TableCard } from "../../components/ui/TableCard";

const recentActivity = [
  ["Issued", "Atomic Habits", "Today, 10:30 AM"],
  ["Returned", "Clean Code", "Today, 09:10 AM"],
  ["Registered", "New member joined", "Yesterday, 05:44 PM"]
];

export function DashboardPage() {
  return (
    <div className="space-y-6">
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Total Books" value="1,240" hint="+12 added this week" />
        <StatCard label="Members" value="320" hint="+8 new registrations" />
        <StatCard label="Borrowed Books" value="76" hint="14 due this week" />
        <StatCard label="Pending Returns" value="21" hint="3 overdue today" />
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.5fr_0.9fr]">
        <OverviewChart />

        <div className="card p-6">
          <h3 className="text-lg font-semibold">Quick Insights</h3>
          <div className="mt-6 space-y-4">
            {[
              ["Most borrowed", "The Alchemist"],
              ["Top category", "Software Engineering"],
              ["Active staff", "3 online now"]
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-800"
              >
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {label}
                </p>
                <p className="mt-2 font-semibold">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TableCard title="Recent Activity" actionLabel="Export Report">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-500 dark:bg-slate-800 dark:text-slate-300">
            <tr>
              <th className="px-6 py-4 font-medium">Action</th>
              <th className="px-6 py-4 font-medium">Details</th>
              <th className="px-6 py-4 font-medium">Time</th>
            </tr>
          </thead>
          <tbody>
            {recentActivity.map(([action, details, time]) => (
              <tr
                key={`${action}-${details}`}
                className="border-t border-slate-200 dark:border-slate-800"
              >
                <td className="px-6 py-4 font-medium">{action}</td>
                <td className="px-6 py-4">{details}</td>
                <td className="px-6 py-4 text-slate-500 dark:text-slate-400">
                  {time}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableCard>
    </div>
  );
}
