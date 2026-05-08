import DepartmentPage, {
  DeptPageProps,
} from "../../DepartmentPage";

const data: DeptPageProps = {
  breadcrumb: "B.Tech Food Technology",
  path: "UG Programmes",

  /* ─── HERO ─── */
  hero: {
    image: "https://i.ytimg.com/vi/9iSx-AjpdoI/maxresdefault.jpg",
    badge: "UG Programme · B.Tech Food Technology",
    title: (
      <>
        B.Tech <span>Food Technology</span>
      </>
    ),
    subtitle:
      "A 4-year professional degree programme bridging agricultural production and food processing — covering food chemistry, microbiology, processing engineering, value addition, Nutraceutical, packaging, and quality assurance.",
    pills: [
      { value: "4 Years", label: "Duration" },
      { value: "60", label: "Seats" },
      { value: "AICTE", label: "Approved" },
      { value: "FSSAI", label: "Compliant" },
    ],
  },

  /* ─── ABOUT ─── */
  about: {
    mainImage: "/ai.png",
    badge1: { label: "CFTRI Collaboration", sub: "TECHNICAL GUIDANCE" },
    badge2: { label: "95% Placement", sub: "TOP FOOD INDUSTRIES" },
    mainDescription: "The B.Tech. in Food Technology at Alva's is a dynamic program designed to master the Bio- chemistry and engineering of food. We combine theoretical knowledge with extensive hands-on experience in our state-of-the-art laboratories. Our graduates are industry-ready professionals, capable of innovating in food safety, processing, value addition, quality assurance, packaging and preservation to meet the growing global demand for high-quality and sustainable nutritional solutions.",
    cards: [
      {
        icon: "🏭",
        title: "Programme Overview",
        body: "The B.Tech Food Technology programme at Alva's Institute bridges agricultural production with the food processing industry. It is a 4-year undergraduate degree programme, affiliated KSNUAHS, Shivamogga, covering food chemistry, microbiology, processing engineering, packaging, quality assurance, and food regulatory affairs.",
        wide: true,
      },
      {
        icon: "🔬",
        title: "State-of-the-Art Labs",
        body: "Students access food processing pilot plants, spray dryers, freeze dryers, bakery unit, packaging analysis equipment, sensory evaluation panels, and HACCP-certified microbiology laboratories",
      },
      {
        icon: "🤝",
        title: "Industry Internships",
        body: "Mandatory five months industry internship in the final semester with MoU-linked companies like CAMPCO, CFTRI, Nestlé, ITC, Britannia, and regional FSSAI-approved food testing labs.",
      },
    ],
    stats: [
      { value: "4", label: "Year Programme" },
      { value: "60", label: "Seats Available" },
      { value: "25+", label: "Research Papers" },
      { value: "18+", label: "Years of Excellence" },
    ],
  },

  dean: {
    name: "Dr. S. N. Vasudevan",
    title: "Dean — College of Agriculture",
    photo: "/MSM_0722.jpg",
    experience: "38 Years",
    qualification: "Ph.D. (Seed Science & Technology)",
    specialization: "Seed Science and Technology",
    publications: "95+ Papers",
    bio: "Dr. S. N. Vasudevan is a distinguished academician with 38 years of experience specializing in Seed Science and Technology. He holds a Ph.D. from College of Agriculture, UAS Bangalore (CGPA 3.94/4.00). He has served as Dean (Agriculture) at College of Agriculture, Karekere, Hassan under UAS Bangalore, Associate Director of Research at ZARS, V.C. Farm, Mandya, and Head of ABI Unit at UAS Raichur. He has accomplished projects worth over ₹425 lakhs as Principal Investigator, published 95+ journal articles, authored 10 books, and guided 12 Ph.D. and 32 M.Sc. scholars. He is a Fellow of ISST, New Delhi and has received numerous national and international awards.",
    quote:
      "Food technology is the bridge between the farm and the fork. We train engineers who ensure that every grain harvested reaches the consumer safely, nutritiously, and sustainably.",
  },

  /* ─── STAFF ─── */
  staff: [
    {
      name: "Sharanbasava",
      role: "Assistant Professor",
      photo: "/SHARANA BASAPPA.jpeg",
      tags: ["AGRICULTURE ENGINEERING", "ASSISTANT PROFESSOR", "M.Tech"],
      designation: "Assistant Professor",
      email: "sharanb@aiet.org.in",
      joiningDate: "28.08.2025",
      education: [
        "M.Tech. (Agriculture Engineering)"
      ],
      interests: [
        "Teaching and Research"
      ],
      publications: "01",
      research: "Solar Powered Groundnut Decorticator: Design, Performance and Emission Reductions for Sustainable Agriculture.",
      subjects: [
        "Farm Machinery Equipment II",
        "Human Engineering"
      ]
    },
    {
      name: "Dr. Rahul Phatak",
      role: "Senior Assistant Professor",
      photo: "/RAHUL.jpeg",
      tags: ["POST HARVEST ENGINEERING", "HORTICULTURE", "NATURAL FARMING"],
      designation: "Senior Assistant Professor",
      email: "rahulp@aiet.org.in",
      joiningDate: "20.11.2023",
      education: [
        "Ph.D. (Horticulture) [UHS, Bagalkot, 2018]",
        "M.Sc. (Horticulture) — University Gold Medalist"
      ],
      experience: [
        "Senior Assistant Professor, Dept. of Agricultural Engineering, Alva's Institute of Engineering and Technology, Moodbidri (Nov 2023 – Present)",
        "Research Associate, Natural Farming Project at CoH, Sirsi, UHS, Bagalkot — 4 Years (with UG teaching)",
        "Graduate Assistant at KRCCH, Arabhavi, UHS, Bagalkot — 1 Year",
        "Assistant Professor of Horticulture at AEEC, Koppal, UAS, Raichur — 1 Year"
      ],
      interests: [
        "Horticulture",
        "Plantation, Spices, Medicinal and Aromatic Crops",
        "Organic Farming",
        "Natural Farming"
      ],
      achievements: [
        "Holds three patents (Design Registrations).",
        "INSPIRE Fellow, Dept. of Science and Technology, Govt. of India for Ph.D.",
        "University Gold Medal for securing first rank in M.Sc. Horticulture.",
        "Yuva Vigyani Award from Karnataka Science Federation."
      ],
      memberships: [
        "Life Member of 'Institute of Scholars'"
      ],
      publications: "Research Articles (16), Review Articles (01), Book Chapters (03), Conference Presentations (15), Popular Articles (09), Extension Folders (04), Radio Programs (02), TV Program (01)",
      subjects: [
        "Horticulture",
        "Post-Harvest Engineering",
        "Agriculture Process Engineering",
        "Agro-chemicals",
        "Research Methodology & IPR",
        "Fundamentals of Agriculture",
        "Sustainable Agriculture",
        "Micro-irrigation Engineering",
        "Entrepreneurship Development"
      ],
      projects: "04 (As Project Guide)",
      others: [
        "University Blue in Debate.",
        "Research Excellence Award - 2021 from Institute of Scholars.",
        "Reviewer for a journal, University representation in NSS-National Integration Camp."
      ]
    },
    {
      name: "Rakesh Rudragouda Patil",
      role: "Assistant Professor",
      photo: "/RAKESH.jpeg",
      tags: ["Food Processing", "NPD", "M.Tech."],
      designation: "Assistant Professor",
      email: "rakeshp@aiet.org.in",
      joiningDate: "19.09.2025",
      education: [
        "M.Tech. (Food Processing Technology)"
      ],
      experience: [
        "Research Experience — 6 Months",
        "Industry Experience — 5 Months"
      ],
      interests: [
        "Research",
        "New Product Development (NPD)"
      ],
      publications: "01",
      research: "Solar Powered Groundnut Decorticator: Design, Performance and Emission Reductions for Sustainable Agriculture.",
      subjects: [
        "Food and Agriculture Aspects"
      ]
    },
    {
      name: "Dr. Yamagar S. G.",
      role: "Senior Assistant Professor",
      photo: "/Yamagar.png",
      tags: ["AGRICULTURE ENGINEERING"],
      designation: "Senior Assistant Professor",
      email: "ysujitrao@aiet.org.in",
      joiningDate: "21.09.2025",
      education: [
        "Ph.D. (Farm Equipment and Power) [ICAR-IARI, New Delhi, 2024]"
      ],
      experience: [
        "Teaching Assistant, Kellapaji College of Agricultural Engineering and Technology, Tavnur, Kerala"
      ],
      interests: [
        "Farm Machinery",
        "Electric Vehicle",
        "Protected Cultivation",
        "Precision and Smart Farming"
      ],
      achievements: [
        "IARI Institute Fellowship.",
        "2nd Rank in ICAR-SRF 2018 in Farm Machinery.",
        "3rd Prize in Essay Competition organized by ICAR-IARI, New Delhi on Mahatma Gandhi's 150th Birth Anniversary."
      ],
      publications: "04",
      research: "08 Research Publications",
      subjects: [
        "Farm Machinery and Equipment I/II",
        "Precision Agriculture and System Management",
        "Artificial Intelligence and Machine Learning (AI-ML)",
        "Human Engineering and Safety",
        "Testing of Agricultural Tractor and Machinery",
        "Tractor Control System",
        "Theory of Machine",
        "Workshop Technology",
        "Micro-Irrigation Engineering",
        "Renewable Energy and Green Technology",
        "Generation of Energy from Waste"
      ],
      projects: "02"
    },
    {
      name: "Mr. Terence Rodrigues",
      role: "Professor & HoD",
      photo: "/Mr. Terence Rodrigues.jpg",
      tags: ["FOOD PRODUCTION", "BAKERY", "HOD", "PROFESSOR"],
      designation: "Professor & HoD",
      email: "rodriguesterence4570@alvascollege.com",
      joiningDate: "01.04.2021",
      education: [
        "M.Sc in Hotel Management (Annamalai University)",
        "M.A in Tourism Management (Madurai Kamaraj University)",
        "P.G Diploma in H.R.M (Karanataka State Open University)",
        "Bachelors In Hotel Management (Mangalore University)"
      ],
      experience: [
        "21 years of Teaching experience + 10 Years Industrial Experience",
        "Professor & HoD, Dept of Hospitality Science at Alva’s College, Moodabidre (April 2021 – Present)",
        "Teacher, MoE, Maldives (1 Year) — B-Tech in Hospitality & Tourism",
        "Principal, Pana Institute of U.G Studies, Mangalore (2 Years)",
        "Principal, Moti Mahal College of Hotel Management, Mangalore (2.5 Years)",
        "Assistant Professor, Sarosh Institute of Hotel Administration, Mangalore (10 Years)",
        "Lecturer, Moti Mahal College of Hotel Management (1 Year)",
        "Chef & Corporate Trainer, Crown & Champa Resorts, Maldives (2015)",
        "Chef, Hotel Prestige, Mangalore (2001 – 2004)",
        "Chef, Hotel Moti Mahal (1998 – 2001)",
        "Chef, Four Season’s Resort (1995 – 1998)"
      ],
      interests: [
        "Cooking",
        "Spice Plantation (Pepper, Nutmeg, etc.)"
      ],
      achievements: [
        "Chairperson, Board of Studies, Alva’s College (Autonomous) Dept of Hospitality Science",
        "Chairperson, Board of Examinees, Alva’s College (Autonomous) Dept of Hospitality Sc.",
        "Member, Board of Studies, Mangalore University, Dept of Hospitality Science",
        "Chairperson, Board of Examinees, Mangalore University, Dept of Hospitality Science",
        "External Examiner for Food Production Practicals at Yenepoya University",
        "External Examiner for Food Production Practicals at NITTE University"
      ],
      subjects: [
        "Food Production",
        "Bakery & Confectionery",
        "F&B Management"
      ],
      projects: "Industrial Training projects as a project guide"
    },
  ],

  /* ─── ACTIVITIES ─── */
  activities: [
    {
      icon: "🍱",
      bg: "rgba(239,68,68,0.15)",
      title: "National Food Festival",
      description:
        "Annual showcase where students present self-developed food products — ready-to-eat meals, fortified snacks, herbal beverages — to industry judges, FSSAI officials, and media.",
      tag: "Annual Event",
    },
    {
      icon: "🏭",
      bg: "rgba(22,163,74,0.15)",
      title: "Industrial Visit Program",
      description:
        "Structured visits to food processing plants including dairy plants, beverage factories, FSSAI testing laboratories, and export-oriented agro-processing units across Karnataka.",
      tag: "Industrial Visit",
    },
    {
      icon: "📋",
      bg: "rgba(59,130,246,0.15)",
      title: "FSSAI Awareness Drive",
      description:
        "Students conduct drives in local markets to educate vendors and small food businesses about FSSAI licensing, food labelling requirements, and hygiene standards compliance.",
      tag: "Community",
    },
    {
      icon: "🧬",
      bg: "rgba(168,85,247,0.15)",
      title: "Product Development Hackathon",
      description:
        "48-hour interdisciplinary hackathon encouraging students to ideate, develop, and pitch marketable food products addressing real consumer problems — nutrition gap, shelf life, or food waste.",
      tag: "Innovation",
    },
    {
      icon: "🎓",
      bg: "rgba(250,204,21,0.15)",
      title: "Expert Lecture Series",
      description:
        "Monthly guest lectures by food scientists, FSSAI officers, startup founders, and R&D heads from leading food companies providing industry insights and career guidance.",
      tag: "Academic",
    },
    {
      icon: "🏆",
      bg: "rgba(20,184,166,0.15)",
      title: "Inter-College Food Science Quiz",
      description:
        "State-level food science quiz competition organised by the department, attracting teams from across Karnataka and fostering healthy academic competition among agri-food students.",
      tag: "Competition",
    },
  ],

  /* ─── GALLERY ─── */
  gallery: [
    {
      src: "/LAB1.jpeg",
      alt: "Food Processing Lab",
      caption: "Pilot Plant — Food Processing Unit",
      span: true,
      placeholder: "🏭",
      bg: "linear-gradient(135deg, #450a0a, #7f1d1d)",
    },
    {
      src: "/LAB2.jpeg",
      alt: "Laboratory Analysis",
      caption: "Food Quality & Analysis Lab",
      placeholder: "🔬",
      bg: "linear-gradient(135deg, #0a2e05, #14532d)",
    },
    {
      src: "/agriculture%20field2.jpeg",
      alt: "Raw Material",
      caption: "Farm-to-Fork Raw Material Sourcing",
      placeholder: "🌾",
      bg: "linear-gradient(135deg, #422006, #78350f)",
    },
    {
      src: "/agrimarkeing.jpeg",
      alt: "Agri Marketing",
      caption: "Agricultural Marketing & Value Chain",
      placeholder: "📦",
      bg: "linear-gradient(135deg, #1e3a8a, #1e40af)",
    },
    {
      src: "/PLACEMENT.jpg",
      alt: "Placements",
      caption: "Industry Placements & Internships",
      placeholder: "🎓",
      bg: "linear-gradient(135deg, #312e81, #3730a3)",
    },
    {
      src: "/A.I.E.T%20CAMPUS%20-2026-186.jpg",
      alt: "Campus Activities",
      caption: "Academic Events & Competitions",
      placeholder: "🏆",
      bg: "linear-gradient(135deg, #064e3b, #065f46)",
    },
  ],
};

const BTechFoodTechnology = () => <DepartmentPage {...data} />;
export default BTechFoodTechnology;
