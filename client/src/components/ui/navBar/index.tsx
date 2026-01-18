import { LuShoppingBag } from 'react-icons/lu';
import * as S from './styled';

const NavBar = () => {
  return (
    <S.Container>
      <S.Title>capputeeno</S.Title>

      <S.Options>
        <S.SearchProductInput placeholder="Procurando pro algo em específico?" />

        <S.PurchaseCart>
          <LuShoppingBag size={24} />
        </S.PurchaseCart>
      </S.Options>
    </S.Container>
  );
};

export default NavBar;
