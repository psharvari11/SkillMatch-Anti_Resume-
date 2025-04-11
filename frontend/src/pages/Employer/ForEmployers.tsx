
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BarChart2, CheckCircle, Clock, DollarSign, ThumbsUp, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ForEmployers = () => {
  const metrics = [
    {
      icon: <Clock className="h-8 w-8 text-brand-600" />,
      value: "68%",
      label: "Reduction in Time-to-Hire",
      description: "Fill positions faster with pre-qualified candidates"
    },
    {
      icon: <ThumbsUp className="h-8 w-8 text-brand-600" />,
      value: "83%",
      label: "Hiring Manager Satisfaction",
      description: "Higher quality candidates lead to better outcomes"
    },
    {
      icon: <BarChart2 className="h-8 w-8 text-brand-600" />,
      value: "42%",
      label: "Decreased Turnover",
      description: "Better matches create longer-lasting relationships"
    },
    {
      icon: <DollarSign className="h-8 w-8 text-brand-600" />,
      value: "51%",
      label: "Lower Cost-per-Hire",
      description: "Efficient process reduces recruitment costs"
    }
  ];

  const plans = [
    {
      name: "Startup",
      price: "$499",
      period: "/month",
      description: "Perfect for small teams hiring a few positions",
      features: [
        "Up to 5 active job postings",
        "Unlimited candidate matches",
        "Basic skill challenges",
        "Standard support"
      ],
      buttonText: "Get Started"
    },
    {
      name: "Growth",
      price: "$999",
      period: "/month",
      description: "For growing companies with ongoing hiring needs",
      features: [
        "Up to 15 active job postings",
        "Unlimited candidate matches",
        "Custom skill challenges",
        "Priority support",
        "Advanced analytics"
      ],
      buttonText: "Contact Sales",
      highlight: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations with complex hiring requirements",
      features: [
        "Unlimited job postings",
        "Custom assessment creation",
        "Enterprise integrations",
        "Dedicated account manager",
        "White-labeled experience"
      ],
      buttonText: "Contact Sales"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="hero-gradient py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                  Stop Hiring Based on Keywords. Start Hiring on <span className="text-brand-600">Proven Skills</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  SkillMatch helps you find candidates who can actually do the job, not just those who know how to write a resume.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-brand-600 hover:bg-brand-500">
                    <Link to="/post-job">Post Your First Job</Link>
                  </Button>
                  <Button size="lg" variant="outline">
                    <Link to="/demo">Request a Demo</Link>
                  </Button>
                </div>
              </div>
              <div className="hidden lg:block bg-white rounded-xl shadow-xl p-6">
                <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-gray-400">Video Demo</span>
                </div>
                <div className="space-y-4">
                  <div className="h-8 bg-gray-100 rounded-md w-3/4"></div>
                  <div className="h-4 bg-gray-100 rounded-md"></div>
                  <div className="h-4 bg-gray-100 rounded-md w-5/6"></div>
                  <div className="h-4 bg-gray-100 rounded-md w-4/6"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Real Results for Employers</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Companies using SkillMatch see significant improvements in their hiring outcomes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {metrics.map((metric, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      {metric.icon}
                    </div>
                    <div className="text-4xl font-bold text-gray-900 mb-2">{metric.value}</div>
                    <h3 className="text-lg font-medium mb-2">{metric.label}</h3>
                    <p className="text-sm text-gray-500">{metric.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How It Works for Employers</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our platform helps you identify the best candidates through demonstrated abilities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                    1
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Create Work Samples</h3>
                  <p className="text-gray-600">
                    Instead of vague job descriptions, provide real examples of work candidates would do in the role.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                    2
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Our AI Matches Candidates</h3>
                  <p className="text-gray-600">
                    We analyze completed challenges to match you with candidates who have demonstrated the needed skills.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                    3
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Interview With Confidence</h3>
                  <p className="text-gray-600">
                    Connect with pre-qualified candidates who have already proven they can handle the work.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Pricing Plans</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Choose the right plan for your organization's hiring needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <Card key={index} className={`overflow-hidden ${plan.highlight ? 'border-brand-500 border-2' : ''}`}>
                  {plan.highlight && (
                    <div className="bg-brand-500 text-white text-center py-2 text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  <CardContent className={`p-6 ${plan.highlight ? 'pt-4' : ''}`}>
                    <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                    <div className="flex items-end mb-4">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      <span className="text-gray-500 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-600 mb-6">{plan.description}</p>
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full ${plan.highlight ? 'bg-brand-600 hover:bg-brand-500' : ''}`}
                      variant={plan.highlight ? 'default' : 'outline'}
                    >
                      {plan.buttonText}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-blue-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Ready to transform your hiring process?</h2>
                <p className="text-xl opacity-90 mb-8">
                  Join forward-thinking companies that are finding better talent faster through skill-based hiring.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                    <Link to="/post-job">Post Your First Job</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-blue-700">
                    <Link to="/contact-sales">
                      Talk to Sales <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <Users className="h-6 w-6 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Enterprise Solutions</h3>
                    <p className="opacity-90">
                      For large organizations with complex hiring needs, our enterprise solution offers customized assessments and dedicated support.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <BarChart2 className="h-6 w-6 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Deep Analytics</h3>
                    <p className="opacity-90">
                      Get insights into your hiring process with detailed analytics and reporting on candidate performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ForEmployers;
