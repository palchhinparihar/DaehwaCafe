import SandeepProfile from '../assets/sandeep-profile.jpeg';
import IndraniProfile from '../assets/indrani-profile.jpeg';
import PalchhinProfile from '../assets/palchhin-profile.jpeg';

export const leadershipMetrics = [
  {
    value: '2',
    label: 'Leadership Roles',
  },
  {
    value: '3',
    label: 'Core Team Members',
  },
  {
    value: '80+',
    label: 'Active Interns',
  },
];

export const leadershipRoles = [
  {
    id: 'founder-director',
    title: 'Founder & Director',
    name: 'Sandeep Singh',
    subtitle: 'Founder & Director',
    image: SandeepProfile,

    socials: {
      linkedin: 'https://www.linkedin.com/in/sandeep-singh-a413b277',
      instagram: 'https://www.instagram.com/korean.singh',
      portfolio: 'https://sandeepsingh-portfolio.netlify.app',
    },

    responsibilities: [
      'Leads the overall vision and strategic development of DAEHWA Cafe.',
      'Oversees educational programs, partnerships, and organizational growth.',
      'Guides national and international collaborations related to Korean language and culture.',
    ],
  },
  {
    id: 'co-founder',
    title: 'Co-Founder',
    name: 'JOOBUNYJ (Indrani Banerjee)',
    subtitle: 'Co-Founder',
    image: IndraniProfile,

    socials: {
      linkedin: 'https://www.linkedin.com/in/indrani-banerjee-38747623a',
      instagram: 'https://www.instagram.com/joobunyj',
      portfolio: null,
    },

    responsibilities: [
      'Leads community planning, development, and member engagement.',
      'Coordinates community projects, volunteer activities, and cultural initiatives.',
      'Works to build opportunities for youth through Korean culture and educational programs.',
    ],
  },
  {
    id: 'technical-lead',
    title: 'Technical Lead',
    name: 'Palchhin',
    subtitle: 'Technical Lead',
    image: PalchhinProfile,

    socials: {
      linkedin: 'https://www.linkedin.com/in/palchhinparihar',
      instagram: 'https://www.instagram.com/techgirliie',
      portfolio: 'https://palchhin.netlify.app',
    },

    responsibilities: [
      'Leads the technical development and maintenance of DAEHWA Cafe\'s digital platforms.',
      'Oversees website and application development, ensuring a seamless user experience.',
      'Implements innovative solutions to enhance community engagement and accessibility.',
    ],
  },
];

export const structureGroups = [
  {
    role: 'Founder & Director',
    count: '1 Member',
    responsibilities: [],
  },
  {
    role: 'Co-Founder',
    count: '1 Member',
    responsibilities: [],
  },
  {
    role: 'Core Team',
    count: '3 Members',
    responsibilities: [
      'Project Planning',
      'Event Management',
      'Partnership Coordination',
      'Creative Direction',
      'Community Operations',
    ],
  },
  {
    role: 'Main Team',
    count: '8 Members',
    responsibilities: [
      'Community Management',
      'Event Support',
      'Social Media',
      'Creative Projects',
      'Volunteer Coordination',
      'Member Engagement',
    ],
  },
  {
    role: 'Intern Team',
    count: '80+ Active Interns',
    responsibilities: [
      'Creative Design',
      'Content Creation',
      'Photography & Videography',
      'Hosting & Communication',
      'Event Management',
      'Community Promotion',
      'Korean Culture Activities',
      'Volunteer Programs',
    ],
    description:
      'Our internship program consists of enthusiastic members from different parts of India who gain practical experience while developing leadership, communication, teamwork, and professional skills.',
  },
];