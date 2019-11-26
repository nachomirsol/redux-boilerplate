import React, { useState } from 'react';
/**Libraries */
import PropTypes from "prop-types";

/**Components */
import FilterPanelItem from "./components/FilterPanelItem";
import Icon from "components/Icon";
/**Styles */
import "./filterPanel.scss";

const FilterPanel = ({ intl, onCheckAsset, onCheckAlertStatus }) => {
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
                                        <FilterPanelItem name={"deposito"} onCheckAsset={onCheckAsset} id={1} />
                                    </li>
                                    <li>
                                        <FilterPanelItem name={"bomba"} onCheckAsset={onCheckAsset} id={2} />
                                    </li>
                                </ul>
                            </div>
                            <div className="filter">
                                <span>Niveles de alarma</span>
                                <ul>
                                    <li>
                                        <FilterPanelItem status={"critical"} name={"Critical"} onCheckAlertStatus={onCheckAlertStatus} />
                                    </li>
                                    <li>
                                        <FilterPanelItem status={"warning"} name={"Warning"} onCheckAlertStatus={onCheckAlertStatus} />
                                    </li>
                                    <li>
                                        <FilterPanelItem status={"ok"} name={"Normal"} onCheckAlertStatus={onCheckAlertStatus} />
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