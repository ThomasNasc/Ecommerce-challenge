const INITIAL_STATE = { cart: [] };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADICIONAR_AO_CARRINHO":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "AUMENTAR_QUANTIDADE":
      const actState = [...state.cart];
      actState[action.payload.id] = action.payload.quantidadeAtualizada;
      return {
        ...state,
        cart: actState,
      };
    default:
      return state;
  }
};
