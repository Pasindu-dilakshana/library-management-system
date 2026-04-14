import { TableCard } from "../../components/ui/TableCard";

const sampleBooks = [
  ["The Pragmatic Programmer", "Andrew Hunt", "Programming", "Available"],
  ["Deep Work", "Cal Newport", "Productivity", "Borrowed"],
  ["Refactoring", "Martin Fowler", "Engineering", "Available"]
];

export function BooksPage() {
  return (
    <div className="space-y-6">
      <div className="card bg-hero-mesh p-6">
        <h2 className="text-2xl font-semibold">Book Management</h2>
        <p className="mt-2 max-w-2xl text-sm text-slate-600 dark:text-slate-300">
          Manage the full catalog, search by title or author, and track book
          availability in real time.
        </p>
      </div>

      <TableCard title="Library Catalog" actionLabel="Add Book">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-500 dark:bg-slate-800 dark:text-slate-300">
            <tr>
              <th className="px-6 py-4 font-medium">Title</th>
              <th className="px-6 py-4 font-medium">Author</th>
              <th className="px-6 py-4 font-medium">Category</th>
              <th className="px-6 py-4 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {sampleBooks.map(([title, author, category, status]) => (
              <tr key={title} className="border-t border-slate-200 dark:border-slate-800">
                <td className="px-6 py-4 font-medium">{title}</td>
                <td className="px-6 py-4">{author}</td>
                <td className="px-6 py-4">{category}</td>
                <td className="px-6 py-4">{status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableCard>
    </div>
  );
}
