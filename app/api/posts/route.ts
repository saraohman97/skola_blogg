import prismadb from '@/libs/prismadb'
import { NextResponse } from "next/server";
import getCurrentUser from "@/actions/getCurrentUser";

export async function POST(
    request: Request
) {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return NextResponse.error();
    }

    const body = await request.json();

    const {
        title,
        text,
        imageSrc,
        category
    } = body;

    Object.keys(body).forEach((value) => {
        if (!body[value]) {
            NextResponse.error();
        }
    })

    const post = await prismadb.post.create({
        data: {
            title,
            text,
            imageSrc,
            category,
            userId: currentUser.id
        }
    })

    return NextResponse.json(post)
}