import { useLayoutEffect, useState } from "react";

const SMALL_SCREEN_SIZE = 1024;

const useScreenSize = ({ htmlElement }: { htmlElement: HTMLElement }) => {
	const [isSmallScreen, setSmallScreen] = useState<Boolean>(false);

	useLayoutEffect(() => {
		const resizeObserver = new ResizeObserver((entries) => {
			const [entry] = entries;

			const onSmallScreenSize =
				entry.contentRect.width < SMALL_SCREEN_SIZE

			setSmallScreen(onSmallScreenSize);
		});

		resizeObserver.observe(htmlElement);

		return () => {
			resizeObserver.disconnect();
		};
	}, []);

	return {
		isSmallScreen,
	};
};

export default useScreenSize;
