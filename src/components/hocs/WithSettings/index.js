import React from 'react';
/**Libraries */
import { connect } from 'react-redux';
import { compose } from 'redux';
/**Actions*/
import { changeLocale, changeTheme } from './redux/actions';

/** This is a HOC that will make possible to inject functionality to other components as Settings component, like change user settings (language, theme...) */
const withSettings = (WrappedComponent) =>
    class WithSettingsComponent extends React.Component {
        render() {
            return (
                <WrappedComponent
                    settings={this.props.settings}
                    changeLocale={this.props.changeLocale}
                    changeTheme={this.props.changeTheme}
                />
            )

        }
    }


const mapStateToProps = state => ({
    settings: state.settings
});

const composedHoc = compose(
    connect(mapStateToProps, { changeLocale, changeTheme }),
    withSettings
);

export default composedHoc;