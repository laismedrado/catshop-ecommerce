import React from "react";
import styled from "styled-components";
import Button from '@material-ui/core/Button';


export const BarraInformacoes = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;  
  font-size: 1.25em;
`;
export const ContainerHome = styled.div`
  /* height:100vh; */
  width: 80%;
  margin: center;
  align-items: center;
`;
export const ContainerProdutos = styled.div`
  flex-grow: 1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  row-gap: 10px;
  column-gap: 10px;
  margin: 10px;
`;
export const ContainerFiltros = styled.div` 
display: flex;
flex-direction: column;
padding: 1rem;
width: 250px;
`
export const Container = styled.div` 
width: 100%;
display: grid;
grid-template-columns: 1fr 10fr 1fr;

`
export const CampoOrdenacao = styled.div` 
display: flex;
justify-content: space-between;
width: 40%;
`
export const CampoInput = styled.div` 
display: flex;
flex-direction: column;
height: 90px;
justify-content: space-around;
margin: 30px;
font-size: 1.25em;

`
export const Input = styled.input` 
padding: 10px;
border-radius: 5px;
border: red;
margin-top: 10px;
background-color: #D0D3D9;
color: black;
`
export const ContainerCarrinho = styled.div` 
display: flex;
justify-self: flex-end;
flex-direction: column;
width: 250px;
height: 100vh;
box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
position:fixed;
`
export const ContainerItemCarrinho = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  height: 80px;
`
//_______________________________

export const ContainerTodosProdutos = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  /* align-items: center; */
  overflow-y: auto;
`
//__________________________________________________
export const ContainerValorTotal = styled.div`
  display: flex;
  justify-content: space-between;
  border: none;
  background-color: #2cbc63;
  padding: 0 1rem;
  font-weight: bold;
`
export const ContainerHeaderCarrinho = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  border: none;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`
export const ContainerPrecoItem = styled.p`
  font-weight: bold;
  text-align: justify;
  padding-right: 0.5rem;
  width:30%;
`
export const ContainerDescricaoItem = styled.p`
  display:flex;
  width: 55%;
  text-align: left;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`
export const ContainerImgProdCarrinho = styled.div`
  width:15%;
`
export const ImgProdCarrinho = styled.img`
  height: 40px;
`
export const ContainerDescItemCarrinho = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
`
export const BotaoLimparCarrinho = styled.button`
  background-color: white;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  height: 50px;
  width: 100%;
  font-weight: bold;
  cursor: pointer;
  font-size: 16px;
`
export const BotaoDeleteItem = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`
export const design = ( BarraInformacoes, ContainerHome, ContainerProdutos, ContainerFiltros, Container, CampoOrdenacao, CampoInput, Input, ContainerCarrinho, ContainerItemCarrinho, ContainerPrecoItem, ContainerDescricaoItem, ContainerImgProdCarrinho, ImgProdCarrinho, ContainerDescItemCarrinho, BotaoLimparCarrinho, BotaoDeleteItem, ContainerTodosProdutos, ContainerValorTotal, ContainerHeaderCarrinho, ContainerPrecoItem, ContainerDescricaoItem, ContainerImgProdCarrinho, ImgProdCarrinho, ContainerDescItemCarrinho, 
    BotaoLimparCarrinho, BotaoDeleteItem) 
