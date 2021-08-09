export interface Post {
    id?: number,
    category: {
        id: number,
        name: string
    } | string | null,
    title: string,
    content: string,
    slug: string,
    author: {
        id: number,
        email: string,
        pseudo: string,
        role: string
    } | string,
    comments?: {
        id: number,
        content: string,
        author_id: {
            id: number,
            pseudo: string
        }
    }[]
}