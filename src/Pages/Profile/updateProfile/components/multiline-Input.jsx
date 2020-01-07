import React from "react";

const OutlinedTextFields = props => {
  // handleChange = name => event => {
  //   props.contractorProfile.bio;
  // };

  return (
    <textarea
      type="textarea"
      multiline
      rows="10"
      className="col-12 border"
      readOnly={true}
      //value={props.value}
      // onChange={this.handleChange({})}
      outline
    />
  );
};

export default OutlinedTextFields;
