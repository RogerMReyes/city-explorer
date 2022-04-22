import React from "react";
import {  Container, Row  } from "react-bootstrap";
import WeatherDay from "./WeatherDay";
import Error from "./Error";


class Weather extends React.Component {
  render() {
    return (
      <>
        {this.props.weatherData.length
          ?
          this.props.weatherError
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
              <h2>16 Day Weather Forecast</h2>
              <Row>
                {this.props.weatherData.map((data, id) => {
                  return (
                    <WeatherDay
                      description={data.description}
                      temp={data.temp}
                      date={data.date}
                      key={id}
                    />
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