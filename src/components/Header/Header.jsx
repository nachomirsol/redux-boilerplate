import styled from "styled-components/macro";

const HeaderWrapper = styled.div`
  background-color: ${props => props.theme.colors.bgGray1};
  color: ${props => props.theme.colors.textWhite};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  & .link {
    a {
      color: ${props => props.theme.colors.textWhite};
    }
  }
  height: 64px;
  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.16), 0 3px 4px 0 rgba(0, 0, 0, 0.18),
    0 1px 8px 0 rgba(0, 0, 0, 0.2);
  z-index: 1;
  padding: 0 24px;
  position: relative;
  .menu-bars {
    cursor: "pointer";
    @media (max-width: 768px) {
      display:none;
    }
  }
`;

const LogoWrapper = styled.div`
  position: absolute;
  left: 45%;
  @media (max-width: 992px) {
    position: static;
  }
  path {
    fill: ${props => props.theme.colors.logoColor};
  }
`;

const IconWrapper = styled.span`
  cursor: pointer;
  svg {
    max-width: 32px;
    max-height: 32px;
  }
  path {
    fill: ${props =>
    props.gradient
      ? "url(#my-cool-gradient) !important"
      : props.theme.colors.logoColor};
    stroke-width: ${props => (props.gradient ? "0 !important" : "35px")};
  }
`;

const RightHeaderMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  svg {
    path {
      fill: transparent;
      stroke: ${props => props.theme.colors.logoColor};
      stroke-width: 35px;
    }
    margin-right: 20px;
  }
`;

export { HeaderWrapper, LogoWrapper, RightHeaderMenuWrapper, IconWrapper };
