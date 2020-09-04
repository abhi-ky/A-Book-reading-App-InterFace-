import React, {Component} from 'react';
import './AppSetting.scss';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import BackNav from '../BottomNav/BackNav';
import HomeNav from '../BottomNav/HomeNav';



class AppSetting extends Component {

    state ={}

    render(){
        return(
            <div className='AppSetting'>
                <div className='settingHeader'>
                    <Header headerTitle = { "Settings"} />
                </div>
                <div className='settingOptions'>
                    <ul>
                        <Link to='/booksLibrary' >
                            <li>Add Books to Collections</li>
                        </Link>
                        <Link to='/booksCollections' >
                            <li>Remove Books from Collections</li>
                        </Link>
                    </ul>
                </div>
                <BackNav />
                <HomeNav />
            </div>
        )
    }
}


export default AppSetting;