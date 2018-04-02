import React from 'react';

const ToDo = ({text, completed, onClick}) => {
    return (
        <li onClick={onClick} 
            style={{
                textDecoration: completed ? 'line-through' : 'none'
            }}>
            {text}
        </li>
    );
}

export default ToDo;