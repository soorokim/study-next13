import { CMC_ListingsLatestResponse } from '@/app/api/getCoinList/types';
import { Coin } from '@/services/types';

const coinListAdapter = (data: CMC_ListingsLatestResponse): Coin[] =>
  data.data.reduce((prev, { id, name, symbol }) => {
    return [
      ...prev,
      {
        id,
        name,
        symbol,
        logo: `https://s2.coinmarketcap.com/static/img/coins/64x64/${id}.png `,
      },
    ];
  }, [] as Coin[]);
export default coinListAdapter;
