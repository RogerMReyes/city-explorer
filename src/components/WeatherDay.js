import React from "react";
import { Badge, Col } from "react-bootstrap";

class WeatherDay extends React.Component {
  render() {
    return (
      <>
        <Col
          className="d-flex justify-content-between align-items-start"
          key={this.props.id}
          style={{
            margin: '2px',
            padding: '5px',
            border: '2px solid black',
            backgroundColor: 'white'
          }}
        >
          <div
            style={{
              lineHeight: '1'
            }}
          >
            <p>{this.props.description}</p>
            <p>Temperature: {this.props.temp}
              <span>&#8457;</span></p>
          </div>
          <Badge bg="primary" pill>
            {this.props.date}
          </Badge>
        </Col>
      </>
    )
  }
}

export default WeatherDay