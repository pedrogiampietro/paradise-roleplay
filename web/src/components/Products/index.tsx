import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineEye,
} from 'react-icons/ai';

import * as S from './styles';

export function Product() {
  return (
    <S.ProductWrapper>
      <h2>Produtos Populares!</h2>

      <S.ProductButton>Ver todos produtos</S.ProductButton>
      <S.ProductList>
        {[1, 2, 3, 4].map(index => {
          return (
            <S.ProductItem key={index}>
              <S.ProductInfo>
                <S.ProductAction>
                  <span>
                    <AiOutlineShoppingCart size={30} />
                  </span>
                  <span>
                    <AiOutlineHeart size={30} />
                  </span>
                  <span>
                    <AiOutlineEye size={30} />
                  </span>
                </S.ProductAction>
                <S.ProductItemImage src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
                <S.ProductCategory>Carro</S.ProductCategory>
                <S.ProductTitle>Fusca</S.ProductTitle>
                <S.ProductPrice>
                  <h6>R$ 605.00</h6>
                  <span>por R$348</span>
                </S.ProductPrice>
              </S.ProductInfo>
            </S.ProductItem>
          );
        })}
      </S.ProductList>
    </S.ProductWrapper>
  );
}
