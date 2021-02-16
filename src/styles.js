import styled, { keyframes } from "styled-components";

const explosion = keyframes`
    0% 
    {
        top: 100%;
    }

    33%, 100%
    {
        top: -50%;
    }
`

export const Firework = styled.div`
    position: absolute;
    left: ${props => props.left};
    top: ${props => props.top};
    transform: ${props => props.transform};
`;

export const Explosion = styled.div`
    position: absolute;
    left: -2px;
    bottom: 0;
    width: 4px;
    height: 80px;
    transform-origin: 50% 100%;
    overflow: hidden;
    &:nth-child(1) {
        transform: rotate(0deg)translateY(-15px);
    }
    &:nth-child(2) {
        transform: rotate(30deg)translateY(-15px);
    }
    &:nth-child(3) {
        transform: rotate(60deg)translateY(-15px);
    }
    &:nth-child(4) {
        transform: rotate(90deg)translateY(-15px);
    }
    &:nth-child(5) {
        transform: rotate(120deg)translateY(-15px);
    }
    &:nth-child(6) {
        transform: rotate(150deg)translateY(-15px);
    }
    &:nth-child(7) {
        transform: rotate(180deg)translateY(-15px);
    }
    &:nth-child(8) {
        transform: rotate(210deg)translateY(-15px);
    }
    &:nth-child(9) {
        transform: rotate(240deg)translateY(-15px);
    }
    &:nth-child(10) {
        transform: rotate(270deg)translateY(-15px);
    }
    &:nth-child(11) {
        transform: rotate(300deg)translateY(-15px);
    }
    &:nth-child(12) {
        transform: rotate(330deg)translateY(-15px);
    }

    &:before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 100%;
        height: 40px;
        background-color: ${props => props.color};
        animation: ${explosion} 2s 6s ease-in-out infinite;
    }
`;

