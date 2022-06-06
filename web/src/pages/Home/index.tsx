import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { PopularMenu } from '../../components/PopularMenu';
import { Product } from '../../components/Products';

import * as S from './styles';

export const Home = () => {
  return (
    <>
      <Header />
      <S.HomePageStyle>
        <PopularMenu />
        <Product />
      </S.HomePageStyle>
      {/* <Footer /> */}
    </>
  );
};
