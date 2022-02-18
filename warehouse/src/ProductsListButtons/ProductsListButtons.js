import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './ProductsListButtons.css';


export class ProductsListButtons extends Component {
    static propTypes = {
        onAddClicked: PropTypes.func,
    }

    render () {
        return (
            <div className='add'>              
                <button onClick={this.props.onAddClicked}>Добавить товар</button>
            </div>
        )
    }
}

 

