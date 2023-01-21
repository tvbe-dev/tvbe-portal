import { useMemo } from 'react';
import { useMediaQuery } from 'react-responsive';

export default function useIsDesktop(): boolean {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    });

    const isDesktop = useMemo(() => isDesktopOrLaptop, [isDesktopOrLaptop]);

    return isDesktop;
}
