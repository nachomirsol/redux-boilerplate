/**
 *
 * LoginPage
 *
 */

import React, { useState } from 'react';
/**Libraries */
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useHistory, useParams } from "react-router-dom";
import { injectIntl } from 'react-intl';
/**Components */
import withSettings from 'components/hocs/WithSettings';
import Selector from 'components/Selector';
/**Utils */
import injectReducer from 'utils/injectReducer';
import { languages } from 'utils/const';
/**Assets */
import { ReactComponent as LogoGoAigua } from "assets/svg/goaigua-logo.svg";
/**Redux */
import makeSelectLoginPage from './redux/selectors';
import reducer from './redux/reducer';
import {
    login,
    setLoginSuccess,
    refreshLogin,
} from './redux/actions';
/**Styles */
import './loginPage.scss';


const LoginPage = ({ intl, loginPage, login, onRefreshLogin, changeLocale, settings }) => {
    const history = useHistory();
    const params = useParams();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const { isLoginPending, isLoginSuccess, loginError } = loginPage;

    const onSubmit = (e) => {
        e.preventDefault();
        login(email, password, history, params, onRefreshLogin);
        setEmail("");
        setPassword("");
    }

    const validateForm = () => {
        return email.length > 0 && password.length > 0;
    }

    // const changeLocale = (event) => {
    //     onChangeLocale(event.target.value);
    // }


    return (
        <>
            {/* <TokenInjector userData={{}} removeData /> */}
            <div className="login__wrapper">
                <form name="loginForm" className="login__form" onSubmit={onSubmit}>
                    <LogoGoAigua />
                    <div className="login__form-container">
                        <div className="login__form-title">
                            {intl.formatMessage({ id: "app.pages.LoginPage.Title" })}
                        </div>
                        <div className="login__form-field">
                            <label>{intl.formatMessage({ id: 'app.pages.LoginPage.user' })}</label>
                            <input name="email" autoComplete="username" className="login__form-input" onChange={e => setEmail(e.target.value)} value={email} />
                        </div>

                        <div className="login__form-field">
                            <label>{intl.formatMessage({ id: 'app.pages.LoginPage.password' }).toString()}</label>
                            <input type="password" name="current-password" autoComplete="user-password" className="login__form-input" onChange={e => setPassword(e.target.value)} value={password} />
                        </div>
                    </div>

                    <input type="submit" className="login__form-submit" disabled={!validateForm()} value={intl.formatMessage({ id: 'app.pages.LoginPage.Enter' })} />
                    <div className="login__messages">
                        {isLoginPending && <div>{intl.formatMessage({ id: 'app.pages.LoginPage.pleaseWait' })}</div>}
                        {isLoginSuccess && <div>{intl.formatMessage({ id: 'app.pages.LoginPage.success' })}</div>}
                        {loginError && <div className="alert alert-danger" >{intl.formatMessage({ id: 'app.pages.LoginPage.wrongPassword' })}</div>}
                    </div>
                    <div className="login__pwd-lost" onClick={() => console.log('passwordLost')}>{intl.formatMessage({ id: 'app.pages.LoginPage.Forgot' })}</div>
                    <hr className="login__separator-line" />
                    <label htmlFor="languageSelector">{intl.formatMessage({ id: "app.components.Language.Selector.Title" })}</label>
                    <Selector selectName="login-language-selector" options={languages} onChange={(locale) => changeLocale(locale)} defaultValue={settings.locale} value={settings.locale} />
                </form>
            </div>
        </>
    )
}

LoginPage.propTypes = {
    onRefreshLogin: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
    loginPage: PropTypes.object.isRequired,
    settings: PropTypes.object.isRequired,
    changeLocale: PropTypes.func.isRequired,
    intl: PropTypes.object.isRequired
};

const mapStateToProps = createStructuredSelector({
    loginPage: makeSelectLoginPage()
});

function mapDispatchToProps(dispatch) {
    return {
        login: (email, password, history, refreshLogin) => { dispatch(login(email, password, history, refreshLogin)); },
        onSetLoginSuccess: (token) => { dispatch(setLoginSuccess(token)) },
        onRefreshLogin: (token) => dispatch(refreshLogin(token)),
        dispatch,
    };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'loginPage', reducer });

export default compose(
    withSettings,
    withReducer,
    withConnect,
    injectIntl,
)(LoginPage);
