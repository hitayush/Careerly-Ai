import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, ArrowLeft } from 'lucide-react';

const ChatInterface = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Careerly, your AI career advisor. I'd love to help you create a personalized career roadmap! To get started, could you tell me about your interests? What activities, subjects, or hobbies do you enjoy?",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [userInterests, setUserInterests] = useState([]);
  const [userProfile, setUserProfile] = useState({
    currentEducation: '',
    experience: '',
    skills: [],
    goals: '',
    timeline: '',
    location: ''
  });
  const [conversationStage, setConversationStage] = useState('collecting_interests'); // collecting_interests, gathering_profile, generating_roadmap, roadmap_display
  const [roadmap, setRoadmap] = useState(null);
  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);
  const sendButtonRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      // Focus on textarea when chat opens
      setTimeout(() => {
        textareaRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 120) + 'px';
    }
  }, [inputMessage]);

  // Career suggestions based on interests
  const careerSuggestions = {
    technology: [
      "Software Developer",
      "Data Scientist", 
      "Cybersecurity Analyst",
      "AI/ML Engineer",
      "DevOps Engineer",
      "Product Manager",
      "UX/UI Designer",
      "Cloud Architect"
    ],
    science: [
      "Research Scientist",
      "Biomedical Engineer",
      "Environmental Scientist",
      "Chemist",
      "Physicist",
      "Astronomer",
      "Geneticist",
      "Epidemiologist"
    ],
    arts: [
      "Graphic Designer",
      "Digital Artist",
      "Animator",
      "Web Designer",
      "Creative Director",
      "Art Director",
      "Illustrator",
      "Photographer"
    ],
    business: [
      "Business Analyst",
      "Management Consultant",
      "Entrepreneur",
      "Financial Analyst",
      "Marketing Manager",
      "Operations Manager",
      "Project Manager",
      "Strategy Consultant"
    ],
    healthcare: [
      "Nurse",
      "Physician",
      "Physical Therapist",
      "Occupational Therapist",
      "Pharmacist",
      "Medical Researcher",
      "Healthcare Administrator",
      "Mental Health Counselor"
    ],
    education: [
      "Teacher",
      "Educational Consultant",
      "Curriculum Developer",
      "School Administrator",
      "Special Education Teacher",
      "Educational Technology Specialist",
      "Tutor",
      "Academic Advisor"
    ],
    sports: [
      "Athletic Trainer",
      "Sports Coach",
      "Physical Education Teacher",
      "Sports Medicine Physician",
      "Sports Psychologist",
      "Fitness Instructor",
      "Sports Manager",
      "Recreation Coordinator"
    ],
    writing: [
      "Content Writer",
      "Technical Writer",
      "Journalist",
      "Copywriter",
      "Editor",
      "Author",
      "Blogger",
      "Grant Writer"
    ],
    music: [
      "Music Producer",
      "Sound Engineer",
      "Music Teacher",
      "Composer",
      "Music Therapist",
      "Audio Engineer",
      "Music Director",
      "Recording Artist"
    ],
    nature: [
      "Environmental Scientist",
      "Conservation Biologist",
      "Park Ranger",
      "Wildlife Biologist",
      "Forestry Manager",
      "Marine Biologist",
      "Geologist",
      "Botanist"
    ]
  };

  const interestKeywords = {
    technology: ['coding', 'programming', 'computers', 'software', 'tech', 'digital', 'apps', 'web', 'mobile', 'gaming', 'ai', 'machine learning', 'data'],
    science: ['science', 'research', 'experiments', 'chemistry', 'biology', 'physics', 'math', 'laboratory', 'discovery', 'analysis'],
    arts: ['art', 'design', 'creative', 'drawing', 'painting', 'photography', 'visual', 'aesthetics', 'colors', 'creativity'],
    business: ['business', 'management', 'leadership', 'entrepreneurship', 'finance', 'marketing', 'strategy', 'consulting', 'startup'],
    healthcare: ['health', 'medical', 'helping people', 'care', 'wellness', 'medicine', 'therapy', 'nursing', 'doctor'],
    education: ['teaching', 'learning', 'education', 'school', 'students', 'knowledge', 'mentoring', 'training'],
    sports: ['sports', 'fitness', 'athletics', 'exercise', 'coaching', 'team', 'competition', 'physical activity'],
    writing: ['writing', 'reading', 'communication', 'stories', 'content', 'words', 'literature', 'journalism'],
    music: ['music', 'singing', 'instruments', 'songs', 'rhythm', 'melody', 'audio', 'sound'],
    nature: ['nature', 'outdoors', 'environment', 'animals', 'plants', 'conservation', 'ecology', 'wildlife']
  };

  const analyzeInterests = (text) => {
    const lowerText = text.toLowerCase();
    const matchedInterests = [];
    
    Object.entries(interestKeywords).forEach(([category, keywords]) => {
      if (keywords.some(keyword => lowerText.includes(keyword))) {
        matchedInterests.push(category);
      }
    });
    
    return matchedInterests;
  };

  const generateCareerSuggestions = (interests) => {
    let allCareers = [];
    
    interests.forEach(interest => {
      if (careerSuggestions[interest]) {
        allCareers = [...allCareers, ...careerSuggestions[interest]];
      }
    });
    
    // Remove duplicates and return top 8 suggestions
    const uniqueCareers = [...new Set(allCareers)];
    return uniqueCareers.slice(0, 8);
  };

  const generateRoadmap = (interests, profile, selectedCareer) => {
    const roadmap = {
      career: selectedCareer,
      timeline: profile.timeline || '3-5 years',
      phases: []
    };

    // Generate phases based on career and profile
    if (interests.includes('technology') && selectedCareer.includes('Developer')) {
      roadmap.phases = [
        {
          phase: "Foundation (0-6 months)",
          tasks: [
            "Learn programming fundamentals (HTML, CSS, JavaScript)",
            "Complete online courses on platforms like freeCodeCamp or Codecademy",
            "Build simple projects to practice coding",
            "Join coding communities and forums",
            "Set up development environment"
          ],
          resources: ["freeCodeCamp", "Codecademy", "MDN Web Docs", "GitHub"]
        },
        {
          phase: "Specialization (6-12 months)",
          tasks: [
            "Choose a specialization (Frontend/Backend/Full-stack)",
            "Learn relevant frameworks (React, Node.js, etc.)",
            "Build portfolio projects",
            "Contribute to open source projects",
            "Network with other developers"
          ],
          resources: ["React Documentation", "Node.js", "Stack Overflow", "Dev.to"]
        },
        {
          phase: "Professional Development (1-2 years)",
          tasks: [
            "Apply for junior developer positions",
            "Gain real-world experience through internships or freelance work",
            "Continue learning advanced concepts",
            "Build a strong professional network",
            "Create a compelling resume and portfolio"
          ],
          resources: ["LinkedIn", "Indeed", "AngelList", "Local tech meetups"]
        },
        {
          phase: "Career Growth (2+ years)",
          tasks: [
            "Seek senior positions or specialized roles",
            "Mentor junior developers",
            "Stay updated with industry trends",
            "Consider certifications or advanced education",
            "Explore leadership opportunities"
          ],
          resources: ["Industry conferences", "Advanced courses", "Leadership training"]
        }
      ];
    } else if (interests.includes('business') && selectedCareer.includes('Analyst')) {
      roadmap.phases = [
        {
          phase: "Education & Foundation (0-1 year)",
          tasks: [
            "Complete business analysis certification (CBAP or similar)",
            "Learn data analysis tools (Excel, SQL, Tableau)",
            "Study business processes and methodologies",
            "Develop analytical thinking skills",
            "Build basic project management knowledge"
          ],
          resources: ["IIBA CBAP", "Coursera Business Analysis", "Tableau Training"]
        },
        {
          phase: "Entry Level (1-2 years)",
          tasks: [
            "Apply for junior business analyst positions",
            "Gain hands-on experience with real projects",
            "Learn industry-specific tools and processes",
            "Develop stakeholder management skills",
            "Build a portfolio of analysis projects"
          ],
          resources: ["LinkedIn Jobs", "Indeed", "Professional networking"]
        },
        {
          phase: "Mid-Level (2-4 years)",
          tasks: [
            "Take on more complex projects",
            "Develop expertise in specific domains",
            "Mentor junior analysts",
            "Build strong relationships with stakeholders",
            "Consider specialization areas"
          ],
          resources: ["Industry conferences", "Advanced certifications", "Mentorship programs"]
        },
        {
          phase: "Senior Level (4+ years)",
          tasks: [
            "Lead major business transformation projects",
            "Develop strategic analysis capabilities",
            "Mentor and train teams",
            "Contribute to organizational strategy",
            "Consider consulting or leadership roles"
          ],
          resources: ["Executive education", "Strategic planning courses", "Leadership development"]
        }
      ];
    } else {
      // Generic roadmap for other careers
      roadmap.phases = [
        {
          phase: "Foundation (0-1 year)",
          tasks: [
            "Research the career field thoroughly",
            "Identify required education and certifications",
            "Start building relevant skills",
            "Network with professionals in the field",
            "Create a learning plan"
          ],
          resources: ["Industry websites", "Professional associations", "Online courses"]
        },
        {
          phase: "Education & Training (1-2 years)",
          tasks: [
            "Complete required education or certifications",
            "Gain practical experience through internships",
            "Build a professional network",
            "Develop industry-specific skills",
            "Create a strong resume"
          ],
          resources: ["Educational institutions", "Professional certifications", "Industry events"]
        },
        {
          phase: "Entry Level (2-3 years)",
          tasks: [
            "Apply for entry-level positions",
            "Gain hands-on experience",
            "Continue learning and developing skills",
            "Build professional relationships",
            "Seek mentorship opportunities"
          ],
          resources: ["Job boards", "Professional associations", "Mentorship programs"]
        },
        {
          phase: "Career Advancement (3+ years)",
          tasks: [
            "Seek promotions and advanced positions",
            "Develop leadership skills",
            "Stay updated with industry trends",
            "Consider specialization",
            "Build a personal brand"
          ],
          resources: ["Leadership training", "Industry conferences", "Professional development"]
        }
      ];
    }

    return roadmap;
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isTyping) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Reset textarea height
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }

    // Simulate AI thinking
    setTimeout(() => {
      let aiResponse = '';
      
      if (conversationStage === 'collecting_interests') {
        const interests = analyzeInterests(inputMessage);
        setUserInterests(prev => [...new Set([...prev, ...interests])]);
        
        if (interests.length > 0) {
          aiResponse = `Great! I can see you're interested in ${interests.join(', ')}. Could you tell me more about what specifically draws you to these areas? For example, do you enjoy problem-solving, helping others, being creative, or working with data?`;
        } else {
          aiResponse = "That's interesting! Could you tell me more about what you enjoy doing? For example, do you like working with technology, helping people, being creative, working outdoors, or something else?";
        }
        
        // After collecting some interests, move to profile gathering
        if (userInterests.length >= 2 || interests.length >= 2) {
          setConversationStage('gathering_profile');
          setTimeout(() => {
            const careers = generateCareerSuggestions([...userInterests, ...interests]);
            const careerResponse = {
              id: messages.length + 3,
              text: `Based on your interests, here are some career paths that might be perfect for you:\n\n${careers.map(career => `• ${career}`).join('\n')}\n\nWhich of these careers interests you most? I'll then ask you a few more questions to create your personalized roadmap.`,
              sender: 'ai',
              timestamp: new Date()
            };
            setMessages(prev => [...prev, careerResponse]);
            setIsTyping(false);
          }, 2000);
        }
      } else if (conversationStage === 'gathering_profile') {
        // Check if user selected a career
        const selectedCareer = inputMessage;
        const careers = generateCareerSuggestions(userInterests);
        
        if (careers.some(career => inputMessage.toLowerCase().includes(career.toLowerCase()))) {
          setUserProfile(prev => ({ ...prev, selectedCareer }));
          setConversationStage('profile_questions');
          
          aiResponse = `Excellent choice! I'll help you create a roadmap for ${selectedCareer}. Let me ask you a few questions to personalize your plan:\n\n1. What's your current education level? (High school, college, university, etc.)\n2. Do you have any relevant experience or skills?\n3. What are your career goals? (e.g., work-life balance, high salary, making impact)\n4. What's your preferred timeline? (1-2 years, 3-5 years, etc.)\n5. Any location preferences?`;
        } else {
          aiResponse = `I'd love to help you create a roadmap! Could you please select one of the careers I mentioned, or tell me which career path interests you most?`;
        }
      } else if (conversationStage === 'profile_questions') {
        // Collect profile information
        const profileInfo = inputMessage.toLowerCase();
        
        if (profileInfo.includes('high school') || profileInfo.includes('college') || profileInfo.includes('university')) {
          setUserProfile(prev => ({ ...prev, currentEducation: inputMessage }));
          aiResponse = "Great! Now, do you have any relevant experience or skills? (e.g., internships, projects, certifications, soft skills)";
        } else if (profileInfo.includes('experience') || profileInfo.includes('skill') || profileInfo.includes('internship')) {
          setUserProfile(prev => ({ ...prev, experience: inputMessage }));
          aiResponse = "Perfect! What are your career goals? (e.g., work-life balance, high salary, making impact, creative freedom)";
        } else if (profileInfo.includes('goal') || profileInfo.includes('balance') || profileInfo.includes('salary')) {
          setUserProfile(prev => ({ ...prev, goals: inputMessage }));
          aiResponse = "Excellent! What's your preferred timeline for achieving your career goals? (1-2 years, 3-5 years, 5+ years)";
        } else if (profileInfo.includes('year') || profileInfo.includes('timeline') || profileInfo.includes('time')) {
          setUserProfile(prev => ({ ...prev, timeline: inputMessage }));
          aiResponse = "Almost done! Any location preferences? (e.g., remote work, specific cities, international opportunities)";
        } else if (profileInfo.includes('location') || profileInfo.includes('remote') || profileInfo.includes('city')) {
          setUserProfile(prev => ({ ...prev, location: inputMessage }));
          
          // Generate roadmap
          const selectedCareer = userProfile.selectedCareer || "your chosen career";
          const roadmap = generateRoadmap(userInterests, userProfile, selectedCareer);
          setRoadmap(roadmap);
          setConversationStage('roadmap_display');
          
          aiResponse = `Perfect! I've created your personalized career roadmap for ${selectedCareer}. Let me show you the detailed plan...`;
          
          setTimeout(() => {
            const roadmapMessage = {
              id: messages.length + 3,
              text: `🎯 **Your Personalized Career Roadmap**\n\n**Career Path:** ${roadmap.career}\n**Timeline:** ${roadmap.timeline}\n\n**Phase-by-Phase Plan:**\n\n${roadmap.phases.map((phase, index) => 
                `${index + 1}. **${phase.phase}**\n   **Tasks:**\n   ${phase.tasks.map(task => `   • ${task}`).join('\n')}\n   **Resources:** ${phase.resources.join(', ')}\n`
              ).join('\n')}\n\nWould you like me to explain any specific phase in more detail or help you get started with the first steps?`,
              sender: 'ai',
              timestamp: new Date()
            };
            setMessages(prev => [...prev, roadmapMessage]);
            setIsTyping(false);
          }, 2000);
        } else {
          aiResponse = "I'm collecting information to create your personalized roadmap. Could you please answer the questions I asked?";
        }
      } else if (conversationStage === 'roadmap_display') {
        aiResponse = "I'm here to help you with your career journey! Would you like me to:\n• Explain any specific phase in detail\n• Help you create a detailed action plan\n• Suggest specific resources and courses\n• Discuss potential challenges and solutions\n• Or something else?";
      }

      if (aiResponse) {
        const aiMessage = {
          id: messages.length + 2,
          text: aiResponse,
          sender: 'ai',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, aiMessage]);
      }
      
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleKeyDown = (e) => {
    // Escape key to close chat
    if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="chat-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="chat-container" role="dialog" aria-labelledby="chat-title" aria-modal="true">
        <div className="chat-header">
          <h3 id="chat-title">AI Career Roadmap Advisor</h3>
          <button 
            onClick={onClose} 
            className="close-btn"
            aria-label="Close chat"
            onKeyDown={handleKeyDown}
          >
            ×
          </button>
        </div>
        
        <div className="chat-messages" role="log" aria-live="polite" aria-label="Chat messages">
          {messages.map((message) => (
            <div key={message.id} className={`message ${message.sender}`} role="article">
              <div className="message-content">
                {message.sender === 'ai' && (
                  <div className="ai-avatar" aria-label="AI assistant">🤖</div>
                )}
                <div className="message-text">
                  {message.text.split('\n').map((line, index) => (
                    <div key={index}>{line}</div>
                  ))}
                </div>
              </div>
              <div className="message-time" aria-label={`Message sent at ${message.timestamp.toLocaleTimeString()}`}>
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="message ai" role="status" aria-label="AI is typing">
              <div className="message-content">
                <div className="ai-avatar" aria-label="AI assistant">🤖</div>
                <div className="typing-indicator" aria-label="Typing indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        
        <div className="chat-input" role="form" aria-label="Message input">
          <textarea
            ref={textareaRef}
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            onKeyDown={handleKeyDown}
            placeholder="Tell me about your interests..."
            rows="1"
            aria-label="Type your message"
            disabled={isTyping}
          />
          <button 
            ref={sendButtonRef}
            onClick={handleSendMessage} 
            disabled={!inputMessage.trim() || isTyping}
            aria-label="Send message"
            onKeyDown={handleKeyDown}
          >
            ✈️
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface; 