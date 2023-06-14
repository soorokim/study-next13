import Result from "@/pages/ResultPage";
import queryCoinInfo from "../api/getCoinInfo/queryCoinInfo";
import coinInfoAdapter from "@/adapters/coinInfoAdapter";
import { GetCoinInfoResponse } from "@/queries/useCoinInfo";

const getInitialData = async (symbols: string) => {
  try {
    const response = await queryCoinInfo(symbols);

    return coinInfoAdapter(response.data, symbols);
  } catch (e) {
    console.error(e);
    return { data: [], responseTime: "" } as GetCoinInfoResponse;
  }
};

export default async function ResultPage({
  searchParams,
}: {
  searchParams: { selected: string };
}) {
  const initialData = await getInitialData(searchParams.selected);
  return <Result initialData={initialData} symbols={searchParams.selected} />;
}
