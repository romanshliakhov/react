import React, { Component } from 'react';
import { ProductsList } from './ProductsList/ProductsList';
import { ProductsListButtons } from './ProductsListButtons/ProductsListButtons';
import { AddProductModal } from './AddProductModal/AddProductModal';
import { v4 as uuidv4 } from 'uuid';
import './App.css'


class App extends Component {
  constructor(props) {
    super(props);    
    this.onAddItem = ({ title, description, category}) => {
      this.setState({
        isAddModalVisible: false,
        products: [
          ...this.state.products,          
          {
            id: uuidv4(),
            title,
            description,
            category
          }
        ]
      })
    }

    this.onModalClose = () => {
      this.setState({
        isAddModalVisible: false,   
        editingProduct: null,       
      })
    }

    this.onEditItem = (id) => {
      const product = this.state.products.find((product) => product.id === id)
      this.setState({
        isAddModalVisible: true,
        editingProduct: product,
      })
    }

    this.onApplyEditItem = (product) => {
      this.setState({
        isAddModalVisible: false,
        editingProduct: null,
        products: this.state.products.map((stateProduct) => {
          if (stateProduct.id === product.id){
            return product;
          }
          return stateProduct;
        })
      })
      
    }

    this.onDeleteItem = (id) => {
      this.setState({
        products: this.state.products.filter((product) => product.id !== id)         
      })
    }

    this.state = {
      isAddModalVisible: false,
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
        {
          id: uuidv4(),
          title: 'Холодильник LG GA-B509SLSM',
          description: 'LG',
          category: 'Холодильники',
        },
        
      ],
    }
  }  

  render () { 
    return (
      <div className="app">  
        <h1>Товары на складе</h1>  
        <ProductsList 
          products={this.state.products} 
          onDeleteItem = {this.onDeleteItem}         
          onEditItem = {this.onEditItem}         
        />
        <ProductsListButtons onAddClicked={ () => { this.setState({ isAddModalVisible: true })} } />
        {this.state.isAddModalVisible ? 
        <AddProductModal 
          onAddItemClick={this.onAddItem} 
          onEditItemClick = {this.onApplyEditItem} 
          onCloseAddProductModalClick={this.onModalClose} 
          product = {this.state.editingProduct}
        /> 
        : null}
      </div>
    )
  }
}

export default App;
