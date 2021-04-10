export const storeAction = {
    type: 'STORE_DATA',
    data: 'Yashwanth' 
}


export const employeesSuccessAction = (data) => ({
    type: 'EMPOYEES_SUCCESS',
    data: data
})

export const userDataAction = (data) => ({
    type: 'USER_DATA',
    data: data
})