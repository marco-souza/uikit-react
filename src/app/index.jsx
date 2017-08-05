// @flow
import React from "react"

// Define Structure of props and state
type State = { name: string }
type Props = { title: string }

/**
 * Create the Root app component
 */
class Component extends React.Component {

    state: State = { name: "3" }
    props: Props
    static defaultProps = {
        title: "No Title"
    }

    componentDidMount() {
        console.log("state name: ", this.state.name)
        this.setState({name: this.props.title})
    }

    render() {
        return(
            <div>
                <h1>{this.props.title}</h1>
                <h1>{this.state.name}</h1>
            </div>
        )
    }
}

export default Component
