import React from "react";
import axios from "axios";
import Map from './Map'
import Weather from './Weather'
import Movies from "./Movies";


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      locationData: {},
      locationName: 'Location:',
      locationLat: 0,
      locationLon: 0,
      clickExplore: false,
      weatherData: [],
      movieData: [],
      mapError: false,
      weatherError: false,
      movieError: false,
      errorMessage: '',
    }
  }

  handleTypeUpdate = value => {
    this.setState({
      location: value,
      mapError: false,
      weatherError: false,
      movieError: false,
      errorMessage: ''
    })
  }


  handleExplore = e => {
    e.preventDefault();
    let locationApiUrl = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.location}&format=json`;
    axios.get(locationApiUrl)
      .then(locationData => this.setState({
        locationData: locationData.data[0],
        locationName: locationData.data[0].display_name,
        locationLat: locationData.data[0].lat,
        locationLon: locationData.data[0].lon,
        clickExplore: true
      }))
      .catch(err => this.setState({
        weatherError: true,
        errorMessage: `An Error Occurred: ${err.response.status} Unable to pull information from server`
      }))
  }


  handleForecast = (e) => {
    e.preventDefault();
    let locationApiUrl = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.location}&format=json`;
    axios.get(locationApiUrl)
      .then(weatherInformation => `${process.env.REACT_APP_SERVER}/weather?&lat=${weatherInformation.data[0].lat}&lon=${weatherInformation.data[0].lon}`)
      .then(weatherApiUrl => axios.get(weatherApiUrl))
      .then(weatherData => this.setState({ weatherData: weatherData.data }))
      .catch(err => this.setState({
        weatherError: true,
        errorMessage: `An Error Occurred: ${err.response.status} Unable to pull information from server`
      }))
  }

  handleMovies = (e) => {
    e.preventDefault();
    let movieApiUrl = `${process.env.REACT_APP_SERVER}/movies?locationName=${this.state.location}`;
    axios.get(movieApiUrl)
      .then(movieData => this.setState({
        movieData: movieData.data
      })
      )
      .catch(err => this.setState({
        weatherError: true,
        errorMessage: `An Error Occurred: ${err.response.status} Unable to pull information from server`
      }))
  }

  render() {
    return (
      <>
        <Map
          errorMessage={this.state.errorMessage}
          MapError={this.state.error}
          clickExplore={this.state.clickExplore}
          locationName={this.state.locationName}
          locationLat={this.state.locationLat}
          locationLon={this.state.locationLon}
          handleExplore={this.handleExplore}
          handleTypeUpdate={this.handleTypeUpdate}
          handleForecast={this.handleForecast}
          handleMovies={this.handleMovies}
        />
        {this.state.clickExplore
          ?
          <Weather
            weatherData={this.state.weatherData}
            clickExplore={this.state.clickExplore}
            weatherError={this.state.weatherError}
            errorMessage={this.state.errorMessage}
          />
          :
          <></>
        }
        {this.state.clickExplore
          ?
          <Movies
            movieData={this.state.movieData}
            clickExplore={this.state.clickExplore}
            movieError={this.state.weatherError}
            errorMessage={this.state.errorMessage}
          />
          :
          <></>
        }
      </>
    );
  }
}

export default Main