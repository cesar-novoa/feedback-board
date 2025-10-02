import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { Prisma } from "@prisma/client";

export async function POST(req: Request) {
  const { feedbackId, fingerprint } = await req.json();
  if (!feedbackId || !fingerprint)
    return NextResponse.json({ error: "Bad request" }, { status: 400 });

  try {
    await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
      await tx.vote.create({ data: { feedbackId, fingerprint } });
      await tx.feedback.update({
        where: { id: feedbackId },
        data: { votes: { increment: 1 } },
      });
    });
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json(
      { ok: false, reason: "already_voted" },
      { status: 409 }
    );
  }
}
