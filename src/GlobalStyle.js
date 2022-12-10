import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-family: sans-serif;
        color: white;
        background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxT8S0852CWqYsIFgdkMnzfZaV9PXa5gUkxA&usqp=CAU");
    }
`