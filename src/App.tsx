import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';

import './styles/theme.css';
import './styles/global.css';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';
import { Cycles } from './components/Cycles';

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
            <DefaultInput
              labelText='task:'
              id='meuInput'
              type='text'
              placeholder='Digite algo'
            />
          </div>

          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='formRow'>
            <Cycles />
          </div>

          <div className='formRow'>
            <button>Enviar</button>
          </div>
        </form>
      </Container>
    </>
  );
}
