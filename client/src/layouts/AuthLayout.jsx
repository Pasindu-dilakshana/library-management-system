import { Outlet } from "react-router-dom";

export function AuthLayout() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-hero-mesh px-4 py-10 dark:bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(13,148,136,0.16),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.12),transparent_28%)]" />
      <div className="relative z-10 w-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/70 bg-white/70 shadow-soft backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
        <div className="grid min-h-[700px] lg:grid-cols-[1.1fr_0.9fr]">
          <section className="hidden flex-col justify-between bg-slate-950 px-10 py-12 text-white lg:flex">
            <div>
              <div className="inline-flex rounded-full border border-white/20 px-4 py-2 text-sm text-teal-200">
                Production-ready library workspace
              </div>
              <h1 className="mt-8 text-5xl font-semibold leading-tight">
                Modern Library Management for teams that need clarity.
              </h1>
              <p className="mt-6 max-w-lg text-base text-slate-300">
                Manage books, borrowers, lending flows, reports, and activity
                from one clean dashboard.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                ["1,240", "Cataloged books"],
                ["320", "Active members"],
                ["76", "Books on loan"],
                ["99.9%", "Uptime-ready structure"]
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-3xl border border-white/10 bg-white/5 p-5"
                >
                  <p className="text-3xl font-semibold">{value}</p>
                  <p className="mt-2 text-sm text-slate-400">{label}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="flex items-center justify-center px-6 py-10 sm:px-8">
            <Outlet />
          </section>
        </div>
      </div>
    </div>
  );
}
