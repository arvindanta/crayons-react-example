import React from 'react'

function CustomInput(props) {
    console.log({props});
    return (
        <>
            <input type="text" name="abc1"
            required
            onChange={e => props.handleInput(e, { value: e.target.value})}
            onBlur={e => props.handleBlur(e, { value: e.target.value})}
            onFocus={props.handleFocus}
            ></input>

            { props.touched && <div style={{color:'red'}}>{props.error}</div>}
        </>
    )
}

export default React.memo(CustomInput);
