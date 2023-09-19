import React, { useEffect, useState } from "react";
import {  useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Account from "../../components/account/account";
import EditName from "../../components/editName/editName.jsx";
import "./userProfil.css"

const UserProfil = () => {

  const navigate = useNavigate();

  const { user }  = useSelector((state) => ({user : state.userReducer.user}));
  

  useEffect(() => {
    const tokenFromStorage = localStorage.getItem("token")
    if (!tokenFromStorage) {
      navigate("/");
    }
  }, [navigate]);

  const [isEdit, setIsEdit] = useState(false);

 
  return (
    <main className="main bg-dark">
      
        <div className="header">
          {isEdit ? (
            <EditName setIsEdit={setIsEdit} />
          ) : (
            <>
            {user?<div className="header">
              <h1>
                Welcome 
                <br />
                {user?.userName}
               
              </h1>
              <button
                className="edit-button"
                onClick={() => setIsEdit(true)}
              >
                Edit Name
              </button>
              <h2 className="sr-only">Accounts</h2>
              </div>:<div>loading</div>}
            </>

          )}
        </div>
        <Account
          accountName="Checking"
          accountNumber="x3448"
          amount="$48,098.43"
          description="Available Balance"
        />
        <Account
          accountName="Checking"
          accountNumber="x3448"
          amount="$48,098.43"
          description="Available Balance"
        />
        <Account
          accountName="Checking"
          accountNumber="x3448"
          amount="$48,098.43"
          description="Available Balance"
        />
      
    </main>
  );
}; 
export default UserProfil;
