import axios from "axios";

export function addCart(IdItem, qtd, cart, price) {
  const itemParaSerAlterado = cart.find((item) => item.idProduct === IdItem);
  const qtdAtualizada =
    itemParaSerAlterado === undefined ? qtd : itemParaSerAlterado.qtd + qtd;
  const item_qtd_value = {
    idProduct: IdItem,
    qtd: qtdAtualizada,
    price: qtdAtualizada * price,
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
