import React, { Component } from "react";
import './ProductItem'

export class ProductItem extends Component {
    constructor(props) {   
        super(props);    
        const { title, description} = props.item;
        
        this.state = {            
            title: title || '',
            description: description || '',
        }
    }    

    render () {
        return (
            <div className="main">                
                <input value={this.state.title} onChange={(event) => { this.setState({ title: event.target.value })} } />
                <input value={this.state.description} onChange={(event) => { this.setState({ description: event.target.value })} }/>
            </div>
        )
    }
}
