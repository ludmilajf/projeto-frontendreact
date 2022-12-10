import React from 'react'
import ProdutoCard from '../../componentes/ProdutoCard/ProdutoCard'
import { priceFormatter } from '../../utilitarios/priceFormatter'
import { Main } from '../HomePage/HomePage-styled'

const Carrinho = (props) => {
    const {carrinho, deletaItemDoCarrinho} = props

    const total = carrinho.reduce(
        (acc, produto) => produto.preco * produto.quantidade + acc,
        0
        )
  return (
    <Main>
        <section>
            <h1>Carrinho</h1>
            {
                carrinho.map((produto) => (
                    <ProdutoCard 
                    produto={produto}
                    key={produto.id} 
                    isOnCarrinho={true}
                    deletaItemDoCarrinho={deletaItemDoCarrinho}
                    />

                ))
            }
            
            <hr/>
            <h3>Total = {priceFormatter.format(total)}</h3>
            <button>Finalizar compra</button>
        </section>
    </Main>
  )
}

export default Carrinho