import { CHANGE_LOCALE, CHANGE_THEME } from './constants';

export const changeLocale = (locale) => {
    return {
        type: CHANGE_LOCALE,
        payload: locale
    }
}

export const changeTheme = (theme) => {
    return {
        type: CHANGE_THEME,
        payload: theme
    }
}