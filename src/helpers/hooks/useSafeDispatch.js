import { useCallback, useLayoutEffect, useRef } from "react";

export default function useSafeDispatch(dispatch) {
    const mounted = useRef(false);

    useLayoutEffect(() => {
        mounted.current = true;
        return () => {
            mounted.current = false;
        };
    }, [])

    return useCallback((...args) => {
        if (mounted.current) {
            dispatch(...args);
        } else {
            void 0
        }
    }, [dispatch])
}
