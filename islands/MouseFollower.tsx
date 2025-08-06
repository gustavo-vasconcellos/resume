import { useEffect, useRef } from "preact/hooks";

export function MouseFollower() {
  const mousePosition = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const followerX = e.clientX - 80;
      const followerY = e.clientY - 80;

      if (!mousePosition.current) return;

      requestAnimationFrame(() => {
        mousePosition.current!.style.transform = `translate(${followerX}px, ${followerY}px)`;
      });
    };

    globalThis.addEventListener("mousemove", handleMouseMove);
    return () => globalThis.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={mousePosition}
      class="fixed inset-0 w-40 h-40 bg-accent/20 rounded-full blur-3xl transition-all duration-300 ease-out pointer-events-none"
      style={{
        willChange: "transform",
      }}
    ></div>
  );
}
