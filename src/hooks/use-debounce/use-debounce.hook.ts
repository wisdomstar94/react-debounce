import { useRef } from "react";
import { IUseDebounce } from "./use-debounce.interface";

export function useDebounce(props: IUseDebounce.Props) {
  const {
    defaultDebounceTime,
    fn,
  } = props;

  const timer = useRef<NodeJS.Timeout>();

  function callFn(debounceTime?: number) {
    const _debounceTime = debounceTime ?? defaultDebounceTime;

    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      fn();
    }, _debounceTime);
  }

  return {
    callFn,
  };
}