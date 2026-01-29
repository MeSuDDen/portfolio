import {skills} from "@/widgets/skills-block/config/skills";
import {SkillCard} from "@/shared/ui/skill-card";
import {Folder} from "lucide-react";

export function SkillsBlock() {
    return (
        <section className={'py-20 relative'}>
            <div></div>
            <div className={'container mx-auto px-4 lg:px-8'}>
                <div className={'flex items-center gap-3 mb-12'}>
                    <Folder className={'w-5 h-5 text-primary'}/>
                    <h2 className={'text-2xl font-bold text-foreground'}>Навыки</h2>
                </div>
                <div className={'grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4'}>
                    {skills.map(skill => (
                        <SkillCard key={skill.title} title={skill.title} icon={skill.icon}/>
                    ))}
                </div>
            </div>
        </section>
    )
}