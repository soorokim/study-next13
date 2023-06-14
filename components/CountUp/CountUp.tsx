import { useCallback, useEffect, useRef, useState } from 'react';
import Typography from '../Typography/Typography';
import SolidButton from '../SolidButton';
import { convertNumberToTimeString } from '@/utils/dateUtil';
import { CountUpProps } from './types';

const CountUp = ({
  onClickStart,
  onClickReset,
  isStart = false,
}: CountUpProps) => {
  const [timeString, settimeString] = useState('');
  const startTimeRef = useRef(0);
  const ref = useRef(0);

  const start = useCallback((timestamp?: DOMHighResTimeStamp) => {
    if (timestamp) {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }
      settimeString(
        convertNumberToTimeString(timestamp - startTimeRef.current),
      );
    }
    ref.current = requestAnimationFrame(start);
  }, []);

  const onStart = () => {
    start();
    onClickStart && onClickStart();
  };

  const onReset = () => {
    cancelAnimationFrame(ref.current);
    startTimeRef.current = 0;
    settimeString('');
    onClickReset && onClickReset();
  };

  useEffect(() => {
    isStart && start();
  }, [isStart, start]);

  useEffect(() => {
    return () => cancelAnimationFrame(ref.current);
  }, []);

  return (
    <div className="flex justify-between items-center">
      {timeString === '' ? (
        <Typography size={42} weight="400">
          00:00:00
        </Typography>
      ) : (
        <Typography size={42} weight="700" color="purple100">
          {timeString}
        </Typography>
      )}

      {timeString === '' ? (
        <SolidButton
          onClick={onStart}
          className="bg-purple100 hover:bg-purple120"
        >
          <Typography weight="500" color="white" letter="-0.3">
            Start
          </Typography>
        </SolidButton>
      ) : (
        <SolidButton onClick={onReset} className="bg-gray60 hover:bg-gray70">
          <Typography weight="500" color="white" letter="-0.3">
            Reset
          </Typography>
        </SolidButton>
      )}
    </div>
  );
};

export default CountUp;
