import React from 'react';
import Todo from './todo'

let TodoList = ({todos, onTodoClick}) => {
    if(todos.length === 0){
        return (
            <div>No Worries...</div>
        );
    }
    
    return (
        <ul>
            {todos.map(todo => 
                <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
            )}
        </ul>
    );
}

export default TodoList;