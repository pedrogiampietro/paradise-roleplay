import { AiOutlineClose } from 'react-icons/ai';

import * as S from './styles';

interface ProductsProps {
  onClose: () => void;
  selectedProduct: selectedProductProps;
}

interface selectedProductProps {
  id?: string;
  category?: string;
  image?: string;
  old_price?: number;
  price?: number;
  title?: string;
}

export function ProductModal({ onClose, selectedProduct }: ProductsProps) {
  console.log('selectedProduct', selectedProduct);

  return (
    <S.ModalContainer>
      <S.ModalHeader>
        <h1>{selectedProduct.title}</h1>
      </S.ModalHeader>

      <S.ModalBody>
        <S.LeftContainer>
          <img src={selectedProduct.image} alt="banner do carro" />
        </S.LeftContainer>

        <S.RightContainer>
          <S.Price>$99.00</S.Price>
          <S.Inventory>Disponivel em estoque (4)</S.Inventory>
          <S.Description>
            Primeiro superesportivo da BMW desde o antigo Série 8, o i8 nasceu
            de um conceito que parecia futurista demais, como tantos outros,
            porém, virou ...
          </S.Description>
          <S.BuyInfoCart>
            <S.InputBox>
              <h3>Quantidade</h3>
              <input type="number" placeholder="1" />
              <S.AddOnCart>Adicionar no Carrinho</S.AddOnCart>
            </S.InputBox>
          </S.BuyInfoCart>
        </S.RightContainer>
      </S.ModalBody>
      <S.CloseButtonModal type="button" onClick={onClose}>
        <AiOutlineClose size="22" />
      </S.CloseButtonModal>
    </S.ModalContainer>
  );
}
