import type { FaqItem } from "@/lib/seo";

export interface ServicePage {
  slug: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  keywords: string[];
  highlights: string[];
  deliverables: string[];
  relatedSlugs: string[];
  /**
   * Buyer questions, rendered on the page and emitted as FAQPage schema.
   *
   * Written to the site's publishing rule (CLAUDE.md): no Hagerstone rates, no
   * durations or structural values, no statutory verdicts, and no capability
   * beyond what the summary, highlights and deliverables above already state.
   * Each answer leads with the direct answer, because that opening sentence is
   * what answer engines lift.
   */
  faqs: ServiceFaq[];
}

/** An FAQ whose answer names a page on this site links to it via `link`. */
export type ServiceFaq = FaqItem & { link?: { label: string; path: string } };

export const servicePages: ServicePage[] = [
  {
    slug: "office-design-build",
    title: "Office Design & Build",
    h1: "Office Design & Build Services",
    metaTitle: "Office Design & Build – Turnkey Delivery | Hagerstone",
    metaDescription:
      "End-to-end office design & build services in Delhi NCR, from strategy to fit-out execution for modern corporate workspaces.",
    summary:
      "We deliver turnkey office design & build solutions—strategy, space planning, interiors, and execution—so teams move into fully operational workspaces faster.",
    keywords: ["office design & build", "turnkey office design and build", "office workspace design"],
    highlights: [
      "Strategy-led workplace planning and brand alignment",
      "Integrated interior design, MEP coordination, and fit-out delivery",
      "Single-point accountability for scope, cost, and timelines",
    ],
    deliverables: [
      "Space planning and layout strategy",
      "Interior design concepts and 3D visualization",
      "Execution-ready BOQ and project plan",
    ],
    relatedSlugs: ["interior-fit-out", "mep", "construction"],
    faqs: [
      {
        question: "What does office design and build actually include?",
        answer:
          "Design and build puts the whole journey under one contract: workplace strategy and space planning, interior design and 3D visualisation, an execution-ready BOQ, then the fit-out itself through to handover. The practical difference from hiring a designer and a contractor separately is that one party is accountable for scope, cost and timeline, so gaps between the drawings and the build are not left for you to resolve.",
      },
      {
        question: "Is design and build better than hiring a designer and a contractor separately?",
        answer:
          "It depends on how settled your brief is. Design and build is faster because design and construction overlap, and a defect has one owner rather than two parties blaming each other. Separate appointments give you an independent check on the builder and a competitively tendered price on a finished design, at the cost of a longer programme. Our design-build vs design-bid-build comparison sets out where each route tends to go wrong.",
        link: { label: "Design-build vs design-bid-build", path: "/compare/design-build-vs-design-bid-build" },
      },
      {
        question: "What should we decide before the design starts?",
        answer:
          "Four things shape almost every layout: your headcount and the growth you expect over the lease, how many enclosed rooms the business genuinely needs, whether the cafeteria is an amenity or overflow working space, and who in your organisation signs the layout off. Settling these early is what stops the design being reworked when they surface later.",
      },
      {
        question: "What decides how long an office design and build project takes?",
        answer:
          "Mostly decisions and deliveries rather than site labour. The date the layout is frozen, the lead time on items made to order such as glazed partitions and joinery, the sequence of services above the ceiling, and any approvals the occupancy needs are what govern the programme. That is why a realistic timeline can only be given once we have seen your floor and your brief.",
      },
      {
        question: "Do you work on floors that stay occupied during the works?",
        answer:
          "Occupied-floor projects are planned in phases, with noisy work moved out of hours, sealed separation between live and work areas, and escape routes kept open throughout. They take longer than the same scope on an empty floor, so the phasing should be agreed before a completion date is fixed. The approach for your building depends on its layout, the landlord's rules and how many people can move at once.",
      },
    ],
  },
  {
    slug: "interior-fit-out",
    title: "Interior Fit-Out",
    h1: "Interior Fit-Out Company",
    metaTitle: "Interior Fit-Out Company in India | Hagerstone",
    metaDescription:
      "Office interior fit-out services for commercial and corporate spaces with coordinated finishes, joinery, and on-site delivery.",
    summary:
      "Our interior fit-out teams deliver high-quality finishes, partitions, joinery, and on-site coordination for commercial workspaces.",
    keywords: ["interior fit out company", "office fit out services", "commercial fit-out"],
    highlights: [
      "Turnkey fit-out execution with quality control checkpoints",
      "Coordination with MEP, lighting, and HVAC vendors",
      "Fast-track delivery for ready-to-move offices",
    ],
    deliverables: [
      "Finishes, partitions, ceilings, and flooring",
      "Joinery, signage, and reception detailing",
      "On-site coordination and handover documentation",
    ],
    relatedSlugs: ["office-design-build", "mep", "hvac"],
    faqs: [
      {
        question: "What is the difference between Cat A and Cat B fit-out?",
        answer:
          "Cat A is the landlord's base finish: a serviced but unfurnished floor with ceiling, general lighting and air conditioning distribution. Cat B is the tenant's fit-out on top of it: partitions, cabins, meeting rooms, finishes, joinery and branding. Cat B often adapts parts of Cat A, such as ceilings and sprinkler positions, so it is worth checking exactly what the landlord provides before budgeting.",
      },
      {
        question: "What does an interior fit-out cover?",
        answer:
          "Our fit-out scope covers finishes, partitions, ceilings and flooring, joinery, signage and reception detailing, with on-site coordination of the MEP, lighting and HVAC work that has to fit around them, and handover documentation at the end. Furniture, IT and AV are usually agreed separately, so it is worth confirming what each quotation includes before comparing them.",
      },
      {
        question: "Why do fit-out quotations vary so much?",
        answer:
          "Usually because they price different scopes. One may assume the existing ceiling is kept, another replaces it; one includes services alterations and fire system changes, another excludes them. Comparing totals before comparing scope is the most common mistake in choosing a fit-out contractor. Asking every bidder to price the same itemised scope makes the numbers comparable.",
      },
      {
        question: "What causes delays in a fit-out project?",
        answer:
          "The usual causes are late layout decisions, long-lead items such as glazed partitions or bespoke joinery being ordered late, and services above the ceiling installed without a coordinated drawing so work has to be redone. Commissioning is often squeezed at the end when earlier stages slip. Fixing the layout early and coordinating services before installation prevents most of it.",
      },
      {
        question: "What should we receive at handover?",
        answer:
          "Beyond the keys: as-built drawings, operating and maintenance manuals, test and commissioning records, equipment details, warranties with their start dates, and spare materials such as extra carpet tiles from the original batch. These are what let you run and alter the space later. It is worth listing them in the contract so they arrive with the keys rather than after.",
      },
    ],
  },
  {
    slug: "mep",
    title: "MEP Design",
    h1: "MEP Design & Consultants",
    metaTitle: "MEP Design & Consultants in India | Hagerstone",
    metaDescription:
      "MEP design and consultancy for office buildings and commercial facilities, including electrical, plumbing, and fire safety systems.",
    summary:
      "Our MEP consultants plan, model, and coordinate electrical, plumbing, and firefighting systems for efficient commercial operations.",
    keywords: ["mep design", "mep consultants", "mep in construction"],
    highlights: [
      "Efficient load planning and compliance-ready documentation",
      "Integrated MEP coordination with interior design teams",
      "Energy-conscious systems for modern workspaces",
    ],
    deliverables: [
      "MEP layouts and load calculations",
      "Coordination drawings for execution teams",
      "Testing and commissioning support",
    ],
    relatedSlugs: ["hvac", "office-design-build", "interior-fit-out"],
    faqs: [
      {
        question: "What does MEP stand for?",
        answer:
          "MEP stands for mechanical, electrical and plumbing: the building services that make a space usable. In practice it covers power distribution, lighting, plumbing and drainage, firefighting and fire detection, and often low-voltage systems such as data cabling and access control. Air conditioning is sometimes grouped under MEP and sometimes treated as a separate HVAC package.",
      },
      {
        question: "Why does MEP coordination matter on an office fit-out?",
        answer:
          "Because several services share the same ceiling void and must be installed in order. Without a coordinated drawing that resolves where each duct, pipe and cable tray sits, clashes are found on site and work is removed and redone. Coordination drawings for the execution teams are one of our MEP deliverables for exactly this reason.",
      },
      {
        question: "What is a load calculation and why is it needed?",
        answer:
          "A load calculation works out how much electrical capacity a space actually needs from its lighting, equipment, air conditioning and other connected loads. It sizes cables, distribution boards and backup power correctly, and it shows early whether the building's existing supply is enough. Estimating from a rule of thumb instead is how installations end up undersized or needlessly expensive.",
      },
      {
        question: "Does changing the office layout affect the MEP design?",
        answer:
          "Yes, significantly. Every enclosed room needs its own lighting circuits and controls, changes where sprinklers and detectors sit, and affects power and data positions. A layout with many small rooms is a larger MEP job than the same floor left open, which is why the layout should be settled before MEP design is finalised.",
      },
      {
        question: "What is testing and commissioning?",
        answer:
          "Testing confirms each piece of equipment works; commissioning confirms the whole system performs as designed once everything is connected. It covers electrical tests, checking that controls behave as intended, and the interfaces between systems such as the fire alarm and air handling. Commissioning records with measured results should be part of the handover documentation.",
      },
    ],
  },
  {
    slug: "hvac",
    title: "HVAC Services",
    h1: "HVAC Services for Workspaces",
    metaTitle: "HVAC Services Near You – Office HVAC Design | Hagerstone",
    metaDescription:
      "HVAC services for offices and commercial interiors, including load calculations, ducting design, and ventilation systems.",
    summary:
      "We design and deliver HVAC systems that improve indoor air quality, comfort, and energy performance for commercial spaces.",
    keywords: ["hvac services", "hvac services near me", "office hvac design"],
    highlights: [
      "Thermal load calculations and airflow planning",
      "Optimized ducting and equipment placement",
      "Integration with MEP and BMS controls",
    ],
    deliverables: [
      "HVAC load reports and design drawings",
      "Equipment sizing and vendor coordination",
      "Testing, balancing, and commissioning support",
    ],
    relatedSlugs: ["mep", "office-design-build", "construction"],
    faqs: [
      {
        question: "How is the size of an office AC system decided?",
        answer:
          "From a thermal load calculation for your specific space, not from a figure per square foot. Glazing and orientation, the number of people, lighting and equipment heat, fresh air and how the floor is divided all change the load. Sizing from a general rate tends to produce equipment that is oversized for most of the year or undersized on the hottest days.",
      },
      {
        question: "Should an office use VRF or a chilled water system?",
        answer:
          "VRF generally suits small and mid-sized offices, floors used at different times, and buildings with limited plant space. Chilled water becomes more attractive as the total load grows and the plant can be centralised and properly maintained. The right choice comes from the load calculation and how the building is used; our VRF vs chiller comparison sets out the trade-offs.",
        link: { label: "VRF vs chiller for offices", path: "/compare/vrf-vs-chiller-office-hvac" },
      },
      {
        question: "Why does an office feel stuffy even when the AC works?",
        answer:
          "Usually because fresh air is inadequate. Most cooling systems recirculate room air, so outdoor air has to be introduced and treated by a separate system sized for the number of people. Meeting rooms are especially affected because they hold many people in a small space. The fix is a proper fresh air provision, not colder air.",
      },
      {
        question: "What is air balancing?",
        answer:
          "Air balancing is adjusting the system so each room receives the airflow the design intended. Without it, air follows the easiest path: rooms near the equipment get too much and distant rooms too little, which is why one side of a floor can be cold while the other is warm. Balancing is part of testing and commissioning and should be recorded with measured values.",
      },
      {
        question: "Can HVAC connect to a building management system?",
        answer:
          "Yes. HVAC equipment can be connected to a BMS so it runs on schedules, responds to occupancy and reports faults. The benefit comes from the control strategy and someone reviewing it, not from the connection alone. A BMS left in manual override quickly loses the energy savings it was installed for.",
      },
    ],
  },
  {
    slug: "construction",
    title: "Commercial Construction",
    h1: "Commercial Construction Services",
    metaTitle: "Commercial Construction Services – EPC Delivery | Hagerstone",
    metaDescription:
      "Commercial construction services with EPC delivery for offices, showrooms, and industrial facilities across India.",
    summary:
      "We manage commercial construction with EPC planning, procurement, and site execution for reliable project delivery.",
    keywords: ["commercial construction", "design build turnkey", "epc construction"],
    highlights: [
      "EPC planning with schedule and cost governance",
      "On-site execution with safety and QA controls",
      "Integrated delivery with interior and MEP teams",
    ],
    deliverables: [
      "Construction planning and supervision",
      "Vendor and procurement coordination",
      "Handover documentation and QA reports",
    ],
    relatedSlugs: ["office-design-build", "mep", "peb"],
    faqs: [
      {
        question: "What does EPC mean in commercial construction?",
        answer:
          "EPC stands for engineering, procurement and construction. One contractor is responsible for the engineering design, buying the materials and equipment, and building the project, usually against an agreed scope and completion date. The client deals with one accountable party instead of coordinating separate designers, suppliers and builders.",
      },
      {
        question: "How is an EPC contract different from an item-rate contract?",
        answer:
          "Under an item-rate contract the client pays measured quantities at agreed rates, so the final cost moves with quantities and the design risk stays largely with the client. Under EPC the contractor takes on more of the design and quantity risk for an agreed scope. Our turnkey vs item-rate comparison sets out how each contract shifts risk and where disputes usually arise.",
        link: { label: "Turnkey vs item-rate contracts", path: "/compare/turnkey-vs-item-rate-fit-out-contract" },
      },
      {
        question: "What should a commercial construction schedule track?",
        answer:
          "More than site activities. A useful schedule tracks design approvals, long-lead procurement, the sequence between civil work and building services, statutory inspections, and testing and commissioning, and it shows which activities are on the critical path. Delays usually start in approvals and procurement long before they appear on site.",
      },
      {
        question: "How is quality controlled on site?",
        answer:
          "Through inspection and test plans agreed before work starts: what gets checked, at which stage, against which drawing or standard, and who signs it off. Material test certificates, hold points before work is covered up, and recorded inspections are what make quality verifiable later. The QA reports we hand over are built from these records.",
      },
      {
        question: "Why does it help to have interiors and MEP under the same contractor as construction?",
        answer:
          "Because most rework on commercial buildings happens at the interfaces: sleeves and openings missed in the structure, services routes that clash with beams, and finishes installed before services are tested. When the same team plans the structure, the services and the fit-out, those interfaces are resolved on drawings rather than broken out on site.",
      },
    ],
  },
  {
    slug: "peb",
    title: "PEB Structures",
    h1: "Pre-Engineered Building (PEB) Solutions",
    metaTitle: "PEB Construction – Pre-Engineered Buildings | Hagerstone",
    metaDescription:
      "PEB construction services for industrial and commercial facilities, from design engineering to on-site assembly.",
    summary:
      "Hagerstone delivers PEB solutions for fast, scalable industrial and commercial facilities with engineered components.",
    keywords: ["peb", "pre-engineered buildings", "peb construction"],
    highlights: [
      "Optimized structural design for faster builds",
      "Coordinated fabrication and installation teams",
      "Durable materials and compliance-ready documentation",
    ],
    deliverables: [
      "Structural design and detailing",
      "Fabrication and installation management",
      "Quality checks and completion certificates",
    ],
    relatedSlugs: ["construction", "office-design-build", "mep"],
    faqs: [
      {
        question: "What is a pre-engineered building (PEB)?",
        answer:
          "A pre-engineered building is a steel structure whose frames, purlins, bracing and cladding are designed as a system, fabricated in a factory to the project's dimensions, then bolted together on site. Because most of the work happens in the factory while the foundations are being built, PEB is widely used for warehouses, factories and other large-span buildings.",
      },
      {
        question: "Is PEB better than an RCC building for industrial use?",
        answer:
          "For large clear spans, single-storey sheds and projects where speed matters, PEB is usually the stronger option. RCC suits multi-storey buildings, heavy floor loads and spaces where fire resistance, acoustic mass or future vertical extension matter more. Our PEB vs RCC comparison covers the factors that decide it for a specific facility.",
        link: { label: "PEB vs RCC industrial buildings", path: "/compare/peb-vs-rcc-industrial-building" },
      },
      {
        question: "What information is needed to design a PEB?",
        answer:
          "The building's length, width and eave height, how it will be used, any crane or mezzanine loads, openings and ventilation needs, the roof and wall cladding required, and the site location, which sets the wind and seismic design basis under the applicable Indian Standards. A soil investigation is needed separately for the foundations.",
      },
      {
        question: "What decides how quickly a PEB can be built?",
        answer:
          "The design approval date, fabrication capacity and steel availability, foundation work on site, and access for cranes and delivery vehicles. Fabrication and foundations run in parallel, which is where PEB saves time, so a late design freeze or a foundation delay removes most of the benefit.",
      },
      {
        question: "How is quality checked on a PEB project?",
        answer:
          "In the factory, through checks on the steel, welding, dimensions and surface protection of each member. On site, through checking anchor bolt positions before erection, the alignment and plumb of the frames, bolt tightening and the watertightness of roof and wall cladding. The records from these checks form part of the completion documentation.",
      },
    ],
  },
  {
    slug: "facade-glazing",
    title: "Facade & Glazing",
    h1: "Facade & Glazing Contractors",
    metaTitle: "Facade & Glazing Contractors | Hagerstone",
    metaDescription:
      "Facade and glazing contractors for commercial buildings—structural glazing, curtain walls, ACP cladding, and unitized facade systems with engineered installation.",
    summary:
      "We design, engineer, and install commercial facades—structural glazing, curtain walls, ACP cladding, and unitized systems—balancing aesthetics, weather performance, and safety.",
    keywords: ["facade contractors", "structural glazing", "curtain wall systems", "acp cladding"],
    highlights: [
      "Structural glazing and unitized curtain wall systems",
      "Weather, wind-load, and thermal performance engineering",
      "Coordinated facade delivery with civil and MEP teams",
    ],
    deliverables: [
      "Facade design, engineering, and shop drawings",
      "Material specification and fabrication management",
      "On-site installation, testing, and handover",
    ],
    relatedSlugs: ["aluminium-doors-windows", "construction", "office-design-build"],
    faqs: [
      {
        question: "What is the difference between structural glazing and a curtain wall?",
        answer:
          "A curtain wall is the non-load-bearing outer skin of a building, hung from the structure floor by floor. Structural glazing is one way of fixing the glass within it: the glass is bonded to the frame with structural silicone so no metal cap shows on the outside. A curtain wall can be structurally glazed, capped, or a mix of the two.",
      },
      {
        question: "Should we choose a unitized or stick-built curtain wall?",
        answer:
          "Unitized panels are assembled and glazed in a factory and installed floor by floor, which gives better quality control and faster enclosure, and suits taller buildings and repetitive facades. Stick-built systems are assembled piece by piece on site, which suits smaller or irregular facades. Our unitized vs stick-built comparison sets out the trade-offs in detail.",
        link: { label: "Unitized vs stick-built curtain wall", path: "/compare/unitized-vs-stick-built-curtain-wall" },
      },
      {
        question: "How is a facade designed for wind?",
        answer:
          "The design wind pressure is worked out for the specific building from IS 875 (Part 3), using its location, height, terrain and shape, with higher pressures at corners and edges. Frames, glass, brackets and anchors are then checked against that pressure. The value is specific to each building, so it cannot be taken from another project.",
      },
      {
        question: "Why do shop drawings matter for a facade?",
        answer:
          "Shop drawings translate the architect's design into what will actually be fabricated: every profile, joint, bracket, anchor and sealant line. They are where the facade is coordinated with the structure's tolerances and the building services, and approving them is the last point where changes are cheap. Our facade deliverables include design, engineering and shop drawings.",
      },
      {
        question: "What testing is done on a facade?",
        answer:
          "Typically water tightness checks on installed sections, sealant adhesion checks, and inspection of anchors and brackets before they are covered. Larger projects may also specify a performance mock-up tested for air, water and structural behaviour before production. What is tested should be written into the specification so it happens before handover.",
      },
    ],
  },
  {
    slug: "aluminium-doors-windows",
    title: "Aluminium Doors & Windows",
    h1: "Aluminium Doors & Windows",
    metaTitle: "Aluminium Doors & Windows | Hagerstone",
    metaDescription:
      "Aluminium doors and windows for commercial and office spaces—openable, sliding, and casement systems with quality hardware, glazing, and precise installation.",
    summary:
      "We supply and install commercial-grade aluminium doors and windows—sliding, casement, and openable systems—engineered for durability, acoustics, and clean finishes.",
    keywords: ["aluminium doors and windows", "aluminium windows", "commercial fenestration", "aluminium partition"],
    highlights: [
      "Sliding, casement, and openable aluminium systems",
      "Acoustic and thermal-rated glazing options",
      "Precision fabrication and on-site fitting",
    ],
    deliverables: [
      "Fenestration design and system selection",
      "Fabrication, glazing, and hardware supply",
      "Installation, sealing, and quality checks",
    ],
    relatedSlugs: ["facade-glazing", "interior-fit-out", "office-design-build"],
    faqs: [
      {
        question: "Are aluminium or uPVC windows better for commercial buildings?",
        answer:
          "Aluminium is generally preferred for commercial buildings because its strength allows larger openings and slimmer frames, and it is dimensionally stable and recyclable. uPVC insulates well and costs less, but needs reinforcement for large sizes. For an aluminium window, thermal performance depends on whether the profile is thermally broken. Our aluminium vs uPVC comparison covers the detail.",
        link: { label: "Aluminium vs uPVC windows", path: "/compare/aluminium-vs-upvc-windows-commercial" },
      },
      {
        question: "What is the difference between sliding, casement and openable windows?",
        answer:
          "Sliding windows move sideways along a track and suit wide openings where a sash cannot swing out. Casement windows are hinged at the side and seal tightly when shut, which helps with sound and air leakage. Other openable types, such as top-hung and tilt-and-turn, are chosen for ventilation, safety or cleaning access.",
      },
      {
        question: "How can aluminium windows reduce outside noise?",
        answer:
          "Mostly through the glass and the seals. Double-glazed or laminated units reduce sound more than single glass, especially with panes of different thickness, and a casement that compresses its gaskets when closed seals better than a sliding sash. Gaps around the frame have to be sealed properly, because a small leak lets through a disproportionate amount of noise.",
      },
      {
        question: "What makes a window system durable?",
        answer:
          "The quality of the profile and its surface finish, hardware rated for the size and weight of the sash, gaskets that stay flexible, and correct installation: a frame fixed square and level with drainage paths kept clear and joints sealed. Most window failures in service come from installation and hardware rather than the aluminium itself.",
      },
      {
        question: "What should be checked when aluminium windows are installed?",
        answer:
          "That frames are plumb, level and securely fixed, sashes open and lock smoothly, gaskets and seals are continuous, drainage slots are clear, glass is free of damage, and the joint between the frame and the wall is sealed. Installation, sealing and quality checks are part of our scope for every system we supply.",
      },
    ],
  },
];

export const getServicePageBySlug = (slug: string) =>
  servicePages.find((service) => service.slug === slug);
