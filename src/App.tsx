import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  console.log('oi');

  return (
    <>
      <Heading attr={123} attr2='String'>
        Olá mundo!
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
