import React from 'react';
import ReactDOM from 'react-dom';

export default class TestC extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: null
        }
    }

    componentDidMount() {
        this.setState({ value: 'somethingNew' });
    }

    render() {
        return (
            <div>testComponent</div>
        )
    }
}