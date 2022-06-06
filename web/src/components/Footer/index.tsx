import * as S from './styles';

export function Footer() {
  return (
    <S.Footer>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <span>Privacy Policy</span>
        <span>Terms of Service</span>
        <span>Contact Us</span>
      </div>
    </S.Footer>
  );
}
