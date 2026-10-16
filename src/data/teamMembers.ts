// src/data/teamMembers.ts
// Centralized and optimized team member data for OurTeam page

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  image: string;
  imageAlt: string;
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
    imageAlt: 'Dhruv Agarwal - Founder & Managing Director at Hagerstone International office design and build company',
    bio: 'Dhruv Agarwal is the Founder and Managing Director of Hagerstone International, bringing a strong engineering foundation and global execution exposure to the firm. A Civil Engineer from Delhi College of Engineering, his early career with Laing O’Rourke’s Interior Division in Dubai introduced him to large-scale interior fit-outs and complex project delivery. Over the years, Dhruv has led the execution of 10+ million sq. ft. of projects across India, the UAE, and Myanmar, spanning commercial offices, hospitality, and large-format developments. Driven by a vision to deliver seamless, end-to-end design-and-build solutions, he founded Hagerstone to bridge the gap between creative design and practical execution. His leadership focuses on innovation, execution excellence, and building scalable systems that deliver long-term value for clients.'
  },
  {
    id: '2',
    name: 'Bhaskar Tyagi',
    role: 'Director - Operations',
    image: '/team/bhaskar-sir.webp',
    //category: 'Leadership',
    imageAlt: 'Bhaskar Tyagi - Director of Operations at Hagerstone International',
    bio: 'Bhaskar Tyagi serves as Director – Operations at Hagerstone International, bringing 16+ years of experience in the hospitality and interior design industry. With a strong specialization in interior design for hotels and guest-centric environments, he has consistently delivered spaces that balance aesthetics, functionality, and operational efficiency. His deep understanding of hospitality operations, design standards, and on-ground execution enables him to translate concepts into high-performing spaces. Bhaskar plays a key role in overseeing project execution, quality control, and operational workflows across multiple sites. Known for his attention to detail and execution discipline, he ensures every project meets Hagerstone’s standards of precision, quality, and client satisfaction.'
  },
  {
    id: '3',
    name: 'Ritu Sharma',
    role: 'Executive Assistant',
    image: '/team/ritumaam.webp',
    //category: 'Architect',
    imageAlt: 'Ritu Sharma - Executive Assistant at Hagerstone International',
    bio: 'With over 8 years of experience supporting senior leadership, Ritu plays a critical role in enabling smooth decision-making and efficient operations at Hagerstone International. She manages executive scheduling, high-level communication, coordination across departments, and director-level reporting with precision and discretion. Known for her reliability, clarity, and follow-through, she ensures leadership stays focused on strategic priorities while day-to-day execution runs seamlessly.'
  },
  {
    id: '4',
    name: 'Anju Maurya',
    role: 'Interior Designer',
    image: '/team/anju-maurya.webp',
    imageAlt: 'Anju Maurya - Interior Designer at Hagerstone International',
    bio: 'An experienced design professional specialising in space planning and user-centric layouts. She ensures every space is planned for functionality, flow, and future adaptability. Her collaborative approach strengthens coordination between design intent and project execution.'
  },
  // {
  //   id: '5',
  //   name: 'Khushi Gupta',
  //   role: 'Design Project Lead',
  //   image: '/team/khushi-gupta.webp',
  //   //category: 'Marketing',
  //   bio: 'A creative Interior Designer who transforms concepts into functional, build-ready designs. She works on layouts, material selection, and design coordination while keeping execution feasibility in focus. Her design sensibility balances aesthetics with practicality for commercial interior projects.'
  // },
  {
    id: '6',
    name: 'Avisha',
    role: 'Supply Chain Specialist',
    image: '/team/avisham.webp',
    //category: 'Procurement',
    imageAlt: 'Avisha - Supply Chain Specialist at Hagerstone International',
    bio: 'The Supply Chain Specialist ensures seamless coordination between procurement, vendors, warehouses, and project sites to keep operations running efficiently. This role focuses on material planning, logistics coordination, inventory tracking, and delivery scheduling to support uninterrupted execution. By maintaining visibility across the supply chain, the specialist helps optimise costs, reduce delays, and ensure timely availability of materials across all active projects.'
  },
  {
    id: '7',
    name: 'Anshika Singhal',
    role: 'Junior Design Specialist',
    image: '/team/anshika-singhal.webp',
    //category: 'Marketing',
    imageAlt: 'Anshika Singhal - Junior Design Specialist at Hagerstone International',
    bio: 'Our Design & Project Leads bring a sharp creative vision and hands-on curiosity to every project. With up to 2 years of on-ground experience, they handle 3D design, site visits, BOQ preparation, and client coordination with exceptional attention to detail. Their energy, fresh perspective, and dedication ensure every project moves smoothly from concept to execution with style and precision.'
  },
  {
    id: '8',
    name: 'Ritu Bhatt',
    role: 'Accountant',
    image: '/team/ritu-bhatt.webp',
    //category: 'Marketing',
    imageAlt: 'Ritu Bhatt - Accountant at Hagerstone International',
    bio: 'An organised and dependable Accounts Executive handling invoices, imprests, payment tracking, and vendor coordination. She brings consistency and transparency to financial processes while supporting day-to-day accounting operations. Her disciplined approach helps keep projects financially aligned and well-managed.'
  },
  {
    id: '9',
    name: 'Saumya',
    role: 'Pre Sales Executive',
    image: '/team/saumya-s.webp',
    //category: 'Marketing',
    imageAlt: 'Saumya - Pre Sales Executive at Hagerstone International',
    bio: 'An energetic Sales Executive who brings strong communication skills and client empathy to every interaction. She supports lead generation, follow-ups, proposal coordination, and client engagement across projects. Her structured approach and positive attitude help convert opportunities into trusted partnerships while maintaining a smooth client experience.'
  },
  {
    id: '10',
    name: 'Shivani',
    role: 'Recruitment Specialist',
    image: '/team/shivani-j.webp',
    //category: 'Marketing',
    imageAlt: 'Shivani - Recruitment Specialist at Hagerstone International',
    bio: 'Our Recruitment Specialist plays a vital role in building and strengthening the Hagerstone team. She manages end-to-end hiring across design, engineering, site execution, sales, and support functions—ensuring the right talent is placed in the right role at the right time. With a strong focus on delivery, coordination, and cultural fit, she supports rapid team growth while maintaining quality, efficiency, and long-term team alignment.'
  },
  {
    id: '11',
    name: 'Vishal Prabhakar',
    role: 'Senior Sales Manager',
    image: '/team/vishal-p.webp',
    //category: 'Marketing',
    imageAlt: 'Vishal Prabhakar - Senior Sales Manager at Hagerstone International',
    bio: 'A driven Sales Lead with a strong understanding of commercial interiors and design-build execution. He plays a key role in client acquisition, requirement analysis, and guiding clients from first conversation to project closure. Known for his clarity, ownership mindset, and solution-oriented approach, he helps build long-term relationships and consistent business growth for Hagerstone.'
  },
  {
    id: '12',
    name: 'Sameer Sharma',
    role: 'Senior Interior Designer',
    image: '/team/sameer-sharma.webp',
    //category: 'Architect',
    imageAlt: 'Sameer Sharma - Senior Interior Designer at Hagerstone International',
    bio: 'A Space Planning specialist focused on layout optimisation and functional design solutions. He works on planning efficiency, circulation, and spatial logic to enhance usability. His designs are rooted in practicality and execution-friendly detailing.'
  },
  
  {
    id: '13',
    name: 'Sahir',
    role: 'Civil Engineer Interior',
    image: '/team/sahir-aayaan.webp',
    //category: 'Accounts',
    imageAlt: 'Sahir - Civil Engineer Interior at Hagerstone International',
    bio: 'A technically sound Project Engineer specialising in BOQs, quantity take-offs, and rate analysis. He works closely with design and execution teams to ensure cost accuracy and technical clarity. His analytical mindset supports informed decision-making across projects.'
  },
  {
    id: '14',
    name: 'Divyansh',
    role: 'Civil Engineer Interior',
    image: '/team/divyansh.webp',
    //category: 'Architect',
    imageAlt: 'Divyansh - Civil Engineer Interior at Hagerstone International',
    bio: 'Focused on precision and execution feasibility, this Project Engineer handles drawings, BOQs, and item-wise detailing. He plays a critical role in aligning design intent with on-ground execution. His coordination with site and procurement teams ensures smooth project flow.'
  },
  {
    id: '15',
    name: 'Shubh Dwivedi',
    role: 'AI Engineer',
    image: '/team/shubh.webp',
    //category: 'AI/Technology',
    imageAlt: 'Shubh Dwivedi - AI Engineer at Hagerstone International',
    bio: 'A forward-thinking AI Engineer responsible for building intelligent automation systems at Hagerstone. He works on internal tools, process automation, data workflows, and AI-driven optimisations that improve speed and efficiency across departments. His work strengthens decision-making, reporting, and scalable operations within the organisation.'
  },
  {
    id: '16',
    name: 'Bipin Jha',
    role: 'Accounts Assosciate',
    image: '/team/bipin-sir.webp',
    //category: 'Marketing',
    imageAlt: 'Bipin Jha - Accounts Associate at Hagerstone International',
    bio: 'A detail-focused Accounts Executive managing vendor payments, billing coordination, labour settlements, and financial documentation. He ensures accuracy, compliance, and smooth cash flow across projects. His structured working style supports seamless financial operations and strengthens trust across internal teams and partners.'
  },
  {
    id: '17',
    name: 'Saksham',
    role: 'Customer Relationship Manager',
    image: '/team/sakhsham-v.webp',
    //category: 'CRM',
    imageAlt: 'Saksham - Customer Relationship Manager at Hagerstone International',
    bio: 'Energetic and people-driven, our Business Development team blends communication skills with a deep understanding of the design-build industry. With 1–2 years of experience, they engage clients, manage follow-ups, prepare proposals, and support the conversion of opportunities into long-term relationships. Their enthusiasm fuels Hagerstone’s growth every day.'
  },
  {
    id: '19',
    name: 'Deepak',
    role: 'Senior Procurement Executive - MEP',
    image: '/team/deepak-sir.webp',
    //category: 'Marketing',
    imageAlt: 'Deepak - Senior Procurement Executive at Hagerstone International',
    bio: 'The Senior Procurement Executive – MEP plays a critical role in ensuring uninterrupted project execution through timely and strategic sourcing of Electrical, HVAC, Plumbing, Firefighting, and Low-Voltage systems. They manage vendor finalisation, technical submittals, sample approvals, rate negotiations, and material planning across sites. With strong coordination between engineering, site teams, and suppliers, this role ensures quality compliance, cost efficiency, and on-time material availability throughout the project lifecycle.'
  },
  {
    id: '20',
    name: 'Harishankar',
    role: 'Site Engineer',
    image: '/team/harishanker-s.webp',
    //category: 'Marketing',
    imageAlt: 'Harishankar - Site Engineer at Hagerstone International',
    bio: 'Our Site Engineers are the on-ground force driving project execution. Each engineer manages daily site activities including material coordination, labour supervision, quality checks, and progress tracking. Their hands-on involvement ensures timelines, safety standards, and execution quality are maintained across all sites.'
  },
  {
    id: '21',
    name: 'Monu',
    role: 'Site Engineer',
    image: '/team/monu-s.webp',
    //category: 'Marketing',
    imageAlt: 'Monu - Site Engineer at Hagerstone International',
    bio: 'Our Site Engineers are the on-ground force driving project execution. Each engineer manages daily site activities including material coordination, labour supervision, quality checks, and progress tracking. Their hands-on involvement ensures timelines, safety standards, and execution quality are maintained across all sites.'
  },
  {
    id: '22',
    name: 'Dilkush',
    role: 'Site Engineer',
    image: '/team/dilkhush-s.webp',
    //category: 'Site Team',
    imageAlt: 'Dilkush - Site Engineer at Hagerstone International',
    bio: 'Our Site Engineers are the on-ground force driving project execution. Each engineer manages daily site activities including material coordination, labour supervision, quality checks, and progress tracking. Their hands-on involvement ensures timelines, safety standards, and execution quality are maintained across all sites.'
  },
  {
    id: '23',
    name: 'Shashank',
    role: 'Site Engineers',
    image: '/team/shashank-s.webp',
    //category: 'Marketing',
    imageAlt: 'Shashank - Site Engineer at Hagerstone International',
    bio: 'Our Site Engineers are the on-ground force driving project execution. Each engineer manages daily site activities including material coordination, labour supervision, quality checks, and progress tracking. Their hands-on involvement ensures timelines, safety standards, and execution quality are maintained across all sites.'
  },
    {
      id: '24',
      name: 'Mohit Sharma',
      role: 'Site Engineer',
      image: '/team/mohit-s.webp',
      //category: 'Marketing',
      imageAlt: 'Mohit Sharma - Site Engineer at Hagerstone International',
      bio: 'Our Site Engineers are the on-ground force driving project execution. Each engineer manages daily site activities including material coordination, labour supervision, quality checks, and progress tracking. Their hands-on involvement ensures timelines, safety standards, and execution quality are maintained across all sites.'
    },
    {
    id: '25',
    name: 'Mukul Tyagi',
    role: 'Site Engineer',
    image: '/team/mukul-s.webp',
    //category: 'Marketing',
    imageAlt: 'Mukul Tyagi - Site Engineer at Hagerstone International',
    bio: 'Our Site Engineers are the on-ground force driving project execution. Each engineer manages daily site activities including material coordination, labour supervision, quality checks, and progress tracking. Their hands-on involvement ensures timelines, safety standards, and execution quality are maintained across all sites.'
  },
   {
    id: '26',
    name: ' Shivam Tyagi',
    role: 'Site Engineer',
    image: '/team/shivam-s.webp',
    //category: 'Marketing',
    imageAlt: 'Shivam Tyagi - Site Engineer at Hagerstone International',
    bio: 'Our Site Engineers are the on-ground force driving project execution. Each engineer manages daily site activities including material coordination, labour supervision, quality checks, and progress tracking. Their hands-on involvement ensures timelines, safety standards, and execution quality are maintained across all sites.'
  },
  {
    id: '27',
    name: ' Shubham Tyagi',
    role: 'Site Engineer',
    image: '/team/shubham-s.webp',
    //category: 'Marketing',
    imageAlt: 'Shubham Tyagi - Site Engineer at Hagerstone International',
    bio: 'Our Site Engineers are the on-ground force driving project execution. Each engineer manages daily site activities including material coordination, labour supervision, quality checks, and progress tracking. Their hands-on involvement ensures timelines, safety standards, and execution quality are maintained across all sites.'
  },
  {
    id: '28',
    name: 'Sonu',
    role: 'Site Engineer',
    image: '/team/sonu-s.webp',
    //category: 'Marketing',
    imageAlt: 'Sonu - Site Engineer at Hagerstone International',
    bio: 'Our Site Engineers are the on-ground force driving project execution. Each engineer manages daily site activities including material coordination, labour supervision, quality checks, and progress tracking. Their hands-on involvement ensures timelines, safety standards, and execution quality are maintained across all sites.'
  },
   {
    id: '29',
    name: 'Dilip Parashar',
    role: 'Site Engineer',
    image: '/team/dilip-s.webp',
    //category: 'Marketing',
    imageAlt: 'Dilip Parashar - Site Engineer at Hagerstone International',
    bio: 'Our Site Engineers are the on-ground force driving project execution. Each engineer manages daily site activities including material coordination, labour supervision, quality checks, and progress tracking. Their hands-on involvement ensures timelines, safety standards, and execution quality are maintained across all sites.'
  },
  {
    id: '30',
    name: 'Ajay Dhiman',
    role: 'Site Engineer',
    image: '/team/ajay-s.webp',
    //category: 'Marketing',
    imageAlt: 'Ajay Dhiman - Site Engineer at Hagerstone International',
    bio: 'Our Site Engineers are the on-ground force driving project execution. Each engineer manages daily site activities including material coordination, labour supervision, quality checks, and progress tracking. Their hands-on involvement ensures timelines, safety standards, and execution quality are maintained across all sites.'
  },
  {
    id: '31',
    name: 'Akhil Tyagi',
    role: 'Site Engineer',
    image: '/team/akhil-s.webp',
    //category: 'Marketing',
    imageAlt: 'Akhil Tyagi - Site Engineer at Hagerstone International',
    bio: 'Our Site Engineers are the on-ground force driving project execution. Each engineer manages daily site activities including material coordination, labour supervision, quality checks, and progress tracking. Their hands-on involvement ensures timelines, safety standards, and execution quality are maintained across all sites.'
  },
  {
    id: '32',
    name: 'Arvind Kumar',
    role: 'Site Engineer',
    image: '/team/arvind-s.webp',
    //category: 'Marketing',
    imageAlt: 'Arvind Kumar - Site Engineer at Hagerstone International',
    bio: 'Our Site Engineers are the on-ground force driving project execution. Each engineer manages daily site activities including material coordination, labour supervision, quality checks, and progress tracking. Their hands-on involvement ensures timelines, safety standards, and execution quality are maintained across all sites.'
  },



];
