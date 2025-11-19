export default function Footer() {
  return (
    <footer className="py-12 bg-gradient-to-t from-sky-50/50 to-transparent">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-2xl bg-white/70 backdrop-blur p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">Built with a gentle pastel palette for a calm, modern feel.</p>
          <a
            href="#get-started"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-200 via-sky-200 to-teal-200 text-slate-800 font-semibold px-5 py-2 shadow hover:shadow-md transition-shadow"
          >
            Get started
          </a>
        </div>
      </div>
    </footer>
  )
}
