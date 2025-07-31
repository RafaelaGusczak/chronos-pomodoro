import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';
import { TimerIcon } from 'lucide-react';

export function App() {
  console.log('oi');

  return (
    <>
      <Heading>
        Olá mundo!
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia delectus
        excepturi omnis inventore dolor exercitationem fugiat consectetur,
        officia quidem, beatae nam. Ratione quia neque qui consequuntur quae
        officiis consequatur obcaecati.
      </p>
    </>
  );
}
