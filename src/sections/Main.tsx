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
import { FireIcon } from '@/components/shared/icons/fire';
import { RocketIcon } from '@/components/shared/icons/rocket';
import { PenIcon } from '@/components/shared/icons/pen';
import { CakeIcon } from '@/components/shared/icons/cake';

export default function Main() {
  return (
    <>
      <div className="hero-section border-dashed border border-1 border-primary-light/20">
        <HeroSection />
      </div>
      <div className="techstack-section h-full">
        <Card title="Tech Stack" child={<Techstack />} icon={<StackIcon />} />
      </div>
      <div className="experience-section border-dashed border-l-1 border-l-primary-light/10">
        <Card title="Experience" child={<Experience />} icon={<StarIcon />} />
      </div>
      <div className="project-section">
        <Card
          title="Projects"
          child={<ProjectsSection />}
          icon={<RocketIcon />}
        />
      </div>
      <div className="mid-split">
        <div className="resume-section">
          <Card title="Resume" child={<Resume />} icon={<FireIcon />} />
        </div>
        <div className="social-section">
          <Card title="Socials" child={<Social />} />
        </div>
      </div>
      <div className="contact-section">
        <Card title="Contact Me" child={<Contact />} icon={<PenIcon />} />
      </div>
      <div className="about-section">
        <Card title="About" child={<About />} icon={<PersonIcon />} />
      </div>
      <div className="education-section border-dashed border-l-1 border-l-primary-light/10">
        <Card title="Hover Me" child={<Education />} icon={<CakeIcon />} />
      </div>
    </>
  );
}
