import React, { Component } from 'react';
import { ProductItem } from './ProductItem/ProductItem';
import { ProductItemModal } from './ProductItemModal/ProductItemModal';
import { ProductItemAddModal } from './ProductItemAddModal/ProductItemAddModal';
import { v4 as uuidv4 } from 'uuid';
import './App.css'


class App extends Component {
  constructor(props) {
    super(props);    
    this.state = {
      isModalVisible: false,
      isModalAddVisible: false,
      itemIndexToView: 0,
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

    this.mapItem = this.mapItem.bind(this);
  }

  mapItem(item, i) {
    return (
    <ProductItem 
      key={item.id} 
      item={item} 
      onTitleChange={(text) => {
        this.setState({ products: this.state.products.map((currentItem) => {
          if (currentItem.id === item.id) {
            return {
              ...currentItem,
              title: text,
            }
          }
          return currentItem;
        }) 
      });
      }}
      onDescriptionChange={(text) => {
        this.setState({ products: this.state.products.map((currentItem) => {
          if (currentItem.id === item.id) {
            return {
              ...currentItem,
              description: text,
            }
          }
          return currentItem;
        }) 
      });
      }}
      onCategoryChange={(text) => {
        this.setState({ products: this.state.products.map((currentItem) => {
          if (currentItem.id === item.id) {
            return {
              ...currentItem,
              category: text,
            }
          }
          return currentItem;
        }) 
      });
      }}

      onEditItem={() => { 
        this.setState({ 
          isModalVisible: true,
          itemIndexToView: i,
        });       
        
      }}
    />)
  }

  render () { 
    return (
      <div className="app">  
        <h1>Товары на складе</h1>  
        {this.state.products.map(this.mapItem)}
        {this.state.isModalVisible ? 
        <ProductItemModal 
          item={this.state.products[this.state.itemIndexToView]} 
          onHideModal={() => {
            this.setState({ isModalVisible: false })
          }}
        /> : null}
        {this.state.isModalAddVisible ? 
        <ProductItemAddModal   
          onAddItem={( {title, description, category}) => {
            this.setState({
              isModalAddVisible: false,
              products: [
                ...this.state.products,
                {
                  id: uuidv4(),
                  title,
                  description,
                  category,
                }
              ]
            })
          }}
        
          onHideModal={() => {
            this.setState({ isModalAddVisible: false })
          }}
        /> : null}    
        <br/>
        <br/>    
        <button onClick={() => { this.setState({ isModalAddVisible: true })}}>Add Item</button>
      </div>
    )
  }
}

export default App;
