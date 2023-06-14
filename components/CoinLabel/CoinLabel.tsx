import Typography from '../Typography/Typography';
import DelButton from './DelButton';
import { CoinLabelProps } from './types';

const CoinLabel = ({ name, onClickDel, removable = false }: CoinLabelProps) => {
  const handleClick = () => {
    if (onClickDel) onClickDel(name);
  };
  return (
    <div className="flex w-max border rounded border-purple20 pl-3 py-1.5 pr-1 bg-white">
      <Typography
        className="mr-2 leading-6"
        weight="700"
        size={14}
        color="purple100"
        letter="-0.3"
        inline
      >
        {name}
      </Typography>
      <DelButton
        className={`${removable ? '' : 'hidden'}`}
        onClick={handleClick}
      />
    </div>
  );
};

export default CoinLabel;
