import React, {Component} from 'react'

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            text: "Some Text",
            hasLoaded: false
        }
    }

    componentDidMount() {
        this.setState({hasLoaded: true})
    }

    checkHasLoaded() {
        if (this.state.hasLoaded === true) {
            console.log('made it here')
            
            return (<div><h1>{this.state.text}</h1></div>)
        } else {
            console.log('went here instead')
            return (
                <div>
                <h1>Loading...</h1>
                <button onClick={(event) => this.handleHasLoaded()}>
                I am a button
                </button>
                </div>)
        }
    }

    handleHasLoaded() {
        if (this.state.hasLoaded === false) {
            this.setState({ hasLoaded: true})
        } else {
            this.setState({ hasLoaded: false})
        }
    }

    render() {
        if (this.state.hasLoaded === true) {
            return (
            <React.Fragment>
                <h1>This is the message: {this.props.message} and {this.state.text}</h1>
                    <input placeholder={this.props.message}
                           value={this.state.text}
                           onChange={(event) => this.setState({text: (event.target.value)})}
                    />
                    <button onClick={(event) => this.handleHasLoaded()}>
                    I am a button
                    </button>
                    <h1>{this.state.text}</h1>
            </React.Fragment>)
        } else {
            return (
            <React.Fragment>
                <h1>Loading...</h1>
                <button onClick={(event) => this.handleHasLoaded()}>
                I am a button
                </button>
            </React.Fragment>)
        }

    }
}

export default App;



/*const App = (props) => {
    
    return <h1>This is the message: {props.message}</h1>
}

export default App;*/