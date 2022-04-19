import React from "react";
import axios from "axios";
import { Card } from "react-bootstrap";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      locationData: {},
      locationName: 'Location:',
      locationLat: 0,
      locationLon: 0,
      error: false,
      errorMessage: ''
    }
  }

  handleTypeUpdate = e => {
    this.setState({
      location: e.target.value
    })
  }

  handleExplore = async e => {
    e.preventDefault();
    let apiUrl = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.location}&format=json`;
    let locationData = await axios.get(apiUrl);
    this.setState({
      locationData: locationData.data[0],
      locationName: locationData.data[0].display_name,
      locationLat: locationData.data[0].lat,
      locationLon: locationData.data[0].lon,
    })
  }


  render() {
    console.log(this.state);
    return (
      <>
        <form onSubmit={this.handleExplore}>
          <label className="search-box">
            Enter where you want to go!
            <input type="text" name="location" onInput={this.handleTypeUpdate} />
          </label>
          <button type="submit">Explore!</button>
        </form>
        <Card>
          <Card.Body>
            <Card.Title>
              {this.state.locationName}
            </Card.Title>
            <Card.Text>
              Lat: {this.state.locationLat}
            </Card.Text>
            <Card.Text>
              Lon: {this.state.locationLon}
            </Card.Text>
          </Card.Body>
          <Card.Img variant="bottom" src="" />
        </Card>
      </>
    );
  }
}

export default Main