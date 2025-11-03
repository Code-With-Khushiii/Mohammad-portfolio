import React, { useState, useEffect } from 'react';
import { ChevronDown, User, Target, TrendingUp, Calendar, Mail, Phone, Linkedin, FileText, Star, Award, Users, Lightbulb, Rocket, ExternalLink, X, Menu } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const sections = ['hero', 'summary', 'experience', 'projects', 'skills', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setMobileOpen(false);
  };

  // Projects (tailored to Mohammad Khan)
  const projects = [
    {
      title: "LLM Support Chatbot (AWS Bedrock + RAG)",
      subtitle: "Cloud-native Tier-1 Support Assistant",
      category: "Cloud & Automation",
      introduction: "Architected and launched a Tier-1 support assistant using AWS Bedrock with Retrieval-Augmented Generation (RAG) to enable 24/7 internal support and automate high-volume queries.",
      problem: "High ticket volumes and slow response times strained Tier-1 support workflows and increased backlog.",
      objective: "Reduce ticket backlog and improve response speed with context-aware automation integrated into internal workflows.",
      methodology: [
        "Integrated Bedrock LLM with a RAG pipeline for context-grounded answers",
        "Deployed serverless components with AWS Lambda and S3",
        "Built a lightweight Node.js chatbot integration for internal tools",
        "Added safeguards, logging, and performance metrics for reliability"
      ],
      results: [
        "Improved query resolution efficiency by 45%",
        "Under 1s response times for most internal queries",
        "Reduced Tier-1 backlog via automated triage and responses"
      ],
      conclusion: "Delivered measurable automation impact with reliable cloud patterns and guardrails."
    },
    {
      title: "Power BI Airline Dashboard",
      subtitle: "Operational Analytics with SQL + Splunk",
      category: "Data & Reporting",
      introduction: "Built Power BI dashboards by integrating ETL pipelines, SQL models, and Splunk logs to monitor flight performance metrics and operational KPIs.",
      problem: "Manual reporting slowed decision-making and limited operational visibility across teams.",
      objective: "Automate reporting and enable near real-time analytics for operations, finance, and IT support.",
      methodology: [
        "Modeled datasets with T-SQL and transformation layers",
        "Automated refresh pipelines and DAX measures",
        "Integrated Splunk logs for operational signals and alerting",
        "Standardized datasets to improve data quality"
      ],
      results: [
        "Cut manual reporting by ~40%",
        "Improved analytical efficiency by ~40%",
        "Delivered role-based dashboards for cross-functional stakeholders"
      ],
      conclusion: "Enabled data-driven operations with automated, trustworthy reporting."
    }
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-md border-b border-brown/20">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-display text-black tracking-wide">MOHAMMAD KHAN</div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'summary', label: 'Summary' },
                { id: 'experience', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'skills', label: 'Skills' },
                { id: 'education', label: 'Education' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-sm font-light tracking-wide transition-colors duration-300 ${
                    activeSection === item.id ? 'text-black font-medium' : 'text-brown hover:text-black'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <button
              aria-label="Open menu"
              className="md:hidden p-2 rounded-sm text-brown hover:text-black hover:bg-brown/10 transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {mobileOpen && (
          <div className="md:hidden bg-cream/95 backdrop-blur px-6 pb-4 border-t border-brown/20">
            <div className="grid grid-cols-2 gap-3 pt-2">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'summary', label: 'Summary' },
                { id: 'experience', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'skills', label: 'Skills' },
                { id: 'education', label: 'Education' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-sm text-left px-3 py-2 rounded-sm transition-colors ${
                    activeSection === item.id ? 'bg-black text-white' : 'text-black hover:bg-brown/10'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-28 md:pt-32 pb-16 md:pb-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="mb-12">
              <img 
                src="/images/picture.jpeg"
                alt="Mohammad Khan"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-6 md:mb-8 object-cover border-4 border-brown/30 shadow-lg"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-display text-black mb-4 md:mb-8 tracking-wide leading-tight">
              MOHAMMAD KHAN
            </h1>
            <div className="text-base md:text-xl text-brown mb-6 font-light tracking-widest">
              TECHNICAL SUPPORT ENGINEER | IT INFRASTRUCTURE ANALYST | SYSTEMS SUPPORT SPECIALIST
            </div>
            <div className="w-24 h-0.5 bg-brown mx-auto mb-12"></div>
            <div className="flex flex-wrap gap-3 justify-center md:hidden mb-8">
              {['Summary','Experience','Projects','Skills','Education','Contact'].map((label) => (
                <button key={label} onClick={() => scrollToSection(label.toLowerCase())} className="text-xs px-3 py-1 border border-brown/40 text-brown rounded-full">
                  {label}
                </button>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => scrollToSection('projects')}
                className="bg-black text-white px-10 py-4 font-light tracking-wide hover:bg-brown transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                🎯 VIEW WORK THAT SPEAKS
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border border-black text-black px-10 py-4 font-light tracking-wide hover:bg-black hover:text-white transition-all duration-300"
              >
                🤝 START A CONVERSATION
              </button>
            </div>
          </div>
          <div className="text-center mt-20">
            <ChevronDown 
              className="w-6 h-6 text-brown/60 mx-auto animate-bounce cursor-pointer hover:text-black transition-colors"
              onClick={() => scrollToSection('summary')}
            />
          </div>
        </div>
      </section>

      {/* Summary */}
      <section id="summary" className="py-20 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display text-black mb-8 tracking-wide">SUMMARY</h2>
          </div>
          <div className="grid lg:grid-cols-1 gap-10 items-center mb-6 w-full max-w-4xl lg:max-w-5xl">
            <div className="bg-cream p-6 md:p-8 mx-auto rounded-sm">
              <p className="text-base md:text-lg text-brown leading-relaxed font-light">
                IT Support and Systems Analyst with 3+ years across cloud-integrated support environments in financial, academic, and SaaS contexts. Python, SQL, AWS (Lambda, S3), ServiceNow, Splunk, IAM, DNS/VPN/VLAN. Focus on Tier-1/Tier-2 workflows, access control, endpoint provisioning, and incident response. Known for clear documentation, user-friendly troubleshooting, and coordination across cross functional teams.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Experience */}
      <section id="experience" className="py-20 md:py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl md:text-5xl font-display text-black mb-8 tracking-wide">WORK EXPERIENCE</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto"></div>
          </div>

          <div className="space-y-10 md:space-y-12 max-w-4xl mx-auto">
            <div className="bg-white p-6 md:p-8 rounded-sm shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 md:gap-4 mb-3">
                <h3 className="text-xl font-display text-black tracking-wide">Independent Projects — Freelance IT Engineer</h3>
                <span className="text-sm text-brown font-light">Remote, USA · Jan 2023 – Oct 2025</span>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-brown font-light">
                <li>Built automation and data tools with Python, Flask, SQLite; improved efficiency by 30%+.</li>
                <li>Designed modular CRUD backends; boosted data retrieval speed by 40%.</li>
                <li>Integrated REST APIs (Open Library, custom); sub-1s real-time responses.</li>
                <li>Shipped responsive UIs with intuitive workflows; ~30% fewer user steps.</li>
                <li>Applied OOP and CI/CD (GitHub Actions) for reliable deployments.</li>
                <li>Ran user feedback loops; achieved 95% satisfaction on usability.</li>
              </ul>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-sm shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 md:gap-4 mb-3">
                <h3 className="text-xl font-display text-black tracking-wide">Walmart — Stock Clerk</h3>
                <span className="text-sm text-brown font-light">Valley Stream, NY · Sep 2021 – Present</span>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-brown font-light">
                <li>Maintained barcode scanners and inventory databases; 99% stock accuracy.</li>
                <li>Resolved device sync issues; improved troubleshooting time by 25%.</li>
                <li>Managed updates and data integrity across POS/inventory; 15% efficiency gain.</li>
              </ul>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-sm shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 md:gap-4 mb-3">
                <h3 className="text-xl font-display text-black tracking-wide">Lehman College — Tech Assistant (IT Support)</h3>
                <span className="text-sm text-brown font-light">Bronx, NY · Nov 2018 – May 2019</span>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-brown font-light">
                <li>Tier-1 support for 200+ users; 95% first-call resolution.</li>
                <li>Installed OS, updates, and patches; reduced downtime by 25%.</li>
                <li>Trained users on security hygiene; improved safe practices by 30%.</li>
                <li>Monitored logs/access; escalated two potential breaches.</li>
              </ul>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-sm shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 md:gap-4 mb-3">
                <h3 className="text-xl font-display text-black tracking-wide">Queensborough Community College — Tech Assistant (IT Support)</h3>
                <span className="text-sm text-brown font-light">Queens, NY · Jan 2016 – Jun 2016</span>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-brown font-light">
                <li>Installed, configured, tested 40+ computers and peripherals.</li>
                <li>Ensured stable network connectivity across labs; improved uptime by 20%.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display text-black mb-8 tracking-wide">PROJECTS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-base md:text-lg text-brown max-w-2xl mx-auto font-light">
              Selected projects demonstrating automation, analytics, and support tooling
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-cream p-6 rounded-sm hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                onClick={() => setSelectedProject(index)}
              >
                <div className="mb-4">
                  <span className="text-xs font-medium text-brown bg-white px-3 py-1 tracking-wide">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-display text-black mb-3 tracking-wide leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-brown mb-4 font-light">
                  {project.subtitle}
                </p>
                <p className="text-brown leading-relaxed font-light text-sm line-clamp-3">
                  {project.introduction}
                </p>
                <div className="mt-4 flex items-center text-brown hover:text-black transition-colors">
                  <span className="text-sm font-light">View Details</span>
                  <ExternalLink className="w-4 h-4 ml-2" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-brown font-light">
              Interested in learning more about any of these projects? 
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-black ml-1 font-regular italic"
              >
                Reach out for detailed case studies and insights.
              </button>
            </p>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject !== null && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm">
            <div className="sticky top-0 bg-white border-b border-brown/20 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-display text-black tracking-wide">
                {projects[selectedProject].title}
              </h2>
              <button 
                onClick={() => setSelectedProject(null)}
                className="text-brown hover:text-black transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6 space-y-8">
              <div>
                <span className="text-sm font-medium text-brown bg-cream px-3 py-1 tracking-wide">
                  {projects[selectedProject].category}
                </span>
                <p className="text-brown font-light mt-2">
                  {projects[selectedProject].subtitle}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">INTRODUCTION</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].introduction}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">PROBLEM STATEMENT</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].problem}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">OBJECTIVE</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].objective}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">METHODOLOGY</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].methodology.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">RESULTS</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].results.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">CONCLUSION</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].conclusion}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Skills Section */}
      <section id="skills" className="py-20 md:py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display text-black mb-8 tracking-wide">SKILLS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-base md:text-lg text-brown max-w-2xl mx-auto font-light">
              Core competencies for IT support, cloud operations, and data-driven workflows
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              {
                icon: User,
                title: 'IT Support & Infrastructure',
                skills: ['Windows/macOS', 'AV/Zoom', 'Helpdesk, ServiceNow', 'Endpoint mgmt, Imaging']
              },
              {
                icon: TrendingUp,
                title: 'Cloud & Monitoring',
                skills: ['AWS (Lambda, S3, IAM)', 'Splunk', 'RBAC', 'ASP.NET (Basic)']
              },
              {
                icon: Users,
                title: 'Data & Reporting',
                skills: ['SQL (T-SQL, Postgres)', 'Power BI (DAX)', 'Python (ETL)']
              },
              {
                icon: Lightbulb,
                title: 'Cloud & Infrastructure',
                skills: ['Azure', 'Terraform', 'Docker/VMware', 'VPN/DNS/VLAN']
              }
            ].map((category, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-black mx-auto mb-8 flex items-center justify-center">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-display text-black mb-6 tracking-wide">{category.title.toUpperCase()}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-sm text-brown font-light">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-20 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl md:text-5xl font-display text-black mb-8 tracking-wide">EDUCATION</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto"></div>
          </div>
          <div className="max-w-3xl mx-auto bg-cream p-6 md:p-8 rounded-sm">
            <h3 className="text-xl font-display text-black tracking-wide">CUNY Lehman College, Bronx, NY</h3>
            <p className="text-brown font-light">Bachelor of Science, Computer Science</p>
            <p className="text-brown font-light text-sm mt-1">Aug 2017 – May 2021</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display mb-8 tracking-wide">CONTACT</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-base md:text-xl text-white/80 max-w-3xl mx-auto font-light">
              Let's connect — open to Technical Support, Systems Analyst, and IT Ops roles.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-8 max-w-md mx-auto">
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-brown mr-6" />
              <a 
                href="tel:+13477017393"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                +1 (347) 701-7393
              </a>
            </div>
            <div className="flex items-center">
              <Linkedin className="w-6 h-6 text-brown mr-6" />
              <a 
                href="https://www.linkedin.com/in/mohammad-khan-7a1369312/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-brown mr-6" />
              <a 
                href="mailto:searchingforanewjob78@gmail.com"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                searchingforanewjob78@gmail.com
              </a>
            </div>
            {/* <div className="flex items-center">
              <FileText className="w-6 h-6 text-brown mr-6" />
              <a 
                href="https://drive.google.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                Resume
              </a>
            </div> */}
            <div className="flex items-center">
              <ExternalLink className="w-6 h-6 text-brown mr-6" />
              <a 
                href="https://github.com/TK1987265"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brown text-white/80 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-light tracking-wide">
            © 2025 Mohammad Khan. Built for clarity and fast support.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;