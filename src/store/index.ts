import { UPDATE_BP, UPDATE_DBP, UPDATE_HR, UPDATE_PR, UPDATE_SBP, UPDATE_SR, 
    actionType, stateType } from "./storeTypes";

export const initalState: stateType = {
    BP: { value: 0, name: 'Blood Presure' },
    HR: { value: 0, name: 'Heart Rate' },
    SBP: { value: 0, name: 'Sistolic BP' },
    DBP: { value: 0, name: 'Distolic BP' },
    PR: { value: 0, name: 'Pulse Rate' },
    SR: { value: 0, name: 'sugar' },
}

// obj[key] = 'new value'
const reducerFunction = (state = initalState, action: actionType) => {
    switch (action.type) {
        case UPDATE_BP:
            return {
                ...state,
                BP: { value: action.payload.value, name: state.BP.name }
            }
        case UPDATE_HR:
            return {
                ...state,
                HR: { value: action.payload.value, name: state.HR.name }
            }
        case UPDATE_SBP:
            return {
                ...state,
                SBP: { value: action.payload.value, name: state.SBP.name }
            }
        case UPDATE_DBP:
            return {
                ...state,
                DBP: { value: action.payload.value, name: state.DBP.name }
            }
        case UPDATE_PR:
            return {
                ...state,
                PR: { value: action.payload.value, name: state.PR.name }
            }
        case UPDATE_SR:
            return {
                ...state,
                SR: { value: action.payload.value, name: state.SR.name }
            }

        default:
            return state;
    }
}

export default reducerFunction;