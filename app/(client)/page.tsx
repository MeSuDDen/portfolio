import {HeroSection} from "@/widgets/hero-section";
import {SkillsBlock} from "@/widgets/skills-block";
import {ProjectSection} from "@/widgets/project-section";
import {AboutSection} from "@/widgets/about-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
        <HeroSection/>
        <SkillsBlock/>
        <ProjectSection/>
        <AboutSection/>
    </div>
  );
}
