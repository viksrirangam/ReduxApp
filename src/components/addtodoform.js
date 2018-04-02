import React from 'react';

let AddTodoForm = ({onSubmit}) => {
    let Input;

    return (
        <div>
            <form onSubmit={e => { e.preventDefault(); onSubmit(Input.value); return false;}}>
                <input ref={node => Input=node} />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default AddTodoForm;