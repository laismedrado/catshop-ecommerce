import React from "react"
import styled from "styled-components"
import { listaLimpeza } from "./ListaLimpeza"
// Styled Components dos cards de produtos da página inicial do site da loja virtual;
const ImagemCard = styled.img` 
width: 100%;
height: 100%;
margin-top: 1px ;
`
//
const CardDoProduto = styled.div ` 
display: flex;
flex-direction: column;
justify-content: center;
background-color: #D0D3D9;
text-align: center;
border: 1px solid gray;
border-radius: 5px;
`

const BotaoAdicionar = styled.button ` 
margin: 10px;
cursor: pointer;
`

const TextoProduto = styled.p ` 
margin: 5px;

`
const SubTituloProduto = styled.p ` 
margin: 5px;

`

//a funçãoo  CardProduto recebe um produto como parâmetro através da propriedade props;
// props.imageUrl é a url da imagem do produto;
// props.name é o nome do produto;
// props.valor é o valor do produto;
// props.adicionarCarrinho é uma função que adiciona o produto ao carrinho de compras;



export default function CardProduto(props) {
  return (
    <CardDoProduto>
            <ImagemCard src={props.imageUrl}/>
            <TextoProduto>{props.name}</TextoProduto>
            <TextoProduto>{props.description}</TextoProduto>
            <TextoProduto>R$ {props.valor}</TextoProduto>          
            <BotaoAdicionar onClick={() => props.adicionarCarrinho(props)}>Adicionar ao carrinho</BotaoAdicionar>
    </CardDoProduto>

  )
}