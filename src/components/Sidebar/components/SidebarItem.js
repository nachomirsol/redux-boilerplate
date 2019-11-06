import React from "react";
import { injectIntl } from "react-intl";
import { SidebarItemWrapper, Alarm } from "../Sidebar";
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import Icon from "components/Icon";

const SidebarItem = ({ expanded, item, intl, history }) => {
  const { location: { pathname } } = history;
  const { alarms, icon, text, url } = item;
  return (
    <SidebarItemWrapper expanded={expanded} className={`${url === pathname ? 'selected' : ''}`} onClick={() => history.push(url)}>
      <Icon name={icon} custom={true} />
      {expanded && (
        <span>
          {intl.formatMessage({ id: `app.components.Sidebar.${text}` })}
        </span>
      )}
      {expanded && alarms > 0 && <Alarm>{alarms}</Alarm>}
    </SidebarItemWrapper>
  );
};

export default compose(injectIntl, withRouter)(SidebarItem);
