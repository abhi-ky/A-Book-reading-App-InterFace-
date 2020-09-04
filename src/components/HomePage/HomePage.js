import React, {Component} from 'react';
import './HomePage.scss';
import ReadingPuppy from '../../assets/Images/reading.jpg';
import {Link }from 'react-router-dom';
import SettingIcon  from '../../assets/Images/gear.png';
class HomePage extends Component {

    state ={}

    render(){
        return(
            <div className='HomePage'>
                <div className='homePageContent' >
                    <img className='homePageImage' src={ReadingPuppy}/>
                    <div className='title'>
                        <b>Let's Read To Grow Up.....</b>
                    </div>

                </div>
                <div className='settingIcon'>
                    <Link to = '/appSetting'  >        
                        <img src={SettingIcon}></img>
                    </Link>
                </div>
                <div className='bottomNav'> 
                        <div className='bottomNavContent'>
                            <Link to = '/booksCollections'  >
                                <div className='collections'>Collections</div>
                            </Link>
                            <Link to = '/booksLibrary'  >
                                <div className='library'>Library</div>
                            </Link>
                        </div>
                    </div>
            </div>
        
        )
    }
}


export default HomePage;