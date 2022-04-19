import React from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import placeholder from '../imgs/USPlaceholder.jpg'

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
      clickExplore: true
    })
  }


  render() {
    return (
      <>
      <div >
        <form onSubmit={this.handleExplore} className="search-box">
            <input 
              type="text" 
              name="location" 
              onInput={this.handleTypeUpdate} 
              placeholder="Enter Location!"
            />
          <Button type="submit">Explore!</Button>
        </form>
      </div>
        <Card
          style={{
            width: '50%',
            height: '50%',
            margin: '2em auto',
            padding: '3em',
            borderRadius: '5em',
            backgroundColor: '#DEFFF2',
            color: 'black'
          }}
        >
          <Card.Body>
            <Card.Title>
              <h2>{this.state.locationName}</h2>
            </Card.Title>
            <Card.Text>
            <h2>Lat: {this.state.locationLat}</h2>
            </Card.Text>
            <Card.Text>
            <h2>Lon: {this.state.locationLon}</h2>
            </Card.Text>
          </Card.Body>
          {
            this.state.clickExplore
            ?
            <Card.Img variant="bottom" src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.locationLat},${this.state.locationLon}&zoom=12`} />
            :
            <Card.Img variant="bottom" src={placeholder}/>
          }
        </Card>
      </>
    );
  }
}

export default Main