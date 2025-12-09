import pool from "../../../../lib/db";

export async function POST(req: Request) {
  const { email, password } = await req.json();
  console.log("Received:", email, password);

  try {
    console.log("Connecting to DB...");
    const result = await pool.query(
      "SELECT * FROM users WHERE email = $1 AND password = $2",
      [email, password]
    );
    console.log("DB response:", result.rows);

    if (result.rows.length > 0) {
      return Response.json({ message: "Login Success" }, { status: 200 });
    } else {
      return Response.json({ message: "Invalid Email or Password" }, { status: 401 });
    }
  } catch (error) {
    console.error("DATABASE ERROR:", error);
    return Response.json({ message: "Server Error" }, { status: 500 });
  }
}
