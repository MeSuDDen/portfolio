import {Folder} from "lucide-react";

interface Props {
    title: string,
}

export function SectionTitle({ title }: Props) {
    return (
        <>
            <Folder className={'w-5 h-5 text-primary'}/>
            <h2 className={'text-3xl font-bold text-foreground'}>{title}</h2>
        </>
    )
}