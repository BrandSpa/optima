'use strict';
import _ from 'lodash';

export default function cleanObject(collection) {
  let cleanOb = Object.keys(collection).reduce((ob, key) => {
    ob[key] = '';
    return _.extend(ob, ob);
  }, {});

  return cleanOb;
}
