import React,{useEffect, useState} from 'react';
function Togglebt(props) {
    const [Group, setGroup] = useState(props.state);
    const onGroupHandler = (e) => {
        setGroup(e.currentTarget.checked);
    };
    useEffect(()=>{
        console.log(Group);
    },[Group])
    return (
        <label className="switch">
            <input checked={Group} onChange={onGroupHandler} type="checkbox"></input>
            <span className="slider round"></span>
        </label>
    );
}

export default Togglebt;
