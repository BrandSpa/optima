'use strict';
import _ from 'underscore';

export default function updateItem(collection, newModel, field) {

  let arr = collection.map(model => {
    if(model[field] == newModel[field]) {
      return _.extend(model, newModel);
    } else {
      return model;
    }
  });

  return arr;
}
