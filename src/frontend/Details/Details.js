import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Details.css';

export default class Details extends React.Component {

  constructor() {
    super();
    this.state = {
      show: {}
    };
  }

  componentDidMount() {
    fetch('/rest/shows')
    .then(res => res.json())
    .then(shows => {
      this.setState({shows})
      let showId = this.props.match.params.showId;
    //let series = getSeries().find(function (series) {
      //return series.id === seriesId;
    //});

    let show = shows.find(show => show.id === showId)

    this.setState({ show });
    }).catch(error => console.log(error))
  }

  render() {
    if (this.state.show === undefined) {
      return <Redirect to='/not-found' />;

    } else {
      return (
        <div className='details'>
          <h1>{this.state.show.name}</h1>
          <div className='movie_page_container'>
            <div className='text'>{this.state.show.details}</div>
            <img src={this.state.show.image}
              alt={this.state.show.name} />
          </div>

          <Link to='/'>Back to Home Page</Link>
        </div>
      );

    }


  }
}

