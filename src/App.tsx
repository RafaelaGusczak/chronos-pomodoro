import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';

import './styles/theme.css';
import './styles/global.css';
import { CountDown } from './components/CountDown';

export function App() {
  console.log('oi');

  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      
      <Container>
        <CountDown />
      </Container>
    </>
  );
}
