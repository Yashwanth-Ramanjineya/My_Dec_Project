const myReducer = (state, action) => {
    switch(action.type) {
        case 'DELETE_DATA':
        return '';
        case 'STORE_DATA':
        return {...state, myData: action.data}
        case 'ADD_DATA':
        return '';
        default:
            return state;
        
    }
}


export default myReducer;