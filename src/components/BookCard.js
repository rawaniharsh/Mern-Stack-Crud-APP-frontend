import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const BookCard = (props) => {
    const  book  = props.book;

    return(
        <div className="card-container">
            <img className="image-card" src="https://images-na.ssl-images-amazon.com/images/I/61+-p057etL._SX390_BO1,204,203,200_.jpg" alt="" />
            <div className="desc">
                <h3 className="book-title">
                    <Link style={{color: '#166769'}} className="book-title" to={`/show-book/${book._id}`}>
                        { book.title }
                    </Link>
                </h3>
                <h4>{book.author}</h4>
                <p>{book.description}</p>
            </div>
        </div>
    )
};

export default BookCard;