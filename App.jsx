import React, { useState, useEffect } from 'react';
import { Brain, Zap, Target, ArrowRight, MessageCircle, Github, Linkedin, Instagram, Twitter, Mail, Phone, User, BookOpen, Heart } from 'lucide-react';
import emailjs from '@emailjs/browser';
import ChatInterface from './components/ChatInterface';

function App() {
  const [showChat, setShowChat] = useState(false);
  const [guidanceForm, setGuidanceForm] = useState({
    name: '',
    age: '',
    email: '',
    phone: '',
    education: '',
    interests: '',
    currentSituation: '',
    goals: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const openChat = () => setShowChat(true);
  const closeChat = () => setShowChat(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setGuidanceForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      // Validate required fields
      if (!guidanceForm.name || !guidanceForm.email || !guidanceForm.age || !guidanceForm.education || !guidanceForm.interests || !guidanceForm.currentSituation || !guidanceForm.goals) {
        throw new Error('Please fill in all required fields');
      }

      const templateParams = {
        from_name: guidanceForm.name,
        from_email: guidanceForm.email,
        message: `
New Career Guidance Request

Name: ${guidanceForm.name}
Age: ${guidanceForm.age}
Email: ${guidanceForm.email}
Phone: ${guidanceForm.phone || 'Not provided'}
Education: ${guidanceForm.education}

Interests: ${guidanceForm.interests}
Current Situation: ${guidanceForm.currentSituation}
Career Goals: ${guidanceForm.goals}

---
This request was submitted through your Careerly AI website.
        `,
        to_email: 'hitayushdange@gmail.com',
        reply_to: guidanceForm.email,
        cc: 'hitayushdange@gmail.com', // You can add another email here
        bcc: 'hitayushdange@gmail.com' // You can add backup email here
      };

      console.log('Sending email with params:', templateParams);

      const response = await emailjs.send(
        'service_fc7rbmr', // Your EmailJS service ID
        'template_td5y7kd', // Your EmailJS template ID
        templateParams
      );

      console.log('Email sent successfully:', response);

      setSubmitSuccess(true);
      setGuidanceForm({
        name: '',
        age: '',
        email: '',
        phone: '',
        education: '',
        interests: '',
        currentSituation: '',
        goals: ''
      });

      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitError(`Failed to send request: ${error.message}. Please try again or contact us directly at hitayushdange@gmail.com`);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Initialize EmailJS
  useEffect(() => {
    try {
      emailjs.init("fLJW-PQkO_ON7DjuO"); // Your EmailJS public key
      console.log('EmailJS initialized successfully');
    } catch (error) {
      console.error('EmailJS initialization failed:', error);
    }
  }, []);

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <Brain size={24} />
            <span>Careerly AI</span>
          </div>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="#guidance">Guidance</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1>Your AI-Powered Career Companion</h1>
            <p>Get personalized career guidance, roadmap planning, and expert advice from our intelligent AI assistant. Start your journey to success today!</p>
            <button className="cta-button" onClick={openChat}>
              Start Chatting with Careerly
              <ArrowRight size={20} />
            </button>
          </div>
          <div className="hero-visual">
            <div className="floating-card">
              <Brain size={48} />
              <h3>AI-Powered</h3>
              <p>Intelligent career analysis</p>
            </div>
            <div className="floating-card">
              <Target size={48} />
              <h3>Personalized</h3>
              <p>Tailored to your goals</p>
            </div>
            <div className="floating-card">
              <Zap size={48} />
              <h3>Fast & Accurate</h3>
              <p>Instant insights</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <h2>Why Choose Careerly AI?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Brain size={32} />
              </div>
              <h3>AI-Powered Analysis</h3>
              <p>Our advanced AI analyzes your interests, skills, and goals to provide personalized career recommendations.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Target size={32} />
              </div>
              <h3>Personalized Roadmaps</h3>
              <p>Get detailed step-by-step career roadmaps tailored to your specific situation and timeline.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Zap size={32} />
              </div>
              <h3>Instant Insights</h3>
              <p>Receive immediate feedback and guidance through our intelligent chat interface.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <User size={32} />
              </div>
              <h3>Expert Consultation</h3>
              <p>Connect with career experts for personalized one-on-one guidance sessions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Personalized Career Guidance Section */}
      <section id="guidance" className="guidance-section">
        <div className="guidance-container">
          <h2>Get Personalized Career Guidance</h2>
          <p className="guidance-subtitle">
            Share your details and I'll create a customized career roadmap just for you. 
            I'll review your information and contact you within 24 hours to discuss your career path.
          </p>
          
          <div className="guidance-content">
            <div className="guidance-info">
              <h3>What You'll Get:</h3>
              <ul>
                <li>📋 Personalized career assessment</li>
                <li>🎯 Custom career roadmap with timelines</li>
                <li>📚 Recommended resources and courses</li>
                <li>💼 Industry insights and job market analysis</li>
                <li>🤝 One-on-one consultation session</li>
                <li>📧 Ongoing support via email/WhatsApp</li>
              </ul>
              
              <div className="contact-info">
                <h4>Direct Contact:</h4>
                <div className="contact-item">
                  <Mail size={20} />
                  <a href="mailto:hitayushdange@gmail.com">hitayushdange@gmail.com</a>
                </div>
                <div className="contact-item">
                  <Phone size={20} />
                  <a href="tel:+917588625193">+91 7588625193</a>
                </div>
              </div>
            </div>
            
            <form className="guidance-form" onSubmit={handleSubmit}>
              <h3>Request Career Guidance</h3>
              
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={guidanceForm.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="age">Age *</label>
                  <input
                    type="number"
                    id="age"
                    name="age"
                    value={guidanceForm.age}
                    onChange={handleInputChange}
                    required
                    min="16"
                    max="100"
                    placeholder="Your age"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="education">Education Level *</label>
                  <select
                    id="education"
                    name="education"
                    value={guidanceForm.education}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select education level</option>
                    <option value="High School">High School</option>
                    <option value="Bachelor's Degree">Bachelor's Degree</option>
                    <option value="Master's Degree">Master's Degree</option>
                    <option value="PhD">PhD</option>
                    <option value="Diploma">Diploma</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={guidanceForm.email}
                  onChange={handleInputChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={guidanceForm.phone}
                  onChange={handleInputChange}
                  placeholder="+91 9876543210"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="interests">Interests & Hobbies *</label>
                <textarea
                  id="interests"
                  name="interests"
                  value={guidanceForm.interests}
                  onChange={handleInputChange}
                  required
                  placeholder="What activities, subjects, or hobbies do you enjoy? (e.g., programming, design, writing, sports, music...)"
                  rows="3"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="currentSituation">Current Situation *</label>
                <textarea
                  id="currentSituation"
                  name="currentSituation"
                  value={guidanceForm.currentSituation}
                  onChange={handleInputChange}
                  required
                  placeholder="Tell me about your current job, studies, or situation. What are you doing now?"
                  rows="3"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="goals">Career Goals *</label>
                <textarea
                  id="goals"
                  name="goals"
                  value={guidanceForm.goals}
                  onChange={handleInputChange}
                  required
                  placeholder="What are your career goals? Where do you see yourself in 5 years?"
                  rows="3"
                />
              </div>
              
              <button type="submit" className="submit-button" disabled={isSubmitting}>
                {isSubmitting ? 'Sending Request...' : 'Request Career Guidance'}
                {!isSubmitting && <ArrowRight size={20} />}
              </button>
              
              {/* Test button for debugging */}
              <button 
                type="button" 
                onClick={async () => {
                  console.log('EmailJS Status:', emailjs);
                                      console.log('Service ID:', 'service_fc7rbmr');
                    console.log('Template ID:', 'template_td5y7kd');
                    console.log('Public Key:', 'fLJW-PQkO_ON7DjuO');
                  
                  // Test email send
                  try {
                    const testParams = {
                      from_name: 'Test User',
                      from_email: 'test@example.com',
                      message: `
New Career Guidance Request (TEST)

Name: Test User
Age: 25
Email: test@example.com
Phone: 1234567890
Education: Bachelor's Degree

Interests: Technology, Programming
Current Situation: Student
Career Goals: Software Developer

---
This is a test email from your Careerly AI website.
                      `,
                      to_email: 'hitayushdange@gmail.com',
                      reply_to: 'test@example.com',
                      cc: 'hitayushdange@gmail.com',
                      bcc: 'hitayushdange@gmail.com'
                    };
                    
                    console.log('Sending test email...');
                    const response = await emailjs.send(
                      'service_fc7rbmr',
                      'template_td5y7kd',
                      testParams
                    );
                    console.log('Test email sent successfully:', response);
                    alert('Test email sent successfully! Check your email.');
                  } catch (error) {
                    console.error('Test email failed:', error);
                    alert('Test email failed: ' + error.message);
                  }
                }}
                style={{
                  background: 'rgba(96, 165, 250, 0.2)',
                  color: '#60a5fa',
                  border: '1px solid #60a5fa',
                  padding: '0.5rem 1rem',
                  borderRadius: '4px',
                  marginTop: '1rem',
                  fontSize: '0.8rem'
                }}
              >
                Test EmailJS
              </button>
              
              {submitSuccess && (
                <div className="success-message">
                  <Heart size={20} />
                  <p>Thank you! I'll review your information and contact you within 24 hours.</p>
                </div>
              )}
              
              {submitError && (
                <div className="error-message">
                  <p>{submitError}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo">
                <Brain size={24} />
                <span>Careerly AI</span>
              </div>
              <p>Your AI-powered career companion helping you navigate your professional journey with personalized guidance and expert insights.</p>
              <div className="social-links">
                <a href="https://github.com/hitayush" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com/in/hitayush" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href="https://instagram.com/hitayush" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="https://twitter.com/hitayush" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
            
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#guidance">Career Guidance</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Contact Info</h4>
              <div className="contact-item">
                <Mail size={16} />
                <a href="mailto:hitayushdange@gmail.com">hitayushdange@gmail.com</a>
              </div>
              <div className="contact-item">
                <Phone size={16} />
                <a href="tel:+917588625193">+91 7588625193</a>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2025 Careerly AI. All rights reserved.</p>
            <p>Made with ❤️ by <a href="https://github.com/hitayush" target="_blank" rel="noopener noreferrer">Hitayush Dange</a></p>
          </div>
        </div>
      </footer>

      {/* Chat Interface */}
      <ChatInterface isOpen={showChat} onClose={closeChat} />
      
      {/* Floating Chat Button */}
      <button className="chat-button" onClick={openChat} aria-label="Open chat with Careerly">
        <MessageCircle size={24} />
      </button>
    </div>
  );
}

export default App;
