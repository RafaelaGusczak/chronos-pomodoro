import type { TaskStateModel } from "../../models/TaskStateModel";

export const initialTaskState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: '00:00',
  activeTask: null,
  currentCycle: 0, // 1, 2, 3 ... 8 => 1
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
};