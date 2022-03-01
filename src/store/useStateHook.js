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
    const [counterContext, setCounterC] = useState(0);

    const inc1CounterC = useCallback(() => {
        console.log("incrementing context");
        setCounterC(counterContext + 1);
    }, [counterContext, setCounterC]);

    const inc2CounterC = useCallback(() => {
        console.log("incrementing context");
        setCounterC(c => c + 1);
    }, [setCounterC]);

    const providerValue = useMemo(() => ({
        counterContext,
        inc1CounterC,
        inc2CounterC,
    }), [counterContext, inc1CounterC, inc2CounterC]);

    return <StateContext.Provider
        value={providerValue}
        {...props}
    />;
};

export { StateContextProvider, useStateContext };
