export const storeTableData = (data) => ({
    type: 'STORE_DATA',
    data: data
})

export const resetStoredData = (data) => ({
    type: 'RESET_STORE_DATA',
    data: data
})