const BASE_URL = '/api/yogaClasses';//needs to match the path of the first arg in app.use in server.js

export function getAll() {
  return fetch(BASE_URL)
  .then(res => res.json());
}

export function create(yogaClass) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(yogaClass)
  }).then(res => res.json());
}

export function update(yogaClass) {
  return fetch(`${BASE_URL}/${yogaClass._id}`, {
    method: 'PUT',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(yogaClass)
  }).then(res => res.json());
}

export function deleteOne(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE'
  }).then(res => res.json());
}