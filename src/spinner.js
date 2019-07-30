import Spinner from 'react-bootstrap/Spinner'
import React, { Component } from 'react';

class Spinnerr extends Component {
    render() {
        return (
            <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        );
    }
}

export default Spinnerr;