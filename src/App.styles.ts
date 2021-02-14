import styled, { createGlobalStyle } from "styled-components";
//@ts-ignore
import backgrndImage from "./images/backgrnd4.jpg"

export const GlobalStyle = createGlobalStyle`
html {
    height: 100%;
}

body {
    background-image: url(${backgrndImage});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
}
* {
    box-sizing: border-box;
    font-family: 'Catamaran, sans-serif;
}

`;

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
> p {
    color: #fff;
}
.score {
    color: #222;
    font-size: 2rem;
    margin: 0;
}
h1 {
    font-family: Fascinate Inline, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    background-image: linear-gradient(180deg, #ccc, #87f1ff);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    font-weight: 400;
    text-align: center;
    margin: 20px;
}

.start, .next {
    cursor: pointer;
    background: linear-gradient(180deg, #e9d, #5d9);
    border: 2px solid #abc;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.25);
    border-radius: 10px;
    height; 50px;
    margin: 20px 0;
    padding: 0 40px;
    font-size: 1rem;
}
.start {
    max-width: 200px;
}

.next {
    margin-bottom: 30px;
}
`;
