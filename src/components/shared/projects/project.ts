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
    title: 'Pressure Vessel Package',
    image: project1,
    tags: ['Static Equipment', 'Platforms and Ladders '],
    link: '/projects/pressure-vessel',
  },
  {
    id: 2,
    title: 'Cryogenic Outer Jacket',
    image: project2,
    tags: ['Cryogenic Equipment', 'Heavy Fabrication'],
    link: '/projects/cryogenic-outer-jacket',
  },
  {
    id: 3,
    title: 'Pump Base Frame Assemblies',
    image: project1,
    tags: ['Rotating Equipment Support ', 'Dimensional Control'],
    link: '/projects/pump-base-frame',
  },
  {
    id: 4,
    title: 'Skirts and Saddles Fabrication',
    image: project2,
    tags: ['Static Equipment Parts', 'Heavy Engineering'],
    link: '/projects/skirts-saddles',
  },
];
