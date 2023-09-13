import { createContext, useEffect, useReducer, useState } from "react";
export const AppContext = createContext();
const initialState = {
  pizzaIds: JSON.parse(localStorage.getItem("cart")) || [],
  items: {},
  sizes: {},
};
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        pizzaIds: [...state.pizzaIds, action.payload],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        pizzaIds: [
          ...state.pizzaIds.filter((pizza) => pizza !== action.payload),
        ],
      };
    case "UPDATE_CART_ITEM":
      const { id, quantity } = action.payload;
      return {
        ...state,
        items: {
          ...state.items,
          [id]: quantity,
        },
      };
    case "UPDATE_CART_SIZE":
      return {
        ...state,
        sizes: {
          ...state.sizes,
          [action.payload.id]: action.payload.size,
        },
      };
    case "SET_CART":
      return {
        ...state,
        pizzaIds: action.payload,
      };

    default: {
      return state;
    }
  }
};
const PizzaProvider = ({ children }) => {
  const [totalAmount,setTotalAmount] = useState(0);
  const [state, dispatch] = useReducer(cartReducer, initialState);
  useEffect(() => {
    const storedIds = JSON.parse(localStorage.getItem("cart"));
    if (storedIds) {
      dispatch({ type: "SET_CART", payload: storedIds });
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.pizzaIds));
  }, [state.pizzaIds]);
  return (
    <AppContext.Provider value={{ cart: state, dispatch, totalAmount,setTotalAmount }}>
      {children}
    </AppContext.Provider>
  );
};

export default PizzaProvider;
