import React, {useContext} from "react";
import {TaskPageContext} from "../index";
import {deleteTask, setTaskAsDone, setTaskAsPending} from "../../../services/taskService";
import {TASKS_PERIODS} from "../../../common/constants/tasksPeriods";
import {DeleteIcon} from "../StyledComponents";
import {
  Checkbox,
  DayOption,
  DayOptionsDiv,
  TaskCard,
  TaskListTitle,
  TaskListWrapper,
  TaskText
} from "./StyledComponents";

const TaskList = () => {
  const { taskList, setCurrentTask, findAndSetTasks, taskPeriod, setTaskPeriod} = useContext(TaskPageContext)

  const handleSetDone = async task => {
    const { id, done } = task;
    const response = done ? await setTaskAsPending(id) : await setTaskAsDone(id);

    response && await findAndSetTasks();
  }

  const handleDeleteTask = id => {
    deleteTask(id);

    setTimeout(() => {
      findAndSetTasks();
    }, 1000)
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
          Distantes
        </DayOption>
        <DayOption
          onClick={() => setTaskPeriod(TASKS_PERIODS.EXPIRED_OR_NULL)}
          isSelected={taskPeriod === TASKS_PERIODS.EXPIRED_OR_NULL}
        >
          Demais tarefas
        </DayOption>
      </DayOptionsDiv>

      <TaskListWrapper>
        {taskList?.map((task, index) => (
          <TaskCard key={index}>
            <Checkbox type={'checkbox'} checked={task?.done} onClick={() => handleSetDone(task)} />
            <TaskText onClick={() => setCurrentTask(task)} done={task?.done}>{task?.title}</TaskText>
            <DeleteIcon onClick={() => handleDeleteTask(task?.id)} />
          </TaskCard>
        ))}
      </TaskListWrapper>
    </>
  )
}

export default TaskList;