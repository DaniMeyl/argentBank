import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserName } from '../../redux/actions/User';
import "./editName.css"



const EditName = ( {setIsEdit} ) => {
    const dispatch = useDispatch();
    const { user , token }  = useSelector((state) => ({user : state.userReducer.user, token :state.userReducer.token}));
    const [userName, setUserName] = useState('');

    useEffect(()=>{
        if (user?.userName){
            setUserName(user.userName)
        }
        
    },[user])
    
    const putNewUserName = (e) => {
        e.preventDefault();
      if (userName) {
        updateUserName(token, userName, dispatch);
        setIsEdit(false);
        setUserName('');
      }
    };
  
    const cancel = () => {
      setIsEdit(false);
      setUserName('');
    };
  return (
    <div className='edit-name-content'>
      <h2>Edit User Name</h2>
      <div>
        <label htmlFor="newUserName">User Name :</label>
        <input
          type="text"
          id="newUserName"
          placeholder="Enter New Username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
  
        />
      </div>
      <div>
        <label htmlFor="firstName">First Name :</label>
        <input
          type="text"
          id="firstName"
          value={user.firstName}
          disabled
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name :</label>
        <input
          type="text"
          id="lastName"
          value={user.lastName}
          disabled
         
        />
        <div className="buttons-form">
          <button className='edit-button' onClick={putNewUserName}>Save</button>
          <button className='edit-button' onClick={cancel} >Cancel</button>
        </div>
      </div>
    </div>

  );
};

export default EditName;