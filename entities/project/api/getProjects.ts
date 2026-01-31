import { Project } from '../model/types'

export async function getProjects(): Promise<Project[]> {
    const res = await fetch(process.env.SITE_URL + 'api/projects')
    return res.json()
}