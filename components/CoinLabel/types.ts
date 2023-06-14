export interface CoinLabelProps {
  name: string;
  onClickDel?: (name: string) => void;
  removable?: boolean;
}
