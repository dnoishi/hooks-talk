import React, { Component } from "react";

export class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log("El boton no ha sido clickeado");
  }

  componentDidUpdate() {
    console.log(`clikeado ${this.state.count} veces`);
  }

  componentWillUnmount() {
    console.log(`Boton removido del dom ${this.state.count} `);
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <p>{count}</p>
        <button onClick={() => this.setState({ count: count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}

export default Button;
