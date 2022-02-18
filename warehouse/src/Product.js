import React, { Component } from "react";

class Product extends Component {
    render() {
        return (
            <div className="main">    
                <div className="main-rows">
                    <div className="main-item">{this.props.product?.title || ' - '}</div>
                    <div className="main-item">{this.props.product?.description || ' - '}</div>
                    <div className="main-item">{this.props.product?.category || ' - '}</div> 
                </div>                                           
            </div>
        )
    }
}

export default Product;