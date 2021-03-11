import React, { Component } from 'react';
import SearchForm from '../components/SearchForm';
import BookList from '../components/BookList';
import Message from '../components/Message';
import API from '../utils/API'

class Search extends Component {
  
  state = {
    searchedBooks: [],
    search: "",
    loading: false,
    message: "Search For A Book For Your Next Reading Adventure!"
  };

  // componentDidMount() {
  //   this.getSavedBooks();
  // }

  // // Loads all books and sets them to books
  // getSavedBooks = () => {
  //   API.getBooks()
  //     .then(res => {
  //       this.setState({
  //         savedBooks: res.data
  //       })
  //     })
  //     .catch(err => console.log(err));
  // };

  findBooks = () => {
    API.googleSearch(this.state.search)
      .then(res => {
        if(res.data.totalItems!==0){
          this.setState({
            searchedBooks: res.data.items.map(item => {
              const book = item.volumeInfo;
              return {
                title: book.title,
                authors: book.authors,
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
    
    console.log("adding")
    const book = this.state.searchedBooks.filter(book => book.googleID === id);
    API.saveBook(book[0])
      .then(res =>{
        console.log(res.data)
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
        { this.state.searchedBooks.length === 0 ?
          <Message loading={this.state.loading} message={this.state.message}/> :
          <BookList bookList={this.state.searchedBooks} button="Save" handleClick={this.handleClick}/>
        }
      </div>
    )
  }
  
}

export default Search;