import React, { Component } from 'react';
import ListFilter from './components/ListFilter';
import QuoteList from './components/QuoteList';
import Pagination from './components/Pagination';
import { Grid, Row, Col } from 'react-bootstrap';
import axios from 'axios';
const url = 'https://gist.githubusercontent.com/anonymous/8f61a8733ed7fa41c4ea/raw/1e90fd2741bb6310582e3822f59927eb535f6c73/quotes.json';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: {},
      quotesNumber: 0,
      currentPage: 1,
    };
  }

  componentDidMount() {
    let self = this;
    axios.get(url)
      .then(function(quotes) {
        self.setState({
          quotes: Object.assign({}, quotes),
          quotesNumber: quotes.length,
          quotesPerPage: 7,
          currentPage: 1
        })
      })
      .then(function() {
         console.log(self.state.quotes, self.state.quotesNumber);
      })
  }

  handleClick = (pageClicked) => {
    this.setState({currentPage: pageClicked});
  }


  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={12} md={6} mdOffset={3}>
            <div>
              <h1>test</h1>
              <ListFilter />
              <QuoteList perPage={this.state.quotesPerPage} quotes={this.state.quotes} page={this.state.currentPage} />
              <Pagination currentPage={this.state.currentPage} clickHandler={this.handleClick} />
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Home;