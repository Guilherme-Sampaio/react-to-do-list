import React, {useContext} from "react";
import {ProjectPageContext} from "../index";
import {ProjectCard, ProjectContainer, ProjectListTitle, ProjectListWrapper} from "./StyledComponents";
import {DeleteIcon} from "../../TaskPage/StyledComponents";
import {deleteProject} from "../../../services/projectService";

const ProjectList = () => {
  const { projectList, findAndSetProjects } = useContext(ProjectPageContext);

  const handleDeleteProject = id => {
    deleteProject(id);

    setTimeout(() => {
      findAndSetProjects();
      window.location.reload();
    }, 1000)
  }

  return (
    <>
      <ProjectListTitle>Projetos</ProjectListTitle>
      <ProjectContainer>
        {projectList?.map((project, index) => (
          <ProjectListWrapper key={index}>
            <ProjectCard>
              {project?.name}
              <DeleteIcon onClick={() => handleDeleteProject(project?.id)} />
            </ProjectCard>
          </ProjectListWrapper>
        ))}
      </ProjectContainer>
    </>
  )
}

export default ProjectList;