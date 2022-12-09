import React from 'react'
import { priceFormatter } from '../../utilitarios/priceFormatter'
import { ProdutoCardContainer } from './ProdutoCard-styled'

const ProdutoCard = (props) => {
    const {
      produto,
      adicionaNoCarrinho,
      isOnHomePage,
      isOnCarrinho,
      deletaItemDoCarrinho
    } = props
  return (
    <ProdutoCardContainer>
        <img src={produto.urlImagem} alt={produto.altImagem} />
        <div>
            <div className='nome-produto'>
                <h4>{produto.nome}</h4>
            </div>
            <div className='preco-e-carrinho'>
              <span>{priceFormatter.format(produto.preco)}</span>
              
              {
                isOnCarrinho &&
                <span>Qtd: {produto.quantidade}</span>
              }
              {
                isOnHomePage &&
                <button onClick={() => adicionaNoCarrinho(produto)}>
                  <img src='https://cdn-icons.flaticon.com/svg/3916/3916598.svg?token=exp=1670558526~hmac=dd28585092fd0fba9240fc0b8faf38db' alt='Icone - adicionar ao carrinho de compras'/>
                </button>
              }
              {
                isOnCarrinho &&
                <button className='botao-de-deletar-do-carrinho' onClick={() => deletaItemDoCarrinho(produto)} >
                  x
                </button>
              }

            </div>
        </div>
    </ProdutoCardContainer>
  )
}

export default ProdutoCard