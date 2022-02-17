import React, { Component } from "react";
import './ProductItem.css'

export class ProductItem extends Component {
    constructor(props) {   
        super(props);  

        // const { title, description, category} = props.item;
        
        // this.state = {            
        //     title: title || '',
        //     description: description || '',
        //     category: category || '',
        // }

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
        this.onCategoryChange = this.onCategoryChange.bind(this);
    }    

    onTitleChange(event) {
        this.props.onTitleChange(event.target.value);
        // this.setState({ title: event.target.value });
    }

    onDescriptionChange(event) {
        this.props.onDescriptionChange(event.target.value);
        // this.setState({ description: event.target.value });
    }

    onCategoryChange(event) {
        this.props.onCategoryChange(event.target.value);
        // this.setState({ category: event.target.value });
    }



    render () {
        return (
            <div className="main">      
                <h1>Список товаров</h1>                
                <input value={this.props.item.title} onChange={this.onTitleChange} />
                <input value={this.props.item.description} onChange={this.onDescriptionChange}/>    
                <input value={this.props.item.category} onChange={this.onCategoryChange}/> 
                <button onClick={this.props.onShowItem}>Show</button>                              
            </div>
        )
    }
}
