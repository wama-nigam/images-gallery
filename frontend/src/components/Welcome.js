import React from "react";
import { Jumbotron, Button } from "react-bootstrap";

const Welcome = () => {
    return(
        <Jumbotron>
            <h1>Images Gallery</h1>
            <p>
               This is a simple application to display images using unsplash API.
            </p>
            <p>
                <Button bsStyle="primary" href="https://unsplash.com" target="_blank">Learn more</Button>
            </p>
        </Jumbotron>
    );
}

export default Welcome;