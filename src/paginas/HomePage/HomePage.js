import React from 'react'
import { Main } from './HomePage-styled'
import produtos from '../../assets/produtos.json'
import ProdutoCard from '../../componentes/ProdutoCard/ProdutoCard'
import Footer from '../../componentes/Footer/Footer'

const HomePage = (props) => {
    const { adicionaNoCarrinho,
        filtraTexto,
        ordenaAlfabeto,
        onChangeAlfabeto,
        produto,
        precoMinimo,
        onChangePrecoMinimo,
        precoMaximo,
        onChangePrecoMaximo } = props

    const filtraItensPorTexto = () => {
        return produtos.filter(
            (produto) => produto.nome.toLowerCase().includes(filtraTexto.toLowerCase())
        )
    }

    // const ordenaPorOrdemAlfabetica = () => {
    //     produtos.sort((a, b) => {
    //                     if (ordenaAlfabeto === "crescente") {
    //                         if (a.nome > b.nome) {
    //                             return 0
    //                         } else {
    //                             return -1
    //                         }
    //                     } else if (ordenaAlfabeto === "decrescente") {
    //                         if (a.nome < b.nome) {
    //                             return 0
    //                         } else {
    //                             return -1
    //                         }
    //                     } 
    //                   })
    // }


    // const filtraPorPreco = () => {
    //     if()
    // }



    return (
        <div>
            <Main>
                <section>

                    {/* {
            ordenaPorOrdemAlfabetica().map((produto) => (
                <ProdutoCard
                    produto={produto}
                    adicionaNoCarrinho={adicionaNoCarrinho}
                    key={produto.id}
                    isOnHomePage={true}
            />
        ))
            } */}
                    {/* {
                filtraItensPorTexto()
                    .map((produto) => (
                        <ProdutoCard
                            produto={produto}
                            adicionaNoCarrinho={adicionaNoCarrinho}
                            key={produto.id}
                            isOnHomePage={true}
                    />
                ))
            } */}
                    {
                        produtos
                            //     .filter((produto) => {
                            //         return produto.preco >= precoMinimo || precoMinimo === ""
                            //     })
                            //     .filter((produto) => {
                            //         return produto.preco <= precoMaximo || precoMaximo === ""
                            //     })
                            .map((produto) => (
                                <ProdutoCard
                                    produto={produto}
                                    adicionaNoCarrinho={adicionaNoCarrinho}
                                    key={produto.id}
                                    isOnHomePage={true}
                                />
                            ))
                    }

                </section>
            </Main>
            <Footer />
        </div>
    )
}


export default HomePage