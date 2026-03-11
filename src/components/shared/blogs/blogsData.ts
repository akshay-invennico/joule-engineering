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
    title: 'Engineering solutions for power plants',
    category: 'Industry Applications',
    date: '12 Aug, 2025',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
    linkText: 'Read more',
  },
  {
    id: 2,
    title: 'Quality control in metal fabrication',
    category: 'Quality Control',
    date: '15 Sep, 2025',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    linkText: 'Explore now',
  },
  {
    id: 3,
    title: 'Importance of design optimization',
    category: 'Engineering',
    date: '22 Oct, 2025',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80',
    linkText: 'Discover more',
  },
  {
    id: 4,
    title: 'MIG vs TIG welding',
    category: 'Fabrication Techniques',
    date: '30 Nov, 2025',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    linkText: 'Learn more',
  },
  {
    id: 5,
    title: 'Best metals for industrial fabrication',
    category: 'Materials & Metals',
    date: '12 Aug, 2025',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
    linkText: 'Read more',
  }
];