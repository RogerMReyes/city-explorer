import React from "react";
import { Badge, ListGroup } from "react-bootstrap";

class Weather extends React.Component {
  render() {
    return (
      <>
        {
          this.props.weatherError
            ?
            <ListGroup
              as="ol"
              style={{
                width: '80%',
                minWidth: '40rem',
                margin: '0 auto'
              }}
            >
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  {this.props.errorMessage}
                </div>
              </ListGroup.Item>
            </ListGroup>
            :
            <ListGroup
              as="ol"
              style={{
                width: '80%',
                minWidth: '40rem',
                margin: '0 auto'
              }}
            >
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  {this.props.weatherData[0].description}
                </div>
                <Badge bg="primary" pill>
                  {this.props.weatherData[0].date}
                </Badge>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  {this.props.weatherData[1].description}
                </div>
                <Badge bg="primary" pill>
                  {this.props.weatherData[1].date}
                </Badge>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  {this.props.weatherData[2].description}
                </div>
                <Badge bg="primary" pill>
                  {this.props.weatherData[2].date}
                </Badge>
              </ListGroup.Item>
            </ListGroup>
        }
      </>
    )
  }
}

export default Weather