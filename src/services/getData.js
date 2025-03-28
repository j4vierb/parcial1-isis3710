function getData(callback) {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => {
      callback(data);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
      throw error;
    });
}

export { getData };