export function StatCard({ label, value, hint }) {
  return (
    <div className="card p-6">
      <p className="text-sm text-slate-500 dark:text-slate-400">{label}</p>
      <h3 className="mt-4 text-3xl font-semibold">{value}</h3>
      <p className="mt-2 text-sm text-teal-600 dark:text-teal-300">{hint}</p>
    </div>
  );
}
