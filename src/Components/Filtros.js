// import CardProduto from "./CardProduto"

// export default function Filtros(props) {

//   return (

//     props.produtos
//       .filter((produto) => {
//         return produto.name
//           .toLowerCase()
//           .includes(props.query.toLocaleLowerCase());
//       })
//       .filter((produto) => {
//         return props.precoMinimo === "" || produto.valor >= props.precoMinimo
//       })
//       .filter((produto) => {
//         return props.precoMaximo === "" || produto.valor <= props.precoMaximo
//       })
//       .filter((produto) => {
//         return props.classificacaoCategoria === "Todas as categorias" || produto.categoria
//           .includes(props.classificacaoCategoria)
//       })
//       .sort((produtoAtual, proximoProduto) => {
//         switch (props.sortingParamater) {
//           case "name":
//             return props.order * produtoAtual.name.localeCompare(proximoProduto.name)
//           default:
//             return props.order * produtoAtual.valor - proximoProduto.valor
//         }
//       })
//       .map((produto) => {
//         return (
//           <CardProduto
//             key={produto.id}
//             imageUrl={produto.imageUrl}
//             name={produto.name}
//             valor={produto.valor}
//             adicionarCarrinho={this.adicionarCarrinho}
//           />
//         );
//       })
   
//   )

// }