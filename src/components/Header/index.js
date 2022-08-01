import React, { Component } from "react";

import { ThemeContext } from "../../contexts/ThemeContext";

import { Container } from "./styles";
import Button from "../Button";

function HOC(HeaderComponent) {
  return class Component extends Component {
    
    render() {
      return (
        <ThemeContext.Consumer>
        {(values) => (
          <HeaderComponent {...values} />
        )}
      </ThemeContext.Consumer>
      );
    }

  }
}
class Header extends Component {

  render() {

    return (
      <Container>
        <h1>JStack's Blog</h1>
        <Button onClick={this.props.handleToggleTheme}>
          {this.props.theme === "dark" ? "🌞" : "🌚"}
        </Button>
        <Button onClick={this.props.handleSetPurpleTheme}>🟣</Button>
      </Container>
    );
  }
}

export default HOC(Header);
