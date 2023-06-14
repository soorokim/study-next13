import classNames from "classnames";
import { PropsWithoutRef } from "react";

type SolidButtonProps = PropsWithoutRef<
  React.ButtonHTMLAttributes<HTMLButtonElement>
>;

const SolidButton = ({ children, className, ...rest }: SolidButtonProps) => {
  return (
    <button
      className={classNames(className, "w-[106px] h-[56px]", "rounded")}
      {...rest}
    >
      <div className="flex items-center justify-center">{children}</div>
    </button>
  );
};

export default SolidButton;
