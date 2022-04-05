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
export const Container = styled.div`
    background-color: #000;
    min-width: 100vw;
    min-height: 100vh;
    padding: 16px;
`;

export const InputChoose = styled.input`
    height: 40px;
    border-radius: 8px;
    width: 350px;
    padding-left: 15px;
    border: none;
    -webkit-box-shadow: -1px 0px 15px 3px rgba(0,0,0,0.45); 
    box-shadow: -1px 0px 15px 3px rgba(0,0,0,0.45);
`

export const ContainerChoose = styled.div`
    background-color: #242427;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const ButtonConfirm = styled.button`
    width: 365px;
    height: 40px;
    background-color: #451776;
    margin-top: 16px;
    border-radius: 8px;
    border: none;
    color: #fff;
    font-weight: bold;
    font-size: 15px;
    -webkit-box-shadow: -1px 0px 15px 3px rgba(0,0,0,0.45); 
    box-shadow: -1px 0px 15px 3px rgba(0,0,0,0.45);
    cursor: pointer;
`;

export const ButtonEdit = styled.button`
    background-color: #fff;
    display: flex;
    border: none;
    align-self: flex-end;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    cursor: pointer;
`;

export const Title = styled.h1`
    font-family: sans-serif;
    color: #fff;
`;

export const FormInputs = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Firework = styled.div`
    position: absolute;
    left: ${props => props.left || 0}%;
    top: ${props => props.top || 0}%;
    transform: scale(${props => props.transform || 0});
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

