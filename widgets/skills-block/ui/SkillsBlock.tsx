import {skills} from "@/widgets/skills-block/config/skills";
import {SkillCard} from "@/shared/ui/skill-card";
import {SectionTitle} from "@/shared/ui/section-title";

export function SkillsBlock() {
    return (
        <section className={'py-20 relative'}>
            <div className={'absolute inset-0 overflow-hidden pointer-events-none'}>
                <div className={'absolute top-10 right-[10%] w-4 h-4 border border-primary/20'}></div>
                <div className={'absolute bottom-20 left-[5%] w-5 h-5 border border-primary/15 rotate-12'}></div>
            </div>
            <div className={'container mx-auto px-4 lg:px-8'}>
                <div className={'flex items-center gap-3 mb-12'}>
                    <SectionTitle title={'Мои навыки'}/>
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