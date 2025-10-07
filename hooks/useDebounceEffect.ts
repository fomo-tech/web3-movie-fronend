import { useEffect, useRef } from "react";

/**
 * Hook giúp debounce hiệu ứng (useEffect)
 * @param effect - hàm callback cần thực thi sau khi delay
 * @param deps - dependencies để kích hoạt effect
 * @param delay - thời gian debounce (ms)
 */
export function useDebounceEffect(
  effect: () => void | Promise<void>,
  deps: any[],
  delay: number
) {
  const callback = useRef(effect);

  useEffect(() => {
    callback.current = effect;
  }, [effect]);

  useEffect(() => {
    const handler = setTimeout(() => {
      callback.current();
    }, delay);

    return () => clearTimeout(handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps, delay]);
}
