import styled, { css }  from 'styled-components/macro';
import {
    color,
    space,
    flex,
    flexBasis,
    flexDirection,
    flexWrap,
    justifyContent,
    alignItems,
    alignSelf,
    alignContent
  } from "styled-system";

const Button = styled.button`
    cursor: pointer;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    border: 1px solid #af7eeb;
    ${color};
    ${'' /* color: #fff;
    background-color: ${props => props.bg ? props.bg : '#af7eeb'}; */}
`;
const flexProperties = css`
    display: flex;
    ${space};
    ${flex};
    ${flexBasis};
    ${flexDirection};
    ${flexWrap};
    ${justifyContent};
    ${alignItems};
    ${alignSelf};
    ${alignContent};
`;
const Form = styled.form`
    display:flex;
    ${flexProperties}
    margin-bottom:24px;
`;

export { Button, Form };
