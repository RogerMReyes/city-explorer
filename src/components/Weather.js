import React from "react";
import { Badge, ListGroup, Container, Row, Col } from "react-bootstrap";


class Weather extends React.Component {
  render() {
    return (
      <>
        {this.props.weatherData.length
          ?
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

            <Container
              style={{
                width: '75%',
                minWidth: '40rem',
                backgroundColor: '#DEFFF2',
                margin: '0 auto',
                padding: '1em',
                color: 'black',
              }}
            >
              <h2>16 Day Weather Forecast</h2>
              <Row>
                {this.props.weatherData.map((data, id) => {
                  return (
                    <Col
                      className="d-flex justify-content-between align-items-start"
                      key={id}
                      style={{
                        margin: '2px',
                        padding: '5px',
                        border: '2px solid black'

                      }}
                    >
                      <div
                        style={{
                          lineHeight: '1'
                        }}
                      >
                        <p>{data.description}</p>
                        <p>Temperature: {data.temp} 
                        <span>&#8457;</span></p>
                      </div>
                      <Badge bg="primary" pill>
                        {data.date}
                      </Badge>
                    </Col>
                  )
                })}
              </Row>
            </Container>
          :
          <></>
        }
      </>
    )
  }
}

export default Weather