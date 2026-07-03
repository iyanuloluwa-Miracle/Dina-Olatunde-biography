/**
 * ─────────────────────────────────────────────────────────────
 *  SITE CONTENT — single source of truth
 *
 *  Everything below is realistic PLACEHOLDER content.
 *  Replace names, dates, stories, quotes and image paths with
 *  real family material. Photos live in /public/images — swap
 *  the picsum.photos URLs for local paths like '/images/hero.jpg'.
 * ─────────────────────────────────────────────────────────────
 */
import type {
  Achievement,
  CoreValue,
  GalleryImage,
  LifeLesson,
  TimelineEvent,
  Tribute,
} from '~/types/content'

export const hero = {
  name: 'Chief Emmanuel Adewale', // REPLACE — father's full name
  occupation: 'Educator · Community Builder · Father',
  bio: 'For more than five decades he has taught, mentored and quietly lifted the people around him — building not monuments of stone, but of character.',
  quote: '“A man’s true wealth is the good he leaves behind in the lives of others.”',
  portrait: 'https://picsum.photos/id/1074/900/1200', // REPLACE — hero portrait
}

export const about = {
  paragraphs: [
    // REPLACE — early life, family background, childhood, education, philosophy
    'Emmanuel was born in 1952 in a small town where the school had one blackboard and an abundance of ambition. The third of six children, he learned early that nothing of value arrives without work — and that everything of value is meant to be shared.',
    'His childhood was shaped by his mother’s quiet faith and his father’s carpentry bench, where he first understood that patience and precision build things that last. He walked six miles to secondary school and graduated top of his class.',
    'He earned a degree in Education at the University of Ibadan, the first in his family to attend university — a door he then spent a lifetime holding open for others.',
    'His philosophy has never changed: show up, tell the truth, do the work, and leave every place a little better than you found it.',
  ],
  portrait: 'https://picsum.photos/id/1062/800/1000', // REPLACE — young portrait / family photo
}

export const timeline: TimelineEvent[] = [
  {
    year: '1952',
    chapter: 'I',
    title: 'Childhood',
    description:
      'Born in Ondo State, the third of six children. Learns discipline at his father’s carpentry bench and generosity at his mother’s table.',
    icon: 'ph:house-line',
  },
  {
    year: '1974',
    chapter: 'II',
    title: 'Education',
    description:
      'Graduates from the University of Ibadan with a degree in Education — the first in his family to earn a university degree.',
    icon: 'ph:graduation-cap',
  },
  {
    year: '1976',
    chapter: 'III',
    title: 'Career',
    description:
      'Begins teaching mathematics at St. Gregory’s College. Over 35 years he rises from classroom teacher to principal, shaping thousands of young minds.',
    icon: 'ph:chalkboard-teacher',
  },
  {
    year: '1980',
    chapter: 'IV',
    title: 'Marriage',
    description:
      'Marries Folake, his university sweetheart and lifelong partner. Their marriage becomes the quiet foundation of everything that follows.',
    icon: 'ph:heart',
  },
  {
    year: '1982–1990',
    chapter: 'V',
    title: 'Family',
    description:
      'Welcomes four children, raising them on early mornings, honest answers and Sunday dinners that no one was allowed to miss.',
    icon: 'ph:users-three',
  },
  {
    year: '1998',
    chapter: 'VI',
    title: 'Achievements',
    description:
      'Named National Educator of the Year. Under his leadership, his school records its best examination results in a generation.',
    icon: 'ph:medal',
  },
  {
    year: '2005',
    chapter: 'VII',
    title: 'Community Service',
    description:
      'Founds the Adewale Scholarship Trust, which has since sent more than 120 students from his hometown to university.',
    icon: 'ph:hand-heart',
  },
  {
    year: 'Today',
    chapter: 'VIII',
    title: 'Present Day',
    description:
      'Retired but never idle — mentoring young teachers, tending his garden, and telling his grandchildren the stories in these pages.',
    icon: 'ph:sun-horizon',
  },
]

export const achievements: Achievement[] = [
  {
    icon: 'ph:medal',
    title: 'National Educator of the Year',
    description: 'Honoured for transforming outcomes at St. Gregory’s College.',
    year: '1998',
  },
  {
    icon: 'ph:student',
    title: '120+ Scholarships Awarded',
    description: 'Through the Adewale Scholarship Trust he founded and still chairs.',
    year: '2005 — Present',
  },
  {
    icon: 'ph:buildings',
    title: 'Community Library Built',
    description: 'Led the fundraising and construction of his town’s first public library.',
    year: '2010',
  },
  {
    icon: 'ph:crown-simple',
    title: 'Chieftaincy Title Conferred',
    description: 'Installed as Baba Eto — “father of order” — by his community.',
    year: '2015',
  },
  {
    icon: 'ph:book-open-text',
    title: 'Published Author',
    description: 'Wrote “Chalk Dust & Character”, a memoir on a life in the classroom.',
    year: '2019',
  },
  {
    icon: 'ph:tree',
    title: '50 Years of Service',
    description: 'Half a century of teaching, mentoring and community leadership.',
    year: '2024',
  },
]

export const values: CoreValue[] = [
  { icon: 'ph:scales', title: 'Integrity', description: 'His word was always his bond.' },
  { icon: 'ph:clock', title: 'Discipline', description: 'Up before dawn, every single day.' },
  { icon: 'ph:flag-banner', title: 'Leadership', description: 'He led from the front — by example.' },
  { icon: 'ph:hand-heart', title: 'Compassion', description: 'No one left his door empty-handed.' },
  { icon: 'ph:church', title: 'Faith', description: 'The quiet anchor beneath everything.' },
  { icon: 'ph:users-three', title: 'Family', description: 'His first ministry and greatest pride.' },
  { icon: 'ph:handshake', title: 'Service', description: 'He measured wealth in people helped.' },
  { icon: 'ph:star', title: 'Excellence', description: '“If it bears your name, do it well.”' },
]

export const gallery: GalleryImage[] = [
  // REPLACE — swap for real family photographs in /public/images
  { src: 'https://picsum.photos/id/1005/700/900', alt: 'Portrait in his study', caption: 'In his study, 2018', shape: 'tall' },
  { src: 'https://picsum.photos/id/1011/900/600', alt: 'By the river on a family trip', caption: 'Family trip, 1994', shape: 'wide' },
  { src: 'https://picsum.photos/id/1027/700/700', alt: 'With his wife Folake', caption: 'With Folake, 1980', shape: 'square' },
  { src: 'https://picsum.photos/id/1035/700/900', alt: 'Teaching at the blackboard', caption: 'St. Gregory’s, 1986', shape: 'tall' },
  { src: 'https://picsum.photos/id/1043/900/600', alt: 'Graduation day at Ibadan', caption: 'Graduation, 1974', shape: 'wide' },
  { src: 'https://picsum.photos/id/1050/700/700', alt: 'At the library opening', caption: 'Library opening, 2010', shape: 'square' },
  { src: 'https://picsum.photos/id/106/700/900', alt: 'In the garden', caption: 'The garden, today', shape: 'tall' },
  { src: 'https://picsum.photos/id/1080/900/600', alt: 'Surrounded by grandchildren', caption: 'The grandchildren, 2023', shape: 'wide' },
]

export const lessons: LifeLesson[] = [
  {
    quote: 'Start earlier than you think you need to, and stay later than anyone expects.',
    context: 'On work',
  },
  {
    quote: 'Raise your children with your life, not your lectures.',
    context: 'On family',
  },
  {
    quote: 'The truth costs you once. A lie charges interest forever.',
    context: 'On character',
  },
  {
    quote: 'Plant trees whose shade you will never sit in.',
    context: 'On legacy',
  },
]

export const tributes: Tribute[] = [
  {
    photo: 'https://picsum.photos/id/64/300/300',
    name: 'Folake Adewale',
    relationship: 'Wife of 45 years',
    message:
      'He has held my hand through every season. The man the world admires is the same man at home — that is the rarest thing about him.',
  },
  {
    photo: 'https://picsum.photos/id/91/300/300',
    name: 'Tunde Adewale',
    relationship: 'Eldest son',
    message:
      'Everything I know about being a man, I learned watching him keep promises no one would have blamed him for breaking.',
  },
  {
    photo: 'https://picsum.photos/id/26/300/300',
    name: 'Amara Adewale-Okafor',
    relationship: 'Daughter',
    message:
      'Daddy never told us we could do anything. He simply behaved as if it were obvious — and so we believed it.',
  },
  {
    photo: 'https://picsum.photos/id/22/300/300',
    name: 'Dr. Kunle Ajayi',
    relationship: 'Former student',
    message:
      'He paid my examination fees in 1989 and told no one. I found out twenty years later. There are hundreds of stories like mine.',
  },
]

export const legacy = {
  lead: 'Some men build houses. He built people.',
  paragraphs: [
    'In his family, his legacy is visible around every dinner table — in children who tell the truth even when it is expensive, and grandchildren who already know that Sunday dinner is not optional.',
    'In his community, it stands in brick and mortar: a library, a scholarship trust, a school whose corridors still echo with his standards. But mostly it walks around on two legs — in the doctors, teachers, engineers and mothers and fathers who once sat in his classroom.',
    'And for the generations he will never meet, it lives in these pages: proof that an ordinary life, lived with extraordinary faithfulness, is the greatest inheritance a man can leave.',
  ],
  image: 'https://picsum.photos/id/1015/1600/900', // REPLACE — landscape/legacy photo
}

export const footer = {
  name: 'Chief Emmanuel Adewale',
  years: '1952 — ',
  builtBy: 'Built with ❤️ by his family',
}
