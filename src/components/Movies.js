import React from "react";
import { Badge, Accordion, ListGroup } from "react-bootstrap";

class Movies extends React.Component {

  renderAccord = () => {
    
  }

  render() {
    console.log(this.props.movieData);
    return (
      <>
        {
          this.props.movieData.length
            ?
            this.props.movieError
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
                    <div key={id}>
                      <Accordion.Item eventKey={id}>
                        <Accordion.Header>
                          {data.title}  
                          <Badge
                            pill
                            bg="success"
                            style={{
                              marginLeft: '1em'
                            }}
                          >
                            {data.popularity}
                          </Badge>
                          </Accordion.Header>
                        <Accordion.Body
                         style={{ 
                           color: 'black',
                           display: 'flex',
                           alignItems: 'center',
                           fontSize: '1.3em'
                          }}
                         >
                            <img src={`https://image.tmdb.org/t/p/w200${data.posterPath}`} alt={data.title} style={{marginRight: '2em'}}/>
                            {data.overview}
                        </Accordion.Body>
                      </Accordion.Item>
                    </div>
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