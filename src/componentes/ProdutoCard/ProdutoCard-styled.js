import styled from "styled-components";

export const ProdutoCardContainer = styled.article`
border: 1px solid pink;
width: 200px;
height: 275px;
background-color: grey;
border-radius: 6px;
overflow: hidden;

img {
    width: 200px;
    height: 200px
}

.nome-produto {
    display: flex;
    margin: 8px 4px;
}

.preco-e-carrinho {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 8px;

    button {
        height: 30px;
        width: 30px;
        border: none;
        border-radius: 50%;

        img {
            height: 16px;
            width: 26px;
        }
    }
}

`