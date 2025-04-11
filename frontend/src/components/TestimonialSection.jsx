
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Software Engineer",
    company: "TechCorp",
    image: "/placeholder.svg",
    testimonial:
      "SkillMatch connected me with a job that perfectly matched my coding abilities. The challenge-based approach let me demonstrate skills I couldn't show on a resume.",
    initials: "AJ",
  },
  {
    name: "Sarah Lee",
    role: "HR Director",
    company: "InnovateCo",
    image: "/placeholder.svg",
    testimonial:
      "We've reduced our bad hires by 75% since using SkillMatch. The quality of candidates is substantially better when they've proven their abilities through challenges.",
    initials: "SL",
  },
  {
    name: "Marcus Chen",
    role: "UX Designer",
    company: "DesignHub",
    image: "/placeholder.svg",
    testimonial:
      "As someone with an unconventional background, traditional hiring processes never worked for me. SkillMatch let me showcase my design skills directly.",
    initials: "MC",
  },
];

const TestimonialSection = () => {
  return (
    <section className="w-full py-12 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 mb-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Success Stories
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
              Hear from candidates and employers who've found success with SkillMatch
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <Card key={i} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex flex-col space-y-4">
                  <div className="space-y-2">
                    <p className="text-gray-700 italic">"{testimonial.testimonial}"</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback className="bg-brand-100 text-brand-800">{testimonial.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium leading-none">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
