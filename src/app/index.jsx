import React from "react"
import PropTypes from "prop-types";

const
    defaultState = {
        name: "Hakuna Matata"
    },
    defaultProps = {
        a: ""
    },
    defaultPropTypes = {
        title: PropTypes.string
    }

/**
 * Create the Root app component
 */
class Component extends React.Component {
    
    // Define properties
    propTypes   = defaultPropTypes
    state       = defaultState
    props       = this.props || defaultProps

    render() {
        return(
            <div>
                <h1>{this.state.name}</h1>
            </div>
        )
    }
}

export default Component