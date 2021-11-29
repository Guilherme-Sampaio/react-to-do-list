import React, {useContext} from "react";
import {useForm} from "react-hook-form";
import {deleteComment, saveComment} from "../../../services/commentService";
import {ErrorText} from "../../../common/styles/Texts";
import {TaskPageContext} from "../index";
import {DeleteIcon} from "../StyledComponents";
import {
  AddPlusButton,
  CommentCard,
  CommentForm,
  CommentInput,
  CurrentTaskTitle,
  GreyText,
  SubtaskWrapper,
  SubtaskWrapperWithoutBorder,
  VisibilityHandler,
  CommentText,
  CommentsWrapper,
  DateValue,
} from "./StyledComponents";

const CurrentTask = () => {
  const { handleSubmit, register, reset, formState: { errors } } = useForm();
  const { currentTask, setCurrentTask, findAndSetTasks} = useContext(TaskPageContext)

  const createComment = async data => {
    const { comment } = data;

    const response = await saveComment({
      message: comment,
      task: { id: currentTask?.id }
    });

    if (response) {
      reset();
      findAndSetTasks();
      setCurrentTask({});
    }
  }

  const handleRemoveComment = id => {
    deleteComment(id);

    setTimeout(() => {
      setCurrentTask({})
      findAndSetTasks();
    }, 1000)
  }

  const handleDate = date => {
    const newDate = new Date(date);
    return newDate?.toLocaleDateString('pt-BR', {timeZone: 'UTC'});
  }

  return (
    <VisibilityHandler hasCurrentTask={Boolean(currentTask?.id)}>
      <CurrentTaskTitle>{currentTask?.title}</CurrentTaskTitle>
      <GreyText>
        Data:<DateValue>{handleDate(currentTask?.selectedDate)}</DateValue>
      </GreyText>

      <GreyText>Comentários:</GreyText>
      <CommentsWrapper>
        {currentTask?.comments?.map((comment, index) => (
          <CommentCard key={index}>
            <SubtaskWrapper>
              <CommentText>{`- ${comment?.message}`}</CommentText>
              <DeleteIcon onClick={() => handleRemoveComment(comment?.id)}/>
            </SubtaskWrapper>
          </CommentCard>
        ))}
      </CommentsWrapper>

      <CommentForm onSubmit={handleSubmit(createComment)}>
        <CommentCard>
          <SubtaskWrapperWithoutBorder>
            <CommentInput
              type={'textarea'}
              {...register('comment', { required: true, maxLength: 200 })}
              placeholder={'Insira um novo comentário para sua tarefa...'}
            />
            {errors?.comment?.type === 'required'
            && <ErrorText>Você não pode adicionar um comentário em branco!</ErrorText>}
            {errors?.comment?.type === 'maxLenght'
            && <ErrorText>O comentário da tarefa não pode ter mais de 200 caracteres</ErrorText>}
          </SubtaskWrapperWithoutBorder>
          <AddPlusButton type={'submit'}>+</AddPlusButton>
        </CommentCard>
      </CommentForm>
    </VisibilityHandler>
  )
}

export default CurrentTask;