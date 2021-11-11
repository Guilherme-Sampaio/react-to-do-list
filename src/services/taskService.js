import {baseUrl, defaultRequest} from "./serviceCommon";

export const findAllTasks = () => {
  const request = {
    ...defaultRequest,
    method: 'GET',
  }
  return fetch( `${baseUrl}/task/all`, request).then(response => response.json());
}

export function saveTask(task) {
  const request = {
    ...defaultRequest,
    method: 'POST',
    body: JSON.stringify(task),
  };
  return fetch(`http://localhost:8080/task`, request).then(response => response.json());
}
export function setAsPending(task) {
  const request = {
    ...defaultRequest,
    method: 'PATCH',
    body: JSON.stringify(task)
  };
  return fetch(`http://localhost:8080/task/${task.id}/set-as-pending`, request).then(response => response.json());
}
export function setAsDone(task) {
  const request = {
    ...defaultRequest,
    method: 'PATCH',
    body: JSON.stringify(task)
  };
  return fetch(`http://localhost:8080/task/${task.id}/set-as-done`, request).then(response => response.json());
}
