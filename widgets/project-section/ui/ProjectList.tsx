import {ProjectCard} from "@/entities/project";
import {Project} from "@/entities/project/model/types";

interface ProjectsProps {
    projects: Project[];
}

export function ProjectList({projects}: ProjectsProps) {
    return (
        <div className={'grid gap-6 md:grid-cols-2 lg:grid-cols-3'}>
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project}/>
            ))}
        </div>
    )
}