const baseUrl = 'http://localhost:8080/'

const headers = new Headers({
  "Content-Type": "application/json",
});

const defaultRequest = {
  headers: headers,
  mode: 'cors',
  cache: 'default',
};

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

