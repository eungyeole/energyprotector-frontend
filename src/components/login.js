import React,{useEffect, useState} from 'react'
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../actions/userAction"
function Login({isOpen, close}) {
    const [Group, setGroup] = useState("");
    const [Id, setId] = useState("");
    const [Password, setPassword] = useState("");
    const [idSave, setidSave] = useState(false);
    const [ErrorM, setErrorM] = useState("");
    const dispatch = useDispatch();
    useEffect(()=>{
        if(localStorage.getItem("id")){
            setId(localStorage.getItem("id"));
            setidSave(true);
            setGroup(localStorage.getItem("group"));
        }
        else{
            setidSave(false);
        }
    },[])
    const onGroupHandler = (e) => {
        setGroup(e.currentTarget.value);
    };
    const onIdHandler = (e) => {
      setId(e.currentTarget.value);
    };
    const onPasswordHanlder = (e) => {
      setPassword(e.currentTarget.value);
    };
    const onidSaveHanlder = (e) => {
        setidSave(e.currentTarget.checked);
    };
    const onSubmitHandler = (e) => {
      e.preventDefault();
      const body = {
        raspberry_group: Group,
        raspberry_id: Id,
        raspberry_pw: Password,
      };
      
    dispatch(loginUser(body))
        .then((res) => {
            if(idSave){
                localStorage.setItem('id',body.raspberry_id);
                localStorage.setItem('group',body.raspberry_group);
            }
            else{
                localStorage.removeItem('id');
                localStorage.removeItem('group');
            }
            localStorage.setItem('user',res.payload.access_token);
            close();
        })
        .catch((err) => {
            setErrorM("아이디 혹은 비밀번호를 확인해주세요.");
        });
    };
    return(
        <React.Fragment>
        {
            isOpen ?
            <div className="modal">
                <div onClick={close} className="modal-overlay"></div>
                <form className="login" onSubmit={onSubmitHandler}>
                    <h2>로그인</h2>
                    <input value={Group} onChange={onGroupHandler} placeholder="그룹이름"></input>
                    <input value={Id} onChange={onIdHandler} placeholder="아이디" type="text"></input>
                    <input value={Password} onChange={onPasswordHanlder} placeholder="비밀번호" type="password"></input>
                    <div style={{color:"red",fontSize:"14px",marginTop:"10px"}}>{ErrorM}</div>
                    <button>로그인</button>
                    <div className="checkbox">
                        <input checked={idSave} onChange={onidSaveHanlder} className="autologin" type="checkbox"></input>
                        <p>아이디저장</p>
                    </div>
                </form>
            </div>
            :null
        }
        </React.Fragment>
    )
}
export default withRouter(Login);