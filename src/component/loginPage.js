import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({name: event.target.value});
  }

  render() {
    return (
      <form>
        <label htmlFor="name">Name:</label>
        <input  id="name" type="text" onChange={this.handleChange} />
        <input type="submit" value="Enviar" />
      </form>
    );
  }
}

export default Login;