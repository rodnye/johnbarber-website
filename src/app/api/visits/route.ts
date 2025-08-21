import { getVisitsCount, getVisitsWithFakeCount } from "@/services/visits";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const showReal = searchParams.get("real") === "true";

    if (showReal) {
      return NextResponse.json({
        message: "Success",
        visits: await getVisitsCount(),
        type: "real",
      });
    } else {
      return NextResponse.json({
        message: "Success",
        visits: await getVisitsWithFakeCount(),
        type: "enhanced",
      });
    }
  } catch (_) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
