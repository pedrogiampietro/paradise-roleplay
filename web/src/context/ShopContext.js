import { createContext } from 'react';

export default createContext({
  products: [
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
  ],
  cart: [],
  addProductToCart: product => {},
  removeProductFromCart: productId => {},
});
