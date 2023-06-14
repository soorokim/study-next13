import axios from "axios";
import { GetCoinInfoResponse } from "./types";

const getCoinInfo = async ({
  queryKey: [, symbols],
}: {
  queryKey: [string, string];
}) => {
  try {
    const res = await axios.get<GetCoinInfoResponse>(
      `/api/getCoinInfo?symbols=${symbols}`
    );

    return res.data;
  } catch (e) {
    console.error(e);
  }
};

export default getCoinInfo;
