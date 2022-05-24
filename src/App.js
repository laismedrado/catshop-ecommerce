import  React from "react";
import styled from "styled-components";
import CardProduto from "./Components/CardProduto";
import { listaDeRacao} from "./Components/ListaDeRacao";
import {listaLimpeza} from "./Components/ListaLimpeza";
import { listaArranhadores } from "./Components/ListaArranhadores";
import { listaBebedouros } from "./Components/ListaBededouro";
import CarrinhoDeCompras from "./shopping-cart.svg";
import IconeLixeira from "./iconeLixeira.svg"
import { listaBrinquedos } from "./Components/ListaBrinquedos";
import {BarraInformacoes , ContainerHome , ContainerProdutos , ContainerFiltros , Container , CampoOrdenacao , CampoInput , Input ,  ContainerCarrinho  ,  ContainerItemCarrinho ,  ContainerTodosProdutos  ,  ContainerValorTotal  ,  ContainerHeaderCarrinho  ,  ContainerPrecoItem  ,  ContainerDescricaoItem  ,  ContainerImgProdCarrinho  ,  ImgProdCarrinho  ,  ContainerDescItemCarrinho  ,  BotaoLimparCarrinho ,  BotaoDeleteItem } 
from "./assets/style";
import { theme } from "./assets/theme";
import { ThemeProvider } from "styled-components";
import Header from "./Components/Header";





const todosOsProdutos = [...listaDeRacao, ...listaLimpeza, ...listaArranhadores, ...listaBebedouros, ...listaBrinquedos];


class App extends React.Component {
  
  state = {
    produtos: todosOsProdutos ,
     query: "",
    precoMinimo: "",
    precoMaximo: "",
    classificacaoCategoria: "",
    order: 1,
    sortingParamater: "name",
    carrinho: [],
  };

 

  //a função adicionarItemCarrinho é responsável por adicionar um item ao carrinho de compras;
  // que é  chamada quando o usuário clica no botão de adicionar ao carrinho;
  adicionarCarrinho = (produto) => {

  // a const produtosDoCarrinho é um array que recebe os produtos do carrinho de compras;
  // que é inicializada como um array vazio;
  //e vai setando o produto que o usuário clicou no botão de adicionar ao carrinho;
    const produtosDoCarrinho = [...this.state.carrinho]
    let novoProduto = {...produto}
     //a const contem o produto que o usuário clicou e verifica se ele já está no carrinho;
    const contem = produtosDoCarrinho.findIndex(item=> item.name === produto.name)
    // essa condição verifica se o produto já está no carrinho de compras;
    // se estiver, ele não adiciona novamente;
    // se não estiver ele adiciona;

    if(contem >= 0){
      novoProduto = produtosDoCarrinho[contem]
      novoProduto.quantidade++
      produtosDoCarrinho[contem] = novoProduto
    }else{
      novoProduto.quantidade = 1
      produtosDoCarrinho.push(novoProduto)
    }

  
    //estou setando o estado do carrinho de compras com o novo produto adicionado;
    this.setState({ carrinho: produtosDoCarrinho })
  }

  // Remover cada item do carrinho
  removeItem = (name) => {
    const listaFiltrada = this.state.carrinho.filter((produto) => produto.name !== name);

    // localStorage.setItem("produtosAdicionados", JSON.stringify(listaFiltrada))

    this.setState({carrinho: listaFiltrada });
  };

  // Remover todos os itens do carrinho
  limparCarrinho = () =>{
    const novaListaDeprodutos = this.state.carrinho.filter((produto)=>{
      return produto === produto.id 
    })
    // localStorage.setItem("produtosAdicionados", JSON.stringify(novaListaDeprodutos))

    this.setState({carrinho: novaListaDeprodutos})
  }

  // pegarProdutosAdicionados = () =>{
  //   const produtosAdicionados = JSON.parse(localStorage.getItem("produtosAdicionados"))
  //   this.setState({carrinho: produtosAdicionados})
  // }

  upDateQuery = (event) => {
    this.setState({ query: event.target.value });
  };

  upDatePrecoMaximo = (event) => {
    this.setState({ precoMaximo: event.target.value });
  };

  upDatePrecoMinimo = (event) => {
    this.setState({ precoMinimo: event.target.value });
  };

  upDateCategoria = (event) => {
    this.setState({ classificacaoCategoria: event.target.value })
  }

  upDateOrder = (event) => {
    this.setState({ order: event.target.value })
  }

  upDateSortingParamater = (event) => {
    this.setState({ sortingParamater: event.target.value })
  }
  render() {

    const componentesProdutos = this.state.produtos
      .filter((produto) => {
        return produto.name
          .toLowerCase()
          .includes(this.state.query.toLocaleLowerCase());
      })
      .filter((produto) => {
        return this.state.precoMinimo === "" || produto.valor >= this.state.precoMinimo
      })
      .filter((produto) => {
        return this.state.precoMaximo === "" || produto.valor <= this.state.precoMaximo
      })
      .filter((produto) => {
        return this.state.classificacaoCategoria === "Todas as categorias" || produto.categoria
          .includes(this.state.classificacaoCategoria)
      })
      .sort((produtoAtual, proximoProduto) => {
        switch (this.state.sortingParamater) {
          case "name":
            return this.state.order * produtoAtual.name.localeCompare(proximoProduto.name)
          default:
            return this.state.order * produtoAtual.valor - proximoProduto.valor
        }
      })
      .map((produto) => {
        return (
         
          <CardProduto
            key={produto.id}
            imageUrl={produto.imageUrl}
            name={produto.name}
            description={produto.description}
            valor={produto.valor}
            adicionarCarrinho={this.adicionarCarrinho}
          />
        );
      });


    const componenteCarrinho = this.state.carrinho.map((produto) => {
      return (
     
        <ContainerItemCarrinho key={produto.name}>
          <ContainerImgProdCarrinho>
          <ImgProdCarrinho src={produto.imageUrl}/>
          </ContainerImgProdCarrinho>
          <ContainerDescItemCarrinho>
          
            <p>{produto.quantidade}x</p>
            <ContainerDescricaoItem>{produto.name}</ContainerDescricaoItem>          
            <ContainerPrecoItem>R$ {produto.valor.toFixed(2)}</ContainerPrecoItem>          
            <BotaoDeleteItem onClick={() => this.removeItem(produto.name)}><img src={IconeLixeira} alt={"Icone lixeira, remover item do carrinho"}/></BotaoDeleteItem>        
          </ContainerDescItemCarrinho>
        </ContainerItemCarrinho>
        
        
      )
    })
    
    // Calculo valor total dos produtos
    const valorTotal = this.state.carrinho.reduce((acumulador, item) =>acumulador + item.valor * item.quantidade, 0)

    return (
   <ThemeProvider theme={theme}>
     <Header/>
        <Container>
        
          
          <ContainerFiltros>
            <h1>Busca</h1>

            <CampoInput>
              <label>Nome do produto</label>
              <Input
                placeholder="Pesquisa"
                value={this.state.query}
                onChange={this.upDateQuery}
              />
            </CampoInput>

            <CampoInput>
              <label>Preço do produto</label>
              <Input
                placeholder="Preço max."
                value={this.state.precoMaximo}
                onChange={this.upDatePrecoMaximo}
              />

              <Input
                placeholder="Preço min."
                value={this.state.precoMinimo}
                onChange={this.upDatePrecoMinimo}
              />
            </CampoInput>

            <CampoInput>
              <label>Categoria</label>
              <select
                name="classificacaoCategoria"
                value={this.state.classificacaoCategoria}
                onChange={this.upDateCategoria}>
                <option value="Todas as categorias">Todas as categorias </option>
                <option value=" 
                "> Roupas espaciais </option>
                <option value="Camisetas com estampas divertidas do espaço">Camisetas com estampas divertidas do espaço </option>
                <option value="Brinquedos com tema espacial">Brinquedos com tema espacial</option>

              </select>
            </CampoInput>




          </ContainerFiltros>
          <ContainerHome>
            <BarraInformacoes>
              <p>Quantidade de produtos: {componentesProdutos.length}</p>

              <CampoOrdenacao>
                
                <label>Ordenar por</label>

                <select
                  name="sortingParamater"
                  value={this.state.sortingParamater}
                  onChange={this.upDateSortingParamater}>
                  <option value="name">Produto</option>
                  <option value="valor"> Preço </option>

                </select>

                <select
                  name="order"
                  value={this.state.order}
                  onChange={this.upDateOrder}>
                  <option value={1}>Crescente </option>
                  <option value={-1}> Decrescente </option>


                </select>

              </CampoOrdenacao>
            </BarraInformacoes>

            <ContainerProdutos>{componentesProdutos}</ContainerProdutos>
          </ContainerHome>

          <ContainerCarrinho>
            <ContainerHeaderCarrinho>
              <h1>Carrinho</h1>
              <img src={CarrinhoDeCompras} alt={"Icone Carrinho de compras"}/>
            </ContainerHeaderCarrinho>
            <ContainerTodosProdutos>
              {componenteCarrinho}
            </ContainerTodosProdutos>
            <div>
              <BotaoLimparCarrinho onClick={this.limparCarrinho}>Limpar carrinho</BotaoLimparCarrinho>
              <ContainerValorTotal>
                <p>Valor total:</p>
                <p>R${valorTotal.toFixed(2)}</p>
              </ContainerValorTotal>
            </div>
          </ContainerCarrinho>

        </Container>
        </ThemeProvider>
    );
  }
}

export default App;
