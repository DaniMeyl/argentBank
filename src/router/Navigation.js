import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
  } from "react-router-dom";
import Header from '../components/header/header';
import Home from '../pages/home/Home';
import Footer from '../components/footer/footer.jsx';
import Login from '../pages/login/Login';
import { useDispatch } from 'react-redux';
import { loginWithToken } from '../redux/actions/User';
import UserProfil from '../pages/profil/UserProfil';


export default function Navigation() {
  const dispatch =useDispatch()
  useEffect(()=>{
    const tokenFromStorage = localStorage.getItem("token")
    if (tokenFromStorage){
    loginWithToken(tokenFromStorage,dispatch)
  }
},[dispatch])
 
  return ( 
    <Router>
        <Header />
        <Routes>
            {/*<Route path="/" element={token?<Home />:<Navigate replace to="/login"/>}/>*/}
            <Route path="/" element={<Home />}/>
            <Route path="/*" element={<Navigate replace to="/"/>}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/user-profil" element={<UserProfil />}/>


        </Routes>
        <Footer />
    </Router>
    
  )
}
