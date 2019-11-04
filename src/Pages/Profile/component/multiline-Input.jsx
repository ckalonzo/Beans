import React from "react";

const OutlinedTextFields = props => {
  // handleChange = name => event => {
  //   props.contractorProfile.bio;
  // };
  console.log(props.contractorProfile);
  return (
    <textarea
      type="textarea"
      multiline
      rows="10"
      className="col-12 border"
      readOnly={true}
      value={props.contractorProfile.bio}
      // onChange={this.handleChange({})}
      outline
    />
  );
};

export default OutlinedTextFields;
