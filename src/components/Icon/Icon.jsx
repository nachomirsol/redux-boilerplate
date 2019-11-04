import styled from "styled-components/macro";

const IconWrapper = styled.span`
  svg {
    max-width: 32px;
    max-height: 32px;
  }
  path {
    fill: ${props => props.theme.colors.logoColor};
  }
`;
export { IconWrapper };
