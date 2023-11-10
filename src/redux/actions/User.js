import axios from "axios"
import { USER_LOGIN_FAILLED, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT_SUCCESS, USER_UPDATE_FAILLED, USER_UPDATE_REQUEST, USER_UPDATE_SUCCESS} from "../types/User"

const api=process.env.REACT_APP_API_URL

export const userLogin= (body,dispatch) =>{
    dispatch({
        type:USER_LOGIN_REQUEST
    })
axios.post(`${api}/login`,body)
.then(res=>{
    
    const token = res.data.body.token
    loginWithToken(token,dispatch)

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
    .catch( err =>{
        dispatch({
            type:USER_LOGIN_FAILLED,
        })
    })
    
}



export const logOutUser = (dispatch)=>{
    dispatch({type:USER_LOGOUT_SUCCESS})
}

export const updateUserName = (token ,userName , dispatch)=>{
    dispatch({
        type:USER_UPDATE_REQUEST
    })
    axios.put(`${api}/profile`,{userName},{headers:{Authorization: `Bearer ${token}`}})
    .then ( res =>{
       
        dispatch({
            type: USER_UPDATE_SUCCESS,
            payload: res.data.body.userName,
          });
    }) 
    .catch( err =>{
        dispatch({
            type:USER_UPDATE_FAILLED,
        })
    })
    
}