import styled from "styled-components";
import {COLORS} from "../../../../utils/colors";

export const AddProjectForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  width: 80%;
  margin-top: 30px;
  padding: 20px 0;
  
  background-color: ${COLORS.whiteText};
`;

export const ProjectInput = styled.input `
  border: none;
  border-bottom: 1px solid #000;
  
  height: 30px;
  width: 500px;
  padding: 0 5px;
  
  font-weight: 500;
`;

export const InputRowDiv = styled.div `
  display: flex;
  justify-content: center;
`;

export const InputColumnDiv = styled.div `
  display: flex;
  flex-direction: column;
  width: 600px;
`;

export const Title = styled.h1 `
  display: flex;
  justify-content: center;
  
  font-size: 24px;
  font-weight: 500;
  
  margin-bottom: 20px;
`;