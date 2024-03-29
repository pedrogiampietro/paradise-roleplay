import styled from 'styled-components';

export const ModalWrapper = styled.div`
  background: rgba(242, 243, 245, 0.8);

  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 698px) {
    display: block;
    width: calc(100% - 3.125rem);
    overflow-y: auto;
    overflow-x: hidden;
    left: 3.125rem;
    overscroll-behavior: contain;
  }
`;

export const ModalContainer = styled.div`
  background: #fff;
  width: 100%;
  max-width: 752px;
  height: 100%;
  max-height: 345px;
  padding: 2rem 3rem;
  border-radius: 5px;
  box-shadow: 0 0 60pxrgba (0, 0, 0, 0.05);
  position: fixed;
  font-family: Arial, Helvetica, sans-serif;
  transition: opacity 400ms ease-in;
  z-index: 99999;

  @media screen and (max-width: 968px) {
    width: 70%;
  }

  @media screen and (max-width: 698px) {
    width: 100%;
  }
`;

export const ModalHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 100%;

  font-size: 1rem;
  font-weight: 600;
  color: #333;

  @media screen and (max-width: 698px) {
    font-size: 0.9rem;
  }
`;

export const ModalBody = styled.div`
  display: flex;
  font-family: Poppins, sans-serif;
  font-weight: normal;
  font-size: 1rem;
  color: #333;
`;

export const InputBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.2rem;

  & label {
    text-align: left;
    margin-bottom: 0.3rem;
    font-size: 0.85rem;
    font-weight: 500;
    color: #6c647b;
    white-space: nowrap;
  }

  & input,
  select {
    width: 15%;
    outline: none;
    border: 1px solid #e7e7e7;
    color: #001334;
    font-weight: bold;
    padding: 0.8rem 0.7rem;
    font-family: Poppins;
    border-radius: 8px;
  }

  & small {
    text-align: left;
    font-size: 0.9rem;
    font-weight: 700;
    color: #6c647b;
  }

  .error-message {
    color: #f95656;

    font-size: 12px;
    white-space: nowrap;
    margin-top: 0.4rem;
  }

  .css-b62m3t-container {
    width: 100%;
  }
`;

export const AddOnCart = styled.button`
  width: 100%;
  max-width: 240px;
  height: 50px;

  background: #010103;
  color: #c7a17a;

  white-space: nowrap;

  border-radius: 8px;
  outline: none;
  border: 0px;
  font-family: Poppins;
  font-weight: bold;
  font-size: 1.1rem;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
    transition: 0.4s ease;
  }

  @media screen and (max-width: 698px) {
    max-width: 100%;
  }
`;

export const CloseButtonModal = styled.button`
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  background: transparent;
  border: 0;
  font-size: 0;

  cursor: pointer;

  & svg {
    &:hover {
      color: var(--primary-color);
    }
  }
`;

/* modal body container */

export const LeftContainer = styled.div`
  margin-right: 0.9rem;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const RightContainer = styled.div``;
export const Price = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  color: #c7a17a;
`;
export const Inventory = styled.h4`
  font-size: 1rem;
  font-weight: bold;
  color: #6c647b;
`;
export const Description = styled.p``;
export const BuyInfoCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
