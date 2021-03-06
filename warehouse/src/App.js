import React, { Component } from 'react';
import { ProductsList } from './ProductsList/ProductsList';
import { ProductsListButtons } from './ProductsListButtons/ProductsListButtons';
import { AddProductModal } from './AddProductModal/AddProductModal';
import { v4 as uuidv4 } from 'uuid';
import './App.css'
import { Filter } from './Filter/Filter';


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

    this.onFilterTitle = (value) =>{
      if(value){
        this.setState({
          isFiltered: true,
          filteredProducts: [...this.state.products].filter((product) => product.title.toLowerCase().includes(value.toLowerCase())
        )}) 
      } else {
        this.setState({
          ...this.state.products,
        })
      }
    }

    this.onFilterCategory = (value) =>{
      if(value){
        this.setState({
          isFiltered: true,
         filteredProducts: [...this.state.products].filter((product) => product.category.toLowerCase().includes(value.toLowerCase())
       )}
     )
     }else{
       this.setState({
         ...this.state.products,
       })
     }
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
          title: '?????????????????? UE43AU7100UXUA ',
          description: 'SAMSUNG',
          category: '????????????????????',
        },
        {
          id: uuidv4(),
          title: '?????????????????? QE55Q60AAUXUA',
          description: 'SAMSUNG',
          category: '????????????????????',
        },
        {
          id: uuidv4(),
          title: '?????????????????? 43UP81006LA',
          description: 'LG',
          category: '????????????????????',
        },
        {
          id: uuidv4(),
          title: '???????????????? APPLE iPhone 13',
          description: 'APPLE',
          category: '??????????????????',
        },
        {
          id: uuidv4(),
          title: '???????????????? SAMSUNG Galaxy S22',
          description: 'SAMSUNG',
          category: '??????????????????',
        },
        {
          id: uuidv4(),
          title: '?????????????????????? LG GA-B509SLSM',
          description: 'LG',
          category: '????????????????????????',
        },
        
      ],
    }
  }  

  render () { 
    return (
      <div className="app">  
        <h1>???????????? ???? ????????????</h1>  
        <Filter 
          onFilterTitle = {this.onFilterTitle}
          onFilterCategory = {this.onFilterCategory}
        />
        <ProductsList 
          products={this.state.isFiltered? this.state.filteredProducts : this.state.products}
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
