import styled from "styled-components";
import {COLORS} from "../../../utils/colors";

export const TasksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  
  width: 80%;
  height: 100%;
  padding: 20px;
  margin: 30px 0;
  
  background-color: ${COLORS.whiteText};
`;

export const TaskListContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  width: calc(100% / 2 - 2%);
`;

export const CurrentTaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% / 2 - 2%);
`;