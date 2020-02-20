import React, { Component } from "react";
import { render } from "react-dom";
import "./index.less";
import Comp from "./comp";
const root = document.getElementById("app");

class App extends Component {
    render() {
        return (
            <div>
                <Comp />
            </div>
        );
    }
}

render(<App />, root);
