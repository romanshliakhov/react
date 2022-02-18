import React, { Component } from "react";
import './ProductItemAddModal.css'

export class ProductItemAddModal extends Component {        
    constructor(props) {
        super(props);
        this.state = {            
            title: '',
            description: '',
            category: '',
        }    
    }

    render() {
        return (
            <div className="modal">
                <input placeholder="Название товара" value={this.state.title} onChange={(event) => { this.setState({ title: event.target.value })}}/>
                <input placeholder="Производитель товара" value={this.state.description} onChange={(event) => { this.setState({ description: event.target.value })}}/>
                <input placeholder="Категория товара" value={this.state.category} onChange={(event) => { this.setState({ category: event.target.value })}}/>
                <div>
                    <button onClick={() => {
                        this.props.onAddItem({ title: this.state.title, description: this.state.description, category: this.state.category })
                    }}>Add</button>
                    <button onClick={this.props.onHideModal}>Cancel</button>
                </div>
            </div>            
        )
    }
}