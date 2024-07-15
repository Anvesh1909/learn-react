import React, {useContext} from 'react'


import { UserContext } from './ComponentA'

function HookUseContext() {

    const user = useContext(UserContext)

    return (
        <div>
            HookUseContext<br></br>
            {user}
        </div>
    )
}

export default HookUseContext