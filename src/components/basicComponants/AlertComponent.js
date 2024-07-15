
import React from "react";


class AlertComponent extends React.Component {
 
    helloh2() {
        alert("Alert");
    }

  render() {
    return (
      <div>
        {/* <h1>Hello Anvesh</h1> */}
        <button onClick={this.helloh2}>Alert</button>
      </div>
    );
  }
}

export default AlertComponent;