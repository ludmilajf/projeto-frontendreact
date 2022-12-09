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
        onChangeFiltraTexto,
        ordenaAlfabeto,
        onChangeAlfabeto,
        precoMinimo,
        onChangePrecoMinimo,
        precoMaximo,
        onChangePrecoMaximo
    } = props
    return (
        <HeaderContainer>
            <div className='logo-home-page'>
                <a href={mudaParaHomePage}>
                    <h1>Space-Shirt</h1>
                </a>
            </div>

            <div className='campo-de-pesquisa'>
                <input placeholder='Pesquisar' value={filtraTexto} onChange={onChangeFiltraTexto} />
                <button>
                    <img src={pesquisarIcone} alt='Icone de pesquisa' />
                </button>
            </div>
            <div className='filtros-de-pesquisa'>
                <div className='ordem-alfabetica'>
                    <select >
                        <option value="">Ordenar</option>
                        <option value="crescente">Crescente</option>
                        <option value="decrescente">Decrescente</option>
                    </select>
                </div>
                <div className='faixa-de-preco'>
                    <input
                        type="number"
                        placeholder="Valor mínimo"
                        value={precoMinimo}
                        onChange={onChangePrecoMinimo}
                    />

                    <input
                        type="number"
                        placeholder="Valor máximo"
                        value={precoMaximo}
                        onChange={onChangePrecoMaximo}
                    />
                </div>
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
