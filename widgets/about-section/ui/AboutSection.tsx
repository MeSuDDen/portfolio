import {SectionTitle} from "@/shared/ui/section-title";
import {Button} from "@/shared/ui/button";
import Link from "next/link";
import {ContactButton} from "@/shared/ui/contact-button";
import {FaTelegramPlane} from "react-icons/fa";
import {FaArrowRightLong, FaGithub} from "react-icons/fa6";
import {IoMdMail} from "react-icons/io";

export function AboutSection() {
    return (
        <section className={'py-16 relative'}>
            <div className={'absolute inset-0 overflow-hidden pointer-events-none'}></div>
            <div className={'container mx-auto px-4 lg:px-8'}>
                <div className={'flex items-center justify-between mb-8'}>
                    <div className={'flex items-center gap-3'}>
                        <SectionTitle title={'Обо мне'}/>
                    </div>

                    <Button asChild variant="link">
                        <Link href="/about">
                            Подробнее
                            <FaArrowRightLong />
                        </Link>
                    </Button>
                </div>
                <div className={'flex flex-col md:flex-row gap-8 items-center md:items-start'}>
                    <div className={'flex-shrink-0'}>
                        <div className={'w-32 h-32 rounded-full border-4 border-primary p-1'}>
                            <div className={'w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden'}>
                                <span className={'text-4xl'}>👨‍💻</span>
                            </div>
                        </div>
                    </div>
                    <div className={'flex-1 text-center md:text-left'}>
                        <h3 className={'text-xl font-bold text-foreground mb-2'}>Алексей Коростов</h3>
                        <p className={'text-primary font-medium mb-4'}></p>
                        <p className={'text-muted-foreground leading-relaxed mb-4 line-clamp-3'}>I&#39;m a passionate web developer with over 5 years of experience creating beautiful, functional websites and web applications. I specialize in React, Next.js, and modern frontend technologies. My goal is to help businesses establish a strong online presence through clean code and thoughtful design.</p>
                        <div className={'flex gap-3 justify-center md:justify-start'}>
                            <ContactButton href={'https://github.com/MeSuDDen'}>
                                <FaGithub />
                            </ContactButton>
                            <ContactButton href={'https://t.me/SuDDen322'}>
                                <FaTelegramPlane />
                            </ContactButton>
                            <ContactButton href={'mailto:workdev.sudden@gmail.com'}>
                                <IoMdMail />
                            </ContactButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}