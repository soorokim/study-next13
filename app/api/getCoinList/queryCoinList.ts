import httpClient from "../httpClient";
import { CMC_ListingsLatestResponse } from "./types";

const queryCoinList = (
  start: number | undefined = 1,
  limit: number | undefined = 15
) => {
  return httpClient.get<CMC_ListingsLatestResponse>(
    `/v1/cryptocurrency/listings/latest?start=${start}&limit=${limit}&cryptocurrency_type=coins`
  );
};

export default queryCoinList;
