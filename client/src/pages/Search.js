import React, { Component } from 'react';
import SearchForm from '../components/SearchForm';
import BookList from '../components/BookList';
import Message from '../components/Message';
import API from '../utils/API'
import BookContainer from '../components/BookContainer';

class Search extends Component {
  
  state = {
    searchedBooks: [],
    search: "",
    loading: false,
    message: "Search For A Book For Your Next Reading Adventure!"
  };

  findBooks = () => {
    API.googleSearch(this.state.search)
      .then(res => {
        if(res.data.totalItems!==0){
          this.setState({
            searchedBooks: res.data.items.map(item => {
              const book = item.volumeInfo;
              return {
                title: book.title,
                authors: book.authors || "N/A",
                description: book.description || "",
                image: (book.imageLinks) ? book.imageLinks.thumbnail : "https://dummyimage.com/150x200/5c666e/ced0f2&text=No+Image" ,
                link: book.infoLink,
                googleID: item.id
              }
            })
          })
        }
        else{
          this.setState({message:"No Book Found"})
        }
        this.setState({loading:false})
      })
      .catch(err => console.log(err));
  };

  handleClick = (id) => {
    
    const book = this.state.searchedBooks.filter(book => book.googleID === id);
    API.saveBook(book[0])
      .then(res =>{
        this.setState({
          searchedBooks : this.state.searchedBooks.filter(book => book.googleID !== id)
        });
      })
      .catch(err => console.log(err));
  }

  handleChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]:value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    
    if(this.state.search.trim()!== "") {
      this.setState({loading:true, searchedBooks: []})
      this.findBooks();
    }
    
  }

  render() {
    return (
      <div className="container is-max-desktop">
        <SearchForm handleChange={this.handleChange} value={this.state.search} handleSubmit={this.handleSubmit}/>  
        <BookContainer>
          { this.state.searchedBooks.length === 0 ?
            <Message loading={this.state.loading} message={this.state.message}/> :
            <BookList bookList={this.state.searchedBooks} button="Save" handleClick={this.handleClick}/>
          }
        </BookContainer>
      </div>
    )
  }
  
}

export default Search;