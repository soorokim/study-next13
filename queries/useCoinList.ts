import getCoinList from '@/services/getCoinList';
import { Coin } from '@/services/types';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useState } from 'react';

// type은 Services에 있는게 맞을것 같음

const MAX_CONTENTS_LEN = 100;

const useCoinList = (initialData: Coin[]) => {
  const [current, setCurrent] = useState(1);
  const total = Math.ceil(100 / 15);
  const { data, fetchNextPage, isFetching } = useInfiniteQuery({
    queryKey: ['coinList'],
    queryFn: getCoinList,
    getNextPageParam: (lastPage, pages) => pages.length,
    initialData: { pages: [initialData], pageParams: [0] },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    cacheTime: 60000,
  });

  const coinList = (((data?.pages.flat().length ?? 0) > MAX_CONTENTS_LEN
    ? data?.pages.flat().slice(0, MAX_CONTENTS_LEN)
    : data?.pages.flat()) ?? []) as Coin[];

  const requestNextPage = () => {
    if (!isFetching) {
      setCurrent((prev) => prev + 1);
      if ((data?.pages.length ?? 0) === current) {
        console.log(data?.pages.length === current);
        fetchNextPage();
      }
    }
  };

  return {
    data: coinList.slice(
      0,
      current * 15 < MAX_CONTENTS_LEN ? current * 15 : MAX_CONTENTS_LEN,
    ),
    hasNextPage: current < total,
    requestNextPage,
    current,
    total,
  };
};

export default useCoinList;
