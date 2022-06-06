import * as S from './styles';

export function PopularMenu() {
  return (
    <S.PopularMenu>
      <h2>Mais vendidos!</h2>
      <S.PopularMenuList>
        {[1, 2, 3, 4].map(index => {
          return (
            <S.PopularMenuItem key={index}>
              <S.PopularMenuItemImage src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
              <S.PopularMenuItemInfo>
                <h3>Pedro Item</h3>
                <span>R$ 12,00</span>
              </S.PopularMenuItemInfo>
            </S.PopularMenuItem>
          );
        })}
      </S.PopularMenuList>
    </S.PopularMenu>
  );
}
