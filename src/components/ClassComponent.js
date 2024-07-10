import React, { Component } from 'react'





// rce for class componrnt
// rfce for function compontnts

class ClassComponent extends Component {


    ClassFun = () => <p>class function</p>;

    x= this.ClassFun();

    render() {
        return (
            <div>
                <h1>ClassComponent</h1>
                {this.x}
            </div>
        )
    }
}

export default ClassComponent
