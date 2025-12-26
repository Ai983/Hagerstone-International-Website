// src/data/teamMembers.ts
// Centralized and optimized team member data for OurTeam page

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  image: string;
  bio?: string;
};

export const teamMembers: TeamMember[] = [
  // Example data, replace with real data for all 40+ members
  {
    id: '1',
    name: 'Dhruv Agarwal',
    role: 'Managing Director',
    image: '/founders/dhruvsir.png',
    //category: 'Leadership',
    bio: 'Civil Engineer from Delhi College of Engineering. With over 10 million sq ft of projects delivered across UAE, Myanmar, and India, Dhruv sir established Hagerstone to provide seamless, end-to-end design and build services blending creativity with functionality.'
  },
  {
    id: '2',
    name: 'Bhaskar Tyagi',
    role: 'Director',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Bhaskersir.jpg',
    //category: 'Leadership',
    bio: 'Director of Hagerstone International Pvt. Ltd., with over 16+ years of extensive experience in the hospitality industry, specializing in interior design. Bhaskar sir delivers luxurious, functional, and guest-centric spaces that enhance the hotel experience.'
  },
  {
    id: '3',
    name: 'Ritu',
    role: 'Executive Assistant',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Ritumaam.jpg',
    //category: 'Architect',
    bio: 'With 8+ years managing operations, our Office Coordinator ensures smooth day-to-day functioning across departments. They handle communication, documentation, scheduling, and director-level reporting. Their organisational excellence ensures every team has the support and clarity needed to deliver high-performance results.'
  },
  {
    id: '4',
    name: 'Anju',
    role: 'Design & Space Planning',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Anju.jpg',
    bio: 'An experienced design professional specialising in space planning and user-centric layouts. She ensures every space is planned for functionality, flow, and future adaptability. Her collaborative approach strengthens coordination between design intent and project execution.'
  },
  {
    id: '5',
    name: 'Khushi',
    role: 'Senior Design Specialist',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Khushi.jpg',
    //category: 'Marketing',
    bio: 'A creative Interior Designer who transforms concepts into functional, build-ready designs. She works on layouts, material selection, and design coordination while keeping execution feasibility in focus. Her design sensibility balances aesthetics with practicality for commercial interior projects.'
  },
  {
    id: '6',
    name: 'Avisha',
    role: 'Supply Chain Specialist',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Avisha.jpg',
    //category: 'Procurement',
    bio: 'Director of Hagerstone International Pvt. Ltd., with over 16+ years of extensive experience in the hospitality industry, specializing in interior design. Bhaskar delivers luxurious, functional, and guest-centric spaces that enhance the hotel experience.'
  },
  {
    id: '7',
    name: 'Anshika',
    role: 'Junior Design Specialist',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Anshika.jpg',
    //category: 'Marketing',
    bio: 'Our Design & Project Leads bring a sharp creative vision and hands-on curiosity to every project. With up to 2 years of on-ground experience, they handle 3D design, site visits, BOQ preparation, and client coordination with exceptional attention to detail. Their energy, fresh perspective, and dedication ensure every project moves smoothly from concept to execution with style and precision.'
  },
  {
    id: '8',
    name: 'Ritu Bhatt',
    role: 'Accountant',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Ritu.jpg',
    //category: 'Marketing',
    bio: 'An organised and dependable Accounts Executive handling invoices, imprests, payment tracking, and vendor coordination. She brings consistency and transparency to financial processes while supporting day-to-day accounting operations. Her disciplined approach helps keep projects financially aligned and well-managed.'
  },
  {
    id: '9',
    name: 'Saumya',
    role: 'Sales Team',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Saumya.jpg',
    //category: 'Marketing',
    bio: 'An energetic Sales Executive who brings strong communication skills and client empathy to every interaction. She supports lead generation, follow-ups, proposal coordination, and client engagement across projects. Her structured approach and positive attitude help convert opportunities into trusted partnerships while maintaining a smooth client experience.'
  },
  {
    id: '10',
    name: 'Shivani',
    role: 'Recruitment Specialist',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Shivani.jpg',
    //category: 'Marketing',
    bio: 'Director of Hagerstone International Pvt. Ltd., with over 16+ years of extensive experience in the hospitality industry, specializing in interior design. Bhaskar delivers luxurious, functional, and guest-centric spaces that enhance the hotel experience.'
  },
  {
    id: '11',
    name: 'Vishal',
    role: 'Sales Executive',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Vishal.jpg',
    //category: 'Marketing',
    bio: 'A driven Sales Lead with a strong understanding of commercial interiors and design-build execution. He plays a key role in client acquisition, requirement analysis, and guiding clients from first conversation to project closure. Known for his clarity, ownership mindset, and solution-oriented approach, he helps build long-term relationships and consistent business growth for Hagerstone.'
  },
  {
    id: '12',
    name: 'Sameer',
    role: 'Design & Space Planning',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Sameer.jpg',
    //category: 'Architect',
    bio: 'A Space Planning specialist focused on layout optimisation and functional design solutions. He works on planning efficiency, circulation, and spatial logic to enhance usability. His designs are rooted in practicality and execution-friendly detailing.'
  },
  
  {
    id: '13',
    name: 'Sahir',
    role: 'Project Engineer',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Sahir.jpg',
    //category: 'Accounts',
    bio: 'A technically sound Project Engineer specialising in BOQs, quantity take-offs, and rate analysis. He works closely with design and execution teams to ensure cost accuracy and technical clarity. His analytical mindset supports informed decision-making across projects.'
  },
  {
    id: '14',
    name: 'Divyansh',
    role: 'Project Engineer',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Divyansh.jpg',
    //category: 'Architect',
    bio: 'Focused on precision and execution feasibility, this Project Engineer handles drawings, BOQs, and item-wise detailing. He plays a critical role in aligning design intent with on-ground execution. His coordination with site and procurement teams ensures smooth project flow.'
  },
  {
    id: '15',
    name: 'Shubh Dwivedi',
    role: 'AI Engineer',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Shubh.jpg',
    //category: 'AI/Technology',
    bio: 'A forward-thinking AI Engineer responsible for building intelligent automation systems at Hagerstone. He works on internal tools, process automation, data workflows, and AI-driven optimisations that improve speed and efficiency across departments. His work strengthens decision-making, reporting, and scalable operations within the organisation.'
  },
  {
    id: '16',
    name: 'Bipin',
    role: 'Accounts Manager',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Bipin.jpg',
    //category: 'Marketing',
    bio: 'A detail-focused Accounts Executive managing vendor payments, billing coordination, labour settlements, and financial documentation. He ensures accuracy, compliance, and smooth cash flow across projects. His structured working style supports seamless financial operations and strengthens trust across internal teams and partners.'
  },
  {
    id: '17',
    name: 'Saksham',
    role: 'Customer Relationship Manager',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Saksham.jpg',
    //category: 'CRM',
    bio: 'Energetic and people-driven, our Business Development team blends communication skills with a deep understanding of the design-build industry. With 1–2 years of experience, they engage clients, manage follow-ups, prepare proposals, and support the conversion of opportunities into long-term relationships. Their enthusiasm fuels Hagerstone’s growth every day.'
  },
  {
    id: '18',
    name: 'Bittu',
    role: 'Supply Chain Specialist',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Bittu.jpg',
    //category: 'Marketing',
    bio: 'Director of Hagerstone International Pvt. Ltd., with over 16+ years of extensive experience in the hospitality industry, specializing in interior design. Bhaskar delivers luxurious, functional, and guest-centric spaces that enhance the hotel experience.'
  },
  {
    id: '19',
    name: 'Deepak',
    role: 'Project Engineer',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Deepak.jpg',
    //category: 'Marketing',
    bio: 'A proactive Project Engineer involved in technical planning, BOQ preparation, and site coordination. He supports execution teams with accurate data and timely clarifications. His structured approach helps maintain cost control and execution discipline throughout the project lifecycle.'
  },
  {
    id: '20',
    name: 'Harishankar',
    role: 'Site Engineer',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Harishanker.jpg',
    //category: 'Marketing',
    bio: 'Our Site Engineers are the on-ground force driving project execution. Each engineer manages daily site activities including material coordination, labour supervision, quality checks, and progress tracking. Their hands-on involvement ensures timelines, safety standards, and execution quality are maintained across all sites.'
  },
  {
    id: '21',
    name: 'Monu',
    role: 'Site Engineer',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Monu.jpg',
    //category: 'Marketing',
    bio: 'Our Site Engineers are the on-ground force driving project execution. Each engineer manages daily site activities including material coordination, labour supervision, quality checks, and progress tracking. Their hands-on involvement ensures timelines, safety standards, and execution quality are maintained across all sites.'
  },
  {
    id: '22',
    name: 'Dilkush',
    role: 'Site Engineer',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Dilkush.jpg',
    //category: 'Site Team',
    bio: 'Our Site Engineers are the on-ground force driving project execution. Each engineer manages daily site activities including material coordination, labour supervision, quality checks, and progress tracking. Their hands-on involvement ensures timelines, safety standards, and execution quality are maintained across all sites.'
  },
  {
    id: '23',
    name: 'Shashank',
    role: 'Site Engineers',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Shashank.jpg',
    //category: 'Marketing',
    bio: 'Our Site Engineers are the on-ground force driving project execution. Each engineer manages daily site activities including material coordination, labour supervision, quality checks, and progress tracking. Their hands-on involvement ensures timelines, safety standards, and execution quality are maintained across all sites.'
  },
    {
      id: '24',
      name: 'Mohit Sharma',
      role: 'Site Engineer',
      image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Mohit%20Sharma.jpg',
      //category: 'Marketing',
      bio: 'Our Site Engineers are the on-ground force driving project execution. Each engineer manages daily site activities including material coordination, labour supervision, quality checks, and progress tracking. Their hands-on involvement ensures timelines, safety standards, and execution quality are maintained across all sites.'
    },
    {
    id: '25',
    name: 'Mukul Tyagi',
    role: 'Site Engineer',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Mukul%20Tyagi.jpg',
    //category: 'Marketing',
    bio: 'Our Site Engineers are the on-ground force driving project execution. Each engineer manages daily site activities including material coordination, labour supervision, quality checks, and progress tracking. Their hands-on involvement ensures timelines, safety standards, and execution quality are maintained across all sites.'
  },
   {
    id: '26',
    name: ' Shivam Tyagi',
    role: 'Site Engineer',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Shivam%20Tyagi.jpg',
    //category: 'Marketing',
    bio: 'Our Site Engineers are the on-ground force driving project execution. Each engineer manages daily site activities including material coordination, labour supervision, quality checks, and progress tracking. Their hands-on involvement ensures timelines, safety standards, and execution quality are maintained across all sites.'
  },
  {
    id: '27',
    name: ' Shubham Tyagi',
    role: 'Site Engineer',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Shubham%20Tyagi.jpg',
    //category: 'Marketing',
    bio: 'Our Site Engineers are the on-ground force driving project execution. Each engineer manages daily site activities including material coordination, labour supervision, quality checks, and progress tracking. Their hands-on involvement ensures timelines, safety standards, and execution quality are maintained across all sites.'
  },
  {
    id: '28',
    name: 'Sonu',
    role: 'Site Engineer',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Sonu.jpg',
    //category: 'Marketing',
    bio: 'Our Site Engineers are the on-ground force driving project execution. Each engineer manages daily site activities including material coordination, labour supervision, quality checks, and progress tracking. Their hands-on involvement ensures timelines, safety standards, and execution quality are maintained across all sites.'
  },
   {
    id: '29',
    name: 'Dilip Parashar',
    role: 'Site Engineer',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Dilip%20Parashar.jpg',
    //category: 'Marketing',
    bio: 'Our Site Engineers are the on-ground force driving project execution. Each engineer manages daily site activities including material coordination, labour supervision, quality checks, and progress tracking. Their hands-on involvement ensures timelines, safety standards, and execution quality are maintained across all sites.'
  },
  {
    id: '30',
    name: 'Ajay Dhiman',
    role: 'Site Engineer',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Ajay%20Dhiman.jpg',
    //category: 'Marketing',
    bio: 'Our Site Engineers are the on-ground force driving project execution. Each engineer manages daily site activities including material coordination, labour supervision, quality checks, and progress tracking. Their hands-on involvement ensures timelines, safety standards, and execution quality are maintained across all sites.'
  },
  {
    id: '31',
    name: 'Akhil Tyagi',
    role: 'Site Engineer',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Akhil%20Tyagi.jpg',
    //category: 'Marketing',
    bio: 'Our Site Engineers are the on-ground force driving project execution. Each engineer manages daily site activities including material coordination, labour supervision, quality checks, and progress tracking. Their hands-on involvement ensures timelines, safety standards, and execution quality are maintained across all sites.'
  },
  {
    id: '32',
    name: 'Arvind Kumar',
    role: 'Site Engineer',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Arvind%20Kumar.jpg',
    //category: 'Marketing',
    bio: 'Our Site Engineers are the on-ground force driving project execution. Each engineer manages daily site activities including material coordination, labour supervision, quality checks, and progress tracking. Their hands-on involvement ensures timelines, safety standards, and execution quality are maintained across all sites.'
  },



];
