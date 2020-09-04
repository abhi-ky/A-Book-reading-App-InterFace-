import React, {Component} from 'react';
import './BooksCollections.scss';

import Header from '../Header/Header';

import { connect } from 'react-redux';
import * as actionType from '../../store/actions';

import BookTemp from '../BookTemp/BookTemp';
import Backdrop from '../Backdrop/Backdrop';

import { Link } from 'react-router-dom';
import BackNav from '../BottomNav/BackNav';
import HomeNav from '../BottomNav/HomeNav';

class BooksCollections extends Component {

    state ={
        collections : Object.values( this.props.updatedCollections ),
        toggleRemFromCollPopUp : false,
        bookId : null,
    }

    setCollection = () =>{
        this.setState( { collections : Object.values(this.props.updatedCollections)})
    }
    
    toggleRemFromCollPopUpScreen = ( id ) =>{
        this.setState( prevState =>{
            return { 
                toggleRemFromCollPopUp : !prevState.toggleRemFromCollPopUp,
                bookId : id ,
            }
        })
        // console.log( id , this.state.togglRemFromCollPopUp )
    }
    toggleRemFromCollPopUp = (  ) =>{
        this.setState( prevState =>{
            return { toggleRemFromCollPopUp : !prevState.toggleRemFromCollPopUp }
        })
        // console.log( this.state.toggleRemFromCollPopUp )
    }
    render(){
        // console.log(this.props.updatedCollections)
        let confirmation;
        let backdrop;
        if( this.state.toggleRemFromCollPopUp ){
            backdrop = <Backdrop click={ this.toggleRemFromCollPopUp } />
            confirmation = (
                <div className='confirmScreen'>
                    <div className='confirmation'>
                        <Link to ='/reading' >
                            <button type='button' 
                            className='openButton'
                            
                        >
                        Open
                        </button>
                        </Link>
                        {/* <div className='confirmText'>Add this from to Collections ?</div> */}
                        <button type='button' 
                            onClick={ () => {
                                this.props.removeFromCollections( this.state.bookId ) 
                                this.toggleRemFromCollPopUp()
                                this.setCollection()
                                }
                            } className='addButton' >
                            Remove from Collections
                        </button>
                        <button type='button' onClick={ this.toggleRemFromCollPopUp } className='cancelButton'>Cancel</button>
                    </div>
                </div>
            )
        }
        return(


            <div className='BooksCollections'>
               
                { backdrop }
                { confirmation }
                <div className='collectionHeader'>
                    <Header headerTitle={"Collections"} />
                </div>
                <div className='displayBooks' >
                    {
                        this.state.collections.map( item =>{
                            return(
                                <BookTemp 
                                    key = {item.id}
                                    click = { () => this.toggleRemFromCollPopUpScreen(item.id )  }
                                    id = { item.id }
                                    title = { item.title }
                                    img = { item.img }
                                    author = { item.author }
                                    description  = { item.description}
                                
                                />
                            )
                        })
                    }
                </div>
                <BackNav />
                <HomeNav />
            </div>
        )
    }
}

const mapStateToProps = ( state ) =>{
    return {
        updatedCollections : state.appRed.collections,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeFromCollections   : ( id ) => dispatch( { type : actionType.RemoveBookFromCollections, data : id }),
        
    }
}

export default connect( mapStateToProps , mapDispatchToProps  )(BooksCollections);



// export default BooksCollections;