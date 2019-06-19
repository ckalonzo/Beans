import React from "react";

class OutlinedTextFields extends React.Component {
  state = {
    name: "Cat in the Hat",
    age: "",
    multiline:
      'The Warriors have far too much firepower for the Los Angeles Clippers to overcome in their first-round NBA playoff series.Everyone knows it.It was evident Saturday night at Oracle Arena when the two-time defending champions didnt have nearly their A-game but still ended up cruising to a win behind Steph Currys 38-point barrage.To anyone who watched Game 1, its clear the series appears to be headed for a sweep as the Clippers just dont possess the talent needed to overthrow the NBAs king. Game was a hotly contested, physical game that featured a number of the Clippers receiving technical fouls, and Kevin Durant and Patrick Beverley being ejected in the fourth quarter. Getting under the Warriors skin, the way Beverley did to Durant, is the only way the Clippers will have a chance in the series, according to Warriors assistant coach Mike Brown. We dont want to take the bait," Brown said on "SNC: Warriors Playoff Central." "Theres no way Id ever want to trade Kevin Durant for Patrick Beverley. We love the guys that we have on this team, and so one of our keys heading into this series was, we know we have to be poised against this team. They have no other way to beat us unless they junk it up, and they take advantage of us either getting kicked out or doing something silly to make it an advantage for them. After the game, Durant vowed to keep his poise during the remainder of the series, while also showing respect to Beverley and the grit that he brings for the Clippers.',
    currency: "EUR"
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    return (
      <textarea
        type="textarea"
        multiline
        rows="10"
        className="col-12 border"
        readOnly={true}
        value={this.state.multiline}
        onChange={this.handleChange("multiline")}
        outline
      />
    );
  }
}

export default OutlinedTextFields;
