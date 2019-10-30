import styled from 'styled-components/macro';

const SidebarDiv = styled.div`
    background-color: ${props => props.theme.colors.bgGray1};
    color: ${props => props.theme.colors.textWhite};
    height: calc(100vh - 103px);
    width: 280px;
    padding: 24px;
`;

export { SidebarDiv };
