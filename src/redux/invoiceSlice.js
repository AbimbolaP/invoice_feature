import { createSlice } from "@reduxjs/toolkit"
import data from '../data/data.json'






const invoiceSlice = createSlice({
    name: 'invoice',

    initialState: {
        allInvoice : data,
    },

    reducers: {

    }
})

export default invoiceSlice