export type ProjectSection = {
  name: string;
  description?: string;
  images?: string[];
  video?: string;
};

export type ProjectData = {
  id: string;             
  title: string;
  client: string;
  year?: string;
  location?: string;
  sector?: string;
  hero: string;           
  heroVideo?: string; // optional hero video
  floors?: { name: string; layout: string }[];
  sections: ProjectSection[];
};

export const projects: ProjectData[] = [
  {
    id: "theon",
    title: "Theon Life Sciences",
    client: "Hagerstone International Pvt. Ltd.",
    year: "2025",
    location: "DeraBassi, Chandigarh", 
    sector: "Pharmaceutical Office",
    hero: "/projects/theon/RECEPTION-REVISED/hero.jpeg",
    heroVideo: "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/videos/WALKTHROUGH.mp4",
    sections: [
      {
        name: "Reception & Lounge",
        description: "A welcoming double-height reception with modern lounge seating.",
        images: ["/projects/theon/RECEPTION-REVISED/hero.jpeg", "/projects/theon/RECEPTION-REVISED/lounge.jpeg", "/projects/theon/RECEPTION-REVISED/ground.jpeg"],
        video: ""
      },
      {
        name: "Boardroom",
        description: "Premium boardroom with AV integration.",
        images: ["/projects/theon/CONFERENCEROOM/7.jpeg", "/projects/theon/CONFERENCEROOM/2.jpeg", "/projects/theon/CONFERENCEROOM/6.jpeg"]
      },
      {
        name: "Meeting Room",
        description: "An easy and focusing area.",
        images: ["/projects/theon/REVISEDMEETINGROOMS/meeting.jpeg", "/projects/theon/REVISEDMEETINGROOMS/17.jpeg", "/projects/theon/REVISEDMEETINGROOMS/19.jpeg"]
      },
      {
        name: "Workstations",
        description: "An easy and focusing area.",
        images: ["/projects/theon/WORKSTATION/W2.jpeg", "/projects/theon/WORKSTATION/W3.jpeg"]
      }
    ]
  },
  {
    id: "bansaltower",
    title: "Bansal Tower",
    client: "Hagerstone International Pvt. Ltd.",
    year: "2025",
    location: "Gurgaon, Haryana",
    sector: "Co-Working Space",
    hero: "/projects/Bansal-Tower/RECEPTION/R1.png",
    sections: [
      {
        name: "Director's Room",
        description: "A welcoming double-height reception with modern lounge seating.",
        images: ["/projects/Bansal-Tower/directorroom/r1.png", "/projects/Bansal-Tower/directorroom/r2.png"],
        video: ""
      },
      {
        name: "MD Room",
        description: "Premium boardroom with AV integration.",
        images: ["/projects/Bansal-Tower/mdroom/r1.png", "/projects/Bansal-Tower/mdroom/r2.png", "/projects/Bansal-Tower/mdroom/r3.png"]
      },
      {
        name: "Conference Room",
        description: "An easy and focusing area.",
        images: ["/projects/Bansal-Tower/conferenceroom/1.jpg", "/projects/Bansal-Tower/conferenceroom/VIEW1.jpeg", "/projects/Bansal-Tower/conferenceroom/VIEW2.jpeg"]
      },
      {
        name: "Reception & Waiting Area",
        description: "An easy and focusing area.",
        images: ["/projects/Bansal-Tower/RECEPTION/R1.png", "/projects/Bansal-Tower/RECEPTION/R2.png"]
      }
    ]
  },
  {
    id: "revolve",
    title: "Revolve",
    client: "Hagerstone International Pvt. Ltd.",
    year: "2025",
    location: "Gurgaon, Haryana",
    sector: "Software Company",
    hero: "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Revolve/Reception.jpg",
    sections: [
      {
        name: "Reception Area",
        description: "A welcoming double-height reception with modern lounge seating.",
        images: [
          "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Revolve/reception2.jpg",
          "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Revolve/Reception.jpg",
          "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Revolve/waitingarea.jpg"
        ],
        video: ""
      },
      {
        name: "MD Cabin",
        description: "Premium boardroom with AV integration.",
        images: [
          "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Revolve/mdcabin.jpg",
          "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Revolve/mdcabin2.jpg",
          "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Revolve/mdcabin3.jpg"
        ]
      },
      {
        name: "Workstation",
        description: "An easy and focusing area.",
        images: [
          "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Revolve/worstationarea.jpg",
          "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Revolve/workstationarea2.jpg"
        ]
      },
      {
        name: "Conference Area",
        description: "An easy and focusing area.",
        images: [
          "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Revolve/conferenceroom.jpg",
          "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Revolve/conferenceroom2.jpg"
        ]
      },
      {
        name: "Cafeteria",
        description: "An easy and focusing area.",
        images: [
          "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Revolve/cafeteria.jpg",
          "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Revolve/cafeteria2.jpg"
        ]
      }
    ]
  },
  {
    id: "microsave",
    title: "MicroSave Consulting (MSC)",
    client: "Hagerstone International Pvt. Ltd.",
    year: "2025",
    location: "Delhi",
    sector: "Consulting",
    hero: "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Microsave%20Consulting(MSC)/Reception%20area.jpg",
    sections: [
      {
        name: "Reception Area",
        description: "Professional and modern welcome zone with warm lighting and inviting finishes.",
        images: [
          "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Microsave%20Consulting(MSC)/Reception%20area.jpg"
        ],
        video: ""
      },
      {
        name: "Cabin Rooms",
        description: "Executive and senior management cabins offering a quiet, focused environment.",
        images: [
          "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Microsave%20Consulting(MSC)/Cabin%20Room.jpg",
          "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Microsave%20Consulting(MSC)/Cabin%20Room%202.jpg"
        ],
        video: ""
      },
      {
        name: "Lounge Area",
        description: "Relaxed collaboration and waiting space designed with soft seating and modern textures.",
        images: [
          "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Microsave%20Consulting(MSC)/Lounge%20Area.jpg"
        ],
        video: ""
      },
      {
        name: "Meeting Room",
        description: "Formal meeting setup with sleek furnishing and display integration.",
        images: [
          "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Microsave%20Consulting(MSC)/Meeting%20Room.jpg"
        ],
        video: ""
      },
      {
        name: "Workstation Area",
        description: "Open workspace with ergonomic seating and functional design.",
        images: [
          "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Microsave%20Consulting(MSC)/Workstation.jpg"
        ],
        video: ""
      }
    ]
  },
  {
    id: "himalaya",
    title: "Himalaya",
    client: "Hagerstone International Pvt. Ltd.",
    sector: "Construction",
    hero: "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Himalaya/Reception%20Area.jpg",
    sections: [
      {
        name: "Reception Area",
        description: "Welcoming reception designed with a clean, modern aesthetic and comfortable waiting space.",
        images: [
          "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Himalaya/Reception%20Area.jpg"
        ],
        video: ""
      },
      {
        name: "Cabin Rooms",
        description: "Private cabins designed for focused individual work and quick discussions.",
        images: [
          "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Himalaya/Cabin%20Room.jpg",      // url1
          "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Himalaya/Cabin%20Room%202.jpg" // url2
        ],
        video: ""
      },
      {
        name: "MD Cabin",
        description: "Dedicated MD cabin offering a premium and functional workspace.",
        images: [
          "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Himalaya/Cabin%20Room%202.jpg" // url3
        ],
        video: ""
      },
      {
        name: "Meeting Rooms",
        description: "Formal meeting rooms suitable for client discussions and internal reviews.",
        images: [
          "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Himalaya/Meeting%20Room%202.jpg", // url4
          "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Himalaya/Meeting%20Room.jpg"      // url5
        ],
        video: ""
      },
      {
        name: "Workstation Area",
        description: "Open workstation layout supporting collaboration and day-to-day operations.",
        images: [
          "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Himalaya/Reception%20Area.jpg" // url7 (as provided)
        ],
        video: ""
      }
    ]
  }
];

// Helper
export const getProjectById = (id: string) =>
  projects.find((p) => p.id === id);
