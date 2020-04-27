import React, {Component} from 'react';
import SearchLayout from '../view/search-layout'

class Search extends Component {

  state = {
    searchTerm: ''
  }

  onSubmit = (event) => {
    event.preventDefault();
    console.log('Search: ',this.state.searchTerm);
  }

  onChange = (event) => {
    this.setState({searchTerm: event.target.value});
  }

  render(){
    return(
      <div>
      <SearchLayout
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        value={this.state.searchTerm}
      />
      <p>{this.state.searchTerm}</p>
      </div>
    )
  }
}

export default Search;