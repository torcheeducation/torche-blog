import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      title="Kembali ke Atas"
      onClick={scrollToTop}
      className={`fixed bottom-9 right-5 rounded-full bg-[#003f88] p-4 text-white ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <FaArrowUp className="text-lg" />
    </button>
  );
};

export default ScrollToTopButton;
