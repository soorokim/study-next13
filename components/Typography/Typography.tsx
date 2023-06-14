import { TypographyProps } from "./types";
import { TEXT_SIZE, TRACKING, TEXT_COLOR, FONT_WEIGHT } from "./constants";
import classNames from "classnames";

const Typography = ({
  children,
  className = "",
  size = 16,
  weight = "500",
  color = "black",
  ko = false,
  inline = false,
  letter = "0",
}: TypographyProps) => {
  const _classNames = classNames(
    TEXT_SIZE[size],
    FONT_WEIGHT[weight],
    TRACKING[letter],
    TEXT_COLOR[color],
    [{ "font-ko": ko }, { "font-default": !ko }, className]
  );

  if (inline) {
    return <span className={_classNames}>{children}</span>;
  }

  return <p className={_classNames}>{children}</p>;
};
export default Typography;
