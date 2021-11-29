import styled from "styled-components";
import {COLORS} from "../../../utils/colors";
import {Delete} from "@styled-icons/fluentui-system-filled/Delete";
import {Edit} from "@styled-icons/entypo/Edit";

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

export const DeleteIcon = styled(Delete)`
  width: 24px;
  height: 24px;
  color: ${COLORS.greyBackground};
`;

export const EditIcon = styled(Edit)`
  width: 24px;
  height: 24px;
  color: ${COLORS.greyBackground};
  margin-right: 10px;
`;