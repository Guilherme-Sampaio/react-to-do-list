import {baseUrl, defaultRequest} from "./serviceCommon";

export function saveComment(comment) {
  const request = {
    ...defaultRequest,
    method: 'POST',
    body: JSON.stringify(comment),
  };
  return fetch(`${baseUrl}/comment`, request).then(response => response.json());
}