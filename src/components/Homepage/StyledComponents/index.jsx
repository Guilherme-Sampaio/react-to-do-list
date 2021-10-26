import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;]
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  background-color: rgba(245, 245, 245, 1);
  padding: 20px 0;
  height: 50px;
  box-shadow: 1px 1px #eee;
`;

export const AddButton = styled.button`
  background-color: green;
  width: 50px;
  height: 50px;
  color: white;
  font-size: 24px;
  border-radius: 50px;
  border: unset;
  margin-left: 10px;
  cursor: pointer;
`;

export const Input = styled.input`
  font-size: 18px;
  border: unset;
  border-bottom: 1px solid #000;
`;

export const TaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-top: 30px;
  background-color: rgba(245, 245, 245, 1);
  padding: 20px 0;
  box-shadow: 1px 1px #eee;
`;

export const TaskContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 50px;
`;

export const TasksTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
`;