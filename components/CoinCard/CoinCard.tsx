import Typography from '../Typography/Typography';
import CheckBox from '../CheckBox';
import { CoinCardProps } from './types';

const CoinCard = ({
  logoSrc,
  name,
  shortName,
  isChecked = false,
  onClick,
}: CoinCardProps) => {
  const handleClick = () => {
    onClick(shortName);
  };

  return (
    <label
      htmlFor={`${name}-checkbox`}
      className={`group border rounded border-solid ${
        isChecked
          ? 'border-purple20 bg-purple5'
          : 'border-gray10 hover:border-purple20 hover:bg-purple5'
      }`}
    >
      <div className="flex items-center h-[80px]">
        <div className="ml-5">
          <img
            src={logoSrc}
            alt={`${name} logo`}
            className="w-[32px] max-w-none"
          />
        </div>
        <div className={`ml-3 mr-2   break-all leading-4 `}>
          <Typography
            weight="700"
            inline={isChecked}
            className={`${isChecked ? 'mr-[6px]' : ''}`}
          >
            {name}
          </Typography>
          <Typography weight="400" size={12} color="gray50" inline={isChecked}>
            {shortName}
          </Typography>
        </div>
        <div className="ml-auto mb-auto pt-3 pr-3">
          <CheckBox checked={isChecked} />
          <input
            hidden
            readOnly
            checked={isChecked}
            id={`${name}-checkbox`}
            type="checkbox"
            onClick={handleClick}
          />
        </div>
      </div>
    </label>
  );
};

export default CoinCard;
