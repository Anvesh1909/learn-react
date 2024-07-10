import React from 'react'

const PropComponets = (props) => {

    console.log(props)


    return (
        <>
            <div>PropComponets</div>
            props passed : {props.name}, {props.passorfail}
            {props.children}
        </>
    )
}

export default PropComponets