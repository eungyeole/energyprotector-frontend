import React,{useEffect, useState} from 'react'
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDevices } from "../actions/userAction"
function Userpage() {
    const dispatch = useDispatch();
    const [Devices,setDevices] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        if(!localStorage.getItem("user"))
        {    
            alert("로그인후 시도해주세요.");
            window.location.href="/";
            return
        }
        setLoading(true);
        dispatch(getDevices(localStorage.getItem("user")))
            .then((res) => {
             setDevices(res["payload"]["devices"]);
            })
            .catch((e)=>{
                alert(e);
                window.location.href="/";
                return
            })
        setLoading(false);
            
    },[]);
    if(loading) return (<div>로딩중.</div>);
    if(!Devices) return (null);
    return (
        <div>
            {Devices.map((i)=>{return(<li>{i['device_id']}</li>)})}
        </div>
    );
    
}

export default Userpage;
