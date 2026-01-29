import Link from "next/link";

interface NavLink {
    href: string;
    label: string
}

const links: NavLink[] = [
    {
        href: '/',
        label: 'Главная'
    },
    {
        href: '/about',
        label: 'Обо мне'
    },
    {
        href: '/skills',
        label: 'Скилы'
    },
    {
        href: '/projects',
        label: 'Проекты'
    },
    {
        href: '/blog',
        label: 'Блог'
    },
    {
        href: '/contacts',
        label: 'Контакты'
    }
]

export function Navigation() {
    return (
        <nav className={'hidden items-center gap-8 md:flex'}>
            {links.map(link => (
                <Link className={'text-sm font-medium text-muted-foreground hover:text-primary transition-colors'} href={link.href} key={link.href}>
                    {link.label}
                </Link>
            ))}
        </nav>
    )
}