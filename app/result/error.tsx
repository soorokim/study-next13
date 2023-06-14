"use client";

import SolidButton from "@/components/SolidButton/SolidButton";
import Typography from "@/components/Typography/Typography";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Error({ error }: { error: Error }) {
  const router = useRouter();
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="text-center">
      <Typography weight="700" size={32} ko>
        잘못된 접근입니다 메인페이지로 돌아갑니다.
      </Typography>
      <SolidButton
        className="bg-red100 m-x-auto"
        onClick={() => router.push("/")}
      >
        <Typography weight="700" color="white" ko>
          돌아가기
        </Typography>
      </SolidButton>
    </div>
  );
}
