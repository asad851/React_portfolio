import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";
export async function GET() {
  try {
    // Absolute path to the resume inside public/
    const filePath = path.join(process.cwd(), "public", "asad_siddiqui.pdf");
  console.log(filePath)
    // Read file as a Buffer
    const fileBuffer = await readFile(filePath);

    // Return as a downloadable response
    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="Asad_Ahmed_Siddiqui_Resume.pdf"',
      },
    });
  } catch (error) {
    console.error("Resume download error:", error);
    return NextResponse.json(
      { error: "Failed to download resume. Please try again later." },
      { status: 500 }
    );
  }
}