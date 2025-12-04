export type ProjectSection = {
  name: string;
  description?: string;
  images?: { src: string; alt: string }[];
  video?: string;
};

export type ProjectData = {
  id: string;
  title: string;
  client: string;
  year?: string;
  location?: string;
  sector?: string;
  area?: string;
  duration?: string;
  status?: string;
  hero: string;
  heroAlt: string;
  heroVideo?: string;
  summary: string;
  scope?: string[];
  specialFeatures?: string[];
  materials?: string[];
  floors?: { name: string; layout: string }[];
  sections: ProjectSection[];
};

export const projects: ProjectData[] = [
  {
    id: "theon",
    title: "Theon Life Sciences Corporate Office",
    client: "Theon Life Sciences Pvt. Ltd.",
    year: "2025",
    location: "DeraBassi, Chandigarh",
    sector: "Pharmaceutical Office",
    area: "15,000 sq. ft.",
    duration: "12 weeks",
    status: "Completed",
    hero: "/projects/theon/RECEPTION-REVISED/hero.jpeg",
    heroAlt: "Theon Life Sciences modern pharmaceutical office reception with double-height ceiling and contemporary lounge seating in DeraBassi, Chandigarh",
    heroVideo: "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/videos/WALKTHROUGH.mp4",
    summary: "A state-of-the-art pharmaceutical corporate office designed to reflect Theon Life Sciences' commitment to innovation and excellence. The project features a stunning double-height reception, premium boardroom facilities, collaborative meeting spaces, and ergonomic workstations—all designed to enhance productivity while maintaining a professional, hygienic environment suitable for a life sciences company.",
    scope: [
      "Complete interior design and space planning",
      "Reception and lounge area design",
      "Executive boardroom with AV integration",
      "Open-plan workstation layout",
      "Meeting room cluster design",
      "MEP coordination and execution"
    ],
    specialFeatures: [
      "Double-height reception with custom lighting",
      "Acoustic-optimized boardroom",
      "Biophilic design elements",
      "Energy-efficient LED lighting throughout"
    ],
    materials: [
      "Premium laminate finishes",
      "Acoustic ceiling panels",
      "Anti-microbial flooring",
      "Tempered glass partitions"
    ],
    sections: [
      {
        name: "Reception & Lounge",
        description: "A welcoming double-height reception with modern lounge seating, creating a sophisticated first impression for visitors and employees alike. Features custom lighting design and premium material finishes.",
        images: [
          { src: "/projects/theon/RECEPTION-REVISED/hero.jpeg", alt: "Theon Life Sciences reception area with modern lounge seating and double-height ceiling" },
          { src: "/projects/theon/RECEPTION-REVISED/lounge.jpeg", alt: "Contemporary lounge seating area at Theon Life Sciences office" },
          { src: "/projects/theon/RECEPTION-REVISED/ground.jpeg", alt: "Ground floor view of Theon pharmaceutical office reception" },
        ],
        video: "",
      },
      {
        name: "Boardroom",
        description: "Premium boardroom designed for high-level meetings and client presentations, featuring integrated AV systems, acoustic treatments, and executive-grade furnishings.",
        images: [
          { src: "/projects/theon/CONFERENCEROOM/7.jpeg", alt: "Executive boardroom at Theon Life Sciences with AV integration" },
          { src: "/projects/theon/CONFERENCEROOM/2.jpeg", alt: "Premium conference room interior with modern lighting" },
          { src: "/projects/theon/CONFERENCEROOM/6.jpeg", alt: "Boardroom seating arrangement at Theon corporate office" },
        ],
      },
      {
        name: "Meeting Room",
        description: "Focused meeting spaces designed for team collaboration and client discussions, featuring ergonomic seating and optimal acoustics.",
        images: [
          { src: "/projects/theon/REVISEDMEETINGROOMS/meeting.jpeg", alt: "Modern meeting room at Theon Life Sciences office" },
          { src: "/projects/theon/REVISEDMEETINGROOMS/17.jpeg", alt: "Collaborative meeting space with natural lighting" },
          { src: "/projects/theon/REVISEDMEETINGROOMS/19.jpeg", alt: "Team meeting room interior design at Theon" },
        ],
      },
      {
        name: "Workstations",
        description: "Open-plan workstation area designed for productivity and collaboration, featuring ergonomic furniture and optimal spacing for a pharmaceutical work environment.",
        images: [
          { src: "/projects/theon/WORKSTATION/W2.jpeg", alt: "Open-plan workstation area at Theon Life Sciences office" },
          { src: "/projects/theon/WORKSTATION/W3.jpeg", alt: "Ergonomic workstations with modern design at Theon corporate" },
        ],
      },
    ],
  },
  {
    id: "bansaltower",
    title: "Bansal Tower Co-Working Space",
    client: "Bansal Group",
    year: "2025",
    location: "Gurgaon, Haryana",
    sector: "Co-Working Space",
    area: "12,000 sq. ft.",
    duration: "10 weeks",
    status: "Completed",
    hero: "/projects/Bansal-Tower/RECEPTION/R1.png",
    heroAlt: "Bansal Tower co-working space reception with modern design elements in Gurgaon",
    summary: "A premium co-working space designed for flexibility, collaboration, and professional excellence. The Bansal Tower project transforms a commercial floor into a vibrant workspace featuring executive cabins, an impressive MD room, state-of-the-art conference facilities, and a welcoming reception—all designed to serve diverse business needs in Gurgaon's thriving corporate district.",
    scope: [
      "Space planning for co-working environment",
      "Executive cabin and MD room design",
      "Conference room with presentation facilities",
      "Reception and waiting area",
      "Common washroom upgrades",
      "Lighting and electrical planning"
    ],
    specialFeatures: [
      "Flexible workspace configurations",
      "Premium executive cabins",
      "High-end conference room AV setup",
      "Modern reception with brand integration"
    ],
    materials: [
      "Engineered wood flooring",
      "Glass partitions with frosted elements",
      "Premium veneer finishes",
      "Acoustic panels for meeting rooms"
    ],
    sections: [
      {
        name: "Director's Room",
        description: "Elegant director's cabin featuring premium finishes, integrated storage, and a professional ambiance for senior leadership.",
        images: [
          { src: "/projects/Bansal-Tower/directorroom/r1.png", alt: "Director's room at Bansal Tower with executive furniture and premium finishes" },
          { src: "/projects/Bansal-Tower/directorroom/r2.png", alt: "Executive director cabin interior design at Bansal Tower Gurgaon" },
        ],
        video: "",
      },
      {
        name: "MD Room",
        description: "Premium Managing Director's office with sophisticated design, featuring custom furniture, ambient lighting, and dedicated meeting space.",
        images: [
          { src: "/projects/Bansal-Tower/mdroom/r1.png", alt: "MD room at Bansal Tower co-working space with luxury interior" },
          { src: "/projects/Bansal-Tower/mdroom/r2.png", alt: "Managing Director office interior with custom furniture" },
          { src: "/projects/Bansal-Tower/mdroom/r3.png", alt: "Premium MD cabin design at Bansal Tower Gurgaon" },
        ],
      },
      {
        name: "Conference Room",
        description: "State-of-the-art conference room designed for presentations, client meetings, and team discussions with integrated technology.",
        images: [
          { src: "/projects/Bansal-Tower/conferenceroom/1.jpg", alt: "Modern conference room at Bansal Tower with presentation screen" },
          { src: "/projects/Bansal-Tower/conferenceroom/VIEW1.jpeg", alt: "Conference room interior design with executive seating" },
          { src: "/projects/Bansal-Tower/conferenceroom/VIEW2.jpeg", alt: "Meeting room at Bansal Tower co-working space Gurgaon" },
        ],
      },
      {
        name: "Reception & Waiting Area",
        description: "Professional reception and waiting area creating a welcoming first impression for visitors and potential clients.",
        images: [
          { src: "/projects/Bansal-Tower/RECEPTION/R1.png", alt: "Bansal Tower reception area with modern design" },
          { src: "/projects/Bansal-Tower/RECEPTION/R2.png", alt: "Waiting area at Bansal Tower co-working space" },
        ],
      },
    ],
  },
  {
    id: "revolve",
    title: "Revolve Software Technology Office",
    client: "Revolve Technologies Pvt. Ltd.",
    year: "2025",
    location: "Gurgaon, Haryana",
    sector: "Software Company",
    area: "18,000 sq. ft.",
    duration: "14 weeks",
    status: "Completed",
    hero: "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Revolve/Reception.jpg",
    heroAlt: "Revolve software company modern office reception with contemporary design in Gurgaon",
    summary: "A cutting-edge technology office designed to foster innovation, collaboration, and employee well-being. The Revolve project showcases modern tech-office aesthetics with an impressive reception, executive MD cabin, open workstations, collaborative conference rooms, and a vibrant cafeteria—all reflecting the dynamic spirit of a growing software company.",
    scope: [
      "Complete office interior design",
      "Reception and waiting area",
      "MD cabin with meeting space",
      "Open-plan workstation design",
      "Conference rooms cluster",
      "Cafeteria and breakout areas",
      "MEP and HVAC coordination"
    ],
    specialFeatures: [
      "Tech-forward design aesthetic",
      "Collaborative open spaces",
      "Ergonomic workstation setup",
      "Vibrant cafeteria with breakout zones"
    ],
    materials: [
      "Industrial-modern flooring",
      "Glass and metal partitions",
      "Acoustic ceiling treatments",
      "Branded color accents"
    ],
    sections: [
      {
        name: "Reception Area",
        description: "A welcoming double-height reception with modern lounge seating, showcasing the company's innovative brand identity.",
        images: [
          { src: "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Revolve/reception2.jpg", alt: "Revolve Technologies reception with modern design elements" },
          { src: "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Revolve/Reception.jpg", alt: "Software company reception area at Revolve Gurgaon" },
          { src: "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Revolve/waitingarea.jpg", alt: "Visitor waiting area at Revolve tech office" },
        ],
        video: "",
      },
      {
        name: "MD Cabin",
        description: "Premium executive cabin designed for leadership, featuring integrated meeting space and premium finishes.",
        images: [
          { src: "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Revolve/mdcabin.jpg", alt: "MD cabin at Revolve Technologies with executive furniture" },
          { src: "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Revolve/mdcabin2.jpg", alt: "Managing Director office interior at Revolve software company" },
          { src: "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Revolve/mdcabin3.jpg", alt: "Executive office design at Revolve Gurgaon" },
        ],
      },
      {
        name: "Workstation",
        description: "Open-plan workstation area designed for software developers and tech teams, featuring ergonomic seating and optimal spacing.",
        images: [
          { src: "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Revolve/worstationarea.jpg", alt: "Open workstation area at Revolve software office" },
          { src: "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Revolve/workstationarea2.jpg", alt: "Developer workstations at Revolve Technologies Gurgaon" },
        ],
      },
      {
        name: "Conference Area",
        description: "Modern conference rooms designed for team meetings, client presentations, and collaborative sessions.",
        images: [
          { src: "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Revolve/conferenceroom.jpg", alt: "Conference room at Revolve tech office with presentation setup" },
          { src: "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Revolve/conferenceroom2.jpg", alt: "Team meeting room at Revolve Technologies" },
        ],
      },
      {
        name: "Cafeteria",
        description: "Vibrant cafeteria and breakout area designed for employee relaxation and informal collaboration.",
        images: [
          { src: "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Revolve/cafeteria.jpg", alt: "Office cafeteria at Revolve with modern seating" },
          { src: "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Revolve/cafeteria2.jpg", alt: "Breakout area and cafeteria at Revolve Technologies Gurgaon" },
        ],
      },
    ],
  },
  {
    id: "microsave",
    title: "MicroSave Consulting (MSC) Corporate Office",
    client: "MicroSave Consulting Pvt. Ltd.",
    year: "2025",
    location: "Delhi",
    sector: "Consulting",
    area: "8,000 sq. ft.",
    duration: "8 weeks",
    status: "Completed",
    hero: "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Microsave%20Consulting(MSC)/Reception%20area.jpg",
    heroAlt: "MicroSave Consulting MSC corporate office reception with professional interior design in Delhi",
    summary: "A sophisticated consulting office designed to reflect MSC's global expertise and professional excellence. The project features an elegant reception, executive cabins for senior consultants, collaborative lounge spaces, well-equipped meeting rooms, and efficient workstation areas—all designed to support the demanding workflow of a leading consulting firm.",
    scope: [
      "Corporate office interior design",
      "Reception and visitor management area",
      "Executive cabin cluster",
      "Lounge and collaboration spaces",
      "Meeting room design",
      "Open-plan workstation layout"
    ],
    specialFeatures: [
      "Professional consulting firm aesthetic",
      "Client-facing meeting facilities",
      "Collaborative lounge areas",
      "Efficient space utilization"
    ],
    materials: [
      "Premium carpet tiles",
      "Veneer-finished furniture",
      "Glass partitions",
      "Acoustic treatments"
    ],
    sections: [
      {
        name: "Reception Area",
        description: "Professional and modern welcome zone with warm lighting and inviting finishes, creating a strong first impression for clients.",
        images: [
          { src: "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Microsave%20Consulting(MSC)/Reception%20area.jpg", alt: "MicroSave Consulting reception area with professional design" },
        ],
        video: "",
      },
      {
        name: "Cabin Rooms",
        description: "Executive and senior management cabins offering a quiet, focused environment for consulting work and client calls.",
        images: [
          { src: "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Microsave%20Consulting(MSC)/Cabin%20Room.jpg", alt: "Executive cabin at MicroSave Consulting Delhi" },
          { src: "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Microsave%20Consulting(MSC)/Cabin%20Room%202.jpg", alt: "Senior consultant cabin interior at MSC office" },
        ],
        video: "",
      },
      {
        name: "Lounge Area",
        description: "Relaxed collaboration and waiting space designed with soft seating and modern textures for informal meetings.",
        images: [
          { src: "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Microsave%20Consulting(MSC)/Lounge%20Area.jpg", alt: "Lounge area at MicroSave Consulting office for collaboration" },
        ],
        video: "",
      },
      {
        name: "Meeting Room",
        description: "Formal meeting setup with sleek furnishing and display integration for client presentations.",
        images: [
          { src: "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Microsave%20Consulting(MSC)/Meeting%20Room.jpg", alt: "Meeting room at MicroSave Consulting with presentation facilities" },
        ],
        video: "",
      },
      {
        name: "Workstation Area",
        description: "Open workspace with ergonomic seating and functional design supporting consulting workflows.",
        images: [
          { src: "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Microsave%20Consulting(MSC)/Workstation.jpg", alt: "Open workstation area at MicroSave Consulting Delhi" },
        ],
        video: "",
      },
    ],
  },
  {
    id: "himalaya",
    title: "Himalaya Construction Corporate Office",
    client: "Himalaya Construction Pvt. Ltd.",
    sector: "Construction",
    area: "6,000 sq. ft.",
    duration: "6 weeks",
    status: "Completed",
    hero: "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Himalaya/Reception%20Area.jpg",
    heroAlt: "Himalaya Construction corporate office reception with modern clean design aesthetic",
    summary: "A functional and professional corporate office designed for a leading construction company. The project reflects the client's expertise in building with a clean, modern aesthetic featuring an efficient reception, private cabins, a dedicated MD cabin, formal meeting rooms, and productive workstation areas.",
    scope: [
      "Corporate office fit-out",
      "Reception and visitor area",
      "Executive cabin design",
      "MD cabin with meeting space",
      "Conference and meeting rooms",
      "Workstation layout planning"
    ],
    specialFeatures: [
      "Construction industry-appropriate design",
      "Durable, professional finishes",
      "Efficient space planning",
      "Client meeting facilities"
    ],
    materials: [
      "Commercial-grade flooring",
      "Laminate finishes",
      "Glass partitions",
      "Functional furniture"
    ],
    sections: [
      {
        name: "Reception Area",
        description: "Welcoming reception designed with a clean, modern aesthetic and comfortable waiting space for visitors.",
        images: [
          { src: "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Himalaya/Reception%20Area.jpg", alt: "Himalaya Construction office reception with modern design" },
        ],
        video: "",
      },
      {
        name: "Cabin Rooms",
        description: "Private cabins designed for focused individual work and quick discussions with project teams.",
        images: [
          { src: "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Himalaya/Cabin%20Room.jpg", alt: "Executive cabin at Himalaya Construction office" },
          { src: "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Himalaya/Cabin%20Room%202.jpg", alt: "Private cabin interior at Himalaya corporate office" },
        ],
        video: "",
      },
      {
        name: "MD Cabin",
        description: "Dedicated MD cabin offering a premium and functional workspace for senior leadership.",
        images: [
          { src: "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Himalaya/Cabin%20Room%202.jpg", alt: "MD cabin at Himalaya Construction corporate office" },
        ],
        video: "",
      },
      {
        name: "Meeting Rooms",
        description: "Formal meeting rooms suitable for client discussions, project reviews, and internal meetings.",
        images: [
          { src: "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Himalaya/Meeting%20Room%202.jpg", alt: "Meeting room at Himalaya Construction office" },
          { src: "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Himalaya/Meeting%20Room.jpg", alt: "Conference room interior at Himalaya corporate office" },
        ],
        video: "",
      },
      {
        name: "Workstation Area",
        description: "Open workstation layout supporting collaboration and day-to-day operations for project teams.",
        images: [
          { src: "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Himalaya/Workstation.jpg", alt: "Open workstation area at Himalaya Construction office" },
        ],
        video: "",
      },
    ],
  },
  {
    id: "vinfast-showroom",
    title: "VinFast Electric Vehicle Showroom",
    client: "VinFast India",
    year: "2025",
    location: "Jaipur / Delhi NCR",
    sector: "Automobile Showroom & Parking",
    area: "25,000 sq. ft.",
    duration: "16 weeks",
    status: "Completed",
    hero: "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/VinFast/VST-1.jpeg",
    heroAlt: "VinFast electric vehicle showroom interior with modern display area and premium lighting in Jaipur",
    summary: "A premium automotive showroom designed for VinFast's electric vehicle lineup. The project showcases modern showroom design principles with an impressive vehicle display floor, strategic lighting, customer consultation areas, administrative offices, and multi-level parking facilities—all designed to deliver an exceptional EV buying experience.",
    scope: [
      "Showroom interior design",
      "Vehicle display floor layout",
      "Lighting design for vehicle presentation",
      "Customer lounge and consultation areas",
      "Office and admin spaces",
      "Multi-level parking design",
      "MEP and HVAC systems"
    ],
    specialFeatures: [
      "EV-focused showroom design",
      "Premium vehicle display lighting",
      "Customer experience zones",
      "Integrated parking solutions"
    ],
    materials: [
      "Premium showroom flooring",
      "LED track lighting systems",
      "Glass and aluminum facades",
      "Branded design elements"
    ],
    sections: [
      {
        name: "Showroom & Display Area",
        description: "VinFast showroom interior including display floor with strategic lighting and reception area designed to showcase electric vehicles.",
        images: [
          { src: "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/VinFast/VST-1.jpeg", alt: "VinFast showroom vehicle display area with premium lighting" },
          { src: "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/VinFast/VST-2.jpeg", alt: "Electric vehicle display floor at VinFast showroom Jaipur" },
          { src: "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/VinFast/VST-3.jpeg", alt: "VinFast EV showroom interior design with modern aesthetics" },
        ],
      },
      {
        name: "Office / Cabin Rooms",
        description: "Administrative cabins and staff rooms inside showroom complex for sales team and management.",
        images: [
          { src: "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/VinFast/VST-4.jpeg", alt: "Office cabin at VinFast showroom for sales team" },
        ],
      },
      {
        name: "Parking & Ramp Area",
        description: "Basement/ground level car-parking and ramp design for easy vehicle access and customer convenience.",
        images: [
          { src: "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/VinFast/VST-5.jpeg", alt: "Parking area at VinFast showroom with vehicle ramp" },
          { src: "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/VinFast/VST-6.jpeg", alt: "Multi-level parking design at VinFast Jaipur showroom" },
        ],
      },
    ],
  },
];

// Helper
export const getProjectById = (id: string) => projects.find((p) => p.id === id);
