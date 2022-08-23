const INITIAL_STATE = { cart: [] };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CARRINHO":
      return {
        ...state,
        cart: [...state.cart, action.cart]
    
      };

    default:
      return state;
  }
};
