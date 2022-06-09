import { useContext, useState, useEffect } from 'react';
import ShopContext from '../../context/ShopContext';

import { AiOutlineDelete, AiOutlineClose } from 'react-icons/ai';
import { Dock } from 'react-dock';

import * as S from './styles';

export function SidebarBag() {
  const context = useContext(ShopContext);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    window.addEventListener('openCart', () => {
      setOpened(true);
    });
  }, []);

  if (opened) {
    document.getElementsByTagName('body')[0].style = 'overflow-y: hidden';
  } else {
    document.getElementsByTagName('body')[0].style = 'overflow-y: auto';
  }

  console.log(context);

  return (
    <>
      <Dock
        isVisible={opened}
        onVisibleChange={visible => {
          setOpened(visible);
        }}
        position="right"
        size={0.25}
      >
        <S.CartBarWrapper>
          <S.CartBarClose>
            <AiOutlineClose size={30} onClick={() => setOpened(false)} />
          </S.CartBarClose>
          <S.CartBar>
            <S.CartBarTitle>
              Cart Items (
              {context.cart.reduce((count, curItem) => {
                return count + curItem.quantity;
              }, 0)}
              )
            </S.CartBarTitle>

            <S.CartBarList>
              {context.cart.length <= 0 && (
                <S.EmptyCart>No Item in the Cart!</S.EmptyCart>
              )}
              {context.cart.map(cartItem => {
                return (
                  <S.CartBarItem key={cartItem.id}>
                    <S.CartBarInfo>
                      <S.Thumb src={cartItem.image} />
                      <span>({cartItem.quantity})</span>

                      <S.CartBarContent>
                        <S.CartBarContentTitle>
                          {cartItem.title}
                        </S.CartBarContentTitle>
                        <S.CartBarContentPrice>
                          {cartItem.price}
                        </S.CartBarContentPrice>
                        <S.CartBarContentRemove>
                          <AiOutlineDelete
                            size={24}
                            onClick={() =>
                              context.removeProductFromCart(cartItem.id)
                            }
                          />
                        </S.CartBarContentRemove>
                      </S.CartBarContent>
                    </S.CartBarInfo>
                  </S.CartBarItem>
                );
              })}
            </S.CartBarList>
            <S.CartBarTotal>
              <h4>Total:</h4>
              <span>R$ 3900,9</span>
            </S.CartBarTotal>
          </S.CartBar>
        </S.CartBarWrapper>

        {/* {isShoppingModalOpen && <BuyShoppingModal totalCart={totalCart} />} */}
      </Dock>
    </>
  );
}
