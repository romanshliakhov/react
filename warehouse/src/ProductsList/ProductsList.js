import React, {Component} from 'react';

export class ProductsList extends Component {
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