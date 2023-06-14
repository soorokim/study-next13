import getCoinInfo from '@/services/getCoinInfo';
import { GetCoinInfoResponse } from '@/services/types';
import { makeTimestampNow } from '@/utils/dateUtil';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

const useCoinInfo = (symbols = '', initialData: GetCoinInfoResponse) => {
  const [cursor, setCursor] = useState(0);
  const [requestTime, setRequestTime] = useState('');
  const [responseTime, setResponseTime] = useState('');
  const { data, isFetching } = useQuery({
    queryKey: ['coinInfo', symbols],
    queryFn: getCoinInfo,
    enabled: symbols.length !== 0,
    refetchInterval: 5000,
    refetchOnWindowFocus: false,
    initialData,
  });

  useEffect(() => {
    if (isFetching) {
      const now = makeTimestampNow();
      setRequestTime(now);
      setResponseTime('');
    }
  }, [isFetching]);

  useEffect(() => {
    const now = makeTimestampNow();
    setResponseTime(now);
  }, [data?.responseTime]);

  const showMore = () => {
    setCursor((prev) => prev + 1);
  };

  return {
    data: data?.data.slice(0, (cursor + 1) * 15) ?? [],
    responseTime,
    requestTime,
    showMore,
    hasMore: (data?.data.length ?? 0) > (cursor + 1) * 15,
    current: cursor,
    total: Math.ceil((data?.data.length ?? 0) / 15),
  };
};

export default useCoinInfo;
