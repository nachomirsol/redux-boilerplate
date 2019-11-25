import React from 'react';
/**Libraries */
import PropTypes from "prop-types";
/**Components */
import Icon from "components/Icon";
/**Styles */
import "./filterPanel.scss";

const FilterPanel = () => {
    /**Pending make this component dynamic mapping elements */
    return (
        <div className="filterPanel__wrapper">
            <div className="filterPanel__header">
                <span>Filtrar por</span>
                <span><Icon name="ChevronRight" /></span>
            </div>
            <div className="filterPanel__content">
                <div className="filter">
                    <span className="title">    Tipo</span>
                    <ul>
                        <li>
                            <label className="checkbox-container"> Depósitos
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                        </li>
                        <li>
                            <label className="checkbox-container"> Bombas
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>
                        </li>


                    </ul>
                </div>
                <div className="filter">
                    <span>Niveles de alarma</span>
                    <ul>
                        <li>
                            <input type="checkbox" />
                            <span>Normal</span>
                        </li>
                        <li>
                            <input type="checkbox" />
                            <span>Warning</span>
                        </li>
                        <li>
                            <input type="checkbox" />
                            <span>Critical</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default FilterPanel;