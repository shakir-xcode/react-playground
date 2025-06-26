import { useRef } from "react";

const useThrottle = (cb) => {
    const delay = 2000;
    const offSet = 300;
    const lastCallRef = useRef(0);

    const fn = () => {
        const difference = document.documentElement.scrollHeight - window.scrollY - window.innerHeight;
        const moreBottomDistance = difference > offSet;
        // console.log(difference);
        if (moreBottomDistance)
            return;

        const now = Date.now();
        const diff = now - lastCallRef.current;
        if (diff < delay) return;
        // console.log(now + ' : ' + lastCallRef.current);
        // console.log('Diff : ', diff);

        lastCallRef.current = now;
        cb();

    }

    return fn;
}

export default useThrottle;