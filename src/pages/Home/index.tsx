import { Container } from '../../components/Container';
import { CountDown } from '../../components/CountDown';
import { MainForm } from '../../components/MainForm';
import { MainTemplate } from '../../layout/MainLayouts';
import type { TaskStateModel } from '../../models/TaskStateModel';

export type HomeProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

export function Home(props: HomeProps) {

  return (
    <MainTemplate>
      <Container>
        <CountDown {...props} />
      </Container>

      <Container>
        <MainForm {...props} />
      </Container>
    </MainTemplate>
  );
}
