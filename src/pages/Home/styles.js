import styled from "styled-components";

export const Content  = styled.main`
    width: 100%;
    height: 100vh;
    background-color: #E3E3E3;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 600px) {
        flex-direction: column;
    }

`
export const Wrapper = styled.main`
    width: 80vw;
    display: flex;
    flex-direction: column;
`

export const Title = styled.h1`
    color: var(--dark-blue);
    font-size: 48px;
    display: flex;
    align-items: flex-end;

    @media (max-width: 320px) {
        font-size: 36px;
    }
`

export const Code = styled.h1`
    color: var(--light-blue);
    font-size: 12px;

    @media (max-width: 428px) {
        margin-top: 2vh;
    }
`

export const WrapperButtons = styled.h1`
    display: flex;
    width: 26vw;
    justify-content: space-between;
    margin-top: 1vh;

    @media (max-width: 480px) {
        height: 12vh;
        flex-direction: column
    }

    @media (max-width: 600px) {
        width: 54vw;
    }

    @media (max-width: 800px) {
        width: 42vw;
    }
    @media (max-width: 1024px) {
        width: 32vw;
    }
`

export const Button = styled.h1`
    color: white;
    width: 182px;
    height: 54px;
`

export const WrapperIcons = styled.h1`
    display: flex;
    width: 20vw;
    margin-top: 1vh;
    margin-right: 4vw;
    color: var(--light-blue);
    
`

export const Blink = styled.h1`
    font-size: 50px;
    color: var(--dark-blue);
    position: relative;
    right: 12vw;

    @keyframes blinker {
        50% {
        opacity: 0;
        }
    }

    @media (max-width: 800px) {
        right: 14vw
    }

    @media (max-width: 600px) {
        right: 20vw
    }

    @media (max-width: 480px) {
        right: 14vw
    }

    @media (max-width: 479px) {
        display: none;
    }

    animation: blinker 1s linear infinite;


`
export const Image = styled.h1`
    display: flex;
    width: 60vw;

    @media (min-width: 800px) {
        display: none;
    }
`

export const Container = styled.h1`
    position: absolute;
    bottom: 10vh;

    @media (max-width: 480px) {
        top: 98vh;
    }

    @media (max-width: 600px) {
        top: 92vh;
    }
`