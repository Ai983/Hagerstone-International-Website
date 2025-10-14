// src/data/teamMembers.ts
// Centralized and optimized team member data for OurTeam page

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  image: string;
  category: string;
  bio?: string;
};

export const teamMembers: TeamMember[] = [
  // Example data, replace with real data for all 40+ members
  {
    id: '1',
    name: 'Dhruv Agarwal',
    role: 'Managing Director',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/dhruvsir.JPG',
    category: 'Leadership',
    bio: 'Civil Engineer from Delhi College of Engineering. With over 10 million sq ft of projects delivered across UAE, Myanmar, and India, Dhruv established Hagerstone to provide seamless, end-to-end design and build services blending creativity with functionality.'
  },
  {
    id: '2',
    name: 'Bhaskar Tyagi',
    role: 'Director',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/bhaskarsir.JPG',
    category: 'Leadership',
    bio: 'Director of Hagerstone International Pvt. Ltd., with over 16+ years of extensive experience in the hospitality industry, specializing in interior design. Bhaskar delivers luxurious, functional, and guest-centric spaces that enhance the hotel experience.'
  },
  {
    id: '3',
    name: 'Vikas Pundhir',
    role: 'Design Head',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/vikas.JPG',
    category: 'Architect',
    bio: 'Director of Hagerstone International Pvt. Ltd., with over 16+ years of extensive experience in the hospitality industry, specializing in interior design. Bhaskar delivers luxurious, functional, and guest-centric spaces that enhance the hotel experience.'
  },
  {
    id: '4',
    name: 'Amit',
    role: 'Accounts Head',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Amit.JPG',
    category: 'Accounts',
    bio: 'Director of Hagerstone International Pvt. Ltd., with over 16+ years of extensive experience in the hospitality industry, specializing in interior design. Bhaskar delivers luxurious, functional, and guest-centric spaces that enhance the hotel experience.'
  },
  {
    id: '5',
    name: 'Aniket Awasthi',
    role: 'AI Engineer',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/aniket.JPG',
    category: 'AI/Technology',
    bio: 'Director of Hagerstone International Pvt. Ltd., with over 16+ years of extensive experience in the hospitality industry, specializing in interior design. Bhaskar delivers luxurious, functional, and guest-centric spaces that enhance the hotel experience.'
  },
  {
    id: '6',
    name: 'Avisha',
    role: 'Procurement Head',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/avisha.JPG',
    category: 'Procurement',
    bio: 'Director of Hagerstone International Pvt. Ltd., with over 16+ years of extensive experience in the hospitality industry, specializing in interior design. Bhaskar delivers luxurious, functional, and guest-centric spaces that enhance the hotel experience.'
  },
  {
    id: '7',
    name: 'Divyansh',
    role: 'Civil Engineer',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/divyansh.JPG',
    category: 'Architect',
    bio: 'Director of Hagerstone International Pvt. Ltd., with over 16+ years of extensive experience in the hospitality industry, specializing in interior design. Bhaskar delivers luxurious, functional, and guest-centric spaces that enhance the hotel experience.'
  },
  {
    id: '8',
    name: 'Dilkush',
    role: 'Site Engineer',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/dilkush.JPG',
    category: 'Site Team',
    bio: 'Director of Hagerstone International Pvt. Ltd., with over 16+ years of extensive experience in the hospitality industry, specializing in interior design. Bhaskar delivers luxurious, functional, and guest-centric spaces that enhance the hotel experience.'
  },
  {
    id: '8',
    name: 'Saksham',
    role: 'Customer Relations',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/saksham.JPG',
    category: 'CRM',
    bio: 'Director of Hagerstone International Pvt. Ltd., with over 16+ years of extensive experience in the hospitality industry, specializing in interior design. Bhaskar delivers luxurious, functional, and guest-centric spaces that enhance the hotel experience.'
  },
  {
    id: '9',
    name: 'Tushar',
    role: 'Digital Marketing Head',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/tushar.JPG',
    category: 'Marketing',
    bio: 'Director of Hagerstone International Pvt. Ltd., with over 16+ years of extensive experience in the hospitality industry, specializing in interior design. Bhaskar delivers luxurious, functional, and guest-centric spaces that enhance the hotel experience.'
  },

];
