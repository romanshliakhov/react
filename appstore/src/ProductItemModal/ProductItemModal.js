import React, { Component } from "react";
import './ProductItemModal.css'

export class ProductItemModal extends Component {
    render() {
        return (
            <div className="modal">
                <p>{this.props.item.title}</p>
                <p>{this.props.item.description}</p>
                <p>{this.props.item.category}</p>
                <button onClick={this.props.onHideModal}>Hide</button>
            </div>            
        )
    }
}