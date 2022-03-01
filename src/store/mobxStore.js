import {
    makeAutoObservable,
} from 'mobx';

let mobxStore;
let initialState = {
    counterMobx: 0,

    incCounterMobx: () => {
        console.log("incrementing mobx");
        mobxStore.counterMobx += 1;
    },
};

export const getMobxStore = () => {
    mobxStore = mobxStore ??
        makeAutoObservable(initialState);

    return mobxStore;
};
