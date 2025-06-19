import React from "react";

export function useScrollThreshold(scrollHeightDvh: number = 90) {
  const [hasScrolledPastThreshold, setHasScrolledPastThreshold] =
    React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      // Convert dvh to pixels
      const viewportHeight = window.innerHeight;
      const thresholdPixels = (scrollHeightDvh / 100) * viewportHeight;

      // Check if we've scrolled past the threshold
      const scrolledPast = window.scrollY > thresholdPixels;
      setHasScrolledPastThreshold(scrolledPast);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Check initial scroll position
    handleScroll();

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollHeightDvh]);

  return hasScrolledPastThreshold;
}
