import React from 'react'

function Alert(props) {
    const captial = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
            props.alert && <div className={`alert alert-${props.alert.typ} position-absolute w-100`} role="alert">
               <strong>{captial(props.alert.typ)}</strong> {props.alert.msg}
            </div>
    )
}

export default Alert