"use client";
import CoinCard from "@/components/CoinCard/CoinCard";
import CoinCardList from "@/components/CoinCardList";
import { useMemo, useState } from "react";
import CoinLabel from "@/components/CoinLabel/CoinLabel";
import CoinLabelBox from "@/components/CoinLabelBox/CoinLabelBox";
import useCoinList, { Coin } from "@/queries/useCoinList";
import { useRouter } from "next/navigation";
import MoreButton from "@/components/MoreButton/MoreButton";
import classNames from "classnames";
import { DummyCountUp } from "@/components/CountUp";

type SelectedItem = Record<string, boolean>;

export default function Home({ initialData }: { initialData: Coin[] }) {
  const { data, requestNextPage, hasNextPage, total, current } =
    useCoinList(initialData);
  const router = useRouter();
  const [selected, setSelected] = useState({} as SelectedItem);
  const selectedCoin = useMemo(
    () => Object.keys(selected).filter((name) => selected[name]),
    [selected]
  );

  const onClick = (name: string) => {
    if (selected[name]) {
      setSelected((prev) => ({ ...prev, [name]: false }));
      return;
    }
    setSelected((prev) => ({ ...prev, [name]: true }));
    return;
  };

  const onClickStart = () => {
    router.replace(`/result?selected=${selectedCoin.join(",")}`);
  };

  return (
    <>
      <div className="px-5">
        <CoinCardList>
          {data.map(({ id, name, logo, symbol }) => (
            <CoinCard
              key={id}
              name={name}
              shortName={symbol}
              logoSrc={logo}
              isChecked={selected[symbol]}
              onClick={onClick}
            />
          ))}
        </CoinCardList>
        <div
          className={classNames("w-max mt-6 mx-auto", {
            invisible: !hasNextPage,
          })}
        >
          <MoreButton
            current={current}
            total={total}
            onClick={requestNextPage}
          />
        </div>
      </div>
      {selectedCoin.length ? (
        <>
          <div className="mt-10">
            <CoinLabelBox>
              {selectedCoin.map((n) => (
                <CoinLabel key={n} name={n} removable onClickDel={onClick} />
              ))}
            </CoinLabelBox>
          </div>
          <div className="mt-8 p-6">
            <DummyCountUp onClick={onClickStart} />
          </div>
        </>
      ) : null}
    </>
  );
}
