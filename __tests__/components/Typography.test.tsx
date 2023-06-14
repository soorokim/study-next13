import Typography from "@/components/Typography/Typography";
import { FONT_WEIGHT, TEXT_SIZE } from "@/components/Typography/constants";
import { COLORS } from "@/settings/colors";
import { convertHexToRGBA, render } from "@/test-utils";
import { screen } from "@testing-library/react";

test("<Typography /> render", () => {
  const testText = "test";

  render(<Typography>{testText}</Typography>);

  expect(screen.getByText(testText)).toBeInTheDocument();
});

test("<Typography /> apply weight", () => {
  const testText = "test";

  const { rerender } = render(<Typography>{testText}</Typography>);
  const weights = Object.keys(FONT_WEIGHT);

  for (const weight of weights) {
    rerender(
      <Typography weight={weight as keyof typeof FONT_WEIGHT}>
        {testText}
      </Typography>
    );
    expect(screen.getByText(testText)).toHaveStyle(`font-weight: ${weight};`);
  }
});

test("<Typography /> apply size", () => {
  const testText = "test";

  const { rerender } = render(<Typography>{testText}</Typography>);
  const sizes = Object.keys(TEXT_SIZE);

  for (const size of sizes) {
    rerender(
      <Typography size={parseInt(size) as keyof typeof TEXT_SIZE}>
        {testText}
      </Typography>
    );
    expect(screen.getByText(testText)).toHaveStyle(`font-size: ${size}px;`);
  }
});

test("<Typography /> apply size", () => {
  const testText = "test";

  const { rerender } = render(<Typography>{testText}</Typography>);
  const sizes = Object.keys(TEXT_SIZE);

  for (const size of sizes) {
    rerender(
      <Typography size={parseInt(size) as keyof typeof TEXT_SIZE}>
        {testText}
      </Typography>
    );
    expect(screen.getByText(testText)).toHaveStyle(`font-size: ${size}px;`);
  }
});

test("<Typography /> apply colors", () => {
  const testText = "test";

  const { rerender } = render(<Typography>{testText}</Typography>);
  const colors = Object.keys(COLORS);

  for (const color of colors) {
    rerender(
      <Typography color={color as keyof typeof COLORS}>{testText}</Typography>
    );
    expect(screen.getByText(testText)).toHaveStyle(
      `color: ${convertHexToRGBA(COLORS[color as keyof typeof COLORS])}`
    );
  }
});

test("<Typography /> apply ko", () => {
  const testText = "test";

  render(<Typography ko>{testText}</Typography>);

  expect(screen.getByText(testText)).toHaveStyle("font-family: var(--ko-font)");
});

test("<Typography /> apply inline", () => {
  const testText = "test";

  render(<Typography inline>{testText}</Typography>);

  expect(screen.getByText(testText).tagName).toEqual("SPAN");
});
