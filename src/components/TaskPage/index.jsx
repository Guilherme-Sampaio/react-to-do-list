import React, {createContext, useEffect, useState} from "react";
import {findMoreThanOneWeekTasks, findTodayTasks, findWeekTasks} from "../../services/taskService";
import {useParams} from "react-router-dom";
import {TasksContainer, TaskListContainer, CurrentTaskContainer} from "./StyledComponents";
import {PageContainer} from "../../common/styles/Containers";
import AddTask from "./AddTask";
import CurrentTask from "./CurrentTask";
import TaskList from "./TaskList";
import {TASKS_PERIODS} from "../../common/constants/tasksPeriods";

export const TaskPageContext = createContext({});

const TaskPage = () => {
  const [taskList, setTaskList] = useState();
  const [currentTask, setCurrentTask] = useState();
  const [taskPeriod, setTaskPeriod] = useState(TASKS_PERIODS.TODAY);
  const params = useParams();

  useEffect(() => {
    setCurrentTask({})

    findAndSetTasks();
  }, [params, taskPeriod])

  const findAndSetTasks = async () => {
    const tasks = await choosePeriodTasks(params?.id);
    tasks && setTaskList(tasks);
  }

  const choosePeriodTasks = async id => {
    switch (taskPeriod) {
      case TASKS_PERIODS.TODAY: return await findTodayTasks(id);
      case TASKS_PERIODS.WEEK: return await findWeekTasks(id);
      case TASKS_PERIODS.MORE_THAN_ONE_WEEK: return await findMoreThanOneWeekTasks(id);
    }
  }

  const context = {
    params,
    findAndSetTasks,
    currentTask,
    setCurrentTask,
    taskList,
    taskPeriod,
    setTaskPeriod
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