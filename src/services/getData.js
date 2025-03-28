const API_URL = 'http://localhost:3001';

function getCoffees(callback) {
  fetch(API_URL + '/cafes')
    .then((response) => response.json())
    .then((data) => {
      callback(data);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
      throw error;
    });
}

function login(username, password, callback) {
  fetch(API_URL + '/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ login: username, password: password }),
  }).then(res => res.json())
    .then(data => {
      callback(data);
    });
}

function getCoffeeById(id, callback) {
  fetch(API_URL + '/cafes/' + id)
    .then(res => res.json())
    .then(data => {
      callback(data);
    });
}

export { getCoffees, login, getCoffeeById };