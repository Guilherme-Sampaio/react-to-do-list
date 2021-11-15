import styled from "styled-components";
import {COLORS} from "../../../utils/colors";
import {ArrowRight} from '@styled-icons/bootstrap/ArrowRight'
import {Plus} from '@styled-icons/bootstrap/Plus'

import {Link} from "react-router-dom";

export const Container = styled.div`
  width: 250px;  
  background-color: ${COLORS.greyBackground};
  color: ${COLORS.whiteText};
  overflow-y: auto;
`;

export const ProjectWrapper = styled.div`
  padding: 20px;
`;

export const ProjectsDiv = styled.ul`
  display: ${({ mustBeShown }) => mustBeShown ? 'visible' : 'none'};
  overflow: hidden;
  height: auto;
`;

export const ProjectCard = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  
  padding: 10px 0;
  overflow: hidden;
  border-bottom: 1px solid ${COLORS.lightGrey};
  
  cursor: pointer;
  
  &:hover {
    background-color: ${COLORS.greyBackgroundWithHover};
  }
`;

export const CardTitle = styled.p`
  vertical-align: center;
  font-weight: 500;
  margin-left: 5px;
  height: auto;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  height: 40px;
  border-bottom: 1px solid ${COLORS.lightGrey}
`;

export const StyledTitle = styled.h1`
  font-size: 24px;
  color: ${COLORS.whiteText};
  height: 35px;
  cursor: pointer;
`;

export const ArrowToRight = styled(ArrowRight)`
  width: 24px;
  height: 24px;
  transform: ${({ isProjectDivOpen }) => isProjectDivOpen && 'rotate(90deg)'};
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: unset;
`;

export const PlusIcon = styled(Plus)`
  width: 24px;
  height: 24px;
`;