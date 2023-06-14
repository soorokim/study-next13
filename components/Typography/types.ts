import { COLORS } from "@/settings/colors";
import { FONT_WEIGHT, TEXT_SIZE, TRACKING } from "./constants";

export interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  size?: keyof typeof TEXT_SIZE;
  weight?: keyof typeof FONT_WEIGHT;
  color?: keyof typeof COLORS;
  ko?: boolean;
  inline?: boolean;
  letter?: keyof typeof TRACKING;
}
