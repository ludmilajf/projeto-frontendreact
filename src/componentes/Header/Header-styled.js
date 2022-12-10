import styled from 'styled-components'

export const HeaderContainer = styled.header`
    display:flex;
    justify-content: space-between;
    width: 100%;
    height: 50px;
    align-items: center;
    margin: 20px 0;
    

     .logo-home-page {
        margin: 0 16px;
        font-family: 'DM Sans', sans-serif;
        font-family: 'Space Mono', monospace;
        font-family: 'Zen Dots', cursive;
        font-size: 1rem;       
     }
    

    .campo-de-pesquisa-e-filtro {
        display: flex;
        align-items: center;
        gap: 8px;
        
               

        input {
            background-color: #A195B8;
            width: 250px;
            height: 40px;
            border: none;
            border-radius: 6px;
            padding: 8px;
        }

        button {
            background-color: #A195B8;
            width: 50px;
            height: 40px;
            border: none;
            border-radius: 6px;
            
        }
        select {
            background-color: #A195B8;
            width: 100px;
            height: 40px;
            border: none;
            border-radius: 6px;
        }

        img {
            width: 30px;
            height: 30px;
            padding: 2px;
            margin: 2px 0;

        }
    
       
    }

    .campo-de-carrinho-e-produtos {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-right: 20px;

        button {
            background-color: #A195B8;
            width: 50px;
            height: 40px;
            border: none;
            border-radius: 6px;
            
        }
        

        img {
            width: 30px;
            height: 30px;
            padding: 2px;
            margin: 2px 0;
        }
    
    }

    

    
`