import styled from "styled-components/macro";

const PopoverWrapper = styled.div`
  color: ${props => props.theme.colors.textWhite};
  background: ${props => props.theme.colors.bgGray1};
  min-width: 0 !important;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  opacity: 1;
  transition-property: top, left, opacity, transform;
  transition-duration: 500ms;
  transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.35);
  transform: translate(-50%, 0);
  margin-top: 10px;
`;

const PopoverBody = styled.div`
  padding: 0.5rem 1rem;
  max-width: none !important;
`;

const PopoverArrow = styled.svg`
  left: 50%;
  position: absolute;
  transform: translateY(-7px);
  transition: -webkit-transform 150ms ease-in 0s;
  polygon {
    fill: #31373f;
  }
`;

export { PopoverBody, PopoverWrapper, PopoverArrow };
