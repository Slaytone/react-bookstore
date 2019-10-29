import React, { Component } from "react";
import ErrorIndicator from "../error-indicator";


class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true})
    }


    render() {
        if (this.state.hasError) {
            <ErrorIndicator/>
        }
        return this.props.children;
    }
}

export default ErrorBoundry;