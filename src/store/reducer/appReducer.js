import * as actionType from '../actions'
import { act } from 'react-dom/test-utils';
var data = require('./data');



const initialState = {
    library : {...data},
    collections: {},
}

// console.log(data)

const reducer = ( state = initialState, action ) =>{  
    let coll;
    let lib ;
    switch( action.type ){
        case actionType.AddBookToCollections:
            coll = state.collections;
            lib = state.library;
            coll[ action.data ] = lib[ action.data ];
            delete lib[ action.data ]
            // console.log( lib )
            // console.log( coll )
            return {
                ...state,
                collections : coll,
                library : lib,
            }

        case actionType.RemoveBookFromCollections:
            coll = state.collections;
            lib = state.library;
            lib[ action.data ] = state.collections[ action.data ]
            delete state.collections[ action.data ]
            // console.log('coll after removal : ', coll);
            return {
                ...state,
                collections : coll,
                library : lib,
                
            }
        case actionType.SetBookToOpen:
            // console.log( action.data )
            return {
                ...state,
                bookToOpen : action.data,
                
            }
    }
    
    return state

}

export default reducer;