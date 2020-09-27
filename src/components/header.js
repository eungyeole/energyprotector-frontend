import React,{useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from "../actions/userAction"
import Question from './question'
import { Link } from 'react-router-dom';
import Login from './login'
function Header() {
    const [isModalOpen, setModal] = useState(false);
    const [isLoginOpen, setLogin] = useState(false);
    const dispatch = useDispatch();
    let token = useSelector(state => state.user.loginSuccess, []);  
    function loadUser(){
        if(localStorage.getItem('user')){
            token=localStorage.getItem('user'); 
        }
    }
    function logOut(){
        dispatch(logoutUser())    
        localStorage.removeItem('user');
        alert("로그아웃되었습니다.");
        window.location.href="/"
    }
    loadUser();
    let openModal=()=>{
        setModal(true);
    }
    let closeModal=()=>{
        setModal(false);
    }
    let openLogin=()=>{
        setLogin(true);
    }
    let closeLogin=()=>{
        setLogin(false);
    }
    return(
        <>
            <Question isOpen={isModalOpen} close={closeModal}></Question>
            <Login isOpen={isLoginOpen} close={closeLogin}></Login>
            <header>
                <div onClick={()=>window.location.href="/"} className="logo"><i className="far fa-lightbulb"></i>에너지지킴이</div>
                <ul className="nav">
                <li onClick={logOut}><a>그래프</a></li>
                {token?(
                    <li><Link to="/user">원격제어</Link></li>
                ):(
                    <li onClick={openLogin}><a>로그인</a></li>
                )

                }
                <li onClick={openModal}><a>문의</a></li>
                </ul>
            </header>
        </>
    )
}
export default Header;