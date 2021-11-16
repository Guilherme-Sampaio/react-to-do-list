export const baseUrl = 'http://localhost:8080'

export const headersWithJson = new Headers({
  "Content-Type": "application/json",
});

export const defaultRequest = {
  headers: headersWithJson,
  mode: 'cors',
  cache: 'default',
};