import React, { Component } from "react";
import './Product.css';

export class Product extends Component {
    render() {
        return (
            <div className="main-rows">
                <div className="main-item">{this.props.product?.title || ' - '}</div>
                <div className="main-item">{this.props.product?.description || ' - '}</div>
                <div className="main-item">{this.props.product?.category || ' - '}</div>                              
                <button className="editBtn" onClick={this.props.onEdit}>Edit</button>                
                <button className="deleteBtn" onClick={this.props.onDelete}>Delete</button>                
            </div>   
        )
    }
}
