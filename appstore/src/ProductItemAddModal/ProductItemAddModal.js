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
                <input value={this.state.title} onChange={(event) => { this.setState({ title: event.target.value })}}/>
                <input value={this.state.description} onChange={(event) => { this.setState({ description: event.target.value })}}/>
                <input value={this.state.category} onChange={(event) => { this.setState({ category: event.target.value })}}/>
                <div>
                    <button onClick={() => {
                        this.props.onAddItem({ title: this.state.title, description: this.state.description, category: this.state.category })
                    }}>Add</button>
                    <button onClick={this.props.onHideModal}>Hide</button>
                </div>
            </div>            
        )
    }
}