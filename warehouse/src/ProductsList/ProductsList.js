import React, {Component} from 'react';
import { Product } from '../Product/Product';
import './ProductsList.css';
export class ProductsList extends Component {
    render () {
        return (
            <div className="main">    
                {this.props.products.map((product) => {
                    return (
                        <Product 
                        key={product.id}
                        product={product} 
                        onEdit = {() => this.props.onEditItem(product.id)}
                        onDelete={() => this.props.onDeleteItem(product.id) }                        
                        />
                    )
                } )}                         
            </div>
        )
    }
}

