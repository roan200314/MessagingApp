import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />

      <main>
        {/* Hero */}
        <section className="px-4 pt-12 pb-10">
          <div className="mx-auto max-w-6xl">
            <div className="grid items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-700">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  New: Message threads + smart search
                </div>

                <h1 className="mt-5 text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
                  A cleaner way to message your team and customers.
                </h1>

                <p className="mt-4 text-lg leading-relaxed text-neutral-600">
                  Your app’s messaging—done right. Fast, responsive UI with threads, typing indicators,
                  and powerful search. Built to feel premium from day one.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href="#get-started"
                    className="inline-flex items-center justify-center rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white hover:bg-neutral-800"
                  >
                    Get started
                  </a>
                  <a
                    href="#demo"
                    className="inline-flex items-center justify-center rounded-2xl border border-neutral-200 bg-white px-5 py-3 text-sm font-semibold text-neutral-800 hover:bg-neutral-50"
                  >
                    View demo
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-neutral-600">
                  <div className="flex items-center gap-2">
                    <span className="h-5 w-5 rounded-xl bg-neutral-900/10" />
                    No extra UI libraries
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-5 w-5 rounded-xl bg-neutral-900/10" />
                    Mobile-first layout
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-5 w-5 rounded-xl bg-neutral-900/10" />
                    Ready for auth & data
                  </div>
                </div>
              </div>

              {/* Hero visual */}
              <div className="lg:col-span-6">
                <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm">
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-semibold text-neutral-900">Inbox</p>
                        <p className="text-xs text-neutral-500">3 active conversations</p>
                      </div>
                      <div className="inline-flex items-center gap-2 rounded-2xl border border-neutral-200 bg-neutral-50 px-3 py-2 text-xs font-medium text-neutral-700">
                        <span className="h-2 w-2 rounded-full bg-emerald-500" />
                        Online
                      </div>
                    </div>

                    <div className="mt-6 grid gap-3">
                      {[
                        { name: "Support", msg: "Can you share the receipt?", time: "09:41", unread: 2 },
                        { name: "Design Team", msg: "New components are ready.", time: "Yesterday", unread: 0 },
                        { name: "Payments", msg: "Invoice generated successfully.", time: "Mon", unread: 1 },
                      ].map((c) => (
                        <div
                          key={c.name}
                          className="flex items-center gap-3 rounded-2xl border border-neutral-200 bg-white px-4 py-3"
                        >
                          <div className="h-10 w-10 rounded-2xl bg-neutral-200" />
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between gap-3">
                              <p className="truncate text-sm font-semibold text-neutral-900">{c.name}</p>
                              <span className="text-xs text-neutral-500">{c.time}</span>
                            </div>
                            <p className="truncate text-sm text-neutral-500">{c.msg}</p>
                          </div>
                          {c.unread > 0 && (
                            <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-neutral-900 px-2 text-xs font-semibold text-white">
                              {c.unread}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 rounded-3xl bg-neutral-50 p-4">
                      <div className="space-y-3">
                        <div className="flex justify-start">
                          <div className="max-w-[80%] rounded-3xl bg-white px-4 py-3 text-sm text-neutral-800 shadow-sm">
                            Hey! I can help set up a clean messaging flow for your app.
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <div className="max-w-[80%] rounded-3xl bg-neutral-900 px-4 py-3 text-sm text-white shadow-sm">
                            Perfect. I want it modern and fast.
                          </div>
                        </div>
                        <div className="flex justify-start">
                          <div className="inline-flex items-center gap-2 rounded-3xl bg-white px-4 py-3 text-sm text-neutral-700 shadow-sm">
                            <span className="inline-flex gap-1">
                              <span className="h-2 w-2 animate-bounce rounded-full bg-neutral-400 [animation-delay:-0.2s]" />
                              <span className="h-2 w-2 animate-bounce rounded-full bg-neutral-400 [animation-delay:-0.1s]" />
                              <span className="h-2 w-2 animate-bounce rounded-full bg-neutral-400" />
                            </span>
                            <span className="text-xs text-neutral-500">Typing…</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 flex items-center gap-2 rounded-3xl border border-neutral-200 bg-white px-3 py-2">
                        <div className="h-9 w-9 rounded-2xl bg-neutral-100" />
                        <div className="h-9 flex-1 rounded-2xl bg-neutral-50" />
                        <div className="h-9 w-20 rounded-2xl bg-neutral-900" />
                      </div>
                    </div>
                  </div>

                  <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-neutral-900/5 blur-3xl" />
                  <div className="absolute -left-20 -bottom-24 h-60 w-60 rounded-full bg-emerald-500/10 blur-3xl" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social proof */}
        <section className="px-4 pb-6">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-3 rounded-3xl border border-neutral-200 bg-white p-6 sm:grid-cols-4">
              {[
                { k: "99.9%", v: "Uptime target" },
                { k: "<150ms", v: "UI interactions" },
                { k: "4.8/5", v: "User satisfaction" },
                { k: "2 min", v: "Setup time" },
              ].map((s) => (
                <div key={s.k} className="rounded-2xl bg-neutral-50 p-4">
                  <p className="text-2xl font-semibold text-neutral-900">{s.k}</p>
                  <p className="mt-1 text-sm text-neutral-600">{s.v}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="demo" className="px-4 py-12">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight text-neutral-900">
                Everything you need for great messaging
              </h2>
              <p className="mt-3 text-neutral-600">
                Designed for speed and clarity—threads, presence, search, and a clean composer.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Threaded conversations", desc: "Keep chats organized with clear context and history." },
                { title: "Realtime presence", desc: "Show online status, typing indicators, and quick state changes." },
                { title: "Fast search", desc: "Find messages, users, and topics without lag." },
                { title: "Mobile-first UI", desc: "Feels native on small screens, spacious on desktop." },
                { title: "Accessible by default", desc: "Readable contrast, sensible focus states, keyboard-friendly." },
                { title: "Easy to theme", desc: "Neutral palette now—swap colors later without rewriting layouts." },
              ].map((f) => (
                <div key={f.title} className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
                  <div className="h-10 w-10 rounded-2xl bg-neutral-900/10" />
                  <h3 className="mt-4 text-lg font-semibold text-neutral-900">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="px-4 pb-12">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-4 lg:grid-cols-3">
              {[
                {
                  quote:
                    "The UI feels premium and the layout is exactly what we needed for customer support threads.",
                  name: "Product Lead",
                  org: "SaaS Team",
                },
                {
                  quote: "Setup was quick, and the message composer is super smooth on mobile.",
                  name: "Frontend Dev",
                  org: "Startup",
                },
                {
                  quote: "Clean, modern, and easy to extend. We themed it in a day.",
                  name: "Designer",
                  org: "Agency",
                },
              ].map((t) => (
                <div key={t.name} className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
                  <p className="text-sm leading-relaxed text-neutral-700">“{t.quote}”</p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-2xl bg-neutral-200" />
                    <div>
                      <p className="text-sm font-semibold text-neutral-900">{t.name}</p>
                      <p className="text-xs text-neutral-500">{t.org}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="px-4 pb-14">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-semibold tracking-tight text-neutral-900">Simple pricing</h2>
              <p className="text-neutral-600">Start small, scale when you’re ready.</p>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {[
                { name: "Starter", price: "€0", desc: "For prototypes and small apps.", perks: ["Basic inbox UI", "Threads", "Mobile-first layout"] },
                { name: "Pro", price: "€12", desc: "For teams shipping fast.", perks: ["Search + filters", "Presence + typing", "Better theming"], highlight: true },
                { name: "Scale", price: "€49", desc: "For production workloads.", perks: ["Advanced moderation hooks", "Analytics ready", "Priority support"] },
              ].map((p) => (
                <div
                  key={p.name}
                  className={[
                    "rounded-3xl border bg-white p-6 shadow-sm",
                    p.highlight ? "border-neutral-900" : "border-neutral-200",
                  ].join(" ")}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-neutral-900">{p.name}</p>
                      <p className="mt-1 text-sm text-neutral-600">{p.desc}</p>
                    </div>
                    {p.highlight && (
                      <span className="rounded-full bg-neutral-900 px-3 py-1 text-xs font-semibold text-white">
                        Popular
                      </span>
                    )}
                  </div>

                  <div className="mt-6">
                    <p className="text-4xl font-semibold text-neutral-900">{p.price}</p>
                    <p className="mt-1 text-xs text-neutral-500">per month</p>
                  </div>

                  <ul className="mt-6 space-y-3 text-sm text-neutral-700">
                    {p.perks.map((x) => (
                      <li key={x} className="flex items-center gap-2">
                        <span className="inline-block h-5 w-5 rounded-xl bg-emerald-500/20" />
                        {x}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#get-started"
                    className={[
                      "mt-7 inline-flex w-full items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold",
                      p.highlight
                        ? "bg-neutral-900 text-white hover:bg-neutral-800"
                        : "border border-neutral-200 bg-white text-neutral-900 hover:bg-neutral-50",
                    ].join(" ")}
                  >
                    Choose {p.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="get-started" className="px-4 pb-16">
          <div className="mx-auto max-w-6xl">
            <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-semibold tracking-tight text-neutral-900">
                  Ready to ship a messaging experience users love?
                </h2>
                <p className="mt-3 text-neutral-600">
                  Plug in your auth + backend later—start with a polished UI today.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white hover:bg-neutral-800"
                  >
                    Create an account
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center rounded-2xl border border-neutral-200 bg-white px-5 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-50"
                  >
                    Talk to sales
                  </a>
                </div>
              </div>

              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-neutral-900/5 blur-3xl" />
              <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
}
