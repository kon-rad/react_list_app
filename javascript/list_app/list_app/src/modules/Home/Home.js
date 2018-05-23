import React, { Component } from 'react';
import ListFilter from './components/ListFilter';
import QuoteList from './components/QuoteList';
import Pagination from './components/Pagination';
import { Grid, Row, Col, Jumbotron } from 'react-bootstrap';
import axios from 'axios';
import './style.css';
const url = 'https://gist.githubusercontent.com/anonymous/8f61a8733ed7fa41c4ea/raw/1e90fd2741bb6310582e3822f59927eb535f6c73/quotes.json';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: {},
      quotesTotal: 0,
      currentPage: 1,
      filterTheme: 0,
    };
  }

  componentDidMount() {
    let self = this;
    axios.get(url)
      .then(function(quotes) {
        self.setState({
          quotes: Object.assign({}, quotes),
          quotesTotal: quotes.data.length,
          quotesPerPage: 7,
          currentPage: 1
        })
      })
      .then(function() {
         console.log(self.state.quotes, self.state.quotesTotal);
      })
  }

  handleClick = (pageClicked) => {
    console.log('pageClicked ', pageClicked);
    this.setState({currentPage: pageClicked});
  }

  handleTheme = (theme) => {
    console.log('handleTheme ', theme);
    this.setState({ filterTheme: theme });
  }


  render() {
    return (
      <div>
        <Jumbotron className="jumbotron_main">
          <h1>BenchPrep Movie Quotes</h1>
          <p>
            Implementation of pagination, filter by category and text react components.
          </p>
        </Jumbotron>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={6} mdOffset={3}>
              <div>
                <ListFilter themeHandler={this.handleTheme} />
                <QuoteList perPage={this.state.quotesPerPage} quotes={this.state.quotes} page={this.state.currentPage} />
                <Pagination total={this.state.quotesTotal} perPage={this.state.quotesPerPage} currentPage={this.state.currentPage} clickHandler={this.handleClick} />
              </div>
            </Col>
          </Row>
        </Grid>
      </div>

    );
  }
}

export default Home;