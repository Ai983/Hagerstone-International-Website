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
  heroVideo?: string;      // NEW: optional hero video
  floors?: { name: string; layout: string }[];
  sections: ProjectSection[];
};

export const projects: ProjectData[] = [
  {
    id: "theon",
    title: "Theon Life Sciences",
    client: "Hagerstone International Pvt. Ltd.",
    year: "2025",
    location: "Baddi, Himachal Pradesh",
    sector: "Pharmaceutical Office",
    hero: "/projects/theon/RECEPTION-REVISED/hero.jpeg",
    heroVideo: "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/videos/WALKTHROUGH.mp4", // NEW
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
    id: "inshorts",
    title: "InShorts",
    client: "Hagerstone International Pvt. Ltd.",
    year: "2025",
    location: "Gurgaon, Haryana",
    sector: "Software Company",
    hero: "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Inshorts/reception.jpg",
    sections: [
      {
        name: "Reception Area",
        description: "A welcoming double-height reception with modern lounge seating.",
        images: ["https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Inshorts/reception.jpg"],
        video: ""
      },
      {
        name: "Rest&Fun",
        description: "Premium boardroom with AV integration.",
        images: ["https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Inshorts/rest&fun1.jpg", "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Inshorts/rest&fun2.jpg", "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Inshorts/rest&fun3.jpg"]
      },
      {
        name: "Workstation",
        description: "An easy and focusing area.",
        images: ["https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Inshorts/workstation1.jpg"]
      },
      {
        name: "Wellness Area",
        description: "An easy and focusing area.",
        images: ["https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Inshorts/wellnessarea.jpg", "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Inshorts/wellnessarea2.jpg"]
      },
      {
        name: "Cafeteria",
        description: "An easy and focusing area.",
        images: ["https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Inshorts/cafeteria1.jpg"]
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
        images: ["https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Revolve/reception2.jpg", "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Revolve/Reception.jpg", "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Revolve/waitingarea.jpg"],
        video: ""
      },
      {
        name: "MD Cabin",
        description: "Premium boardroom with AV integration.",
        images: ["https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Revolve/mdcabin.jpg", "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Revolve/mdcabin2.jpg", "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Revolve/mdcabin3.jpg"]
      },
      {
        name: "Workstation",
        description: "An easy and focusing area.",
        images: ["https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Revolve/worstationarea.jpg", "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Revolve/workstationarea2.jpg"]
      },
      {
        name: "Conference Area",
        description: "An easy and focusing area.",
        images: ["https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Revolve/conferenceroom.jpg", "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Revolve/conferenceroom2.jpg"]
      },
      {
        name: "Cafeteria",
        description: "An easy and focusing area.",
        images: ["https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Revolve/cafeteria.jpg", "https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/Revolve/cafeteria2.jpg"]
      }
    ]
  }
];

// Helper
export const getProjectById = (id: string) =>
  projects.find((p) => p.id === id);