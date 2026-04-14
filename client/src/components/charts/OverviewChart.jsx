import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

const sampleData = [
  { name: "Mon", borrows: 10 },
  { name: "Tue", borrows: 14 },
  { name: "Wed", borrows: 8 },
  { name: "Thu", borrows: 18 },
  { name: "Fri", borrows: 21 },
  { name: "Sat", borrows: 13 },
  { name: "Sun", borrows: 9 }
];

export function OverviewChart() {
  return (
    <div className="card p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Borrowing Activity</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Weekly view of borrowing demand in the library.
        </p>
      </div>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={sampleData}>
            <CartesianGrid strokeDasharray="4 4" stroke="#cbd5e1" />
            <XAxis dataKey="name" stroke="#64748b" />
            <YAxis stroke="#64748b" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="borrows"
              stroke="#0d9488"
              strokeWidth={3}
              dot={{ fill: "#14b8a6", r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
