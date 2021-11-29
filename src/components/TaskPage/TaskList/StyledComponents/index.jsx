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

export const TaskListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  width: 100%;
  max-height: 500px;
  overflow-y: auto;
`;

export const DayOptionsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  
  & :hover {
    border-bottom: 1px solid ${COLORS.greyBackground};
  }
`;

export const DayOption = styled.p`
  width: calc(100% / 4 - 1%);
  
  font-weight: ${({ isSelected }) => isSelected ? 'bold' : '500'};
  font-size: 14px;
  color: ${COLORS.greyBackground};
  
  cursor: pointer;
`;
