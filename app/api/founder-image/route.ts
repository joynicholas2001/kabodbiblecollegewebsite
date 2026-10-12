import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import { join } from "path";

/**
 * Serves the founder image from app/assets or public.
 * Tries founder.jpg and founder.jpg.jpg (double extension).
 */
async function readFounderImage(): Promise<Buffer> {
  const cwd = process.cwd();
  const pathsToTry = [
    join(cwd, "app", "assets", "founder.jpg.jpg"),
    join(cwd, "app", "assets", "founder.jpg"),
    join(cwd, "public", "founder.jpg"),
    join(cwd, "public", "images", "founder.jpg"),
  ];
  for (const filePath of pathsToTry) {
    try {
      return await readFile(filePath);
    } catch {
      continue;
    }
  }
  throw new Error("Founder image not found (tried founder.jpg and founder.jpg.jpg in public/ and app/assets/)");
}

export async function GET() {
  try {
    const buffer = await readFounderImage();
    return new NextResponse(new Uint8Array(buffer), {
      headers: {
        "Content-Type": "image/jpeg",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch {
    return new NextResponse(null, { status: 404 });
  }
}
