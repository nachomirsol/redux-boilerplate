import styled from "styled-components/macro";

const SidebarWrapper = styled.div`
  background-color: ${props => props.theme.colors.bgGray1};
  color: ${props => props.theme.colors.textWhite};
  width: ${props => (props.expanded ? "320px" : "72px")};
  padding: 24px;
  transition: width 0.5s;
  font-family: 'Rubik', sans-serif;
  @media (max-width: 768px) {
    width:88px;
  }
`;

const SidebarItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${props => (props.expanded ? "normal" : "center")};
  padding: ${props => (props.expanded ? "8px 16px;" : "0")};
  font-family: Rubik Regular;
  font-size: 16px;

  .custom-icon {
    float: ${props => (props.expanded ? "left" : "none")};
    padding-right: ${props => (props.expanded ? "12px" : "0")};
    height: 22px;
    width: auto;
    max-width: 32px;
    max-height: 32px;
    margin: 0;
    position: static;
    top: 0;
  }

  height: ${props => (props.expanded ? "auto" : "42px")};
  width: ${props => (props.expanded ? "auto" : "42px")};
  cursor: pointer;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  border-radius: 20px;

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
  padding: 2px 8px;
  border-radius: 10px;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export { SidebarWrapper, SidebarItemWrapper, Alarm };
