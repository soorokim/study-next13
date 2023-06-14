import SolidButton from '../SolidButton';
import Typography from '../Typography';

const DummyCountUp = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="flex justify-between items-center">
      <Typography size={42} weight="400">
        00:00:00
      </Typography>
      <SolidButton
        onClick={onClick}
        className="bg-purple100 hover:bg-purple120"
      >
        <Typography weight="500" color="white" letter="-0.3">
          Start
        </Typography>
      </SolidButton>
    </div>
  );
};

export default DummyCountUp;
