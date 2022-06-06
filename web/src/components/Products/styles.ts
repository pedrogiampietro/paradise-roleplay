import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    transform: scale(.25);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`;

export const ProductWrapper = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & h2 {
    color: #ffffff;
    font-size: 3.563rem;
    line-height: 57px;
    text-transform: uppercase;
  }
`;

export const ProductList = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const ProductItem = styled.div`
  display: flex;
  width: 25%;
  height: 40%;

  border: 1px solid #32323d;
  padding: 36px 30px 36px 80px;
  margin: 25px 90px;
`;

export const ProductInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ProductAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 2rem;

  & span {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 48px;
    width: 48px;
    border: 1px solid #a7a7a7;
    border-radius: 5px;
    color: #a7a7a7;

    cursor: pointer;
    transition: 0.3s;

    &:hover {
      filter: sepia(1);
      transition: 0.3s;
    }
  }
`;

export const ProductItemImage = styled.img`
  max-width: 100%;
  height: auto;
  margin: 4rem 0;
  transition: all 0.3s ease-out 0s;
`;

export const ProductCategory = styled.span`
  color: #a7a7a7;
  font-size: 0.875rem;
  text-transform: uppercase;
`;

export const ProductTitle = styled.h2`
  font-size: 2.125rem;
  text-transform: uppercase;
  color: #ffffff;
  font-family: 'Jost', sans-serif;
  font-weight: 500;
`;

export const ProductPrice = styled.div`
  color: #ffffff;
  font-size: 2rem;
  font-family: 'Jost', sans-serif;
  text-transform: uppercase;
  align-items: center;
  display: flex;

  & h6 {
    text-decoration: line-through;
  }

  & span {
    color: #c7a17a;
    margin-left: 1rem;
  }
`;

export const ProductButton = styled.button`
  font-size: 12px;
  text-transform: uppercase;
  color: #ffffff;
  letter-spacing: 2px;
  background: #c7a17a;
  padding: 9.5px 34px;
  text-decoration: none;
  border-radius: 5px;
  position: relative;
  z-index: 1;
  display: inline-block;
  border: 1px solid #c7a17a;
  font-weight: 500;

  transition: all 1s ease-out 0s;
  cursor: pointer;

  &:hover {
    filter: grayscale(1);
  }
`;
