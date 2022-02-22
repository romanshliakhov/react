import React, { Component } from "react";
import './ProductsItem.css';

export class ProductsItem extends Component {
    render() {
        return (
            <div className="main-rows">
                <div className="main-item">{this.props.product?.title || '-'}</div>
                <div className="main-item">{this.props.product?.color || '-'}</div>
                <div className="main-item">{this.props.product?.size || '-'}</div>
                <div className="main-item">{this.props.product?.category || '-'}</div>                              
                <button className="editBtn" onClick={this.props.onEdit}>Edit</button>                
                <button className="deleteBtn" onClick={this.props.onDelete}>Delete</button>                
            </div>   
        )
    }
}
