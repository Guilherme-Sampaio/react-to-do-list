import React, {useState} from "react";
import {
    AddButton,
    Container,
    Input,
    InputContainer,
    TaskContainer,
    TaskContainerWrapper,
    TasksTitle
} from "./StyledComponents";

const Homepage = () => {
  const [taskList , setTaskList] = useState(['tarefa 1', 'tarefa 2', 'tarefa 3']);

  return(
   <Container>
       <InputContainer>
           <Input />
           <AddButton> + </AddButton>
       </InputContainer>
       <TaskContainer>
           <TaskContainerWrapper>
               <TasksTitle>Lista de tarefas</TasksTitle>
               {taskList.map(task => <p>{task}</p>)}
           </TaskContainerWrapper>
       </TaskContainer>
   </Container>
  )
}

export default Homepage;