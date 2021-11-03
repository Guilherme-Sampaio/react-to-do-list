import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  
  background-color: #EFEFEF;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 80%;
  height: 50px;
  margin-top: 30px;
  
  background-color: #FFF;
`;

export const TaskInput = styled.input `
  border: none;
  border-bottom: 1px solid #000;
  
  height: 30px;
  width: 500px;
  padding: 0 5px;
  
  font-weight: 500;
`;

export const AddButton = styled.button `
  width: 100px;
  height: 30px;
  margin-left: 10px;
  
  border: unset;
  border-radius: 5px;
  
  background-color: #444444;
  color: #FFF;
  font-weight: bold;
  
  &:hover {
    opacity: 0.8;
  }
`;

export const TasksContainer = styled.div`
  display: flex;
  justify-content: center;
  
  width: 80%;
  margin: 30px 0;
  
  background-color: #FFF;
`;

export const CenteredTaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  width: 610px;
  height: 80%;
  margin: 30px 0;
  
  background-color: #FFF;
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

  border-bottom: 1px solid #DDDDDD;
  
  &:first-of-type {
    border-top: 1px solid #DDDDDD;
  }
`;

export const TaskText = styled.p`
  width: auto;
  font-weight: 500;
  color: #444444;
`;

export const Checkbox = styled.input`
  width: 15px;
  height: 15px;
  margin-right: 10px;
  border-radius: 10px;
`;
