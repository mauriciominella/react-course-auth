import React, { Component } from 'react';
import { connect } from 'react-redux';

export default ChildComponent => {
    class ComposedComponent extends Component {
        render() {
            return <ChildComponent {...this.props} />;
        }

        // Our component just got rendered
        componentDidMount() {
            this.shouldNavigateAway();
        }

        // Our component just got updated
        componentDidUpdate() {
            this.shouldNavigateAway();
        }

        shouldNavigateAway() {
            if (!this.props.auth) {
                this.props.history.push('/');
            }
        }

    }

    function mapStateToProps(state) {
        return { auth: state.auth.authenticated }
    }

    return connect(mapStateToProps)(ComposedComponent);
};
