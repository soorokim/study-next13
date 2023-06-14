import { CMC_QuotesLatestV2Response } from "@/app/api/getCoinInfo/types";
import { GetCoinInfoResponse } from "@/services/types";

const coinInfoAdapter = (
  data: CMC_QuotesLatestV2Response,
  symbols: string
): GetCoinInfoResponse => {
  const symbolList = symbols.split(",") as any[];

  return {
    data: symbolList.reduce((prev, symbol) => {
      const {
        id,
        quote: {
          KRW: {
            price,
            percent_change_7d: percentChange7D,
            percent_change_24h: percentChange24H,
          },
        },
      } = data.data[symbol][0];

      return [
        ...prev,
        {
          id,
          symbol,
          price,
          percentChange7D,
          percentChange24H,
          logo: `https://s2.coinmarketcap.com/static/img/coins/64x64/${id}.png `,
        },
      ];
    }, []),
    responseTime: data.status.timestamp,
  };
};
export default coinInfoAdapter;
