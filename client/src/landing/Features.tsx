import React from 'react';
import {
  Calendar,
  Search,
  User,
  Users,
  Layout,
  CheckCircle,
  Clock,
  List,
  Shield,
  Filter,
  MessageSquare,
  Database,
  Settings
} from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-jira-blue mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <User className="h-6 w-6" />,
      title: "Google Sign-In",
      description: "Seamless authentication with Google OAuth integration"
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Multi-Tenancy",
      description: "Create and manage separate workspaces for different teams"
    },
    {
      icon: <Layout className="h-6 w-6" />,
      title: "Project Management",
      description: "Create, organize and track projects and epics efficiently"
    },
    {
      icon: <List className="h-6 w-6" />,
      title: "Task CRUD",
      description: "Comprehensive task management system with drag-and-drop"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Role-Based Permissions",
      description: "Control who can view, edit or manage your project"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Invite System",
      description: "Easily add team members to your workspace and projects"
    },
    {
      icon: <Filter className="h-6 w-6" />,
      title: "Filters & Search",
      description: "Find exactly what you need with powerful search functionality"
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Analytics",
      description: "Track progress and performance with comprehensive analytics"
    },
  ];

  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-width">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-100 text-jira-blue rounded-full mb-3">
            FEATURES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need In One Place</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            TeamSync provides powerful features that make team collaboration seamless and efficient
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
