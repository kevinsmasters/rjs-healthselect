import React from 'react'


class ChildComponent extends React.Component {

  state = {
  }

  //handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => this.setState({ [e.target.name]: e.target.value });

  componentDidUpdate() {
    if (this.props.onChange) {
      this.props.onChange(this.state);
    }
  }

  render() {
    return (
      <>
        <div>
          <div>Username:</div>
          <input name="username" onChange={this.handleChange} />
        </div>
        <br />
        <div>
          <div>Password:</div>
          <input name="password" onChange={this.handleChange} />
        </div>
        <br />
        <div>
          <button onClick={this.handleSubmit}>Submit</button>
        </div>
      </>
    );
  }
}

export default ChildComponent;
