import React, {createContext, useEffect, useState} from "react";
import {findTasksByProject} from "../../services/taskService";
import {useParams} from "react-router-dom";
import {TasksContainer, TaskListContainer, CurrentTaskContainer} from "./StyledComponents";
import {PageContainer} from "../../common/styles/Containers";
import AddTask from "./AddTask";
import CurrentTask from "./CurrentTask";
import TaskList from "./TaskList";

export const TaskPageContext = createContext({});

const TaskPage = () => {
  const [taskList, setTaskList] = useState();
  const [currentTask, setCurrentTask] = useState();
  const params = useParams();

  useEffect(() => {
    setCurrentTask({})

    findAndSetTasks();
  }, [params])

  const findAndSetTasks = async () => {
    const tasks = await findTasksByProject(params?.id);
    tasks && setTaskList(tasks);
  }

  const context = {
    params,
    findAndSetTasks,
    currentTask,
    setCurrentTask,
    taskList
  }

  return (
    <TaskPageContext.Provider value={context}>
      <PageContainer>
        <AddTask />

        <TasksContainer>
          <TaskListContainer>
            <TaskList />
          </TaskListContainer>

          <CurrentTaskContainer>
            <CurrentTask />
          </CurrentTaskContainer>
        </TasksContainer>
      </PageContainer>
    </TaskPageContext.Provider>
  )
}

export default TaskPage;