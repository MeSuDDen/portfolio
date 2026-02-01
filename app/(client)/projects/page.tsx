import {SectionTitle} from "@/shared/ui/section-title";
import {ProjectList} from "@/widgets/project-section/ui/ProjectList";
import {getProjects} from "@/entities/project/api/getProjects";
import {Project} from "@/entities/project/model/types";

export default async function Projects() {
    let projects: Project[] = []

    try {
        const data = await getProjects()
        projects = Array.isArray(data) ? data : []
    } catch (error) {
        console.error('Failed to load projects', error)
    }
    return (
        <main className={'pt-24 pb-16'}>
            <div className={'container mx-auto px-4 lg:px-8'}>
                <div className={'flex items-center gap-3 mb-12'}>
                    <SectionTitle title={"Проекты"}/>
                </div>
                <ProjectList projects={projects}/>
            </div>
        </main>
    )
}