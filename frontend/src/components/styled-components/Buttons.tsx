import React from "react";
import styled from "styled-components";

export const Button = styled.button`
    font-family: 'Saira', sans-serif;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    margin: 0.5rem;
    outline: none;
    padding: 0.5rem;
    width: 10rem;
    transition: 0.5s;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    &:hover {
        transition: 0.5s;
        box-shadow: rgba(42, 0, 54, 0.35) 0px 5px 15px;
    }
`;

export const ButtonPrimary = styled(Button)`
    background-color: var(--main-secondary);
    color: var(--light-white);
    &:hover {
        background-color: var(--main-dark);
        color: #f5f5f5;
    }
`;

export const ButtonLogin = styled(ButtonPrimary)`
    width: 60%;
    margin: 0;
`;

export const ButtonBack = styled(Button)`
    background-color: var(--main-dark);
    color: var(--light-white);
    position: absolute;
    top: 4vh;
    left: 8vw;
    &:hover {
        background-color: var(--main-secondary);
        color: #f5f5f5;
    }

`;
