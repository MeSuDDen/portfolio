import Link from "next/link";

interface Props {
    size?: "sm" | "base"
}

export function Logo({ size = "base" }: Props) {

    const textSize = size === "sm" ? "text-sm" : "text-base";

    return (
        <Link href={'/'} className={textSize}>
            <span className={'text-primary'}>&lt;/ </span>
            <span className={'text-foreground font-semibold'}>Алексей Коростов</span>
            <span className={'text-primary'}> &gt;</span>
        </Link>
    )
}