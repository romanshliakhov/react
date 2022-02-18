import React, { Component } from "react";
import './ProductItemModal.css'

export class ProductItemModal extends Component {
    render() {
        return (
            <div className="modal">
                <div>{this.props.item.title}</div>
                <div>{this.props.item.description}</div>
                <div>{this.props.item.category}</div>
                <button onClick={this.props.onHideModal}>Hide</button>
            </div>            
        )
    }
}