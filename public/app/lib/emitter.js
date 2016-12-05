'use strict';
import _ from 'underscore';

export default function Emitter() {

  return {
    events: {},
    on(fnName, fn) {
      let ob = {};

      if(typeof fn === 'function') {
        ob[fnName] = fn;
        this.events = _.extend(this.events, ob);
      }

      return this;
    },

    off(fnName) {
      let keys = Object.keys(this.events);
      let newEvents = keys.reduce((ob, key) => {
        if(key != fnName) {
          let obj = {};
          obj[key] = events[key];
          return _.extend(ob, obj);
        }
        return ob;
      }, {});

      this.events = newEvents;
    },

    emit(...args) {
      let argsToApply = args.filter(function(arg, i) {
        return i != 0;
      });

      if(typeof this.events[args[0]] === 'function') {
          this.events[args[0]].apply(null, argsToApply);
      } else {
        console.error(`event ${args[0]} isn't present on emmiter`);
      }
    }
  };



};
