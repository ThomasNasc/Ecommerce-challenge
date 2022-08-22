export function addCart(item, quantidade) {
    
  return {
    type: "CARRINHO",
    payload: {
      item: item,
      qtd: quantidade,
    },
  };
}
