/* ============================================================================
   MEDIA PAGE — CONTENT DATA
   ============================================================================
   Everything on /media that repeats (logos, topics, appearances, conferences,
   testimonials, press kit assets, FAQs) is generated from the arrays below.

   TO ADD, EDIT, OR REMOVE CONTENT: change the data here only. Do not edit
   media.html's markup — the render functions in media.html read these
   arrays and rebuild the page sections automatically on load.

   Ordering: array order = display order (first item shown first).
   ============================================================================ */


/* ----------------------------------------------------------------------
   ICONS
   Small inline-SVG line icons used by the Topics grid. Each is a bare
   set of SVG child elements (no <svg> wrapper — that's added by the
   render function) using stroke="currentColor" so it inherits the gold
   accent color automatically. Add a new icon here, then reference its
   key from a topic's "icon" field.
   ---------------------------------------------------------------------- */
const mediaIcons = {
  grid: '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>',
  coin: '<circle cx="12" cy="12" r="9"/><path d="M8 12h8M8 9h5M8 15h5"/>',
  layers: '<path d="M12 4 3 9l9 5 9-5-9-5z"/><path d="M3 14l9 5 9-5"/>',
  cube: '<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z"/><path d="M12 12v9M12 12l8-4.5M12 12l-8-4.5"/>',
  exchange: '<path d="M4 8h13M17 8l-4-4M17 8l-4 4"/><path d="M20 16H7M7 16l4-4M7 16l4 4"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 3.8 5.7 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.7-3.8-9s1.3-6.5 3.8-9z"/>',
  bank: '<path d="M3 10l9-6 9 6"/><path d="M5 10v9M9.5 10v9M14.5 10v9M19 10v9"/><path d="M3 19h18"/>',
  cpu: '<rect x="7" y="7" width="10" height="10" rx="1"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M6 6l1.5 1.5M18 6l-1.5 1.5M6 18l1.5-1.5M18 18l-1.5-1.5"/>',
  terminal: '<rect x="3" y="4" width="18" height="16" rx="1"/><path d="M7 9l3 3-3 3M13 15h4"/>',
  shield: '<path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z"/><path d="M9 12l2 2 4-4"/>',
  trending: '<path d="M4 16l5-6 4 3 6-8"/><path d="M15 5h4v4"/>',
  lock: '<rect x="5" y="11" width="14" height="9" rx="1"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
  building: '<path d="M4 21V7l8-4 8 4v14"/><path d="M4 21h16M9 21v-6h6v6M9 11h.01M15 11h.01M9 15h.01M15 15h.01"/>',
  scale: '<path d="M12 3v18M7 7l-4 6a4 4 0 0 0 8 0l-4-6zM17 7l-4 6a4 4 0 0 0 8 0l-4-6z"/><path d="M5 21h14"/>',
  compass: '<circle cx="12" cy="12" r="9"/><path d="M15 9l-2 6-6 2 2-6 6-2z"/>'
};


/* ----------------------------------------------------------------------
   FEATURED IN — logo wall
   Shape: { name: string, url: string, visible: boolean }
   Rendered as text wordmarks (no image files required). Leave url as "#"
   until there's a real link — media.html renders "#" as plain
   (non-clickable) text instead of a dead link. To use a real logo image
   instead of a text wordmark, add a "logo" field with an image path and
   update renderLogos() in media.html to prefer it when present.

   "visible: false" hides an entry from the public page while keeping the
   record in place. Used below for development placeholders that don't
   represent a real logo/organization yet — remove the flag (or the
   whole "visible" key) once the entry is real.
   ---------------------------------------------------------------------- */
const featuredInLogos = [
  { name: 'X Spaces', url: 'https://x.com/MrManXRP' },
  { name: '[Podcast Name]', url: '#', visible: false },
  { name: '[Publication Name]', url: '#', visible: false },
  { name: '[YouTube Channel]', url: '#', visible: false },
  { name: '[Conference Name]', url: '#', visible: false },
  { name: '[Partner Organization]', url: '#', visible: false }
];


/* ----------------------------------------------------------------------
   TOPICS
   Shape: { title: string, icon: key into mediaIcons, description: string }
   Reorder, add, or remove freely — the grid reflows automatically.
   ---------------------------------------------------------------------- */
const mediaTopics = [
  { title: 'Financial Market Infrastructure', icon: 'grid', description: 'How legacy rails, clearing systems, and settlement networks are being replaced by modern infrastructure.' },
  { title: 'Stablecoins', icon: 'coin', description: 'The mechanics, risks, and growing role of stablecoins within global payment systems.' },
  { title: 'Digital Assets', icon: 'layers', description: 'How digital assets are classified, custodied, and integrated into existing financial structures.' },
  { title: 'Tokenization', icon: 'cube', description: 'The migration of real-world assets onto programmable, on-chain infrastructure.' },
  { title: 'Payment Systems', icon: 'exchange', description: 'ISO 20022 migration and the modernization of how value moves between institutions.' },
  { title: 'Cross-Border Settlement', icon: 'globe', description: 'How international settlement is being redesigned for speed, transparency, and cost.' },
  { title: 'Central Bank Digital Currency Research', icon: 'bank', description: 'Jurisdiction-by-jurisdiction analysis of central bank digital currency development.' },
  { title: 'AI and Financial Intelligence', icon: 'cpu', description: 'Applying AI to continuous market monitoring, research synthesis, and decision support.' },
  { title: 'CapitalOS', icon: 'terminal', description: 'The operating system approach to structuring, tracking, and protecting long-term capital.' },
  { title: 'Risk Analysis', icon: 'shield', description: 'Frameworks for evaluating structural risk separate from short-term price volatility.' },
  { title: 'Macro Economics', icon: 'trending', description: 'Reading monetary policy, liquidity cycles, and macro signals as they relate to positioning.' },
  { title: 'Self Custody', icon: 'lock', description: 'Practical approaches to holding and securing digital assets independently.' },
  { title: 'Institutional Adoption', icon: 'building', description: 'How banks, asset managers, and corporates are entering digital asset markets.' },
  { title: 'Regulatory Change', icon: 'scale', description: 'Tracking legislation and policy shaping the future of digital assets and payments.' },
  { title: 'How We Analyze Change', icon: 'compass', description: 'The research process behind separating signal from noise in a fast-moving system.' }
];


/* ----------------------------------------------------------------------
   FEATURED APPEARANCES (podcasts, X Spaces, YouTube, interviews)
   Shape: {
     id: string,                stable short slug, used only for structured
                                 data / future linking — not displayed
     title: string,             published episode/video title
     org: string,               organization the appearance is with
     date: string,               display string, e.g. "February 24, 2025"
     isoDate: string,           the same date as YYYY-MM-DD, used for
                                 sorting and structured data — not displayed
     duration: string,          display runtime, e.g. "1:00:06"
     isoDuration: string,       the same runtime as an ISO 8601 duration
                                 (e.g. "PT1H0M6S"), used only for
                                 structured data — not displayed
     type: string,              platform / format shown on the card badge:
                                 "Podcast" | "X Spaces" | "YouTube" | "Interview" ...
     mrManRole: string,         Mr. Man's role in the appearance (e.g.
                                 "Interviewer", "Host / Interviewer")
     hosts: string[],           who hosted, always includes "Mr. Man"
     guests: string[],          guest name — role/organization, as billed
     description: string,       short, factual card summary (1–2 sentences)
     fullDescription: string,   the fuller original summary, kept for
                                 reference / future use — not rendered on
                                 the card today
     topics: string[],          tag metadata for future filtering/search —
                                 not currently displayed anywhere
     chapters: string[],        optional — published video chapter topics,
                                 kept for reference only, not displayed
     url: string,               link to the recording. Leave as "#" until
                                 a real link exists — media.html renders
                                 "#" as disabled "Coming Soon" text instead
                                 of a dead link.
     videoId: string,           YouTube video ID (for thumbnail/embed URLs)
     thumbnail: string,         thumbnail image URL
     thumbnailAlt: string,      descriptive alt text for the thumbnail
     status: string,            e.g. "website-ready" — informational only,
                                 not currently used to filter rendering
     placeholder: boolean       true = shows a "Sample" tag; omit once real
   }
   Sort order: newest first (by isoDate).
   ---------------------------------------------------------------------- */
const mediaAppearances = [
  {
    id: 'cosmos-ian-kane',
    title: 'Ian from Cosmos breaks down the necessity for tokenized deposits',
    org: 'Cosmos',
    date: 'July 30, 2026',
    isoDate: '2026-07-30',
    duration: '57:34',
    isoDuration: 'PT57M34S',
    type: 'YouTube',
    mrManRole: 'Interviewer',
    hosts: ['Mr. Man'],
    guests: ['Ian Kane'],
    description: 'Mr. Man speaks with Ian Kane of Cosmos about tokenized deposits, interoperability, IBC versus bridges, ATOM token economics, and how Basel III intersects with decentralization.',
    fullDescription: 'Mr. Man speaks with Ian Kane from Cosmos about tokenized deposits, the Cosmos ecosystem, institutional versus retail crypto, interoperability, IBC versus bridges, ATOM token economics, regulation, Basel III, trust, and decentralization.',
    topics: ['Cosmos', 'Tokenized Deposits', 'Blockchain', 'Interoperability', 'IBC', 'ATOM', 'Institutional Crypto', 'Regulation', 'Basel III', 'Decentralization'],
    chapters: ["Ian's Background", 'From Unbanked to Cosmos', 'What Makes Cosmos Different', 'Who This Technology Serves', 'Retail vs. Institutional Crypto', 'IBC vs. Bridges', 'ATOM Token Economics', 'Regulation and Basel III', 'Trust and Decentralization'],
    url: 'https://www.youtube.com/watch?v=d_3VZE7JDFE',
    videoId: 'd_3VZE7JDFE',
    thumbnail: 'https://i.ytimg.com/vi/d_3VZE7JDFE/hqdefault.jpg',
    thumbnailAlt: 'Thumbnail for the interview with Ian Kane of Cosmos on tokenized deposits and the Cosmos ecosystem',
    status: 'website-ready'
  },
  {
    id: 'anodos-finance',
    title: 'A look inside institutional DeFi: Anodos Finance',
    org: 'Anodos Finance',
    date: 'May 28, 2026',
    isoDate: '2026-05-28',
    duration: '55:11',
    isoDuration: 'PT55M11S',
    type: 'YouTube',
    mrManRole: 'Host / Interviewer',
    hosts: ['Mr. Man', 'Roman Inochovsky'],
    guests: ['Panos', 'Peter Condilis'],
    description: 'Mr. Man and Roman Inochovsky speak with Panos and Peter Condilis of Anodos Finance about institutional DeFi, liquidity infrastructure, and the case for Anodos.',
    fullDescription: 'Mr. Man and Roman Inochovsky sit down with Panos and Peter Condilis from Anodos Finance to discuss the evolution of DeFi, institutional liquidity, financial infrastructure, why Anodos exists, and the opportunity for participants to own a piece of Anodos.',
    topics: ['Anodos Finance', 'Institutional DeFi', 'Liquidity', 'Financial Infrastructure', 'XRPL', 'Onchain Finance', 'DeFi'],
    url: 'https://www.youtube.com/watch?v=CzUCzHeRZGI',
    videoId: 'CzUCzHeRZGI',
    thumbnail: 'https://i.ytimg.com/vi/CzUCzHeRZGI/hqdefault.jpg',
    thumbnailAlt: 'Thumbnail for the interview with Panos and Peter Condilis of Anodos Finance on institutional DeFi',
    status: 'website-ready'
  },
  {
    id: 'tetra-digital-cadd',
    title: 'Canada’s Regulated Stablecoin Regulations | Niomi H of Tetra Digital Group on CADD & Custody',
    org: 'Tetra Digital Group',
    date: 'May 14, 2026',
    isoDate: '2026-05-14',
    duration: '40:59',
    isoDuration: 'PT40M59S',
    type: 'YouTube',
    mrManRole: 'Host / Interviewer',
    hosts: ['Mr. Man', 'Roman Inochovsky'],
    guests: ['Niomi Henry — Associate of Strategy & Partnerships, Tetra Digital Group'],
    description: 'Mr. Man and Roman Inochovsky speak with Niomi Henry of Tetra Digital Group about CADD, custody, and Canada’s developing stablecoin framework under Bill C-15.',
    fullDescription: 'Mr. Man and Roman Inochovsky speak with Niomi Henry, Associate of Strategy & Partnerships at Tetra Digital Group, about CADD, custody, Canada’s developing stablecoin framework, Bill C-15, and institutional adoption of regulated Canadian-dollar digital assets.',
    topics: ['CADD', 'Stablecoins', 'Canadian Dollar', 'Custody', 'Regulation', 'Bill C-15', 'Institutional Adoption', 'Tetra Digital Group', 'Digital Payments'],
    url: 'https://www.youtube.com/watch?v=qq227dzLMac',
    videoId: 'qq227dzLMac',
    thumbnail: 'https://i.ytimg.com/vi/qq227dzLMac/hqdefault.jpg',
    thumbnailAlt: 'Thumbnail for the interview with Niomi Henry of Tetra Digital Group on Canada’s regulated stablecoin framework',
    status: 'website-ready'
  },
  {
    id: 'eteu-xdc',
    title: '@eteutech Turns Trade Paperwork Digital with XDC',
    org: 'eTEU',
    date: 'February 24, 2025',
    isoDate: '2025-02-24',
    duration: '1:00:06',
    isoDuration: 'PT1H0M6S',
    type: 'YouTube',
    mrManRole: 'Interviewer',
    hosts: ['Mr. Man'],
    guests: ['Eduard Oboimov — CEO, eTEU', 'Kristian Volohhonski — COO, eTEU'],
    description: 'Mr. Man speaks with eTEU CEO Eduard Oboimov and COO Kristian Volohhonski about digitizing trade documentation on the XDC Network, including electronic bills of lading and smart-contract automation for cross-border trade.',
    fullDescription: 'Mr. Man speaks with Eduard Oboimov, CEO of eTEU, and Kristian Volohhonski, COO of eTEU, about digitizing trade documentation using XDC Network. The discussion explores paperless trade, electronic bills of lading, trade-finance infrastructure, smart-contract automation, and making international trade workflows faster, cheaper, easier to track, and legally usable across jurisdictions.',
    topics: ['XDC', 'eTEU', 'Trade Finance', 'Digital Trade', 'Electronic Bills of Lading', 'Paperless Trade', 'RWA', 'Blockchain Infrastructure'],
    url: 'https://www.youtube.com/watch?v=d69vZmjKxyU',
    videoId: 'd69vZmjKxyU',
    thumbnail: 'https://i.ytimg.com/vi/d69vZmjKxyU/hqdefault.jpg',
    thumbnailAlt: 'Thumbnail for the interview with Eduard Oboimov and Kristian Volohhonski of eTEU on digitizing trade documentation with XDC Network',
    status: 'website-ready'
  }
];


/* ----------------------------------------------------------------------
   CONFERENCES / LIVE EVENTS
   Shape: {
     event: string,             conference / event name
     logo: string,              text wordmark shown in place of an image
     location: string,
     date: string,
     topic: string,             presentation / panel title
     status: 'upcoming' | 'completed',
     url: string                event page, recap, or recording. Leave as
                                 "#" until a real link exists — media.html
                                 renders "#" as disabled "Details Soon"
                                 text instead of a dead link.
   }
   Note: real events (e.g. Ripple Swell, SmartCon, KBW, Cosmoverse) should
   only be added here once confirmed — do not list an event as an
   appearance until it is actually booked.

   "visible: false" hides an entry from the public page while keeping the
   record in place — used below because both entries are still
   development placeholders, not confirmed conferences.
   ---------------------------------------------------------------------- */
const mediaConferences = [
  {
    event: '[Conference Name]',
    logo: '[Conference Name]',
    location: '[City, Country]',
    date: '2026',
    topic: '[Presentation or Panel Title]',
    status: 'upcoming',
    url: '#',
    visible: false
  },
  {
    event: '[Conference Name]',
    logo: '[Conference Name]',
    location: '[City, Country]',
    date: '2025',
    topic: '[Presentation or Panel Title]',
    status: 'completed',
    url: '#',
    visible: false
  }
];


/* ----------------------------------------------------------------------
   AVAILABLE FOR — booking section list
   Shape: { title: string, description: string }
   ---------------------------------------------------------------------- */
const availableFor = [
  { title: 'Podcast Interviews', description: 'Long-form, research-driven conversations on markets, infrastructure, and digital assets.' },
  { title: 'Conference Speaking', description: 'Keynotes and panel sessions on systemic change in financial infrastructure.' },
  { title: 'Panel Discussions', description: 'Multi-speaker formats covering macro, regulation, and digital asset adoption.' },
  { title: 'X Spaces', description: 'Live audio discussions with hosts and communities across the space.' },
  { title: 'Community AMAs', description: 'Direct Q&A sessions for project communities and member groups.' },
  { title: 'Educational Presentations', description: 'Structured sessions for institutions, teams, or learning communities.' },
  { title: 'Founder Interviews', description: 'Conversations with project founders on infrastructure, tokenization, and adoption.' }
];


/* ----------------------------------------------------------------------
   PRESS KIT
   Shape: {
     name: string,
     meta: string,        format / dimensions shown under the name
     file: string,        path to the actual asset under assets/press-kit/
     available: boolean   false until the real file is uploaded. While
                           false, media.html shows a disabled "Available
                           Soon" label instead of a download link that
                           would 404. Flip to true only after the file at
                           `file` actually exists in the repo.
   }
   ---------------------------------------------------------------------- */
const pressKitAssets = [
  { name: 'Professional Headshot', meta: 'JPG · 2400×2400', file: 'assets/press-kit/headshot.jpg', available: false },
  { name: 'Official Logo', meta: 'SVG + PNG', file: 'assets/press-kit/logo-pack.zip', available: false },
  { name: 'Short Bio', meta: 'TXT · 100 words', file: 'assets/press-kit/bio-short.txt', available: false },
  { name: 'Extended Bio', meta: 'TXT · 300 words', file: 'assets/press-kit/bio-extended.txt', available: false },
  { name: 'Media Photos', meta: 'ZIP · JPG', file: 'assets/press-kit/media-photos.zip', available: false },
  { name: 'Brand Assets', meta: 'ZIP · Colors, type, marks', file: 'assets/press-kit/brand-assets.zip', available: false },
  { name: 'Speaker One Sheet', meta: 'PDF', file: 'assets/press-kit/speaker-one-sheet.pdf', available: false }
];


/* ----------------------------------------------------------------------
   FAQ
   Shape: { q: string, a: string }
   ---------------------------------------------------------------------- */
const mediaFaqs = [
  { q: 'What topics do you discuss?', a: 'Financial market infrastructure, digital assets, stablecoins, tokenization, payment systems, CBDC research, AI applications in finance, and related macro and regulatory developments. See the Topics section above for the full list.' },
  { q: 'Do you accept conference invitations?', a: 'Yes. I speak on panels and present sessions focused on systemic change in financial infrastructure. Use the booking section below or reach out with event details, audience, and format.' },
  { q: 'Do you participate in podcasts?', a: 'Yes, both as a guest and in longer-form recorded conversations. I favor research-driven formats over reactive commentary.' },
  { q: 'Can founders request interviews?', a: 'Yes. I speak with project founders about infrastructure, tokenization, and adoption when there is a genuine, substantive angle to discuss.' },
  { q: 'How do I schedule an appearance?', a: 'Use the scheduling widget in the Book Mr. Man section. Include the format, proposed topics, and timeline so the request can be reviewed quickly.' },
  { q: 'Can discussions be recorded live?', a: 'Yes, live formats including X Spaces, live-streamed panels, and recorded video interviews are all welcome.' }
];
