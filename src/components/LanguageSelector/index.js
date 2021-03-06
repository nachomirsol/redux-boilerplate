import React, { Fragment } from 'react';
/**Libraries */
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import PropTypes from 'prop-types';
/**Redux */
import { changeLocale } from '../hocs/LanguageProvider/actions';
/**Mock Data */
import { Languages } from '../../utils/const'



export const LanguageSelector = ({ changeLocale }) => {

    const onChangeLocale = (locale) => {
        changeLocale(locale)
    }
    return (
        <Fragment>
            <label htmlFor="languageSelector" >
                {"Seleccione Idioma"}
            </label>
            <select
                id="languageSelector"
                className="form-control form-control-sm"
                onChange={(e) => onChangeLocale(e.target.value)}
            >
                {Languages.map((language, index) =>
                    <option key={index} value={language.code}>
                        {language.display}
                    </option>)}
            </select>
        </Fragment>
    );
}



LanguageSelector.propTypes = {
    changeLocale: PropTypes.func.isRequired,
};


export default connect(null, { changeLocale })(injectIntl(LanguageSelector));