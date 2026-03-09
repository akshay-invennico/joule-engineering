import { StaticImageData } from 'next/image';
import nouser from '../../../../public/assets/story.png'

export interface Testimonial {
  id: number;
  name: string;
  // role: string;
  // company: string;
  quote: string;
  highlight: string;
  avatar: string | StaticImageData;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Mr. Daniel Scoot',
    // role: 'Founder',
    // company: 'Nexca',
    quote: '"We have been sourcing engineering components from Joule Engineering Works for quite some time now. The product quality, durability, and finishing are excellent. Their team is professional and always delivers on time."',
    highlight: 'Excellent Quality & Reliable Service',
    avatar: nouser,
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    // role: 'CEO',
    // company: 'TechBuild',
    quote: '“Working with Joule Engineering Works has been a smooth experience. Their team understands technical requirements well and provides reliable solutions. Highly recommended for engineering and fabrication needs.”',
    highlight: 'Professional and Supportive Team',
    avatar: nouser,
  },
  {
    id: 3,
    name: 'Michael Chen',
    // role: 'Director',
    // company: 'Future Infra',
    quote: '"Joule Engineering Works consistently delivers high-quality work with great attention to detail. Their commitment to deadlines and workmanship makes them a dependable partner for our projects."',
    highlight: 'Timely Delivery & Great Workmanship',
    avatar: nouser,
  },
  {
    id: 4,
    name: 'Emily Davis',
    // role: 'Manager',
    // company: 'Green Energy',
    quote: '“We appreciate the professionalism and dedication of the Joule Engineering Works team. Their engineering expertise and consistent product quality make them a trusted partner for our industrial requirements.”',
    highlight: 'Trusted Engineering Partner',
    avatar: nouser,
  },
  {
    id: 5,
    name: 'Robert Wilson',
    // role: 'Head of Ops',
    // company: 'LogiChain',
    quote: '“The products supplied by Joule Engineering Works always meet our expectations in terms of quality and performance. Their service and communication throughout the process are excellent.”',
    highlight: 'Quality That Meets Expectations',
    avatar: nouser,
  },
];