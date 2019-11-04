import styled from "styled-components/macro";

const WidgetWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.16), 0 3px 4px 0 rgba(0, 0, 0, 0.18),
    0 1px 8px 0 rgba(0, 0, 0, 0.2);
  font-family: 'Rubik', sans-serif;
`;

const WidgetHeader = styled.div`
  background-color: ${props => props.theme.colors.bgGray3};
  color: ${props => props.theme.colors.textWhite};
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
`;

const WidgetContent = styled.div`
  background-color: ${props => props.theme.colors.bgGray1};
  height: 100%;
  overflow:hidden;
`;

export { WidgetWrapper, WidgetHeader, WidgetContent };
