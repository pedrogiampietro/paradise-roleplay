import { useState, useContext } from 'react';

import ShopContext from '../../context/ShopContext';
import { ProductModal } from '../ProductModal';

import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineEye,
} from 'react-icons/ai';

import * as S from './styles';

export function Product() {
  const context = useContext(ShopContext);
  const [showProductModal, setShowProductModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});

  const openDrawer = () => {
    const event = new CustomEvent('openCart');
    window.dispatchEvent(event);
  };

  const handleOpenProductModal = (product: Object) => {
    setSelectedProduct(product);
    setShowProductModal(true);
  };

  return (
    <>
      <S.ProductWrapper>
        <h2>Produtos Populares!</h2>

        <S.ProductButton>Ver todos produtos</S.ProductButton>
        <S.ProductList>
          {context.products.map(product => (
            <S.ProductItem>
              <S.ProductInfo>
                <S.ProductAction>
                  <span>
                    <AiOutlineShoppingCart
                      size={30}
                      onClick={() => {
                        context.addProductToCart(product);
                        openDrawer();
                      }}
                    />
                  </span>
                  <span>
                    <AiOutlineHeart size={30} />
                  </span>

                  <span>
                    <AiOutlineEye
                      size={30}
                      onClick={() => handleOpenProductModal(product)}
                    />
                  </span>
                </S.ProductAction>
                <S.ProductItemImage src={product.image} />
                <S.ProductCategory>{product.category}</S.ProductCategory>
                <S.ProductTitle>{product.title}</S.ProductTitle>
                <S.ProductPrice>
                  <h6>R$ {product.price}</h6>
                  <span>por R$ {product.old_price}</span>
                </S.ProductPrice>
              </S.ProductInfo>
            </S.ProductItem>
          ))}
        </S.ProductList>
      </S.ProductWrapper>
      {showProductModal && (
        <ProductModal
          onClose={() => setShowProductModal(false)}
          selectedProduct={selectedProduct}
        />
      )}
    </>
  );
}
