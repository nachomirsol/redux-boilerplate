import React from 'react'
import { connect } from 'react-redux';
import { toggle } from './actions'
import { compose } from "redux";

const withToggle = (WrappedComponent) =>
    class WithToggleComponent extends React.Component {

        render() {
            return (
                <WrappedComponent
                    title={"Boilerplate"}
                    toggle={this.props.toggle}
                    toggleStatus={this.props.toggleStatus}
                />
            )
        }
    }

const mapStateToProps = (state) => ({
    toggleStatus: state.toggleStatus.toggleStatus
})

const composedHoc = compose(
    connect(mapStateToProps, { toggle }),
    withToggle
);

export default composedHoc;