import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state =  {
      text: 'Hello second',
      number: 2,
    }
  }

  render () { 
    return (
      <div className="App">  
        <p>{this.props.text}</p>
        <p>{this.state.text}</p>
        <button onClick={ () => { 
          this.setState({ 
            text: 'Clicked' + this.state.number,
            number: ++this.state.number, 
              }) 
            }}
          >Hi</button>
      </div>
    )
  }
}

export default App;
