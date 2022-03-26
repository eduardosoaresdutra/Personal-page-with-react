import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto&family=Ubuntu:wght@500&display=swap');

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        scroll-behavior: smooth;
    }
    body {
        background: ${props => props.theme.elements.background};
        color: ${props => props.theme.elements.text};
        font-family: 'Ubuntu';
    }
    h1, div, p, span {
        color: ${props => props.theme.elements.text};
    }
    .App {
        display: flex;
        flex-direction: column;
    }
    .infoWrapper h1 {
        font-weight: 400;
        font-size: 2.3rem;
    }
    .infoWrapper hr {
        border: 1px solid ${props => props.theme.elements.text};
        background-color: ${props => props.theme.elements.text};
        margin-top: 16px;
    }
    .mobile-menu-enter {
        transform: translateX(-110%);
    }
    .mobile-menu-enter-active {
        transform: translateX(0%);
        transition: 0.3s;
    }
    .mobile-menu-exit {
        transform: translateX(0%);
    }   
    .mobile-menu-exit-active {
        transform: translateX(-110%);
        transition: transform 0.3s;
    }
`