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

const Homepage = () => {
  const [taskList , setTaskList] = useState();

  useEffect(() => {
    setTaskList(['teste'])
  })

  return(
   <Container>
     <InputContainer>
       <TaskInput placeholder={'Insira sua tarefa...'}/>
       <AddButton>Adicionar</AddButton>
     </InputContainer>
     <TasksContainer>
       <CenteredTaskContainer>
         <TaskListTitle>Lista de tarefas</TaskListTitle>
         {taskList?.map((task, index) => (
           <TaskCard key={index}>
             <Checkbox type={'checkbox'}/>
             <TaskText>{task}</TaskText>
           </TaskCard>
         )
         )}
       </CenteredTaskContainer>
     </TasksContainer>
   </Container>
  )
}

export default Homepage;