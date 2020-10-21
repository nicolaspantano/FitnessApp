import React, { useState } from 'react'

const Prueba = () => {
    const [count, setCount] = useState(0);

    return (
        <React.Fragment>
            <p>You clicked {count} times!</p>
            <button onClick={()=>setCount(count+1)}> CLICK </button>
        </React.Fragment>
    )
}
export default Prueba