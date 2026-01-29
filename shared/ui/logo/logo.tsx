import Link from "next/link";

export function Logo() {
    return (
        <Link href={'/'}>
            <span className={'text-primary'}>&lt;/ </span>
            <span className={'text-foreground font-semibold'}>Алексей Коростов</span>
            <span className={'text-primary'}> &gt;</span>
        </Link>
    )
}