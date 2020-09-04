import React, {Component} from 'react';
import './App.scss';
import {BrowserRouter as Router  } from 'react-router-dom';
import { Route } from 'react-router-dom';
import BooksCollections from './components/BooksCollections/BooksCollections';
import HomePage from './components/HomePage/HomePage';
import AppSetting from './components/AppSettings/AppSetting';
import BooksLibrary from './components/Bookslibrary/BooksLibrary';
import Reading from './components/Reading/Reading';

import { connect } from 'react-redux';
import * as actionType from './store/actions';

var data = require('./store/reducer/data')

class App extends Component {
  state ={
     
  }
 
  render(){
    // console.log(data)
    // console.log( bookData )
    return (
      <Router>
          <Route  path = "/reading" >
            <Reading 
            bookToOpen = { data[ this.props.bookToOpen ] }            
          />
          </Route>
          <Route exact = { true } path = { "/" }        component = { HomePage } />
         
          <Route exact = { true } path = { "/appSetting" }     component = { AppSetting  } />
          <Route exact = { true } path = { "/booksCollections" } component = {  BooksCollections }/>
          <Route exact = { true } path = { "/booksLibrary" }     component = { BooksLibrary }/>
      </Router>
      );
  }
}

const mapStateToProps = ( state ) =>{
  return {
      bookToOpen : state.appRed.bookToOpen,
  }
}

const mapDispatchToProps = dispatch => {
  return {
      removeFromCollections   : ( id ) => dispatch( { type : actionType.RemoveBookFromCollections, data : id }),
      
  }
}

export default connect( mapStateToProps , mapDispatchToProps  )(App);
// export default App;
