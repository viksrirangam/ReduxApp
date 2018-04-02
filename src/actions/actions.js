export const AddTodo = (text) => {
    return {
        type: 'ADD_TODO',
        text,
        completed: false
    }
}

export const SetFilter = (filter) => {
    return {
        type: 'SET_FILTER',
        filter
    }
}

export const ToggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}