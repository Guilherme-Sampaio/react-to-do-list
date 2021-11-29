import {baseUrl, defaultRequest} from "./serviceCommon";

export const findTodayTasks = (id = '') => {
  const request = {
    ...defaultRequest,
    method: 'GET',
  }
  if (id) return fetch( `${baseUrl}/task/project/${id}/today`, request).then(response => response.json());
  return fetch( `${baseUrl}/task/project/today`, request).then(response => response.json());
}

export const findWeekTasks = (id = '') => {
  const request = {
    ...defaultRequest,
    method: 'GET',
  }
  if (id) return fetch( `${baseUrl}/task/project/${id}/week`, request).then(response => response.json());
  return fetch( `${baseUrl}/task/project/week`, request).then(response => response.json());
}

export const findMoreThanOneWeekTasks = (id = '') => {
  const request = {
    ...defaultRequest,
    method: 'GET',
  }
  if (id) return fetch( `${baseUrl}/task/project/${id}/distant`, request).then(response => response.json());
  return fetch( `${baseUrl}/task/project/distant`, request).then(response => response.json());
}


export function saveTask(task) {
  const request = {
    ...defaultRequest,
    method: 'POST',
    body: JSON.stringify(task),
  };
  return fetch(`${baseUrl}/task`, request).then(response => response.json());
}

export function setTaskAsDone(id) {
  const request = {
    ...defaultRequest,
    method: 'PATCH',
  };
  return fetch(`${baseUrl}/task/${id}/done`, request).then(response => response.json());
}

export function setTaskAsPending(id) {
  const request = {
    ...defaultRequest,
    method: 'PATCH',
  };
  return fetch(`${baseUrl}/task/${id}/pending`, request).then(response => response.json());
}

