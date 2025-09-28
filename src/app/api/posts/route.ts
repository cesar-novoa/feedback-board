import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  const posts = await prisma.post.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json(posts);
}

export async function POST(req: Request) {
  const data = await req.json();
  const title = (data?.title ?? "").trim();
  if (!title)
    return NextResponse.json({ error: "Title required" }, { status: 400 });

  const post = await prisma.post.create({
    data: {
      title,
      body: data?.body ?? "",
      category: data?.category ?? "general",
    },
  });
  return NextResponse.json(post, { status: 201 });
}
