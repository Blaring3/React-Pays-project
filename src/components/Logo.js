import React, { Component } from "react";

export default class Logo extends Component {
  render() {
    return (
      <div className="logo">
        {/* Les images importées depuis la balise IMG sont accessibslbe dans public */}
        <img src="./image/logo192.png" alt="logo react" />
        <h3>Wsh grosse salope</h3>
      </div>
    );
  }
}
