import {Navigation} from "@/features/navigation";
import {Logo} from "@/shared/ui/logo";

export function Footer() {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer className={'border-t border-border/50 py-8'}>
            <div className={'container mx-auto px-4 lg:px-8'}>
                <div className={'flex flex-col items-center justify-between gap-4 md:flex-row'}>
                    <Logo size={'sm'}/>
                    <Navigation/>
                    <p className={'text-sm text-muted-foreground'}>© {year} Aleksey Korostov</p>
                </div>

            </div>
        </footer>
    )
}