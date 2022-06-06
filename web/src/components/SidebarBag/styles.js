import styled from 'styled-components';

export const CartBarWrapper = styled.div`
  padding: 25px 20px;
  padding-top: 60px;
`;

export const CartBarClose = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: #010103;
  width: 40px;
  height: 40px;
  transition: 0.3s;

  cursor: pointer;
`;
export const CartBar = styled.div``;

export const CartBarTitle = styled.h4`
  display: block;
  font-size: 1.5rem;
  font-family: 'Jost', sans-serif;
  color: #333;
  text-transform: uppercase;
  font-weight: 600;
  padding-bottom: 15px;
  border-bottom: 1px solid #f4f1ee;
  margin-bottom: 15px;
`;

export const CartBarList = styled.div``;

export const CartBarItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const CartBarInfo = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 4rem;
`;

export const Thumb = styled.img`
  width: 85px;
  height: 85px;
  border-radius: 50%;
  object-fit: fill;
`;
export const CartBarContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  color: #010103;
`;
export const CartBarContentTitle = styled.h4``;
export const CartBarContentPrice = styled.span``;
export const CartBarContentRemove = styled.div`
  color: red;
  cursor: pointer;

  &:hover {
    filter: brightness(0.8);
  }
`;
