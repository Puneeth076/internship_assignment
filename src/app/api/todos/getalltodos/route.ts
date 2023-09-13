import todoModel from "@/Model/TodoModel";
import configDB from "@/helpers/DBconfig";
import { NextRequest, NextResponse } from "next/server";

configDB();

export async function GET(request: NextRequest) {
  try {
    const todos = await todoModel.find();

    return NextResponse.json({ status: true, todos });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: false, msg: "failed" });
  }
}
