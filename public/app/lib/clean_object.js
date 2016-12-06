'use strict';

export default function cleanObject(collection) {
  let cleanOb = Object.keys(collection).reduce((ob, key) => {
    ob[key] = '';
    return {...ob, ...ob};
  }, {});

  return cleanOb;
}
