import Link from "next/link";
import {Folder} from "lucide-react";
import {Button} from "@/shared/ui/button";
import {Project} from "@/entities/project/model/types";

interface ProjectsCardProps {
    project: Project;
}

export function ProjectCard({project} : ProjectsCardProps) {
    return (
        <Link key={project.id} className={'group block overflow-hidden rounded-lg bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5'} href={project.slug}>
            <div className={'h-1 bg-primary'}></div>
            <div className={'aspect-video overflow-hidden bg-secondary/30 relative'}>
                <div className={'absolute inset-0 flex items-center justify-center'}>
                    <div className={'w-16 h-16 rounded-lg bg-primary/20 flex items-center justify-center'}>
                        <Folder/>
                    </div>
                </div>
                <div className={'absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity'}></div>
            </div>
            <div className={'p-5'}>
                <h3 className={'mb-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors'}>{project.title}</h3>
                <p className={'mb-4 text-sm text-muted-foreground line-clamp-2'}>{project.shortDescription}</p>
                <div className={'flex flex-wrap gap-2 mb-4'}>
                    {project.stack.map((tech, index: number) => (
                        <span key={index} className={'inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&]:hover:bg-accent [a&]:hover:text-accent-foreground border-primary/50 text-primary bg-primary/10 text-xs'}>{tech}</span>
                    ))}
                </div>
                <Button variant={'outline'} className={'w-full'}>
                        Посмотреть проект
                </Button>
            </div>
        </Link>
    )
}