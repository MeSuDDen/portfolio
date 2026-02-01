import {ProjectList} from "@/widgets/project-section/ui/ProjectList";
import {SectionTitle} from "@/shared/ui/section-title";
import {getProjects} from "@/entities/project/api/getProjects";
import {Project} from "@/entities/project/model/types";
import Link from "next/link";
import {Button} from "@/shared/ui/button";
import {FaArrowRightLong} from "react-icons/fa6";

export async function ProjectSection() {
    let projects: Project[] = []

    try {
        const data = await getProjects()
        projects = Array.isArray(data) ? data : []
    } catch (error) {
        console.error('Failed to load projects', error)
    }

    return (
        <section className={'py-16 relative'}>
            <div className={'absolute inset-0 overflow-hidden pointer-events-none'}></div>
            <div className={'container mx-auto px-4 lg:px-8'}>
                <div className={'flex items-center justify-between mb-12'}>
                    <div className={'flex items-center gap-3'}>
                        <SectionTitle title={'Проекты'}/>
                    </div>v
                    <Button asChild variant={'link'}>
                        <Link href={'/projects'}>
                            Посмотреть все проекты
                            <FaArrowRightLong />
                        </Link>
                    </Button>
                </div>
                {projects.length === 0 ? (
                    <p className="text-muted-foreground text-center">
                        Проекты пока недоступны 😔
                    </p>
                ) : (
                    <ProjectList projects={projects} />
                )}
            </div>
        </section>
    )
}