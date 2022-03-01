import {
    createContext,
    useCallback,
    useContext,
    useMemo,
    useState,
} from "react";

const StateContext = createContext();

const useStateContext = () => {
    const context = useContext(StateContext);

    if (!context) {
        throw new Error("need a CountProvider!");
    }

    return context;
};

const StateContextProvider = (props) => {
    const [counterC, setCounterC] = useState(0);

    const inc1CounterC = useCallback(() => {
        console.log("incrementing state");
        setCounterC(counterC + 1);
    }, [counterC, setCounterC]);

    const inc2CounterC = useCallback(() => {
        console.log("incrementing state");
        setCounterC(c => c + 1);
    }, [setCounterC]);

    const providerValue = useMemo(() => ({
        counterC,
        inc1CounterC,
        inc2CounterC,
    }), [counterC, inc1CounterC, inc2CounterC]);

    return <StateContext.Provider
        value={providerValue}
        {...props}
    />;
};

export { StateContextProvider, useStateContext };
