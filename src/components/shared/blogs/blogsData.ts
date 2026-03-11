export interface BlogSection {
  heading?: string;
  paragraphs: string[];
}

export interface Blog {
  id: number;
  title: string;
  category: string;
  date: string;
  image: string;
  linkText: string;
  content: BlogSection[];
}

const blog1Content: BlogSection[] = [
  {
    heading: 'Introduction to Engineering in Power Plants',
    paragraphs: [
      'Power plants require reliable engineering infrastructure to ensure continuous and efficient electricity generation. Engineering solutions for power plants involve the design, fabrication, and installation of heavy-duty components capable of withstanding high temperatures, pressure, and demanding operational environments.'
    ]
  },
  {
    heading: 'Structural Engineering Requirements',
    paragraphs: [
      'One of the most important aspects of engineering in power plants is structural strength and durability. Components such as support structures, equipment frames, piping systems, and steel platforms must be designed to handle heavy loads and long operating cycles. Engineers carefully consider factors such as heat expansion, vibration, corrosion resistance, and safety standards when designing these structures.'
    ]
  },
  {
    heading: 'Role of Custom Fabrication',
    paragraphs: [
      'Custom fabrication plays a major role in thermal, hydroelectric, and renewable power plants. Fabricated platforms, heavy-duty frames, ducting systems, and steel assemblies support turbines, boilers, and generators. Precision machining is also used to manufacture critical components that require strict dimensional accuracy.'
    ]
  },
  {
    heading: 'Maintenance and Upgrades in Power Plants',
    paragraphs: [
      'Maintenance and system upgrades are essential for improving plant performance. As power plants age, retrofitting structural components or redesigning certain systems helps increase efficiency and maintain safety standards.'
    ]
  },
  {
    heading: 'Conclusion',
    paragraphs: [
      'With advancements in engineering technology and fabrication methods, modern engineering solutions help power plants operate efficiently, safely, and reliably for long periods.'
    ]
  }
];

const blog2Content: BlogSection[] = [
  {
    heading: 'Importance of Quality Control in Fabrication',
    paragraphs: [
      'Quality control is a critical aspect of metal fabrication. Fabricated components are used in industries such as construction, machinery manufacturing, and infrastructure where precision and durability are essential.'
    ]
  },
  {
    heading: 'Inspection During Design and Planning',
    paragraphs: [
      'Quality control begins during the design stage. Engineers review technical drawings, manufacturing procedures, and material specifications to ensure that fabrication processes are accurate and well planned.'
    ]
  },
  {
    heading: 'Raw Material Verification',
    paragraphs: [
      'Material inspection is another important step in the quality control process. Fabricators ensure that raw materials such as steel, aluminum, and stainless steel meet required standards for strength and composition.'
    ]
  },
  {
    heading: 'In-Process Fabrication Inspection',
    paragraphs: [
      'During fabrication, inspections are carried out to verify dimensions, weld quality, and surface finish. Tools such as measuring gauges, calipers, and testing equipment help confirm accuracy.'
    ]
  },
  {
    heading: 'Final Testing and Delivery',
    paragraphs: [
      'Advanced testing methods like ultrasonic testing and dye penetrant inspection help detect internal defects. Final inspection ensures the product meets industry standards before delivery.'
    ]
  }
];

const blog3Content: BlogSection[] = [
  {
    heading: 'What is Design Optimization?',
    paragraphs: [
      'Design optimization is the process of improving a product’s design to achieve better performance, reduced costs, and increased efficiency while maintaining strength and functionality.'
    ]
  },
  {
    heading: 'Efficient Material Utilization',
    paragraphs: [
      'One major benefit of design optimization is efficient use of materials. Engineers analyze product structures and identify opportunities to reduce waste without affecting durability.'
    ]
  },
  {
    heading: 'Improving Manufacturing Efficiency',
    paragraphs: [
      'Optimized designs are easier to manufacture. When designs are aligned with fabrication processes such as welding, machining, and forming, production becomes faster and more efficient.'
    ]
  },
  {
    heading: 'Enhancing Product Performance',
    paragraphs: [
      'Engineering teams use advanced simulation software to test designs before production. These simulations evaluate factors such as stress distribution, load capacity, and thermal performance.'
    ]
  },
  {
    heading: 'Sustainable Engineering Practices',
    paragraphs: [
      'Design optimization also supports sustainability by reducing material usage and minimizing production waste.'
    ]
  }
];

const blog4Content: BlogSection[] = [
  {
    heading: 'Understanding Welding in Fabrication',
    paragraphs: [
      'Welding is an essential process in metal fabrication used to permanently join metal components. Among the various methods available, MIG and TIG welding are widely used in industrial manufacturing.'
    ]
  },
  {
    heading: 'What is MIG Welding?',
    paragraphs: [
      'MIG welding (Metal Inert Gas welding) uses a continuously fed wire electrode and shielding gas to create strong welds. It is widely used for thick materials and large-scale fabrication projects due to its speed and efficiency.'
    ]
  },
  {
    heading: 'What is TIG Welding?',
    paragraphs: [
      'TIG welding (Tungsten Inert Gas welding) uses a non-consumable tungsten electrode and requires manual addition of filler material. This method offers greater control and precision.'
    ]
  },
  {
    heading: 'Comparison of MIG and TIG Welding',
    paragraphs: [
      'MIG welding is preferred for productivity and large fabrication jobs, while TIG welding is ideal for thin materials and high-precision work.'
    ]
  },
  {
    heading: 'Choosing the Right Welding Method',
    paragraphs: [
      'The choice between MIG and TIG welding depends on project requirements, material thickness, and desired weld quality.'
    ]
  }
];

const blog5Content: BlogSection[] = [
  {
    heading: 'Importance of Material Selection',
    paragraphs: [
      'Choosing the right metal is essential in industrial fabrication because material properties directly influence strength, durability, and performance.'
    ]
  },
  {
    heading: 'Mild Steel in Fabrication',
    paragraphs: [
      'Mild steel is one of the most commonly used metals due to its affordability, strength, and versatility. It is widely used in structural frameworks and industrial machinery.'
    ]
  },
  {
    heading: 'Stainless Steel Applications',
    paragraphs: [
      'Stainless steel is valued for its corrosion resistance and durability. It is commonly used in chemical plants, food processing industries, and medical equipment manufacturing.'
    ]
  },
  {
    heading: 'Aluminum in Industrial Manufacturing',
    paragraphs: [
      'Aluminum is lightweight and corrosion-resistant, making it suitable for transportation, aerospace, and construction industries.'
    ]
  },
  {
    heading: 'Carbon Steel for Heavy Engineering',
    paragraphs: [
      'Carbon steel offers high strength and durability, making it suitable for heavy machinery and structural applications.'
    ]
  },
  {
    heading: 'Conclusion',
    paragraphs: [
      'Selecting the right metal depends on environmental conditions, mechanical requirements, and manufacturing processes. Proper material selection ensures reliable and long-lasting fabricated components.'
    ]
  }
];

export const blogsData: Blog[] = [
  {
    id: 1,
    title: 'Engineering solutions for power plants',
    category: 'Industry Applications',
    date: '12 Aug, 2025',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
    linkText: 'Read more',
    content: blog1Content,
  },
  {
    id: 2,
    title: 'Quality control in metal fabrication',
    category: 'Quality Control',
    date: '15 Sep, 2025',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    linkText: 'Explore now',
    content: blog2Content,
  },
  {
    id: 3,
    title: 'Importance of design optimization',
    category: 'Engineering',
    date: '22 Oct, 2025',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80',
    linkText: 'Discover more',
    content: blog3Content,
  },
  {
    id: 4,
    title: 'MIG vs TIG welding',
    category: 'Fabrication Techniques',
    date: '30 Nov, 2025',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    linkText: 'Learn more',
    content: blog4Content,
  },
  {
    id: 5,
    title: 'Best metals for industrial fabrication',
    category: 'Materials & Metals',
    date: '12 Aug, 2025',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
    linkText: 'Read more',
    content: blog5Content,
  }
];