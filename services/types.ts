export type Coin = {
  id: number;
  name: string;
  symbol: string;
  logo: string;
};

export interface GetCoinListResponse {
  data: Coin[];
}
// type은 Services에 있는게 맞을것 같음
export type CoinInfo = {
  id: string;
  logo: string;
  symbol: string;
  price: number;
  percentChange7D: number;
  percentChange24H: number;
};

export type GetCoinInfoResponse = {
  data: CoinInfo[];
  responseTime: string;
};
