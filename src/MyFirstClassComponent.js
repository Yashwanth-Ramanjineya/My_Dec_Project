import React, { Component } from "react";

class MyFirstClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      ChangedBy: "Raja"
    };
  }

  static getDerivedStateFromProps(state) {
    
    console.log("hello this is derived state from props")
    return null;
  }

  componentDidMount() {
    console.log("this is component did mount")
  }

  shouldComponentUpdate() {
    console.log("this is should component update");
    return false;
  }

  componentDidUpdate() {
    console.log("this is component Did update")
  }

  componentWillUnmount() {
    console.log("this is component Unmount")
  }


  myButtonClick = (e) => {
    e.preventDefault();
    this.setState({
        counter: this.state.counter + 1,
        ChangedBy: "Yashwanth"
    })
  }
  render() {
    return (
      <div>
        <h1>This is My Class Component {this.state.counter} this counter changed by {this.state.ChangedBy} {this.props.mydatahere}</h1>
        <button onClick={(e) => this.myButtonClick(e)}>On Click</button>
      </div>
    );
  }
}

export default MyFirstClassComponent;
