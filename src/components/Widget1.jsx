import { observer } from "mobx-react-lite";
import { useRootStore } from "../rootStore";
import { useStateHook } from "../store/useStateHook";

export const Widget1 = observer(() => {
    const { mobxStore } = useRootStore();
    const { incCounterM } = mobxStore;

    const { incCounterS } = useStateHook();

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
                onClick={() => incCounterS()}
            >
                <b>click:</b>
                <br />
                update shared hook state
            </div>
        </div>
    );
});
