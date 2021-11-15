import {baseUrl, defaultRequest} from "./serviceCommon";

export const findTasksByProject = (id = '') => {
  const request = {
    ...defaultRequest,
    method: 'GET',
  }
  return fetch( `${baseUrl}/task/project/${id}`, request).then(response => response.json());
}

export function saveTask(task) {
  const request = {
    ...defaultRequest,
    method: 'POST',
    body: JSON.stringify(task),
  };
  return fetch(`${baseUrl}/task`, request).then(response => response.json());
}

