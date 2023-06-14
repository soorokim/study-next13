'use client';
import CoinInfoItem from '@/components/CoinInfoItem/CoinInfoItem';
import CoinInfoTable from '@/components/CoinInfoTable/CoinInfoTable';
import CoinLabel from '@/components/CoinLabel';
import CoinLabelBox from '@/components/CoinLabelBox';
import CountUp from '@/components/CountUp';
import MoreButton from '@/components/MoreButton';
import Typography from '@/components/Typography/Typography';
import useCoinInfo from '@/queries/useCoinInfo';
import { GetCoinInfoResponse } from '@/services/types';
import classNames from 'classnames';
import { useRouter } from 'next/navigation';

export default function Result({
  symbols,
  initialData,
}: {
  symbols: string;
  initialData: GetCoinInfoResponse;
}) {
  const router = useRouter();
  const selectedCoin = symbols.split(',') ?? [];
  const { data, requestTime, responseTime, hasMore, showMore, current, total } =
    useCoinInfo(symbols, initialData);

  const onClickReset = () => {
    router.push('/');
  };

  return (
    <>
      <CoinLabelBox>
        {selectedCoin.map((n) => (
          <CoinLabel key={n} name={n} />
        ))}
      </CoinLabelBox>
      <div className="px-6 pt-10">
        <CountUp onClickReset={onClickReset} isStart />
        <div className="flex justify-between p-4 bg-purple5 mt-8">
          <div>
            <Typography size={14} weight="500" color="gray70">
              Request Time
            </Typography>
            <Typography size={14} weight="500" color="gray70">
              Response Time
            </Typography>
          </div>
          <div>
            <Typography size={14} weight="500" color="gray70">
              {requestTime}
            </Typography>
            <Typography size={14} weight="500" color="gray70">
              {responseTime}
            </Typography>
          </div>
        </div>
        <div className="mt-6">
          <CoinInfoTable>
            {data.map(
              ({
                id,
                logo,
                symbol,
                price,
                percentChange24H,
                percentChange7D,
              }) => (
                <CoinInfoItem
                  key={id}
                  logo={logo}
                  symbol={symbol}
                  price={price}
                  percentChange24H={percentChange24H}
                  percentChange7D={percentChange7D}
                />
              ),
            )}
          </CoinInfoTable>
        </div>

        <div
          className={classNames('w-max mt-6 mx-auto', {
            invisible: !hasMore,
          })}
        >
          <MoreButton current={current + 1} total={total} onClick={showMore} />
        </div>
      </div>
    </>
  );
}
