import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Filters.css';

export class Filters extends Component {
    static propTypes = {
        onFilterTitle: PropTypes.func,
        onFilterCategory: PropTypes.func,
    }
    constructor(props){
        super(props);
        this.state = {
            title: this.props.product?.title || '',
            category: this.props.product?.category || '',
        }
    }

    render() {
        return (
            <div className="filter">
                <input className='filterSearch' placeholder='Поиск по названию' onChange = {(event) => {this.props.onFilterTitle(event.target.value)}}/>
                <input className='filterSearch' placeholder='Поиск по категории' onChange = {(event) => {this.props.onFilterCategory(event.target.value)}}/>
            </div>   
        )
    }
}