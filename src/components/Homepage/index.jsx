import React, {useEffect, useState} from "react";
import {
  AddButton,
  CenteredTaskContainer,
  Checkbox,
  Container,
  InputContainer,
  TaskCard,
  TaskInput,
  TaskListTitle,
  TasksContainer,
  TaskText,
} from "./StyledComponents";
import {findAllTasks, saveTask, setAsDone, setAsPending} from "../../services/taskService";

const Homepage = () => {
  const [taskList, setTaskList] = useState();
  const [task , setTask] = useState();

  useEffect(() => {
    findAndSetTasks();
  })

  const findAndSetTasks = async () => {
    const response = await findAllTasks();
    response && setTaskList(response);
  }

  const handleChange = event => {
    setTask(event?.target?.value);
  }

  const createTask = async () => {
    const response = await saveTask({
      title: task,
      done: false,
    });
    if (response) {
      setTask('');
      await findAndSetTasks();
    }
  }
  
  useEffect(async ()=>{
    await findAllTasks();
  },[]);

  async function onChange(target,task){
    if (target.checked){
      await setAsDone(task);
    } else {
      await setAsPending(task);
    }
    await findAllTasks();
  }

  return(
   <Container>
     <InputContainer>
       <TaskInput
         onChange={(event) => handleChange(event)}
         value={task}
         placeholder={'Insira sua tarefa...'}
       />
       <AddButton onClick={() => createTask()}>Adicionar</AddButton>
     </InputContainer>
     <TasksContainer>
       <CenteredTaskContainer>
         <TaskListTitle>Lista de tarefas</TaskListTitle>
         {taskList?.map((task, index) => (
           <TaskCard key={index}>
             <Checkbox type={'checkbox'} onChange={({target}) => onChange(target,task)}/>
             <TaskText>{task?.title}</TaskText>
           </TaskCard>
         )
         )}
       </CenteredTaskContainer>
     </TasksContainer>
   </Container>
  )
}

export default Homepage;