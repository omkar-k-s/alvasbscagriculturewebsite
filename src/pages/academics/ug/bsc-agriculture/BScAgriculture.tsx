import DepartmentPage, {
  DeptPageProps,
} from "../../DepartmentPage";

const data: DeptPageProps = {
  breadcrumb: "B.Sc. (Hons) Agriculture",
  path: "UG Programmes",

  /* ─── HERO ─── */
  hero: {
    image: "https://i.ytimg.com/vi/9iSx-AjpdoI/maxresdefault.jpg",
    badge: "UG Programme · B.Sc. Agriculture",
    title: (
      <>
        B.Sc. (Hons) <span>Agriculture</span>
      </>
    ),
    subtitle:
      "A 4-year Professional degree programme with ICAR structured syllabus covering soil science, seed science and technology, agronomy, genetics and plant breeding, plant pathology, entomology, Biotechnology, horticulture and agricultural economics — designed to build skilled, research-ready agricultural professionals.",
    pills: [
      { value: "4 Years", label: "Duration" },
      { value: "60", label: "Seats" },
      { value: "K.S.N.U.A.H.S.,Shivamogga", label: "Affiliated" },
      { value: "ICAR", label: "Curriculum" },
    ],
  },

  /* ─── ABOUT ─── */
  about: {
    mainImage: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=1200",
    badge1: { label: "1st in Costal Karnataka", sub: "PRIVATE AGRI COLLEGE" },
    badge2: { label: "K.S.N.U.A.H.S.,Shivamogga Affiliated", sub: "TOP UNIVERSITY" },
    mainDescription: "Established in 2025, our B.Sc. (Hons) Agriculture program is committed to producing the next generation agricultural leaders. We bridge the gap between traditional farming wisdom and modern technological advancements. Our curriculum is designed as per the 6th Dean Committee Syllabus approved by the Indian Council of Agricultural Research (ICAR), New Delhi in order to provide students with a deep understanding of soil heath, crop / seed production, control of pest and diseases, organic farming and sustainable management practices, ensuring they are well-equipped to tackle real-world agricultural challenges.",
    cards: [
      {
        icon: "🌾",
        title: "Programme Overview",
        body: "The B.Sc. (Hons) Agriculture is the flagship UG degree programme offered by the Alva’s Institute of Agricultural Sciences & Technology adopting the ICAR 6th Dean Committee curriculum ensuring national-standard quality and uniformity across all the Agricultural Universities in India.",
        wide: true,
      },
      {
        icon: "✨",
        title: "Skill Enhancement Courses",
        body: "Specifically designed modules to build practical expertise in niche areas like Apiculture, Mushroom Cultivation, Nursery Management, seed production and Organic Input production, enhancing student employability.",
      },
      {
        icon: "🔬",
        title: "Hands-on Learning",
        body: "Students receive training through farm practicals, field visits, crop production experiments, and internships at leading Public / Private Institutes across the State.",
      },
      {
        icon: "🚀",
        title: "Experiential Learning (ELP)",
        body: "In the 4thYear, every student runs a real agri-enterprise — mushroom cultivation, Apiculture, nursery management, vermicomposting, or dairy / poultry units, bio fertilizer / bio agents production — under faculty mentorship.",
      },
    ],
    stats: [
      { value: "4", label: "Year Programme" },
      { value: "60", label: "Seats Available" },
      { value: "40+", label: "Research Papers" },
      { value: "25+", label: "Years of Excellence" },
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
      "Agriculture is not just a profession — it is a calling to steward the earth and nourish humanity. At our institution, we cultivate scientists, entrepreneurs, and changemakers.",
  },

  /* ─── STAFF ─── */
  staff: [
    {
      name: "Dr. SADASHIVANAGOWDA S.N.",
      role: "Assistant Professor",
      photo: "/Dr. SADASHIVANAGOWDA S. N. O..jpg",
      tags: ["Agronomy", "Cropping Systems", "Ph.D."],
      designation: "Assistant Professor of Agronomy",
      email: "ssgkrishiach21@gmail.com",
      joiningDate: "11.12.2025",
      education: ["B.Sc.(Agri.) [UAS Raichur]", "M.Sc.(Agri.) in Agronomy", "Ph.D.(Agronomy) [UAS, Dharwad]", "PGDAWM [MANAGE, Hyderabad]"],
      experience: ["Assistant Professor (Agronomy) - 5 Years at College of Agriculture, Hassan (UASB)", "Senior Research Fellow at ICAR-Krishi Vigyan Kendra, Vijayapura - 7 months"],
      interests: ["Cropping System", "Crop Diversification"],
      achievements: [
        "Contributed as a Developer in adding a new chapter on Agronomic practices of Moth Bean crop to the PoP, UAS Dharwad (2020).",
        "ISA Best Ph.D. Thesis Award 2020 for Doctoral Research on Evaluation of Alternative Crops and Cropping Systems.",
        "Generated income of ₹3,73,600 from ELP on Integrated Farming Systems (2021-22).",
        "Earned ₹40,000 from half an acre of field bean cultivation (2024) at College of Agriculture, Hassan."
      ],
      memberships: ["Life Membership-International Journal Bio-resource and Stress Management"],
      publications: "International (04), National (05)",
      research: "09 Research Publications",
      projects: "02 (As Co-PI)",
      subjects: "Agronomy",
      others: [
        "Associate Coordinator for RAWEP (5 years) at College of Agriculture, Hassan.",
        "Recipient of Young Scientist Award, Young Agronomist Award and Excellence in Teaching Award.",
        "Conducted extension activities for farmers on IFS, Apiculture, coconut tree climbing, etc."
      ]
    },
    {
      name: "Dr. Sachin U. S.",
      role: "Assistant Professor",
      photo: "/sachin.jpg",
      tags: ["Entomology", "UAV Pilot", "Ph.D."],
      designation: "Assistant Professor of Entomology",
      email: "sachinhort288@gmail.com",
      joiningDate: "01.12.2025",
      education: [
        "B. Sc. (Horticulture), UHS Bagalkot (2013)",
        "M. Sc. in Entomology, UAHS Shivamogga (2015)",
        "Ph. D in Entomology, UHS Bagalkot (2020)",
        "PG Diploma Ornamental and Landscape Gardening, Annamalai University (2015)",
        "PG Diploma in Intellectual Property Rights, Annamalai University (2018)"
      ],
      experience: [
        "Scientist (Plant Protection) at ICAR-KVK, Brahmavar, Udupi (2019-2023)",
        "Senior Research Fellow at ICAR-KVK, Brahmavar, Udupi (2023-2025)"
      ],
      interests: ["Entomology (Toxicology & Molecular Entomology)"],
      achievements: [
        "Young Researcher Award-2022 from Institute of Scholars (InSc).",
        "DGCA-authorized Remote Pilot (Medium Category) for agricultural UAV operations."
      ],
      publications: "16 Research Publications, 10 Conference Abstracts, 11 Popular Articles",
      research: "16 National/International Publications",
      projects: "Nil",
      subjects: "Entomology",
      others: [
        "Participated as a resource person in several training programmes for KVKs.",
        "Attended 22 training programmes organized by SAUs, ICAR institutes, etc.",
        "Organized multiple skilled training programmes sponsored by ASCI and ICAR."
      ]
    },
    {
      name: "Dr. Dhanalakshmi. D",
      role: "Assistant Professor",
      photo: "/danalakshmi.jpeg",
      tags: ["Soil Science", "IPR", "Ph.D."],
      designation: "Assistant Professor of Soil Science",
      email: "Dhanalakshmiagri2@gmail.Com",
      joiningDate: "01.12.2025",
      education: [
        "B. Sc. (Agri.) [UAS, Bangalore, 2011]",
        "M.Sc. (Agri.) in Soil Science and Agril. Chemistry [UAS, Raichur, 2015]",
        "Ph. D (Soil Science) [UAS, Dharwad, 2021]",
        "PGD IPR [Annamalai University, 2016]",
        "PGD RD [Annamalai University, 2020]"
      ],
      experience: [
        "Watershed Manager at Sujal-II RIDF, Mother NGO, Hiriyuru (2011-2012)",
        "Subject Matter Specialist at ADA office, KSDA, Sira (2012-2013)",
        "Research Associate at UAS, Dharwad (2015-2016)",
        "Staff Research Fellow at UAS, Dharwad (2018-2019)",
        "Research Associate at Regional Horticultural Research Center, Kumbapur (2019-2021)",
        "Scientist (SS & AC) at ICAR-KVK, Mudigere (2021-2023)",
        "District Project Co-ordinator at JDA office, KSADA, Chikkamagaluru (2025)"
      ],
      interests: ["Soil Science", "Soil Fertility and productivity", "Soil test laboratory and Research"],
      achievements: ["Received 10 different Awards from different institutes and foundations"],
      publications: "20 Abstracts, 11 Popular articles, 03 Leaflets, 01 Folder, 05 Radio talks",
      research: "05 Research Publications",
      subjects: "Soil Science",
      others: [
        "Presented research data in various Seminars/Conferences/Workshops.",
        "Attended three 21-day Training Programmes on various aspects of Agriculture."
      ]
    },
    {
      name: "Dr. Naveen Nayaka S",
      role: "Assistant Professor",
      photo: "/NAVEEN.png",
      tags: ["Plant Pathology", "Molecular Pathology", "Ph.D."],
      designation: "Assistant Professor of Plant Pathology",
      email: "drnayaknaveen@gmail.com",
      joiningDate: "02.12.2025",
      education: [
        "B.Sc. (Agriculture) [UAS, Bengaluru, 2016]",
        "M.Sc. (Plant Pathology) [IARI, New Delhi, 2018]",
        "Ph.D. (Plant Pathology) [IARI, New Delhi, 2023]"
      ],
      experience: [
        "Agriculture Block Technology Manager — 6 Months"
      ],
      interests: [
        "Plant Disease Diagnostics",
        "Plant-Microbe Interaction",
        "Molecular Plant Pathology"
      ],
      achievements: [
        "H.M. Suresh Memorial Gold Medal at the 51st Convocation of UAS, Bengaluru.",
        "ICAR-Junior Research Fellowship (ICAR-JRF).",
        "IARI Senior Research Fellowship (SRF).",
        "Young Scientist Award-2023 of TSBAS, New Delhi.",
        "Best Ph.D. Thesis Award (2023) under Vigyan Varta Outstanding Achievers Awards."
      ],
      memberships: [
        "Life Membership of Technology Society of Basic and Applied Sciences (TSBAS), New Delhi.",
        "Life Membership of Indian Virological Society (IVS), New Delhi."
      ],
      publications: "Popular Articles (05), Book Chapters (01), Abstracts (04), Research Publications (04)",
      research: "04 Research Publications",
      subjects: [
        "Plant Pathology",
        "Nematology",
        "Mushroom Production Techniques",
        "Bio-fertilizers and Bio-pesticides"
      ]
    },
    {
      name: "Dr. Raghavendra Rao. B",
      role: "Associate Professor",
      photo: "/Dr. Raghavendra Rao. B.png",
      tags: ["BIOTECHNOLOGY", "MICROBIOLOGY", "ASSOCIATE PROFESSOR", "RESEARCH"],
      designation: "Associate Professor",
      email: "raghavendra@alvascollege.com",
      joiningDate: "2015",
      education: [
        "Ph.D in Agricultural Microbiology (2002) – University of Agricultural Sciences, GKVK, Bangalore",
        "M.Sc in Agricultural Microbiology (1997) – University of Agricultural Sciences, Dharwad",
        "B.Sc in Agriculture (1995) – University of Agricultural Sciences, Bangalore"
      ],
      experience: [
        "Associate Professor, Post Graduate Department of Biotechnology, Alva’s College Moodbidri (2015 – Present)",
        "Associate Professor, Dept. of Healthcare Sciences, Sikkim Manipal University (2014 – 2015)",
        "Assistant Professor, Dept. of Healthcare Sciences, Sikkim Manipal University (2009 – 2014)",
        "HoD, Department of Biotechnology, Alva’s College Moodbidri (2003 – 2009)",
        "Lecturer, Department of Microbiology, M. S Ramiah First Grade College, Bangalore (2001 – 2002)",
        "Lecturer, Seshadripuram First Grade College, Bangalore (2000 – 2001)",
        "Lecturer, UAS, GKVK, Bangalore (1999 – 2000)",
        "Assistant Professor of Microbiology, Sericulture College, Chintamani (1997 – 1999)"
      ],
      interests: [
        "Agricultural Microbiology",
        "Biotechnology",
        "Soil Health",
        "Composting",
        "Plant Growth Promotion"
      ],
      achievements: [
        "Served as Chairman, BOE in Biotechnology, Mangalore University",
        "Served as HoD, Department of Biotechnology, Alva’s College Moodbidri",
        "Best Research Paper Award at National Symposium on Mycology, Plant Pathology and Biotechnology",
        "Manipal Global Excellence Award for Best Academician (2012-13)",
        "Two Spot Awards by Manipal Global Education Services",
        "Resource Person for workshops on Bioinformatics and Research Methodologies",
        "Represented University of Agricultural Sciences in South Zone Youth Festival"
      ],
      subjects: [
        "Microbiology",
        "Biotechnology",
        "Biochemistry",
        "Plant Biotechnology",
        "Immunology",
        "Bioinformatics"
      ],
      projects: [
        "MSc Biotechnology Projects Guided: 56",
        "BSc Biotechnology Projects Guided: 47",
        "PhD Students Under Supervision: 04"
      ],
      others: [
        "Fellowship: Junior Research Fellowship – Sanosil India Ltd.",
        "Fellowship: UAS Merit Fellowship",
        "Fellowship: Junior Research Fellowship – NORAD, Norway",
        "Fellowship: Senior Research Fellowship – DST, New Delhi",
        "Patent (2024): Novel protocol for high-yield extraction of secondary metabolites from Trichoderma spp",
        "Patent (2025): Plant growth promoting microbes for enhancing plant rooting and associated method"
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
    
  ],

  /* ─── ACTIVITIES ─── */
  activities: [
    {
      icon: "🌱",
      bg: "rgba(22,163,74,0.15)",
      title: "Kisan Mela — Farmer Fair",
      description:
        "Annual farmer fair connecting students with local farmers to exchange knowledge on modern crop varieties, organic inputs, and government scheme awareness. Over 5 lakh farmers participate each year.",
      tag: "Annual Event",
    },
    {
      icon: "🧪",
      bg: "rgba(59,130,246,0.15)",
      title: "Soil Health Camp",
      description:
        "Students conduct free soil testing camps in nearby villages, providing detailed soil health card reports and crop-specific nutrient management recommendations to farming communities.",
      tag: "Community Service",
    },
    {
      icon: "🏆",
      bg: "rgba(250,204,21,0.15)",
      title: "Agri Quiz & Science Fair",
      description:
        "Inter-department quiz competitions on agricultural science, followed by a science fair where students present innovative agri-solutions including drone-based monitoring and bio-pesticide formulations.",
      tag: "Academic",
    },
    {
      icon: "🌿",
      bg: "rgba(168,85,247,0.15)",
      title: "Organic Farming Workshop",
      description:
        "Hands-on workshops on vermicomposting, bio-fertiliser production, and zero-budget natural farming (ZBNF) techniques conducted by expert practitioners and NABARD officials.",
      tag: "Workshop",
    },
    {
      icon: "📸",
      bg: "rgba(239,68,68,0.15)",
      title: "Field Visit & Industrial Tour",
      description:
        "Annual industrial exposure visits to KVKs, ICAR research stations, agro-processing units, and progressive farms across Karnataka giving students first-hand industry exposure.",
      tag: "Industrial Visit",
    },
    {
      icon: "🎓",
      bg: "rgba(20,184,166,0.15)",
      title: "Alumni Interaction Meet",
      description:
        "Regular meets with alumni working in government services, research institutions, and agri-business to mentor current students on career paths, competitive exams, and entrepreneurship.",
      tag: "Career",
    },
  ],

  /* ─── GALLERY ─── */
  gallery: [
    {
      src: "/wa_110058_1.jpeg",
      alt: "Farmer Scientist Meet",
      caption: "Farmer-Scientist Meet — Sustainable Agriculture",
      span: true,
      placeholder: "🌾",
      bg: "linear-gradient(135deg, #052e16, #14532d)",
    },
    {
      src: "/agriculture%20filed.jpeg",
      alt: "Crop Production Fields",
      caption: "Crop Production Field Practicals",
      placeholder: "🌾",
      bg: "linear-gradient(135deg, #14532d, #166534)",
    },
    {
      src: "/wa_110101_2.jpeg",
      alt: "Mushroom Laboratory Visit",
      caption: "Mushroom Lab — Hands-On Field Visit",
      placeholder: "🍄",
      bg: "linear-gradient(135deg, #14532d, #15803d)",
    },
    {
      src: "/horticulture3.jpeg",
      alt: "Horticulture Unit",
      caption: "Horticulture Demonstration Plot",
      placeholder: "🌿",
      bg: "linear-gradient(135deg, #064e3b, #065f46)",
    },
    {
      src: "/wa_110101_3.jpeg",
      alt: "Tissue Culture Laboratory",
      caption: "Tissue Culture Lab — Field Visit",
      placeholder: "🔬",
      bg: "linear-gradient(135deg, #1e3a5f, #0c4a6e)",
    },
    {
      src: "/apiculture.jpeg",
      alt: "Apiculture Unit",
      caption: "Apiculture — Bee Keeping Unit",
      placeholder: "🐝",
      bg: "linear-gradient(135deg, #713f12, #92400e)",
    },
    {
      src: "/wa_110103.jpeg",
      alt: "Mushroom Cultivation Training",
      caption: "Mushroom Cultivation — Skill Training",
      placeholder: "🌱",
      bg: "linear-gradient(135deg, #064e3b, #065f46)",
    },
    {
      src: "/nursary.jpg",
      alt: "Nursery",
      caption: "Plant Nursery & Propagation Unit",
      placeholder: "🌱",
      bg: "linear-gradient(135deg, #064e3b, #065f46)",
    },
    {
      src: "/wa_110103_1.jpeg",
      alt: "Bio Centre Horticulture Field Visit",
      caption: "Bio Centre, Horticulture Dept., Shimoga",
      placeholder: "🌿",
      bg: "linear-gradient(135deg, #713f12, #92400e)",
    },
    {
      src: "/technologidrone.jpeg",
      alt: "Agri Technology",
      caption: "Drone-Based Precision Agriculture",
      placeholder: "🚁",
      bg: "linear-gradient(135deg, #1e3a5f, #0c4a6e)",
    },
    {
      src: "/wa_110102_1.jpeg",
      alt: "Alvas Nudisiri Cultural Event",
      caption: "Alvas Nudisiri — Cultural Celebrations",
      placeholder: "🎭",
      bg: "linear-gradient(135deg, #422006, #78350f)",
    },
    {
      src: "/A.I.E.T%20CAMPUS%20-2026-185.jpg",
      alt: "Campus Event",
      caption: "Annual Kisan Mela",
      placeholder: "🌻",
      bg: "linear-gradient(135deg, #422006, #78350f)",
    },
  ],
};

const BScAgriculture = () => <DepartmentPage {...data} />;
export default BScAgriculture;
