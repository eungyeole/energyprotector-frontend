import React,{useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getDevices } from "../actions/userAction"
import Togglebt from "./ToggleBT"
function Control() {
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
             setDevices(res['payload']);
             console.log(res['payload']);
            })
            .catch((e)=>{
                alert(e);
                window.location.href="/";
                return
            })
        setLoading(false);
            
    },[]);
    if(loading) return (<div>로딩중.</div>);
    if(!Devices) { return (null)};
    return (
        <>
            {Devices['devices'].map((i)=>{
                let temp=[];
                for(let j=0;j<i['unit_count'];j++){

                    temp.push(<div><div>{i["device_type"]+(j+1)}</div><Togglebt state={i["unit_info"][j]}></Togglebt></div>);
                }
                return(
                    <div>
                        <h2>{i['device_id']}</h2>
                        {temp}
                    </div>
                );
            })}
        </>
    );
}

export default Control;
