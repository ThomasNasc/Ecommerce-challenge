const INITIAL_STATE = { cart: [] };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CARRINHO":
      return {
        ...state,
        cart: action.payload,
      };

    default:
      return state;
  }
};
