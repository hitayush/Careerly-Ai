import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Brain, TrendingUp, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: MessageCircle,
      title: "Start a Conversation",
      description: "Begin by asking our AI assistant any career-related question. Whether it's about job searching, interview preparation, or professional development, we're here to help.",
      color: "primary"
    },
    {
      icon: Brain,
      title: "Get AI-Powered Insights",
      description: "Our advanced AI analyzes your situation and provides personalized advice, actionable steps, and industry-specific guidance tailored to your career goals.",
      color: "primary"
    },
    {
      icon: TrendingUp,
      title: "Take Action & Grow",
      description: "Implement the recommendations and track your progress. Our AI continues to learn from your journey to provide even better guidance over time.",
      color: "primary"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-20 px-4">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          How Careerly AI Works
        </h1>
        <p className="text-xl text-dark-300 max-w-2xl mx-auto">
          Get personalized career guidance in three simple steps. Our AI assistant is here to help you succeed.
        </p>
      </div>

      {/* Steps */}
      <div className="space-y-12">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            {/* Step Number */}
            <div className="absolute -left-4 top-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
              {index + 1}
            </div>
            
            {/* Step Content */}
            <div className="card ml-8">
              <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
                <div className="flex-shrink-0">
                  <div className="p-4 bg-primary-500/10 rounded-full">
                    <step.icon className="h-8 w-8 text-primary-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-dark-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Arrow between steps */}
            {index < steps.length - 1 && (
              <div className="hidden md:flex justify-center mt-6">
                <ArrowRight className="h-6 w-6 text-primary-400 rotate-90" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Features Grid */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          What You Can Ask About
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card text-center">
            <h3 className="text-lg font-semibold text-white mb-3">Career Transitions</h3>
            <p className="text-dark-300">
              Get guidance on switching industries, roles, or career paths.
            </p>
          </div>
          <div className="card text-center">
            <h3 className="text-lg font-semibold text-white mb-3">Interview Prep</h3>
            <p className="text-dark-300">
              Practice common questions and learn effective interview strategies.
            </p>
          </div>
          <div className="card text-center">
            <h3 className="text-lg font-semibold text-white mb-3">Resume Help</h3>
            <p className="text-dark-300">
              Optimize your resume and cover letter for better results.
            </p>
          </div>
          <div className="card text-center">
            <h3 className="text-lg font-semibold text-white mb-3">Salary Negotiation</h3>
            <p className="text-dark-300">
              Learn strategies for negotiating better compensation packages.
            </p>
          </div>
          <div className="card text-center">
            <h3 className="text-lg font-semibold text-white mb-3">Skill Development</h3>
            <p className="text-dark-300">
              Identify and develop skills needed for your target roles.
            </p>
          </div>
          <div className="card text-center">
            <h3 className="text-lg font-semibold text-white mb-3">Networking</h3>
            <p className="text-dark-300">
              Build professional relationships and expand your network.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-20 text-center">
        <div className="card bg-gradient-to-r from-primary-600 to-primary-700">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join thousands of professionals who are already using Careerly AI to advance their careers.
          </p>
          <Link
            to="/chat"
            className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg inline-flex items-center transition-colors duration-200"
          >
            Start Chatting Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks; 