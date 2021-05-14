const myReducer = (state, action) => {
    switch(action.type) {
        case 'LOAD_DATA':
            return {...state, data: action.data}
        default:
            return state;
        
    }
}


export default myReducer;