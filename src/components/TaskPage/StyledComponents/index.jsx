import styled from "styled-components";
import {COLORS} from "../../../utils/colors";

export const InputContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  width: 80%;
  margin-top: 30px;
  padding: 20px 0;
  
  background-color: ${COLORS.whiteText};
`;

export const InputColumnDiv = styled.div `
  display: flex;
  flex-direction: column;
  width: 600px;
`;


export const InputRowDiv = styled.div`
  display: flex;
`;

export const TaskInput = styled.input `
  border: none;
  border-bottom: 1px solid #000;
  
  height: 30px;
  width: 600px;
  padding: 0 5px;
  
  font-weight: 500;
`;

export const TasksContainer = styled.div`
  display: flex;
  justify-content: center;
  
  width: 80%;
  height: 100%;
  margin: 30px 0;
  
  background-color: ${COLORS.whiteText};
`;

export const CenteredTaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  width: 610px;
  height: 80%;
  margin: 30px 0;
  
  background-color: ${COLORS.whiteText};
`;

export const TaskListTitle = styled.h2`
  font-weight: 500;
  font-size: 24px;
  
  height: 30px;
  margin-bottom: 10px;
`;

export const TaskCard = styled.div`
  display: flex;
  align-items: center;
  
  width: 100%;
  height: 30px;
  padding: 5px;

  border-bottom: 1px solid ${COLORS.lightGrey};
  
  &:first-of-type {
    border-top: 1px solid ${COLORS.lightGrey};
  }
`;

export const TaskText = styled.p`
  width: auto;
  font-weight: 500;
  color: ${COLORS.greyBackground};
`;

export const Checkbox = styled.input`
  width: 15px;
  height: 15px;
  margin-right: 10px;
  border-radius: 10px;
`;