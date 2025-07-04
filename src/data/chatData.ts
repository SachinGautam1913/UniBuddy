import { QuickAction, ChatCategory } from '../types';

export const categories: ChatCategory[] = [
  {
    id: 'academics',
    name: 'Academics',
    icon: 'BookOpen',
    color: 'bg-blue-500',
    description: 'Courses, syllabus, exams, and academic queries'
  },
  {
    id: 'engineering',
    name: 'Engineering',
    icon: 'Cog',
    color: 'bg-indigo-500',
    description: 'All engineering branches and specializations'
  },
  {
    id: 'management',
    name: 'Management',
    icon: 'TrendingUp',
    color: 'bg-green-500',
    description: 'MBA, BBA, and management programs'
  },
  {
    id: 'science',
    name: 'Science',
    icon: 'Atom',
    color: 'bg-purple-500',
    description: 'Pure sciences and research programs'
  },
  {
    id: 'arts',
    name: 'Arts & Humanities',
    icon: 'Palette',
    color: 'bg-pink-500',
    description: 'Liberal arts and humanities programs'
  },
  {
    id: 'scheduling',
    name: 'Scheduling',
    icon: 'Calendar',
    color: 'bg-orange-500',
    description: 'Class timings, timetables, and schedules'
  },
  {
    id: 'campus',
    name: 'Campus',
    icon: 'MapPin',
    color: 'bg-red-500',
    description: 'Navigation, buildings, and campus facilities'
  },
  {
    id: 'library',
    name: 'Library',
    icon: 'Library',
    color: 'bg-yellow-500',
    description: 'Library resources, books, and study spaces'
  },
  {
    id: 'placements',
    name: 'Placements',
    icon: 'Briefcase',
    color: 'bg-teal-500',
    description: 'Career opportunities and placement support'
  },
  {
    id: 'fees',
    name: 'Fees & Scholarships',
    icon: 'DollarSign',
    color: 'bg-emerald-500',
    description: 'Fee structure, scholarships, and financial aid'
  },
  {
    id: 'hostel',
    name: 'Hostel Life',
    icon: 'Home',
    color: 'bg-cyan-500',
    description: 'Hostel facilities, mess, and campus life'
  },
  {
    id: 'faculty',
    name: 'Faculty',
    icon: 'Users',
    color: 'bg-violet-500',
    description: 'Faculty contacts and department information'
  }
];

export const quickActions: QuickAction[] = [
  // Engineering Quick Actions
  {
    id: '1',
    title: 'CSE Curriculum',
    description: 'Complete Computer Science syllabus',
    icon: 'Code',
    category: 'engineering',
    query: 'What is the complete CSE curriculum and subjects?'
  },
  {
    id: '2',
    title: 'ECE Subjects',
    description: 'Electronics & Communication courses',
    icon: 'Cpu',
    category: 'engineering',
    query: 'What are all the ECE subjects and specializations?'
  },
  {
    id: '3',
    title: 'Mechanical Engineering',
    description: 'Mechanical branch subjects',
    icon: 'Settings',
    category: 'engineering',
    query: 'What subjects are taught in Mechanical Engineering?'
  },
  {
    id: '4',
    title: 'Civil Engineering',
    description: 'Civil engineering curriculum',
    icon: 'Building',
    category: 'engineering',
    query: 'What is the Civil Engineering course structure?'
  },
  
  // Management Quick Actions
  {
    id: '5',
    title: 'MBA Specializations',
    description: 'All MBA streams available',
    icon: 'TrendingUp',
    category: 'management',
    query: 'What MBA specializations are offered?'
  },
  {
    id: '6',
    title: 'BBA Subjects',
    description: 'Bachelor of Business Administration',
    icon: 'Briefcase',
    category: 'management',
    query: 'What subjects are covered in BBA program?'
  },
  
  // Science Quick Actions
  {
    id: '7',
    title: 'Physics Courses',
    description: 'Physics programs and research',
    icon: 'Atom',
    category: 'science',
    query: 'What Physics courses and research areas are available?'
  },
  {
    id: '8',
    title: 'Chemistry Programs',
    description: 'Chemistry specializations',
    icon: 'TestTube',
    category: 'science',
    query: 'What Chemistry programs are offered?'
  },
  {
    id: '9',
    title: 'Mathematics Courses',
    description: 'Pure and applied mathematics',
    icon: 'Calculator',
    category: 'science',
    query: 'What Mathematics courses are available?'
  },
  
  // Arts & Humanities
  {
    id: '10',
    title: 'English Literature',
    description: 'Literature and language studies',
    icon: 'BookOpen',
    category: 'arts',
    query: 'What English Literature courses are offered?'
  },
  {
    id: '11',
    title: 'Psychology Programs',
    description: 'Psychology and behavioral sciences',
    icon: 'Brain',
    category: 'arts',
    query: 'What Psychology programs are available?'
  },
  
  // General Academic
  {
    id: '12',
    title: 'My Timetable',
    description: 'Check your class schedule',
    icon: 'Clock',
    category: 'scheduling',
    query: 'What is my timetable for today?'
  },
  {
    id: '13',
    title: 'Exam Schedule',
    description: 'Upcoming exams and dates',
    icon: 'Calendar',
    category: 'academics',
    query: 'What is the exam schedule for this semester?'
  },
  {
    id: '14',
    title: 'Library Hours',
    description: 'Check library timings',
    icon: 'Clock',
    category: 'library',
    query: 'What are the library opening hours?'
  },
  {
    id: '15',
    title: 'Placement Stats',
    description: 'View placement statistics',
    icon: 'TrendingUp',
    category: 'placements',
    query: 'What are the recent placement statistics?'
  },
  {
    id: '16',
    title: 'Fee Structure',
    description: 'Check fee details',
    icon: 'Receipt',
    category: 'fees',
    query: 'What is the fee structure for my course?'
  },
  {
    id: '17',
    title: 'Room Location',
    description: 'Find classroom locations',
    icon: 'Navigation',
    category: 'campus',
    query: 'Where is room 408 located?'
  },
  {
    id: '18',
    title: 'Hostel Rules',
    description: 'Check hostel guidelines',
    icon: 'FileText',
    category: 'hostel',
    query: 'What are the hostel rules and regulations?'
  },
  {
    id: '19',
    title: 'Contact Faculty',
    description: 'Get faculty contact info',
    icon: 'Phone',
    category: 'faculty',
    query: 'How can I contact my department faculty?'
  },
  {
    id: '20',
    title: 'All Engineering Branches',
    description: 'Complete list of engineering programs',
    icon: 'Layers',
    category: 'engineering',
    query: 'What are all the engineering branches offered?'
  }
];

export const chatResponses: { [key: string]: string } = {
  // Comprehensive Engineering Responses
  'cse curriculum': `🖥️ **Computer Science & Engineering - Complete Curriculum**

**📚 Core Subjects by Semester:**

**Semester 1-2 (Foundation):**
• Programming Fundamentals (C, C++)
• Mathematics I & II (Calculus, Linear Algebra)
• Physics & Chemistry
• Engineering Graphics
• Communication Skills

**Semester 3-4 (Core CS):**
• Data Structures & Algorithms
• Object-Oriented Programming (Java)
• Database Management Systems
• Computer Organization & Architecture
• Discrete Mathematics
• Operating Systems

**Semester 5-6 (Advanced):**
• Software Engineering
• Computer Networks
• Theory of Computation
• Compiler Design
• Web Technologies
• Machine Learning Basics

**Semester 7-8 (Specialization):**
• Artificial Intelligence
• Cybersecurity
• Cloud Computing
• Mobile App Development
• Big Data Analytics
• Capstone Project

**🔬 Lab Subjects:**
• Programming Labs (C, C++, Java, Python)
• Database Lab
• Network Lab
• Web Development Lab
• AI/ML Lab

**💼 Industry Certifications:**
• AWS Cloud Practitioner
• Google Cloud Associate
• Microsoft Azure Fundamentals
• Cisco Networking
• Oracle Database

**🎯 Career Paths:**
Software Developer, Data Scientist, Cybersecurity Analyst, Cloud Architect, AI Engineer, Full-Stack Developer`,

  'ece subjects': `⚡ **Electronics & Communication Engineering - Complete Program**

**📚 Core Subjects:**

**Foundation (Sem 1-2):**
• Circuit Analysis
• Electronic Devices
• Mathematics for Engineers
• Physics (Electromagnetics)
• Programming in C

**Core ECE (Sem 3-4):**
• Analog Electronics
• Digital Electronics
• Signals & Systems
• Network Theory
• Electromagnetic Fields
• Microprocessors

**Advanced (Sem 5-6):**
• Communication Systems
• VLSI Design
• Digital Signal Processing
• Control Systems
• Antenna Theory
• Embedded Systems

**Specializations (Sem 7-8):**
• RF & Microwave Engineering
• Optical Communication
• Wireless Communication
• IoT & Sensor Networks
• Robotics & Automation
• Satellite Communication

**🔬 Laboratory Work:**
• Analog & Digital Electronics Lab
• Communication Lab
• Microprocessor Lab
• VLSI Lab
• Antenna & Wave Propagation Lab
• Project Lab

**🏭 Industry Applications:**
• 5G Technology
• Internet of Things (IoT)
• Autonomous Vehicles
• Smart Grid Systems
• Medical Electronics
• Aerospace Electronics

**💼 Career Opportunities:**
Electronics Engineer, Communication Engineer, VLSI Designer, RF Engineer, Embedded Systems Developer, IoT Specialist`,

  'mechanical engineering': `⚙️ **Mechanical Engineering - Comprehensive Curriculum**

**📚 Core Subjects:**

**Foundation (Sem 1-2):**
• Engineering Mechanics
• Engineering Graphics
• Materials Science
• Thermodynamics I
• Mathematics & Physics

**Core Mechanical (Sem 3-4):**
• Strength of Materials
• Fluid Mechanics
• Heat Transfer
• Machine Design
• Manufacturing Processes
• Thermodynamics II

**Advanced (Sem 5-6):**
• Internal Combustion Engines
• Refrigeration & Air Conditioning
• Finite Element Analysis
• Industrial Engineering
• Mechatronics
• Automobile Engineering

**Specializations (Sem 7-8):**
• Robotics & Automation
• Renewable Energy Systems
• Advanced Manufacturing
• Aerospace Engineering
• Thermal Power Engineering
• Design Engineering

**🔬 Laboratory Work:**
• Strength of Materials Lab
• Fluid Mechanics Lab
• Heat Transfer Lab
• IC Engines Lab
• Manufacturing Lab
• CAD/CAM Lab

**🏭 Industry Domains:**
• Automotive Industry
• Aerospace & Defense
• Power Generation
• Manufacturing & Production
• Oil & Gas
• Renewable Energy

**💼 Career Paths:**
Design Engineer, Production Engineer, Quality Engineer, R&D Engineer, Project Manager, Consultant`,

  'civil engineering': `🏗️ **Civil Engineering - Complete Course Structure**

**📚 Core Subjects:**

**Foundation (Sem 1-2):**
• Engineering Mechanics
• Building Materials
• Surveying
• Engineering Geology
• Environmental Studies

**Structural (Sem 3-4):**
• Strength of Materials
• Structural Analysis
• Concrete Technology
• Steel Structures
• Foundation Engineering
• Fluid Mechanics

**Infrastructure (Sem 5-6):**
• Transportation Engineering
• Water Resources Engineering
• Environmental Engineering
• Construction Management
• Earthquake Engineering
• Highway Engineering

**Specializations (Sem 7-8):**
• Structural Design
• Geotechnical Engineering
• Water & Wastewater Treatment
• Urban Planning
• Bridge Engineering
• Coastal Engineering

**🔬 Laboratory Work:**
• Materials Testing Lab
• Surveying Lab
• Concrete Lab
• Soil Mechanics Lab
• Highway Lab
• Environmental Lab

**🏗️ Project Areas:**
• Infrastructure Development
• Smart Cities
• Sustainable Construction
• Disaster Management
• Green Building Technology
• Water Conservation

**💼 Career Opportunities:**
Structural Engineer, Site Engineer, Project Manager, Urban Planner, Consultant, Government Services`,

  // Management Programs
  'mba specializations': `📈 **MBA Specializations - Complete Program Details**

**🎯 Core MBA Specializations:**

**1. Finance & Banking:**
• Corporate Finance
• Investment Banking
• Financial Markets
• Risk Management
• International Finance
• Fintech & Digital Banking

**2. Marketing & Sales:**
• Digital Marketing
• Brand Management
• Consumer Behavior
• Sales Management
• International Marketing
• E-commerce Strategy

**3. Human Resources:**
• Talent Management
• Organizational Behavior
• Performance Management
• Labor Relations
• HR Analytics
• Change Management

**4. Operations & Supply Chain:**
• Operations Research
• Supply Chain Management
• Quality Management
• Logistics & Distribution
• Lean Six Sigma
• Project Management

**5. Information Technology:**
• IT Strategy
• Digital Transformation
• Data Analytics
• Cybersecurity Management
• Cloud Computing
• AI in Business

**6. International Business:**
• Global Trade
• Cross-cultural Management
• International Economics
• Export-Import Management
• Foreign Exchange

**📚 Core Subjects (All Specializations):**
• Managerial Economics
• Financial Accounting
• Business Statistics
• Organizational Behavior
• Marketing Management
• Operations Management

**💼 Career Prospects:**
• Starting Salary: ₹8-25 LPA
• Top Companies: TCS, Infosys, Deloitte, McKinsey, Goldman Sachs
• Roles: Manager, Consultant, Analyst, Director
• Growth: Senior Management in 5-7 years`,

  'bba subjects': `🎓 **Bachelor of Business Administration - Complete Curriculum**

**📚 Semester-wise Subjects:**

**Year 1:**
• Principles of Management
• Business Economics
• Financial Accounting
• Business Mathematics
• Business Communication
• Computer Applications

**Year 2:**
• Marketing Management
• Human Resource Management
• Cost Accounting
• Business Statistics
• Organizational Behavior
• Business Law

**Year 3:**
• Financial Management
• Operations Management
• Strategic Management
• International Business
• Entrepreneurship
• Project Work

**🎯 Specialization Options:**
• Finance & Banking
• Marketing & Sales
• Human Resources
• International Business
• Digital Marketing
• Event Management

**💻 Practical Components:**
• Industry Internship (6 months)
• Live Projects
• Case Study Analysis
• Presentation Skills
• Business Plan Development
• Software Training (Excel, Tally, SAP)

**🏢 Industry Exposure:**
• Guest Lectures
• Industrial Visits
• Workshops & Seminars
• Certification Courses
• Soft Skills Training

**💼 Career Opportunities:**
• Management Trainee
• Sales Executive
• HR Executive
• Marketing Coordinator
• Business Analyst
• Banking Associate

**📈 Further Studies:**
• MBA (Direct admission in many universities)
• CA/CS/CMA
• Specialized Certifications
• International Programs`,

  // Science Programs
  'physics courses': `🔬 **Physics Programs - Research & Academic Excellence**

**📚 Undergraduate Physics (B.Sc.):**

**Core Subjects:**
• Classical Mechanics
• Electromagnetic Theory
• Quantum Mechanics
• Thermodynamics & Statistical Mechanics
• Optics & Photonics
• Atomic & Molecular Physics
• Nuclear Physics
• Solid State Physics
• Electronics & Instrumentation
• Mathematical Physics

**🔬 Laboratory Courses:**
• Mechanics & Properties of Matter Lab
• Heat & Thermodynamics Lab
• Optics Lab
• Electronics Lab
• Modern Physics Lab
• Advanced Physics Lab

**🎓 Postgraduate Physics (M.Sc.):**

**Specializations:**
• Theoretical Physics
• Condensed Matter Physics
• High Energy Physics
• Astrophysics & Cosmology
• Quantum Information
• Biophysics
• Medical Physics
• Computational Physics

**🔬 Research Areas:**
• Quantum Computing
• Nanotechnology
• Renewable Energy
• Space Science
• Particle Physics
• Materials Science
• Laser Technology
• Nuclear Technology

**💼 Career Opportunities:**
• Research Scientist
• Physics Teacher/Professor
• Data Scientist
• Medical Physicist
• Space Scientist
• Nuclear Engineer
• Quality Control Analyst
• Technical Writer

**🏛️ Higher Studies:**
• Ph.D. in Physics
• Integrated M.Sc.-Ph.D.
• International Research Programs
• ISRO/DRDO Scientist
• IIT/IISc Faculty Positions`,

  'chemistry programs': `🧪 **Chemistry Programs - Complete Academic Structure**

**📚 Undergraduate Chemistry (B.Sc.):**

**Core Subjects:**
• Inorganic Chemistry
• Organic Chemistry
• Physical Chemistry
• Analytical Chemistry
• Environmental Chemistry
• Biochemistry
• Industrial Chemistry
• Polymer Chemistry
• Medicinal Chemistry
• Green Chemistry

**🔬 Laboratory Work:**
• Qualitative Analysis
• Quantitative Analysis
• Organic Synthesis
• Physical Chemistry Lab
• Instrumental Analysis
• Spectroscopy Lab

**🎓 Postgraduate Chemistry (M.Sc.):**

**Specializations:**
• Organic Chemistry
• Inorganic Chemistry
• Physical Chemistry
• Analytical Chemistry
• Biochemistry
• Pharmaceutical Chemistry
• Materials Chemistry
• Computational Chemistry

**🔬 Advanced Research Areas:**
• Drug Discovery
• Nanotechnology
• Catalysis
• Energy Storage
• Environmental Remediation
• Food Chemistry
• Forensic Chemistry
• Petrochemicals

**🏭 Industry Applications:**
• Pharmaceutical Industry
• Chemical Manufacturing
• Food & Beverage Industry
• Cosmetics Industry
• Environmental Consulting
• Quality Control
• Research & Development

**💼 Career Paths:**
• Research Chemist
• Quality Control Analyst
• Process Development Scientist
• Environmental Consultant
• Pharmaceutical Researcher
• Food Technologist
• Forensic Scientist
• Chemistry Teacher/Professor

**📈 Higher Education:**
• Ph.D. in Chemistry
• M.Tech in Chemical Engineering
• MBA in Pharmaceutical Management
• International Research Programs`,

  'mathematics courses': `📊 **Mathematics Programs - Pure & Applied Mathematics**

**📚 Undergraduate Mathematics (B.Sc.):**

**Pure Mathematics:**
• Real Analysis
• Complex Analysis
• Abstract Algebra
• Linear Algebra
• Differential Equations
• Topology
• Number Theory
• Discrete Mathematics
• Graph Theory
• Mathematical Logic

**Applied Mathematics:**
• Numerical Analysis
• Operations Research
• Mathematical Modeling
• Probability & Statistics
• Actuarial Mathematics
• Financial Mathematics
• Computational Mathematics
• Optimization Theory

**🎓 Postgraduate Mathematics (M.Sc.):**

**Specializations:**
• Pure Mathematics
• Applied Mathematics
• Statistics
• Actuarial Science
• Mathematical Finance
• Computational Mathematics
• Operations Research
• Data Science

**💻 Computational Skills:**
• MATLAB Programming
• R Programming
• Python for Mathematics
• Mathematica
• Statistical Software (SPSS, SAS)
• LaTeX for Mathematical Writing

**🔬 Research Areas:**
• Artificial Intelligence
• Machine Learning
• Cryptography
• Quantum Computing
• Financial Modeling
• Biostatistics
• Climate Modeling
• Network Theory

**💼 Career Opportunities:**
• Data Scientist
• Actuarial Analyst
• Financial Analyst
• Research Mathematician
• Statistics Consultant
• Software Developer
• Risk Analyst
• Mathematics Teacher/Professor

**🏢 Industry Applications:**
• Banking & Finance
• Insurance Companies
• IT & Software
• Research Organizations
• Government Agencies
• Consulting Firms
• Educational Institutions`,

  // Arts & Humanities
  'english literature': `📚 **English Literature - Comprehensive Program**

**📖 Undergraduate English (B.A.):**

**Core Areas:**
• British Literature (Medieval to Modern)
• American Literature
• Indian English Literature
• World Literature
• Poetry & Poetics
• Drama & Theatre Studies
• Fiction & Narrative Theory
• Literary Criticism & Theory
• Comparative Literature
• Creative Writing

**📚 Period Studies:**
• Medieval Literature
• Renaissance Literature
• Romantic Literature
• Victorian Literature
• Modern Literature
• Contemporary Literature
• Postcolonial Literature

**🎓 Postgraduate English (M.A.):**

**Specializations:**
• Literary Theory & Criticism
• Creative Writing
• Comparative Literature
• Cultural Studies
• Gender Studies
• Postcolonial Studies
• Digital Humanities
• Translation Studies

**✍️ Practical Components:**
• Creative Writing Workshops
• Literary Magazine Publication
• Theatre Productions
• Literary Criticism Writing
• Research Methodology
• Dissertation Project

**🎭 Co-curricular Activities:**
• Literary Society
• Debate Club
• Drama Club
• Poetry Recitation
• Book Clubs
• Literary Festivals

**💼 Career Opportunities:**
• Content Writer
• Journalist
• Editor
• Teacher/Professor
• Copywriter
• Translator
• Publishing Professional
• Media Professional
• Civil Services
• Creative Writer

**📈 Further Studies:**
• M.Phil./Ph.D. in English
• Journalism & Mass Communication
• Creative Writing Programs
• Translation Studies
• Cultural Studies
• International Literature Programs`,

  'psychology programs': `🧠 **Psychology Programs - Understanding Human Behavior**

**📚 Undergraduate Psychology (B.A./B.Sc.):**

**Core Subjects:**
• General Psychology
• Developmental Psychology
• Social Psychology
• Cognitive Psychology
• Abnormal Psychology
• Personality Psychology
• Biological Psychology
• Research Methods in Psychology
• Statistics for Psychology
• Psychological Testing

**🔬 Specialized Areas:**
• Clinical Psychology
• Counseling Psychology
• Educational Psychology
• Industrial Psychology
• Health Psychology
• Forensic Psychology
• Sports Psychology
• Neuropsychology

**🎓 Postgraduate Psychology (M.A./M.Sc.):**

**Specializations:**
• Clinical Psychology
• Counseling Psychology
• Applied Psychology
• Experimental Psychology
• Social Psychology
• Cognitive Psychology
• Organizational Psychology
• Educational Psychology

**🔬 Research Methods:**
• Experimental Design
• Statistical Analysis
• Qualitative Research
• Case Study Method
• Survey Research
• Psychological Assessment
• Data Analysis (SPSS, R)

**💼 Practical Training:**
• Clinical Internships
• Counseling Practice
• Psychological Testing
• Research Projects
• Community Service
• Hospital Attachments

**🏥 Career Opportunities:**
• Clinical Psychologist
• Counselor
• School Psychologist
• HR Professional
• Research Psychologist
• Therapist
• Social Worker
• Mental Health Consultant

**📈 Higher Studies:**
• M.Phil. in Clinical Psychology
• Ph.D. in Psychology
• Specialized Certifications
• International Programs
• Research Fellowships`,

  // All Engineering Branches
  'engineering branches': `🎓 **All Engineering Branches - Complete List**

**💻 Computer Science & IT:**
• Computer Science & Engineering (CSE)
• Information Technology (IT)
• Software Engineering
• Data Science & Engineering
• Artificial Intelligence & Machine Learning
• Cybersecurity Engineering
• Computer Networks & Security

**⚡ Electronics & Communication:**
• Electronics & Communication Engineering (ECE)
• Electronics & Instrumentation
• Biomedical Engineering
• VLSI Design & Technology
• Embedded Systems
• Telecommunications Engineering

**⚙️ Mechanical & Manufacturing:**
• Mechanical Engineering
• Manufacturing Engineering
• Industrial Engineering
• Production Engineering
• Automobile Engineering
• Aerospace Engineering
• Marine Engineering

**🏗️ Civil & Infrastructure:**
• Civil Engineering
• Environmental Engineering
• Transportation Engineering
• Structural Engineering
• Geotechnical Engineering
• Water Resources Engineering

**🔬 Chemical & Materials:**
• Chemical Engineering
• Materials Science & Engineering
• Polymer Engineering
• Petroleum Engineering
• Food Technology
• Biotechnology

**⚡ Electrical & Power:**
• Electrical Engineering
• Electrical & Electronics Engineering
• Power Engineering
• Control Systems Engineering
• Renewable Energy Engineering

**🌱 Emerging Fields:**
• Robotics Engineering
• IoT Engineering
• Blockchain Technology
• Quantum Computing
• Nanotechnology
• Green Technology Engineering

**📊 Admission Requirements:**
• JEE Main/Advanced
• State Engineering Entrance Exams
• BITSAT, VITEEE, SRMJEEE
• Minimum 75% in 12th (PCM)
• Age limit: 25 years

**💼 Career Prospects:**
• Starting Salary: ₹3-15 LPA
• Top Companies: Google, Microsoft, Amazon, TCS, Infosys
• Government Jobs: ISRO, DRDO, Railways, PSUs
• Higher Studies: M.Tech, MS, MBA
• Entrepreneurship Opportunities`,

  'timetable': 'Your Today\'s Schedule:\n\n🕘 9:00 AM - Data Structures (Room 301)\n🕙 10:00 AM - DBMS (Room 205)\n🕚 11:00 AM - Break\n🕛 11:30 AM - Computer Networks (Room 108)\n🕐 1:00 PM - Lunch Break\n🕑 2:00 PM - Software Engineering (Room 402)\n🕒 3:00 PM - DS Lab (Lab 1)\n\n📱 Enable notifications for reminders!',
  
  'exam schedule': 'Exam Schedule for Current Semester:\n\n📅 Internal Exams:\n• Unit Tests: Every 6 weeks\n• Mid-term: Week 8-9\n• Pre-final: Week 14-15\n\n📅 External Exams:\n• Theory: Last week of semester\n• Practicals: 2 weeks before theory\n\n⏰ Timing: 10:00 AM - 1:00 PM\n\nFor exact dates, check ERP portal or notice board.',
  
  'room 408': 'Room 408 Location:\n\n🏢 Building: Academic Block A\n📍 Floor: 4th Floor\n🚶 Directions: Take lift/stairs to 4th floor, turn right from elevator\n\n🗺️ Nearby landmarks:\n• Computer Lab (Room 405)\n• Faculty Lounge (Room 410)\n• Washrooms (End of corridor)\n\n⏱️ Average walking time from main gate: 5 minutes',
  
  'library hours': 'Library Timings:\n\n📚 Regular Days:\n• Monday-Friday: 8:00 AM - 8:00 PM\n• Saturday: 9:00 AM - 5:00 PM\n• Sunday: 10:00 AM - 4:00 PM\n\n📚 During Exams:\n• Extended hours: 8:00 AM - 10:00 PM\n• Sunday: 9:00 AM - 8:00 PM\n\n🔒 Holiday Schedule:\n• Check notice board for special closures\n\n📞 Contact: Library Desk (+91-XXX-XXX-XXXX)',
  
  'placement stats': 'Placement Statistics (2023-24):\n\n📊 Overall Stats:\n• Total Students: 450\n• Placed: 385 (85.5%)\n• Highest Package: ₹45 LPA\n• Average Package: ₹8.5 LPA\n• Median Package: ₹6.2 LPA\n\n🏢 Top Recruiters:\n• TCS, Infosys, Wipro\n• Amazon, Microsoft, Google\n• Accenture, Cognizant\n\n📈 Department-wise placement rates available in placement cell.',
  
  'fee structure': 'Fee Structure (Annual):\n\n💰 Tuition Fees:\n• Engineering: ₹1,50,000\n• BBA/BCA: ₹1,20,000\n• MBA: ₹2,00,000\n\n🏠 Hostel Fees:\n• AC Rooms: ₹80,000\n• Non-AC Rooms: ₹60,000\n• Mess: ₹40,000\n\n🚌 Transport: ₹25,000\n\n💳 Payment Options:\n• Online (ERP Portal)\n• Bank Transfer\n• DD in favor of university\n\n📅 Last Date: 15th of each semester',
  
  'hostel rules': 'Hostel Rules & Regulations:\n\n🕐 Timings:\n• In-time: 9:00 PM (weekdays), 10:00 PM (weekends)\n• Out-time: 6:00 AM\n• Late entry requires permission\n\n🏠 Room Rules:\n• No outside guests after 8:00 PM\n• Maintain cleanliness\n• No loud music/noise\n\n🍽️ Mess:\n• Breakfast: 7:30-9:30 AM\n• Lunch: 12:00-2:00 PM\n• Dinner: 7:00-9:00 PM\n\n⚠️ Violations may result in fines or hostel expulsion.',
  
  'faculty contact': 'Faculty Contact Information:\n\n👨‍🏫 Department Heads:\n• CSE: Dr. Sharma (+91-XXX-XXX-XXXX)\n• ECE: Dr. Patel (+91-XXX-XXX-XXXX)\n• Mechanical: Dr. Kumar (+91-XXX-XXX-XXXX)\n\n🏢 Office Hours:\n• Monday-Friday: 10:00 AM - 4:00 PM\n• Saturday: 10:00 AM - 1:00 PM\n\n📧 Email: [department]@university.edu\n📍 Location: Faculty Block, 2nd Floor\n\n🗓️ Appointment booking: ERP Portal or direct visit'
};

export const getResponse = (query: string): string => {
  const lowerQuery = query.toLowerCase();
  
  // Engineering queries
  if (lowerQuery.includes('cse') && (lowerQuery.includes('curriculum') || lowerQuery.includes('subjects') || lowerQuery.includes('syllabus'))) {
    return chatResponses['cse curriculum'];
  }
  if (lowerQuery.includes('ece') && (lowerQuery.includes('subjects') || lowerQuery.includes('specialization'))) {
    return chatResponses['ece subjects'];
  }
  if (lowerQuery.includes('mechanical') && lowerQuery.includes('engineering')) {
    return chatResponses['mechanical engineering'];
  }
  if (lowerQuery.includes('civil') && lowerQuery.includes('engineering')) {
    return chatResponses['civil engineering'];
  }
  if (lowerQuery.includes('engineering') && lowerQuery.includes('branches')) {
    return chatResponses['engineering branches'];
  }
  
  // Management queries
  if (lowerQuery.includes('mba') && lowerQuery.includes('specialization')) {
    return chatResponses['mba specializations'];
  }
  if (lowerQuery.includes('bba') && lowerQuery.includes('subjects')) {
    return chatResponses['bba subjects'];
  }
  
  // Science queries
  if (lowerQuery.includes('physics') && lowerQuery.includes('courses')) {
    return chatResponses['physics courses'];
  }
  if (lowerQuery.includes('chemistry') && lowerQuery.includes('programs')) {
    return chatResponses['chemistry programs'];
  }
  if (lowerQuery.includes('mathematics') && lowerQuery.includes('courses')) {
    return chatResponses['mathematics courses'];
  }
  
  // Arts queries
  if (lowerQuery.includes('english') && lowerQuery.includes('literature')) {
    return chatResponses['english literature'];
  }
  if (lowerQuery.includes('psychology') && lowerQuery.includes('programs')) {
    return chatResponses['psychology programs'];
  }
  
  // General queries
  if (lowerQuery.includes('timetable') || lowerQuery.includes('schedule') || lowerQuery.includes('class')) {
    return chatResponses['timetable'];
  }
  if (lowerQuery.includes('exam') || lowerQuery.includes('schedule') || lowerQuery.includes('test')) {
    return chatResponses['exam schedule'];
  }
  if (lowerQuery.includes('room') || lowerQuery.includes('408') || lowerQuery.includes('location')) {
    return chatResponses['room 408'];
  }
  if (lowerQuery.includes('library') || lowerQuery.includes('hours') || lowerQuery.includes('timing')) {
    return chatResponses['library hours'];
  }
  if (lowerQuery.includes('placement') || lowerQuery.includes('stats') || lowerQuery.includes('job')) {
    return chatResponses['placement stats'];
  }
  if (lowerQuery.includes('fee') || lowerQuery.includes('scholarship') || lowerQuery.includes('payment')) {
    return chatResponses['fee structure'];
  }
  if (lowerQuery.includes('hostel') || lowerQuery.includes('rules') || lowerQuery.includes('mess')) {
    return chatResponses['hostel rules'];
  }
  if (lowerQuery.includes('faculty') || lowerQuery.includes('contact') || lowerQuery.includes('teacher')) {
    return chatResponses['faculty contact'];
  }
  
  // Default response
  return `I'm University Buddy, your comprehensive academic assistant! 🎓\n\nI can help you with detailed information about:\n\n📚 **Academic Programs:**\n• All Engineering branches (CSE, ECE, Mechanical, Civil, etc.)\n• Management programs (MBA, BBA specializations)\n• Science courses (Physics, Chemistry, Mathematics)\n• Arts & Humanities (English, Psychology, etc.)\n\n🎯 **University Services:**\n• Class schedules & timetables\n• Campus navigation & facilities\n• Library resources & timings\n• Placement statistics & career guidance\n• Fee structure & scholarships\n• Hostel life & facilities\n• Faculty contacts & departments\n\n💡 **Quick Tips:**\n• Use the Quick Actions above for common queries\n• Ask specific questions like "What subjects are in CSE 3rd semester?"\n• I can provide detailed curriculum for any program\n• Available in both English and Hindi\n\nWhat would you like to know about?`;
};