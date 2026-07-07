import { FiBookOpen, FiGlobe, FiMessageCircle, FiUsers } from 'react-icons/fi';

export const communityPoints = [
  'Connect with people who share an interest in Korean language and culture.',
  'Participate in community events, discussions, and collaborative projects.',
  'Grow through learning, volunteering, leadership, and shared experiences.',
];

export const talkRoomPoints = [
  'Practice speaking, listening, reading, and writing with confidence.',
  'Prepare for TOPIK and explore study opportunities in Korea.',
  'Learn through practical sessions, cultural insights, and guided support.',
];

export const aboutSections = [
  {
    id: 'community',
    label: 'DAEHWA Cafe Community',
    title: 'A place where',
    accent: 'people connect.',
    description:
      'A welcoming community that brings together learners, enthusiasts, and creators through shared interests and meaningful experiences.',
    icon: FiUsers,
    tone: 'violet',
    points: communityPoints,
  },

  {
    id: 'talkroom',
    label: 'DAEHWA Cafe TalkRoom',
    title: 'Learn Korean',
    accent: 'with confidence.',
    description:
      'A practical learning platform designed to help learners build confidence through consistent practice and cultural understanding.',
    icon: FiMessageCircle,
    tone: 'indigo',
    points: talkRoomPoints,
  },
];

export const featureCards = [
  {
    id: 1,
    title: 'People Before Platforms',
    description:
      'Meaningful communities are built through genuine conversations, shared experiences, and mutual support.',
    icon: FiUsers,
    tone: 'violet',
  },

  {
    id: 2,
    title: 'Learning That Feels Practical',
    description:
      'We focus on confidence, consistency, and real-world communication instead of memorization alone.',
    icon: FiBookOpen,
    tone: 'indigo',
  },

  {
    id: 3,
    title: 'Opportunities to Grow',
    description:
      'Discover volunteering, networking, cultural events, and collaborations beyond the classroom.',
    icon: FiGlobe,
    tone: 'fuchsia',
  },
];

export const missionCards = [
  {
    id: 1,
    title: 'Connect',
    description:
      'Meet people who share your interests and learn from one another.',
    tone: 'violet',
  },

  {
    id: 2,
    title: 'Learn',
    description:
      'Build practical Korean skills through guidance and consistent practice.',
    tone: 'indigo',
  },

  {
    id: 3,
    title: 'Belong',
    description:
      'Become part of a welcoming community that grows together.',
    tone: 'fuchsia',
  },
];