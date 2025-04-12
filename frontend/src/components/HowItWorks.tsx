
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, Code, LineChart, MessageCircle, Search, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const candidateSteps = [
    {
      icon: <Search className="h-6 w-6" />,
      title: "Browse Opportunities",
      description: "Explore jobs with transparent info on requirements, salary, and culture.",
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Complete Challenges",
      description: "Demonstrate your skills through practical real-world tasks.",
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Get Matched",
      description: "AI connects you with positions that fit your proven abilities.",
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Connect With Companies",
      description: "Interview with employers who value your demonstrated skills.",
    },
  ];

  const employerSteps = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Create Work Samples",
      description: "Share real examples of the work candidates would do.",
    },
    {
      icon: <LineChart className="h-6 w-6" />,
      title: "Review Results",
      description: "Evaluate candidates based on their challenge performance.",
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Get Matches",
      description: "AI identifies candidates with proven skills for your role.",
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "Hire With Confidence",
      description: "Connect with candidates who've demonstrated their abilities.",
    },
  ];

  return (
    <section className="py-12 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              How It Works
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A simple process for both candidates and employers
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="flex-1">
            <div className="flex items-center mb-6">
              <Badge className="mr-2 bg-brand-100 text-brand-800 hover:bg-brand-100">For Candidates</Badge>
              <h3 className="text-2xl font-semibold">Find your ideal role</h3>
            </div>
            <div className="space-y-8">
              {candidateSteps.map((step, index) => (
                <div key={index} className="flex">
                  <div className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">{step.title}</h4>
                    <p className="mt-1 text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button className="bg-brand-600 hover:bg-brand-500" asChild>
                <Link to="/for-candidates">Find Opportunities</Link>
              </Button>
            </div>
          </div>

          <div className="flex-1">
            <div className="flex items-center mb-6">
              <Badge className="mr-2 bg-blue-100 text-blue-800 hover:bg-blue-100">For Employers</Badge>
              <h3 className="text-2xl font-semibold">Hire the right talent</h3>
            </div>
            <div className="space-y-8">
              {employerSteps.map((step, index) => (
                <div key={index} className="flex">
                  <div className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">{step.title}</h4>
                    <p className="mt-1 text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button className="bg-brand-600 hover:bg-brand-500" asChild>
                <Link to="/for-employers">Post a Job</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
