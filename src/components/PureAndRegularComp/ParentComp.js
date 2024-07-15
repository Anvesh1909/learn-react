import React, { Component } from 'react'

// import RegComp from './RegComp'
// import PureComp from './PureComp'

import MemoComp from './MemoComp'

class ParentComp extends Component {
	constructor(props) {
		super(props)

		this.state = {
			name: 'Anvesh'
		}
	}

	componentDidMount() {
		setInterval(() => {
			this.setState({
				name: 'Bunny'
			})
		}, 10000)
	}

    handleNameChange = (event) =>{
        this.setState({
            name : event.target.value
        })
    }

	render() {
		console.log('*********Parent Comp render************')
		return (
			<div>
			    {/* <RegComp name={this.state.name} />
				<PureComp name={this.state.name} />  */}

                <MemoComp name={this.state.name}></MemoComp>
                <input type='text' value={this.state.name} onChange={this.handleNameChange} />
			</div>
		)
	}
}

export default ParentComp