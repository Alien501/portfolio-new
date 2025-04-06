import Background from '@/components/background/Background';
import './style.css';
import HeroSection from '@/sections/HeroSection';
import Card from '@/components/card/Card';
import Techstack from '@/sections/TechStack';
import Experience from '@/sections/Experience';
import Contact from '@/sections/Contact';
import Education from '@/sections/Education';
import Resume from '@/sections/Resume';
import Social from '@/sections/Social';
import ProjectsSection from '@/sections/Projects';
import About from '@/sections/About';

export default function Home() {
  return (
    <div className="container h-screen overflow-hidden relative z-10 select-none">
      <Background />
      <div className="hero-section">
        <HeroSection />
      </div>
      <div className="techstack-section">
        <Card
          title='Tech Stack'
          child={<Techstack />}
        />
      </div>
      <div className="experience-section">
        <Card
          title='Experience'
          child={<Experience />}
        />
      </div>
      <div className="project-section">
        <Card
          title='Projects'
          child={<ProjectsSection />}
        />
      </div>
      <div className="mid-split">
        <div className="resume-section">
          <Card
            title='Resume'
            child={<Resume />}
          />
        </div>
        <div className="social-section">
          <Card
            title='Socials'
            child={<Social />}
          />
        </div>
      </div>
      <div className="contact-section">
        <Card
          title='Contact Me'
          child={<Contact />}
        />
      </div>
      <div className="about-section">
        <Card
          title='About'
          child={<About />}
        />
      </div>
      <div className="education-section">
        <Card
          title='Education'
          child={<Education />}
        />
      </div>
    </div>
  );
}