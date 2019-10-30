import styled from 'styled-components/macro';

const HeaderWrapper = styled.div`
    background-color: ${props => props.theme.colors.bgGray1};
    color: ${props => props.theme.colors.textWhite};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    & .link{
        a{color: ${props => props.theme.colors.textWhite};}
    }
    height: 55px;
    box-shadow: 0 3px 3px 0 rgba(0,0,0,0.16), 0 3px 4px 0 rgba(0,0,0,0.18), 0 1px 8px 0 rgba(0,0,0,0.2);
    z-index: 1;
    padding: 0 24px;
`;

export { HeaderWrapper };
