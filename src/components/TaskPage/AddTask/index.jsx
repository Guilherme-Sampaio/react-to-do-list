import React, {useContext} from "react";
import {saveTask} from "../../../services/taskService";
import {saveComment} from "../../../services/commentService";
import {useForm} from "react-hook-form";
import {DateInput, InputColumnDiv, InputContainerForm, StyledInput,} from "./StyledComponents";
import {AddButton} from "../../../common/styles/Buttons";
import {ErrorText} from "../../../common/styles/Texts";
import {TaskPageContext} from "../index";


const AddTask = () => {
  const { handleSubmit, register, reset, formState: { errors } } = useForm();
  const { params, findAndSetTasks} = useContext(TaskPageContext)

  const createTask = async data => {
    const { taskName, taskComment, taskDate } = data;
    const convertedDate = convertUTCDateToLocalDate(taskDate);

    const taskResponse = await saveTask({
      title: taskName,
      done: false,
      project: params?.id ? { id: params?.id } : null,
      selectedDate: convertedDate,
    });

    const commentResponse = taskComment && await saveComment({
      message: taskComment,
      task: { id: taskResponse?.id }
    })

    const allRequestsReturnedOk = taskResponse && (!taskComment || commentResponse);
    if (allRequestsReturnedOk) {
      reset();
      findAndSetTasks();
    }
  }

  const convertUTCDateToLocalDate = date => {
    const convertedDate = new Date(date + ' UTC');
    return new Date(convertedDate?.getTime() + convertedDate?.getTimezoneOffset() * 60 * 1000);
  }

  return (
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

        <DateInput
          type={'date'}
          {...register('taskDate', { required: false })}
          placeholder={'Insira uma data para sua tarefa...'}
        />

        <AddButton type={'submit'}>Adicionar</AddButton>
      </InputColumnDiv>
    </InputContainerForm>
  )
}

export default AddTask;