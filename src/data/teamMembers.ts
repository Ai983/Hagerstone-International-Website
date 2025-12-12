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
    name: 'Ritu Bhatt',
    role: 'Office Manager',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Ritumaam.jpg',
    //category: 'Architect',
    bio: 'With 8+ years managing operations, our Office Coordinator ensures smooth day-to-day functioning across departments. They handle communication, documentation, scheduling, and director-level reporting. Their organisational excellence ensures every team has the support and clarity needed to deliver high-performance results.'
  },
  {
    id: '4',
    name: 'Anju',
    role: 'Project Lead',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Anju.jpg',
    bio: 'With over 6 years of experience in 3D design and project execution, our Design & Project Leads blend creativity with on-site practicality. They manage site visits, prepare BOQs, coordinate with vendors, and ensure every design is delivered exactly as envisioned. Their leadership ensures seamless project flow from concept to handover.'
  },
  {
    id: '5',
    name: 'Khushi',
    role: 'Design & Delivery Specialist',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Khushi.jpg',
    //category: 'Marketing',
    bio: 'Our Design & Project Leads bring a sharp creative vision and hands-on curiosity to every project. With up to 1 year of on-ground experience, they handle 3D design, site visits, BOQ preparation, and client coordination with exceptional attention to detail. Their energy, fresh perspective, and dedication ensure every project moves smoothly from concept to execution with style and precision.'
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
    role: 'Lead Designer',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Anshika.jpg',
    //category: 'Marketing',
    bio: 'Our Design & Project Leads bring a sharp creative vision and hands-on curiosity to every project. With up to 2 years of on-ground experience, they handle 3D design, site visits, BOQ preparation, and client coordination with exceptional attention to detail. Their energy, fresh perspective, and dedication ensure every project moves smoothly from concept to execution with style and precision.'
  },
  {
    id: '8',
    name: 'Ritu',
    role: 'Accounts Manager',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Ritu.jpg',
    //category: 'Marketing',
    bio: 'Starting their journey in financial operations, our Junior Accounts Executive assists with invoice processing, payment tracking, vendor coordination, and imprest management. They bring a fresh, organised approach to maintaining records and supporting the finance team. With strong learning intent, they are steadily developing expertise in corporate accounting practices.'
  },
  {
    id: '9',
    name: 'Saumya',
    role: 'Finance team',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Saumya.jpg',
    //category: 'Marketing',
    bio: 'Director of Hagerstone International Pvt. Ltd., with over 16+ years of extensive experience in the hospitality industry, specializing in interior design. Bhaskar delivers luxurious, functional, and guest-centric spaces that enhance the hotel experience.'
  },
  {
    id: '10',
    name: 'Shivani',
    role: 'Human Resources',
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
    bio: 'Director of Hagerstone International Pvt. Ltd., with over 16+ years of extensive experience in the hospitality industry, specializing in interior design. Bhaskar delivers luxurious, functional, and guest-centric spaces that enhance the hotel experience.'
  },
  {
    id: '12',
    name: 'Sameer',
    role: 'Design & Delivery Specialist',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Sameer.jpg',
    //category: 'Architect',
    bio: 'Director of Hagerstone International Pvt. Ltd., with over 16+ years of extensive experience in the hospitality industry, specializing in interior design. Bhaskar delivers luxurious, functional, and guest-centric spaces that enhance the hotel experience.'
  },
  
  {
    id: '13',
    name: 'Sahir',
    role: 'Project Engineer',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Sahir.jpg',
    //category: 'Accounts',
    bio: 'Director of Hagerstone International Pvt. Ltd., with over 16+ years of extensive experience in the hospitality industry, specializing in interior design. Bhaskar delivers luxurious, functional, and guest-centric spaces that enhance the hotel experience.'
  },
  {
    id: '14',
    name: 'Divyansh',
    role: 'Project Engineer',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Divyansh.jpg',
    //category: 'Architect',
    bio: 'Director of Hagerstone International Pvt. Ltd., with over 16+ years of extensive experience in the hospitality industry, specializing in interior design. Bhaskar delivers luxurious, functional, and guest-centric spaces that enhance the hotel experience.'
  },
  {
    id: '15',
    name: 'Shubh Dwivedi',
    role: 'AI Engineer',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Shubh.jpg',
    //category: 'AI/Technology',
    bio: 'Director of Hagerstone International Pvt. Ltd., with over 16+ years of extensive experience in the hospitality industry, specializing in interior design. Bhaskar delivers luxurious, functional, and guest-centric spaces that enhance the hotel experience.'
  },
  {
    id: '16',
    name: 'Bipin',
    role: 'Accounts Manager',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Bipin.jpg',
    //category: 'Marketing',
    bio: 'Director of Hagerstone International Pvt. Ltd., with over 16+ years of extensive experience in the hospitality industry, specializing in interior design. Bhaskar  delivers luxurious, functional, and guest-centric spaces that enhance the hotel experience.'
  },
  {
    id: '17',
    name: 'Saksham',
    role: 'Customer Relations',
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
    bio: 'Director of Hagerstone International Pvt. Ltd., with over 16+ years of extensive experience in the hospitality industry, specializing in interior design. Bhaskar delivers luxurious, functional, and guest-centric spaces that enhance the hotel experience.'
  },
  {
    id: '20',
    name: 'Harishankar',
    role: 'Site Engineer',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Harishanker.jpg',
    //category: 'Marketing',
    bio: 'Director of Hagerstone International Pvt. Ltd., with over 16+ years of extensive experience in the hospitality industry, specializing in interior design. Bhaskar delivers luxurious, functional, and guest-centric spaces that enhance the hotel experience.'
  },
  {
    id: '21',
    name: 'Monu',
    role: 'Site Engineer',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Monu.jpg',
    //category: 'Marketing',
    bio: 'Director of Hagerstone International Pvt. Ltd., with over 16+ years of extensive experience in the hospitality industry, specializing in interior design. Bhaskar delivers luxurious, functional, and guest-centric spaces that enhance the hotel experience.'
  },
  {
    id: '22',
    name: 'Dilkush',
    role: 'Site Engineer',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Dilkush.jpg',
    //category: 'Site Team',
    bio: 'Director of Hagerstone International Pvt. Ltd., with over 16+ years of extensive experience in the hospitality industry, specializing in interior design. Bhaskar delivers luxurious, functional, and guest-centric spaces that enhance the hotel experience.'
  },
  {
    id: '23',
    name: 'Shashank',
    role: 'Finance team',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Shashank.jpg',
    //category: 'Marketing',
    bio: 'Director of Hagerstone International Pvt. Ltd., with over 16+ years of extensive experience in the hospitality industry, specializing in interior design. Bhaskar delivers luxurious, functional, and guest-centric spaces that enhance the hotel experience.'
  },
];
