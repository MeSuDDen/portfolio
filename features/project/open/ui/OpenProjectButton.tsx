import {Button} from "@/shared/ui/button";
import Link from "next/link";
import {ArrowBigRight} from "lucide-react";

export function OpenProjectButton({ href }: { href: string }) {
    return (
        <Button asChild variant={'link'}>
            <Link href={href}>
                Посмотреть все проекты
                <ArrowBigRight/>
            </Link>
        </Button>
    )
}
