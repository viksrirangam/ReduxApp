const dthunk = store => next => action => {
    console.log("dthunk middleware triggered:", action);
    next(action);
}

export default dthunk;