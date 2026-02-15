import { ReactNode } from 'react';

const CHAT_URL = process.env.NEXT_PUBLIC_CHAT_URL ?? 'https://sage-web-sand.vercel.app';
const MAP_URL = process.env.NEXT_PUBLIC_MAP_URL ?? 'https://sage-map.vercel.app/map';
const DOCS_URL = process.env.NEXT_PUBLIC_DOCS_URL ?? '#';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-teal-100 selection:text-teal-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg sm:text-xl font-bold text-teal-700 tracking-tight">
              SAGE
            </span>
            <span className="hidden sm:inline text-sm text-slate-400">Solano Agent for Geographic Enquiry</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={DOCS_URL}
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors hidden sm:block"
            >
              Docs
            </a>
            <a
              href={MAP_URL}
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors hidden sm:block"
            >
              Map
            </a>
            <a
              href={CHAT_URL}
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium rounded-lg transition-all shadow-sm hover:shadow"
            >
              <span>Open SAGE</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
            SAGE v1.0
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
            The Intelligence Layer for{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-emerald-600">
              Solano County
            </span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            An AI that understands Solano County the way a veteran employee does — parcels, zoning, hazards, regulations, budget — and can explain any location in that full context.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={CHAT_URL}
              className="inline-flex items-center justify-center px-8 py-3.5 bg-teal-600 hover:bg-teal-700 text-white text-lg font-semibold rounded-xl transition-all shadow-lg shadow-teal-600/20 hover:shadow-xl hover:shadow-teal-600/30 hover:-translate-y-0.5"
            >
              Try SAGE
            </a>
            <a
              href="#capabilities"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-lg font-semibold rounded-xl transition-all shadow-sm"
            >
              See Capabilities
            </a>
          </div>
        </div>
      </header>

      {/* The Integration Layer Concept */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Not just data retrieval. <br />
                <span className="text-teal-600">True Integration.</span>
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                In the 90s, GIS solved the spatial silo problem by using <strong>location</strong> as the common key.
                Today, SAGE solves the operational silo problem using <strong>natural language</strong>.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Property data lives in the Assessor's system. Zoning in Planning. Flood zones at FEMA. Fire hazard at CAL FIRE. The County Code in one database, the General Plan in another, the budget in a third. SAGE connects them all — so one question can pull from six sources without six separate lookups.
              </p>
              <ul className="space-y-4">
                <FeatureItem>Parcel queries that include hazards, districts, and code citations</FeatureItem>
                <FeatureItem>Permit research that traces policy to regulation to budget</FeatureItem>
                <FeatureItem>Institutional knowledge encoded in tool behavior, not just documentation</FeatureItem>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-50 to-emerald-50 rounded-2xl transform rotate-3 scale-105 opacity-70"></div>
              <div className="relative rounded-2xl shadow-2xl overflow-hidden border border-slate-700 bg-slate-800">
                {/* User Query */}
                <div className="px-5 py-4 border-b border-slate-700">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5" style={{ backgroundColor: 'rgb(0, 151, 129)' }}>
                      U
                    </div>
                    <p className="text-[15px] leading-relaxed text-slate-100">
                      Can I build a secondary dwelling at 2847 Rockville Road, Fairfield?
                    </p>
                  </div>
                </div>

                {/* Tool Calls */}
                <div className="px-5 py-3 border-b border-slate-700 flex flex-wrap gap-2">
                  {['Geocode Address', 'Get Zoning', 'Search County Code'].map((tool) => (
                    <div
                      key={tool}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium bg-slate-700 text-slate-200"
                    >
                      <span className="w-2 h-2 rounded-full flex-shrink-0 bg-emerald-500" />
                      {tool}
                    </div>
                  ))}
                </div>

                {/* Result */}
                <div className="px-5 py-4 text-[15px] leading-relaxed text-slate-300">
                  <p className="mb-3">
                    <strong className="text-slate-100">Matched Address:</strong> 2849 Rockville Road (APN 015-028-0080)
                  </p>
                  <p className="mb-3">
                    <strong className="text-slate-100">Jurisdiction:</strong> Unincorporated Solano County <span className="text-amber-400">(not City of Fairfield)</span>
                  </p>
                  <p className="mb-3">
                    <strong className="text-slate-100">Zoning:</strong> ASV-20 (Suisun Valley Agriculture, 20-acre minimum)
                  </p>
                  <p>
                    Secondary dwellings are <strong className="text-emerald-400">permitted</strong> in agricultural districts for family members. County Code Section 28.21.11 supports the family farm by allowing secondary dwellings as affordable housing for relatives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Scenarios */}
      <section id="capabilities" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Built for Real County Workflows</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              SAGE handles the edge cases that trip up basic LLMs — like mailing addresses that don't match legal jurisdictions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ScenarioCard
              icon="&#9878;"
              title="Jurisdiction Routing"
              question="What's the zoning for 2500 Cordelia Road in Fairfield?"
              result="Identifies the parcel is actually in Unincorporated Solano County (ISD), not City of Fairfield. Routes query to County zoning tools instead of City tools. Prevents misinformation."
            />
            <ScenarioCard
              icon="&#127968;"
              title="Short-Term Rental Eligibility"
              question="Can I rent my cabin near Green Valley as an Airbnb?"
              result="Checks fire hazard zone (Very High = prohibited, High = conditional), confirms structure isn't an ADU or secondary dwelling, verifies road access. Multi-factor eligibility — not a simple yes/no."
            />
            <ScenarioCard
              icon="&#9889;"
              title="Multi-Source Analysis"
              question="Give me a complete property profile for 4300 Suisun Valley Road."
              result="Pulls parcel data, zoning, flood zone, fire hazard, special districts, and relevant General Plan policies in one query. Synthesizes 6 data sources into a single assessment."
            />
          </div>
        </div>
      </section>

      {/* What You Can Do */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What You Can Do With SAGE</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Not just data access — integrated analysis across county systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <CapabilityCard
              title="Site Selection & Feasibility"
              description="Complex site queries that would take hours become seconds. 'Find 20+ acre parcels in Suisun Valley zoned for wineries, outside flood zones, with road frontage' — answered with full regulatory context."
            />
            <CapabilityCard
              title="Zoning & Permit Analysis"
              description="Ask 'what permits does a winery need?' and get a matrix by size, grape sourcing, and zone — synthesized from 365 pages of zoning regulations. Not keyword search. Actual regulatory analysis."
            />
            <CapabilityCard
              title="Regulation Lookup"
              description="Search the County Code by keyword and get the actual legal text. ADU requirements, subdivision exemptions, agritourism rules — cited by section number."
            />
            <CapabilityCard
              title="Policy-to-Code Tracing"
              description="Connect General Plan goals to their implementing code sections. Useful for staff reports, CEQA findings, and explaining 'why' behind decisions."
            />
            <CapabilityCard
              title="Staffing & Budget Analysis"
              description="Find how many positions exist county-wide by title, compare department budgets, or trace resources to functions. Data-driven justifications for Board presentations."
            />
            <CapabilityCard
              title="Visual Map Interpretation"
              description="AI that looks at maps, not just queries data. 'Where exactly does the flood zone cross this parcel?' answered by analyzing the actual overlay — not just returning a zone code."
            />
            <CapabilityCard
              title="Board Decision Tracking"
              description="Search BOS and ReGIS meeting minutes by topic. Find what was already approved, link resolutions to implementation, avoid redundant requests."
            />
            <CapabilityCard
              title="Complete Property Profiles"
              description="One address returns ownership, assessed value, zoning, flood zone, fire hazard, all serving districts, and relevant policies. No more querying six different layers."
            />
          </div>
        </div>
      </section>

      {/* Site Selection Demo */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-xs font-semibold uppercase tracking-wider mb-4">
                AI + Interactive Map
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                From Analysis to Exploration
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                SAGE doesn't just answer questions — it sets you up for discovery. The AI and user share the same interactive map, with the AI controlling layers, highlights, and navigation while you explore alongside it.
              </p>

              <div className="bg-white rounded-xl border border-slate-200 p-5 mb-6 shadow-sm">
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wide mb-2">Example Query</p>
                <p className="text-slate-800 font-medium">
                  "Find 20+ acre parcels in Suisun Valley zoned for wineries, outside flood zones."
                </p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center text-sm font-bold text-teal-700">1</div>
                  <p className="text-slate-600"><strong className="text-slate-800">Search</strong> — Queries 163 matching parcels from Assessor data</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center text-sm font-bold text-teal-700">2</div>
                  <p className="text-slate-600"><strong className="text-slate-800">Filter</strong> — Checks flood zones, eliminates high-risk parcels</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center text-sm font-bold text-teal-700">3</div>
                  <p className="text-slate-600"><strong className="text-slate-800">Visualize</strong> — Highlights candidates on the shared map for you to explore</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <a
                href={`${MAP_URL}?preset=planning&apn=0027030010,0027040010`}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl overflow-hidden shadow-2xl border border-slate-200 hover:shadow-3xl transition-shadow group"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/site-selection-map.png"
                  alt="Interactive map showing multiple parcels highlighted in orange, zoomed to fit all candidates in Suisun Valley"
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-sm font-medium">
                    Two candidate parcels highlighted in Suisun Valley — 80 and 36 acres, both ASV-20 zoning
                  </p>
                  <p className="text-white/70 text-xs mt-1 group-hover:text-white transition-colors">
                    Click to open interactive map &rarr;
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Architecture</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Four independent services, each with a clear purpose and failure boundary.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <ArchCard
              name="sage-gov"
              count={31}
              description="Public records — budget, county code, general plan, org chart, meeting minutes. All local data, zero external APIs."
              color="emerald"
            />
            <ArchCard
              name="sage-gis"
              count={28}
              description="Spatial queries — parcels, zoning, hazards, directions, static maps. Queries ArcGIS REST services."
              color="blue"
            />
            <ArchCard
              name="sage-map"
              count={0}
              description="Interactive ArcGIS map embedded as iframe. AI and user share the same view via postMessage."
              color="amber"
            />
            <ArchCard
              name="sage-web"
              count={0}
              description="Chat UI + AI orchestration. Connects to both MCP servers, embeds the map, manages screenshots."
              color="violet"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-12 border-t border-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-6">
          <div>
            <div className="flex items-center gap-2 justify-center sm:justify-start mb-2">
              <span className="text-lg font-bold text-slate-200">SAGE</span>
              <span className="text-slate-600">/</span>
              <span className="text-sm text-slate-400">Solano Agent for Geographic Enquiry</span>
            </div>
            <p className="text-sm text-slate-600">
              Built by Ryan Pream.
            </p>
          </div>
          <div className="text-sm text-slate-600">
            <p>Data sources: Solano County, CAL FIRE, FEMA, CGS.</p>
            <p className="mt-1 opacity-60">Not affiliated with Solano County. For demonstration purposes only.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center mt-0.5">
        <svg className="w-4 h-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span className="text-slate-700 font-medium">{children}</span>
    </li>
  );
}

function ScenarioCard({ icon, title, question, result }: { icon: string; title: string; question: string; result: string }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
      <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-2xl mb-4">
        <span dangerouslySetInnerHTML={{ __html: icon }} />
      </div>
      <h3 className="font-bold text-slate-900 mb-3">{title}</h3>
      <div className="bg-slate-50 rounded-lg p-3 mb-4">
        <p className="text-sm font-medium text-slate-700 font-mono">&ldquo;{question}&rdquo;</p>
      </div>
      <p className="text-sm text-slate-600 leading-relaxed">
        <span className="font-semibold text-teal-700">Result:</span> {result}
      </p>
    </div>
  );
}

function CapabilityCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 hover:border-teal-200 hover:bg-teal-50/30 transition-all">
      <h4 className="font-semibold text-slate-900 mb-2">{title}</h4>
      <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
}

function ArchCard({ name, count, description, color }: { name: string; count: number; description: string; color: string }) {
  const colorMap: Record<string, string> = {
    emerald: 'bg-emerald-50 border-emerald-200 text-emerald-700',
    blue: 'bg-blue-50 border-blue-200 text-blue-700',
    amber: 'bg-amber-50 border-amber-200 text-amber-700',
    violet: 'bg-violet-50 border-violet-200 text-violet-700',
  };
  return (
    <div className={`rounded-xl p-5 border ${colorMap[color]}`}>
      <div className="flex items-center gap-3 mb-2">
        <h4 className="font-mono font-bold">{name}</h4>
        {count > 0 && (
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-white/60 border border-current/20">
            {count} tools
          </span>
        )}
      </div>
      <p className="text-sm opacity-80 leading-relaxed">{description}</p>
    </div>
  );
}
