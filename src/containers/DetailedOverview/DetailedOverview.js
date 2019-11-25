import React from 'react';
/*Libraries*/
import PropTypes from "prop-types";
/* Components */
import FilterPanel from "components/FilterPanel";
import Hierachy from 'components/Hierachy';
/**Mock data */
import hierachyData from '../../mockData/hierachyData/hierachyData.json';
/**Styles */
import './detailedOverview.scss';

const DetailedOverview = ({ intl }) => {
  return (
    <>
      <FilterPanel intl={intl} />
    </>
  )
}



DetailedOverview.propTypes = {
  intl: PropTypes.object.isRequired
}
export default DetailedOverview;