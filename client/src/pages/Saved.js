import React, { Component } from 'react';
import API from '../utils/API';
import BookList from '../components/BookList'
import Message from '../components/Message'
import BookContainer from '../components/BookContainer';

class Saved extends Component {
  
  state = {
    savedBooks: [],
    loading:true
  };

  componentDidMount() {
    this.getSavedBooks();
    
  }

  // Loads all books and sets them to books
  getSavedBooks = () => {
    API.getBooks()
      .then(res => {
        this.setState({
          savedBooks: res.data,
          loading: false
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
        <BookContainer>
          { this.state.savedBooks.length === 0 ? 
            <Message message="No Saved Books" loading={this.state.loading}/> :
            <BookList bookList={this.state.savedBooks} button="Remove" handleClick={this.handleClick}/>
          }
        </BookContainer>
        
      </div>
    )
  }
  
}

export default Saved;