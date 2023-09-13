import todoModel from "@/Model/TodoModel";
import configDB from "@/helpers/DBconfig";
import { NextRequest, NextResponse } from "next/server";

configDB();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { id } = reqBody;

    await todoModel.findOneAndDelete({ _id: id });

    return NextResponse.json({
      status: true,
      msg: "todo deleted successfully",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: false, msg: "error while deleting" });
  }
}
