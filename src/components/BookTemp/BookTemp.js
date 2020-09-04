import React, {Component} from 'react';
import './BookTemp.scss';
import AddIcon from '../../assets/Images/add.png';
import RemoveIcon from '../../assets/Images/add.png';


const BookTemp = (props) =>{


//    let actionOnBookClick = () =>{
//     window.confirm("Add this book to collections :")
//    }
    return(
        <div className='BookTemp' onClick={ props.click }>
            <div className='card' >
                <div className='container1'>
                    <div className='textDetails'>
                        <div className='bookTitle'><strong> {props.title}  </strong></div>
                        <div className='bookAuthor'>{props.author}</div>
                    </div>
                    <div style={{ flexGrow : '1'}}></div>
                    <div className='imageDetails'>
                        <img src={ props.img }/>
                    </div>
                </div>
                <div className='description'>{props.description}</div>
                    {/* <div className='actions' >
                        <img className='addIcon' src={AddIcon}/>
                        <div style={{ flexGrow : '1'}}></div>
                        <img className='removeIcon' src={ RemoveIcon } />
                    </div> */}
            </div>

        </div>
    )
    
}


export default BookTemp;