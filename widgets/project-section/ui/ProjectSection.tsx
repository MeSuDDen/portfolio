import {ProjectList} from "@/widgets/project-section/ui/ProjectList";
import {OpenProjectButton} from "@/features/project/open";
import {SectionTitle} from "@/shared/ui/section-title";
import {getProjects} from "@/entities/project/api/getProjects";

export async function ProjectSection() {
    const projects = await getProjects()

    return (
        <section className={'py-20 relative'}>
            <div className={'absolute inset-0 overflow-hidden pointer-events-none'}></div>
            <div className={'container mx-auto px-4 lg:px-8'}>
                <div className={'flex items-center justify-between mb-12'}>
                    <div className={'flex items-center gap-3'}>
                        <SectionTitle title={'Проекты'}/>
                    </div>v
                    <OpenProjectButton href={'/projects'}/>
                </div>
                <ProjectList projects={projects}/>
            </div>
        </section>
    )
}