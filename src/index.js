import $ from 'jquery';
import 'normalize.css';
import './index.css';
import shoppingList from './shopping-list';
import api from './api.js';
import store from './store.js';


const main = function () {
  api.createItem('pears')
    .then(res => res.json())
    .then((newItem) => {
      return api.getItems();
    })
    .then(res => res.json())
    .then((items) => {
      console.log(items);
    });

    api.getItems()
    .then(res => res.json())
    .then((items) => {
      items.forEach((item) => store.addItem(item));
      shoppingList.render();
    });
   
  const item = store.items[0];
    console.log('current name: ' + item.name);
    store.findAndUpdate(item.id, { name: 'foobar' });
    console.log('new name: ' + item.name);
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);