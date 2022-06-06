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

export const PopularMenu = styled.div`
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

export const PopularMenuList = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const PopularMenuItem = styled.div`
  display: flex;
  width: 25%;

  border: 1px solid #32323d;
  position: relative;
  padding: 36px 30px 36px 80px;
  margin: 25px 90px;
  transition: 0.3s;

  &:hover {
    width: 25%;
    left: 0;
    right: auto;

    &::after {
      position: absolute;
      left: 0;
      content: '';
      top: 0;
      width: 100%;
      height: 100%;
      background: #13131a;
      right: 100%;
      width: 100%;
      animation: ${fadeIn} 1s cubic-bezier(0.42, 0, 0.58, 1) 0s forwards;
    }
  }
`;

export const PopularMenuItemImage = styled.img`
  width: 85px;
  height: 85px;

  position: absolute;
  top: 50%;

  transform: translateY(-50%);
  left: -40px;
  z-index: 2;
  border-radius: 50%;
`;

export const PopularMenuItemInfo = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  position: relative;
  z-index: 2;

  & h3 {
    color: #ffffff;
    font-size: 25px;

    text-transform: uppercase;
    transition: 300ms;
    border-bottom: 4px solid transparent;

    &:hover {
      border-color: #fff;
    }
  }

  & span {
    color: #c7a17a;
    font-size: 25px;
    font-family: 'Bebas Neue', cursive;
  }
`;
