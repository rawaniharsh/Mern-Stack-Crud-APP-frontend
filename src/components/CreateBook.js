import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

class CreateBook extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            author: '',
            description: '',
            publishedDate: '',
            publisher: ''
        };
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const data = {
            title: this.state.title,
            author: this.state.author,
            description: this.state.description,
            publishedDate: this.state.publishedDate,
            publisher: this.state.publisher
        }

        axios.post('http://localhost:8080/api/books', data)
            .then(res => {
                this.setState({
                    title: '',
                    author: '',
                    description: '',
                    publishedDate: '',
                    publisher: ''
                })
                this.props.history.push('/');
            }).catch(e => {
                console.log("Error in create book")
            })

    };

    render() {
        return (
            <div className="CreateBook">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <br />
                            <Link to="/" className="btn btn-outline-warning float-left">
                                Show BooK List
                  </Link>
                        </div>
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Add Book</h1>
                            <p className="lead text-center">
                                Add new book
                  </p>

                            <form noValidate onSubmit={this.onSubmit}>
                                <div className='form-group'>
                                    <input
                                        type='text'
                                        placeholder='Title of the Book'
                                        name='title'
                                        className='form-control'
                                        value={this.state.title}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <br />

                                <div className='form-group'>
                                    <input
                                        type='text'
                                        placeholder='Author'
                                        name='author'
                                        className='form-control'
                                        value={this.state.author}
                                        onChange={this.onChange}
                                    />
                                </div>

                                <div className='form-group'>
                                    <input
                                        type='text'
                                        placeholder='Describe this book'
                                        name='description'
                                        className='form-control'
                                        value={this.state.description}
                                        onChange={this.onChange}
                                    />
                                </div>

                                <div className='form-group'>
                                    <input
                                        type='date'
                                        placeholder='Publish Date'
                                        name='publishedDate'
                                        className='form-control'
                                        value={this.state.publishedDate}
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className='form-group'>
                                    <input
                                        type='text'
                                        placeholder='Publisher of this Book'
                                        name='publisher'
                                        className='form-control'
                                        value={this.state.publisher}
                                        onChange={this.onChange}
                                    />
                                </div>

                                <input
                                    type="submit"
                                    className="btn btn-outline-warning btn-block mt-4"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default CreateBook;