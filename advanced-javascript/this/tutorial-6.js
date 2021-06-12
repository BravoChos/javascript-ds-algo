// Class Component Event Binding (not object)
import React, { Component } from "react";
import PropTypes from "prop-types";

class Basic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: false,
    };
    this.onClickButton = this.onClickButton.bind(this);
  }

  // During the rendering without binding onClickButton funciont, Javascript Enginee has no way figure out what 'this' is,
  // and therefore assume it is window or undefined.
  onClickButton() {
    this.setState(() => ({ hidden: true }));
  }

  render() {
    return (
      <div>
        <button onClick={this.onClickButton}>Hide</button>
      </div>
    );
  }
}

export default Basic;
