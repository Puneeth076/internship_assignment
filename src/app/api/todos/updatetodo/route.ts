import todoModel from "@/Model/TodoModel";
import configDB from "@/helpers/DBconfig";
import { NextRequest, NextResponse } from "next/server";

configDB();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { id, name } = reqBody;

    const res = await todoModel.findOneAndUpdate(
      { _id: id },
      { name },
      { new: true }
    );
    return NextResponse.json({ res });
  } catch (error) {
    console.log(error);
  }
}
