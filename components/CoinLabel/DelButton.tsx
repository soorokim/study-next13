import { PropsWithoutRef } from "react";

type DelButtonProps = PropsWithoutRef<
  React.ButtonHTMLAttributes<HTMLButtonElement>
>;

const DelButton = ({ onClick, ...rest }: DelButtonProps) => {
  return (
    <button {...rest} onClick={onClick}>
      <svg
        className="stroke-gray4 hover:stroke-gray5"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.5 8.5L12 12M12 12L15.5 15.5M12 12L15.5 8.5M12 12L8.5 15.5"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
};

export default DelButton;
