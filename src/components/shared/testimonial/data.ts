import { StaticImageData } from 'next/image';
import nouser from '../../../../public/assets/story.png'

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  highlight: string;
  avatar: string | StaticImageData;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Mr. Daniel Scoot',
    role: 'Founder',
    company: 'Nexca',
    quote: '"Feel free to customize the key features based on the services and strategies you offer in each plan. This breakdown helps various potential clients understand the specific value they\'ll receive at each pricing tier. These tools are fundamental for your home and industry factory build Your own studio for creative work".',
    highlight: 'Great Construction Company!',
    avatar: nouser,
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechBuild',
    quote: '"The attention to detail and commitment to quality was impressive. They delivered our project on time and within budget, exceeding our expectations in every way."',
    highlight: 'Exceptional Quality & Service',
    avatar: nouser,
  },
  {
    id: 3,
    name: 'Michael Chen',
    role: 'Director',
    company: 'Future Infra',
    quote: '"Their innovative approach to problem-solving saved us significant time and resources. A truly professional team that understands the complexities of modern industrial construction."',
    highlight: 'Innovative Solutions',
    avatar: nouser,
  },
  {
    id: 4,
    name: 'Emily Davis',
    role: 'Manager',
    company: 'Green Energy',
    quote: '"We were looking for a partner who valued sustainability as much as we do. Joule Engineering proved to be that partner, delivering eco-friendly solutions without compromising performance."',
    highlight: 'Sustainable & Reliable',
    avatar: nouser,
  },
  {
    id: 5,
    name: 'Robert Wilson',
    role: 'Head of Ops',
    company: 'LogiChain',
    quote: '"From the initial consultation to final handover, the process was seamless. Their expertise in logistics facility construction is unmatched."',
    highlight: 'Seamless Execution',
    avatar: nouser,
  },
];