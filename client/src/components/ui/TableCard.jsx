export function TableCard({ title, actionLabel, children }) {
  return (
    <section className="card overflow-hidden">
      <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5 dark:border-slate-800">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Search, review, and manage records quickly.
          </p>
        </div>
        {actionLabel ? <button className="btn-primary">{actionLabel}</button> : null}
      </div>
      <div className="overflow-x-auto">{children}</div>
    </section>
  );
}
