import React, {
  Component
} from 'react';
import {
  Header
} from './Header/Header';
import {
  ProductsList
} from './ProductsList/ProductsList';
import {
  ProductsModal
} from './ProductsModal/ProductsModal';
import {
  ProductsListButtons
} from './ProductsListButtons/ProductsListButtons';
import {
  Filters
} from './Filters/Filters';
import {
  v4 as uuidv4
} from 'uuid';
import './App.css'


class App extends Component {
  constructor(props) {
    super(props);

    this.onAddItem = ({
      title,
      color,
      size,
      category
    }) => {
      this.setState({
        isAddModalVisible: false,
        products: [
          ...this.state.products,
          {
            id: uuidv4(),
            title,
            color,
            size,
            category,
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
      this.state.isFiltered ?
        this.setState({
          isAddModalVisible: false,
          editingItem: null,
          filteredProducts: this.state.filteredProducts.map((stateProduct) => {
            if (stateProduct.id === product.id) {
              return product;
            }
            return stateProduct;
          }),
          products: this.state.products.map((stateProduct) => {
            if (stateProduct.id === product.id) {
              return product;
            }
            return stateProduct;
          }),
        }) :
        this.setState({
          isAddModalVisible: false,
          editingProduct: null,
          products: this.state.products.map((stateProduct) => {
            if (stateProduct.id === product.id) {
              return product;
            }
            return stateProduct;
          })
        })
    }

    this.onDeleteItem = (id) => {
      this.state.isFiltered ?
        this.setState({
          filteredProducts: this.state.filteredProducts.filter((product) => product.id !== id),
          products: this.state.products.filter((product) => product.id !== id)

        }) :
        this.setState({
          products: this.state.products.filter((product) => product.id !== id)
        })
    }

    this.onFilterTitle = (value) => {
      if (value && value !== '-') {
        this.setState({
          isFiltered: true,
          filteredProducts: [...this.state.products].filter((product) => product.title.toLowerCase().includes(value.toLowerCase()))
        })
      } else if (value && value === '-') {
        this.setState({
          isFiltered: true,
          filteredProducts: [...this.state.products].filter((product) => product.title === '')
        })
      } else {
        this.setState({
          isFiltered: false,
          ...this.state.products,
        })
      }
    }

    this.onFilterCategory = (value) =>{
      if(value && value !== '-'){
        this.setState({
          isFiltered: true,
         filteredProducts: [...this.state.products].filter((product) => product.category.toLowerCase().includes(value.toLowerCase())
       )}
     )
     }else if(value && value === '-'){
      this.setState({
        isFiltered: true,
       filteredProducts: [...this.state.products].filter((product) => product.category === '')
      })
     }else{
       this.setState({
         isFiltered: false,
         ...this.state.products,
       })
     }
    }

    this.state = {      
      isModalAddVisible: false,
      itemIndexToView: 0,
      products: [{
          id: uuidv4(),
          title: 'iPhone 13 Pro',
          color: 'Gold',
          size: '128GB',
          category: 'Смартфон',
        },
        {
          id: uuidv4(),
          title: 'iPad 8 32GB',
          color: 'Space grеy',
          size: '32GB',
          category: 'Планшет',
        },
        {
          id: uuidv4(),
          title: 'MacBook Air M1 13',
          color: 'Silver',
          size: '256GB',
          category: 'Ноутбук',
        },
        {
          id: uuidv4(),
          title: 'iPhone 12',
          color: 'Green',
          size: '64GB',
          category: 'Смартфон',
        },
        {
          id: uuidv4(),
          title: ' iMac M1 24"',
          color: 'Silver',
          size: '1TB',
          category: 'Компьютер',
        },

      ],
      filteredProducts: [],
    }
  }

  render() {
    return ( <div className = "app" >
      < Header />
      <Filters 
        onFilterTitle = {this.onFilterTitle}
        onFilterCategory = {this.onFilterCategory}
      /> 
      <ProductsList  
        products = {this.state.isFiltered? this.state.filteredProducts : this.state.products}
        onDeleteItem = {this.onDeleteItem}
        onEditItem = {this.onEditItem}
      />
      <ProductsListButtons onAddClicked={ () => { this.setState({ isAddModalVisible: true })} } />
      {this.state.isAddModalVisible ?
      <ProductsModal
        onAddItemClick = {this.onAddItem}
        onEditItemClick = {this.onApplyEditItem}
        onCloseAddProductModalClick = {this.onModalClose}
        product = {this.state.editingProduct}
        /> : null
      } 
      </div>
    )
  }
}

export default App;