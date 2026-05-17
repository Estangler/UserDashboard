import { useEffect, useState } from "react";

export default function useWindowSize(size: number) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < size);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < size);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [size]);

  return {
    isMobile,
  };
}
