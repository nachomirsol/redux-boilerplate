import { CHANGE_LOCALE, CHANGE_THEME } from './constants';

export const changeLocale = (locale) => {

    return {
        type: CHANGE_LOCALE,
        payload: locale
    }
}

export const changeTheme = (theme) => {
    if (theme === 'theme-light') {
        document.body.classList.add(theme);
        document.body.classList.remove('theme-dark')
    } else {
        document.body.classList.add(theme);
        document.body.classList.remove('theme-light')
    }

    return {
        type: CHANGE_THEME,
        payload: theme
    }
}