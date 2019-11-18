import React from 'react';
/**Libraries */
import { compose } from "redux";
import { connect } from 'react-redux';
/**Redux */
import { toggle } from './actions'


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