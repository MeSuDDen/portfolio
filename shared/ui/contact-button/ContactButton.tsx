import Link from "next/link";

interface Props {
    href: string;
    active?: boolean
    children: React.ReactNode;
}

export function ContactButton({ children, active = true, href }: Props) {
    if (!active) {
        return (
            <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                {children}
            </div>
        )
    }

    return (
        <Link
            href={href}
            target={'_blank'}
            className="w-9 h-9 rounded-full border border-border bg-card flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors"
        >
            {children}
        </Link>
    )
}
