import React from 'react'
import pesquisarIcone from '../../assets/pesquisarIcone.svg'
import produtosIcone from '../../assets/produtosIcone.svg'
import carrinhoDeComprasIcone from '../../assets/carrinhoDeComprasIcone.svg'
import { HeaderContainer } from './Header-styled'

export default function Header(props) {
    const { mudaParaHomePage,
        mudaParaCarrinho,
        itensNoCarrinho,
        filtraTexto,
        onChangeFiltraTexto
    } = props
    return (
        <HeaderContainer>
            <div className='logo-home-page'>
                <a href={mudaParaHomePage}>
                    <h1>Space-Shirt</h1>
                </a>
            </div>

            <div className='campo-de-pesquisa-e-filtro'>
                <input placeholder='Pesquisar' value={filtraTexto} onChange={onChangeFiltraTexto} />
                <button>
                    <img src={pesquisarIcone} alt='Icone de pesquisa' />
                </button>
                <select >
                        <option value="">Ordenar</option>
                        <option value="crescente">Crescente</option>
                        <option value="decrescente">Decrescente</option>
                        <option value="precoMinimo">Menor preço</option>
                        <option value="precoMaximo">Maior preço</option>
                    </select>
            </div>
            

            <div className='campo-de-carrinho-e-produtos'>
                <button onClick={mudaParaHomePage}>
                    <img src={produtosIcone} alt='Icone loja de produtos' />
                </button>
                <button onClick={mudaParaCarrinho}>
                    <img src={carrinhoDeComprasIcone} alt='Icone carrinho de compras' />
                    {
                        itensNoCarrinho > 0 &&
                        <span className='identificacao-carrinho' >{itensNoCarrinho}</span>
                    }
                </button>
            </div>
        </HeaderContainer>
    )
}
