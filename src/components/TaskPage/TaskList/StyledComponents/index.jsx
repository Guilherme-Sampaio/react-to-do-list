import styled from "styled-components";
import {COLORS} from "../../../../utils/colors";

export const TaskListTitle = styled.h2`
  font-weight: 500;
  font-size: 24px;
  text-align: center;
  
  height: 40px;
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

export const Checkbox = styled.input`
  width: 15px;
  height: 15px;
  margin-right: 10px;
  border-radius: 10px;
  
  cursor: pointer;
`;

export const TaskText = styled.p`
  width: 100%;
  font-weight: 500;
  color: ${COLORS.greyBackground};
  text-decoration: ${({ done }) => done && 'line-through'};
`;