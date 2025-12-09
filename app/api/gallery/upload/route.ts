import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import pool from "@/lib/db"; // DB connection

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const files = formData.getAll("images") as File[];
    const category = formData.get("category") as string;

    const uploadPath = path.join(process.cwd(), "public/uploads", category);
    await mkdir(uploadPath, { recursive: true });

    for (const file of files) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const filename = `${Date.now()}-${file.name}`;
      const finalPath = path.join(uploadPath, filename);

      await writeFile(finalPath, buffer);

      const imageUrl = `/uploads/${category}/${filename}`;
      await pool.query(
        "INSERT INTO gallery (category, image_path) VALUES ($1, $2)",
        [category, imageUrl]
      );
    }

    return NextResponse.json({ message: "Upload completed" }, { status: 200 });

  } catch (error) {
    console.error("UPLOAD ERROR:", error);
    return NextResponse.json({ message: "Upload Failed" }, { status: 500 });
  }
}
