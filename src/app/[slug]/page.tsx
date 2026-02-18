import React from 'react';
import { notFound } from 'next/navigation';
import Hero from './Hero';
import Carousel from './Carousel';
import { projectData } from '@/components/shared/projects/projectData';
import ProjectInfo from '@/components/shared/projects/ProjectInfo';
import FaqSection from '@/components/shared/faq/FaqSection';
import CtaSection from '@/components/shared/Cta/CtaSection';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projectData.map((project) => ({
    slug: project.slug,
  }));
}

const Page = async ({ params }: PageProps) => {
  const { slug } = await params;
  const project = projectData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      <Hero title={project.title} />
      <Carousel
        images={project.images}
        title={project.title}
        client={project.client}
        projectType={project.projectType}
        description={project.description}
      />
      <ProjectInfo
        longDescription={project.longDescription}
        overview={project.overview}
        technicalSpecifications={project.technicalSpecifications}
        executionScope={project.executionScope}
        materialsCompliance={project.materialsCompliance}
      />
      <FaqSection />
      <CtaSection />
    </main>
  );
};

export default Page;