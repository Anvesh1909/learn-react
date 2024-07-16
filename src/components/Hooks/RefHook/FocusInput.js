import React, { useRef, useEffect } from 'react'
import ClassTimer from './ClassTimer'
import HookTimer from './HookTimer'

function FocusInput() {
	const inputRef = useRef(null)
	useEffect(() => {
		inputRef.current.focus()
	}, [])
	return (
		<div>
			<input ref={inputRef} type="text" />

            <ClassTimer></ClassTimer>
            <HookTimer></HookTimer>
		</div>
	)
}

export default FocusInput