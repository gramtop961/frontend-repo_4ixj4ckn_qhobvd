import { ShieldCheck, Sparkles, Wallet } from 'lucide-react'

export default function Features() {
  const items = [
    {
      icon: ShieldCheck,
      title: 'Safe by default',
      desc: 'Bank-grade security wrapped in a friendly, minimal interface.'
    },
    {
      icon: Wallet,
      title: 'Cards that care',
      desc: 'Issue virtual cards with spending controls in a few clicks.'
    },
    {
      icon: Sparkles,
      title: 'Quietly powerful',
      desc: 'Thoughtful features presented with clarity and warmth.'
    }
  ]

  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-b from-white to-sky-50/40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl bg-white/80 backdrop-blur p-6 shadow-sm hover:shadow transition-shadow">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-sky-200 to-indigo-200">
                <Icon className="w-5 h-5 text-indigo-700" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-800">{title}</h3>
              <p className="mt-2 text-slate-600 leading-relaxed text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
