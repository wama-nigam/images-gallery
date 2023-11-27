import React from "react";
import {Card, Button} from 'react-bootstrap';

const ImageCard = ( { image , handleDelete, description } ) =>{
    return (
        
            <Card style={{width: '18rem'}}>
                <Card.Img variant="top" src={image.urls.small}></Card.Img>
                <Card.Body>
                    <Card.Title>{image.title}</Card.Title>
                    <Card.Text>
                        {image.description || image.alt_description}
                    </Card.Text>
                    <Button variant="primary" onClick={() => handleDelete(image.id) }> Delete </Button>
                </Card.Body>
            </Card>
        
    );
};

export default ImageCard;