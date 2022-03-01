import { action, createStore, mutator } from 'satcheljs';

export const getSatchelStore = createStore(
    'satchelStore',
    { counter: 0 }
);

export const incCounter = action(
    'INCREMENT_COUNTER',
    (...a) => {
        console.log('incrementing satchel', { a });
        return a;
    }
);

mutator(incCounter, () => getSatchelStore().counter+=1);
