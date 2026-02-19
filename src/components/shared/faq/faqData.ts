export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const data: FaqItem[] = [
  {
    question: "What types of engineering design services do you offer?",
    answer: "We provide comprehensive design and engineering services...",
    category: "General Inquiries"
  },
  {
    question: "Can you handle projects with specific industry standards and codes?",
    answer: "Yes, we are well-versed in various industry standards...",
    category: "Technical Support"
  },
  {
    question: "What is your typical project timeline for engineering projects?",
    answer: "Timelines vary based on project complexity...",
    category: "Service Questions"
  },
  {
    question: "How do you ensure quality and accuracy in your engineering designs?",
    answer: "We employ rigorous quality control processes...",
    category: "Technical Support"
  },
  {
    question: "What types of materials do you work with?",
    answer: "We have experience working with diverse materials...",
    category: "General Inquiries"
  },
  {
    question: "How can I get started with a new engineering project?",
    answer: "You can reach out via our contact page...",
    category: "Account Information"
  }
];
