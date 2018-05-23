import React, { Component } from 'react';
import { ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

class Pagination extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      selectedPage: 1
    }
  }

  handleChange(e) {
    this.setState({ selectedPage: e[1] });
  }

  render() {
    const lastPage = Math.ceil(this.props.total / this.props.perPage);
    let pagination = [];
    let i = 1;
    for ( let i = 1; i <= lastPage; i++) {
      pagination.push(<ToggleButton value={i} key={i} onClick={() => this.props.clickHandler(i)}>{i}</ToggleButton>)
    }
    console.log(pagination, lastPage, this.props.perPage,this.props.total);

    return (
      <div className="button_group_wrapper">
        <ButtonToolbar>
          <ToggleButtonGroup type="checkbox" value={this.state.selectedPage} onChange={this.handleChange}>
            { pagination }
          </ToggleButtonGroup>
        </ButtonToolbar>
      </div>
    );
  }
}

export default Pagination;
