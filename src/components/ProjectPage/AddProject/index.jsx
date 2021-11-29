import React from "react";
import {useForm} from "react-hook-form";
import {saveProject} from "../../../services/projectService";
import {ProjectInput, Title, AddProjectForm, InputRowDiv, InputColumnDiv} from "./StyledComponents";
import {AddButton} from "../../../common/styles/Buttons";
import {ErrorText} from "../../../common/styles/Texts";

const AddProject = () => {
  const { handleSubmit, register, formState: { errors } } = useForm();

  const createProject = async data => {
    const response = await saveProject({
      name: data?.projectName
    })

    response && window.location.reload();
  }

  return (
    <AddProjectForm onSubmit={handleSubmit(createProject)}>
      <Title>Adicionar Projeto</Title>

      <InputColumnDiv>
        <InputRowDiv>
          <ProjectInput
            placeholder={'Insira o nome do seu projeto...'}
            type={'text'}
            {...register('projectName', { required: true, maxLength: 20 })}
          />
          <AddButton type={'submit'}>Adicionar</AddButton>
        </InputRowDiv>
        {errors?.projectName?.type === 'required' && <ErrorText>O nome do projeto não pode ser nulo!</ErrorText>}
        {errors?.projectName?.type === 'maxLength' &&
          <ErrorText>O nome do projeto não pode ter mais de 20 caracteres!</ErrorText>}
      </InputColumnDiv>
    </AddProjectForm>
  )
}

export default AddProject;