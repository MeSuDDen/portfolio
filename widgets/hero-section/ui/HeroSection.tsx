import {Button} from "@/shared/ui/button/Button";
import Link from "next/link";

export function HeroSection() {
    return (
        <section className={'relative min-h-screen pt-20 overflow-hidden'}>
            <div className={'absolute inset-0 overflow-hidden pointer-events-none'}></div>
            <div className={'container mx-auto px-4 lg:px-8 py-16 lg:py-24'}>
                <div className={'grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]'}>
                    <div className={'space-y-6'}>
                        <p className={'text-primary font-mono text-sm tracking-wider uppercase'}>Full-Stack Разработчик</p>
                        <h1 className={'text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight'}>Алексей Коростов</h1>
                        <p className={'text-muted-foreground text-lg max-w-lg leading-relaxed'}>Я создаю современные и удобные веб-приложения, которые легко использовать на любых устройствах. Пока я только начинаю путь в разработке, но мои знания позволяют быстро и качественно реализовать ваши идеи.</p>
                        <div>
                            <Button asChild>
                                <Link href="/resume/resume.pdf" download>
                                    Скачать резюме
                                </Link>
                            </Button>
                        </div>
                    </div>
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute top-24 left-[5%] w-3 h-3 border border-primary/20"></div>
                        <div className="absolute top-40 left-[12%] w-5 h-5 border border-primary/15 rotate-12"></div>
                        <div className="absolute top-60 left-[3%] w-4 h-4 border border-primary/25"></div>
                        <div className="absolute bottom-40 left-[8%] w-6 h-6 border border-primary/10 rotate-45"></div>
                        <div className="absolute bottom-60 left-[15%] w-3 h-3 border border-primary/20"></div>
                        <div className="absolute top-32 right-[8%] w-4 h-4 border border-primary/15"></div>
                        <div className="absolute top-52 right-[3%] w-5 h-5 border border-primary/20 rotate-12"></div>
                        <div className="absolute bottom-32 right-[12%] w-3 h-3 border border-primary/25"></div>
                        <div className="absolute bottom-52 right-[5%] w-6 h-6 border border-primary/15 rotate-45"></div>
                        <div className="absolute top-72 right-[18%] w-4 h-4 border border-primary/10"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}