import Typography from "../Typography";
import { CoinInfoTableProps } from "./types";

const CoinInfoTable = ({ children }: CoinInfoTableProps) => {
  return (
    <table className="w-[100%] border-collapse">
      <thead className="border-y border-gray10">
        <tr>
          <th className="text-start py-2">
            <Typography size={12} weight="500" color="gray50" ko>
              코인
            </Typography>
          </th>
          <th className="text-end">
            <Typography size={12} weight="500" color="gray50" ko>
              가격
            </Typography>
          </th>
          <th className="text-end">
            <Typography size={12} weight="500" color="gray50">
              24H(%)
            </Typography>
          </th>
          <th className="text-end">
            <Typography size={12} weight="500" color="gray50">
              7D(%)
            </Typography>
          </th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

export default CoinInfoTable;
