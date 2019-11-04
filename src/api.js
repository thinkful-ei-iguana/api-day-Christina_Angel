const BASE_URL = 'https://thinkful-list-api.herokuapp.com/Christina_Angel';

const getItems = function () {
  return fetch(`${BASE_URL}/items`);
};

const createItem = function (name) {
  const newItem = JSON.stringify({name});
   const options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: newItem 
  };
  retun fetch (BASE_URL + '/items', options)
};

export default {
  getItems,
  createItem
};