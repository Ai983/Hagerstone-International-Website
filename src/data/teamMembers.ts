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
    role: 'Founder & Managing Director',
    image: '/founders/dhruvsir.png',
    //category: 'Leadership',
    bio: 'Dhruv Agarwal is the Founder and Managing Director of Hagerstone International, bringing a strong engineering foundation and global execution exposure to the firm. A Civil Engineer from Delhi College of Engineering, his early career with Laing O’Rourke’s Interior Division in Dubai introduced him to large-scale interior fit-outs and complex project delivery. Over the years, Dhruv has led the execution of 10+ million sq. ft. of projects across India, the UAE, and Myanmar, spanning commercial offices, hospitality, and large-format developments. Driven by a vision to deliver seamless, end-to-end design-and-build solutions, he founded Hagerstone to bridge the gap between creative design and practical execution. His leadership focuses on innovation, execution excellence, and building scalable systems that deliver long-term value for clients.'
  },
  {
    id: '2',
    name: 'Bhaskar Tyagi',
    role: 'Director - Operations',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Bhaskar%20Sir.jpg',
    //category: 'Leadership',
    bio: 'Bhaskar Tyagi serves as Director – Operations at Hagerstone International, bringing 16+ years of experience in the hospitality and interior design industry. With a strong specialization in interior design for hotels and guest-centric environments, he has consistently delivered spaces that balance aesthetics, functionality, and operational efficiency. His deep understanding of hospitality operations, design standards, and on-ground execution enables him to translate concepts into high-performing spaces. Bhaskar plays a key role in overseeing project execution, quality control, and operational workflows across multiple sites. Known for his attention to detail and execution discipline, he ensures every project meets Hagerstone’s standards of precision, quality, and client satisfaction.'
  },
  {
    id: '3',
    name: 'Ritu Sharma',
    role: 'Executive Assistant',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Ritumaam.jpg',
    //category: 'Architect',
    bio: 'With over 8 years of experience supporting senior leadership, Ritu plays a critical role in enabling smooth decision-making and efficient operations at Hagerstone International. She manages executive scheduling, high-level communication, coordination across departments, and director-level reporting with precision and discretion. Known for her reliability, clarity, and follow-through, she ensures leadership stays focused on strategic priorities while day-to-day execution runs seamlessly.'
  },
  {
    id: '4',
    name: 'Anju Maurya',
    role: 'Interior Designer',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Anju%20Maurya.jpg',
    bio: 'An experienced design professional specialising in space planning and user-centric layouts. She ensures every space is planned for functionality, flow, and future adaptability. Her collaborative approach strengthens coordination between design intent and project execution.'
  },
  // {
  //   id: '5',
  //   name: 'Khushi Gupta',
  //   role: 'Design Project Lead',
  //   image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Khushi%20Gupta.jpg',
  //   //category: 'Marketing',
  //   bio: 'A creative Interior Designer who transforms concepts into functional, build-ready designs. She works on layouts, material selection, and design coordination while keeping execution feasibility in focus. Her design sensibility balances aesthetics with practicality for commercial interior projects.'
  // },
  {
    id: '6',
    name: 'Avisha',
    role: 'Supply Chain Specialist',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/AvishaM.jpg',
    //category: 'Procurement',
    bio: 'The Supply Chain Specialist ensures seamless coordination between procurement, vendors, warehouses, and project sites to keep operations running efficiently. This role focuses on material planning, logistics coordination, inventory tracking, and delivery scheduling to support uninterrupted execution. By maintaining visibility across the supply chain, the specialist helps optimise costs, reduce delays, and ensure timely availability of materials across all active projects.'
  },
  {
    id: '7',
    name: 'Anshika Singhal',
    role: 'Junior Design Specialist',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Anshika%20Singhal.jpg',
    //category: 'Marketing',
    bio: 'Our Design & Project Leads bring a sharp creative vision and hands-on curiosity to every project. With up to 2 years of on-ground experience, they handle 3D design, site visits, BOQ preparation, and client coordination with exceptional attention to detail. Their energy, fresh perspective, and dedication ensure every project moves smoothly from concept to execution with style and precision.'
  },
  {
    id: '8',
    name: 'Ritu Bhatt',
    role: 'Accountant',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Ritu%20%20Bhatt.jpg',
    //category: 'Marketing',
    bio: 'An organised and dependable Accounts Executive handling invoices, imprests, payment tracking, and vendor coordination. She brings consistency and transparency to financial processes while supporting day-to-day accounting operations. Her disciplined approach helps keep projects financially aligned and well-managed.'
  },
  {
    id: '9',
    name: 'Saumya',
    role: 'Pre Sales Executive',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Saumya%20S.jpg',
    //category: 'Marketing',
    bio: 'An energetic Sales Executive who brings strong communication skills and client empathy to every interaction. She supports lead generation, follow-ups, proposal coordination, and client engagement across projects. Her structured approach and positive attitude help convert opportunities into trusted partnerships while maintaining a smooth client experience.'
  },
  {
    id: '10',
    name: 'Shivani',
    role: 'Recruitment Specialist',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Shivani%20J.jpg',
    //category: 'Marketing',
    bio: 'Our Recruitment Specialist plays a vital role in building and strengthening the Hagerstone team. She manages end-to-end hiring across design, engineering, site execution, sales, and support functions—ensuring the right talent is placed in the right role at the right time. With a strong focus on delivery, coordination, and cultural fit, she supports rapid team growth while maintaining quality, efficiency, and long-term team alignment.'
  },
  {
    id: '11',
    name: 'Vishal Prabhakar',
    role: 'Senior Sales Manager',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Vishal%20P.jpg',
    //category: 'Marketing',
    bio: 'A driven Sales Lead with a strong understanding of commercial interiors and design-build execution. He plays a key role in client acquisition, requirement analysis, and guiding clients from first conversation to project closure. Known for his clarity, ownership mindset, and solution-oriented approach, he helps build long-term relationships and consistent business growth for Hagerstone.'
  },
  {
    id: '12',
    name: 'Sameer Sharma',
    role: 'Senior Interior Designer',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Sameer%20Sharma.jpg',
    //category: 'Architect',
    bio: 'A Space Planning specialist focused on layout optimisation and functional design solutions. He works on planning efficiency, circulation, and spatial logic to enhance usability. His designs are rooted in practicality and execution-friendly detailing.'
  },
  
  {
    id: '13',
    name: 'Sahir',
    role: 'Civil Engineer Interior',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Sahir%20Aayaan.jpg',
    //category: 'Accounts',
    bio: 'A technically sound Project Engineer specialising in BOQs, quantity take-offs, and rate analysis. He works closely with design and execution teams to ensure cost accuracy and technical clarity. His analytical mindset supports informed decision-making across projects.'
  },
  {
    id: '14',
    name: 'Divyansh',
    role: 'Civil Engineer Interior',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Divyansh%20.jpg',
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
    role: 'Accounts Assosciate',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Bipin%20Sir.jpg',
    //category: 'Marketing',
    bio: 'A detail-focused Accounts Executive managing vendor payments, billing coordination, labour settlements, and financial documentation. He ensures accuracy, compliance, and smooth cash flow across projects. His structured working style supports seamless financial operations and strengthens trust across internal teams and partners.'
  },
  {
    id: '17',
    name: 'Saksham',
    role: 'Customer Relationship Manager',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Sakhsham%20V.jpg',
    //category: 'CRM',
    bio: 'Energetic and people-driven, our Business Development team blends communication skills with a deep understanding of the design-build industry. With 1–2 years of experience, they engage clients, manage follow-ups, prepare proposals, and support the conversion of opportunities into long-term relationships. Their enthusiasm fuels Hagerstone’s growth every day.'
  },
  {
    id: '19',
    name: 'Deepak',
    role: 'Senior Procurement Executive - MEP',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Deepak%20%20Sir.jpg',
    //category: 'Marketing',
    bio: 'The Senior Procurement Executive – MEP plays a critical role in ensuring uninterrupted project execution through timely and strategic sourcing of Electrical, HVAC, Plumbing, Firefighting, and Low-Voltage systems. They manage vendor finalisation, technical submittals, sample approvals, rate negotiations, and material planning across sites. With strong coordination between engineering, site teams, and suppliers, this role ensures quality compliance, cost efficiency, and on-time material availability throughout the project lifecycle.'
  },
  {
    id: '20',
    name: 'Harishankar',
    role: 'Site Engineer',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Harishanker%20S.jpg',
    //category: 'Marketing',
    bio: 'Our Site Engineers are the on-ground force driving project execution. Each engineer manages daily site activities including material coordination, labour supervision, quality checks, and progress tracking. Their hands-on involvement ensures timelines, safety standards, and execution quality are maintained across all sites.'
  },
  {
    id: '21',
    name: 'Monu',
    role: 'Site Engineer',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Monu%20s.jpg',
    //category: 'Marketing',
    bio: 'Our Site Engineers are the on-ground force driving project execution. Each engineer manages daily site activities including material coordination, labour supervision, quality checks, and progress tracking. Their hands-on involvement ensures timelines, safety standards, and execution quality are maintained across all sites.'
  },
  {
    id: '22',
    name: 'Dilkush',
    role: 'Site Engineer',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Dilkhush%20S.jpg',
    //category: 'Site Team',
    bio: 'Our Site Engineers are the on-ground force driving project execution. Each engineer manages daily site activities including material coordination, labour supervision, quality checks, and progress tracking. Their hands-on involvement ensures timelines, safety standards, and execution quality are maintained across all sites.'
  },
  {
    id: '23',
    name: 'Shashank',
    role: 'Site Engineers',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Shashank%20S.jpg',
    //category: 'Marketing',
    bio: 'Our Site Engineers are the on-ground force driving project execution. Each engineer manages daily site activities including material coordination, labour supervision, quality checks, and progress tracking. Their hands-on involvement ensures timelines, safety standards, and execution quality are maintained across all sites.'
  },
    {
      id: '24',
      name: 'Mohit Sharma',
      role: 'Site Engineer',
      image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Mohit%20S.jpg',
      //category: 'Marketing',
      bio: 'Our Site Engineers are the on-ground force driving project execution. Each engineer manages daily site activities including material coordination, labour supervision, quality checks, and progress tracking. Their hands-on involvement ensures timelines, safety standards, and execution quality are maintained across all sites.'
    },
    {
    id: '25',
    name: 'Mukul Tyagi',
    role: 'Site Engineer',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Mukul%20S.jpg',
    //category: 'Marketing',
    bio: 'Our Site Engineers are the on-ground force driving project execution. Each engineer manages daily site activities including material coordination, labour supervision, quality checks, and progress tracking. Their hands-on involvement ensures timelines, safety standards, and execution quality are maintained across all sites.'
  },
   {
    id: '26',
    name: ' Shivam Tyagi',
    role: 'Site Engineer',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Shivam%20S.jpg',
    //category: 'Marketing',
    bio: 'Our Site Engineers are the on-ground force driving project execution. Each engineer manages daily site activities including material coordination, labour supervision, quality checks, and progress tracking. Their hands-on involvement ensures timelines, safety standards, and execution quality are maintained across all sites.'
  },
  {
    id: '27',
    name: ' Shubham Tyagi',
    role: 'Site Engineer',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Shubham%20S.jpg',
    //category: 'Marketing',
    bio: 'Our Site Engineers are the on-ground force driving project execution. Each engineer manages daily site activities including material coordination, labour supervision, quality checks, and progress tracking. Their hands-on involvement ensures timelines, safety standards, and execution quality are maintained across all sites.'
  },
  {
    id: '28',
    name: 'Sonu',
    role: 'Site Engineer',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Sonu%20S.jpg',
    //category: 'Marketing',
    bio: 'Our Site Engineers are the on-ground force driving project execution. Each engineer manages daily site activities including material coordination, labour supervision, quality checks, and progress tracking. Their hands-on involvement ensures timelines, safety standards, and execution quality are maintained across all sites.'
  },
   {
    id: '29',
    name: 'Dilip Parashar',
    role: 'Site Engineer',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Dilip%20S.jpg',
    //category: 'Marketing',
    bio: 'Our Site Engineers are the on-ground force driving project execution. Each engineer manages daily site activities including material coordination, labour supervision, quality checks, and progress tracking. Their hands-on involvement ensures timelines, safety standards, and execution quality are maintained across all sites.'
  },
  {
    id: '30',
    name: 'Ajay Dhiman',
    role: 'Site Engineer',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Ajay%20S.jpg',
    //category: 'Marketing',
    bio: 'Our Site Engineers are the on-ground force driving project execution. Each engineer manages daily site activities including material coordination, labour supervision, quality checks, and progress tracking. Their hands-on involvement ensures timelines, safety standards, and execution quality are maintained across all sites.'
  },
  {
    id: '31',
    name: 'Akhil Tyagi',
    role: 'Site Engineer',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Akhil%20S.jpg',
    //category: 'Marketing',
    bio: 'Our Site Engineers are the on-ground force driving project execution. Each engineer manages daily site activities including material coordination, labour supervision, quality checks, and progress tracking. Their hands-on involvement ensures timelines, safety standards, and execution quality are maintained across all sites.'
  },
  {
    id: '32',
    name: 'Arvind Kumar',
    role: 'Site Engineer',
    image: 'https://cuycosjchirgjmfczcle.supabase.co/storage/v1/object/public/Images/teamphotos/Arvind%20S.jpg',
    //category: 'Marketing',
    bio: 'Our Site Engineers are the on-ground force driving project execution. Each engineer manages daily site activities including material coordination, labour supervision, quality checks, and progress tracking. Their hands-on involvement ensures timelines, safety standards, and execution quality are maintained across all sites.'
  },



];
