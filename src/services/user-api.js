const BASE_URL = '/api/users';//needs to match the path of the first arg in app.use in server.js


export function create(user) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(user)
  }).then(res => res.json());
}