import { observer } from "mobx-react-lite";
import { useState } from "react";
import { useRootStore } from "../rootStore";
import { useStateHook } from "../store/useStateHook";

export const Widget2 = observer(() => {
    const { mobxStore } = useRootStore();
    const { counterM } = mobxStore;

    const { counterS } = useStateHook();

    const [counterL, setCounterL] = useState(0);
    const c = () => {
        console.log('incrementing local')
        setCounterL(counterL + 1);
    }

    return (
        <div>
            <h1>OUT (Widget2)</h1>
            <div className='display'>
                mobx store: {counterM}
            </div>
            <div className='display'>
                shared hook state: {counterS}
            </div>
            <div className='display'
                onClick={c}
            >
                local hook state: {counterL}
                <br /><br />
                <b>click:</b>
                <br />
                update local hook:
            </div>
        </div>
    );
});
