import axios from "axios";
import { Coin } from "./types";

const getCoinList = async ({ pageParam = 0 }: { pageParam?: number }) => {
  try {
    const res = await axios.get<Coin[]>(`/api/getCoinList?page=${pageParam}`);

    return res.data;
  } catch (e) {
    console.error(e);
    return [] as Coin[];
  }
};

export default getCoinList;
