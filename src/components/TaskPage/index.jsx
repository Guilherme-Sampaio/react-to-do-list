import React, {useEffect, useState} from "react";
import {findTasksByProject, saveTask, setTaskAsDone, setTaskAsPending} from "../../services/taskService";
import {useParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import {
  CenteredTaskContainer,
  Checkbox,
  InputColumnDiv,
  InputContainerForm,
  SubtaskCard,
  SubtaskWrapper,
  TaskCard,
  StyledInput,
  TaskListTitle,
  TasksContainer,
  TaskText,
} from "./StyledComponents";
import {PageContainer} from "../../common/styles/Containers";
import {AddButton} from "../../common/styles/Buttons";
import {ErrorText} from "../../common/styles/Texts";
import {saveComment} from "../../services/commentService";

const TaskPage = () => {
  const [taskList, setTaskList] = useState();
  const [showComments, setShowComments] = useState(false);
  const { handleSubmit, register, reset, formState: { errors } } = useForm();
  const params = useParams();

  useEffect(() => {
    findAndSetTasks();
  }, [params])

  const findAndSetTasks = async () => {
    const tasks = await findTasksByProject(params?.id);
    tasks && setTaskList(tasks);
  }

  const handleSetDone = async task => {
    const { id, done } = task;
    const response = done ? await setTaskAsPending(id) : await setTaskAsDone(id);

    response && await findAndSetTasks();
  }

  const createTask = async data => {
    const { taskName, taskComment } = data;

    const taskResponse = await saveTask({
      title: taskName,
      done: false,
      project: params?.id ? { id: params?.id } : null,
    });

    const commentResponse = taskComment && await saveComment({
      message: taskComment,
      task: { id: taskResponse?.id }
    })

    if (taskResponse && (!taskComment || commentResponse )) {
      reset();
      findAndSetTasks();
    }
  }

  return(
   <PageContainer>
     <InputContainerForm onSubmit={handleSubmit(createTask)}>
       <InputColumnDiv>
         <StyledInput
           type={'text'}
           {...register('taskName', { required: true, maxLength: 50 })}
           placeholder={'Insira sua tarefa...'}
         />
         {errors?.taskName?.type === 'required' && <ErrorText>O nome da tarefa não pode ser nulo!</ErrorText>}
         {errors?.taskName?.type === 'maxLength' &&
         <ErrorText>O nome da tarefa não pode ter mais de 50 caracteres</ErrorText>}

         <StyledInput
           type={'textarea'}
           {...register('taskComment', { required: false, maxLength: 200 })}
           placeholder={'Insira um comentário para sua tarefa...'}
         />
         {errors?.taskComment && <ErrorText>O comentário da tarefa não pode ter mais de 200 caracteres</ErrorText>}

         <AddButton type={'submit'}>Adicionar</AddButton>
       </InputColumnDiv>
     </InputContainerForm>

     <TasksContainer>
       <CenteredTaskContainer>
         <TaskListTitle>Lista de tarefas</TaskListTitle>
         {taskList?.map((task, index) => (
           <>
             <TaskCard key={index} >
               <Checkbox type={'checkbox'} checked={task?.done} onClick={() => handleSetDone(task)} />
               <TaskText done={task?.done}  onClick={() => setShowComments(!showComments)} >{task?.title}</TaskText>
             </TaskCard>
             {task?.comments?.map((comment, index) => (
               <SubtaskCard key={index} mustBeShown={showComments && task?.comments?.length !== 0}>
                 <SubtaskWrapper onClick={() => setShowComments(!showComments)} >
                     <TaskText>{`- ${comment?.message}`}</TaskText>
                 </SubtaskWrapper>
               </SubtaskCard>
             ))}
           </>
         ))}
       </CenteredTaskContainer>
     </TasksContainer>
   </PageContainer>
  )
}

export default TaskPage;