import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import validate from "validator";
import { toast } from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AppContext } from "../context/AppContext";
import { EmployerContext } from "../context/EmployerContext";

const Signup = () => {
  const { setToken, token } = useContext(AppContext);
  const { backendUrl } = useContext(EmployerContext);
  const navigate = useNavigate();
  const [accountType, setAccountType] = useState("candidate");
  const [isLoading, setIsLoading] = useState(false);

  const [candidateData, setCandidateData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const [employerData, setEmployerData] = useState({
    companyName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const handleCandidateChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCandidateData({
      ...candidateData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleEmployerChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEmployerData({
      ...employerData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const isCandidate = accountType === "candidate";
      const formData = isCandidate ? candidateData : employerData;

      // Basic validation
      if (isCandidate) {
        if (!formData.firstName.trim() || !formData.lastName.trim()) {
          toast.error("First and last names are required");
          setIsLoading(false);
          return;
        }
      } else {
        if (!formData.companyName.trim()) {
          toast.error("Company name is required");
          setIsLoading(false);
          return;
        }
      }

      if (!formData.email.trim()) {
        toast.error("Email is required");
        setIsLoading(false);
        return;
      }

      if (!validate.isEmail(formData.email.trim())) {
        toast.error("Please enter a valid email address");
        setIsLoading(false);
        return;
      }

      if (!formData.password) {
        toast.error("Password is required");
        setIsLoading(false);
        return;
      }

      if (formData.password.length < 8) {
        toast.error("Password must be at least 8 characters");
        setIsLoading(false);
        return;
      }

      if (formData.password !== formData.confirmPassword) {
        toast.error("Passwords do not match");
        setIsLoading(false);
        return;
      }

      // Prepare request data matching backend expectations
      let name;
      if (isCandidate) {
        name = `${formData.firstName.trim()} ${formData.lastName.trim()}`;
      } else {
        name = formData.companyName.trim();
      }

      const requestData = {
        name,
        email: formData.email.trim(),
        password: formData.password,
      };

      // Debug - log the request data and URL
      console.log("Request URL:", `${backendUrl}/api/user/register`);
      console.log("Request Data:", requestData);

      // Set headers explicitly
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await axios.post(
        `${backendUrl}/api/user/register`,
        requestData,
        config
      );

      console.log("Response:", response.data);

      if (response.data.success) {
        localStorage.setItem("token", response.data.token);
        setToken(response.data.token);
        toast.success(`Registration successful!`);
        navigate("/");
      } else {
        // Handle case where success is false but no error was thrown
        toast.error(response.data.message || "Registration failed");
      }
    } catch (error) {
      console.error("Registration error:", error);

      // Enhanced error logging
      if (error.response) {
        console.log("Error Response Data:", error.response.data);
        console.log("Error Response Status:", error.response.status);
        console.log("Error Response Headers:", error.response.headers);

        // Handle error responses from backend
        if (error.response.data) {
          const errorData = error.response.data;
          toast.error(errorData.message || "Registration failed");
        }
      } else if (error.request) {
        console.log("Error Request:", error.request);
        toast.error(
          "No response received from server. Please try again later."
        );
      } else {
        console.log("Error Message:", error.message);
        toast.error("An error occurred while registering. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col justify-center space-y-6 max-w-md mx-auto">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold">Create an account</h1>
              <p className="text-gray-500">
                Sign up to get started with SkillMatch
              </p>
            </div>

            <Tabs
              defaultValue="candidate"
              onValueChange={(value) => setAccountType(value)}
            >
              <TabsList className="grid grid-cols-2 mb-4">
                <TabsTrigger value="candidate">I'm a Candidate</TabsTrigger>
                <TabsTrigger value="employer">I'm an Employer</TabsTrigger>
              </TabsList>

              <TabsContent value="candidate">
                <Card>
                  <CardHeader>
                    <CardTitle>Candidate Registration</CardTitle>
                    <CardDescription>
                      Create an account to showcase your skills and find
                      opportunities
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            placeholder="John"
                            required
                            value={candidateData.firstName}
                            onChange={handleCandidateChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            placeholder="Doe"
                            required
                            value={candidateData.lastName}
                            onChange={handleCandidateChange}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="candidateEmail">Email</Label>
                        <Input
                          id="candidateEmail"
                          name="email"
                          type="email"
                          placeholder="your@email.com"
                          required
                          value={candidateData.email}
                          onChange={handleCandidateChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="candidatePassword">Password</Label>
                        <Input
                          id="candidatePassword"
                          name="password"
                          type="password"
                          required
                          value={candidateData.password}
                          onChange={handleCandidateChange}
                        />
                        <p className="text-xs text-gray-500">
                          Password must be at least 8 characters long
                        </p>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="candidateConfirmPassword">
                          Confirm Password
                        </Label>
                        <Input
                          id="candidateConfirmPassword"
                          name="confirmPassword"
                          type="password"
                          required
                          value={candidateData.confirmPassword}
                          onChange={handleCandidateChange}
                        />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="candidateTerms"
                          name="agreeToTerms"
                          checked={candidateData.agreeToTerms}
                          onCheckedChange={(checked) =>
                            setCandidateData({
                              ...candidateData,
                              agreeToTerms: !!checked,
                            })
                          }
                        />
                        <Label
                          htmlFor="candidateTerms"
                          className="text-sm font-normal"
                        >
                          I agree to the{" "}
                          <Link
                            to="/terms"
                            className="text-brand-600 hover:text-brand-500"
                          >
                            Terms of Service
                          </Link>{" "}
                          and{" "}
                          <Link
                            to="/privacy"
                            className="text-brand-600 hover:text-brand-500"
                          >
                            Privacy Policy
                          </Link>
                        </Label>
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-brand-600 hover:bg-brand-500"
                        disabled={!candidateData.agreeToTerms || isLoading}
                      >
                        {isLoading
                          ? "Creating Account..."
                          : "Create Candidate Account"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="employer">
                <Card>
                  <CardHeader>
                    <CardTitle>Employer Registration</CardTitle>
                    <CardDescription>
                      Create an account to post jobs and find skilled candidates
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        setIsLoading(true);

                        try {
                          const formData = employerData;

                          // Basic validation
                          if (!formData.companyName.trim()) {
                            toast.error("Company name is required");
                            setIsLoading(false);
                            return;
                          }
                          if (!formData.industry?.trim()) {
                            toast.error("Industry name is required");
                            setIsLoading(false);
                            return;
                          }

                          if (!formData.email.trim()) {
                            toast.error("Email is required");
                            setIsLoading(false);
                            return;
                          }

                          if (!validate.isEmail(formData.email.trim())) {
                            toast.error("Please enter a valid email address");
                            setIsLoading(false);
                            return;
                          }

                          if (!formData.password) {
                            toast.error("Password is required");
                            setIsLoading(false);
                            return;
                          }

                          if (formData.password.length < 8) {
                            toast.error(
                              "Password must be at least 8 characters"
                            );
                            setIsLoading(false);
                            return;
                          }

                          if (formData.password !== formData.confirmPassword) {
                            toast.error("Passwords do not match");
                            setIsLoading(false);
                            return;
                          }

                          // Prepare request data matching backend expectations
                          const requestData = {
                            companyName: formData.companyName.trim(),
                            industry: formData.industry.trim(),
                            email: formData.email.trim(),
                            password: formData.password,
                          };

                          // Use specific employer registration endpoint
                          const endpoint = `${backendUrl}/api/employer/register`;

                          // Debug - log the request data and URL
                          console.log("Request URL:", endpoint);
                          console.log("Request Data:", requestData);

                          // Set headers explicitly
                          const config = {
                            headers: {
                              "Content-Type": "application/json",
                            },
                          };

                          // Make the API call
                          axios
                            .post(endpoint, requestData, config)
                            .then((response) => {
                              console.log("Response:", response.data);

                              if (response.data.success) {
                                // Store the token in localStorage
                                localStorage.setItem(
                                  "token",
                                  response.data.token
                                );
                                setToken(response.data.token);

                                toast.success(
                                  `Employer registration successful!`
                                );
                                navigate("/");
                              } else {
                                // Handle case where success is false but no error was thrown
                                toast.error(
                                  response.data.message || "Registration failed"
                                );
                              }
                              setIsLoading(false);
                            })
                            .catch((error) => {
                              console.error("Registration error:", error);

                              // Enhanced error logging
                              if (error.response) {
                                console.log(
                                  "Error Response Data:",
                                  error.response.data
                                );
                                console.log(
                                  "Error Response Status:",
                                  error.response.status
                                );

                                // Handle error responses from backend
                                if (error.response.data) {
                                  const errorData = error.response.data;
                                  toast.error(
                                    errorData.message || "Registration failed"
                                  );
                                }
                              } else if (error.request) {
                                console.log("Error Request:", error.request);
                                toast.error(
                                  "No response received from server. Please try again later."
                                );
                              } else {
                                console.log("Error Message:", error.message);
                                toast.error(
                                  "An error occurred while registering. Please try again."
                                );
                              }
                              setIsLoading(false);
                            });
                        } catch (error) {
                          console.error("Form submission error:", error);
                          toast.error(
                            "An unexpected error occurred. Please try again."
                          );
                          setIsLoading(false);
                        }
                      }}
                      className="space-y-4"
                    >
                      <div className="space-y-2">
                        <Label htmlFor="companyName">Company Name</Label>
                        <Input
                          id="companyName"
                          name="companyName"
                          placeholder="Acme Inc."
                          required
                          value={employerData.companyName}
                          onChange={handleEmployerChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="industry">Industry</Label>
                        <Input
                          id="industry"
                          name="industry"
                          placeholder="IT, Sales, Healthcare..."
                          required
                          value={employerData.industry || ""}
                          onChange={handleEmployerChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="employerEmail">Email</Label>
                        <Input
                          id="employerEmail"
                          name="email"
                          type="email"
                          placeholder="company@example.com"
                          required
                          value={employerData.email}
                          onChange={handleEmployerChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="employerPassword">Password</Label>
                        <Input
                          id="employerPassword"
                          name="password"
                          type="password"
                          required
                          value={employerData.password}
                          onChange={handleEmployerChange}
                        />
                        <p className="text-xs text-gray-500">
                          Password must be at least 8 characters long
                        </p>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="employerConfirmPassword">
                          Confirm Password
                        </Label>
                        <Input
                          id="employerConfirmPassword"
                          name="confirmPassword"
                          type="password"
                          required
                          value={employerData.confirmPassword}
                          onChange={handleEmployerChange}
                        />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="employerTerms"
                          name="agreeToTerms"
                          checked={employerData.agreeToTerms}
                          onCheckedChange={(checked) =>
                            setEmployerData({
                              ...employerData,
                              agreeToTerms: !!checked,
                            })
                          }
                        />
                        <Label
                          htmlFor="employerTerms"
                          className="text-sm font-normal"
                        >
                          I agree to the{" "}
                          <Link
                            to="/terms"
                            className="text-brand-600 hover:text-brand-500"
                          >
                            Terms of Service
                          </Link>{" "}
                          and{" "}
                          <Link
                            to="/privacy"
                            className="text-brand-600 hover:text-brand-500"
                          >
                            Privacy Policy
                          </Link>
                        </Label>
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-brand-600 hover:bg-brand-500"
                        disabled={!employerData.agreeToTerms || isLoading}
                      >
                        {isLoading
                          ? "Creating Account..."
                          : "Create Employer Account"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
            <div className="text-center">
              <p className="text-sm text-gray-500">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-brand-600 hover:text-brand-500 font-medium"
                >
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Signup;
