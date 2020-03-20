// SORT
const { shopCart, passengers } = require("../data")
// 1. Organize o carrinho do maior número de produtos para o menor.
const orderByTotalProducts = shopCart.sort((a, b) => b.quantity - a.quantity );
// console.table(orderByTotalProducts);


// 2. Organize os passageiros por nome.
const orderByPassengersName = passengers.sort((pa, pb)=> {
  if (pa.name.toLocaleLowerCase() > pb.name.toLocaleLowerCase()) return -1;
  if (pa.name.toLocaleLowerCase() < pb.name.toLocaleLowerCase()) return 1;
  return 0;
})

console.table(orderByPassengersName);
