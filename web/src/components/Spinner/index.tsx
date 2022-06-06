import { FC } from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  height: 100%;
  width: 100%;
  background-color: #0000006c;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
`;

export const Spinner: FC = ({ children }) => <Overlay>{children}</Overlay>;
