'use client';

import Typography from '@/components/Typography';

const Template = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="py-14 px-5">
        <Typography weight="700" size={32} color="gray90" letter="-1" ko>
          크립토 자산 데이터 추출하기
        </Typography>
        <Typography weight="400" color="gray60" letter="-0.3" ko>
          데이터 추출이 필요한 크립토 자산을 선택 후, 데이터 추출이 가능합니다.
        </Typography>
      </div>

      <main className="mb-32">{children}</main>
    </div>
  );
};
export default Template;
