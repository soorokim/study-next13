import { CoinCardListProps } from "./types";

const CoinCardList = ({ children }: CoinCardListProps) => {
  return <div className="grid grid-cols-3 gap-4">{children}</div>;
};

export default CoinCardList;
