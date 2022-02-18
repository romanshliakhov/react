import React, { Component } from 'react';
import Product from './Product';
// import { ProductsList } from './ProductsList/ProductsList';
// import { ProductsListButtons } from './CarsListButtons/CarsListButtons';
// import { AddItemModal } from './AddItemModal/AddItemModal';
import { v4 as uuidv4 } from 'uuid';
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);    
    this.state = {
      products: [
        {
          id: uuidv4(),
          title: 'Телевизор UE43AU7100UXUA ',
          description: 'SAMSUNG',
          category: 'Телевизоры',
        },
        {
          id: uuidv4(),
          title: 'Телевизор QE55Q60AAUXUA',
          description: 'SAMSUNG',
          category: 'Телевизоры',
        },
        {
          id: uuidv4(),
          title: 'Телевизор 43UP81006LA',
          description: 'LG',
          category: 'Телевизоры',
        },
        {
          id: uuidv4(),
          title: 'Смартфон APPLE iPhone 13',
          description: 'APPLE',
          category: 'Смартфоны',
        },
        {
          id: uuidv4(),
          title: 'Смартфон SAMSUNG Galaxy S22',
          description: 'SAMSUNG',
          category: 'Смартфоны',
        },
        
      ],
    }
  }  

  render () { 
    return (
      <div className="app">  
        <h1>Товары на складе</h1>  
        {this.state.products.map((product, i) => {
          return (
            <Product 
              key={product.id}
              product={product} 
            />
          )
        } )}

        <button 
          onClick={() => { 
            this.setState({ 
              products: [...this.state.products,
                { 
                  title: 'Телевизор 1',
                  description: 'SAMSUNG 2',
                  category: 'Телевизоры 3',
                }
              ] 
            }) 
          }}>Add Item</button> 

          <button 
          onClick={() => { 
            this.setState({ 
              products: this.state.products.slice(0, this.state.products.length - 1) }) 
          }}>Remove Item</button>  
      </div>
    )
  }
}

export default App;
