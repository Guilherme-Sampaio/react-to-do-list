import React, {createContext, useEffect, useState} from "react";
import AddProject from "./AddProject";
import {PageContainer} from "../../common/styles/Containers";
import {ProjectContainer} from "./StyledComponents";
import ProjectList from "./ProjectList";
import {findAllProjects} from "../../services/projectService";

export const ProjectPageContext = createContext({});

const ProjectPage = () => {
  const [projectList, setProjectList] = useState();

  useEffect(() => {
    findAndSetProjects();
  }, [])

  const findAndSetProjects = async () => {
    const projects = await findAllProjects();
    projects && setProjectList(projects)
  }

  const context = {
    projectList,
    findAndSetProjects,
  }

  return (
    <ProjectPageContext.Provider value={context}>
      <PageContainer>
        <AddProject />
        <ProjectContainer>
          <ProjectList />
        </ProjectContainer>
      </PageContainer>
    </ProjectPageContext.Provider>
  )
}

export default ProjectPage;