import React from 'pages/LoginPage/node_modules/react';
/**Assets */
import { ReactComponent as LogoGoAigua } from "assets/svg/goaigua-logo.svg";
/**Styles */
import './loginPage.scss';

const LoginPage = () => {
    return (
        <div className="login-cont">
            <form name="loginForm" onSubmit={this.onSubmit}>
                <div className="logo">
                    <LogoGoAigua />
                </div>
                <div className="form-group-collection">
                    <div className="title form-group text-center">
                        Sign In
                    </div>
                    <div className="form-group">
                        <label>{intl.formatMessage({ id: 'app.containers.LoginPage.user' })}</label>
                        <input name="email" autoComplete="username" className="form-control tirio-style" onChange={e => this.setState({ email: e.target.value })} value={email} />
                    </div>

                    <div className="form-group">
                        <label>{intl.formatMessage({ id: 'app.containers.LoginPage.password' }).toString()}</label>
                        <input type="password" name="current-password" autoComplete="user-password" className="form-control tirio-style" onChange={e => this.setState({ password: e.target.value })} value={password} />
                    </div>
                </div>

                <input type="submit" className="btn btn-primary btn-tirio btn-search btn-lg" value={intl.formatMessage({ id: 'app.containers.LoginPage.Enter' })} />
                <div className="cont-messages">
                    {isLoginPending && <div>{intl.formatMessage({ id: 'app.containers.LoginPage.pleaseWait' })}</div>}
                    {isLoginSuccess && <div>{intl.formatMessage({ id: 'app.containers.LoginPage.success' })}</div>}
                    {loginError && <div className="alert alert-danger" >{intl.formatMessage({ id: 'app.containers.LoginPage.wrongPassword' })}</div>}
                </div>
                <div className="pwd-lost" onClick={this.passwordLost}>{intl.formatMessage({ id: 'app.containers.LoginPage.Forgot' })}</div>
                <hr className="line" />

                <LanguageSelector
                    changeLocale={this.changeLocale}
                    localizationSettings={this.props.localizationSettings}
                />
            </form>
        </div>
    )
}

export default LoginPage;