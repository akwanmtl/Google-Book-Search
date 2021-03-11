import React, { Component } from 'react';
import API from '../utils/API';
import BookList from '../components/BookList'

class Saved extends Component {
  
  state = {
    savedBooks: []
  };

  componentDidMount() {
    this.getSavedBooks();
  }

  // Loads all books and sets them to books
  getSavedBooks = () => {
    API.getBooks()
      .then(res => {
        this.setState({
          savedBooks: res.data
        })
      })
      .catch(err => console.log(err));
  };


  handleClick = (id) => {
    
    console.log("removing")
    API.deleteBook(id)
      .then(res =>{
        console.log(res.data)
        this.setState({
          savedBooks : this.state.savedBooks.filter(book => book.googleID !== id)
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container is-max-desktop">
        <BookList bookList={this.state.savedBooks} button="Remove" handleClick={this.handleClick}/>
      </div>
    )
  }
  
}

export default Saved;