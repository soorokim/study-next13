export interface CoinCardProps {
  logoSrc: string;
  name: string;
  shortName: string;
  isChecked: boolean;
  onClick: (name: string) => void;
}
