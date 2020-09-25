import React,{useEffect, useState} from 'react'
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
function Userpage() {
    useEffect(()=>{
        if(!localStorage.getItem("user"))
        {    
            alert("로그인후 시도해주세요.");
            window.location.href="/";
            return
        }
    },[]);
    return (
        <div>
            {localStorage.getItem("user")}
        </div>
    );
    
}

export default Userpage;
