
import { Card } from "@/components/ui/card";

const CompanyLogos = () => {
  // These would be replaced with actual company logos in a real application
  const companies = [
    { name: "TechCorp", logo: "TC" },
    { name: "InnovateCo", logo: "IC" },
    { name: "DesignHub", logo: "DH" },
    { name: "BuildSoft", logo: "BS" },
    { name: "DataSystems", logo: "DS" },
    { name: "CreativeMinds", logo: "CM" }
  ];

  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <h2 className="text-2xl font-bold">Trusted by Leading Companies</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 items-center">
          {companies.map((company, i) => (
            <Card key={i} className="flex items-center justify-center h-20 bg-white">
              <div className="text-2xl font-bold text-gray-400">{company.logo}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;
