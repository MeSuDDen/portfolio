import Image from "next/image";

type Props = {
    title: string
    icon: string
}

export function SkillCard({title, icon}: Props) {
    return (
        <div key={title}
             className={'flex flex-col items-center gap-3 p-5 bg-card rounded-lg border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5 group'}>
            <div className={'transition-transform group-hover:scale-110'}>
                <Image
                    src={icon}
                    alt={title}
                    width={48}
                    height={48}
                />
            </div>
            <span
                className={'text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center uppercase tracking-wide'}>{title}</span>
        </div>
    )
}