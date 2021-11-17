import React, {useContext} from "react";
import { Checkbox, TaskCard, TaskListTitle, TaskText} from "./StyledComponents";
import {TaskPageContext} from "../index";
import {setTaskAsDone, setTaskAsPending} from "../../../services/taskService";

const TaskList = () => {
  const { taskList, setCurrentTask, findAndSetTasks} = useContext(TaskPageContext)

  const handleSetDone = async task => {
    const { id, done } = task;
    const response = done ? await setTaskAsPending(id) : await setTaskAsDone(id);

    response && await findAndSetTasks();
  }

  return (
    <>
      <TaskListTitle>Lista de tarefas</TaskListTitle>
      {taskList?.map((task, index) => (
        <TaskCard key={index} onClick={() => setCurrentTask(task)}>
          <Checkbox type={'checkbox'} checked={task?.done} onClick={() => handleSetDone(task)} />
          <TaskText done={task?.done}>{task?.title}</TaskText>
        </TaskCard>
      ))}
    </>
  )
}

export default TaskList;