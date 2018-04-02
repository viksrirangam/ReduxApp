const initialFilter = { filter: 'SHOW_ALL'}

const visibility = (state = initialFilter, action) => {    
    switch (action.type){
        case 'SET_FILTER':            
            return Object.assign({}, state, {filter: action.filter});
        default:
            return state;
    }

}

export default visibility;