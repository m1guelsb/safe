import logoImg from '../../assets/logoW.svg';
import { Container, Content } from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Safe Logo" />
        <button type="button">
          Nova Transação
        </button>
      </Content>
    </Container>
  )
}