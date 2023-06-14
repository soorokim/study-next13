import classNames from 'classnames';

const CheckBox = ({ checked }: { checked: boolean }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        className={
          checked
            ? 'stroke-purple100 fill-purple100'
            : 'stroke-gray3 fill-white'
        }
        x="0.5"
        y="0.5"
        width="19"
        height="19"
        rx="3.5"
      />
      <path
        className={classNames('stroke-white', {
          'group-hover:stroke-purple100': !checked,
        })}
        d="M5 9.96832L8.84615 13.1429L15 6.00006"
        // stroke="#5A41F5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CheckBox;
