import CoinLabel from "@/components/CoinLabel/CoinLabel";
import { render, screen } from "@/test-utils";
import userEvent from "@testing-library/user-event";

test("<CoinLabel> render", () => {
  const name = "BTC";
  const onClick = jest.fn();

  render(<CoinLabel name={name} onClickDel={onClick} />);

  expect(screen.getByText(name)).toBeInTheDocument();
});

test("<CoinLabel> has not button", () => {
  const name = "BTC";
  const onClick = jest.fn();

  render(<CoinLabel name={name} onClickDel={onClick} />);

  expect(screen.queryByRole("button")).not.toBeInTheDocument();
});

test("<CoinLabel> removable label has del button", () => {
  const name = "BTC";
  const onClick = jest.fn();

  render(<CoinLabel name={name} onClickDel={onClick} removable />);

  expect(screen.getByRole("button")).toBeInTheDocument();
});

test("<CoinLabel> onClickDel call with name after del button click", async () => {
  const name = "BTC";
  const onClick = jest.fn();
  const user = userEvent.setup();

  render(<CoinLabel name={name} onClickDel={onClick} removable />);

  await user.click(screen.getByRole("button"));
  expect(onClick).toBeCalledWith(name);
});

// TODO: hover style test
