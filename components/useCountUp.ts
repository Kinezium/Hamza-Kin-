import { useEffect, useRef } from 'react';

export function useCountUp(target: number, duration = 1200) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let start = 0;
    const startTime = performance.now();
    function animate(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.floor(progress * (target - start) + start);
      el.textContent = value.toLocaleString();
      if (progress < 1) requestAnimationFrame(animate);
      else el.textContent = target.toLocaleString();
    }
    requestAnimationFrame(animate);
  }, [target, duration]);
  return ref;
}
