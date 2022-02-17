import React, { Component } from 'react';
import { ProductItem } from './ProductItem/ProductItem';
import { ProductItemModal } from './ProductItemModal/ProductItemModal';
import { v4 as uuidv4 } from 'uuid';
import './App.css'


class App extends Component {
  constructor(props) {
    super(props);    
    this.state = {
      isModalVisible: false,
      itemIndexToView: 0,
      productItems: [
        {
          id: uuidv4(),
          title: 'Название товара',
          description: 'Прозводитель товара',
          category: 'Категория',
        }
      ],
    }

    this.mapItem = this.mapItem.bind(this);
  }

  mapItem(item) {
    return (
    <ProductItem 
      key={item.id} 
      item={item} 
      onTitleChange={(text) => {
        this.setState({ productItems: this.state.productItems.map((currentItem) => {
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
        this.setState({ productItems: this.state.productItems.map((currentItem) => {
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
        this.setState({ productItems: this.state.productItems.map((currentItem) => {
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

      onShowItem={() => { 
        this.setState({ isModalVisible: true });        
      }}
    />)
  }

  render () { 
    return (
      <div className="app">  
        {this.state.productItems.map(this.mapItem)}
        {this.state.isModalVisible ? 
        <ProductItemModal 
          item={this.state.productItems[this.state.itemIndexToView]} 
          onHideModal={() => {
            this.setState({ isModalVisible: false })
          }}
        /> : null}
      </div>
    )
  }
}

export default App;
