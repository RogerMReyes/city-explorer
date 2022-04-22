import React from "react";
import { ListGroup } from "react-bootstrap";


class Error extends React.Component{

  render(){
    return(
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
    )
  }
}

export default Error