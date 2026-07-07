import SandeepProfile from '../assets/sandeep-profile.jpeg';
import IndraniProfile from '../assets/indrani-profile.jpeg';

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
    subtitle: 'Founder & Director - DAEHWA Cafe',
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
    id: 'community-creator',
    title: 'Community Creator',
    name: 'JOOBUNYJ (Indrani Banerjee)',
    subtitle: 'Community Creator - DAEHWA Cafe Community',
    image: IndraniProfile,

    socials: {
      linkedin: null,
      instagram: 'https://www.instagram.com/joobunyj',
      portfolio: null,
    },

    responsibilities: [
      'Leads community planning, development, and member engagement.',
      'Coordinates community projects, volunteer activities, and cultural initiatives.',
      'Works to build opportunities for youth through Korean culture and educational programs.',
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
    role: 'Community Creator',
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