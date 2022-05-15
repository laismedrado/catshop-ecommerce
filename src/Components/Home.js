// import React from "react";
// import styled from "styled-components";
// import Filtros from "./Filtros";
// import CardProduto from "./CardProduto";
// import barbieAstronauta from "../barbie-astronauta.jpg"
// import estacaoEspacial from "../estacao-espacial.jpeg"
// import onibusEspacial from "../onibus-espacial.jpg"
// import ursinhoAstronauta from "../ursinho-astronauta.jpg"
// import camiseta1 from "../camiseta1.jpg"
// import camiseta3 from "../camiseta3.jpg"
// import camiseta4 from "../camiseta4.jpg"
// import macacaoAstronauta from "../macacao-astronauta.jpeg"
// import capaceteAstronauta from "../capacete-astronauta.jpg"
// import kitAstronauta from "../kit-astronauta.jpg"

// const listaDeProdutos = [
//   //brinquedos
//   {
//     id: 1,
//     name: "Barbie Astronauta",
//     value: 99.99,
//     imageUrl: barbieAstronauta,
//     categoria: "Brinquedos com tema espacial"
//   },

//   {
//     id: 2,
//     name: "Estação Espacial",
//     value: 200.10,
//     imageUrl: estacaoEspacial,
//     categoria: "Brinquedos com tema espacial"
//   },
//   {
//     id: 3,
//     name: "Ônibus Espacial",
//     value: 2000.10,
//     imageUrl: onibusEspacial,
//     categoria: "Brinquedos com tema espacial"
//   },
//   {
//     id: 4,
//     name: "Ursinho Astronauta",
//     value: 20000.0,
//     imageUrl: ursinhoAstronauta,
//     categoria: "Brinquedos com tema espacial"
//   },
//   //camisetas com estampa
//   {
//     id: 5,
//     name: "Camiseta estampa astronauta",
//     value: 300.50,
//     imageUrl: camiseta1,
//     categoria: "Camisetas com estampas divertidas do espaço"
//   },
//   {
//     id: 6,
//     name: "Camiseta estampa nasa",
//     value: 90.50,
//     imageUrl: camiseta3,
//     categoria: "Camisetas com estampas divertidas do espaço"
//   },
//   {
//     id: 7,
//     name: "Camiseta estampa balões planetas",
//     value: 100.50,
//     imageUrl: camiseta4,
//     categoria: "Camisetas com estampas divertidas do espaço"
//   },

//   //roupas espaciais
//   {
//     id: 8,
//     name: "Macacão astronauta",
//     value: 100.50,
//     imageUrl: macacaoAstronauta,
//     categoria: "Roupas espaciais"
//   },

//   {
//     id: 9,
//     name: "Capacete de astronauta",
//     value: 100.50,
//     imageUrl: capaceteAstronauta,
//     categoria: "Roupas espaciais"
//   },

//   {
//     id: 10,
//     name: "Kit de Astronauta",
//     value: 230.50,
//     imageUrl: kitAstronauta,
//     categoria: "Roupas espaciais"
//   },


// ]


// const BarraInformacoes = styled.div` 
// display: flex;
// justify-content: space-around;
// `
// const ContainerHome = styled.div` 
// /* height:100vh; */
// width: 60%;
// margin: auto;
// `

// const ContainerProdutos = styled.div` 
// flex-grow: 1;
// display: grid;
// grid-template-columns: repeat(4, 1fr);
// grid-template-rows: repeat(4, 1fr);
// row-gap: 10px;
// column-gap: 10px;
// margin: 10px;
// `



// class Home extends React.Component {

//   state = {
//     produtos: listaDeProdutos,
//     ordem: 1
//   }


//   upDateOrdem = (event) => {
//     this.setState({ ordem: event.target.value })
//   }

//   render() {
//     const componentesProdutos = this.state.produtos.map((produto) => {
//       return (
//         <CardProduto
//           imageUrl={produto.imageUrl}
//           descricaoProduto={produto.name}
//           valorProduto={produto.value}
//         />
//       )
//     })
//     return (

//       <ContainerHome>
//         <BarraInformacoes>
//           <p>Quantidade de produtos: {listaDeProdutos.length}</p>
//           <Filtros
//             descricao={"Ordenação"}
//           />
//         </BarraInformacoes>

//         <ContainerProdutos>

//           {componentesProdutos}


//         </ContainerProdutos>

//       </ContainerHome>
//     )
//   }
// }

// export default Home