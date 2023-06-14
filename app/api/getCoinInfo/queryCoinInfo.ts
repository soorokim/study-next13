import httpClient from "../httpClient";
import { CMC_QuotesLatestV2Response } from "./types";

const queryCoinInfo = async (symbols: string) =>
  await httpClient.get<CMC_QuotesLatestV2Response>(
    `/v2/cryptocurrency/quotes/latest?symbol=${symbols}&convert=KRW`
  );
export default queryCoinInfo;
