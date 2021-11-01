import logoImg from '../../assets/logoW.svg';
import { Container, Content } from './styles';


interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Safe Logo" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova Transação
        </button>
        
      </Content>
    </Container>
  )
}