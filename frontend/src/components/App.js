import React, { Component } from "react";
import { render } from "react-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
      placeholder: "Loading"
    };
  }

  componentDidMount() {
    fetch("api/lead")
      .then(response => {
        if (response.status > 400) {
          return this.setState(() => {
            return { placeholder: "Something went wrong!" };
          });
        }
        return response.json();
      })
      .then(data => {
        console.log(data)
        this.setState(() => {
          return {
            data,
            loaded: true
          };
        });
      });
  }

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            {Object.keys(this.state.data)?.map}
          </tr>
        </thead>
      </table>()
    );
  }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);