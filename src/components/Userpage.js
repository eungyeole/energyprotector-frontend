import React,{useEffect, useState} from 'react'
import { withRouter } from "react-router-dom";
import Control from "./Control"
import Header from './header'
import Userheader from "./Userheader"
function Userpage() {
    const [State,setState] = useState("Bolt");
    return (
        <>
            <Header></Header>
            <div className="userpage">
                <div className="user-main">
                    <Userheader setState={setState} state={State}></Userheader>
                    {   
                        State=="Bolt"?
                            <Control></Control>
                        :State=="Crown"?
                            <Control></Control>
                        :State=="Chart"?
                            <Control></Control>
                        :null
                    }         
                </div>
            </div>
        </>
    );
    
}

export default Userpage;
