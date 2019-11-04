import styled from "styled-components/macro";

const ContainerWrapper = styled.div`
  display: flex;
  min-height: calc(100vh - 55px);
`;

const Container = styled.div`
  padding: 24px;
  width: 100%;
`;

const Page = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.bgGray2};
`;

export { ContainerWrapper, Container, Page };
