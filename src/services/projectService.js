import {baseUrl, defaultRequest} from "./serviceCommon";

export const findAllProjects = () => {
  const request = {
    ...defaultRequest,
    method: 'GET',
  }
  return fetch( `${baseUrl}/project/all`, request).then(response => response.json());
}

export function saveProject(task) {
  const request = {
    ...defaultRequest,
    method: 'POST',
    body: JSON.stringify(task),
  };
  return fetch(`http://localhost:8080/task`, request).then(response => response.json());
}

