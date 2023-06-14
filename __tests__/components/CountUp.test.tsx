import CountUp from '@/components/CountUp/CountUp';
import { render, screen } from '@/test-utils';
import userEvent from '@testing-library/user-event';

test('<CountUp /> render', () => {
  const onClickStart = jest.fn();
  const onClickReset = jest.fn();

  render(<CountUp onClickStart={onClickStart} onClickReset={onClickReset} />);

  expect(screen.getByText('00:00:00')).toBeInTheDocument();
  expect(screen.getByText('Start')).toBeInTheDocument();
});

test('<CountUp /> can start and reset', async () => {
  const onClickStart = jest.fn();
  const onClickReset = jest.fn();
  const user = userEvent.setup();

  render(<CountUp onClickStart={onClickStart} onClickReset={onClickReset} />);

  await user.click(screen.getByText('Start'));
  await screen.findByText('Reset');
  expect(screen.queryByText('00:00:00')).not.toBeInTheDocument();
  await user.click(screen.getByText('Reset'));
  expect(screen.getByText('00:00:00')).toBeInTheDocument();
});

test('<CountUp /> onClickStart call after start button click', async () => {
  const onClickStart = jest.fn();
  const onClickReset = jest.fn();
  const user = userEvent.setup();

  render(<CountUp onClickStart={onClickStart} onClickReset={onClickReset} />);

  await user.click(screen.getByText('Start'));
  expect(onClickStart).toBeCalled();
});

test('<CountUp /> onClickReset call after reset button click', async () => {
  const onClickStart = jest.fn();
  const onClickReset = jest.fn();
  const user = userEvent.setup();

  render(<CountUp onClickStart={onClickStart} onClickReset={onClickReset} />);

  await user.click(screen.getByText('Start'));
  await screen.findByText('Reset');
  await user.click(screen.getByText('Reset'));
  expect(onClickReset).toBeCalled();
});
