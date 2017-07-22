import React, { Component } from "react";
import { render } from "react-dom";

import Idle from "../../src";

class Demo extends Component {
  render() {
    return (
      <div>
        <h1>idle Demo</h1>
        <Idle
          timeout={2000}
          onChange={({ inactive }) => console.log({ inactive })}
          render={({ inactive }) =>
            <h1>{inactive ? "You are idle!" : "Stop doing stuff."}</h1>}
        />

        <div style={{ marginTop: "2000px" }} />

      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
