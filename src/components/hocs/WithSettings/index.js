import React from 'react';
/**Libraries */
import { connect } from 'react-redux';
import { compose } from 'redux';
/**Actions*/
import { changeLocale, changeTheme } from './actions';

const withSettings = (WrappedComponent) =>
    class WithSettingsComponent extends React.component {
        render() {
            return (
                <WrappedComponent
                    locale={this.props.locale}
                    theme={this.props.theme}
                    changeLocale={this.props.changeLocale}
                    changeTheme={this.props.changeTheme}
                />
            )

        }
    }


const mapStateToProps = (state) => ({
    locale: state.locale.locale,
    theme: state.theme.theme
})

const composedHoc = compose(
    connect(mapStateToProps, { changeLocale, changeTheme }),
    withSettings
);

export default composedHoc;