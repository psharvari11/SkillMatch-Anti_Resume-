
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate  } from "react-router-dom";
import { Clock, BarChart, Building } from "lucide-react";

const difficultyColor = {
  Easy: "bg-green-100 text-green-800",
  Medium: "bg-yellow-100 text-yellow-800",
  Hard: "bg-red-100 text-red-800",
};

const ChallengeCard = ({ id,title, description, company, duration, difficulty, skills ,challenge   }) => {
  const navigate = useNavigate();

  const handleStartChallenge = () => {
    navigate(`/challenges/${id}`);
  };
  return (
    <Card className="challenge-card overflow-hidden hover:shadow-lg">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{title}</CardTitle>
          <Badge className={difficultyColor[difficulty]}>{difficulty}</Badge>
        </div>
        <CardDescription className="text-sm pt-1">{company}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {skills.map((skill, index) => (
            <Badge key={index} variant="outline" className="bg-gray-50">
              {skill}
            </Badge>
          ))}
        </div>
        <div className="flex items-center text-sm text-gray-500 space-x-4">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center">
            <Building className="h-4 w-4 mr-1" />
            <span>{company}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <Button onClick={handleStartChallenge} className="w-full bg-brand-600 hover:bg-brand-500" >
          Start Challenge
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ChallengeCard;
