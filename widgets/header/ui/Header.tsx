import {Logo} from "@/shared/ui/logo";
import {Navigation} from "@/features/navigation";

export function Header() {
    return (
        <header className={'fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/30'}>
            <div className={'container mx-auto flex h-16 items-center justify-between px-4 md:px-6 lg:h-20'}>
            <Logo/>
            <Navigation/>
            </div>
        </header>
    )
}