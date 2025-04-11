
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, Filter } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChallengeCard from "@/components/ChallengeCard";

// Sample challenge data
const challengesData = [
  {
    id: "1",
    title: "Frontend Development Challenge",
    description: "Build a responsive landing page using React and Tailwind CSS with specific requirements for layout and functionality.",
    company: "TechCorp",
    duration: "2-3 hours",
    difficulty: "Medium",
    skills: ["React", "Tailwind CSS", "Responsive Design"],
    category: "Development",
  },
  {
    id: "2",
    title: "Marketing Analytics Challenge",
    description: "Analyze a dataset of marketing campaign results and create actionable recommendations to improve performance.",
    company: "GrowthLabs",
    duration: "1-2 hours",
    difficulty: "Easy",
    skills: ["Data Analysis", "Marketing", "Excel"],
    category: "Marketing",
  },
  {
    id: "3",
    title: "UX Research Challenge",
    description: "Design and conduct a small usability test for a mobile application feature and present your findings.",
    company: "DesignHub",
    duration: "2-3 hours",
    difficulty: "Medium",
    skills: ["UX Research", "Usability Testing", "Presentation"],
    category: "Design",
  },
  {
    id: "4",
    title: "Backend API Challenge",
    description: "Create a RESTful API with Node.js that handles user authentication and basic CRUD operations for a resource.",
    company: "ServerTech",
    duration: "3-4 hours",
    difficulty: "Hard",
    skills: ["Node.js", "REST APIs", "Authentication"],
    category: "Development",
  },
  {
    id: "5",
    title: "Financial Analysis Challenge",
    description: "Analyze company financial statements and create a valuation model with recommendations for potential investors.",
    company: "FinGroup",
    duration: "2-3 hours",
    difficulty: "Hard",
    skills: ["Financial Analysis", "Valuation", "Excel"],
    category: "Finance",
  },
  {
    id: "6",
    title: "Content Writing Challenge",
    description: "Write engaging blog content on a given topic that incorporates SEO best practices and maintains brand voice.",
    company: "ContentHub",
    duration: "1-2 hours",
    difficulty: "Easy",
    skills: ["Content Writing", "SEO", "Brand Voice"],
    category: "Marketing",
  },
  {
    id: "7",
    title: "Data Science Challenge",
    description: "Clean and analyze a dataset to provide insights and visualizations that answer specific business questions.",
    company: "DataCorp",
    duration: "2-3 hours",
    difficulty: "Medium",
    skills: ["Python", "Data Analysis", "Data Visualization"],
    category: "Data Science",
  },
  {
    id: "8",
    title: "Project Management Challenge",
    description: "Create a project plan for a given scenario, including timeline, resource allocation, and risk assessment.",
    company: "ProjectPro",
    duration: "2 hours",
    difficulty: "Medium",
    skills: ["Project Planning", "Risk Management", "Resource Allocation"],
    category: "Management",
  },
  {
    id: "9",
    title: "Mobile App Design Challenge",
    description: "Design key screens for a mobile application based on user requirements and brand guidelines.",
    company: "AppWorks",
    duration: "3 hours",
    difficulty: "Medium",
    skills: ["UI Design", "Mobile Design", "Figma"],
    category: "Design",
  },
];

const categories = ["All Categories", "Development", "Design", "Marketing", "Data Science", "Finance", "Management"];
const difficulties = ["All Difficulties", "Easy", "Medium", "Hard"];
const durations = ["All Durations", "1-2 hours", "2-3 hours", "3+ hours"];

const Challenges = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [difficulty, setDifficulty] = useState("All Difficulties");
  const [duration, setDuration] = useState("All Durations");
  
  // Filter challenges based on user selections
  const filteredChallenges = challengesData.filter((challenge) => {
    const matchesSearch = challenge.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          challenge.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          challenge.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = category === "All Categories" || challenge.category === category;
    const matchesDifficulty = difficulty === "All Difficulties" || challenge.difficulty === difficulty;
    const matchesDuration = duration === "All Durations" || challenge.duration.includes(duration.replace("+ hours", "+").split(" ")[0]);
    
    return matchesSearch && matchesCategory && matchesDifficulty && matchesDuration;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-brand-50 py-12">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl font-bold mb-4">Skill Challenges</h1>
              <p className="text-xl text-gray-600 mb-8">
                Complete these challenges to demonstrate your skills and get matched with relevant opportunities
              </p>
              
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input 
                    placeholder="Search challenges by title, description, or skills" 
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Button className="bg-brand-600 hover:bg-brand-500">Search</Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-start mb-8">
              <div className="mb-4 md:mb-0 flex items-center">
                <Filter className="mr-2 h-5 w-5 text-gray-500" />
                <h2 className="text-xl font-semibold">Filters</h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full md:w-auto">
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat} value={cat}>
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Select value={difficulty} onValueChange={setDifficulty}>
                  <SelectTrigger>
                    <SelectValue placeholder="Difficulty" />
                  </SelectTrigger>
                  <SelectContent>
                    {difficulties.map((diff) => (
                      <SelectItem key={diff} value={diff}>
                        {diff}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Select value={duration} onValueChange={setDuration}>
                  <SelectTrigger>
                    <SelectValue placeholder="Duration" />
                  </SelectTrigger>
                  <SelectContent>
                    {durations.map((dur) => (
                      <SelectItem key={dur} value={dur}>
                        {dur}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Active filters display */}
            {(category !== "All Categories" || difficulty !== "All Difficulties" || duration !== "All Durations" || searchTerm) && (
              <div className="flex flex-wrap gap-2 mb-6">
                {searchTerm && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    Search: {searchTerm}
                    <button onClick={() => setSearchTerm("")} className="ml-1 hover:text-gray-700">×</button>
                  </Badge>
                )}
                {category !== "All Categories" && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    Category: {category}
                    <button onClick={() => setCategory("All Categories")} className="ml-1 hover:text-gray-700">×</button>
                  </Badge>
                )}
                {difficulty !== "All Difficulties" && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    Difficulty: {difficulty}
                    <button onClick={() => setDifficulty("All Difficulties")} className="ml-1 hover:text-gray-700">×</button>
                  </Badge>
                )}
                {duration !== "All Durations" && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    Duration: {duration}
                    <button onClick={() => setDuration("All Durations")} className="ml-1 hover:text-gray-700">×</button>
                  </Badge>
                )}
                <Button 
                  variant="link" 
                  className="text-sm h-auto p-0"
                  onClick={() => {
                    setSearchTerm("");
                    setCategory("All Categories");
                    setDifficulty("All Difficulties");
                    setDuration("All Durations");
                  }}
                >
                  Clear all filters
                </Button>
              </div>
            )}

            {/* Results count */}
            <div className="mb-6">
              <p className="text-gray-500">
                Showing {filteredChallenges.length} of {challengesData.length} challenges
              </p>
            </div>

            {/* Challenge cards */}
            {filteredChallenges.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredChallenges.map((challenge) => (
                  <ChallengeCard key={challenge.id} {...challenge} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">No challenges found</h3>
                <p className="text-gray-500 mb-4">Try adjusting your filters or search term</p>
                <Button 
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("");
                    setCategory("All Categories");
                    setDifficulty("All Difficulties");
                    setDuration("All Durations");
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Challenges;
