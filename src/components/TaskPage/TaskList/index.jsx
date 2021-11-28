import React, {useContext} from "react";
import {
  Checkbox,
  DayOption,
  DayOptionsDiv,
  TaskCard,
  TaskListTitle,
  TaskListWrapper,
  TaskText
} from "./StyledComponents";
import {TaskPageContext} from "../index";
import {setTaskAsDone, setTaskAsPending} from "../../../services/taskService";
import {TASKS_PERIODS} from "../../../common/constants/tasksPeriods";

const TaskList = () => {
  const { taskList, setCurrentTask, findAndSetTasks, taskPeriod, setTaskPeriod} = useContext(TaskPageContext)

  const handleSetDone = async task => {
    const { id, done } = task;
    const response = done ? await setTaskAsPending(id) : await setTaskAsDone(id);

    response && await findAndSetTasks();
  }

  return (
    <>
      <TaskListTitle>Lista de tarefas</TaskListTitle>
      <DayOptionsDiv>
        <DayOption
          onClick={() => setTaskPeriod(TASKS_PERIODS.TODAY)}
          isSelected={taskPeriod === TASKS_PERIODS.TODAY}
        >
          Hoje
        </DayOption>
        <DayOption
          onClick={() => setTaskPeriod(TASKS_PERIODS.WEEK)}
          isSelected={taskPeriod === TASKS_PERIODS.WEEK}
        >
          7 dias
        </DayOption>
        <DayOption
          onClick={() => setTaskPeriod(TASKS_PERIODS.MORE_THAN_ONE_WEEK)}
          isSelected={taskPeriod === TASKS_PERIODS.MORE_THAN_ONE_WEEK}
        >
          Demais tarefas
        </DayOption>
      </DayOptionsDiv>

      <TaskListWrapper>
        {taskList?.map((task, index) => (
          <TaskCard key={index} onClick={() => setCurrentTask(task)}>
            <Checkbox type={'checkbox'} checked={task?.done} onClick={() => handleSetDone(task)} />
            <TaskText done={task?.done}>{task?.title}</TaskText>
          </TaskCard>
        ))}
      </TaskListWrapper>
    </>
  )
}

export default TaskList;