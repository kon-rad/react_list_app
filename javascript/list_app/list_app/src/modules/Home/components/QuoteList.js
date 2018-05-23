import React, { Component } from 'react';
import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap';

class QuoteList extends Component {
  render() {
    const quotes = this.props.quotes.data ? this.props.quotes.data : [];
    const start = this.props.perPage * (this.props.page - 1);
    const end = this.props.perPage * this.props.page;

    return (
      <Panel>
        <Panel.Heading>
        </Panel.Heading>

        <ListGroup>
          {    quotes.map((quote, index) => {
            return (index >= start && index < end) ?
              (
                <ListGroupItem key={index}>
                  <h5>"{quote.quote}"</h5>
                  <div> - {quote.source}, {quote.context}</div>
                </ListGroupItem>
              ) : '';
          })}
        </ListGroup>
      </Panel>
    );
  }
}

export default QuoteList;
