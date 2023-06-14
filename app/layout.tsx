import type { Metadata } from 'next';
import './globals.css';
import ReactQueryProvider from './ReactQueryProvider';

export const metadata: Metadata = {
  title: '크립토 자산 데이터 추출하기',
  description:
    '데이터 추출이 필요한 크립토 자산을 선택 후, 데이터 추출이 가능합니다.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
