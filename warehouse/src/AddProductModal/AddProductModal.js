import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './AddProductModal.css';

export class AddProductModal extends Component {
    static propTypes = {
        onAddItemClick: PropTypes.func,
        onEditItemClick: PropTypes.func,
        onCloseAddItemModalClick: PropTypes.func,
    }

    constructor(props){
        super(props);
        this.state = {
            title: this.props.product?.title || '',
            description: this.props.product?.description || '',
            category: this.props.product?.category || '',
        }
    }


    render () {        
        return (
            <div className = "modalForm">
                <form onSubmit={() => {
                    this.props.product?.id ? 
                    this.props.onEditItemClick({...this.state, id: this.props.product.id}) :
                    this.props.onAddItemClick(this.state)
                }}>
                    <p>Название товара</p>
                    <input value = {this.state.title} onChange = {(event) => {this.setState({title: event.target.value})}}/>
                    <p>Производитель товара</p>
                    <input value = {this.state.description} onChange = {(event) => {this.setState({description: event.target.value})}}/>
                    <p>Категория товара</p>
                    <input value = {this.state.category} onChange = {(event) => {this.setState({category: event.target.value})}}/>                   
                                     
                    <div className='modalBtns'>
                        <button className='modalBtn'>{this.props.product?.id? 'Edit': 'Add Product'}</button>                           
                        <button className='modalBtn' onClick={this.props.onCloseAddProductModalClick}>Close</button> 
                    </div>                                    
                </form>
            </div>
        )
    }
}