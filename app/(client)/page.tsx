import {HeroSection} from "@/widgets/hero-section";
import {SkillsBlock} from "@/widgets/skills-block";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
        <HeroSection/>
        <SkillsBlock/>
    </div>
  );
}
