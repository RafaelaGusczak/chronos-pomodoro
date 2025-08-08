import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";

export function Tips() {
  // Estado do contexto
  const { state } = useTaskContext();

  // ciclos
    const nextCycle = getNextCycle(state.currentCycle);
    const nextCycleType = getNextCycleType(nextCycle);

   // Tips
    const tipsForWhenActiveTask = {
      workTime: (
        <span>
          Foque por <b>{state.config.workTime}min</b>
        </span>
      ),
      shortBreakTime: (
        <span>
          Descanse por <b>{state.config.shortBreakTime}min</b>
        </span>
      ),
      longBreakTime: <span>Descanso longo</span>,
    };
  
    const tipsForNoActiveTask = {
      workTime: (
        <span>
          Próximo ciclo é de foco por <b>{state.config.workTime}min</b>{' '}
        </span>
      ),
      shortBreakTime: (
        <span>
          Próximo ciclo é de descanso por <b>{state.config.shortBreakTime}min</b>
        </span>
      ),
      longBreakTime: <span>Próximo descanso será longo</span>,
    };

  return (
    <>
      {!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
      {!state.activeTask && tipsForNoActiveTask[nextCycleType]}
    </>
  );
}
