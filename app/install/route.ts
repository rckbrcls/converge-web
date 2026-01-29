import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import { join } from "path";

export async function GET() {
  try {
    const filePath = join(process.cwd(), "public", "install.sh");
    const fileContent = await readFile(filePath, "utf-8");

    return new NextResponse(fileContent, {
      headers: {
        "Content-Type": "text/x-shellscript",
        "Content-Disposition": "inline; filename=install.sh",
      },
    });
  } catch (error) {
    console.error("Error reading install.sh:", error);
    return NextResponse.json(
      { error: "Failed to read install script" },
      { status: 500 }
    );
  }
}
