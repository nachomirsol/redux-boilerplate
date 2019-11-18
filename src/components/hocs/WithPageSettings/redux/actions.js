/*
 *
 * ThemeProvider actions
 *
 */

import {
    TOGGLE_MENU,
    TOGGLE_SYSTEM,
    TOGGLE_ADMIN
} from './constants';

export function toggleMenu() {
    return {
        type: TOGGLE_MENU,
    };
}

export function toggleSystem() {
    return {
        type: TOGGLE_SYSTEM,
    };
}

export function toggleAdmin() {
    return {
        type: TOGGLE_ADMIN,
    };
}
