import styled from "styled-components";
import {COLORS} from "../../utils/colors";

export const AddButton = styled.button `
  width: 100px;
  height: 30px;
  margin-left: 10px;
  
  border: unset;
  border-radius: 5px;
  
  background-color: ${COLORS.greyBackground};
  color: ${COLORS.whiteText};
  font-weight: bold;
  
  &:hover {
    opacity: 0.8;
  }
`;