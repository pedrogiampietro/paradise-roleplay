import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  border-bottom: 1px solid #32323d;
  padding: 28px 0px;

  @media screen and (max-width: 1500px) {
    flex-wrap: wrap;
    justify-content: end;
    padding: 0px;
  }
`;

export const SpaceDiv = styled.div`
  flex: 0 0 auto;
  width: 41.66666667%;
`;

export const HeaderLogoWrapper = styled.div`
  flex: 0 0 auto;
  width: 16.66666667%;
`;

export const HeaderLogo = styled.img`
  max-width: 95px;
  height: auto;
  transition: all 0.3s ease-out 0s;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  align-self: center;

  justify-content: flex-end;
`;

export const MenuList = styled.ul`
  display: flex;
  gap: 4rem;
  list-style: none;
`;

export const MenuItem = styled.li`
  display: block;
  text-decoration: none;
  font-size: 15px;
  color: #ffffff;
  padding: 35px 19px;
  position: relative;
  text-transform: uppercase;
  line-height: 22px;
  font-weight: 500;
  cursor: pointer;

  & a {
    font-size: 14px;
    text-align: center;
    font-family: Cinzel decorative, serif;
    font-weight: 700;
    white-space: nowrap;
    text-decoration: none;
    color: #fff;

    &:hover {
      color: #c7a17a;
      &:after {
        opacity: 1;
        visibility: visible;
        left: 0;
      }
    }

    &:after {
      content: '';
      position: absolute;
      left: 10px;
      top: 50%;
      width: 11px;
      height: 11px;
      background: #c7a17a;
      border-radius: 50%;
      transform: translateY(-50%);
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s cubic-bezier(0.42, 0, 0.58, 1);
    }
  }
`;

export const HeaderOptions = styled.div`
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding-left: 50px;
  transition: filter 0.3s ease-in-out;
  cursor: pointer;

  & span {
    &:hover {
      color: #c7a17a;
    }
  }
`;
