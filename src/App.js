import './App.css';
//part of class based component
import React, { Component } from 'react';
//class based component
class App extends Component {
  constructor(props) {
    super(props)
    //stores the data entered into the form
    this.state = {
      firstName:""
    }
    //this.handleChange = this.handleChange.bind(this)
  }
  //moves input from form to state
  handleChange = (e)=>{
    this.setState({
      firstName:e.target.value
    })
  }

  //don't forget to render!
  render() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>2nd form in react</p>
        <form>
          <input type="text" value={this.state.firstName}
           onChange={e => this.handleChange(e)}></input>
          <input type="submit"></input>
        </form>
      </header>
    </div>
  );
}
}


export default App;
