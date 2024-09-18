import prismadb from '@/libs/prismadb';

export default async function getPosts() {
    try {
        const posts = await prismadb.post.findMany({
            orderBy: {
                createdAt: "desc"
            }
        })

        return posts;
    } catch (error: any) {
        throw new Error(error);
    }
}