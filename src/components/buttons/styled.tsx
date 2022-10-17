import { FunctionComponent, FunctionComponentElement } from 'react';
import styled, { css, StyledFunction } from 'styled-components';
import { ButtonProps } from '.';

/**
 * button common css style
 */
const btn = css`
border-radius: 6px;
font-weight: 400;
font-size: 16px;
padding: 0 20px;
cursor: pointer;
color: #fff;
display: inline-flex;
align-items: center;
flex-wrap: nowrap;
-webkit-appearance: none;
border: none;
outline: none;
justify-content: center;
display: flex;
flex-wrap: wrap;
justify-content: center;
&:disabled {
    background: #bebebe;
    color: #7e7e7e;
    cursor: default;
}`

/**
 * button sizes "standard, small"
 */
const sizes = {
    standard: css` 
    height: 48px;
    `,
    small: css` 
    height: 38px;
    `
}

/** full width style */
const full_width = css`
    width: 100%;
    display: flex;
    `;

/**
 * button themes "primary, secondary, tertiary"
 */
const themes = {
    primary: css`
    background: #e60000;
    &:hover:not([disabled]) {
        background: #bd0000;
    }`,
    secondary: css`
    background: #0d0d0d;
    color: #fff;
    &:hover:not([disabled]) {
        background: #262626;
    }`,
    tertiary: css`
    color: #0d0d0d;
    background: rgba(255,255,255,0);
    border: solid 2px #0d0d0d;
    &:hover:not([disabled]) {
        background: #D3D3D3;
    }`,
    
}


const ButtonStyled = styled.button`
    ${btn}
    ${(props: ButtonProps) => props.size ? sizes[props.size] : sizes.standard}
    ${(props: ButtonProps) => props.theme ? themes[props.theme]: themes.primary}
    ${(props: ButtonProps) => props.fullWidth ? full_width: null}
`;

export default ButtonStyled;