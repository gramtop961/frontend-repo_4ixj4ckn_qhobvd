import { CreditCard } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full py-5">
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-sky-200 to-indigo-200 shadow-sm">
            <CreditCard className="w-5 h-5 text-indigo-700" />
          </span>
          <span className="text-slate-800 font-semibold tracking-tight">microfin</span>
        </div>
        <nav className="flex items-center gap-3">
          <a href="#" className="text-slate-500 hover:text-slate-700 text-sm">Pricing</a>
          <a href="#" className="text-slate-500 hover:text-slate-700 text-sm">Features</a>
          <a href="#" className="text-slate-500 hover:text-slate-700 text-sm">Docs</a>
          <a
            href="#get-started"
            className="ml-2 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-300 to-teal-300 text-slate-800 font-semibold px-4 py-2 shadow-sm hover:shadow md:transition-all"
          >
            Get started
          </a>
        </nav>
      </div>
    </header>
  );
}
