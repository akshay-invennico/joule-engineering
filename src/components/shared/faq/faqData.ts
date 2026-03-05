export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const data: FaqItem[] = [
  {
    question: "What does Joule Engineering Works manufacture and supply?",
    answer: "We support process plant equipment and steel fabrication work, including pressure vessels, skids, heavy structural fabrication, and repair work for static equipment. We also support design and detailed engineering through in-house or partner resources when required.",
    category: "General Inquiries"
  },
   {
    question: "Which industries do you typically serve?",
    answer: "We work across process industries such as oil and gas, petrochemical and chemical plants, power, fertiliser, pharmaceuticals, and food-related facilities where execution discipline and inspection readiness matter.",
    category: "General Inquiries"
  },
  {
    question: "What drawings and inputs do you need to quote and start engineering?",
    answer: "For a clear offer, we usually need the scope definition, GA and fabrication drawings if available, design basis or datasheet, material requirements, applicable code, inspection plan, and delivery location. If drawings are not final, we can review available inputs and advise what is missing.",
    category: "Technical Support"
  },
    {
    question: "How do you manage welding quality and inspection readiness?",
    answer: "We use qualified welding practices suited to the job and maintain step-wise checks for fit-up, welding, and dimensional control. We also keep traceability and documentation aligned to the agreed inspection and testing requirements, so client and third-party inspections are smooth.",
    category: "Technical Support"
  },
  {
    question: "Do you take repair or modification jobs for existing equipment?",
    answer: "Yes. We handle repair work for pressure vessels and related static equipment based on condition assessment, scope definition, and required inspection steps. Share the equipment details and site constraints so we can propose the right approach.",
    category: "Service Questions"
  },


  {
    question: "How can our company get registered as a customer or approved vendor account?",
    answer: "Send your vendor registration format or onboarding requirements along with the project scope. We will share the needed company documents and coordinate on quality system details, capacity information, and commercial terms for account setup.",
    category: "Account Information"
  }
];
