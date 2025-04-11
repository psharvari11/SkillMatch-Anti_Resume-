
// EmployerDashboard.jsx
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const EmployerDashboard = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Employer Dashboard</h1>
        
        {/* Dashboard content goes here */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-3">Post a Job</h2>
            <p className="text-gray-600 mb-4">Create new job listings and find talented candidates.</p>
            <button className="bg-brand-600 hover:bg-brand-500 text-white px-4 py-2 rounded">
              Create Job
            </button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-3">Active Jobs</h2>
            <p className="text-gray-600 mb-4">Manage your current job listings and applications.</p>
            <button className="bg-brand-600 hover:bg-brand-500 text-white px-4 py-2 rounded">
              View Jobs
            </button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-3">Company Profile</h2>
            <p className="text-gray-600 mb-4">Update your company information and branding.</p>
            <button className="bg-brand-600 hover:bg-brand-500 text-white px-4 py-2 rounded">
              Edit Profile
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EmployerDashboard;