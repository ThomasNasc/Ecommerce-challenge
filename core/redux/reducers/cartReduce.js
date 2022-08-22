const INITIAL_STATE = { cart: [] };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CARRINHO":
      return {
        ...state,
        itensNoCarrinho: action.payload.item,
        quantidade: action.payload.qtd
      };

    default:
      return state;
  }
};
