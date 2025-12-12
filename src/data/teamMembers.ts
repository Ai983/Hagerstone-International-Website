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
    bio: 'Civil Engineer from Delhi College of Engineering. With over 10 million sq ft of projects delivered across UAE, Myanmar, and India, Dhruv established Hagerstone to provide seamless, end-to-end design and build services blending creativity with functionality.'
  },
  {
    id: '2',
    name: 'Bhaskar Tyagi',
    role: 'Director',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Bhaskersir.jpg',
    //category: 'Leadership',
    bio: 'Director of Hagerstone International Pvt. Ltd., with over 16+ years of extensive experience in the hospitality industry, specializing in interior design. Bhaskar delivers luxurious, functional, and guest-centric spaces that enhance the hotel experience.'
  },
  {
    id: '3',
    name: 'Ritu Bhatt',
    role: 'Office Manager',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Ritumaam.jpg',
    //category: 'Architect',
    bio: 'Director of Hagerstone International Pvt. Ltd., with over 16+ years of extensive experience in the hospitality industry, specializing in interior design. Bhaskar delivers luxurious, functional, and guest-centric spaces that enhance the hotel experience.'
  },
  {
    id: '4',
    name: 'Anju',
    role: 'Project Lead',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Anju.jpg',
    bio: 'Director of Hagerstone International Pvt. Ltd., with over 16+ years of extensive experience in the hospitality industry, specializing in interior design. Bhaskar delivers luxurious, functional, and guest-centric spaces that enhance the hotel experience.'
  },
  {
    id: '5',
    name: 'Khushi',
    role: 'Design & Delivery Specialist',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Khushi.jpg',
    //category: 'Marketing',
    bio: 'Director of Hagerstone International Pvt. Ltd., with over 16+ years of extensive experience in the hospitality industry, specializing in interior design. Bhaskar delivers luxurious, functional, and guest-centric spaces that enhance the hotel experience.'
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
    bio: 'Director of Hagerstone International Pvt. Ltd., with over 16+ years of extensive experience in the hospitality industry, specializing in interior design. Bhaskar delivers luxurious, functional, and guest-centric spaces that enhance the hotel experience.'
  },
  {
    id: '8',
    name: 'Ritu',
    role: 'Accounts Manager',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Ritu.jpg',
    //category: 'Marketing',
    bio: 'Director of Hagerstone International Pvt. Ltd., with over 16+ years of extensive experience in the hospitality industry, specializing in interior design. Bhaskar delivers luxurious, functional, and guest-centric spaces that enhance the hotel experience.'
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
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/vikas.JPG',
    //category: 'Architect',
    bio: 'Director of Hagerstone International Pvt. Ltd., with over 16+ years of extensive experience in the hospitality industry, specializing in interior design. Bhaskar delivers luxurious, functional, and guest-centric spaces that enhance the hotel experience.'
  },
  
  {
    id: '13',
    name: 'Amit',
    role: 'Accounts Manager',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Amit.JPG',
    //category: 'Accounts',
    bio: 'Director of Hagerstone International Pvt. Ltd., with over 16+ years of extensive experience in the hospitality industry, specializing in interior design. Bhaskar delivers luxurious, functional, and guest-centric spaces that enhance the hotel experience.'
  },
  {
    id: '14',
    name: 'Divyansh',
    role: 'Project Engineer',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/divyansh.JPG',
    //category: 'Architect',
    bio: 'Director of Hagerstone International Pvt. Ltd., with over 16+ years of extensive experience in the hospitality industry, specializing in interior design. Bhaskar delivers luxurious, functional, and guest-centric spaces that enhance the hotel experience.'
  },
  {
    id: '15',
    name: 'Shubh Dwivedi',
    role: 'AI Engineer',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/aniket.JPG',
    //category: 'AI/Technology',
    bio: 'Director of Hagerstone International Pvt. Ltd., with over 16+ years of extensive experience in the hospitality industry, specializing in interior design. Bhaskar delivers luxurious, functional, and guest-centric spaces that enhance the hotel experience.'
  },
  {
    id: '16',
    name: 'Bipin',
    role: 'Accounts Manager',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Bipin.jpg',
    //category: 'Marketing',
    bio: 'Director of Hagerstone International Pvt. Ltd., with over 16+ years of extensive experience in the hospitality industry, specializing in interior design. Bhaskar delivers luxurious, functional, and guest-centric spaces that enhance the hotel experience.'
  },
  {
    id: '17',
    name: 'Saksham',
    role: 'Customer Relations',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Saksham.jpg',
    //category: 'CRM',
    bio: 'Director of Hagerstone International Pvt. Ltd., with over 16+ years of extensive experience in the hospitality industry, specializing in interior design. Bhaskar delivers luxurious, functional, and guest-centric spaces that enhance the hotel experience.'
  },
  {
    id: '18',
    name: 'Bittu',
    role: 'Supply Chain Specialist',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Bipin.jpg',
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
