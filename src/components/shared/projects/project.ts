import project1 from '../../../../public/assets/projects/project1.png';
import project2 from '../../../../public/assets/projects/project2.png';

import { StaticImageData } from 'next/image';

export interface Project {
  id: number;
  title: string;
  image: string | StaticImageData;
  tags: string[];
  link: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Smart Management Water System',
    image: project1,
    tags: ['Energy Solutions', 'Pipe Line Design'],
    link: '/projects/water-system',
  },
  {
    id: 2,
    title: 'Logistics & Supply Chain',
    image: project2,
    tags: ['Energy Solutions', 'Site Build'],
    link: '/projects/logistics',
  },
  {
    id: 3,
    title: 'Industrial Automation',
    image: project1,
    tags: ['Automation', 'Engineering'],
    link: '/projects/automation',
  },
  {
    id: 4,
    title: 'Renewable Energy Plant',
    image: project2,
    tags: ['Sustainability', 'Power'],
    link: '/projects/renewable',
  },
];