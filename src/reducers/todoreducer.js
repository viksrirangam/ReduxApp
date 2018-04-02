const initialState = [];
let nextId = initialState.length;

const todo = (state = initialState, action) => {
    switch (action.type){
        case 'ADD_TODO':
            return [...state, {id: nextId++, text: action.text, completed: action.completed}];
        case 'TOGGLE_TODO':
            return state.map(todo =>{
                if(todo.id !== action.id){
                    return todo;
                }else{
                    return Object.assign({}, todo, {completed: !todo.completed});
                }
            });
        default:
            return state;
    }
}

export default todo;