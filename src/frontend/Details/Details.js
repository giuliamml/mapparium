import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import getSeries from '../Gallery-get';
import './Details.css';

export default class Details extends React.Component {

  constructor() {
    super();
    this.state = {
      series: {}
    };
  }

  componentDidMount() {
    let seriesId = this.props.match.params.seriesId;
    let series = getSeries().find(function (series) {
      return series.id === seriesId;
    });

    this.setState({
      series: series
    });

  }

  render() {
    if (this.state.series === undefined) {
      return <Redirect to='/not-found' />;

    } else {
      return (
        <div className='details'>
          <h1>{this.state.series.name}</h1>
          <div className='movie_page_container'>
            <div className='text'>{this.state.series.details}</div>
            <img src={this.state.series.image}
              alt={this.state.series.name} />
          </div>

          <Link to='/'>Back to Home Page</Link>
        </div>
      );

    }


  }
}

