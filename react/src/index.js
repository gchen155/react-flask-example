import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./index.css";

// Test extends React.Component which gives Test access to React and its functions
class Test extends React.Component {
  // this constructor initializes values, it operates like in any language you've learned before.
  // I've initialized the state here but the state could also be empty.
  // the state stores properties related to Test
  // keep the 'props' statements: they are parameters from react
  constructor(props) {
    super(props);
    this.state = { val: "my" };
  }
  // this is a function that sets val in state
  changeVal = () => {
    // api to get the flask function that returns a string
    axios.get(`http://127.0.0.1:5000/first`).then((res) => {
      this.setState({ val: res.data });
    });
  };

  // this is where my html code lives and is generated with this Test react component
  render() {
    return (
      <div>
        <h1>This is {this.state.val} website</h1>
        <button className="button" onClick={this.changeVal}>
          Change owner
        </button>
      </div>
    );
  }
}

// this "exports" the component so it displays on your localhost
ReactDOM.render(<Test />, document.getElementById("root"));
