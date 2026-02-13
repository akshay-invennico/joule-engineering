

export interface Blog {
  id: number;
  title: string;
  category: string;
  date: string;
  image: string;
  linkText: string;
}

export const blogsData: Blog[] = [
  {
    id: 1,
    title: 'Factory Spotlight Technology Efficiin Manufacturing.',
    category: 'Industrial',
    date: '12 Aug, 2025',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
    linkText: 'Read more',
  },
  {
    id: 2,
    title: 'Smart Home Devices Revolutionizing Everyday Life.',
    category: 'Consumer',
    date: '15 Sep, 2025',
    image: 'https://images.unsplash.com/photo-1558002038-1091a1661116?w=800&q=80',
    linkText: 'Explore now',
  },
  {
    id: 3,
    title: 'Electric Vehicles Leading the Charge in Sustainability.',
    category: 'Automotive',
    date: '22 Oct, 2025',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80',
    linkText: 'Discover more',
  },
  {
    id: 4,
    title: 'Telemedicine Transforming Patient Care Access.',
    category: 'Healthcare',
    date: '30 Nov, 2025',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    linkText: 'Learn more',
  },
];