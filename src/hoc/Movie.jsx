import React, { Component } from 'react';
import withTooltop from './withTooltip';

class Movie extends Component {
    render() {
        return (
            <div>
                Movie
                {this.props.showTooltip && <div>Some tooltip</div>}
            </div>
        );
    }
}

export default withTooltop(Movie);