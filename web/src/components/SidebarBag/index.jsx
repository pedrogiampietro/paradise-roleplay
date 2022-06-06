import { useState, useEffect } from 'react';
import { AiOutlineDelete, AiOutlineClose } from 'react-icons/ai';
import { Dock } from 'react-dock';

import * as S from './styles';

export function SidebarBag() {
  const [opened, setOpened] = useState(false);

  if (opened) {
    document.getElementsByTagName('body')[0].style = 'overflow-y: hidden';
  } else {
    document.getElementsByTagName('body')[0].style = 'overflow-y: auto';
  }

  useEffect(() => {
    window.addEventListener('openCart', () => {
      setOpened(true);
    });
  }, []);

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
            <S.CartBarTitle>Cart Items</S.CartBarTitle>
            <S.CartBarList>
              {[1, 2, 3, 4, 5, 6].map(index => {
                return (
                  <S.CartBarItem key={index}>
                    <S.CartBarInfo>
                      <S.Thumb src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />

                      <S.CartBarContent>
                        <S.CartBarContentTitle>PEDRIM</S.CartBarContentTitle>
                        <S.CartBarContentPrice>9 reais</S.CartBarContentPrice>
                        <S.CartBarContentRemove>
                          <AiOutlineDelete size={30} />
                        </S.CartBarContentRemove>
                      </S.CartBarContent>
                    </S.CartBarInfo>
                  </S.CartBarItem>
                );
              })}
            </S.CartBarList>
          </S.CartBar>
        </S.CartBarWrapper>

        {/* {isShoppingModalOpen && <BuyShoppingModal totalCart={totalCart} />} */}
      </Dock>
    </>
  );
}
