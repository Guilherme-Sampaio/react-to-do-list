import {baseUrl, defaultRequest} from "./serviceCommon";

export const findAllProjects = () => {
  const request = {
    ...defaultRequest,
    method: 'GET',
  }
  return fetch( `${baseUrl}/project/all`, request).then(response => response.json());
}

export function saveProject(project) {
  const request = {
    ...defaultRequest,
    method: 'POST',
    body: JSON.stringify(project),
  };
  return fetch(`${baseUrl}/project`, request).then(response => response.json());
}

