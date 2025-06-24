import React from 'react';
import { Button } from '../components/ui/button';


const CTA: React.FC = () => {
  return (
    <section id="pricing" className="section-padding bg-gradient-to-r from-blue-800 to-blue-400">
      <div className="container-width">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-white/20 text-white rounded-full mb-3">
              GET STARTED
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to transform your team's workflow?</h2>
            <p className="text-white/90 mb-8">
              Join thousands of teams that use TeamSync to streamline their project management process and boost productivity.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <p className="text-white/90">Free trial for 14 days with all features included</p>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <p className="text-white/90">No credit card required to get started</p>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <p className="text-white/90">Full access to all premium features during trial</p>
              </div>
            </div>
            
            <div className="mt-8">
              <Button className="bg-white hover:bg-gray-100 text-jira-blue px-8 py-6 text-lg">
                Start Free Trial
              </Button>
            </div>
          </div>
          
          <div className="relative hidden md:block">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/20">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-white text-lg font-medium">Pricing Plans</h3>
                  <p className="text-white/70 text-sm">Simple, transparent pricing</p>
                </div>
                <span className="text-white/90 text-sm font-medium">Pay Monthly or Yearly</span>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white/10 p-3 rounded">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-white font-medium">Starter</p>
                    <p className="text-white font-bold">$9<span className="text-sm font-normal">/user/month</span></p>
                  </div>
                  <p className="text-white/70 text-sm">Perfect for small teams getting started</p>
                </div>
                
                <div className="bg-white/10 p-3 rounded">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-white font-medium">Professional</p>
                    <p className="text-white font-bold">$19<span className="text-sm font-normal">/user/month</span></p>
                  </div>
                  <p className="text-white/70 text-sm">For growing teams that need more power</p>
                </div>
                
                <div className="bg-white p-3 rounded">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-jira-blue font-medium">Enterprise</p>
                    <p className="text-jira-blue font-bold">$39<span className="text-sm font-normal">/user/month</span></p>
                  </div>
                  <p className="text-gray-600 text-sm">Advanced features for larger organizations</p>
                </div>
                
                <div className="bg-white/10 p-3 rounded">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-white font-medium">Custom</p>
                    <p className="text-white font-bold">Contact us</p>
                  </div>
                  <p className="text-white/70 text-sm">Tailored solutions for specific needs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;