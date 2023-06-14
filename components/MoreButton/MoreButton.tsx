import Typography from "../Typography";
import ChevronArrowDown from "./ChevronArrowDown";

interface MoreButtonProps {
  current: number;
  total: number;
  onClick: () => void;
}
const MoreButton = ({ current, total, onClick }: MoreButtonProps) => {
  return (
    <button className="group bg-gray0 rounded pl-4" onClick={onClick}>
      <Typography
        className="flex items-center group-hover:text-gray60"
        weight="500"
        size={14}
        color="gray50"
        letter="-0.3"
        ko
      >
        더보기({current}/{total})<ChevronArrowDown />
      </Typography>
    </button>
  );
};

export default MoreButton;
