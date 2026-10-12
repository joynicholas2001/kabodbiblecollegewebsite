import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/admin-auth";
import { getSubmissions, deleteSubmission } from "@/lib/admin-data";

export async function GET() {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const list = await getSubmissions();
  return NextResponse.json(list);
}

export async function DELETE(request: Request) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "Missing submission id." }, { status: 400 });
  }

  const deleted = await deleteSubmission(id);
  if (!deleted) {
    return NextResponse.json({ error: "Submission not found." }, { status: 404 });
  }

  return NextResponse.json({ success: true });
}
