import Typography from "../Typography/Typography";
import { CoinInfoItemProps } from "./types";

const CoinInfoItem = ({
  logo,
  symbol,
  price,
  percentChange24H,
  percentChange7D,
}: CoinInfoItemProps) => {
  return (
    <tr className="border-y border-gray10">
      <th className="text-start py-4">
        <img
          src={logo}
          alt={`${symbol} logo`}
          className="inline w-[24px] max-w-none"
        />
        <Typography
          className="ml-2"
          size={14}
          weight="500"
          color="gray90"
          inline
        >
          {symbol}
        </Typography>
      </th>

      <td className="text-end">
        <Typography
          className="justify-items-end"
          size={14}
          weight="500"
          color="gray90"
          inline
        >
          {price.toLocaleString("ko-KR", {
            minimumFractionDigits: 2,
            style: "currency",
            currency: "KRW",
          })}
        </Typography>
      </td>

      <td className="text-end">
        <Typography
          className=""
          size={14}
          weight="500"
          color={percentChange24H > 0 ? "green100" : "red100"}
          inline
        >
          {percentChange24H.toFixed(2)}%
        </Typography>
      </td>

      <td className="text-end">
        <Typography
          className=""
          size={14}
          weight="500"
          color={percentChange7D > 0 ? "green100" : "red100"}
          inline
        >
          {percentChange7D.toFixed(2)}%
        </Typography>
      </td>
    </tr>
  );
};

export default CoinInfoItem;
