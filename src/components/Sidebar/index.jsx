import React, {useEffect, useState} from "react";
import {
  ArrowToRight,
  CardTitle,
  Container,
  PlusIcon,
  ProjectCard,
  ProjectsDiv,
  ProjectWrapper,
  StyledLink,
  StyledTitle,
  TitleWrapper
} from "./StyledComponents";
import {findAllProjects} from "../../services/projectService";

const Sidebar = () => {
  const [projectList, setProjectList] = useState();
  const [isProjectDivOpen, setIsProjectDivOpen] = useState(false);

  useEffect(() => {
    getProjects();
  }, [])

  const getProjects = async () => {
    const projects = await findAllProjects();
    projects && setProjectList(projects)
  }

  return (
    <Container>
      <ProjectWrapper>
        <TitleWrapper
          onMouseEnter={() => setIsProjectDivOpen(true)}
          onMouseLeave={() => setIsProjectDivOpen(false)}
          onClick={() => setIsProjectDivOpen(!isProjectDivOpen)}
        >
          <StyledLink to={'/project/'}>
            <StyledTitle>Projetos</StyledTitle>
          </StyledLink>
          <ArrowToRight isProjectDivOpen={isProjectDivOpen} />
        </TitleWrapper>

        <ProjectsDiv mustBeShown={isProjectDivOpen} >
          <StyledLink to={'/project/page'}>
            <ProjectCard
              onMouseEnter={() => setIsProjectDivOpen(true)}
              onMouseLeave={() => setIsProjectDivOpen(false)}
            >
              <CardTitle>
                <PlusIcon />
                Novo projeto
              </CardTitle>
            </ProjectCard>
          </StyledLink>

          {projectList?.map((project, index) => (
            <StyledLink to={`/project/${project?.id}`} key={index} >
              <ProjectCard
                onMouseEnter={() => setIsProjectDivOpen(true)}
                onMouseLeave={() => setIsProjectDivOpen(false)}
              >
                <CardTitle>{project?.name}</CardTitle>
              </ProjectCard>
            </StyledLink>
          ))}
        </ProjectsDiv>
      </ProjectWrapper>
    </Container>
  )
};

export default Sidebar;