import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 pt-28 pb-20 sm:pt-36 sm:pb-28">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm">
              Minimal fintech design
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-800">
              Banking made soft, simple, and serene.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
              A calm, modern platform for payments and cards. Inspired by micro1, crafted with light pastels, gentle gradients, and generous whitespace.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                id="get-started"
                href="#"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-sky-300 via-teal-300 to-emerald-300 text-slate-800 font-semibold px-6 py-3 shadow hover:shadow-md transition-shadow"
              >
                Create your free account
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-xl bg-white/80 backdrop-blur text-slate-700 font-semibold px-6 py-3 shadow-sm hover:shadow transition-shadow"
              >
                View demo
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* soft gradient veil on top of Spline to ensure readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white/60" />
    </section>
  );
}
