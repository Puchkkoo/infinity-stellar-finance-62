
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Ensuring immediate scroll to top on route change for better user experience
    window.scrollTo({
      top: 0,
      behavior: "instant", // Use "instant" instead of "smooth" for faster navigation
      left: 0
    });
  }, [pathname]);

  return null;
};
