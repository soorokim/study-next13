import { NextResponse } from "next/server";
import queryCoinList from "./queryCoinList";
import coinListAdapter from "@/adapters/coinListAdapter";

const LIMIT = 15;
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") ?? "0");
  const start = page * LIMIT + 1;

  const response = await queryCoinList(start, LIMIT);

  return NextResponse.json(coinListAdapter(response.data));
}
