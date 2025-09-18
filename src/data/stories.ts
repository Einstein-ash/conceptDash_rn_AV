// src/data/stories.ts

export interface Story {
  id: number;
  location: string;
  readTime: string;
  title: string;
  author: string;
  date: string;
  category: 'Articles' | 'Insights' | 'Mentions';
  image: any;
}

// ACTION: Add your stories here and update the image paths
export const allStories: Story[] = [
  {
    id: 1,
    location: '4 Needham St, Lindsay',
    readTime: '5 MIN READ',
    title: 'Smart Drainage Systems: Solving Urban Flooding with Innovation.',
    author: 'Gurban',
    date: '02 May, 2025',
    category: 'Articles',
    image: require('../assets/images/stories/story1.png'),
  },
  {
    id: 2,
    location: 'Rockport Village Urbanization, TLTI',
    readTime: '3 MIN READ',
    title: 'The Future of Public Spaces in a Post-Pandemic World.',
    author: 'Jane Doe',
    date: '15 Apr, 2025',
    category: 'Insights',
    image: require('../assets/images/stories/story2.png'),
  },
  {
    id: 3,
    location: 'Water & Enviornment',
    readTime: '4 MIN READ',
    title: 'Concept Dash Honored with Urban Design Award.',
    author: 'Press Release',
    date: '28 Mar, 2025',
    category: 'Mentions',
    image: require('../assets/images/stories/story3.jpg'),
  },
  {
    id: 4,
    location: 'Metrolinx Heritage Road Layover Facility',
    readTime: '4 MIN READ',
    title: 'Concept Dash Honored with Urban Design Award.',
    author: 'Press Release',
    date: '28 Mar, 2025',
    category: 'Mentions',
    image: require('../assets/images/stories/story4.png'),
  },
  // ... Add more stories for each category
];