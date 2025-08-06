import { Container } from '../../components/Container';
import { MainTemplate } from '../../layout/MainLayouts';

export function NotFound() {
  return (
    <MainTemplate>
      <Container>
        <h1>Página não encontrada</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
          voluptatem enim. Dolore velit iure aliquid aspernatur doloremque saepe
          similique qui perspiciatis soluta reprehenderit architecto, esse
          tempora amet nostrum voluptatum impedit!
        </p>
      </Container>
    </MainTemplate>
  );
}
