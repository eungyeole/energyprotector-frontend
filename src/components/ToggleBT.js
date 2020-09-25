import React from 'react';
import styled from "styled-components"
function Togglebt() {
    const Switchlabel = styled.label`
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;
        & input{
            opacity: 0;
            width: 0;
            height: 0;
        }
    `
    const Sldier = style.span`
        position: absoulute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        
    `
    return (
        <>
            <Switchlabel>
                
            </Switchlabel>
        </>
    );
}

export default Togglebt;
