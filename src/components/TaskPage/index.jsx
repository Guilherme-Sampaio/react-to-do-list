import React, {useEffect, useState} from "react";
import {findTasksByProject, saveTask} from "../../services/taskService";
import {useParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import {
  CenteredTaskContainer,
  Checkbox,
  InputColumnDiv,
  InputContainerForm,
  InputRowDiv,
  TaskCard,
  TaskInput,
  TaskListTitle,
  TasksContainer,
  TaskText,
} from "./StyledComponents";
import {PageContainer} from "../../common/styles/Containers";
import {AddButton} from "../../common/styles/Buttons";
import {ErrorText} from "../../common/styles/Texts";

const TaskPage = () => {
  const [taskList, setTaskList] = useState();
  const { handleSubmit, register, reset, formState: { errors } } = useForm();
  const params = useParams();

  useEffect(() => {
    findAndSetTasks();
  }, [params])

  const findAndSetTasks = async () => {
    const tasks = await findTasksByProject(params?.id);
    tasks && setTaskList(tasks);
  }

  const createTask = async data => {
    const response = await saveTask({
      title: data?.taskName,
      done: false,
      project: params?.id ? { id: params?.id } : null
    });

    if (response) {
      reset();
      findAndSetTasks();
    }
  }

  return(
   <PageContainer>
     <InputContainerForm onSubmit={handleSubmit(createTask)}>
       <InputColumnDiv>
         <InputRowDiv>
           <TaskInput
             type={'text'}
             {...register('taskName', { required: true, maxLength: 50 })}
             placeholder={'Insira sua tarefa...'}
           />
           <AddButton type={'submit'}>Adicionar</AddButton>
         </InputRowDiv>
         {errors?.taskName?.type === 'required' && <ErrorText>O nome da tarefa não pode ser nulo!</ErrorText>}
         {errors?.taskName?.type === 'maxLength' &&
           <ErrorText>O nome da tarefa não pode ter mais de 50 caracteres</ErrorText>}
       </InputColumnDiv>
     </InputContainerForm>

     <TasksContainer>
       <CenteredTaskContainer>
         <TaskListTitle>Lista de tarefas</TaskListTitle>
         {taskList?.map((task, index) => (
           <TaskCard key={index}>
             <Checkbox type={'checkbox'}/>
             <TaskText>{task?.title}</TaskText>
           </TaskCard>
         ))}
       </CenteredTaskContainer>
     </TasksContainer>
   </PageContainer>
  )
}

export default TaskPage;