import styled from "styled-components";
import {COLORS} from "../../../../utils/colors";

export const ProjectListWrapper = styled.div`
  display: flex;
  
  width: 100%;
  max-height: 500px;
  overflow-y: auto;
`;

export const ProjectCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  width: 100%;
  max-width: 550px;
  padding: 10px;

  border-bottom: 1px solid ${COLORS.lightGrey};
  
  cursor: pointer;

  font-weight: 500;
  color: ${COLORS.greyBackground};
  
  &:first-of-type {
    border-top: 1px solid ${COLORS.lightGrey};
  }
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  width: 100%;
  max-width: 500px;
  height: 100%;
  max-height: 550px;
  padding: 20px;
  
  background-color: ${COLORS.whiteText};
`;

export const ProjectListTitle = styled.h2`
  font-weight: 500;
  font-size: 24px;
  text-align: center;
  
  height: 40px;
`;
