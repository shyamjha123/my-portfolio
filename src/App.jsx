import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Briefcase, Code2, GraduationCap, Award, ChevronDown } from 'lucide-react';
import Zevopay from "./assets/zevopay.png";
import Sec4sys from "./assets/Sec4sys.jpeg";
import Driver from "./assets/Driver.png";
import Cashofone from "./assets/cashofone.png";
import Hotel from "./assets/Hotel.png";
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['hero', 'about', 'experience', 'freelance', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Data structures
  const fullTimeExperience = [
    {
      company: "Zevosoft services Pvt Ltd.",
      role: "Senior Full Stack Developer",
      period: "august 2024 - jan 2026",
      location: "Jodhpur Rajasthan Govt building (ISTART Nest)",
      description: "Lead development of B2B Fintech project from scratch like Phonepay, Paytm etc",
      achievements: [
        "Built a responsive web app using React.js, ensuring smooth performance across all devices.",
        "Developed and maintained backend services using Nest.js, MySQL, and Prisma ORM.",
        "Implemented role-based authentication and secure API communication.",
        "Created bank integration APIs for IDBI, HDFC (collections) and IDFC (payouts) with webhook-based response handling.",
        "Designed fallback mechanisms to auto-route transactions if any bank API fails.",
        "Managed wallet functionality – balance updates, money load, and payouts.",
        "Handled transaction management, saving real-time responses from multiple banks.",
        "Developed service modules for AEPS, BBPS, DTH recharge, and bill payments."
      ],
      tech: ["React.js", "React Native", "Nest.js", "MySQL", "Prisma ORM", "Redux Toolkit", "Material UI", "Formik + Yup", "Axios", "Hostinger"]
    },
    {
      company: "Samcom Technobrains Pvt Ltd",
      role: "React Developer",
      period: "Mar 2023 - Dec 2024",
      location: "Ahmedabad Gujarat",
      description: "Developed and maintained web and mobile applications",
      achievements: [
        "Built responsive e-commerce platform handling $2M+ in annual transactions",
        "Optimized database queries reducing page load times by 60%",
        "Integrated third-party APIs including Stripe, SendGrid, and Twilio",
        "Participated in agile sprint planning and daily standups"
      ],
      tech: ["React Js", "React Native", "Typescript",]
    },
  ];

  const freelanceProjects = [
    {
      client: "Sec4sys",
      project: "Cybersecurity Product",
      period: "Oct 2025 - Ongoing",
      budget: "$20,000",
      description: "Cybersecurity project provide users SAST Scanning, DAST Scanning, IAST Scanning",
      deliverables: [
        "Providing all majors three scanning engines that is SAST, DAST, IAST",
        "for depth scanning purpose in product we provide Ai robots also that got access of ur repo and give false positive details",
        "scanning all type providing like pattern analysis, Taint analysis, Data Flow analysis",
        "Dast got website url scan give scan result and if u want than u select Ai resolver to give depth false positive details"
      ],
      tech: ["React Js", "Python", "PostgreSql", "CI/CD pipeline", "Docker"],
      outcome: "Product almost ready to delivery at now we represent our product to clients"
    },
    {
      client: "Techies Gateway",
      project: "Customer/Driver booking application",
      period: "Feb 2026 - Ongoing",
      budget: "$77.13",
      description: "customer booking cab and driver accept customer request provide service",
      deliverables: [
        "Creating customer and driver booking mobile application",
        "application IOS or Android fully customizable application fully supportable in both IOS or Android",
        "for type safety and more scalable application build in application using Typescript",
        "optimised application size and smooth UI application load time reduced upto 50%"
      ],
      tech: ["React Native", "React Js", "Typescript", "Google Maps API"],
      outcome: "Platform under process  and client satisfaction 100%"
    },
    {
      client: "Techies Gateway",
      project: "Cashofone",
      period: "Feb 2026 -Ongoing",
      budget: "$77.13",
      description: "Cashofone app like a cashify sell second hand mobiles of different varients",
      deliverables: [
        "Added Filters to select different varients of devices",
        "users can purchase devices",
        "Realtime notifications user got when admin placed notification",
        "IOS/Android device compatible device",
        "Payments gateway inetegration",
      ],
      tech: ["React Native", "UseSignalApI", "Google Maps API"],
      outcome: "under process application but their beta versiona user now testing in market"
    },
    {
      client: "Techies Gateway",
      project: "Food order Application",
      period: "Feb 2026 - Ongoing",
      budget: "$77.13",
      description: "Users order foods from their favourite Restaurant",
      deliverables: [
        "Users under 5 km range select their favourite restaurant and order their food",
        "Realtime updates users got of new open restaurant and latest foods available",
        "IOS/Android device compatible device",
        "Payment gateway integration food ordering",

      ],
      tech: ["React Native", "Google Maps API"],
      outcome: "Increased lead conversion rate by 45% within 3 months"
    },
  ];

  const skills = {
    "Frontend": ["React", "React Native", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "HTML5/CSS3", "Material UI"],
    "Backend": ["Node.js", "Express", "PostgreSQL", "MongoDB", "MYSQL"],
    "DevOps": ["AWS", "Docker", "CI/CD", "Nginx"],
    "Tools": ["Git", "Jira", "Figma", "Postman", "VS Code", "Webpack", "Gitlab", "Cursor AI",]
  };

  const projects = [
    {
      title: "Zevopay",
      description: "B2B Fintech product providing B2B services like collection, Payout, Loan services, Dth recharge, Rail ticketm bus ticket etc",
      tech: ["React Js", "React Native", "MYSQL", "NEST Js", "Prism Orm", "Gitlab", "Pm2", "Hostinger"],
      github: "#",
      live: "https://zevopay.online/",
      image: Zevopay
    },
    {
      title: "Sec4sys",
      description: "Cybersecurity Product providing you all soln related to cybersecurity like SAST,DAST,IAST engines",
      tech: ["React Js", "Python", "PostgreSql", "CI/CD pipeline", "Docker"],
      github: "#",
      live: "https://sec4sys.com/",
      image: Sec4sys
    },
    {
      title: "Customer/Driver Booking Application",
      description: "Customer can select their driver select car model and for incity, out station, valet and driver accept their ride after booking confirmation its work like a DRIVu application",
      tech: ["React Native", "Google Map Api", "Typescript"],
      github: "#",
      live: "#",
      image: Driver
    },
    {
      title: "Cashofone",
      description: "Second hand mobile devices sell of different variants all variants provided in single platform its same like cashify",
      tech: ["React Native", "Google Map Api", "Typescript"],
      github: "https://github.com/shyamjha123/cashfone.git",
      live: "https://1drv.ms/f/c/80430f4aae8548e0/IgArxgDEu2H0R4f5eGCAwDlSAQHv48aI3UIPcqXquLkd9qk?e=miImuO",
      image: Cashofone
    },
    {
      title: "Food Delivery Application",
      description: "Users can order their food in nearby under 5km range of restaurant",
      tech: ["React Native", "Google Map Api", "Typescript"],
      github: "#",
      live: "#",
      image: Hotel
    }
  ];

  return (
    <div className="portfolio-container">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Work+Sans:wght@300;400;500;600;700&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          overflow-x: hidden;
          background: #0a0a0a;
        }

        .portfolio-container {
          font-family: 'Work Sans', sans-serif;
          color: #ffffff;
          background: #0a0a0a;
          min-height: 100vh;
          position: relative;
        }

        /* Animated gradient background */
        .portfolio-container::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 20% 50%, rgba(255, 68, 68, 0.08) 0%, transparent 50%),
                      radial-gradient(circle at 80% 80%, rgba(68, 188, 255, 0.08) 0%, transparent 50%),
                      radial-gradient(circle at 40% 20%, rgba(255, 168, 68, 0.06) 0%, transparent 50%);
          pointer-events: none;
          z-index: 0;
          animation: gradientShift 15s ease infinite;
        }

        @keyframes gradientShift {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }

        /* Custom cursor */
        .cursor-glow {
          position: fixed;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 68, 68, 0.15) 0%, transparent 70%);
          pointer-events: none;
          z-index: 999;
          transform: translate(-50%, -50%);
          transition: opacity 0.3s ease;
          mix-blend-mode: screen;
        }

        /* Navigation */
        nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          padding: 1.5rem 3rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: all 0.3s ease;
          background: ${isScrolled ? 'rgba(10, 10, 10, 0.9)' : 'transparent'};
          backdrop-filter: ${isScrolled ? 'blur(20px)' : 'none'};
          border-bottom: ${isScrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'};
        }

        .logo {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, #ff4444, #ff6844, #ff8844);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -0.5px;
        }

        .nav-links {
          display: flex;
          gap: 2.5rem;
          list-style: none;
        }

        .nav-links a {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          letter-spacing: 0.5px;
          transition: all 0.3s ease;
          position: relative;
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #ff4444, #ff6844);
          transition: width 0.3s ease;
        }

        .nav-links a:hover,
        .nav-links a.active {
          color: #ffffff;
        }

        .nav-links a:hover::after,
        .nav-links a.active::after {
          width: 100%;
        }

        /* Hero Section */
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          padding: 0 3rem;
        }

        .hero-content {
          max-width: 1200px;
          width: 100%;
          animation: fadeInUp 1s ease-out;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-label {
          font-size: 0.85rem;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #ff6844;
          font-weight: 600;
          margin-bottom: 1.5rem;
          animation: fadeInUp 1s ease-out 0.2s both;
        }

        .hero-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(3rem, 8vw, 6rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          background: linear-gradient(135deg, #ffffff 0%, rgba(255, 255, 255, 0.7) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: fadeInUp 1s ease-out 0.4s both;
        }

        .hero-subtitle {
          font-size: clamp(1.2rem, 3vw, 2rem);
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 2rem;
          font-weight: 300;
          animation: fadeInUp 1s ease-out 0.6s both;
        }

        .hero-description {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.5);
          max-width: 600px;
          line-height: 1.8;
          margin-bottom: 3rem;
          animation: fadeInUp 1s ease-out 0.8s both;
        }

        .hero-cta {
          display: flex;
          gap: 1.5rem;
          animation: fadeInUp 1s ease-out 1s both;
        }

        .btn-primary,
        .btn-secondary {
          padding: 1rem 2.5rem;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .btn-primary {
          background: linear-gradient(135deg, #ff4444, #ff6844);
          color: white;
          box-shadow: 0 8px 32px rgba(255, 68, 68, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(255, 68, 68, 0.4);
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.05);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }

        .scroll-indicator {
          position: absolute;
          bottom: 3rem;
          left: 50%;
          transform: translateX(-50%);
          animation: bounce 2s infinite;
          opacity: 0.5;
        }

        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(10px); }
        }

        /* Section Styles */
        section {
          padding: 8rem 3rem;
          position: relative;
          z-index: 1;
        }

        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 700;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #ffffff 0%, rgba(255, 255, 255, 0.6) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-subtitle {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.5);
          margin-bottom: 4rem;
          max-width: 600px;
        }

        .content-wrapper {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* About Section */
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .about-text {
          font-size: 1.1rem;
          line-height: 1.9;
          color: rgba(255, 255, 255, 0.7);
        }

        .about-text p {
          margin-bottom: 1.5rem;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 2rem;
          text-align: center;
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 68, 68, 0.3);
          transform: translateY(-5px);
        }

        .stat-number {
          font-family: 'Playfair Display', serif;
          font-size: 3rem;
          font-weight: 700;
          background: linear-gradient(135deg, #ff4444, #ff8844);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.95rem;
          font-weight: 500;
        }

        /* Experience Cards */
        .experience-list {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        .experience-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 3rem;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }

        .experience-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: linear-gradient(180deg, #ff4444, #ff8844);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .experience-card:hover {
          background: rgba(255, 255, 255, 0.04);
          border-color: rgba(255, 68, 68, 0.2);
          transform: translateX(10px);
        }

        .experience-card:hover::before {
          opacity: 1;
        }

        .experience-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .experience-title {
          flex: 1;
        }

        .company-name {
          font-size: 1.5rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.5rem;
        }

        .role-title {
          font-size: 1.1rem;
          color: #ff6844;
          font-weight: 600;
        }

        .experience-meta {
          text-align: right;
        }

        .period {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 0.25rem;
        }

        .location {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.4);
        }

        .experience-description {
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 1.5rem;
          line-height: 1.7;
        }

        .achievements {
          list-style: none;
          margin-bottom: 2rem;
        }

        .achievements li {
          padding-left: 2rem;
          margin-bottom: 1rem;
          color: rgba(255, 255, 255, 0.7);
          position: relative;
          line-height: 1.6;
        }

        .achievements li::before {
          content: '▹';
          position: absolute;
          left: 0;
          color: #ff6844;
          font-size: 1.2rem;
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .tech-tag {
          padding: 0.5rem 1rem;
          background: rgba(255, 68, 68, 0.1);
          border: 1px solid rgba(255, 68, 68, 0.2);
          border-radius: 6px;
          font-size: 0.85rem;
          color: #ff8844;
          font-weight: 500;
        }

        /* Freelance Projects */
        .project-amount {
          display: inline-block;
          padding: 0.5rem 1rem;
          background: rgba(68, 255, 188, 0.1);
          border: 1px solid rgba(68, 255, 188, 0.2);
          border-radius: 6px;
          color: #44ffbc;
          font-weight: 600;
          margin-top: 0.5rem;
        }

        .deliverables {
          list-style: none;
          margin-bottom: 1.5rem;
        }

        .deliverables li {
          padding-left: 2rem;
          margin-bottom: 0.75rem;
          color: rgba(255, 255, 255, 0.7);
          position: relative;
          line-height: 1.6;
        }

        .deliverables li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #44ffbc;
          font-weight: bold;
        }

        .project-outcome {
          padding: 1.5rem;
          background: rgba(68, 255, 188, 0.05);
          border-left: 3px solid #44ffbc;
          border-radius: 8px;
          margin-top: 1.5rem;
          font-style: italic;
          color: rgba(255, 255, 255, 0.8);
        }

        /* Skills Section */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .skill-category {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 2.5rem;
          transition: all 0.3s ease;
        }

        .skill-category:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 68, 68, 0.3);
          transform: translateY(-5px);
        }

        .skill-category-title {
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: #ff6844;
        }

        .skill-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .skill-item {
          padding: 0.6rem 1.2rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.8);
          transition: all 0.3s ease;
        }

        .skill-item:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.2);
          color: #ffffff;
        }

        /* Projects Grid */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2.5rem;
        }

        .project-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.4s ease;
        }

        .project-card:hover {
          transform: translateY(-10px);
          border-color: rgba(255, 68, 68, 0.3);
          box-shadow: 0 20px 60px rgba(255, 68, 68, 0.2);
        }

        .project-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
          opacity: 0.8;
          transition: all 0.4s ease;
        }

        .project-card:hover .project-image {
          opacity: 1;
          transform: scale(1.05);
        }

        .project-content {
          padding: 2rem;
        }

        .project-title {
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #ffffff;
        }

        .project-description {
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .project-links {
          display: flex;
          gap: 1rem;
          margin-top: 1.5rem;
        }

        .project-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.2rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 6px;
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }

        .project-link:hover {
          background: rgba(255, 68, 68, 0.1);
          border-color: rgba(255, 68, 68, 0.3);
          color: #ff6844;
        }

        /* Contact Section */
        .contact-content {
          text-align: center;
          max-width: 700px;
          margin: 0 auto;
        }

        .contact-text {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 3rem;
          line-height: 1.8;
        }

        .contact-methods {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .contact-method {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          padding: 2rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          transition: all 0.3s ease;
          text-decoration: none;
          color: inherit;
          min-width: 150px;
        }

        .contact-method:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 68, 68, 0.3);
          transform: translateY(-5px);
        }

        .contact-icon {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #ff4444, #ff6844);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .contact-label {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.5);
        }

        /* Footer */
        footer {
          padding: 3rem;
          text-align: center;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(10, 10, 10, 0.8);
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .social-link {
          width: 44px;
          height: 44px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: rgba(255, 68, 68, 0.1);
          border-color: rgba(255, 68, 68, 0.3);
          color: #ff6844;
          transform: translateY(-3px);
        }

        .footer-text {
          color: rgba(255, 255, 255, 0.4);
          font-size: 0.9rem;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          nav {
            padding: 1rem 1.5rem;
          }

          .nav-links {
            display: none;
          }

          section {
            padding: 4rem 1.5rem;
          }

          .hero-section {
            padding: 0 1.5rem;
          }

          .about-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .experience-card {
            padding: 2rem;
          }

          .experience-header {
            flex-direction: column;
          }

          .experience-meta {
            text-align: left;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }

          .contact-methods {
            flex-direction: column;
          }
        }
      `}</style>

      {/* Custom cursor glow */}
      <div
        className="cursor-glow"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      />

      {/* Navigation */}
      <nav>
        <div className="logo">Portfolio</div>
        <ul className="nav-links">
          <li><a href="#hero" className={activeSection === 'hero' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>Home</a></li>
          <li><a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
          <li><a href="#experience" className={activeSection === 'experience' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}>Experience</a></li>
          <li><a href="#freelance" className={activeSection === 'freelance' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollToSection('freelance'); }}>Freelance</a></li>
          <li><a href="#skills" className={activeSection === 'skills' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>Skills</a></li>
          <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a></li>
          <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-content" style={{ marginTop: "90px" }}>
          <div className="hero-label">FULL STACK DEVELOPER</div>
          <h1 className="hero-title">Crafting Digital Experiences</h1>
          <p className="hero-subtitle">Building scalable applications with modern technologies</p>
          <p className="hero-description">
            Senior Full Stack Developer with 2+ years of experience building enterprise applications
            and delivering high-impact freelance projects. Specialized in React, React native, Node.js, Nest Js, MYSQL, PostgreSql, Prisma Orm, CI/CD , Github, Gitlab and cloud architecture.
          </p>
          <div className="hero-cta">
            <button className="btn-primary" onClick={() => scrollToSection('contact')}>
              Get In Touch
              <Mail size={18} />
            </button>
            <button className="btn-secondary" onClick={() => scrollToSection('projects')}>
              View Projects
              <Code2 size={18} />
            </button>
          </div>
        </div>
        <div className="scroll-indicator">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <div className="content-wrapper">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Passionate about creating innovative solutions</p>

          <div className="about-grid">
            <div className="about-text">
              <p>
                I'm a Full Stack Developer with a proven track record of delivering
                high-quality web applications for both corporate clients and freelance projects.
                My expertise spans across modern frontend frameworks, robust backend systems,
                and cloud infrastructure.
              </p>
              <p>
                Throughout my career, I've led development teams, architected scalable solutions,
                and mentored junior developers. I'm passionate about writing clean, maintainable
                code and staying current with the latest industry trends and best practices.
              </p>
              <p>
                When I'm not coding, I contribute to open-source projects, write technical articles,
                and explore new technologies to continuously improve my craft.
              </p>
            </div>

            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-number">2+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">20+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">15+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">100K+</div>
                <div className="stat-label">Users Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full-Time Experience Section */}
      <section id="experience">
        <div className="content-wrapper">
          <h2 className="section-title">Full-Time Experience</h2>
          <p className="section-subtitle">My professional journey in corporate environments</p>

          <div className="experience-list">
            {fullTimeExperience.map((exp, index) => (
              <div key={index} className="experience-card">
                <div className="experience-header">
                  <div className="experience-title">
                    <h3 className="company-name">
                      <Briefcase size={24} style={{ display: 'inline', marginRight: '0.5rem', verticalAlign: 'middle', color: '#ff6844' }} />
                      {exp.company}
                    </h3>
                    <div className="role-title">{exp.role}</div>
                  </div>
                  <div className="experience-meta">
                    <div className="period">{exp.period}</div>
                    <div className="location">{exp.location}</div>
                  </div>
                </div>

                <p className="experience-description">{exp.description}</p>

                <ul className="achievements">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>

                <div className="tech-tags">
                  {exp.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Freelance Projects Section */}
      <section id="freelance">
        <div className="content-wrapper">
          <h2 className="section-title">Freelance Projects</h2>
          <p className="section-subtitle">Delivering custom solutions for diverse clients</p>

          <div className="experience-list">
            {freelanceProjects.map((project, index) => (
              <div key={index} className="experience-card">
                <div className="experience-header">
                  <div className="experience-title">
                    <h3 className="company-name">
                      <Award size={24} style={{ display: 'inline', marginRight: '0.5rem', verticalAlign: 'middle', color: '#44ffbc' }} />
                      {project.client}
                    </h3>
                    <div className="role-title">{project.project}</div>
                    <span className="project-amount">{project.budget}</span>
                  </div>
                  <div className="experience-meta">
                    <div className="period">{project.period}</div>
                  </div>
                </div>

                <p className="experience-description">{project.description}</p>

                <ul className="deliverables">
                  {project.deliverables.map((deliverable, i) => (
                    <li key={i}>{deliverable}</li>
                  ))}
                </ul>

                <div className="tech-tags">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="project-outcome">
                  <strong>Outcome:</strong> {project.outcome}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <div className="content-wrapper">
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">Technologies and tools I work with</p>

          <div className="skills-grid">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="skill-category">
                <h3 className="skill-category-title">{category}</h3>
                <div className="skill-list">
                  {skillList.map((skill, i) => (
                    <span key={i} className="skill-item">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <div className="content-wrapper">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Some of my recent work</p>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="tech-tags">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.github} className="project-link">
                      <Github size={16} />
                      Code
                    </a>
                    <a href={project.live} className="project-link">
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="content-wrapper">
          <div className="contact-content">
            <h2 className="section-title">Let's Work Together</h2>
            <p className="contact-text">
              I'm currently available for freelance projects and full-time opportunities.
              Whether you need a complete web application or just want to discuss your ideas,
              I'd love to hear from you.
            </p>

            <div className="contact-methods">
              <a href="mailto:your.sjha23234@gmail.com" className="contact-method">
                <div className="contact-icon">
                  <Mail size={24} color="white" />
                </div>
                <span className="contact-label">Email Me</span>
              </a>
              <a href="https://www.linkedin.com/in/shyam-jha-000298229/" className="contact-method">
                <div className="contact-icon">
                  <Linkedin size={24} color="white" />
                </div>
                <span className="contact-label">LinkedIn</span>
              </a>
              <a href="https://github.com/shyamjha123" className="contact-method">
                <div className="contact-icon">
                  <Github size={24} color="white" />
                </div>
                <span className="contact-label">GitHub</span>
              </a>
            </div>

            <button className="btn-primary" onClick={() => window.location.href = 'mailto:your.sjha23234@gmail.com'}>
              Send Message
              <Mail size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="social-links">
          <a href="https://github.com/shyamjha123" className="social-link">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/shyam-jha-000298229/" className="social-link">
            <Linkedin size={20} />
          </a>
          <a href="mailto:your.sjha23234@gmail.com" className="social-link">
            <Mail size={20} />
          </a>
        </div>
        <p className="footer-text">
          © 2026 shyam jha. Designed & Built with React
        </p>
      </footer>
    </div>
  );
}
