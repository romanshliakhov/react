import React, { Component } from 'react';
import { ProductItem } from './ProductItem/ProductItem';
import { v4 as uuidv4 } from 'uuid';
import './App.css'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productItems: [
        {
          id: 'safa',
          title: 'Buy something',
          description: 'Buy drinks',
        }
      ],
    }
  }

  render () { 
    return (
      <div className="app">  
        {this.state.productItems.map((item) => (<ProductItem key={item.id} item={item} />))}
      </div>
    )
  }
}

export default App;
