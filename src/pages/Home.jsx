import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Zap, Target } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
        <div className="absolute inset-0 opacity-50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Your AI Career
                <span className="text-primary-400"> Companion</span>
              </h1>
              <p className="text-xl md:text-2xl text-dark-300 mb-8 max-w-3xl mx-auto">
                Get personalized career guidance, interview preparation, and professional development advice powered by artificial intelligence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/chat"
                  className="btn-primary inline-flex items-center justify-center group"
                >
                  Start Chatting
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/how-it-works"
                  className="btn-secondary inline-flex items-center justify-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Careerly AI?
            </h2>
            <p className="text-xl text-dark-300 max-w-2xl mx-auto">
              Experience the future of career guidance with our intelligent AI assistant.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center animate-slide-up">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary-500/10 rounded-full">
                  <Brain className="h-8 w-8 text-primary-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">AI-Powered Insights</h3>
              <p className="text-dark-300">
                Get personalized career advice based on your skills, experience, and goals using advanced AI algorithms.
              </p>
            </div>

            <div className="card text-center animate-slide-up">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary-500/10 rounded-full">
                  <Zap className="h-8 w-8 text-primary-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Instant Responses</h3>
              <p className="text-dark-300">
                Receive immediate answers to your career questions, interview tips, and professional development guidance.
              </p>
            </div>

            <div className="card text-center animate-slide-up">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary-500/10 rounded-full">
                  <Target className="h-8 w-8 text-primary-400" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Goal-Oriented</h3>
              <p className="text-dark-300">
                Set and track your career goals with actionable steps and progress monitoring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join thousands of professionals who are already using Careerly AI to advance their careers.
          </p>
          <Link
            to="/chat"
            className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg inline-flex items-center transition-colors duration-200"
          >
            Get Started Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home; 