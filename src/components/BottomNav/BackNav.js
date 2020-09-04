import React, { Component } from 'react';
import BackIcon from '../../assets/Images/back.png';
import './BackNav.scss';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router-dom';

class BackNav extends Component {

    constructor(props){
        super(props);
        this.toGoBack = this.toGoBack.bind(this);
    }

    toGoBack = () =>{
        this.props.history.goBack();
    }

    render(){
        return (
            <div className='BackNav'>
                    <img onClick={ this.toGoBack } src={ BackIcon }></img>
            </div>
        )
    }
}

export default withRouter(BackNav) ;