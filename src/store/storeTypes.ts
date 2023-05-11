export type stateValue = {value: number, name: string}
export type stateType = {
    BP:stateValue,
    HR: stateValue,
    SBP: stateValue,
    DBP: stateValue,
    PR: stateValue,
    SR: stateValue,

};


export type actionType = {
    
    payload: {value: number},
    type: string
}

export const UPDATE_BP = 'UPDATE_BP';
export const UPDATE_HR = 'UPDATE_HR';
export const UPDATE_SBP = 'UPDATE_SBP';
export const UPDATE_DBP = 'UPDATE_DBP';
export const UPDATE_PR = 'UPDATE_PR';
export const UPDATE_SR = 'UPDATE_SR';