import React, { Component } from "react";
import './ProductItem.css'

export class ProductItem extends Component {
    constructor(props) {   
        super(props);  

        const { title, description, category} = props.item;
        
        this.state = {            
            title: title || '',
            description: description || '',
            category: category || '',
        }
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
    }    

    onTitleChange(event) {
        this.setState({ title: event.target.value });
    }

    onDescriptionChange(event) {
        this.setState({ title: event.target.value });
    }



    render () {
        return (
            <div className="main">      
                <h1>Список товаров</h1>                
                <input value={this.state.title} onChange={this.onTitleChange} />
                <input value={this.state.description} onChange={this.setState}/>    
                <input value={this.state.category} onChange={(event) => { this.setState({ category: event.target.value })} }/>                                 
            </div>
        )
    }
}
