import styled from "styled-components";

export const Content  = styled.main`
    width: 100%;
    height: 100vh;
    background-color: #E3E3E3;
    display: flex;
    justify-content: center;
    align-items: center;

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
`

export const Code = styled.h1`
    color: var(--light-blue);
    font-size: 12px;
`

export const WrapperButtons = styled.h1`
    display: flex;
    width: 26vw;
    justify-content: space-between;
    margin-top: 1vh;
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
    position: absolute;
    left: 31vw;

    @keyframes blinker {
        50% {
        opacity: 0;
        }
    }

    animation: blinker 1s linear infinite;


`