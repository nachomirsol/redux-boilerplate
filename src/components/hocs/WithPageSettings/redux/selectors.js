import { createSelector } from "reselect";

/**
 * Direct selector to the themeToggle state domain
 */
const selectPageSettings = state => state.pageSettings;

const emptyObject = {};

const makeSelectPageSettings = () =>
  createSelector(selectPageSettings, substate =>
    substate === undefined ? emptyObject : substate
  );

export default makeSelectPageSettings;

export { selectPageSettings, makeSelectPageSettings };
