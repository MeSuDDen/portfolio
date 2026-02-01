import {useRouter} from "next/router";

export default function Project() {
    const router = useRouter();
    return (
        <div>Проект {router.query.slug}</div>
    )
}