import React, { Component } from "react";
import './ProductItem.css'

export class ProductItem extends Component {
    constructor(props) {   
        super(props);  
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
        this.onCategoryChange = this.onCategoryChange.bind(this);
    }    

    onTitleChange(event) {
        this.props.onTitleChange(event.target.value);        
    }

    onDescriptionChange(event) {
        this.props.onDescriptionChange(event.target.value);        
    }

    onCategoryChange(event) {
        this.props.onCategoryChange(event.target.value);        
    }

    render () {
        return (
            <div className="main">    
                <div className="main-rows">
                    <div className="main-item">{this.props.item.title || " - "}</div>
                    <div className="main-item">{this.props.item.description || " - "}</div>
                    <div className="main-item">{this.props.item.category || " - "}</div>
                </div>
                <div className="main-btns">
                    <button onClick={this.props.onEditItem}>Edit</button>                              
                    {/* <button onClick={this.props.onDeleteItem}>Delete</button>    */}
                    <button onClick={() => {
                        this.setState({ 
                            productItems: this.state.productItems.slice(0, this.state.productItems.length -1 ) })
                    }}>Delete</button>  
                </div>                              
            </div>
        )
    }
}
