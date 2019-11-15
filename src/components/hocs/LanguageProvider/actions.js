import { CHANGE_LOCALE } from './constants'

export const changeLocale = (locale) => {

    return {
        type: CHANGE_LOCALE,
        payload: locale
    }
}