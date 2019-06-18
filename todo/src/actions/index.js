export const ADD = 'ADD';
export const TOGGLE = 'TOGGLE'

export const add = (todo) =>{
    return {
        type: ADD,
        payload: todo
    }
};

export const toggle = (id) =>{
    return {
        type: TOGGLE,
        payload: id
    }
}