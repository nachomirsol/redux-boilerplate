import styled from 'styled-components/macro';

const MapWrapper = styled.div`
    height: 100%;
    width: 100%;
    background-color: ${props => props.theme.colors.bgGray1};
    position: relative;
`;

export { MapWrapper };