const CHAT_URL = process.env.NEXT_PUBLIC_CHAT_URL ?? 'https://sage-web-sand.vercel.app';
const MAP_URL = process.env.NEXT_PUBLIC_MAP_URL ?? 'https://sage-map.vercel.app/map';
const DOCS_URL = process.env.NEXT_PUBLIC_DOCS_URL ?? 'https://solanogis.mintlify.app';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-brand-light selection:text-brand">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/sage-logo.svg" alt="" className="h-7 w-auto" aria-hidden="true" />
          </div>
          <div className="flex items-center gap-5">
            <a
              href={DOCS_URL}
              className="text-sm font-medium text-slate-500 hover:text-brand transition-colors"
            >
              Docs
            </a>
            <a
              href={MAP_URL}
              className="text-sm font-medium text-slate-500 hover:text-brand transition-colors hidden sm:block"
            >
              Map
            </a>
            <a
              href="https://github.com/solano-gis"
              className="text-sm font-medium text-slate-500 hover:text-brand transition-colors hidden sm:block"
            >
              GitHub
            </a>
            <a
              href={CHAT_URL}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-brand hover:bg-brand-hover text-white text-sm font-medium rounded-lg transition-colors"
            >
              Open SAGE
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero — app-focused, not text-focused */}
      <header className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-3">
              AI-Assisted GIS for Solano County
            </h1>
            <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
              An AI assistant connected to the county&apos;s live GIS services, public records,
              and an interactive ArcGIS map. Ask questions in plain language — the AI queries
              real data and shows results on a shared map.
            </p>
          </div>

          {/* App screenshots as the hero */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/sage-empty-state.png"
                alt="SAGE start screen showing the search interface and suggested questions"
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg border border-slate-200">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/sage-aerial-analysis.png"
                alt="SAGE analyzing downtown Fairfield aerial imagery alongside a split-pane interactive map"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="flex justify-center gap-3 mt-8">
            <a
              href={CHAT_URL}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-brand hover:bg-brand-hover text-white text-sm font-semibold rounded-lg transition-colors"
            >
              Try SAGE
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href={DOCS_URL}
              className="inline-flex items-center px-6 py-2.5 text-sm font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
            >
              Documentation
            </a>
          </div>
        </div>
      </header>

      {/* What it does — straightforward description */}
      <section className="py-16 bg-brand-light/50 border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-slate-900 mb-2">How it works</h2>
          <p className="text-slate-500 mb-10 max-w-2xl">
            The AI controls the same ArcGIS map you see. When it navigates, toggles layers, or
            highlights parcels, you watch it happen. When you click a feature, the AI sees the result.
          </p>

          <div className="grid sm:grid-cols-3 gap-6">
            <InfoCard
              title="Shared map"
              description="AI and user look at the same interactive ArcGIS map. Every map command returns a screenshot the AI analyzes before responding."
            />
            <InfoCard
              title="Real data"
              description="Queries live ArcGIS REST services and local datasets. Parcels, zoning, hazards, elevation, aerials from 2004 to 2025."
            />
            <InfoCard
              title="Tool chaining"
              description="A single question can trigger multiple lookups. The AI decides what to query next based on what it finds."
            />
          </div>
        </div>
      </section>

      {/* Data sources */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-slate-900 mb-2">What it connects</h2>
          <p className="text-slate-500 mb-10 max-w-2xl">
            County data is spread across many systems. SAGE queries them through a single
            conversation, connecting results that would normally require separate lookups.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <DataCard title="Property" items={['Parcel details & assessment', 'Building characteristics', 'Zoning & jurisdiction', 'Flood zone & fire hazard']} />
            <DataCard title="Regulations" items={['County Code (166 zoning sections)', 'General Plan (12 chapters)', 'Special districts', 'Development standards']} />
            <DataCard title="Spatial" items={['30+ map layers', 'Aerial imagery 2004\u20132025', 'Object detection (AI vision)', 'Elevation & proximity']} />
            <DataCard title="Government" items={['FY2025-26 budget', '3,284 county positions', 'Board meeting minutes', 'Org chart & staffing']} />
          </div>
        </div>
      </section>

      {/* Example */}
      <section className="py-16 bg-brand-light/50 border-y border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-3">
                Example: Secondary dwelling eligibility
              </h2>
              <p className="text-slate-500 mb-4 leading-relaxed">
                One question triggers three tool calls. The AI geocodes the address, checks
                zoning with automatic jurisdiction routing, and searches the County Code — then
                synthesizes the results.
              </p>
              <p className="text-slate-500 leading-relaxed">
                Notice the jurisdiction correction: the user said &ldquo;Fairfield&rdquo; but the
                parcel is in unincorporated Solano County. SAGE checks the legal boundary, not
                the mailing address.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden border border-slate-700 bg-slate-800 shadow-lg text-sm">
              <div className="px-4 py-3 border-b border-slate-700">
                <p className="text-slate-200">
                  Can I build a secondary dwelling at 2847 Rockville Road, Fairfield?
                </p>
              </div>
              <div className="px-4 py-2.5 border-b border-slate-700 flex flex-wrap gap-1.5">
                {['Geocode Address', 'Get Zoning', 'Search County Code'].map((tool) => (
                  <span
                    key={tool}
                    className="inline-flex items-center gap-1.5 px-2 py-1 rounded text-xs font-medium bg-slate-700 text-slate-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                    {tool}
                  </span>
                ))}
              </div>
              <div className="px-4 py-3 text-slate-300 leading-relaxed space-y-2">
                <p><span className="text-slate-100 font-medium">Address:</span> 2849 Rockville Road (APN 015-028-0080)</p>
                <p><span className="text-slate-100 font-medium">Jurisdiction:</span> Unincorporated Solano County <span className="text-amber-400">(not City of Fairfield)</span></p>
                <p><span className="text-slate-100 font-medium">Zoning:</span> ASV-20 (Suisun Valley Agriculture, 20-acre min)</p>
                <p>Secondary dwellings are <span className="text-brand-muted font-medium">permitted</span> in agricultural districts for family members per County Code Section 28.21.11.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture — compact */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-slate-900 mb-2">Architecture</h2>
          <p className="text-slate-500 mb-8 max-w-2xl">
            Four services, each deployed independently on Vercel. Standard MCP protocol — any
            compatible AI client can connect to the tool servers.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <ServiceCard name="sage-web" role="Chat UI + AI orchestration" tools={0} />
            <ServiceCard name="sage-gis" role="Spatial queries & maps" tools={28} />
            <ServiceCard name="sage-gov" role="Public records & budget" tools={31} />
            <ServiceCard name="sage-map" role="Interactive ArcGIS map" tools={0} />
          </div>

          <div className="bg-slate-50 rounded-xl border border-slate-200 p-5 text-sm text-slate-500 space-y-2">
            <p><span className="text-slate-700 font-medium">MCP protocol</span> — sage-gis and sage-gov are standard Model Context Protocol servers usable by any MCP-compatible client.</p>
            <p><span className="text-slate-700 font-medium">Public data only</span> — every source SAGE queries is already publicly available. No internal network access.</p>
            <p><span className="text-slate-700 font-medium">Model-agnostic</span> — works with Claude, GPT, and Gemini. The AI provider is a configuration choice.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-dark py-10 border-t border-brand-dark">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-center sm:text-left">
            <div className="flex items-center gap-2 justify-center sm:justify-start mb-1.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/sage-logo.svg" alt="SAGE" className="h-5 w-auto brightness-200" />
            </div>
            <p className="text-sm text-slate-400">
              Built by Ryan Pream
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Not affiliated with Solano County. For demonstration purposes.
            </p>
          </div>
          <div className="text-xs text-slate-500 text-center sm:text-right space-y-1">
            <p>Data: Solano County GIS, CAL FIRE, FEMA, CGS, USGS</p>
            <p className="flex items-center gap-2 justify-center sm:justify-end">
              <a href={DOCS_URL} className="text-slate-400 hover:text-slate-300 transition-colors">Documentation</a>
              <span className="text-slate-600">&middot;</span>
              <a href="https://github.com/solano-gis" className="text-slate-400 hover:text-slate-300 transition-colors">GitHub</a>
              <span className="text-slate-600">&middot;</span>
              <a href={MAP_URL} className="text-slate-400 hover:text-slate-300 transition-colors">Map</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ── Helper components ─────────────────────────────────────────────── */

function InfoCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white rounded-xl p-5 border border-slate-200">
      <h3 className="font-semibold text-slate-900 mb-1.5">{title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
    </div>
  );
}

function DataCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-white rounded-xl p-4 border border-slate-200">
      <h3 className="font-semibold text-brand text-sm mb-2">{title}</h3>
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item} className="text-xs text-slate-500 flex items-start gap-1.5">
            <span className="text-brand-accent mt-0.5 text-[10px]">&#9679;</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ServiceCard({ name, role, tools }: { name: string; role: string; tools: number }) {
  return (
    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
      <div className="flex items-center gap-2 mb-1">
        <span className="font-mono text-sm font-bold text-slate-800">{name}</span>
        {tools > 0 && (
          <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-brand-light text-brand border border-brand-muted/30">
            {tools} tools
          </span>
        )}
      </div>
      <p className="text-xs text-slate-500">{role}</p>
    </div>
  );
}
