
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChallengeCard from "@/components/ChallengeCard";

const featuredChallenges = [
  {
    id: "1",
    title: "Frontend Development Challenge",
    description: "Build a responsive landing page using React and Tailwind CSS with specific requirements for layout and functionality.",
    company: "TechCorp",
    duration: "2-3 hours",
    difficulty: "Medium" as const,
    skills: ["React", "Tailwind CSS", "Responsive Design"],
  },
  {
    id: "2",
    title: "Marketing Analytics Challenge",
    description: "Analyze a dataset of marketing campaign results and create actionable recommendations to improve performance.",
    company: "GrowthLabs",
    duration: "1-2 hours",
    difficulty: "Easy" as const,
    skills: ["Data Analysis", "Marketing", "Excel"],
  },
  {
    id: "3",
    title: "UX Research Challenge",
    description: "Design and conduct a small usability test for a mobile application feature and present your findings.",
    company: "DesignHub",
    duration: "2-3 hours",
    difficulty: "Medium" as const,
    skills: ["UX Research", "Usability Testing", "Presentation"],
  },
];

const ForCandidates = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="hero-gradient py-16 md:py-24 text-center">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                Get Hired Based on Your <span className="text-brand-600">Actual Skills</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                No more endless applications and generic rejection emails. Show what you can do
                through real-world challenges and get matched with opportunities that value your abilities.
              </p>
              <Button size="lg" className="bg-brand-600 hover:bg-brand-500">
                <Link to="/signup">Create Your Profile</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How It Works for Candidates</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our platform replaces traditional resumes with skill demonstrations that connect you to the right opportunities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-t-4 border-t-brand-500">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center mb-4">
                    1
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Create a Profile</h3>
                  <p className="text-gray-600">
                    Build your profile focused on your skills and preferences, not just your work history.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-t-4 border-t-brand-500">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center mb-4">
                    2
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Complete Challenges</h3>
                  <p className="text-gray-600">
                    Take skill-based challenges designed to showcase your abilities in real-world scenarios.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-t-4 border-t-brand-500">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center mb-4">
                    3
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Get Matched</h3>
                  <p className="text-gray-600">
                    Our AI matches you with companies looking for your proven skills and experience.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Benefits of Skill-Based Hiring</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our approach helps you stand out based on what you can do, not just where you've been.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex">
                <div className="mr-4 text-brand-600">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Overcome Resume Gaps</h3>
                  <p className="text-gray-600">
                    Your skills matter more than employment history. Show what you can do, regardless of gaps or non-traditional backgrounds.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-4 text-brand-600">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Eliminate Bias</h3>
                  <p className="text-gray-600">
                    Our blind matching process focuses on your abilities, not your demographics or background.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-4 text-brand-600">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Salary Transparency</h3>
                  <p className="text-gray-600">
                    See clear salary information before you invest time in the application process.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-4 text-brand-600">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Culture Fit</h3>
                  <p className="text-gray-600">
                    Access detailed metrics about company culture to find an environment where you'll thrive.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Featured Challenges</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Try these sample challenges to see how our platform works
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredChallenges.map((challenge) => (
                <ChallengeCard key={challenge.id} {...challenge} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" className="group" asChild>
                <Link to="/challenges">
                  View All Challenges 
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-brand-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to showcase your skills?</h2>
              <p className="text-xl opacity-90 mb-8">
                Join thousands of professionals who are getting hired based on what they can do, not just what's on their resume.
              </p>
              <Button size="lg" className="bg-white text-brand-600 hover:bg-gray-100">
                <Link to="/signup">Get Started Now</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ForCandidates;
