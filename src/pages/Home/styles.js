import styled from "styled-components";

export const Container = styled.div`

    background-color: #181F36;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 20px;
    height: 100vh;

`

export const TopBackground = styled.div`

    background-color: #fe7e5d;
    height: 30vh;
    width: 90vw;
    max-width: 800px;
    border-radius: 30px;

    display: flex;
    align-items: center;
    justify-content: center;

    img{

        max-width: 100%;
        max-height: 100%;

    }

`

export const Form = styled.form`

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    max-width: 500px;

`

export const Title = styled.h1`

    color: #fff;
    text-align: center;
    font-size: 48px;
    font-weight: 600;
`

export const ContainerInputs = styled.div`

    display: flex;
    gap: 20px;

`

export const Input = styled.input`

    border-radius: 10px;
    border: 1px solid #D2DAE2;
    background-color: #fff;
    padding: 12px 20px;   
    outline: none;
    width: 100%;

`

export const InputLabel = styled.label`

    color: #FFF;
    font-size: 18px;
    font-weight: 500;

    span {

        color: #EF4F45;
        font-weight: bold;

    }

`
