import React from "react";
import PropsTypes from "prop-types";

export default class Button extends React.Component {

  static propTypes = {
    children: PropsTypes.node.isRequired,
    onClick: PropsTypes.func.isRequired,
  }

  render() {

    const { children, onClick } = this.props;

    return (
    <button
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
    );
  }

}