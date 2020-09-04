import React, {Component} from 'react';
import './Header.scss';



const Header =(props)=> {
   
    return(
        <div className='Header'>
            <div className='heading'>
                {props.headerTitle}
            </div>
        </div>
    )
     
}


export default Header;