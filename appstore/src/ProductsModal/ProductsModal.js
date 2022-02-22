import React, { Component } from "react";
import PropTypes from 'prop-types';
import './ProductsModal.css'

export class ProductsModal extends Component {
    static propTypes = {
        onAddItemClick: PropTypes.func,
        onEditItemClick: PropTypes.func,
        onCloseAddItemModalClick: PropTypes.func,
    }

    constructor(props){
        super(props);
        this.state = {
            title: this.props.product?.title || '',
            color: this.props.product?.color || '',
            size: this.props.product?.size || '',
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
                    <p>Цвет товара</p>
                    <input value = {this.state.color} onChange = {(event) => {this.setState({color: event.target.value})}}/>
                    <p>Обьем хранилища</p>
                    <input value = {this.state.size} onChange = {(event) => {this.setState({size: event.target.value})}}/> 
                    <p>Категория товара</p>
                    <select value = {this.state.category} onChange={(event) => {this.setState({category: event.target.value})}}>
                        <option>Смартфон</option>
                        <option>Ноутбук</option>
                        <option>Планшет</option>
                        <option>Компьютер</option>
                    </select>                   
                                     
                    <div className='modalBtns'>
                        <button className='modalBtn'>{this.props.product?.id? 'Edit': 'Add Product'}</button>                           
                        <button className='modalBtn' onClick={this.props.onCloseAddProductModalClick}>Close</button> 
                    </div>                                    
                </form>
            </div>
        )
    }
}