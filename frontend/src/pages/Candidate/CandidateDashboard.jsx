import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CandidateDashboard = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Candidate Dashboard</h1>
        
        {/* Dashboard content goes here */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-3">My Profile</h2>
            <p className="text-gray-600 mb-4">Update your skills, experience, and resume.</p>
            <button className="bg-brand-600 hover:bg-brand-500 text-white px-4 py-2 rounded">
              Edit Profile
            </button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-3">Job Applications</h2>
            <p className="text-gray-600 mb-4">Track your submitted job applications.</p>
            <button className="bg-brand-600 hover:bg-brand-500 text-white px-4 py-2 rounded">
              View Applications
            </button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-3">Skills Assessment</h2>
            <p className="text-gray-600 mb-4">Take challenges to showcase your skills to employers.</p>
            <button className="bg-brand-600 hover:bg-brand-500 text-white px-4 py-2 rounded">
              Start Challenge
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CandidateDashboard;