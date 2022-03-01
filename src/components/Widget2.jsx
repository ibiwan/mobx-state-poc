import { observer } from "mobx-react-lite";
import { useState } from "react";
import { useRootStore } from "../rootStore";
import { useStateContext } from "../store/useStateHook";

export const Widget2 = observer(({counterS}) => {
    const { mobxStore } = useRootStore();
    const { counterM } = mobxStore;

    const { counterC } = useStateContext();

    const [counterL, setCounterL] = useState(0);
    const c = () => {
        console.log('incrementing local');
        setCounterL(counterL + 1);
    };

    return (
        <div>
            <h1>OUT (Widget2)</h1>
            <div className='display'>
                mobx store: {counterM}
            </div>
            <div className='display'>
                shared state: {counterS}
            </div>
            <div className='display'>
                context state: {counterC}
            </div>
            <div className='display'
                onClick={c}
            >
                local hook state: {counterL}
                <br /><br />
                <b>click:</b>
                <br />
                update local hook
            </div>
        </div>
    );
});
