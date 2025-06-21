import { useEffect, useRef } from "react"


const useCustomEffect = (cb, deps = null) => {
    const depsRef = useRef(null);

    // First Render
    if (!depsRef.current) {
        const rcb = cb();
        depsRef.current = {
            cleanupCb: rcb,
            deps
        }
        return;
    }

    // No deps or Changed Deps
    if (!deps || JSON.stringify(depsRef.current?.deps) !== JSON.stringify(deps)) {

        if (depsRef.current?.cleanupCb && typeof depsRef.current.cleanupCb === 'function')
            depsRef.current.cleanupCb();

        cb();
    }

    depsRef.current.deps = deps;

}

export default useCustomEffect;