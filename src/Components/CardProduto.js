import React from "react"
import styled from "styled-components"
import Button from '@material-ui/core/Button';
import  {theme} from '../assets/theme';
import { ThemeProvider }  from '@material-ui/styles'
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
border: none;
border-radius: 5px;
-webkit-box-shadow: 3px 3px 0px 0px rgba(50, 50, 50, 0.75);
-moz-box-shadow:    3px 3px 0px 0px rgba(50, 50, 50, 0.75);
box-shadow:         3px 3px 0px 0px rgba(50, 50, 50, 0.75);
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



export default function CardProduto(props) {
  return (
    <ThemeProvider theme={theme}> 
    <CardDoProduto>
     
            <ImagemCard src={props.imageUrl}/>
            <TextoProduto>{props.name}</TextoProduto>
            <TextoProduto>{props.description}</TextoProduto>
            <TextoProduto>R$ {props.valor}</TextoProduto>          
            <Button variant="contained" color="primary" onClick={() => props.adicionarCarrinho(props)}>Adicionar ao carrinho</Button>
    </CardDoProduto>
   </ThemeProvider>

  )
}