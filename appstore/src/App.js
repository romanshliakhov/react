import React, { Component } from 'react';
import { ProductItem } from './ProductItem/ProductItem';
import { v4 as uuidv4 } from 'uuid';
import './App.css'
import { ProductItemModal } from './ProductItemModal/ProductItemModal';

const mapItem = (item) => {
  return (<ProductItem key={item.id} item={item} />)
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productItems: [
        {
          id: 'safa',
          title: 'Название товара',
          description: 'Прозводитель товара',
          category: 'Категория',
        }
      ],
    }
  }

  render () { 
    return (
      <div className="app">  
        {this.state.productItems.map(mapItem)}
        <ProductItemModal item={this.state} />
      </div>
    )
  }
}

export default App;
