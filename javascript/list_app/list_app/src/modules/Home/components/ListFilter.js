import React, { Component } from 'react';
import { ButtonToolbar, Button, Well, ControlLabel, FormControl, Label } from 'react-bootstrap';

class ListFilter extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      search: ''
    }
  }

  handleChange(e) {
    console.log(e);
    // this.setState({ search: e[1] });
  }

  render() {
    return (
      <Well>
        <div className="label_wrapper">
          <Label>Filter by category:</Label>
        </div>
        <ButtonToolbar>
          <Button onClick={() => this.props.themeHandler('movie')}>Movie</Button>
          <Button onClick={() => this.props.themeHandler('games')}>Games</Button>
          <Button onClick={() => this.props.themeHandler(0)}>All</Button>
        </ButtonToolbar>
        <div className="label_wrapper">
          <Label>Filter by text:</Label>

        </div>
        <FormControl
          type="text"
          value={this.state.search}
          placeholder="Enter text"
          onChange={this.handleChange}
        />
      </Well>
    );
  }
}

export default ListFilter;
