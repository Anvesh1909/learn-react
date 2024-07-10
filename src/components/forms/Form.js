import React, { Component } from 'react';

export class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      comment: '',
      select: 'C',
    };
  }

  handleUsernameChange = (event) => {
    // console.log(event.target.value)
    this.setState({
      username: event.target.value,
    });
  };

  handleCommentChange = (event) => {
    this.setState({
      comment: event.target.value,
    });
  };

  handleSelectChange = (event) => {
    this.setState({
      select: event.target.value,
    });
  };

  handleSubmitChange = (event) => {
    alert(`${this.state.username} ${this.state.comment} ${this.state.select}`);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Form Component</h1>
        <form onSubmit={this.handleSubmitChange}>
          <div>
            <label>Username:</label>
            <input
              type='text'
              value={this.state.username}
              onChange={this.handleUsernameChange}
            />
          </div>
          <div>
            <label>Comment</label>
            <textarea
              type='text'
              value={this.state.comment}
              onChange={this.handleCommentChange}
            />
          </div>
          <div>
            <label>Select tag</label>
            <select value={this.state.select} onChange={this.handleSelectChange}>
                <option value="Python">Python</option>
                <option value="Java">Java</option>
                <option value="C">C</option>
            </select>
          </div> 

          <button type='submit'>Submit</button>

        </form>
      </div>
    );
  }
}

export default Form;
