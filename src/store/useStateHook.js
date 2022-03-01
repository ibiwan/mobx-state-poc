import { useState } from "react";

export const useStateHook = () => {
    const [counterS, setCounterS] = useState(0);

    const incCounterS = () => {
        console.log("incrementing state");
        setCounterS(counterS + 1);
    };

    console.log('use', { counterS });

    return {
        counterS,
        incCounterS,
    };
};
