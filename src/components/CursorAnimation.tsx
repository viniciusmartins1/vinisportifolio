import { useEffect, useRef } from "react";

const CursorAnimation = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  const mousePosition = useRef({
    x: 0,
    y: 0,
  });

  const cursorPosition = useRef({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const cursor = cursorRef.current;

    if (!cursor) return;

    const handleMouseMove = (event: MouseEvent) => {
      mousePosition.current.x = event.clientX;
      mousePosition.current.y = event.clientY;

      cursor.style.display = "block";
    };

    const animateCursor = () => {
      const { x: mouseX, y: mouseY } = mousePosition.current;

      const { x: cursorX, y: cursorY } = cursorPosition.current;

      const speed = 0.15;

      cursorPosition.current.x += (mouseX - cursorX) * speed;
      cursorPosition.current.y += (mouseY - cursorY) * speed;

      cursor.style.left = `${cursorPosition.current.x}px`;
      cursor.style.top = `${cursorPosition.current.y}px`;

      requestAnimationFrame(animateCursor);
    };

    const handleMouseOut = () => {
      cursor.style.display = "none";
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseOut);

    const animationFrame = requestAnimationFrame(animateCursor);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseOut);

      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return <div ref={cursorRef} className="cursor-animation" />;
};

export default CursorAnimation;
