import { useEffect, useState } from "react";
import Header from "./componentes/Header/Header";
import Carrinho from "./paginas/Carrinho/Carrinho";
import HomePage from "./paginas/HomePage/HomePage";
import NotFoundPage from "./paginas/NotFoundPage/NotFoundPage-styled";

function App() {
  const [telaAtiva, setTelaAtiva] = useState("HomePage")

  const [carrinho, setCarrinho] = useState([])

  const [filtraTexto, setFiltraTexto] = useState("")

  const [ordenaAlfabeto, setOrdenaAlfabeto] = useState("")

  const [precoMinimo, setPrecoMinimo] = useState("")

  const [precoMaximo, setPrecoMaximo] = useState("")


  const mudaParaHomePage = () => setTelaAtiva("HomePage")
  const mudaParaCarrinho = () => setTelaAtiva("Carrinho")

  const renderizaTela = () => {
    switch (telaAtiva) {
      case "HomePage":
        return <HomePage
          adicionaNoCarrinho={adicionaNoCarrinho}
          filtraTexto={filtraTexto}
        />
      case "Carrinho":
        return <Carrinho
          carrinho={carrinho}
          deletaItemDoCarrinho={deletaItemDoCarrinho}
        />
      default:
        return <NotFoundPage />
    }
  }

  const onChangeFiltraTexto = (e) => {
    setFiltraTexto(e.target.value)
  }

  const onChangeAlfabeto = (e) => {
    setOrdenaAlfabeto(e.target.value);
  };

  const onChangePrecoMinimo = (e) => {
    setPrecoMinimo(e.target.value)
  }

  const onChangePrecoMaximo = (e) => {
    setPrecoMaximo(e.target.value)
  }

  

  const adicionaNoCarrinho = (produtoParaAdicionar) => {
    const novoCarrinho = [...carrinho]

    const produtoEncontrado = novoCarrinho.find(
      (produtoNoCarrinho) => produtoNoCarrinho.id === produtoParaAdicionar.id
    )
    if (!produtoEncontrado) {
      const novoProduto = { ...produtoParaAdicionar, quantidade: 1 }
      novoCarrinho.push(novoProduto)
    } else {
      produtoEncontrado.quantidade++
    }
    const virarString = JSON.stringify(novoCarrinho)
    localStorage.setItem("local", virarString)
    setCarrinho(novoCarrinho)
  }



  const deletaItemDoCarrinho = (produtoParaDeletar) => {
    const novoCarrinho = [...carrinho]

    const procuraIndex = novoCarrinho.findIndex(
      (produtoNoCarrinho) => produtoNoCarrinho.id === produtoParaDeletar.id
    )
    novoCarrinho.splice(procuraIndex, 1)
    const virarString = JSON.stringify(novoCarrinho)
    localStorage.setItem("local", virarString)
    setCarrinho(novoCarrinho)
  }

  

  const consultarItem = () => {
    if (localStorage.getItem("local")) {
      const armazenarItem = localStorage.getItem("local")
      const pegarString = JSON.parse(armazenarItem);
      setCarrinho(pegarString)
    }
  }

  useEffect (() => {
    consultarItem()
  }, [])

  

  return (
    <div>
      <Header
        mudaParaHomePage={mudaParaHomePage}
        mudaParaCarrinho={mudaParaCarrinho}
        itensNoCarrinho={carrinho.length}
        filtraTexto={filtraTexto}
        onChangeFiltraTexto={onChangeFiltraTexto}
        ordenaAlfabeto={ordenaAlfabeto}
        setOrdenaAlfabeto={setOrdenaAlfabeto}
        precoMinimo={precoMinimo}
        setPrecoMinimo={setPrecoMinimo}
        precoMaximo={precoMaximo}
        setPrecoMaximo={setPrecoMaximo}
      />
      
      {renderizaTela()}
    </div>
  );
}

export default App;
