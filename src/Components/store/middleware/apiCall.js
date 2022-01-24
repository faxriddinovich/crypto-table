import axios from "axios"

export const apiCall=({dispatch})=>(next)=>(action)=>{
    if(action.type!=='reducerCrypto/apiCall'){
        next(action)
        return
    }
    else 
    next(action)
    axios({
        url:action.payload.url,
        method:action.payload.method
    }).then(res=>{
        dispatch({type:action.payload.onSuccess,payload:res.data})
    }).catch(err=>{
        console.log(err)
    })
}