
import { useParams } from "react-router-dom";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ChallengeDetail = () => {
  const { id } = useParams();

  const challenges = [
    {
      id: "1",
      title: "Candidate Challenge: Frontend Development (Medium)",
      name: "Pixel Perfect – A TechCorp Design & Code Sprint",
      duration: "2–3 hours",
      platform: "TechCorp",
      category: ["React", "Tailwind CSS", "Responsive Design"],
      brief: `You’ve just been hired by TechCorp to bring their brand to life through clean code and modern design. Your mission? Craft a stunning, fully responsive landing page that doesn’t just work — it *wows*.
  
  This challenge is your canvas. Structure it well, style it smartly, and let your components shine bright like a perfectly reusable diamond.`,
      objective: `Build a landing page using **React** and **Tailwind CSS** that includes the following sections:
  
  - **Hero Section**: The showstopper that makes them stay.
  - **Features Section**: Highlight what’s awesome.
  - **Footer**: Clean, complete, and informative.
  
  Your page must adapt beautifully across devices — mobile, tablet, and desktop.`,
      tools: [
        "React",
        "Tailwind CSS",
        "Vite or Create React App",
        "GitHub for submission"
      ],
      evaluation: [
        "Responsiveness across devices (20%)",
        "Code quality and structure (20%)",
        "Use of reusable components (20%)",
        "Accessibility practices (20%)",
        "Visual design and creativity (20%)"
      ],
      instructions: `1. Fork the provided GitHub repository (or create your own).  
  2. Build a responsive landing page with the three required sections.  
  3. Use only **React** and **Tailwind CSS** — no third-party UI kits.  
  4. Ensure the layout is responsive on all screen sizes.  
  5. Push your code to GitHub and share the repository link.`,
      tips: [
        "Start with a **mobile-first** mindset — tiny screens, big impact.",
        "Use **semantic HTML** for better accessibility.",
        "Break the UI into small, **reusable components** — DRY is fly.",
        "Test responsiveness using **browser dev tools**.",
        "Keep your code **clean and well-commented**. Future-you will thank you."
      ],
    },
    {
      id: "2",
      title: "Candidate Challenge: Marketing Analytics (Easy)",
      name: "Data to Dollars – A GrowthLabs Performance Sprint",
      duration: "1–2 hours",
      platform: "GrowthLabs",
      category: ["Marketing", "Data Analysis", "Excel"],
      brief: `You’ve just joined GrowthLabs — a fast-paced marketing agency known for its data-driven wizardry. Your task? Turn raw marketing metrics into strategic gold.
    
    The company just wrapped a major campaign. Now, they need *your* eyes to spot the wins, the flops, and the untapped potential. Use data as your compass, visuals as your voice, and insights as your strategy.`,
      objective: `Analyze a marketing dataset and create a short report answering:
    
    - Which metrics indicate success (or failure)?
    - Are there any patterns, anomalies, or room for optimization?
    - What actionable recommendations can be made to boost future campaign performance?
    
    Present your findings with clear structure and visual support.`,
      tools: [
        "Excel or Google Sheets",
        "Provided marketing dataset",
        "Charts/Graphs",
        "Optional: Python or R for deeper insights"
      ],
      evaluation: [
        "Clarity and insightfulness of analysis (25%)",
        "Use of relevant charts/graphs (25%)",
        "Actionable recommendations (25%)",
        "Presentation/structure of findings (25%)"
      ],
      instructions: `1. Download the provided dataset.  
    2. Analyze key performance indicators (CTR, conversion rate, ROI, etc.).  
    3. Identify trends, anomalies, or optimization opportunities.  
    4. Create a summary report or slide deck with insights.  
    5. Submit your analysis via a **shared link** (Google Drive, Dropbox, etc.).`,
      tips: [
        "Clarity > complexity. Speak data simply.",
        "Visuals are your superpower — charts over clutter.",
        "Tie numbers to narratives — think like a marketer.",
        "Be concise but don’t skip the juicy bits.",
        "Label all visuals clearly — don’t leave axes guessing."
      ],
    },
    {
      id: "3",
      title: "Candidate Challenge: UX Research (Medium)",
      name: "Design Detective – Usability Test with a Purpose",
      duration: "2–3 hours",
      platform: "DesignHub",
      category: ["Design", "UX Research", "User Testing"],
      brief: `Welcome to DesignHub, where user-first thinking rules the kingdom. 🧠✨  
    Your mission is to put on your researcher cap and *dig deep* into how users interact with a mobile feature. Whether it's a real app or a prototype you whip up, your task is to spot the friction, observe behavior, and translate confusion into clarity.
    
    This is not about testing *users* — it’s about testing *design*.`,
      objective: `Design and conduct a short usability test for a mobile feature.  
    Observe how users interact, identify any usability issues, and present clear, actionable recommendations for improvement.`,
      tools: [
        "Figma or any prototyping tool",
        "Notion/Google Docs for notes",
        "Presentation software (Google Slides, etc.)",
        "Optional: screen/video recording tool"
      ],
      evaluation: [
        "Clarity of research objectives (20%)",
        "Quality of usability test design (20%)",
        "Insightfulness of findings (20%)",
        "Presentation and structure of the report (20%)",
        "Actionable recommendations based on insights (20%)"
      ],
      instructions: `1. Choose a mobile feature (real or fictional).  
    2. Recruit 2–3 participants for 15–20 minute sessions.  
    3. Observe and take notes on user interactions and pain points.  
    4. Summarize usability patterns, challenges, and behavior insights.  
    5. Present your findings in a report or slide deck (link it via Google Drive, Notion, etc.).`,
      tips: [
        "Keep it short and focused — don’t overwhelm your testers.",
        "Use open-ended questions to spark honest reactions.",
        "Look for recurring patterns — gold hides in repetition.",
        "Tie insights to practical design tweaks.",
        "Include quotes, screenshots, or flow visuals to boost clarity."
      ],
    },   
    {
      id: "4",
      title: "Candidate Challenge: Backend API (Hard)",
      name: "Build-a-Backbone – REST API with Auth",
      duration: "3–4 hours",
      platform: "ServerTech",
      category: ["Development", "Backend", "Node.js"],
      brief: `Welcome to ServerTech, where server logic is the main character.  
    In this challenge, you'll architect a RESTful API from scratch, complete with user authentication and full CRUD functionality. Think of it as giving structure and security to your data's wild journey.
    
    This is your chance to show off your backend kung fu. 🥷`,
      objective: `Build a RESTful API using Node.js and Express that supports authentication (signup/login) and CRUD operations for a chosen resource.`,
      tools: [
        "Node.js",
        "Express.js",
        "Postman",
        "MongoDB (or any DB of your choice)",
        "Optional: JWT for securing routes"
      ],
      evaluation: [
        "Correct implementation of RESTful routes (20%)",
        "Secure and functional authentication (20%)",
        "Proper error handling and validation (20%)",
        "Code readability and structure (20%)",
        "API documentation (Postman collection or README) (20%)"
      ],
      instructions: `1. Set up a Node.js server using Express.  
    2. Create authentication endpoints (signup & login).  
    3. Build CRUD routes for one resource (e.g., tasks, notes, posts).  
    4. Integrate with a database to persist data.  
    5. Secure the protected routes using JWT or session-based auth.  
    6. Add API documentation (README or Postman collection).  
    7. Submit your GitHub repo link or live backend URL.`,
      tips: [
        "Organize your code with routes, controllers, and services—modularity is your BFF.",
        "Use dotenv for sensitive data like DB credentials and secret keys.",
        "Validate request payloads to avoid chaos.",
        "Test all routes thoroughly—Postman is your playground.",
        "Comment your logic where needed—it helps humans (and future you)."
      ],
    },    
    {
      id: "5",
      title: "Candidate Challenge: Financial Analysis (Hard)",
      name: "Valuation Vibes – Decode & Recommend",
      duration: "2–3 hours",
      platform: "FinGroup",
      category: ["Finance", "Valuation", "Analysis"],
      brief: `FinGroup invites you to dive deep into a company's financials and emerge with golden nuggets of investor wisdom.  
    Build a valuation model, read between the spreadsheets, and recommend with confidence. It’s Shark Tank meets spreadsheets. 🦈📊`,
      objective: `Analyze a company's financials and build a valuation model with actionable recommendations for potential investors.`,
      tools: [
        "Excel or Google Sheets",
        "Company financial statements (public or fictional)",
        "Optional: DCF or comparables templates",
        "Report or presentation format"
      ],
      evaluation: [
        "Accuracy of financial analysis (20%)",
        "Soundness of valuation approach (20%)",
        "Clarity in investor recommendations (20%)",
        "Presentation quality (20%)",
        "Use of relevant financial metrics (20%)"
      ],
      instructions: `1. Select a public or fictional company and gather key financial data.  
    2. Analyze the income statement, balance sheet, and cash flow trends.  
    3. Build a basic valuation model (e.g., DCF, comparables).  
    4. Summarize findings in a professional report or slide deck.  
    5. Submit both your spreadsheet and final presentation via shareable links.`,
      tips: [
        "Don’t overcomplicate—clarity is king in finance.",
        "Use visuals to highlight trends—charts speak louder than numbers.",
        "Be explicit about assumptions in your valuation.",
        "Mention both risks and opportunities—balance is key.",
        "Structure your presentation like a story: setup → insight → action."
      ],
    },    
    {
          id: "6",
          title: "Candidate Challenge: Content Writing (Easy)",
          name: "Write to Rise – A ContentHub Creative Sprint",
          duration: "1–2 hours",
          platform: "ContentHub",
          category: ["Content Writing", "SEO", "Brand Voice"],
          brief: `You’ve just been hired by ContentHub, a fast-growing platform that connects readers with insightful, inspiring, and impactful content. As part of your first assignment, you need to craft a blog post that checks off three golden boxes:
    
    - It must be **engaging**: Keep readers hooked with a compelling narrative.
    - **SEO-optimized**: Use keywords naturally to boost discoverability.
    - **Brand voice-aligned**: Maintain a tone that's professional yet conversational — think clarity with a dash of charm.`,
          objective: `Write a 600–800 word blog post on the following topic:
    
    **"How to Overcome Creative Block and Reignite Your Passion for Writing"**`,
          tools: [
            "Access to ContentHub’s brand voice guide",
            "Suggested keyword list: 'creative block', 'writing tips', 'how to write again', 'overcome writer's block'",
            "Optional SEO tip sheet",
          ],
          evaluation: [
            "Creativity & Flow (25%)",
            "SEO Integration (25%)",
            "Tone & Voice Alignment (25%)",
            "Grammar & Readability (25%)",
          ],
          instructions: `Submit your final blog post in a **.docx** or **.pdf** format.  
    Add a **meta title** and **meta description** at the top of your file.  
    ⏳ Deadline: 2 hours from the time you click Start Challenge.`,
          tips: [
            "Write for people, optimize for algorithms.",
            "If you wouldn't read past the first paragraph, rewrite it.",
            "Stay authentic — brand voice doesn’t mean robotic. Be human.",
          ],
        },
        {
          id: "7",
          title: "Candidate Challenge: Data Science (Medium)",
          name: "Insight Unlocked – A DataCorp Analysis Sprint",
          duration: "2–3 hours",
          platform: "DataCorp",
          category: ["Python", "Data Analysis", "Data Visualization"],
          brief: `You’ve joined DataCorp as a data analyst intern. Your first task is to dive into a raw dataset and extract insights that help the business make better decisions. You’ll be cleaning, analyzing, and visualizing the data to tell a compelling story.`,
          objective: `Analyze the provided dataset to answer specific business questions such as:
    
    - What are the sales trends over the past year?
    - Which customer segment is the most profitable?
    - What recommendations can you provide based on the data?
    
    You’ll create a Jupyter Notebook with visualizations and a summary of your findings.`,
          tools: [
            "Provided .csv dataset",
            "Jupyter Notebook",
            "Python libraries (Pandas, Matplotlib, Seaborn, NumPy)",
          ],
          evaluation: [
            "Data Cleaning & Preprocessing (25%)",
            "Insight Quality (25%)",
            "Visualization & Presentation (25%)",
            "Business Relevance (25%)",
          ],
          instructions: `Submit your Jupyter Notebook (.ipynb) or export it as a .pdf with code and outputs visible.  
    ⏳ Deadline: 3 hours from the time you click Start Challenge.`,
          tips: [
            "Clean data is happy data.",
            "Label your charts, make them beautiful.",
            "Always relate insights back to the business context.",
          ],
        },
        {
          id: "8",
          title: "Candidate Challenge: Project Management (Medium)",
          name: "Plan Like a Pro – ProjectPro Simulation Task",
          duration: "2 hours",
          platform: "ProjectPro",
          category: ["Project Planning", "Risk Management", "Resource Allocation"],
          brief: `You’ve been brought in to manage a mid-sized product launch. You need to develop a comprehensive project plan that outlines major tasks, milestones, risks, and team assignments.`,
          objective: `Create a project plan that includes:
    
    - Project timeline (Gantt chart or table format)
    - Key milestones and deliverables
    - Resource allocation per task
    - Risk assessment and mitigation plan`,
          tools: [
            "Use tools like Trello, Notion, or Excel (up to you!)",
            "You may use templates but ensure they’re customized",
            "Reference a realistic scenario — no fluff",
          ],
          evaluation: [
            "Timeline Accuracy (25%)",
            "Resource & Risk Planning (25%)",
            "Clarity of Documentation (25%)",
            "Project Scope Understanding (25%)",
          ],
          instructions: `Submit your project plan as a **PDF** or shared link (Google Docs/Notion etc.).  
    ⏳ Deadline: 2 hours from when you begin the challenge.`,
          tips: [
            "Plan realistically — don’t overpromise, don’t underdeliver.",
            "Think like a stakeholder — what info do they need to see?",
            "Keep things neat and structured. First impressions matter.",
          ],
        },
        {
          id: "9",
          title: "Candidate Challenge: Mobile App Design (Medium)",
          name: "DesignFlow – A Sprint for AppWorks",
          duration: "3 hours",
          platform: "AppWorks",
          category: ["UI Design", "Mobile Design", "Figma"],
          brief: `AppWorks is building a mobile app for social wellness. Your job is to design a few key screens that are user-friendly, brand-aligned, and visually appealing.`,
          objective: `Design the following:
    
    - Welcome / Onboarding Screen
    - Home Feed or Dashboard
    - One interactive element (e.g., slider, tracker, etc.)
    
    Make sure your designs follow brand guidelines and are mobile-first.`,
          tools: [
            "Use Figma or Adobe XD",
            "Incorporate given brand colors and typography",
            "Ensure accessibility (contrast, font size, etc.)",
          ],
          evaluation: [
            "Visual Design (30%)",
            "User Flow Logic (30%)",
            "Consistency with Brand Guidelines (20%)",
            "Creativity & Originality (20%)",
          ],
          instructions: `Submit your design as a **Figma share link** or export as **PDF with annotations**.  
    ⏳ Deadline: 3 hours from when you begin the challenge.`,
          tips: [
            "Less is more. Clean beats cluttered.",
            "Test your layout at different screen sizes.",
            "Don’t forget: design for humans, not Dribbble likes.",
          ],
}];
  const challenge = challenges.find((c) => c.id === id);
  const [submissionLink, setSubmissionLink] = useState("");

  if (!challenge) return <div className="p-4 text-red-500">Challenge not found 😓</div>;

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <Navbar />

      <main className="flex-grow px-6 py-12 w-full max-w-5xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold">🎯 {challenge.title}</h2>
        <p className="text-xl font-semibold">Challenge Name: {challenge.name}</p>

        <div className="space-y-1">
          <p><strong>⏳ Duration:</strong> {challenge.duration}</p>
          <p><strong>🏢 Platform:</strong> {challenge.platform}</p>
          <p><strong>📁 Category:</strong> {challenge.category.join(" | ")}</p>
        </div>

        <section>
          <h3 className="text-lg font-semibold mb-2">📝 Challenge Brief:</h3>
          <p className="whitespace-pre-line">{challenge.brief}</p>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-2">🧪 The Task:</h3>
          <p className="whitespace-pre-line">{challenge.objective}</p>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-2">🛠 Tools Provided:</h3>
          <ul className="list-disc pl-6">
            {challenge.tools.map((tool, i) => (
              <li key={i}>{tool}</li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-2">📊 Evaluation Criteria:</h3>
          <ul className="list-disc pl-6">
            {challenge.evaluation.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-2">📌 Instructions:</h3>
          <p className="whitespace-pre-line">{challenge.instructions}</p>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-2">💡 Pro Tips:</h3>
          <ul className="list-disc pl-6 text-sm text-gray-700">
            {challenge.tips.map((tip, i) => (
              <li key={i}>{tip}</li>
            ))}
          </ul>
        </section>

        <section className="mt-8">
          <label htmlFor="submission" className="block font-medium mb-2">
            🔗 Submission Link:
          </label>
          <input
            id="submission"
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring"
            placeholder="Paste your project link here..."
            value={submissionLink}
            onChange={(e) => setSubmissionLink(e.target.value)}
          />
          <Button className="mt-4">Submit Challenge</Button>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ChallengeDetail;
