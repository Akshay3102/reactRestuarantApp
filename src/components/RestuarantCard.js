import React from 'react'
import Card from 'react-bootstrap/Card';
import  {Link}  from 'react-router-dom';

function RestuarantCard({ restaurant }) {

    return (
        <Link style={{textDecoration:"none",color:"white"}} to={`view-restuarant/${restaurant.id}`}>
            <Card className='mb-4' >
                <Card.Img variant="top" className='p-3' src={restaurant.photograph} />
                <Card.Body>
                    <Card.Title>{restaurant.name}</Card.Title>
                    <Card.Text>
                        {restaurant.neighborhood}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Link>
    )
}

export default RestuarantCard