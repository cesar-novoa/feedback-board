import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  const feedback = await prisma.feedback.findMany({
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json({ data: feedback });
}

export async function POST(req: Request) {
  const data = await req.json();
  const title = (data?.title ?? "").trim();
  const description = (data?.description ?? "").trim();

  console.log(data);

  if (!title)
    return NextResponse.json({ error: "Title required" }, { status: 400 });
  if (!description)
    return NextResponse.json(
      { error: "Description required" },
      { status: 400 }
    );

  const post = await prisma.feedback.create({
    data: {
      title,
      description,
    },
  });
  return NextResponse.json(post, { status: 201 });
}
