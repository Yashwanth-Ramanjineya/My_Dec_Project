const myReducer = (state, action) => {
    switch(action.type) {
        case 'DELETE_DATA':
        return '';
        case 'STORE_DATA':
        return {...state, myData: action.data}
        case 'ADD_DATA':
        return '';
        case 'EMPOYEES_SUCCESS':
            return {...state, myEmployeesData: action.data}
        case 'USER_DATA':
            return {...state, userData: action.data}
        default:
            return state;
        
    }
}


export default myReducer;