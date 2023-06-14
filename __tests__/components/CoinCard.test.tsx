import CoinCard from "@/components/CoinCard/CoinCard";
import { render, screen } from "@/test-utils";
import userEvent from "@testing-library/user-event";

test("CoinCard render", () => {
  const name = "BitCoin";
  const shortName = "BTC";
  const logoSrc = "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png";
  const onClick = jest.fn();

  render(
    <CoinCard
      name={name}
      shortName={shortName}
      onClick={onClick}
      logoSrc={logoSrc}
      isChecked={false}
    />
  );

  expect(screen.getByText(name)).toBeInTheDocument();
  expect(screen.getByText(shortName)).toBeInTheDocument();
});

test("CoinCard onClick with coin name ", async () => {
  const name = "BitCoin";
  const shortName = "BTC";
  const logoSrc = "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png";
  const onClick = jest.fn();
  const user = userEvent.setup();

  render(
    <CoinCard
      name={name}
      shortName={shortName}
      onClick={onClick}
      logoSrc={logoSrc}
      isChecked={false}
    />
  );

  await user.click(screen.getByLabelText(/BitCoin/, { selector: "input" }));
  expect(onClick).toBeCalledWith(shortName);
});

// TODO: hover style test
