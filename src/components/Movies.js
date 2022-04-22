import React from "react";
import { Accordion  } from "react-bootstrap";
import Movie from "./Movie";
import Error from "./Error";

class Movies extends React.Component {

  render() {
    return (
      <>
        {
          this.props.movieData.length
            ?
            this.props.movieError
              ?
              <Error
                errorMessage={this.props.errorMessage}
              />
              :
              <Accordion
                style={{
                  width: '75%',
                  minWidth: '40rem',
                  backgroundColor: '#DEFFF2',
                  margin: '1em auto 5em auto'
                }}
              >
                {this.props.movieData.map((data, id) => {
                  return (
                    <Movie
                      key={id}
                      title={data.title}
                      popularity={data.popularity}
                      posterPath={data.posterPath}
                      overview={data.overview}
                      id={id}
                    />
                  )
                })}
              </Accordion>
            :
            <></>
        }
      </>
    )
  }
}

export default Movies