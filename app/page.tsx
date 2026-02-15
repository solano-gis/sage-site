import { ReactNode } from 'react';

const CHAT_URL = process.env.NEXT_PUBLIC_CHAT_URL ?? 'https://sage-web-sand.vercel.app';
const MAP_URL = process.env.NEXT_PUBLIC_MAP_URL ?? 'https://sage-map.vercel.app/map';
const DOCS_URL = process.env.NEXT_PUBLIC_DOCS_URL ?? 'https://solanogis.mintlify.app';

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
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Documentation
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

      {/* Hero */}
      <header className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
            AI-Assisted GIS for{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-emerald-600">
              Solano County
            </span>
          </h1>
          <p className="text-xl text-slate-600 mb-4 max-w-3xl mx-auto leading-relaxed">
            SAGE connects an AI assistant to Solano County&apos;s live GIS services, public records,
            and an interactive ArcGIS map. The AI and user share the same map — when the AI
            highlights parcels or toggles layers, you see it happen. When you click a feature,
            the AI sees the result.
          </p>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed mb-10">
            59 tools across four independent services. Property research, regulatory analysis,
            spatial queries, aerial vision, budget and staffing, Board decision tracking — all
            accessible through natural language.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={DOCS_URL}
              className="inline-flex items-center justify-center px-8 py-3.5 bg-teal-600 hover:bg-teal-700 text-white text-lg font-semibold rounded-xl transition-all shadow-lg shadow-teal-600/20 hover:shadow-xl hover:shadow-teal-600/30"
            >
              Read the Documentation
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-lg font-semibold rounded-xl transition-all shadow-sm"
            >
              How It Works
            </a>
          </div>
        </div>
      </header>

      {/* The Shared Map */}
      <section id="how-it-works" className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                AI That Works <em>With</em> the Map,<br />
                <span className="text-teal-600">Not Alongside It</span>
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Most AI+GIS approaches give the AI a separate renderer. SAGE takes a different approach:
                the AI controls the same ArcGIS map the user sees. It navigates, toggles layers, highlights
                parcels, and captures screenshots for its own analysis — all on the shared view.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                This means conversations are genuinely spatial. The AI can detect objects in aerial imagery,
                cross-reference what it sees with parcel data, and explain findings in context. A single
                question can trigger a multi-step analysis: navigate to a location, switch to 2025 aerials,
                identify structures, pull property records, check zoning and hazards.
              </p>
              <ul className="space-y-4">
                <FeatureItem>30+ data layers including aerials from 2004 to 2025</FeatureItem>
                <FeatureItem>AI vision detection — identifies buildings, pools, solar panels, aircraft in aerial imagery</FeatureItem>
                <FeatureItem>Autonomous tool chaining — AI decides what to query next based on what it finds</FeatureItem>
              </ul>
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
                  alt="Interactive map showing parcels highlighted in orange in Suisun Valley with zoning and boundary overlays"
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-sm font-medium">
                    Candidate parcels highlighted in Suisun Valley — AI filtered 163 parcels by zoning and flood risk
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

      {/* What It Connects */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What It Connects</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              County data is spread across many systems. SAGE queries them through a single conversation,
              connecting results that would normally require separate lookups.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <CapabilityCard
              title="Property Research"
              description="Any address or APN returns parcel details, assessment data, building characteristics, zoning, flood zone, fire hazard, elevation, special districts, and nearby amenities. Automatic jurisdiction routing — mailing address city ≠ legal jurisdiction."
            />
            <CapabilityCard
              title="Spatial Analysis"
              description="Query any visible map layer: counts, breakdowns, statistics, filtered samples. 'How many agricultural parcels over 20 acres in this view?' answered by querying the actual FeatureServer, not cached data."
            />
            <CapabilityCard
              title="Regulatory Lookup"
              description="Full-text search across the Solano County Code — zoning (166 sections), subdivisions, grading, parks, underground utilities. Returns actual legal text with section citations."
            />
            <CapabilityCard
              title="General Plan"
              description="Search the 2008 General Plan across 12 chapters: land use, agriculture, housing, transportation, resources, economic development. Find specific policies, goals, and implementation programs."
            />
            <CapabilityCard
              title="Budget & Staffing"
              description="FY2025-26 Recommended Budget by department. 3,284 county positions with FTE, job classifications, salary grades, and organizational structure."
            />
            <CapabilityCard
              title="Board of Supervisors"
              description="Search meeting agendas and minutes by topic, committee, or date. Identify past decisions, resolutions, and action items."
            />
            <CapabilityCard
              title="Aerial Vision"
              description="AI analyzes map screenshots using Gemini Flash to detect objects in aerial imagery — buildings, pools, solar panels, specific structures. Returns real-world coordinates for follow-up queries."
            />
            <CapabilityCard
              title="Driving & Proximity"
              description="Route calculations, travel time, and point-of-interest search. Schools, parks, fire stations, hospitals, libraries, and transit stops within a specified radius."
            />
          </div>
        </div>
      </section>

      {/* Example Interaction */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Example: Secondary Dwelling Eligibility
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                A single question triggers three tool calls. The AI geocodes the address, checks
                zoning with automatic jurisdiction routing, and searches the County Code — then
                synthesizes the results into a direct answer with citations.
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Notice the jurisdiction correction: the user said &ldquo;Fairfield&rdquo; but the
                parcel is actually in unincorporated Solano County. SAGE catches this because it
                checks the legal boundary, not the mailing address.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-50 to-emerald-50 rounded-2xl transform rotate-2 scale-105 opacity-70"></div>
              <div className="relative rounded-2xl shadow-2xl overflow-hidden border border-slate-700 bg-slate-800">
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

      {/* Architecture */}
      <section id="architecture" className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Architecture</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Four independent services, each deployed separately on Vercel. Each has a clear
              data scope and failure boundary — if one service goes down, the others continue working.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            <ArchCard
              name="sage-web"
              count={0}
              description="Chat UI and AI orchestration. Connects to both MCP servers, embeds the interactive map, manages screenshots for AI vision. This is where authentication, disclaimers, and rate limiting live."
              color="violet"
            />
            <ArchCard
              name="sage-gis"
              count={28}
              description="Spatial queries — parcels, zoning, hazards, elevation, directions, map rendering, image generation. Queries public ArcGIS REST services. Read-only."
              color="blue"
            />
            <ArchCard
              name="sage-gov"
              count={31}
              description="Public records — budget, county code, general plan, org chart, meeting minutes. All data is static JSON bundled at deploy time. Zero external API calls at runtime."
              color="emerald"
            />
            <ArchCard
              name="sage-map"
              count={0}
              description="Interactive ArcGIS map (@arcgis/core 4.34). Embedded as iframe, controlled via postMessage. No AI, no MCP tools — pure visualization."
              color="amber"
            />
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <h3 className="font-semibold text-slate-900 mb-4">Key design decisions</h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-teal-600 mt-0.5">•</span>
                <span><strong className="text-slate-800">MCP protocol</strong> — sage-gis and sage-gov are standard Model Context Protocol servers. Any MCP-compatible AI client can consume them, not just sage-web.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-600 mt-0.5">•</span>
                <span><strong className="text-slate-800">No shared database</strong> — Services communicate only through MCP tool calls and postMessage. No shared state to corrupt.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-600 mt-0.5">•</span>
                <span><strong className="text-slate-800">Public data only</strong> — Every data source SAGE queries is already publicly available. No access to internal networks, employee records, or financial systems.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-600 mt-0.5">•</span>
                <span><strong className="text-slate-800">Model-agnostic tools</strong> — The MCP servers work with Claude, GPT, Gemini, or any future model. The AI provider is a configuration choice, not a structural dependency.</span>
              </li>
            </ul>
            <div className="mt-5 pt-4 border-t border-slate-100">
              <a href={DOCS_URL} className="text-sm font-medium text-teal-600 hover:text-teal-700 transition-colors">
                Full architecture documentation &rarr;
              </a>
            </div>
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
            <p className="text-sm text-slate-500">
              Built by Ryan Pream.
            </p>
            <p className="text-sm text-slate-600 mt-1">
              Not affiliated with Solano County. For demonstration purposes only.
            </p>
          </div>
          <div className="text-sm text-slate-500 text-center sm:text-right">
            <p>Data: Solano County GIS, CAL FIRE, FEMA, CGS, USGS</p>
            <p className="mt-1">
              <a href={DOCS_URL} className="text-slate-400 hover:text-slate-300 transition-colors">Documentation</a>
              <span className="mx-2 text-slate-700">·</span>
              <a href="https://github.com/solano-gis" className="text-slate-400 hover:text-slate-300 transition-colors">GitHub</a>
            </p>
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

function CapabilityCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white rounded-xl p-5 border border-slate-200 hover:border-slate-300 transition-all">
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
