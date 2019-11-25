import React, { useState } from 'react';
/**Libraries */
import PropTypes from "prop-types";

/**Components */
import FilterPanelItem from "./components/FilterPanelItem";
import Icon from "components/Icon";
/**Styles */
import "./filterPanel.scss";

const FilterPanel = ({ intl }) => {
    const [expanded, setExpanded] = useState(true);

    const toggleFilter = () => {
        setExpanded(!expanded)
    }
    /**Pending make this component dynamic mapping elements */
    return (
        <div className="filterPanel__wrapper">
            <div className="filterPanel__header">
                <span>Filtrar por</span>
                <span><i className="fas fa-chevron-right" onClick={() => toggleFilter()}></i></span>
            </div>

            <div className="filterPanel__content">
                {
                    expanded && (
                        <div>
                            <div className="filter">
                                <span className="title"> Tipo</span>
                                <ul>
                                    <li>
                                        <FilterPanelItem name={"Depósitos"} />
                                    </li>
                                    <li>
                                        <FilterPanelItem name={"Puntos de producción"} />
                                    </li>
                                </ul>
                            </div>
                            <div className="filter">
                                <span>Niveles de alarma</span>
                                <ul>
                                    <li>
                                        <FilterPanelItem name={"Rojo"} />
                                    </li>
                                    <li>
                                        <FilterPanelItem name={"Amarillo"} />
                                    </li>
                                    <li>
                                        <FilterPanelItem name={"Verde"} />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default FilterPanel;