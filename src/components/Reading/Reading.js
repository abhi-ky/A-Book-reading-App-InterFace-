import React, {Component} from 'react';
import './Reading.scss';
import Header from '../Header/Header';
import BackNav from '../BottomNav/BackNav';
import HomeNav from '../BottomNav/HomeNav';

 

const Reading =(props)=>{
    // console.log(props.content)
    // console.log(props.bookToOpen)
    return(
        <div className='Reading'>
            <Header headerTitle={ props.bookToOpen.title } />

            <div className='readingContent' >
                {props.bookToOpen.content}
            </div>
            <BackNav />
            <HomeNav />
        </div>
    )
}


export default Reading;