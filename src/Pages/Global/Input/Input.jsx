import React from "react";

const Input = props => {
  let inputElement = null;

  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          {...props}
          className={props.className}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          {...props}
          className={this.props.className}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    default:
      inputElement = (
        <input
          className={props.className}
          value={props.value}
          onChange={props.changed}
        />
      );
  }

  return <div>{inputElement}</div>;
};

export default Input;
