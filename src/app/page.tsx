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
import { PersonIcon } from '@/components/shared/icons/person';
import { StackIcon } from '@/components/shared/icons/stack';
import { StarIcon } from '@/components/shared/icons/star';
import { EducationIcon } from '@/components/shared/icons/education';
import { FireIcon } from '@/components/shared/icons/fire';
import { RocketIcon } from '@/components/shared/icons/rocket';
import { PenIcon } from '@/components/shared/icons/pen';

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
          icon={<StackIcon />}
        />
      </div>
      <div className="experience-section">
        <Card
          title='Experience'
          child={<Experience />}
          icon={<StarIcon />}
        />
      </div>
      <div className="project-section">
        <Card
          title='Projects'
          child={<ProjectsSection />}
          icon={<RocketIcon />}
        />
      </div>
      <div className="mid-split">
        <div className="resume-section">
          <Card
            title='Resume'
            child={<Resume />}
            icon={<FireIcon />}
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
          icon={<PenIcon />}
        />
      </div>
      <div className="about-section">
        <Card
          title='About'
          child={<About />}
          icon={<PersonIcon />}
        />
      </div>
      <div className="education-section">
        <Card
          title='Education'
          child={<Education />}
          icon={<EducationIcon />}
        />
      </div>
    </div>
  );
}