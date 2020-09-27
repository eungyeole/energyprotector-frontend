import React,{useEffect, useState} from 'react';
function Userheader(props) {
    return (
        <div className="user-header">
            <ul>
                {
                    props.state=="Bolt" ?
                        <li style={{color:"gold"}} onClick={()=>props.setState("Bolt")}><i className="fas fa-bolt"></i></li>
                    :<li onClick={()=>props.setState("Bolt")}><i className="fas fa-bolt"></i></li>
                }
                {
                    props.state=="Crown" ?
                        <li style={{color:"gold"}} onClick={()=>props.setState("Crown")}><i className="fas fa-crown"></i></li>
                    :<li onClick={()=>props.setState("Crown")}><i className="fas fa-crown"></i></li>
                }
                {
                    props.state=="Chart" ?
                        <li style={{color:"gold"}} onClick={()=>props.setState("Chart")}><i className="fas fa-chart-bar"></i></li>
                    :<li onClick={()=>props.setState("Chart")}><i className="fas fa-chart-bar"></i></li>
                }
            </ul>
            <i className="fas fa-cog"></i>
        </div>
    );
}

export default Userheader;
