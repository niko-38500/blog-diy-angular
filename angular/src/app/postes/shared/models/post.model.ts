export interface Post {
    id?: number,
    category?: {
        id: number,
        name: string
    },
    category_id?: string | null,
    title: string,
    content: string,
    slug: string,
    author?: {
        id: number,
        email: string,
        pseudo: string,
        role: string
    },
    author_id?: string | null,
    comments?: {
        id: number,
        content: string,
        author_id: {
            id: number,
            pseudo: string
        }
    }[]
}