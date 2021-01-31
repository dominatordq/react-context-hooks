import React from 'react';

// Implements a higher order component
function withTooltop(Component) {
    // return a new component
    return class WithTooltip extends React.Component {
        state = { showTooltip: false };
    
        mouseOver = () => this.setState({ showTooltip: true });
        mouseOut = () => this.setState({ showTooltip: false });

        render() {
            return (
                <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
                    <Component {...this.props} showTooltip={this.state.showTooltip}/>
                </div>
            );
        }
    }
}

export default withTooltop;