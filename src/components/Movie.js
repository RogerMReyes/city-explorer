import React from "react";
import { Badge, Accordion } from "react-bootstrap";

class Movie extends React.Component{
  render(){
    return(
      <div key={this.props.id}>
      <Accordion.Item eventKey={this.props.id}>
        <Accordion.Header>
          {this.props.title}  
          <Badge
            pill
            bg="success"
            style={{
              marginLeft: '1em'
            }}
          >
            {this.props.popularity}
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
            <img src={`https://image.tmdb.org/t/p/w200${this.props.posterPath}`} alt={this.props.title} style={{marginRight: '2em'}}/>
            {this.props.overview}
        </Accordion.Body>
      </Accordion.Item>
    </div>
    )
  }
}

export default Movie