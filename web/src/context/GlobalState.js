import { useReducer } from 'react';

import ShopContext from './ShopContext';
import { shopReducer, ADD_PRODUCT, REMOVE_PRODUCT } from './Reducers';

const GlobalState = props => {
  const products = [
    {
      id: '1',
      title: 'Gaming Mouse',
      price: 29.99,
      old_price: 49.99,
      category: 'cars',
      image:
        'https://conteudo.imguol.com.br/c/entretenimento/7e/2020/03/02/gta-v-1583156475687_v2_615x300.jpg',
    },
    {
      id: '2',
      title: 'Harry Potter 3',
      price: 9.99,
      old_price: 49.99,
      category: 'cars',
      image:
        'https://conteudo.imguol.com.br/c/entretenimento/7e/2020/03/02/gta-v-1583156475687_v2_615x300.jpg',
    },
    {
      id: '3',
      title: 'Used plastic bottle',
      price: 0.99,
      old_price: 49.99,
      category: 'cars',
      image:
        'https://conteudo.imguol.com.br/c/entretenimento/7e/2020/03/02/gta-v-1583156475687_v2_615x300.jpg',
    },
    {
      id: '4',
      title: 'Half-dried plant',
      price: 2.99,
      old_price: 49.99,
      category: 'cars',
      image:
        'https://conteudo.imguol.com.br/c/entretenimento/7e/2020/03/02/gta-v-1583156475687_v2_615x300.jpg',
    },
  ];
  // const [cart, setCart] = useState([]);
  const [cartState, dispatch] = useReducer(shopReducer, { cart: [] });

  const addProductToCart = product => {
    setTimeout(() => {
      // setCart(updatedCart);
      dispatch({ type: ADD_PRODUCT, product: product });
    }, 700);
  };

  const removeProductFromCart = productId => {
    setTimeout(() => {
      // setCart(updatedCart);
      dispatch({ type: REMOVE_PRODUCT, productId: productId });
    }, 700);
  };

  return (
    <ShopContext.Provider
      value={{
        products: products,
        cart: cartState.cart,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export default GlobalState;
