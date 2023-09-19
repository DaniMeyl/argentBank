import axios from "axios"
import { UPDATE_USER_NAME, USER_LOGIN_FAILLED, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT_SUCCESS} from "../types/User"

const api=process.env.REACT_APP_API_URL

export const userLogin= (body,dispatch) =>{
    dispatch({
        type:USER_LOGIN_REQUEST
    })
axios.post(`${api}/login`,body)
.then(res=>{
   
    const token = res.data.body.token
    axios.post(`${api}/profile`,{},{headers:{Authorization: `Bearer ${token}`}})
    .then (user =>{
       console.log(user)
        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload:{
                token, 
                user:user.data.body
            }
        })
    }) 
    .catch(err=>{
        dispatch({
            type:USER_LOGIN_FAILLED,
        })
    })
   
})
.catch(err=>{
    dispatch({
        type:USER_LOGIN_FAILLED,
    })
})
    
}

export const loginWithToken = (token, dispatch)=>{
    axios.post(`${api}/profile`,null,{headers:{Authorization: `Bearer ${token}`}})
    .then (user =>{
       console.log(user)
        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload:{
                token, 
                user:user.data.body
            }
        })
    }) 
    .catch( res =>{
        dispatch({
            type:USER_LOGIN_FAILLED,
        })
    })
    
}



export const logOutUser = (dispatch)=>{
    dispatch({type:USER_LOGOUT_SUCCESS})
}

export const updateUserName = (token ,userName , dispatch)=>{
    
    axios.put(`${api}/profile`,{userName},{headers:{Authorization: `Bearer ${token}`}})
    .then ( res =>{
       
        loginWithToken(token, dispatch);
    }) 
    .catch( res =>{
        dispatch({
            type:USER_LOGIN_FAILLED,
        })
    })
    
}