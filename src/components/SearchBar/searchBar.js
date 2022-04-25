import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers';
import React from 'react';
import './searchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match',
    };

    this.sortByOptions = {
      'Best Match': 'best_match',
      'Highest Rated': 'rating',
      'Most Reviewed': 'review_count'
    }

    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
  }

  getSortByClass(sortByOption) {
    if (this.state.sortBy === sortByOption){
      return 'active';
    } else {
      return '';
    }
  }
  handleSortByChange(sortByOption){
    this.setState({sortBy: sortByOption})
  }

  handleTermChange(event){
    this.setState({term: event.target.value});
  }

  handleLocationChange(event){
    this.setState({location: event.target.location});
  }

  renderSortByOptions(){
    return Object.keys(this.sortByOptions).map( option => {
      let sortByOptionValue =this.sortByOptions[option]
      return <li className={this.getSortByClass(sortByOptionValue)} key={sortByOptionValue} onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>{option}</li>
    });
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" onChange={this.handleTermChange} />
          <input placeholder="Where?" onChange={this.handleLocationChange} />
        </div>
        <div className="SearchBar-submit">
          <a>Let's Go</a>
        </div>
      </div>
    )
  }
}

export default SearchBar;
