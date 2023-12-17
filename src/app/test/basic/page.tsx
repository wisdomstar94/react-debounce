"use client"

import { useDebounce } from "@/hooks/use-debounce/use-debounce.hook";

export default function Page() {
  const debounce = useDebounce({
    defaultDebounceTime: 1000,
    fn: () => {
      console.log('called!!');
    },
  });

  return (
    <>
      <button
        className="inline-flex px-2 py-0.5 text-sm text-black border border-black rounded-sm cursor-pointer hover:bg-gray-100"
        onClick={() => {
          debounce.callFn();
        }}>
        call fn
      </button>
      <div>
        console 창의 로그를 확인해주세요!
      </div>
    </>
  );
}
