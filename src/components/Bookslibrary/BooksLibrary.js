import React, {Component} from 'react';
import './BooksLibrary.scss';
import Header from '../Header/Header';

import { connect } from 'react-redux';
import * as actionType from '../../store/actions';

import BookTemp from '../BookTemp/BookTemp';
import Backdrop from '../Backdrop/Backdrop';
import { Link, Router, Route } from 'react-router-dom';
import Reading from '../Reading/Reading';
import BackNav from '../BottomNav/BackNav';
import HomeNav from '../BottomNav/HomeNav';

class BooksLibrary extends Component {

    state = {
        books : Object.values(this.props.library),
        toggleAddToCollPopUp : false,
        bookId : null,

    }
    setLibrary = () =>{
        this.setState( { books : Object.values(this.props.library)})
    }
    
    toggleAddToCollPopUpScreen = ( id ) =>{
        this.setState( prevState =>{
            return { 
                toggleAddToCollPopUp : !prevState.toggleAddToCollPopUp,
                bookId : id ,
            }
        })
        // console.log( id , this.state.toggleAddToCollPopUp )
    }
    toggleAddToCollPopUp = (  ) =>{
        this.setState( prevState =>{
            return { toggleAddToCollPopUp : !prevState.toggleAddToCollPopUp }
        })
        // console.log( this.state.toggleAddToCollPopUp )
    }
    render(){
        let confirmation;
        let backdrop;
        // console.log( this.props.updatedCollections )
        if( this.state.toggleAddToCollPopUp ){
            backdrop = <Backdrop click={ this.toggleAddToCollPopUp } />
            confirmation = (
                <div className='confirmScreen'>
                    <div className='confirmation'>
                        {/* <div className='confirmText'>Add this file to Collections ?</div> */}
                        <Link to ='/reading' >
                            <button type='button' 
                            className='openButton'
                            onClick={ () =>{
                                // this.props.addBookToCollections( this.state.bookId ) 
                                this.props.setBookToOpen( this.state.bookId )
                            }}
                            >Open</button>
                        </Link>
                        
                        <button type='button' 
                            onClick={ () => {
                                this.props.addBookToCollections( this.state.bookId ) 
                                this.props.setBookToOpen( this.state.bookId )
                                this.toggleAddToCollPopUp()
                                this.setLibrary()
                                }
                            } 
                            className='addButton' 
                        >
                        Add to Collections
                        </button>
                        <button type='button' onClick={ this.toggleAddToCollPopUp } className='cancelButton'>Cancel</button>
                    </div>
                </div>
            )
        }
        return(
            <div className='BooksLibrary'>
                { backdrop }
                { confirmation }
                <div className='libraryHeader'>
                    <Header headerTitle={"Library"} />
                </div>
                <div className='displayBooks' >
                    {
                        this.state.books.map( item =>{
                            return(
                                <BookTemp 
                                    key = {item.id}
                                    click = { () => this.toggleAddToCollPopUpScreen(item.id )  }
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
        library : state.appRed.library,
        updatedCollections : state.appRed.collections,
    }
}



const mapDispatchToProps = dispatch => {
    return {
        addBookToCollections   : ( id ) => dispatch( { type : actionType.AddBookToCollections, data : id }),
        setBookToOpen   : (id) => dispatch( { type : actionType.SetBookToOpen, data : id })
        // setUserData         : ( userData ) => dispatch( { type : actionType.SET_USER_DATA, data : userData })
    }
}


export default connect( mapStateToProps , mapDispatchToProps  )(BooksLibrary);




// export default BooksLibrary;