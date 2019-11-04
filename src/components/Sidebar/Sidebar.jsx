import styled from "styled-components/macro";

const SidebarWrapper = styled.div`
  background-color: ${props => props.theme.colors.bgGray1};
  color: ${props => props.theme.colors.textWhite};
  height: calc(100vh - 103px);
  width: ${props => (props.expanded ? "320px" : "64px")};
  padding: 24px;
  transition: width 0.5s;
`;

const SidebarItemWrapper = styled.div`
  display: flex;
  justify-content: ${props => (props.expanded ? "normal" : "center")};
  padding: ${props => (props.expanded ? "8px 16px;" : "0")};

  .custom-icon {
    float: ${props => (props.expanded ? "left" : "none")};
    padding-right: ${props => (props.expanded ? "12px" : "0")};
    height: ${props => (props.expanded ? "22px" : "32px")};
    width: ${props => (props.expanded ? "22px" : "32px")};
  }
  cursor: pointer;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  border-radius: 20px;
  /* min-width: 40px;
  min-height: 40px; */
  &.selected {
    background-color: ${props => props.theme.colors.primaryColor};
  }
  &:hover {
    background-color: ${props => props.theme.colors.bgGray2};
  }
`;

const Alarm = styled.span`
  background-color: ${props => props.theme.colors.primaryColor};
  color: ${props => props.theme.colors.textWhite};
  margin-left: 10px;
  padding: 2px 10px;
  border-radius: 10px;
`;

export { SidebarWrapper, SidebarItemWrapper, Alarm };
