import React, {Component} from 'react';
import './Header.css';


export class Header extends Component {
    render () {
        return (
            <div className='header'>             
                <h1 className='title'>Товары на складе</h1>
            </div>
        )
    }
}