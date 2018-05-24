import React, { Component } from 'react';
import { Panel, ListGroup, ListGroupItem, Badge } from 'react-bootstrap';

class QuoteList extends Component {
  render() {
    const quotes = this.props.renderQuotes ? this.props.renderQuotes : [];
    const start = this.props.perPage * (this.props.page - 1);
    const end = this.props.perPage * this.props.page;

    return (
      <Panel>
        <ListGroup>
          {    quotes.map((quote, index) => {
            return (index >= start && index < end) ?
              (
                <ListGroupItem key={index}>
                  <div className="quote_wrapper">
                    <h5>"{quote.quote}"</h5>
                    <div> - {quote.source}, {quote.context}</div>
                    <div className="badge_wrapper">
                      <Badge>{quote.theme}</Badge>
                    </div>
                  </div>
                </ListGroupItem>
              ) : '';
          })}
        </ListGroup>
      </Panel>
    );
  }
}

export default QuoteList;
