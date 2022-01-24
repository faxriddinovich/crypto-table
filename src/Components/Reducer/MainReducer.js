import { createSlice } from "@reduxjs/toolkit"
import { actionMain } from "../Action/MainAction"

const initialState={
    users:[]
}
const reducer=createSlice({
    name:'reducerCrypto',
    initialState,
    reducers:{
        getUsers:(state,action)=>{
            state.users=action.payload
        }
    }
})
export const getItem=()=>actionMain({
    url:'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false',
    method:'get',
    onSuccess:reducer.actions.getUsers.type
})
export default reducer.reducer