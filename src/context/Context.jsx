import { createContext, useReducer } from "react";
import { faker } from "@faker-js/faker";
import { cartReducer, productReducer } from "./Reducers";
import { useContext } from "react";
import PropTypes from "prop-types"; // Import PropTypes

const Cart = createContext();
faker.seed(99);

const Context = ({ children }) => {
  const products = [...Array(60)].map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.url(),
    inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });

  return (
    <>
      <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
        {children}
      </Cart.Provider>
    </>
  );
};

// Add PropTypes validation for 'children'
Context.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
