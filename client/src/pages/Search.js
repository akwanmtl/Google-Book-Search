import React, { Component } from 'react';
import SearchForm from '../components/SearchForm';
import BookList from '../components/BookList';
import API from '../utils/API'

class Search extends Component {
  
  state = {
    searchedBooks: [],
    savedBooks: [],
    search: "",
    error: false
  };

  componentDidMount() {
    this.getSavedBooks();
  }

  // Loads all books and sets them to books
  getSavedBooks = () => {
    API.getBooks()
      .then(res => {
        console.log(res.data);
        this.setState({
          savedBooks: res.data
        })
      })
      .catch(err => console.log(err));
  };

  findBooks = () => {
    API.googleSearch(this.state.search)
      .then(res => {
        if(res.data.totalItems!==0){
          this.setState({
            searchedBooks: res.data.items.map(item => {
              const book = item.volumeInfo;
              console.log(book)
              return {
                title: book.title,
                authors: book.authors,
                description: book.description || "",
                image: (book.imageLinks) ? book.imageLinks.thumbnail : "https://dummyimage.com/150x200/5c666e/ced0f2&text=No+Image" ,
              }
            })
          })
        }
        else{
          this.setState({error:true})
        }
      })
      .catch(err => console.log(err));
  };

  handleChange = (event) => {
    const {name, value} = event.target;
    console.log(value)
    this.setState({[name]:value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    
    console.log(this.state.search.trim())
    if(this.state.search.trim()!== "") {
      console.log("finding")
      this.findBooks();
    }
    
  }

  render() {
    return (
      <div className="container is-max-desktop">
        <SearchForm handleChange={this.handleChange} value={this.state.search} handleSubmit={this.handleSubmit}/>  
        <BookList bookList={this.state.searchedBooks}/>
      </div>
    )
  }
  
}

export default Search;