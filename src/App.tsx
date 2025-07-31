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

      <Container>
        <form className='form' action=''>
          <div className='formRow'>
            <label htmlFor='input'>task:</label>
            <input id='input' type='text' />
          </div>

          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='formRow'>
            <p>Ciclos:</p>
            <p>0 0 0 0 0 0 0</p>
          </div>
          
          <div className='formRow'>
            <button>Enviar</button>
          </div>
        </form>
      </Container>
    </>
  );
}
