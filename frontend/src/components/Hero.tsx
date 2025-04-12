
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero-gradient py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 md:space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            Hiring Based on <span className="text-brand-600">Skills</span>,<br /> 
            Not Resumes
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            SkillMatch connects candidates and companies through real skills demonstration, not keywords on resumes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6 h-9">
            <Button size="sm" className="bg-brand-600 hover:bg-brand-500" asChild>
              <Link to="/for-candidates">Find Jobs <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button size="sm" variant="outline" className="hover:bg-brand-500 " asChild>
              <Link to="/for-employers">Post Jobs</Link>
            </Button>
          </div>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-brand-600">1,200+</div>
              <div className="text-sm text-gray-500">Skills Assessed</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-brand-600">85%</div>
              <div className="text-sm text-gray-500">Placement Rate</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-brand-600">4.8/5</div>
              <div className="text-sm text-gray-500">Candidate Satisfaction</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-brand-600">350+</div>
              <div className="text-sm text-gray-500">Hiring Companies</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
