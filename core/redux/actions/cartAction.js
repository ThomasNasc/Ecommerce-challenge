export function addCart(IdItem, qtd, cart, value) {
  const itemParaSerAlterado = cart.find((item) => item.idProduct === IdItem);
  const qtdAtualizada =
    itemParaSerAlterado === undefined ? qtd : itemParaSerAlterado.qtd + qtd;
  const item_qtd_value = {
    idProduct: IdItem,
    qtd: qtdAtualizada,
    value: qtdAtualizada * value,
  };

  if (itemParaSerAlterado === undefined) {
    return {
      type: "ADICIONAR_AO_CARRINHO",
      payload: item_qtd_value,
    };
  } else {
    return {
      type: "AUMENTAR_QUANTIDADE",
      payload: {
        id: itemParaSerAlterado.idProduct,
        quantidadeAtualizada: item_qtd_value,
      },
    };
  }
}
