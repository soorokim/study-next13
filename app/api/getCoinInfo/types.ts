export interface CMC_QuotesLatestV2Response {
  data: Record<
    string,
    {
      id: number;
      name: string;
      symbol: string;
      slug: number;
      is_active: number;
      is_fiat: number;
      circulating_supply: number;
      total_supply: number;
      max_supply: number;
      date_added: string;
      num_market_pairs: number;
      cmc_rank: number;
      last_updated: string;
      tags: string[];
      // platform: null;
      // self_reported_circulating_supply: null;
      // self_reported_market_cap: null;
      quote: Record<
        string,
        {
          price: number;
          volume_24h: number;
          volume_change_24h: number;
          percent_change_1h: number;
          percent_change_24h: number;
          percent_change_7d: number;
          market_cap: number;
          market_cap_dominance: number;
          fully_diluted_market_cap: number;
          last_updated: string;
        }
      >;
    }[]
  >;
  status: {
    timestamp: string;
    error_code: number;
    error_message: string;
    elapsed: number;
    credit_count: number;
  };
}
