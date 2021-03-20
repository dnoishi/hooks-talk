import React, { Component } from "react";

export class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    document.title = "El boton no ha sido clickeado";
  }

  componentDidUpdate() {
    document.title = `clikeado ${this.state.count} veces`;
  }

  componentWillUnmount() {
    document.title = "Boton removido del dom";
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <p>Hook {count}</p>
        <button onClick={() => this.setState({ count: count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}

export default Button;
