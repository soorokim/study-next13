import { render, RenderOptions } from '@testing-library/react';
import { ReactElement } from 'react';
import fs from 'fs';

const wrapper = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => {
  const view = render(ui, { wrapper, ...options });

  const style = document.createElement('style');
  style.innerHTML = fs.readFileSync('__tests__/index.css', 'utf8');
  document.head.appendChild(style);

  return view;
};

export const convertHexToRGBA = (hexCode: string) => {
  let hex = hexCode.replace('#', '');

  if (hex.length === 3) {
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
  }

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return { r, g, b };
};

export * from '@testing-library/react';
export { customRender as render };
