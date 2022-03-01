import { observer } from "mobx-react-lite";
import { useRootStore } from "../rootStore";
import { useStateContext } from "../store/useStateHook";

export const Widget1 = observer(() => {
    const { mobxStore } = useRootStore();
    const { incCounterM } = mobxStore;

    const { inc1CounterC, inc2CounterC } = useStateContext();

    return (
        <div>
            <h1>IN (Widget1)</h1>
            <div className='incButton'
                onClick={() => incCounterM()}
            >
                <b>click:</b>
                <br />
                update mobx store
            </div>
            <div className='incButton'
                onClick={() => inc1CounterC()}
            >
                <b>click:</b>
                <br />
                update context state (value form)
            </div>
            <div className='incButton'
                onClick={() => inc2CounterC()}
            >
                <b>click:</b>
                <br />
                update context state (cb form)
            </div>
        </div>
    );
});
