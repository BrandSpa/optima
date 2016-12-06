'use strict';

export default function updateItem(collection, newModel, field) {
  return collection.map(model => model[field] == newModel[field] ? {...model, ...newModel} : model);
}
