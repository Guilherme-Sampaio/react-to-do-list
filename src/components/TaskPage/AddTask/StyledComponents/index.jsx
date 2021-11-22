import styled from "styled-components";
import {COLORS} from "../../../../utils/colors";

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