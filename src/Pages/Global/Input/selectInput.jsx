import React from "react";

const SelectInput = props => {
  return (
    <select
      {...this.props}
      id={this.props.id}
      type={this.props.type ? this.props.type : "true"}
      name={this.props.name}
      className={this.props.className}
      value={this.props.value}
    />
  );
};

export default SelectInput;
