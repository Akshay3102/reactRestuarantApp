import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';

function ReviewOp({review}) {
  return (
    <div>
        <Accordion defaultActiveKey="0" style={{width:"400px"}}>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Review</Accordion.Header>
        <Accordion.Body>
         {
            review.map(item=>(
                <ListGroup>
                <ListGroup.Item>Name:{item.name}</ListGroup.Item>
        <ListGroup.Item>Tuesday:{item.date}</ListGroup.Item>
        <ListGroup.Item>Wednesday:{item.ratings}</ListGroup.Item>
        </ListGroup> ))
         }
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
    </div>
  )
}

export default ReviewOp