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
  align-items: center;
  
  width: 600px;
  
  &button, input {
    margin: 5px 0;
  }
`;

export const StyledInput = styled.input `
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
  padding: 5px;

  border-bottom: 1px solid ${COLORS.lightGrey};
  
  cursor: pointer;
  
  &:first-of-type {
    border-top: 1px solid ${COLORS.lightGrey};
  }
`;

export const SubtaskCard = styled(TaskCard)`
  display: ${({ mustBeShown }) => mustBeShown ? 'visible' : 'none'};
`;

export const SubtaskWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${COLORS.lightGrey};
  border-radius: 5px;
  padding: 5px;
  margin-left: 25px;
`;


export const TaskText = styled.p`
  width: 100%;
  font-weight: 500;
  color: ${COLORS.greyBackground};
  text-decoration: ${({ done }) => done && 'line-through'};
`;

export const Checkbox = styled.input`
  width: 15px;
  height: 15px;
  margin-right: 10px;
  border-radius: 10px;
  
  cursor: pointer;
`;