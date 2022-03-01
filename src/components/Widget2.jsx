import { observer } from "mobx-react-lite";
import { useState } from "react";
import { useRootStore } from "../rootStore";
import { getSatchelStore } from "../store/satchel";
import { useStateContext } from "../store/useStateHook";

export const Widget2 = observer(({counterShared}) => {
    const { mobxStore } = useRootStore();
    const { counterMobx } = mobxStore;

    const { counterContext } = useStateContext();

    const [counterLocal, setCounterL] = useState(0);
    const c = () => {
        console.log('incrementing local');
        setCounterL(counterLocal + 1);
    };

    const counterSatchel = getSatchelStore().counter

    return (
        <div>
            <h1>OUT (Widget2)</h1>
            <div className='display'>
                mobx store: {counterMobx}
            </div>
            <div className='display'>
                shared state: {counterShared}
            </div>
            <div className='display'>
                context state: {counterContext}
            </div>
            <div className='display'>
                satchel state: {counterSatchel}
            </div>
            <div className='display'
                onClick={c}
            >
                local hook state: {counterLocal}
                <br /><br />
                <b>click:</b>
                <br />
                update local hook
            </div>
        </div>
    );
});
