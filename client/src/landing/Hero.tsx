import React from 'react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';


const Hero: React.FC = () => {
  return (
    <section className="section-padding pt-32 pb-16 bg-gradient-to-b from-white to-gray-100">
      <div className="container-width grid md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col space-y-6">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Manage projects with <span className="gradient-text">TeamSync</span>
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              One Platform. Multiple Tenants. Limitless Projects
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to={"/sign-in"}>
              <Button className="bg-blue-500 hover:bg-blue-800 text-white px-8 py-6 text-lg">
                Get Started
              </Button>
            </Link>

            <Button variant="outline" className="border-jira-blue text-jira-blue hover:bg-blue-50 px-8 py-6 text-lg">
              View Demo
            </Button>
          </div>

          <div className="flex items-center pt-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs font-bold text-white">
                  {i}
                </div>
              ))}
            </div>
            <p className="ml-4 text-sm text-gray-500">
              <span className="font-bold text-blue-700">1,000+</span> teams already collaborating
            </p>
          </div>
        </div>

        <div className="relative hidden md:block">
          <div className="absolute -top-8 -right-8 w-64 h-64 bg-jira-lightblue/10 rounded-full"></div>
          <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-blue-100 rounded-full"></div>
          <div className="relative bg-white p-4 rounded-lg shadow-xl border border-gray-200">
            <img
              src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&h=400"
              alt="TeamSync Dashboard"
              className="rounded-md w-full"
            />
            <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-md border border-gray-200">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-xs font-medium text-gray-800">Project Status: On Track</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
