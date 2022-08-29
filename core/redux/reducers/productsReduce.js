import { Products } from "../../Products/productsList";
const INITIAL_STATE = Products;

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "PRODUCTS_LIST":
      return {
        ...state,
        products_list: [action.payload, ...state.products_list],
      };

    default:
      return state;
  }
};
