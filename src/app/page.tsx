export default function Home() {
  return (
    <div className="min-h-screen bg-white text-navy">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <img src="/brand/boughtopia-lockup-bag.svg" alt="Boughtopia" className="h-8" />
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#services" className="hover:text-navy transition-colors">Services</a>
            <a href="#product" className="hover:text-navy transition-colors">Product</a>
            <a href="#about" className="hover:text-navy transition-colors">About</a>
          </nav>
          <a
            href="#contact"
            className="rounded-full bg-emerald px-5 py-2 text-sm font-semibold text-white hover:bg-emerald-dark transition-colors"
          >
            Get in touch
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block rounded-full bg-emerald/10 text-emerald-dark text-xs font-semibold tracking-wide uppercase px-3 py-1 mb-6">
            Berlin &middot; Multi-platform commerce
          </span>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Sell everywhere.
            <br />
            Understand everything.
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            Boughtopia launches and manages stores across Amazon, eBay, Etsy, Shopify, and
            TikTok Shop &mdash; and we&apos;re building the bookkeeping platform that brings
            every marketplace&apos;s revenue, fees, and payouts into one clear view.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-navy-light transition-colors"
            >
              Get in touch
            </a>
            <a
              href="#product"
              className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-navy hover:border-emerald hover:text-emerald-dark transition-colors"
            >
              Preview the dashboard
            </a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <img
            src="/brand/boughtopia-icon-bag.svg"
            alt=""
            className="w-40 h-40 md:w-56 md:h-56 opacity-90"
          />
        </div>
      </section>

      {/* KPI strip */}
      <section className="border-y border-slate-100 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            ["500+", "Product launches"],
            ["5", "Marketplaces supported"],
            ["24/7", "Dedicated support"],
            ["100%", "Transparent reporting"],
          ].map(([stat, label]) => (
            <div key={label}>
              <div className="text-3xl font-bold text-navy">{stat}</div>
              <div className="text-sm text-slate-500 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Value props */}
      <section id="services" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold mb-12 text-center">What Boughtopia does</h2>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {[
            {
              n: "01",
              title: "Sourcing & listings",
              body: "Market research, competitor analysis, and SEO-optimized listings that turn browsers into buyers.",
            },
            {
              n: "02",
              title: "Marketplace management",
              body: "Hands-on store management across Amazon, eBay, Etsy, Shopify, and TikTok Shop — inventory to customer support.",
            },
            {
              n: "03",
              title: "Financial clarity",
              body: "Our own bookkeeping dashboard reconciles revenue, fees, and payouts across every platform automatically.",
              badge: "Coming soon",
            },
            {
              n: "04",
              title: "Dedicated partnership",
              body: "A dedicated account manager, transparent reporting, and scalable engagement as your business grows.",
            },
          ].map((item) => (
            <div key={item.n} className="flex gap-5">
              <span className="text-emerald font-bold text-lg shrink-0">{item.n}</span>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  {item.badge && (
                    <span className="text-[10px] font-semibold uppercase tracking-wide text-emerald-dark bg-emerald/10 rounded-full px-2 py-0.5">
                      {item.badge}
                    </span>
                  )}
                </div>
                <p className="text-slate-600 leading-relaxed">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Platform trust strip */}
      <section className="border-y border-slate-100 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <p className="text-center text-xs font-semibold tracking-wide uppercase text-slate-400 mb-6">
            Wherever you sell, we&apos;ve got it covered
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-80">
            <img src="/brand/amazon-logo.svg" alt="Amazon" className="h-6" />
            <img src="/brand/e-bay-logo.svg" alt="eBay" className="h-6" />
            <img src="/brand/etsy.svg" alt="Etsy" className="h-6" />
            <img src="/brand/shopify-logo2.svg" alt="Shopify" className="h-5" />
            <img src="/brand/tiktok-tab.svg" alt="TikTok Shop" className="h-5" />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold mb-6 text-center">From marketplace operators to platform builders</h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          Boughtopia started in Berlin as a hands-on marketplace management business, helping
          wholesalers and manufacturers launch and grow on Amazon and eBay. Along the way, we kept
          hitting the same problem our partners did: revenue, fees, and payouts scattered across
          five different marketplace dashboards, reconciled by hand in spreadsheets.
        </p>
        <p className="text-slate-600 leading-relaxed">
          So we&apos;re building the tool we wished existed. Today, Boughtopia is two things at
          once: a dedicated marketplace management team, and the bookkeeping platform we&apos;re
          building to give every multi-platform seller one clear source of financial truth.
        </p>
      </section>

      {/* Product preview */}
      <section id="product" className="bg-navy text-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block rounded-full bg-emerald/20 text-emerald text-xs font-semibold tracking-wide uppercase px-3 py-1 mb-6">
                Coming soon
              </span>
              <h2 className="text-3xl font-bold mb-6">One dashboard for every marketplace</h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                Boughtopia&apos;s bookkeeping platform pulls orders, expenses, purchases, and
                payouts from every marketplace you sell on into a single, always up-to-date view.
              </p>
              <ul className="space-y-3 text-slate-200">
                {[
                  "Revenue, expenses, and net profit at a glance",
                  "Per-platform balances, transfers, and pending payouts",
                  "Inventory, listings, and messages in one place",
                  "Integrations for Amazon, eBay, Etsy, Shopify, and TikTok Shop",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-3">
                    <span className="text-emerald mt-1">&#10003;</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="inline-block mt-8 rounded-full bg-emerald px-6 py-3 text-sm font-semibold text-navy hover:bg-emerald-dark hover:text-white transition-colors"
              >
                Get early access
              </a>
            </div>
            <img
              src="/brand/Boughtopia-dashboard.png"
              alt="Boughtopia dashboard preview"
              className="rounded-xl shadow-2xl border border-white/10"
            />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-bold mb-4">Let&apos;s talk</h2>
          <p className="text-slate-600 mb-12">
            Whether you want help managing your marketplaces today, or early access to the
            bookkeeping platform tomorrow &mdash; we&apos;d like to hear from you.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Email</h3>
              <a href="mailto:support@boughtopia.com" className="text-emerald-dark hover:text-navy transition-colors">
                support@boughtopia.com
              </a>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <a href="tel:+4917647054749" className="text-emerald-dark hover:text-navy transition-colors">
                +491 (764) 705-4749
              </a>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Address</h3>
              <p className="text-slate-600">
                Reinickendorfer Stra&szlig;e 2<br />
                Berlin, BE 13347<br />
                Germany
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-slate-400 text-sm">&copy; 2026 Boughtopia. Multi-platform commerce, Berlin.</p>
        </div>
      </footer>
    </div>
  )
}
