import todoModel from "@/Model/TodoModel";
import configDB from "@/helpers/DBconfig";
import { NextRequest, NextResponse } from "next/server";

configDB();
export async function POST(request: NextRequest) {
  try {
    const req = await request.json();

    const { name } = req;
    console.log(name);
    const todo = await new todoModel({ name });
    await todo.save();

    return NextResponse.json({ status: true, msg: "todo added" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: false, msg: "todo failed" });
  }
}
