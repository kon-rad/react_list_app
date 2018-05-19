import React, { Component } from 'react';
import ListFilter from './components/ListFilter';
import QuoteList from './components/QuoteList';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>hello world2</h1>
        <ListFilter />
        <QuoteList />
        <input type="text" name="test" />
      </div>
    );
  }
}

export default Home;