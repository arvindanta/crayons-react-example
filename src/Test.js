import React from 'react'

import useWhyDidYouUpdate from './why'
function Test(props) {
    useWhyDidYouUpdate("test", props)
    console.log({props})
    return (
        <div>
            <h1>hello world</h1>
        </div>
    )
}

export default React.memo(Test)
