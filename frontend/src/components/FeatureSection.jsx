
import { Code, Briefcase, LineChart, Shield, Users, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: <Code className="h-6 w-6 text-brand-600" />,
    title: "Skill-Based Challenges",
    description:
      "Complete real-world tasks that showcase your abilities better than any resume could."
  },
  {
    icon: <Shield className="h-6 w-6 text-brand-600" />,
    title: "Bias-Free Matching",
    description:
      "Our blind matching system focuses on capabilities, not background information."
  },
  {
    icon: <LineChart className="h-6 w-6 text-brand-600" />,
    title: "Transparent Metrics",
    description:
      "Access clear salary data and company culture information before you apply."
  },
  {
    icon: <Briefcase className="h-6 w-6 text-brand-600" />,
    title: "Real Work Samples",
    description:
      "Companies post actual work examples instead of vague job descriptions."
  },
  {
    icon: <Zap className="h-6 w-6 text-brand-600" />,
    title: "AI-Powered Matching",
    description:
      "Our technology connects you with positions based on demonstrated abilities."
  },
  {
    icon: <Users className="h-6 w-6 text-brand-600" />,
    title: "Feedback Loop",
    description:
      "Post-hire feedback improves future matching and creates better outcomes."
  }
];

export function FeatureSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-brand-100 px-3 py-1 text-sm text-brand-600">
              Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              A Better Way to Hire and Get Hired
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              SkillMatch reimagines the hiring process with these key features
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start gap-6 md:gap-8 mt-8">
          {features.map((feature, index) => (
            <Card key={index} className="shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="mb-3">{feature.icon}</div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm text-gray-600">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
