import styled from "styled-components";
import {COLORS} from "../../../../utils/colors";

export const VisibilityHandler = styled.div`
  display: ${({ hasCurrentTask }) => hasCurrentTask ? 'visible' : 'none'};
`;

export const CurrentTaskTitle = styled.h2`
  font-weight: 500;
  font-size: 24px;
  text-align: center;

  height: 40px;
  margin-bottom: 10px;
`;

export const GreyText = styled.div`
  font-weight: 500;
  font-size: 18px;
  color: ${COLORS.greyBackground};
  margin-bottom: 10px;
`;

export const DateValue = styled.label`
  font-weight: 500;
  font-size: 16px;
  color: ${COLORS.greyBackground};
  margin: 0  0 20px 5px;
`;

export const CommentsWrapper = styled.div`
  max-height: 400px;
  overflow-y: auto;
`;

export const CommentCard = styled.div`
  display: flex;
  align-items: center;
  
  width: 100%;
  padding: 5px;

  cursor: pointer;
`;

export const SubtaskWrapper = styled.div`
  display: flex;
  
  border: 1px solid ${COLORS.lightGrey};
  border-radius: 5px;
  
  padding: 5px;
  margin-left: 25px;
`;

export const CommentText = styled.p`
  width: 100%;
  font-weight: 500;
  color: ${COLORS.greyBackground};
  text-decoration: ${({ done }) => done && 'line-through'};
`;

export const CommentForm = styled.form`
  margin-top: 20px;
`;

export const SubtaskWrapperWithoutBorder = styled(SubtaskWrapper)`
  border: unset;
`;

export const CommentInput = styled.input`
  width: 100%;
  padding: 5px;
  
  font-weight: 500;
  color: ${COLORS.greyBackground};
  text-decoration: ${({ done }) => done && 'line-through'};
`;

export const AddPlusButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 24px;
  height: 24px;
  background-color: ${COLORS.greyBackground};

  border-radius: 100%;
  border: none;
  
  font-size: 18px;
  font-weight: bold;
  color: ${COLORS.whiteText};

  cursor: pointer;
`;