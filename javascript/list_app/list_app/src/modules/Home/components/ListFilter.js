import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { ButtonToolbar, Button, Well, FormControl, Label } from 'react-bootstrap';

class ListFilter extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let searchString = ReactDOM.findDOMNode(this.refs.searchString);
    this.props.handleSearch(searchString.value);
    searchString.value = '';
  }

  render() {
    return (
      <Well>
        <div className="label_wrapper">
          <Label>Filter by category:</Label>
        </div>
        <ButtonToolbar>
          <Button onClick={() => this.props.themeHandler('movies')}>Movies</Button>
          <Button onClick={() => this.props.themeHandler('games')}>Games</Button>
          <Button onClick={() => this.props.themeHandler('all')}>All</Button>
        </ButtonToolbar>
        <div className="label_wrapper">
          <Label>Filter by text:</Label>
        </div>
        <form onSubmit={this.handleSubmit}>
          <FormControl
            type="text"
            ref="searchString"
            placeholder="Enter text"
          />
        </form>
      </Well>
    );
  }
}

export default ListFilter;
