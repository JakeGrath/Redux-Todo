import { ADD, TOGGLE, CLEAR } from "../actions"

const initialState = {
    todos: [
        {
            value: 'Render initial state',
            completed: false
        },
        {
            value: 'Add State',
            completed: false
        }
    ]
}

export const ToDoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case TOGGLE:
                return {
                    todos: state.todos.map((todo, index) => {
                        if (index === action.payload) {
                            return { ...todo, completed: !todo.completed};
                        }
                        return todo;
                    })         
                }
        case CLEAR:
            return {
                todos: state.todos.filter(todo => todo.completed !== true)
            }
        default:
            return state;
    }
}