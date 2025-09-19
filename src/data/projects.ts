// src/data/projects.ts

export interface Project {
  id: number;
  title: string;
  category: 'Construction' | 'Architecture' | 'Railways' | 'Engineering';
  location: string;
  year: number;
  image: any; // Type for require()
}

// ACTION: Add all your projects here and update the image paths
export const allProjects: Project[] = [
  {
    id: 1,
    title: 'Conservation Halton - Kelso',
    category: 'Construction',
    location: 'Milton',
    year: 2023,
    image: require('../assets/images/projects/project1.png'),
  },
  {
    id: 3,
    title: '515 Park Avenue',
    category: 'Architecture',
    location: 'East, Chatham Kent',
    year: 2026,
    image: require('../assets/images/projects/dept_1.png'),
  },
  {
    id: 4,
    title: 'TRCA Lower Don Trail Access',
    category: 'Engineering',
    location: 'Toronto',
    year: 2025,
    image: require('../assets/images/projects/engg_project1.png'),
  },
  {
    id: 5,
    title: '4 Needham St, Lindsay',
    category: 'Architecture',
    location: 'Lindsay, Ontario',
    year: 2027,
    image: require('../assets/images/projects/project1.png'),
  },
    {
    id: 6,
    title: 'CN & Go Train Sightline and Braking Distance Analysis Georgetown Go',
    category: 'Railways',
    location: 'Oshawa to Bowmanville',
    year: 2024,
    image: require('../assets/images/projects/railway_project1.png'),
  },
    {
    id: 7,
    title: 'CN & Go Train Sightline and Braking Distance Analysis Georgetown Go',
    category: 'Railways',
    location: 'Oshawa to Bowmanville',
    year: 2024,
    image: require('../assets/images/projects/railway_project2.png'),
  },
    {
    id: 8,
    title: 'TRCA Lower Don Trail Access',
    category: 'Engineering',
    location: 'Toronto',
    year: 2025,
    image: require('../assets/images/projects/engg_project2.jpg'),
  },
  // ... Add all your other projects here
];