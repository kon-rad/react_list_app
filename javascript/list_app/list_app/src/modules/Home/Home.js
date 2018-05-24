import React, { Component } from 'react';
import ListFilter from './components/ListFilter';
import QuoteList from './components/QuoteList';
import Pagination from './components/Pagination';
import { Grid, Row, Col, Jumbotron, Button } from 'react-bootstrap';
import axios from 'axios';
import './style.css';
const QUOTES_URL = 'https://gist.githubusercontent.com/anonymous/8f61a8733ed7fa41c4ea/raw/'
  +  '1e90fd2741bb6310582e3822f59927eb535f6c73/quotes.json';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: {},
      quotesTotal: 0,
      currentPage: 1,
      quotesPerPage: 7,
      filterTheme: 'all',
      filterString: '',
    };
  }

  componentDidMount() {
    let self = this;
    axios.get(QUOTES_URL)
      .then(function(quotes) {
        let renderQuotes = quotes.data.slice();
        self.setState({
          renderQuotes: renderQuotes,
          quotes: Object.assign({}, quotes),
          quotesTotal: quotes.data.length,
        })
      })
  }

  updateQuoteList = () => {
    const theme = this.state.filterTheme;
    const searchString = this.state.filterString;
    let filteredQuotes = this.state.quotes.data.slice();

    filteredQuotes = filteredQuotes.filter((quote) => {
      return ((quote.theme === theme || theme === 'all')
      && (!searchString || quote.quote.toLowerCase().includes(searchString.toLowerCase())))
    });
    this.setState({renderQuotes: filteredQuotes, quotesTotal: filteredQuotes.length, currentPage: 1});
  }

  handleClick = (pageClicked) => {
    this.setState({currentPage: pageClicked});
  }

  handleTheme = (theme) => {
    this.setState({
        filterTheme: theme
      }, () => {
        this.updateQuoteList();
      });
  }

  handleSearch = (searchString) => {
    this.setState({
        filterString: searchString
      }, () => {
        this.updateQuoteList();
      });
  }

  handleClearSearch = () => {
    this.setState({
      filterString: '',
      filterTheme: 'all',
      currentPage: 1
    }, () => {
      this.updateQuoteList();
    });
  }

  render() {
    return (
      <div className="app_wrapper">
        <Jumbotron className="jumbotron_main">
          <img src='https://logo.clearbit.com/benchprep.com?s=128' alt=""/>
          <h1>BenchPrep Movie Quotes</h1>
          <p>
            Implementation of a list React component including pagination, filter by category and text.
          </p>
        </Jumbotron>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={6} mdOffset={3}>
              <div>
                <ListFilter handleSearch={this.handleSearch} themeHandler={this.handleTheme} />

                <div className="info">
                  <div className="info__clear_search">
                    <Button onClick={this.handleClearSearch} bsStyle="warning" bsSize="xsmall">Clear Search</Button>
                  </div>
                  <span>Search by: </span>
                  <span>theme - {this.state.filterTheme}</span>
                  <span>{this.state.filterString ? (', matching text - ' + this.state.filterString) : ''}</span>
                </div>
                <QuoteList perPage={this.state.quotesPerPage}
                           renderQuotes={this.state.renderQuotes}
                           page={this.state.currentPage}
                />
                <Pagination total={this.state.quotesTotal}
                            perPage={this.state.quotesPerPage}
                            currentPage={this.state.currentPage}
                            clickHandler={this.handleClick}
                />
              </div>
            </Col>
          </Row>
        </Grid>
      </div>

    );
  }
}

export default Home;