import React from 'react';
import { Brain, Target, Shield, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-3xl mx-auto py-20 px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          About Careerly AI
        </h1>
        <p className="text-xl text-dark-300">
          Empowering professionals with AI-driven career guidance and development support.
        </p>
      </div>

      <div className="space-y-12">
        {/* Mission */}
        <section className="card">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-primary-500/10 rounded-full">
              <Target className="h-8 w-8 text-primary-400" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Our Mission</h2>
              <p className="text-dark-300 leading-relaxed">
                At Careerly AI, we believe everyone deserves access to personalized career guidance. 
                Our mission is to democratize career development by providing intelligent, 
                accessible, and affordable career coaching powered by artificial intelligence.
              </p>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="card">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-primary-500/10 rounded-full">
              <Brain className="h-8 w-8 text-primary-400" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">What We Do</h2>
              <p className="text-dark-300 leading-relaxed mb-4">
                We leverage cutting-edge AI technology to provide comprehensive career support:
              </p>
              <ul className="space-y-2 text-dark-300">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary-400 rounded-full"></span>
                  <span>Personalized career advice and guidance</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary-400 rounded-full"></span>
                  <span>Interview preparation and coaching</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary-400 rounded-full"></span>
                  <span>Resume and cover letter optimization</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary-400 rounded-full"></span>
                  <span>Professional development planning</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary-400 rounded-full"></span>
                  <span>Industry insights and trends analysis</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="card">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-primary-500/10 rounded-full">
              <Shield className="h-8 w-8 text-primary-400" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Our Values</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Innovation</h3>
                  <p className="text-dark-300">
                    We continuously innovate to provide the best AI-powered career guidance.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Accessibility</h3>
                  <p className="text-dark-300">
                    Making professional career guidance available to everyone, everywhere.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Privacy</h3>
                  <p className="text-dark-300">
                    Your data and conversations are protected with enterprise-grade security.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Excellence</h3>
                  <p className="text-dark-300">
                    Committed to delivering high-quality, actionable career advice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="card">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-primary-500/10 rounded-full">
              <Users className="h-8 w-8 text-primary-400" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Our Team</h2>
              <p className="text-dark-300 leading-relaxed">
                Careerly AI is built by a team of career development experts, AI researchers, 
                and technology professionals who are passionate about helping people achieve 
                their career goals. We combine deep industry knowledge with cutting-edge 
                artificial intelligence to deliver personalized, effective career guidance.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold text-white mb-4">Get in Touch</h2>
          <p className="text-dark-300 mb-6">
            Have questions or feedback? We'd love to hear from you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contact@careerlyai.com"
              className="btn-primary inline-flex items-center justify-center"
            >
              Contact Us
            </a>
            <a
              href="/chat"
              className="btn-secondary inline-flex items-center justify-center"
            >
              Try Our AI Assistant
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About; 