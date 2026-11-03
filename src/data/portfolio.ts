/**
 * Central portfolio data — personalized for Harsha Vardhan K.
 * Facts below are based on the supplied resume. Keep claims and metrics verifiable.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Harsha Vardhan K',
  displayName: 'Harsha Vardhan',
  firstName: 'HARSHA',
  seriesTag: 'THE SERIES',
  originalLabel: 'A HARSHA ORIGINAL',
  role: 'Computer Science Undergraduate',
  tagline: ['Software Developer', 'Java', 'IoT & Embedded Systems'],
  intro: 'B.Tech Computer Science and Engineering student at Mohan Babu University. Interested in software development, IoT, and cybersecurity, with hands-on project work in student platforms and energy analysis.',
  location: 'Visakhapatnam, Andhra Pradesh, India',
  email: 'harshavardhankallempudi@hotmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/harsha-vardhan-k01',
    github: 'https://github.com/HarshaVardhanK-0102',
  },
  resumePdf: '/assets/Harsha-Resume.pdf',
  portrait: {
    src: '/assets/harsha-profile.jpg',
    srcSet: '/assets/harsha-profile.jpg',
    alt: 'Portrait of Harsha Vardhan K',
  },
  interests: ['Data Structures & Algorithms', 'Cybersecurity', 'IoT and Embedded Systems'],
};

export const education = [
  {
    school: 'Mohan Babu University',
    place: 'Tirupati, Andhra Pradesh',
    degree: 'B.Tech — Computer Science and Engineering',
    period: '2024 – 2028',
    score: 'CGPA 8.01 / 10',
  },
  {
    school: 'Tirumala Junior College',
    place: 'Andhra Pradesh',
    degree: 'Intermediate — BIEAP',
    period: '2024',
    score: '83%',
  },
  {
    school: 'De Paul E.M. School',
    place: 'Andhra Pradesh',
    degree: 'ICSE',
    period: '2022',
    score: '80%',
  },
];

export const experience = [
  {
    company: 'Mohan Babu University',
    role: 'Intern — Smart Energy Audit & Tariff Analysis',
    place: 'Tirupati, Andhra Pradesh',
    period: 'March 2025',
    points: [
      'Surveyed and classified 1,000+ appliances across four floors, recording power ratings and usage patterns for a building energy audit.',
      'Built a Java-based model to calculate monthly and yearly energy consumption, billing costs, and load, demand, and utilization metrics.',
      'Analyzed tariff structures and documented the methodology and findings.',
      'Coordinated data collection, analysis, and reporting across the audited floors.',
    ],
  },
];

export type Metric = { value: string; label: string };
export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'campusconnect',
    title: 'CampusConnect',
    year: 'In Progress',
    genre: 'Full-Stack • Student Platform',
    logline: 'A centralized student platform connecting students with placements, clubs, events, question banks, and opportunities.',
    stack: ['React', 'Node.js', 'Express.js', 'MySQL', 'Firebase'],
    build: [
      'Working on a multi-role platform for students, administrators, and club-event coordinators.',
      'Developing authentication, access control, student profiles, and skill-based teammate matching.',
    ],
    features: [
      'Student and admin role flows',
      'Student profiles',
      'Clubs, events, and opportunities',
      'Skill-based teammate matching',
    ],
    metrics: [],
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'flow',
  },
  {
    id: 'energy-audit',
    title: 'Beyond the Plug: A Power Study',
    year: '2025',
    genre: 'Java • Energy Analytics',
    logline: 'A Java-based model for building electricity consumption and tariff analysis.',
    stack: ['Java', 'Energy Audit', 'Data Analysis'],
    build: [
      'Audited appliance loads and usage patterns across four floors of a university building.',
      'Developed calculations for energy consumption, billing, and electrical load metrics.',
    ],
    features: [
      'Monthly and yearly energy estimates',
      'Tariff-based bill calculation',
      'Load, demand, and utilization metrics',
    ],
    metrics: [
      { value: '1,000+', label: 'appliances surveyed' },
      { value: '4', label: 'floors audited' },
    ],
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'tenants',
  },
  {
    id: 'output-prediction',
    title: 'AI/ML & Data Analytics — Output Prediction',
    year: 'Idea / Planning',
    genre: 'AI • ML • Data Analytics',
    logline: 'An early-stage study exploring output prediction across multiple data types.',
    stack: ['Python', 'Machine Learning', 'Data Analytics'],
    build: [
      'Scoping an output-prediction problem across structured, image, text, time-series, and financial data.',
      'Working on early data collection, feature selection, and research-methodology planning.',
    ],
    features: [
      'Problem scoping',
      'Data collection planning',
      'Feature selection research',
    ],
    metrics: [],
    palette: { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' },
    motif: 'shield',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'project-expo',
    title: '2nd Place',
    org: 'Project Expo — Technovation 2K25',
    detail: 'Secured second place at the project expo hosted by KSRM College of Engineering in 2025.',
    laurel: '2nd Place · 2025',
  },
  {
    id: 'student-coordinator',
    title: 'Student Coordinator',
    org: 'Mohan Babu University',
    detail: 'Coordinated academic activities, events, and feedback for 500+ students.',
    laurel: 'Leadership',
  },
  {
    id: 'hackathon',
    title: 'Hackathon Participant',
    org: 'College Hackathon',
    detail: 'Participated in a college-level hackathon.',
    laurel: 'Innovation',
  },
  {
    id: 'team-lead',
    title: 'Technical / Team Lead',
    org: 'Academic Project Teams',
    detail: 'Contributed to technical leadership and team coordination in project work.',
    laurel: 'Team Leadership',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'Northeastern University', name: 'Agile Development & Scrum', link: '' },
  { issuer: 'SkillUp', name: 'Scrum Master Courses', link: '' },
  { issuer: 'IBM', name: 'Introduction to Agile Development and Scrum', link: '' },
  { issuer: 'University of Illinois Urbana-Champaign', name: 'Entrepreneurship II: Preparing for Launch', link: '' },
  { issuer: 'University of Illinois Urbana-Champaign', name: 'Strategic Innovation: Managing Innovation Initiatives', link: '' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    subtitle: 'Languages used in coursework and projects',
    skills: [
      { name: 'Java', mono: 'Jv', note: 'Interview language' },
      { name: 'C++', mono: 'C+' },
      { name: 'Python', mono: 'Py' },
    ],
  },
  {
    id: 'web',
    title: 'Web / Full-Stack',
    subtitle: 'Frontend and backend technologies',
    skills: [
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'React', mono: 'Re' },
      { name: 'Node.js', mono: 'No' },
      { name: 'Express.js', mono: 'Ex' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Data storage and application backends',
    skills: [
      { name: 'MySQL', mono: 'My' },
      { name: 'Firebase', mono: 'Fb' },
    ],
  },
  {
    id: 'fundamentals',
    title: 'CS Fundamentals',
    subtitle: 'Core computer science subjects',
    skills: [
      { name: 'DSA', mono: 'Ds' },
      { name: 'OOP', mono: 'Oo' },
      { name: 'DBMS', mono: 'Db' },
      { name: 'Operating Systems', mono: 'Os' },
      { name: 'Computer Networks', mono: 'Cn' },
      { name: 'Software Engineering', mono: 'Se' },
    ],
  },
  {
    id: 'iot',
    title: 'IoT / Embedded',
    subtitle: 'Hardware and connected systems',
    skills: [
      { name: 'ESP32', mono: 'E3' },
      { name: 'Raspberry Pi', mono: 'Rp' },
      { name: 'Sensor Integration', mono: 'Si' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    subtitle: 'Development workflow',
    skills: [
      { name: 'Git / GitHub', mono: 'Gt' },
      { name: 'VS Code', mono: 'Vs' },
      { name: 'Linux / Ubuntu', mono: 'Li' },
      { name: 'PyCharm', mono: 'Pc' },
      { name: 'Excel', mono: 'Xl' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  Java: ['Smart Energy Audit & Tariff Analysis'],
  React: ['CampusConnect'],
  'Node.js': ['CampusConnect'],
  'Express.js': ['CampusConnect'],
  MySQL: ['CampusConnect'],
  Firebase: ['CampusConnect'],
  Python: ['AI/ML & Data Analytics — Output Prediction'],
  ESP32: ['IoT / Embedded Systems'],
  'Git / GitHub': ['Development tools'],
  DSA: ['Technical skills'],
  DBMS: ['Technical skills'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2022 – 2024',
    synopsis: 'School and intermediate education, building the academic foundation.',
    episodes: [
      { code: 'S01 E01', title: 'The Student', description: 'ICSE at De Paul E.M. School — 80%.', tags: ['ICSE'], runtime: '2022', palette: amber },
      { code: 'S01 E02', title: 'The Next Step', description: 'BIEAP Intermediate at Tirumala Junior College — 83%.', tags: ['BIEAP'], runtime: '2024', palette: violet },
    ],
  },
  {
    number: 2,
    title: 'Computer Science',
    period: '2024 – 2028',
    synopsis: 'B.Tech Computer Science and Engineering at Mohan Babu University.',
    episodes: [
      { code: 'S02 E01', title: 'The Engineer', description: 'B.Tech CSE, CGPA 8.01 / 10.', tags: ['B.Tech', 'CSE'], runtime: '2024 – 2028', palette: ocean },
      { code: 'S02 E02', title: 'The Coordinator', description: 'Student Coordinator supporting academic activities and events for 500+ students.', tags: ['Leadership'], runtime: 'University', palette: jade },
    ],
  },
  {
    number: 3,
    title: 'Building & Learning',
    period: '2025 – Present',
    synopsis: 'Energy analysis, student platforms, and project-based learning.',
    episodes: [
      { code: 'S03 E01', title: 'Beyond the Plug', description: 'Java-based building energy audit and tariff analysis.', tags: ['Java', 'Energy'], runtime: 'March 2025', palette: amber },
      { code: 'S03 E02', title: 'CampusConnect', description: 'A multi-role platform for student opportunities, clubs, and events.', tags: ['React', 'Node.js'], runtime: 'In Progress', palette: ocean },
      { code: 'S03 E03', title: 'The Recognition', description: 'Second place at Technovation 2K25 Project Expo.', tags: ['Project Expo'], runtime: '2025', palette: crimson },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Primary language', title: 'Java', detail: 'Programming language listed on the resume', palette: amber },
  { label: 'Current build', title: 'CampusConnect', detail: 'Multi-role student platform', palette: ocean },
  { label: 'Energy project', title: 'Beyond the Plug', detail: 'Java-based energy audit model', palette: jade },
  { label: 'Recognition', title: '2nd Place', detail: 'Technovation 2K25 Project Expo', palette: crimson },
  { label: 'Leadership', title: '500+ Students', detail: 'Student coordination at MBU', palette: violet },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  { kicker: 'Education', title: 'B.Tech · CSE', lines: ['Mohan Babu University, Tirupati', '2024 – 2028'], chips: ['CGPA 8.01'] },
  { kicker: 'Skills', title: 'Java first.', lines: ['C++ · Python · JavaScript · React · Node.js', 'MySQL · Firebase · ESP32 · Raspberry Pi'], chips: ['Java', 'C++', 'Python', 'React', 'IoT'] },
  { kicker: 'Experience', title: 'Smart Energy Audit', lines: ['Intern · Mohan Babu University · March 2025', 'Surveyed 1,000+ appliances across four floors'] },
  { kicker: 'Projects', title: 'Building Useful Things', lines: ['CampusConnect — multi-role student platform', 'Beyond the Plug — Java energy calculation model', 'AI/ML output-prediction study — planning'] },
  { kicker: 'Achievements', title: 'Top Moments', lines: ['2nd Place — Technovation 2K25 Project Expo', 'Student Coordinator — 500+ students'] },
  { kicker: 'Current mission', title: 'Next Chapter', lines: ['Data Structures · Software Engineering · Cybersecurity · IoT'] },
];

export type ProfileId = 'sushmita' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'sushmita',
    name: 'Harsha',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & training', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2025–2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Highlights from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
