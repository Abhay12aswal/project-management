import React, { useState } from 'react';
import { Menu } from "lucide-react";
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm py-4 px-4">
      <div className="container-width flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-blue-700">TeamSync</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-600 hover:text-blue-700 font-medium text-sm">Features</a>
          <a href="#testimonials" className="text-gray-600 hover:text-blue-700 font-medium text-sm">Testimonials</a>
          <a href="#pricing" className="text-gray-600 hover:text-blue-700 font-medium text-sm">Pricing</a>
          <Link to={"/sign-in"}><Button  className="bg-blue-500 hover:bg-blue-800 text-white">Get Started</Button></Link>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md p-4 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <a href="#features" className="text-gray-600 hover:text-jira-blue font-medium text-sm py-2">
              Features
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-jira-blue font-medium text-sm py-2">
              Testimonials
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-jira-blue font-medium text-sm py-2">
              Pricing
            </a>
            <Button className="bg-jira-blue hover:bg-jira-darkblue text-white w-full">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
