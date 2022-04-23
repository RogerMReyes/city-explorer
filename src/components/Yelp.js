import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Error from "./Error";

class Yelp extends React.Component{
  render() {
    console.log(this.props.yelpData);
    return (
      <>
        {this.props.yelpData.length
          ?
          this.props.yelpError
            ?
            <Error
            errorMessage={this.props.errorMessage}
          />
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
              <Row>
                {this.props.yelpData.map((data, id) => {
                  return (
                    <Col
                    className="d-flex justify-content-between align-items-start"
                    key={id}
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
                      <p>{data.name}</p>
                      <p>{data.image_url}</p>
                      <p>{data.rating}</p>
                      <p>{data.price}</p>
                    </div>
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

export default Yelp