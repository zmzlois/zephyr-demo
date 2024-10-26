import { useLayoutEffect, useState } from 'react';

const SMALL_SCREEN_SIZE = 1024;

const useScreenSize = ({
  htmlElement,
}: {
  htmlElement: HTMLBodyElement | null;
}) => {
  const [isSmallScreen, setSmallScreen] = useState<boolean>(false);

  useLayoutEffect(() => {
    if (!htmlElement) return;

    const resizeObserver = new ResizeObserver((entries) => {
      const [entry] = entries;

      const onSmallScreenSize = entry.contentRect.width < SMALL_SCREEN_SIZE;

      setSmallScreen(onSmallScreenSize);
    });

    resizeObserver.observe(htmlElement);

    return () => {
      resizeObserver.disconnect();
    };
  }, [htmlElement]);

  return {
    isSmallScreen,
  };
};

export default useScreenSize;
