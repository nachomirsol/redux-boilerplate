import React, { useState } from 'react';
/**Libraries */
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { useHistory } from "react-router-dom";
/**Components */
import Selector from 'components/Selector';
/**Redux */
import { setCompanyName } from './redux/actions';
/**Utils */
import { companies } from 'utils/const';
/**Assets */
import { ReactComponent as LogoGoAigua } from "assets/svg/goaigua-logo.svg";

/**Styles */
import './selectCompanyPage.scss';

const SelectCompanyPage = ({ intl, setCompanyName, companyName }) => {
    const history = useHistory();

    const onSubmit = () => {

        history.push(`/home/operation-state`);
        console.log(history)
    }

    const changeCompanyName = (companyName) => {

        setCompanyName(companyName)
        console.log(companyName)
    }


    return (
        <>

            <div className="select_company__wrapper">
                <form name="selectCompanyForm" className="select_company__form" onSubmit={onSubmit}>
                    <LogoGoAigua />
                    <div className="select_company__form-container">
                        <div className="select_company__form-title">
                            {intl.formatMessage({ id: "app.pages.SelectCompanyPage.Title" })}
                        </div>

                        <div className="select_company__form-field">
                            <Selector selectName="select_company" options={companies} onChange={(companyName) => changeCompanyName(companyName)} value={companyName} />
                        </div>

                    </div>

                    <input type="submit" className="select_company__form-submit" value={'GO'} />

                </form>
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    companyName: state.companyName.companyName
})

function mapDispatchToProps(dispatch) {
    return {
        setCompanyName: (companyName) => dispatch(setCompanyName(companyName)),
        dispatch,
    };
}

SelectCompanyPage.propTypes = {
    intl: PropTypes.object.isRequired
};


export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(SelectCompanyPage));
