import React from "react";
import { Card, Button } from "react-bootstrap";
import placeholder from '../imgs/USPlaceholder.jpg'

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  searchEntry = (e) => {
    this.props.handleTypeUpdate(e.target.value);
  }

  exploreClicked = (e) => {
    this.props.handleExplore(e);
    this.props.handleForecast(e);
    this.props.handleMovies(e);
  }

  render() {
    return (
      <>
        <div >
          <form onSubmit={this.exploreClicked} className="search-box">
            <input
              type="text"
              name="location"
              onInput={this.searchEntry}
              placeholder="Enter Location!"
            />
            <Button type="submit">Explore!</Button>
          </form>
        </div>
        <Card
          style={{
            width: '50%',
            minWidth: '40rem',
            height: '50%',
            margin: '2em auto',
            padding: '3em',
            borderRadius: '5em',
            backgroundColor: '#DEFFF2',
            color: 'black'
          }}
        >
          <Card.Body>
            {
              this.props.mapError
                ?
                <Card.Title>{this.props.errorMessage}</Card.Title>
                :
                <>
                  <Card.Title>
                    {this.props.locationName}
                  </Card.Title>
                  <Card.Text>
                    Lat: {this.props.locationLat}
                  </Card.Text>
                  <Card.Text>
                    Lon: {this.props.locationLon}
                  </Card.Text>
                </>
            }
          </Card.Body>
          {
            this.props.clickExplore
              ?
              <Card.Img variant="bottom" src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.props.locationLat},${this.props.locationLon}&zoom=12`} />
              :
              <Card.Img variant="bottom" src={placeholder} />
          }
        </Card>
      </>
    )
  }
}

export default Map

