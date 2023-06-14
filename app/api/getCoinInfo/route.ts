import { NextResponse } from "next/server";
import queryCoinInfo from "@/app/api/getCoinInfo/queryCoinInfo";
import coinInfoAdapter from "@/adapters/coinInfoAdapter";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const symbols = searchParams.get("symbols") ?? "";

  const response = await queryCoinInfo(symbols);

  return NextResponse.json(coinInfoAdapter(response.data, symbols));
}
