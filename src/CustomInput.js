import React from 'react'

import useWhyDidYouUpdate from './why'
function CustomInput(props) {
    useWhyDidYouUpdate("Fields", props)
    return (
        <>
            <input type="text" name="abc1"
            required
            onChange={e => props.handleInput(e, { value: e.target.value})}
            onBlur={e => props.handleBlur(e, { value: e.target.value})}
            onFocus={(e) => props.handleFocus(e)}
            ></input>

            { props.touched && <div style={{color:'red'}}>{props.error}</div>}
        </>
    )
}

export default React.memo(CustomInput);
