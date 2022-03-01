import {
    makeAutoObservable,
} from 'mobx';

let mobxStore;
let initialState = {
    counterM: 0,

    incCounterM: () => {
        console.log("incrementing mobx");
        mobxStore.counterM += 1;
    },
};

export const getMobxStore = () => {
    mobxStore = mobxStore ??
        makeAutoObservable(initialState);

    return mobxStore;
};
