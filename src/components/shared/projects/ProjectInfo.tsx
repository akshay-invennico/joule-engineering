import React from 'react';

interface Specification {
  label: string;
  value: string;
}

interface ProjectInfoProps {
  longDescription?: string;
  overview?: string;
  technicalSpecifications?: Specification[];
  executionScope?: string[];
  materialsCompliance?: string;
}

const ProjectInfo: React.FC<ProjectInfoProps> = ({
  longDescription,
  overview,
  technicalSpecifications,
  executionScope,
  materialsCompliance,
}) => {
  if (!overview && !technicalSpecifications) return null;

  return (
    <section className="bg-white pb-16 md:pb-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl">

          {longDescription && (
            <p className="text-gray-600 text-lg mb-12">
              {longDescription}
            </p>
          )}

          {overview && (
            <div className="mb-10">
              <h3 className="text-black text-xl font-bold mb-4">Overview</h3>
              <p className="text-gray-600 leading-relaxed text-base">
                {overview}
              </p>
            </div>
          )}

          {technicalSpecifications && technicalSpecifications.length > 0 && (
            <div className="mb-10">
              <h3 className="text-black text-xl font-bold mb-4">Technical Specifications</h3>
              <ul className="space-y-2">
                {technicalSpecifications.map((spec, index) => (
                  <li key={index} className="flex items-start text-gray-600 text-base">
                    <span className="mr-2 text-gray-400">•</span>
                    <span>
                      <strong className="text-gray-800">{spec.label}:</strong> {spec.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {executionScope && executionScope.length > 0 && (
            <div className="mb-10">
              <h3 className="text-black text-xl font-bold mb-4">Engineering & Execution Scope</h3>
              <ul className="space-y-2">
                {executionScope.map((item, index) => (
                  <li key={index} className="flex items-start text-gray-600 text-base">
                    <span className="mr-2 text-gray-400">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {materialsCompliance && (
            <div className="mb-10">
              <h3 className="text-black text-xl font-bold mb-4">Materials & Compliance</h3>
              <p className="text-gray-600 leading-relaxed text-base">
                {materialsCompliance}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectInfo;
