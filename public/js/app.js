webpackJsonp([1],Array(22).concat([
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _react2.default.createClass({
  displayName: 'exports',
  getInitialState: function getInitialState() {
    return {
      value: ''
    };
  },


  getDefaultProps: function getDefaultProps() {
    return {
      options: [],
      value: '',
      default: '',
      styles: ''
    };
  },

  onChange: function onChange(e) {
    this.props.onSelectChange(e);
  },


  render: function render() {
    var optionNodes = this.props.options.map(function (option, i) {
      return _react2.default.createElement(
        'option',
        { key: i, value: option.value },
        option.label
      );
    });

    var value = this.props.value || this.state.value;

    value = parseInt(value) ? parseInt(value) : value;

    return _react2.default.createElement(
      'select',
      {
        ref: 'select',
        onChange: this.onChange,
        className: 'form-control ' + this.props.styles,
        defaultValue: value,
        value: value,
        disabled: this.props.disabled ? true : false
      },
      _react2.default.createElement(
        'option',
        { value: '' },
        this.props.default
      ),
      optionNodes
    );
  }
});

/***/ }),
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (endpoint, type, singularType) {

	var actions = {
		fetch: function fetch() {
			var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			var dispatch = arguments[1];

			console.log(type + '_FETCH');
			if (dispatch) {
				return _axios2.default.get(endpoint, { params: params }).then(function (res) {
					return dispatch({ type: type + '_FETCH', payload: res.data });
				}).catch(function (err) {
					return dispatch({ type: type + '_FAIL', payload: err.response ? err.response.data : 'unknown error' });
				});
			} else {
				return console.error('rest dispatch it is missing on fetch');
			}
		},
		store: function store() {
			var model = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			var dispatch = arguments[1];

			console.log('model', model);
			if (dispatch && typeof dispatch == 'function') {
				return _axios2.default.post(endpoint, model).then(function (res) {
					return dispatch({ type: type + '_STORE', payload: res.data });
				}).catch(function (err) {
					return dispatch({ type: type + '_FAIL', payload: err.response ? err.response.data : 'unknown error' });
				});
			} else {
				return console.error('rest dispatch it is missing on store');
			}
		},
		fetchOne: function fetchOne(id) {
			var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
			var dispatch = arguments[2];

			return _axios2.default.get(endpoint + '/' + id, { params: params }).then(function (res) {
				return dispatch({ type: type + '_SET_' + singularType, payload: res.data });
			}).catch(function (err) {
				return dispatch({ type: type + '_FAIL', payload: err.response ? err.response.data : 'unknown error' });
			});
		},
		update: function update() {
			var model = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
			var dispatch = arguments[1];

			if (dispatch && typeof dispatch == 'function') {
				return _axios2.default.put(endpoint + '/' + model.id, model).then(function (res) {
					return dispatch({ type: type + '_UPDATE', payload: res.data });
				}).catch(function (err) {
					return dispatch({ type: type + '_FAIL', payload: err.response ? err.response.data : 'unknown error' });
				});
			} else {
				return console.error('rest dispatch it is missing on update');
			}
		},
		remove: function remove(id, dispatch) {
			if (dispatch && typeof dispatch == 'function') {
				return _axios2.default.delete(endpoint + '/' + id).then(function (res) {
					return dispatch({ type: type + '_REMOVE', payload: res.data });
				}).catch(function (err) {
					return dispatch({ type: type + '_FAIL', payload: err.response ? err.response.data : 'unknown error' });
				});
			} else {
				return console.error('rest dispatch it is missing on remove');
			}
		}
	};

	return actions;
};

var _axios = __webpack_require__(19);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = cleanObject;
function cleanObject(collection) {
  var cleanOb = Object.keys(collection).reduce(function (ob, key) {
    ob[key] = '';
    return _extends({}, ob, ob);
  }, {});

  return cleanOb;
}

/***/ }),
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 54 */,
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetch = fetch;
exports.store = store;

var _axios = __webpack_require__(19);

var _axios2 = _interopRequireDefault(_axios);

var _rest_actions = __webpack_require__(41);

var _rest_actions2 = _interopRequireDefault(_rest_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TYPE = 'ACTIVITIES';
var endpoint = '/api/v1/activities';
var rest = (0, _rest_actions2.default)(endpoint, TYPE, 'ACTIVITY');

function fetch() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return function (dispatch) {
    return rest.fetch(params, dispatch);
  };
}

function store() {
  var activity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return function (dispatch) {
    return rest.store(activity, dispatch);
  };
}

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.fetch = fetch;
exports.store = store;
exports.update = update;
exports.setContact = setContact;
exports.cleanItems = cleanItems;

var _axios = __webpack_require__(19);

var _axios2 = _interopRequireDefault(_axios);

var _rest_actions = __webpack_require__(41);

var _rest_actions2 = _interopRequireDefault(_rest_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TYPE = 'CONTACTS';
var endpoint = '/api/v1/contacts';
var rest = (0, _rest_actions2.default)(endpoint, TYPE, 'CONTACT');

function fetch() {
	var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	return function (dispatch) {
		return rest.fetch(params, dispatch);
	};
}

function store(contact) {
	return function (dispatch) {
		return rest.store(contact, dispatch);
	};
}

function update(contact) {
	return function (dispatch) {
		return rest.update(contact, dispatch);
	};
}

function setContact(contact) {
	return { type: TYPE + '_SET_CONTACT', payload: contact };
}

function cleanItems() {
	return { type: TYPE + '_CLEAN_ITEMS', payload: [] };
}

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetch = fetch;
exports.fetchOne = fetchOne;
exports.store = store;
exports.update = update;
exports.updateContact = updateContact;
exports.sendMail = sendMail;
exports.fetchServices = fetchServices;
exports.storeService = storeService;
exports.updateService = updateService;
exports.removeService = removeService;

var _axios = __webpack_require__(19);

var _axios2 = _interopRequireDefault(_axios);

var _rest_actions = __webpack_require__(41);

var _rest_actions2 = _interopRequireDefault(_rest_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TYPE = 'QUOTATIONS';
var endpoint = '/api/v1/quotations';
var rest = (0, _rest_actions2.default)(endpoint, TYPE, 'QUOTATION');

function fetch() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return function (dispatch) {
    return rest.fetch(params, dispatch);
  };
}

function fetchOne(id) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return function (dispatch) {
    return rest.fetchOne(id, params, dispatch);
  };
}

function store() {
  var quotation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return function (dispatch) {
    return rest.store(quotation, dispatch);
  };
}

function update() {
  var quotation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return function (dispatch) {
    return rest.update(quotation, dispatch);
  };
}

function updateContact() {
  var contact = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return function (dispatch) {
    return new Promise(function (resolve, reject) {
      var action = { type: TYPE + '_UPDATE_CONTACT', payload: contact };
      dispatch(action);
      return resolve(action);
    });
  };
}

function sendMail(id) {
  return function (dispatch) {
    return _axios2.default.post(endpoint + '/' + id + '/sendmail').then(function (res) {
      return dispatch({ type: TYPE + '_SET_QUOTATION', payload: res.data });
    }).catch(function (err) {
      return dispatch({ type: TYPE + '_FAIL', payload: err.response.data });
    });
  };
}

//services

function fetchServices(quotationId) {
  return function (dispatch) {
    return _axios2.default.get(endpoint + '/' + quotationId + '/services').then(function (res) {
      return dispatch({ type: TYPE + '_FETCH_SERVICES', payload: res.data });
    }).catch(function (err) {
      return dispatch({ type: TYPE + '_FAIL', payload: err.response.data });
    });
  };
}

function storeService(quotationId, service) {
  return function (dispatch) {
    return _axios2.default.post(endpoint + '/' + quotationId + '/services', service).then(function (res) {
      return dispatch({ type: TYPE + '_ADD_SERVICE', payload: res.data });
    }).catch(function (err) {
      return dispatch({ type: TYPE + '_FAIL', payload: err.response.data });
    });
  };
}

function updateService(service) {
  return function (dispatch) {
    return new Promise(function (resolve, reject) {
      var action = { type: TYPE + '_UPDATE_SERVICE', payload: service };
      dispatch(action);
      return resolve(action);
    });
  };
}

function removeService(id, quotation_id) {
  return function (dispatch) {
    return _axios2.default.delete('/api/v1/services/' + id, { params: { quotation_id: quotation_id } }).then(function (res) {
      return dispatch({ type: TYPE + '_REMOVE_SERVICE', payload: res.data });
    }).catch(function (err) {
      return dispatch({ type: TYPE + '_FAIL', payload: err.response.data });
    });
  };
}

/***/ }),
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _chart = __webpack_require__(212);

var _chart2 = _interopRequireDefault(_chart);

var _uid = __webpack_require__(454);

var _uid2 = _interopRequireDefault(_uid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
  displayName: 'chart_bar',
  getInitialState: function getInitialState() {
    return {
      id: 'chart-' + (0, _uid2.default)(),
      chart: {}
    };
  },
  getDefaultProps: function getDefaultProps() {
    return {
      data: {
        type: 'bar',
        data: {}
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      },
      type: 'bar'
    };
  },
  componentDidMount: function componentDidMount() {
    var data = { data: this.props.data, options: this.props.options, type: this.props.type };
    var ctx = document.getElementById(this.state.id).getContext("2d");
    var myChart = new _chart2.default(ctx, data);
    this.setState({ chart: myChart });
  },
  componentWillReceiveProps: function componentWillReceiveProps(props) {
    if (props.data) {
      this.updateChart(props.data);
    };
  },
  componentWillUnmount: function componentWillUnmount() {
    this.state.chart.destroy();
  },
  updateChart: function updateChart(data) {
    var chart = this.state.chart;
    chart.data.datasets = data.datasets;
    chart.update();
  },
  render: function render() {
    return _react2.default.createElement('canvas', {
      id: this.state.id,
      width: '400',
      height: '400'
    });
  }
});

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _clean_object = __webpack_require__(49);

var _clean_object2 = _interopRequireDefault(_clean_object);

var _form_input = __webpack_require__(490);

var _form_input2 = _interopRequireDefault(_form_input);

var _form_select = __webpack_require__(22);

var _form_select2 = _interopRequireDefault(_form_select);

var _form_textarea = __webpack_require__(491);

var _form_textarea2 = _interopRequireDefault(_form_textarea);

var _pay_methods = __webpack_require__(833);

var _pay_methods2 = _interopRequireDefault(_pay_methods);

var _found_us = __webpack_require__(183);

var _found_us2 = _interopRequireDefault(_found_us);

var _how_call = __webpack_require__(832);

var _how_call2 = _interopRequireDefault(_how_call);

var _gender = __webpack_require__(831);

var _gender2 = _interopRequireDefault(_gender);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var contactForm = _react2.default.createClass({
  displayName: 'contactForm',
  getInitialState: function getInitialState() {
    return {
      contact: {
        company_id: null,
        comment: ''
      }
    };
  },
  handleChange: function handleChange(field, e) {
    var val = e.currentTarget.value;
    var contact = _extends({}, this.state.contact, _defineProperty({}, field, val));
    this.setState({ contact: contact });
  },
  componentWillReceiveProps: function componentWillReceiveProps(props) {
    if (props.contact && Object.keys(props.contact).length) {
      this.setState({ contact: props.contact });
    } else {
      this.setState({ contact: (0, _clean_object2.default)(this.state.contact) });
    }

    if (props.company_id) {
      this.setState({
        contact: _extends({}, this.state.contact, { company_id: props.company_id })
      });
    }
  },
  handleSubmit: function handleSubmit(e) {
    e.preventDefault();
    if (typeof this.props.onSubmit === 'function') {
      this.props.onSubmit(this.state.contact);
    }
  },
  clean: function clean(e) {
    e.preventDefault();
    this.setState({ contact: (0, _clean_object2.default)(this.state.contact) });
    if (this.props.onCancel) {
      this.props.onCancel();
    }
  },
  render: function render() {
    var contact = this.state.contact;
    var size = this.props.size || 'col-md-6';
    var btnText = this.props.btnText || _react2.default.createElement('i', { className: 'fa fa-chevron-right' });

    return _react2.default.createElement(
      'form',
      { onSubmit: this.handleSubmit },
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: "form-group " + size },
          _react2.default.createElement('input', {
            className: 'form-control',
            ref: 'name',
            onChange: this.handleChange.bind(null, 'name'),
            value: contact.name,
            placeholder: 'Nombre'
          })
        ),
        _react2.default.createElement(
          'div',
          { className: "form-group " + size },
          _react2.default.createElement('input', {
            className: 'form-control',
            ref: 'lastname',
            onChange: this.handleChange.bind(null, 'lastname'),
            value: contact.lastname,
            placeholder: 'Apellido'
          })
        ),
        _react2.default.createElement(
          'div',
          { className: "form-group " + size },
          _react2.default.createElement(_form_select2.default, {
            ref: 'gender',
            options: _gender2.default,
            'default': 'Seleccionar g\xE9nero',
            onSelectChange: this.handleChange.bind(null, 'gender'),
            value: contact.gender
          })
        ),
        _react2.default.createElement(
          'div',
          { className: "form-group " + size },
          _react2.default.createElement('input', {
            className: 'form-control',
            ref: 'email',
            onChange: this.handleChange.bind(null, 'email'),
            value: contact.email,
            placeholder: 'Correo'
          })
        ),
        _react2.default.createElement(
          'div',
          { className: "form-group " + size },
          _react2.default.createElement('input', {
            className: 'form-control',
            ref: 'title',
            onChange: this.handleChange.bind(null, 'title'),
            value: contact.title,
            placeholder: 'T\xEDtulo'
          })
        ),
        _react2.default.createElement(
          'div',
          { className: "form-group " + size },
          _react2.default.createElement('input', {
            className: 'form-control',
            ref: 'position',
            onChange: this.handleChange.bind(null, 'position'),
            value: contact.position,
            placeholder: 'Posici\xF3n'
          })
        ),
        _react2.default.createElement(
          'div',
          { className: "form-group " + size },
          _react2.default.createElement('input', {
            className: 'form-control',
            ref: 'phone_1',
            onChange: this.handleChange.bind(null, 'phone_1'),
            value: contact.phone_1,
            placeholder: 'Tel\xE9fono'
          })
        ),
        _react2.default.createElement(
          'div',
          { className: "form-group " + size },
          _react2.default.createElement('input', {
            className: 'form-control',
            ref: 'phone_2',
            onChange: this.handleChange.bind(null, 'phone_2'),
            value: contact.phone_2,
            placeholder: 'Tel\xE9fono'
          })
        ),
        _react2.default.createElement(
          'div',
          { className: "form-group " + size },
          _react2.default.createElement('input', {
            className: 'form-control',
            ref: 'mobile_1',
            onChange: this.handleChange.bind(null, 'mobile_1'),
            value: contact.mobile_1,
            placeholder: 'Celular'
          })
        ),
        _react2.default.createElement(
          'div',
          { className: "form-group " + size },
          _react2.default.createElement('input', {
            className: 'form-control',
            ref: 'mobile_2',
            onChange: this.handleChange.bind(null, 'mobile_2'),
            value: contact.mobile_2,
            placeholder: 'Celular'
          })
        ),
        _react2.default.createElement(
          'div',
          { className: "form-group " + size },
          _react2.default.createElement('input', {
            className: 'form-control',
            ref: 'fax',
            onChange: this.handleChange.bind(null, 'fax'),
            value: contact.fax,
            placeholder: 'Fax'
          })
        ),
        _react2.default.createElement(
          'div',
          { className: "form-group " + size },
          _react2.default.createElement('input', {
            className: 'form-control',
            onChange: this.handleChange.bind(null, 'birthday'),
            value: contact.birthday,
            placeholder: 'Cumplea\xF1os: 07/07/1980'
          })
        ),
        _react2.default.createElement(
          'div',
          { className: "form-group " + size },
          _react2.default.createElement(_form_select2.default, {
            ref: 'pay_method',
            options: _pay_methods2.default,
            'default': 'Seleccionar m\xE9todo de pago',
            onSelectChange: this.handleChange.bind(null, 'pay_method'),
            value: contact.pay_method
          })
        ),
        _react2.default.createElement(
          'div',
          { className: "form-group " + size },
          _react2.default.createElement(_form_select2.default, {
            ref: 'found_us',
            options: _found_us2.default,
            'default': 'Seleccionar como nos encontro',
            onSelectChange: this.handleChange.bind(null, 'found_us'),
            value: contact.found_us
          })
        ),
        _react2.default.createElement(
          'div',
          { className: "form-group " + size },
          _react2.default.createElement(_form_select2.default, {
            ref: 'who_call',
            options: _how_call2.default,
            'default': 'Seleccionar quien llam\xF3',
            onSelectChange: this.handleChange.bind(null, 'who_call'),
            value: contact.who_call
          })
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'form-group' },
        _react2.default.createElement('textarea', {
          className: 'form-control',
          onChange: this.handleChange.bind(null, 'comment'),
          value: contact.comment,
          placeholder: 'Comentario'
        })
      ),
      _react2.default.createElement(
        'div',
        { className: 'form-group col-md-12' },
        _react2.default.createElement(
          'button',
          { onClick: this.clean, className: 'btn btn-default btn-sm pull-left' },
          'Cancelar'
        ),
        _react2.default.createElement(
          'button',
          { className: 'btn btn-primary btn-sm pull-right' },
          btnText
        )
      )
    );
  }
});

exports.default = contactForm;

/***/ }),
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(864),
    getValue = __webpack_require__(888);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.fetch = fetch;
exports.store = store;
exports.update = update;
exports.setService = setService;
exports.cleanItems = cleanItems;
exports.cleanItem = cleanItem;

var _axios = __webpack_require__(19);

var _axios2 = _interopRequireDefault(_axios);

var _rest_actions = __webpack_require__(41);

var _rest_actions2 = _interopRequireDefault(_rest_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TYPE = 'SERVICES';
var endpoint = '/api/v1/services';
var rest = (0, _rest_actions2.default)(endpoint, TYPE, 'SERVICE');

function fetch() {
	var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	return function (dispatch) {
		return rest.fetch(params, dispatch);
	};
}

function store(service) {
	return function (dispatch) {
		return rest.store(service, dispatch);
	};
}

function update(service) {
	return function (dispatch) {
		return rest.update(service, dispatch);
	};
}

function setService(service) {
	return function (dispatch) {
		return new Promise(function (resolve, reject) {
			var action = { type: TYPE + '_SET_SERVICE', payload: service };
			dispatch(action);
			return resolve(action);
		});
	};
}

function cleanItems() {
	return function (dispatch) {
		return new Promise(function (resolve, reject) {
			var action = { type: TYPE + '_CLEAN_ITEMS', payload: [] };
			dispatch(action);
			return resolve(action);
		});
	};
}

function cleanItem() {
	return function (dispatch) {
		return new Promise(function (resolve, reject) {
			var action = { type: TYPE + '_CLEAN_ITEM', payload: {} };
			dispatch(action);
			return resolve(action);
		});
	};
}

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetch = fetch;
exports.fetchOne = fetchOne;
exports.store = store;
exports.update = update;
exports.updateContact = updateContact;
exports.sendMail = sendMail;
exports.fetchServices = fetchServices;
exports.storeService = storeService;
exports.updateService = updateService;
exports.removeService = removeService;

var _axios = __webpack_require__(19);

var _axios2 = _interopRequireDefault(_axios);

var _rest_actions = __webpack_require__(41);

var _rest_actions2 = _interopRequireDefault(_rest_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TYPE = 'SOLICITUDES';
var endpoint = '/api/v1/solicitudes';
var rest = (0, _rest_actions2.default)(endpoint, TYPE, 'SOLICITUD');

function fetch() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return function (dispatch) {
    return rest.fetch(params, dispatch);
  };
}

function fetchOne(id) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return function (dispatch) {
    return rest.fetchOne(id, params, dispatch);
  };
}

function store() {
  var solicitud = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return function (dispatch) {
    return rest.store(solicitud, dispatch);
  };
}

function update() {
  var solicitud = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return function (dispatch) {
    return rest.update(solicitud, dispatch);
  };
}

function updateContact() {
  var contact = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return function (dispatch) {
    return new Promise(function (resolve, reject) {
      var action = { type: TYPE + '_UPDATE_CONTACT', payload: contact };
      dispatch(action);
      return resolve(action);
    });
  };
}

function sendMail(id) {
  return function (dispatch) {
    return _axios2.default.post(endpoint + '/' + id + '/sendmail').then(function (res) {
      return dispatch({ type: TYPE + '_SET_SOLICITUD', payload: res.data });
    }).catch(function (err) {
      return dispatch({ type: TYPE + '_FAIL', payload: err.response.data });
    });
  };
}

//services

function fetchServices(solicitudId) {
  return function (dispatch) {
    return _axios2.default.get(endpoint + '/' + solicitudId + '/services').then(function (res) {
      return dispatch({ type: TYPE + '_FETCH_SERVICES', payload: res.data });
    }).catch(function (err) {
      return dispatch({ type: TYPE + '_FAIL', payload: err.response.data });
    });
  };
}

function storeService(solicitudId, service) {
  return function (dispatch) {
    return _axios2.default.post(endpoint + '/' + solicitudId + '/services', service).then(function (res) {
      return dispatch({ type: TYPE + '_ADD_SERVICE', payload: res.data });
    }).catch(function (err) {
      return dispatch({ type: TYPE + '_FAIL', payload: err.response.data });
    });
  };
}

function updateService(service) {
  return function (dispatch) {
    return new Promise(function (resolve, reject) {
      var action = { type: TYPE + '_UPDATE_SERVICE', payload: service };
      dispatch(action);
      return resolve(action);
    });
  };
}

function removeService(id, solicitudes_id) {
  return function (dispatch) {
    return _axios2.default.delete('/api/v1/services/' + id, { params: { solicitudes_id: solicitudes_id } }).then(function (res) {
      return dispatch({ type: TYPE + '_REMOVE_SERVICE', payload: res.data });
    }).catch(function (err) {
      return dispatch({ type: TYPE + '_FAIL', payload: err.response.data });
    });
  };
}

/***/ }),
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(20);

var _todos = __webpack_require__(488);

var action = _interopRequireWildcard(_todos);

var _activities = __webpack_require__(55);

var activityAction = _interopRequireWildcard(_activities);

var _form_create = __webpack_require__(558);

var _form_create2 = _interopRequireDefault(_form_create);

var _list = __webpack_require__(560);

var _list2 = _interopRequireDefault(_list);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var section = _react2.default.createClass({
  displayName: 'section',
  getInitialState: function getInitialState() {
    return {
      showForm: false
    };
  },
  componentDidMount: function componentDidMount() {
    var query = {};

    if (this.props.quotation_id) {
      query = _extends({}, query, { quotation_id: this.props.quotation_id });
    }

    if (this.props.user_id) {
      query = _extends({}, query, { user_id: this.props.user_id });
    }

    this.props.dispatch(action.fetch(query));
  },
  handleSubmit: function handleSubmit(todo) {
    var _this = this;

    if (this.props.quotation_id) {
      todo = _extends({}, todo, { quotation_id: this.props.quotation_id });
    }

    this.props.dispatch(action.store(todo)).then(function (res) {
      return _this.props.dispatch(action.sendMail(res.payload.id));
    });
  },
  handleCompleted: function handleCompleted(todo) {
    this.props.dispatch(action.completed(todo));
  },
  render: function render() {
    var todos = this.props.todos.items;
    return _react2.default.createElement(
      'div',
      { className: 'panel' },
      _react2.default.createElement(
        'div',
        { className: 'panel-heading' },
        _react2.default.createElement(
          'h5',
          null,
          'Tareas'
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'panel-body' },
        _react2.default.createElement(_form_create2.default, { onSubmit: this.handleSubmit }),
        _react2.default.createElement('hr', null),
        _react2.default.createElement(_list2.default, {
          todos: todos,
          onCompleted: this.handleCompleted
        })
      )
    );
  }
});

exports.default = (0, _reactRedux.connect)(function (store) {
  return store;
})(section);

/***/ }),
/* 104 */,
/* 105 */,
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.fetch = fetch;
exports.store = store;
exports.update = update;
exports.setCompany = setCompany;
exports.addContact = addContact;
exports.updateContact = updateContact;
exports.cleanItems = cleanItems;

var _axios = __webpack_require__(19);

var _axios2 = _interopRequireDefault(_axios);

var _rest_actions = __webpack_require__(41);

var _rest_actions2 = _interopRequireDefault(_rest_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TYPE = 'COMPANIES';
var endpoint = '/api/v1/companies';
var rest = (0, _rest_actions2.default)(endpoint, TYPE, 'COMPANY');

function fetch() {
	var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	return function (dispatch) {
		return rest.fetch(params, dispatch);
	};
}

function store(company) {
	return function (dispatch) {
		return rest.store(company, dispatch);
	};
}

function update(company) {
	return function (dispatch) {
		return rest.update(company, dispatch);
	};
}

function setCompany(company) {
	return function (dispatch) {
		return new Promise(function (resolve, reject) {
			var action = { type: TYPE + '_SET_COMPANY', payload: company };
			dispatch(action);
			return resolve(action);
		});
	};
}

function addContact(company, contact) {
	return function (dispatch) {
		return new Promise(function (resolve, reject) {
			var action = { type: TYPE + '_ADD_CONTACT', payload: { company: company, contact: contact } };
			dispatch(action);
			return resolve(action);
		});
	};
}

function updateContact(company, contact) {
	return function (dispatch) {
		return new Promise(function (resolve, reject) {
			var action = { type: TYPE + '_UPDATE_CONTACT', payload: { company: company, contact: contact } };
			dispatch(action);
			return resolve(action);
		});
	};
}

function cleanItems() {
	return { type: TYPE + '_CLEAN_ITEMS', payload: [] };
}

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.fetch = fetch;
exports.store = store;
exports.update = update;
exports.remove = remove;
exports.duplicate = duplicate;

var _axios = __webpack_require__(19);

var _axios2 = _interopRequireDefault(_axios);

var _rest_actions = __webpack_require__(41);

var _rest_actions2 = _interopRequireDefault(_rest_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TYPE = 'PRODUCTS';
var endpoint = '/api/v1/products';
var rest = (0, _rest_actions2.default)(endpoint, TYPE);

function fetch() {
	var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	return function (dispatch) {
		return rest.fetch(params, dispatch);
	};
}

function store(product) {
	return function (dispatch) {
		return rest.store(product, dispatch);
	};
}

function update(product) {
	return function (dispatch) {
		return rest.update(product, dispatch);
	};
}

function remove(id) {
	return function (dispatch) {
		return rest.remove(id, dispatch);
	};
}

function duplicate(id) {
	return function (dispatch) {
		return _axios2.default.post(endpoint + '/' + id + '/duplicate').then(function (res) {
			return dispatch({ type: TYPE + '_STORE', payload: res.data });
		}).catch(function (err) {
			return dispatch({ type: TYPE + '_FAIL', payload: err.response.data });
		});
	};
}

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetch = fetch;
exports.store = store;

var _axios = __webpack_require__(19);

var _axios2 = _interopRequireDefault(_axios);

var _rest_actions = __webpack_require__(41);

var _rest_actions2 = _interopRequireDefault(_rest_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TYPE = 'TRACKINGS';
var endpoint = '/api/v1/trackings';
var rest = (0, _rest_actions2.default)(endpoint, TYPE, 'TRACKING');

function fetch() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return function (dispatch) {
    return rest.fetch(params, dispatch);
  };
}

function store(product) {
  return function (dispatch) {
    return rest.store(product, dispatch);
  };
}

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _flatpickr = __webpack_require__(825);

var _flatpickr2 = _interopRequireDefault(_flatpickr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DateTime = _react2.default.createClass({
  displayName: 'DateTime',
  getInitialState: function getInitialState() {
    return {
      lastDate: '',
      active: false
    };
  },
  getDefaultProps: function getDefaultProps() {
    return {
      styles: '',
      placeholder: '',
      format: '',
      altFormat: '',
      enableTime: false,
      time_24hr: false,
      altInput: false
    };
  },
  triggerChange: function triggerChange(dateObj, dateStr) {
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(dateObj, dateStr);
    }
  },
  handleChange: function handleChange(dateObj, dateStr) {
    this.setState({ lastDate: dateStr });
    this.triggerChange(dateObj, dateStr);
  },
  shouldComponentUpdate: function shouldComponentUpdate() {
    return false;
  },
  componentDidMount: function componentDidMount() {
    var props = this.props;


    var options = {
      enableTime: props.enableTime,
      time_24hr: props.time_24hr,
      altFormat: props.altFormat,
      altInput: props.altInput,
      onChange: this.handleChange
    };

    new _flatpickr2.default(this.node, options);
  },
  render: function render() {
    var _this = this;

    return _react2.default.createElement('input', {
      ref: function ref(node) {
        return _this.node = node;
      },
      placeholder: this.props.placeholder,
      className: '' + this.props.styles
    });
  }
});

exports.default = DateTime;

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.storeActivity = storeActivity;

var _axios = __webpack_require__(19);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function storeActivity(data) {
    // data = {
    //   message: "cambio tipo a Alquiler",
    //   quotation_id:"37287"
    // };

    _axios2.default.post('/api/v1/activities').send(data).end(function (err, res) {
        console.log(res.body);
    });
}

/***/ }),
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */
/***/ (function(module, exports) {

module.exports = [{"value":"Liliana Bolívar","label":"Liliana Bolívar"},{"value":"Diego Peña","label":"Diego Peña"},{"value":"Zuleira Clareth Ramirez A","label":"Zuleira Clareth Ramirez A."},{"value":"No aplica","label":"No aplica"},{"value":"Otros","label":"Otros"}]

/***/ }),
/* 127 */
/***/ (function(module, exports) {

module.exports = [{"value":"Activo","label":"Activo"},{"value":"Inactivo","label":"Inactivo"},{"value":"Nuevo","label":"Nuevo"}]

/***/ }),
/* 128 */
/***/ (function(module, exports) {

module.exports = [{"value":"Gana4","label":"Gana 4"},{"value":"Desktops","label":"Desktops"},{"value":"RentingAIO","label":"Renting AIO"},{"value":"RentingTablets","label":"Renting Tablets"},{"value":"Gana3","label":"Gana 3"},{"value":"Desktops-promo","label":"Desktops Promo"},{"value":"multifuncionales-promo","label":"Multifuncionales Promo"},{"value":"xbox-y-playstation-promo","label":"Xbox y PlayStation Promo"},{"value":"Laptops","label":"Laptops"},{"value":"Apple","label":"Apple"},{"value":"Servers","label":"Servers"},{"value":"IT Service","label":"IT Service"},{"value":"IT Service 24/7","label":"IT  Service 24/7"},{"value":"Rescate Online","label":"Rescate Online"},{"value":"Discos Duros Seguros","label":"Discos Duros Seguros"},{"value":"Networks","label":"Networks"},{"value":"Complements","label":"Complements"},{"value":"Printers","label":"Printers"},{"value":"Tablets","label":"Tablets"},{"value":"Video Beams","label":"Video Beams"},{"value":"Televisores","label":"Televisores"},{"value":"Sonido","label":"Sonido"},{"value":"Xbox y PS4","label":"Xbox y PS4"},{"value":"Scanners","label":"Scanners"},{"value":"Redes","label":"Redes"},{"value":"UPS","label":"UPS"},{"value":"Adicional","label":"Adicional"}]

/***/ }),
/* 129 */
/***/ (function(module, exports) {

module.exports = [{"value":"Alquiler","label":"Alquiler"},{"value":"Servicio","label":"Servicio"}]

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(899),
    listCacheDelete = __webpack_require__(900),
    listCacheGet = __webpack_require__(901),
    listCacheHas = __webpack_require__(902),
    listCacheSet = __webpack_require__(903);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 131 */,
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(190);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(896);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(87);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(137);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(293),
    isLength = __webpack_require__(191);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(86),
    isObjectLike = __webpack_require__(88);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(852),
    baseKeys = __webpack_require__(866),
    isArrayLike = __webpack_require__(136);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! @preserve
 * numeral.js
 * version : 1.5.6
 * author : Adam Draper
 * license : MIT
 * http://adamwdraper.github.com/Numeral-js/
 */

(function() {

    /************************************
        Variables
    ************************************/

    var numeral,
        VERSION = '1.5.6',
        // internal storage for language config files
        languages = {},
        defaults = {
            currentLanguage: 'en',
            zeroFormat: null,
            nullFormat: null,
            defaultFormat: '0,0'
        },
        options = {
            currentLanguage: defaults.currentLanguage,
            zeroFormat: defaults.zeroFormat,
            nullFormat: defaults.nullFormat,
            defaultFormat: defaults.defaultFormat
        },
        byteSuffixes = {
            bytes: ['B','KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
            iec: ['B','KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB']
        };


    /************************************
        Constructors
    ************************************/


    // Numeral prototype object
    function Numeral(number) {
        this._value = number;
    }

    /**
     * Implementation of toFixed() that treats floats more like decimals
     *
     * Fixes binary rounding issues (eg. (0.615).toFixed(2) === '0.61') that present
     * problems for accounting- and finance-related software.
     */
    function toFixed (value, maxDecimals, roundingFunction, optionals) {
        var splitValue = value.toString().split('.'),
            minDecimals = maxDecimals - (optionals || 0),
            boundedPrecision,
            optionalsRegExp,
            power,
            output;

        // Use the smallest precision value possible to avoid errors from floating point representation
        if (splitValue.length === 2) {
          boundedPrecision = Math.min(Math.max(splitValue[1].length, minDecimals), maxDecimals);
        } else {
          boundedPrecision = minDecimals;
        }

        power = Math.pow(10, boundedPrecision);

        //roundingFunction = (roundingFunction !== undefined ? roundingFunction : Math.round);
        // Multiply up by precision, round accurately, then divide and use native toFixed():
        output = (roundingFunction(value * power) / power).toFixed(boundedPrecision);

        if (optionals > maxDecimals - boundedPrecision) {
            optionalsRegExp = new RegExp('\\.?0{1,' + (optionals - (maxDecimals - boundedPrecision)) + '}$');
            output = output.replace(optionalsRegExp, '');
        }

        return output;
    }

    /************************************
        Formatting
    ************************************/

    // determine what type of formatting we need to do
    function formatNumeral(n, format, roundingFunction) {
        var output;

        if (n._value === 0 && options.zeroFormat !== null) {
            output = options.zeroFormat;
        } else if (n._value === null && options.nullFormat !== null) {
            output = options.nullFormat;
        } else {
            // figure out what kind of format we are dealing with
            if (format.indexOf('$') > -1) {
                output = formatCurrency(n, format, roundingFunction);
            } else if (format.indexOf('%') > -1) {
                output = formatPercentage(n, format, roundingFunction);
            } else if (format.indexOf(':') > -1) {
                output = formatTime(n, format);
            } else if (format.indexOf('b') > -1 || format.indexOf('ib') > -1) {
                output = formatBytes(n, format, roundingFunction);
            } else if (format.indexOf('o') > -1) {
                output = formatOrdinal(n, format, roundingFunction);
            } else {
                output = formatNumber(n._value, format, roundingFunction);
            }
        }

        return output;
    }

    function formatCurrency(n, format, roundingFunction) {
        var symbolIndex = format.indexOf('$'),
            openParenIndex = format.indexOf('('),
            minusSignIndex = format.indexOf('-'),
            space = '',
            spliceIndex,
            output;

        // check for space before or after currency
        if (format.indexOf(' $') > -1) {
            space = ' ';
            format = format.replace(' $', '');
        } else if (format.indexOf('$ ') > -1) {
            space = ' ';
            format = format.replace('$ ', '');
        } else {
            format = format.replace('$', '');
        }

        // format the number
        output = formatNumber(n._value, format, roundingFunction, false);

        // position the symbol
        if (symbolIndex <= 1) {
            if (output.indexOf('(') > -1 || output.indexOf('-') > -1) {
                output = output.split('');
                spliceIndex = 1;
                if (symbolIndex < openParenIndex || symbolIndex < minusSignIndex) {
                    // the symbol appears before the "(" or "-"
                    spliceIndex = 0;
                }
                output.splice(spliceIndex, 0, languages[options.currentLanguage].currency.symbol + space);
                output = output.join('');
            } else {
                output = languages[options.currentLanguage].currency.symbol + space + output;
            }
        } else {
            if (output.indexOf(')') > -1) {
                output = output.split('');
                output.splice(-1, 0, space + languages[options.currentLanguage].currency.symbol);
                output = output.join('');
            } else {
                output = output + space + languages[options.currentLanguage].currency.symbol;
            }
        }

        return output;
    }

    function formatPercentage(n, format, roundingFunction) {
        var space = '',
            output,
            value = n._value * 100;

        // check for space before %
        if (format.indexOf(' %') > -1) {
            space = ' ';
            format = format.replace(' %', '');
        } else {
            format = format.replace('%', '');
        }

        output = formatNumber(value, format, roundingFunction);

        if (output.indexOf(')') > -1) {
            output = output.split('');
            output.splice(-1, 0, space + '%');
            output = output.join('');
        } else {
            output = output + space + '%';
        }

        return output;
    }

    function formatBytes(n, format, roundingFunction) {
        var output,
            suffixes = format.indexOf('ib') > -1 ? byteSuffixes.iec : byteSuffixes.bytes,
            value = n._value,
            suffix = '',
            power,
            min,
            max;

        // check for space before
        if (format.indexOf(' b') > -1 || format.indexOf(' ib') > -1) {
            suffix = ' ';
            format = format.replace(' ib', '').replace(' b', '');
        } else {
            format = format.replace('ib', '').replace('b', '');
        }

        for (power = 0; power <= suffixes.length; power++) {
            min = Math.pow(1024, power);
            max = Math.pow(1024, power + 1);

            if (value === null || value === 0 || value >= min && value < max) {
                suffix += suffixes[power];

                if (min > 0) {
                    value = value / min;
                }

                break;
            }
        }

        output = formatNumber(value, format, roundingFunction);

        return output + suffix;
    }

    function formatOrdinal(n, format, roundingFunction) {
        var output,
            ordinal = '';

        // check for space before
        if (format.indexOf(' o') > -1) {
            ordinal = ' ';
            format = format.replace(' o', '');
        } else {
            format = format.replace('o', '');
        }

        ordinal += languages[options.currentLanguage].ordinal(n._value);

        output = formatNumber(n._value, format, roundingFunction);

        return output + ordinal;
    }

    function formatTime(n) {
        var hours = Math.floor(n._value / 60 / 60),
            minutes = Math.floor((n._value - (hours * 60 * 60)) / 60),
            seconds = Math.round(n._value - (hours * 60 * 60) - (minutes * 60));

        return hours + ':' + ((minutes < 10) ? '0' + minutes : minutes) + ':' + ((seconds < 10) ? '0' + seconds : seconds);
    }

    function formatNumber(value, format, roundingFunction) {
        var negP = false,
            signed = false,
            optDec = false,
            abbr = '',
            abbrK = false, // force abbreviation to thousands
            abbrM = false, // force abbreviation to millions
            abbrB = false, // force abbreviation to billions
            abbrT = false, // force abbreviation to trillions
            abbrForce = false, // force abbreviation
            abs,
            min,
            max,
            power,
            w,
            precision,
            thousands,
            d = '',
            neg = false;

        if (value === null) {
            value = 0;
        }

        abs = Math.abs(value);

        // see if we should use parentheses for negative number or if we should prefix with a sign
        // if both are present we default to parentheses
        if (format.indexOf('(') > -1) {
            negP = true;
            format = format.slice(1, -1);
        } else if (format.indexOf('+') > -1) {
            signed = true;
            format = format.replace(/\+/g, '');
        }

        // see if abbreviation is wanted
        if (format.indexOf('a') > -1) {
            // check if abbreviation is specified
            abbrK = format.indexOf('aK') >= 0;
            abbrM = format.indexOf('aM') >= 0;
            abbrB = format.indexOf('aB') >= 0;
            abbrT = format.indexOf('aT') >= 0;
            abbrForce = abbrK || abbrM || abbrB || abbrT;

            // check for space before abbreviation
            if (format.indexOf(' a') > -1) {
                abbr = ' ';
            }

            format = format.replace(new RegExp(abbr + 'a[KMBT]?'), '');

            if (abs >= Math.pow(10, 12) && !abbrForce || abbrT) {
                // trillion
                abbr = abbr + languages[options.currentLanguage].abbreviations.trillion;
                value = value / Math.pow(10, 12);
            } else if (abs < Math.pow(10, 12) && abs >= Math.pow(10, 9) && !abbrForce || abbrB) {
                // billion
                abbr = abbr + languages[options.currentLanguage].abbreviations.billion;
                value = value / Math.pow(10, 9);
            } else if (abs < Math.pow(10, 9) && abs >= Math.pow(10, 6) && !abbrForce || abbrM) {
                // million
                abbr = abbr + languages[options.currentLanguage].abbreviations.million;
                value = value / Math.pow(10, 6);
            } else if (abs < Math.pow(10, 6) && abs >= Math.pow(10, 3) && !abbrForce || abbrK) {
                // thousand
                abbr = abbr + languages[options.currentLanguage].abbreviations.thousand;
                value = value / Math.pow(10, 3);
            }
        }


        if (format.indexOf('[.]') > -1) {
            optDec = true;
            format = format.replace('[.]', '.');
        }

        w = value.toString().split('.')[0];
        precision = format.split('.')[1];
        thousands = format.indexOf(',');

        if (precision) {
            if (precision.indexOf('[') > -1) {
                precision = precision.replace(']', '');
                precision = precision.split('[');
                d = toFixed(value, (precision[0].length + precision[1].length), roundingFunction, precision[1].length);
            } else {
                d = toFixed(value, precision.length, roundingFunction);
            }

            w = d.split('.')[0];

            if (d.indexOf('.') > -1) {
                d = languages[options.currentLanguage].delimiters.decimal + d.split('.')[1];
            } else {
                d = '';
            }

            if (optDec && Number(d.slice(1)) === 0) {
                d = '';
            }
        } else {
            w = toFixed(value, null, roundingFunction);
        }

        // format number
        if (w.indexOf('-') > -1) {
            w = w.slice(1);
            neg = true;
        }

        if (thousands > -1) {
            w = w.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + languages[options.currentLanguage].delimiters.thousands);
        }

        if (format.indexOf('.') === 0) {
            w = '';
        }

        return ((negP && neg) ? '(' : '') + ((!negP && neg) ? '-' : '') + ((!neg && signed) ? '+' : '') + w + d + ((abbr) ? abbr : '') + ((negP && neg) ? ')' : '');
    }


    /************************************
        Unformatting
    ************************************/

    // revert to number
    function unformatNumeral(n, string) {
        var stringOriginal = string,
            thousandRegExp,
            millionRegExp,
            billionRegExp,
            trillionRegExp,
            bytesMultiplier = false,
            power,
            value;

        if (string.indexOf(':') > -1) {
            value = unformatTime(string);
        } else {
            if (string === options.zeroFormat || string === options.nullFormat) {
                value = 0;
            } else {
                if (languages[options.currentLanguage].delimiters.decimal !== '.') {
                    string = string.replace(/\./g, '').replace(languages[options.currentLanguage].delimiters.decimal, '.');
                }

                // see if abbreviations are there so that we can multiply to the correct number
                thousandRegExp = new RegExp('[^a-zA-Z]' + languages[options.currentLanguage].abbreviations.thousand + '(?:\\)|(\\' + languages[options.currentLanguage].currency.symbol + ')?(?:\\))?)?$');
                millionRegExp = new RegExp('[^a-zA-Z]' + languages[options.currentLanguage].abbreviations.million + '(?:\\)|(\\' + languages[options.currentLanguage].currency.symbol + ')?(?:\\))?)?$');
                billionRegExp = new RegExp('[^a-zA-Z]' + languages[options.currentLanguage].abbreviations.billion + '(?:\\)|(\\' + languages[options.currentLanguage].currency.symbol + ')?(?:\\))?)?$');
                trillionRegExp = new RegExp('[^a-zA-Z]' + languages[options.currentLanguage].abbreviations.trillion + '(?:\\)|(\\' + languages[options.currentLanguage].currency.symbol + ')?(?:\\))?)?$');

                // see if bytes are there so that we can multiply to the correct number
                for (power = 1; power <= byteSuffixes.bytes.length; power++) {
                    bytesMultiplier = ((string.indexOf(byteSuffixes.bytes[power]) > -1) || (string.indexOf(byteSuffixes.iec[power]) > -1))? Math.pow(1024, power) : false;

                    if (bytesMultiplier) {
                        break;
                    }
                }

                // do some math to create our number
                value = bytesMultiplier ? bytesMultiplier : 1;
                value *= stringOriginal.match(thousandRegExp) ? Math.pow(10, 3) : 1;
                value *= stringOriginal.match(millionRegExp) ? Math.pow(10, 6) : 1;
                value *= stringOriginal.match(billionRegExp) ? Math.pow(10, 9) : 1;
                value *= stringOriginal.match(trillionRegExp) ? Math.pow(10, 12) : 1;
                // check for percentage
                value *= string.indexOf('%') > -1 ? 0.01 : 1;
                // check for negative number
                value *= (string.split('-').length + Math.min(string.split('(').length - 1, string.split(')').length - 1)) % 2 ? 1 : -1;
                // remove non numbers
                value *= Number(string.replace(/[^0-9\.]+/g, ''));
                // round if we are talking about bytes
                value = bytesMultiplier ? Math.ceil(value) : value;
            }
        }

        n._value = value;

        return n._value;
    }
    function unformatTime(string) {
        var timeArray = string.split(':'),
            seconds = 0;
        // turn hours and minutes into seconds and add them all up
        if (timeArray.length === 3) {
            // hours
            seconds = seconds + (Number(timeArray[0]) * 60 * 60);
            // minutes
            seconds = seconds + (Number(timeArray[1]) * 60);
            // seconds
            seconds = seconds + Number(timeArray[2]);
        } else if (timeArray.length === 2) {
            // minutes
            seconds = seconds + (Number(timeArray[0]) * 60);
            // seconds
            seconds = seconds + Number(timeArray[1]);
        }
        return Number(seconds);
    }


    /************************************
        Top Level Functions
    ************************************/

    numeral = function(input) {
        if (numeral.isNumeral(input)) {
            input = input.value();
        } else if (input === 0 || typeof input === 'undefined') {
            input = 0;
        } else if (input === null) {
            input = null;
        } else if (!Number(input)) {
            input = numeral.fn.unformat(input);
        } else {
            input = Number(input);
        }

        return new Numeral(input);
    };

    // version number
    numeral.version = VERSION;

    // compare numeral object
    numeral.isNumeral = function(obj) {
        return obj instanceof Numeral;
    };


    // This function will load languages and then set the global language.  If
    // no arguments are passed in, it will simply return the current global
    // language key.
    numeral.language = function(key, values) {
        if (!key) {
            return options.currentLanguage;
        }

        key = key.toLowerCase();

        if (key && !values) {
            if (!languages[key]) {
                throw new Error('Unknown language : ' + key);
            }

            options.currentLanguage = key;
        }

        if (values || !languages[key]) {
            loadLanguage(key, values);
        }

        return numeral;
    };

    numeral.reset = function() {
        for (var property in defaults) {
            options[property] = defaults[property];
        }
    };

    // This function provides access to the loaded language data.  If
    // no arguments are passed in, it will simply return the current
    // global language object.
    numeral.languageData = function(key) {
        if (!key) {
            return languages[options.currentLanguage];
        }

        if (!languages[key]) {
            throw new Error('Unknown language : ' + key);
        }

        return languages[key];
    };

    numeral.language('en', {
        delimiters: {
            thousands: ',',
            decimal: '.'
        },
        abbreviations: {
            thousand: 'k',
            million: 'm',
            billion: 'b',
            trillion: 't'
        },
        ordinal: function(number) {
            var b = number % 10;
            return (~~(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
        },
        currency: {
            symbol: '$'
        }
    });

    numeral.zeroFormat = function(format) {
        options.zeroFormat = typeof(format) === 'string' ? format : null;
    };

    numeral.nullFormat = function (format) {
        options.nullFormat = typeof(format) === 'string' ? format : null;
    };

    numeral.defaultFormat = function(format) {
        options.defaultFormat = typeof(format) === 'string' ? format : '0.0';
    };

    numeral.validate = function(val, culture) {
        var _decimalSep,
            _thousandSep,
            _currSymbol,
            _valArray,
            _abbrObj,
            _thousandRegEx,
            languageData,
            temp;

        //coerce val to string
        if (typeof val !== 'string') {
            val += '';
            if (console.warn) {
                console.warn('Numeral.js: Value is not string. It has been co-erced to: ', val);
            }
        }

        //trim whitespaces from either sides
        val = val.trim();

        //if val is just digits return true
        if ( !! val.match(/^\d+$/)) {
            return true;
        }

        //if val is empty return false
        if (val === '') {
            return false;
        }

        //get the decimal and thousands separator from numeral.languageData
        try {
            //check if the culture is understood by numeral. if not, default it to current language
            languageData = numeral.languageData(culture);
        } catch (e) {
            languageData = numeral.languageData(numeral.language());
        }

        //setup the delimiters and currency symbol based on culture/language
        _currSymbol = languageData.currency.symbol;
        _abbrObj = languageData.abbreviations;
        _decimalSep = languageData.delimiters.decimal;
        if (languageData.delimiters.thousands === '.') {
            _thousandSep = '\\.';
        } else {
            _thousandSep = languageData.delimiters.thousands;
        }

        // validating currency symbol
        temp = val.match(/^[^\d]+/);
        if (temp !== null) {
            val = val.substr(1);
            if (temp[0] !== _currSymbol) {
                return false;
            }
        }

        //validating abbreviation symbol
        temp = val.match(/[^\d]+$/);
        if (temp !== null) {
            val = val.slice(0, -1);
            if (temp[0] !== _abbrObj.thousand && temp[0] !== _abbrObj.million && temp[0] !== _abbrObj.billion && temp[0] !== _abbrObj.trillion) {
                return false;
            }
        }

        _thousandRegEx = new RegExp(_thousandSep + '{2}');

        if (!val.match(/[^\d.,]/g)) {
            _valArray = val.split(_decimalSep);
            if (_valArray.length > 2) {
                return false;
            } else {
                if (_valArray.length < 2) {
                    return ( !! _valArray[0].match(/^\d+.*\d$/) && !_valArray[0].match(_thousandRegEx));
                } else {
                    if (_valArray[0].length === 1) {
                        return ( !! _valArray[0].match(/^\d+$/) && !_valArray[0].match(_thousandRegEx) && !! _valArray[1].match(/^\d+$/));
                    } else {
                        return ( !! _valArray[0].match(/^\d+.*\d$/) && !_valArray[0].match(_thousandRegEx) && !! _valArray[1].match(/^\d+$/));
                    }
                }
            }
        }

        return false;
    };

    /************************************
        Helpers
    ************************************/

    function loadLanguage(key, values) {
        languages[key] = values;
    }

    /************************************
        Floating-point helpers
    ************************************/

    // The floating-point helper functions and implementation
    // borrows heavily from sinful.js: http://guipn.github.io/sinful.js/

    // Production steps of ECMA-262, Edition 5, 15.4.4.21
    // Reference: http://es5.github.io/#x15.4.4.21
    if (!Array.prototype.reduce) {
        Array.prototype.reduce = function(callback /*, initialValue*/) {
            'use strict';
            if (this === null) {
                throw new TypeError('Array.prototype.reduce called on null or undefined');
            }

            if (typeof callback !== 'function') {
                throw new TypeError(callback + ' is not a function');
            }

            var t = Object(this), len = t.length >>> 0, k = 0, value;

            if (arguments.length === 2) {
                value = arguments[1];
            } else {
                while (k < len && !(k in t)) {
                    k++;
                }

                if (k >= len) {
                    throw new TypeError('Reduce of empty array with no initial value');
                }

                value = t[k++];
            }
            for (; k < len; k++) {
                if (k in t) {
                    value = callback(value, t[k], k, t);
                }
            }
            return value;
        };
    }

    /**
     * Computes the multiplier necessary to make x >= 1,
     * effectively eliminating miscalculations caused by
     * finite precision.
     */
    function multiplier(x) {
        var parts = x.toString().split('.');
        if (parts.length < 2) {
            return 1;
        }
        return Math.pow(10, parts[1].length);
    }

    /**
     * Given a variable number of arguments, returns the maximum
     * multiplier that must be used to normalize an operation involving
     * all of them.
     */
    function correctionFactor() {
        var args = Array.prototype.slice.call(arguments);
        return args.reduce(function(prev, next) {
            var mp = multiplier(prev),
                mn = multiplier(next);
            return mp > mn ? mp : mn;
        }, -Infinity);
    }


    /************************************
        Numeral Prototype
    ************************************/


    numeral.fn = Numeral.prototype = {

        clone: function() {
            return numeral(this);
        },

        format: function (inputString, roundingFunction) {
            return formatNumeral(this,
                inputString ? inputString : options.defaultFormat,
                roundingFunction !== undefined ? roundingFunction : Math.round
            );
        },

        unformat: function (inputString) {
            if (Object.prototype.toString.call(inputString) === '[object Number]') {
                return inputString;
            }

            return unformatNumeral(this, inputString ? inputString : options.defaultFormat);
        },

        value: function() {
            return this._value;
        },

        valueOf: function() {
            return this._value;
        },

        set: function(value) {
            this._value = Number(value);
            return this;
        },

        add: function(value) {
            var corrFactor = correctionFactor.call(null, this._value, value);

            function cback(accum, curr, currI, O) {
                return accum + corrFactor * curr;
            }
            this._value = [this._value, value].reduce(cback, 0) / corrFactor;
            return this;
        },

        subtract: function(value) {
            var corrFactor = correctionFactor.call(null, this._value, value);

            function cback(accum, curr, currI, O) {
                return accum - corrFactor * curr;
            }
            this._value = [value].reduce(cback, this._value * corrFactor) / corrFactor;
            return this;
        },

        multiply: function(value) {
            function cback(accum, curr, currI, O) {
                var corrFactor = correctionFactor(accum, curr);
                return (accum * corrFactor) * (curr * corrFactor) /
                    (corrFactor * corrFactor);
            }
            this._value = [this._value, value].reduce(cback, 1);
            return this;
        },

        divide: function(value) {
            function cback(accum, curr, currI, O) {
                var corrFactor = correctionFactor(accum, curr);
                return (accum * corrFactor) / (curr * corrFactor);
            }
            this._value = [this._value, value].reduce(cback);
            return this;
        },

        difference: function(value) {
            return Math.abs(numeral(this._value).subtract(value).value());
        }

    };

    /************************************
        Exposing Numeral
    ************************************/

    // CommonJS module is defined
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = numeral;
    }

    /*global ender:false */
    if (typeof ender === 'undefined') {
        // here, `this` means `window` in the browser, or `global` on the server
        // add `numeral` as a global object via a string identifier,
        // for Closure Compiler 'advanced' mode
        this['numeral'] = numeral;
    }

    /*global define:false */
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
            return numeral;
        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
}).call(this);


/***/ }),
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

/*
React-Quill v1.0.0
https://github.com/zenoamaro/react-quill
*/
var Quill = __webpack_require__(104);
var Component = __webpack_require__(1012);

module.exports = Component;
module.exports.default = Component;
module.exports.Quill = Quill;
module.exports.Mixin = __webpack_require__(442);
module.exports.Toolbar = __webpack_require__(1013);


/***/ }),
/* 148 */,
/* 149 */,
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _quill = __webpack_require__(104);

var _quill2 = _interopRequireDefault(_quill);

var _uid = __webpack_require__(454);

var _uid2 = _interopRequireDefault(_uid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Editor = _react2.default.createClass({
  displayName: 'Editor',
  getInitialState: function getInitialState() {
    return {
      id: 'editor-' + (0, _uid2.default)(),
      idToolbar: 'toolbar-' + (0, _uid2.default)(),
      editor: {},
      value: ''
    };
  },
  getDefaultProps: function getDefaultProps() {
    return {
      style: {}
    };
  },
  componentDidMount: function componentDidMount() {
    var editor = this.mountQuill();
    this.setState({ editor: editor });
  },
  mountQuill: function mountQuill() {
    var editor = new _quill2.default('#' + this.state.id, {
      theme: 'snow',
      modules: {
        toolbar: {
          container: [['bold', 'italic', 'underline', 'strike'], // toggled buttons
          ['blockquote', 'code-block'], [{ 'header': 1 }, { 'header': 2 }], // custom button values
          [{ 'list': 'ordered' }, { 'list': 'bullet' }], [{ 'script': 'sub' }, { 'script': 'super' }], // superscript/subscript
          [{ 'indent': '-1' }, { 'indent': '+1' }], // outdent/indent
          [{ 'direction': 'rtl' }], // text direction

          [{ 'size': ['small', false, 'large', 'huge'] }], // custom dropdown
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }], [{ 'color': [] }, { 'background': [] }], // dropdown with defaults from theme
          [{ 'font': [] }], [{ 'align': [] }], ['clean'] // remove formatting button

          ]
        }
      }
    });

    this.getChanges(editor);
    return editor;
  },
  getChanges: function getChanges(editor) {
    var _this = this;

    editor.on('text-change', function (delta, source) {
      var html = editor.root.innerHTML;
      if (typeof _this.props.onChange === 'function') {
        return _this.props.onChange(html);
      }
    });
  },
  destroyEditor: function destroyEditor(editor) {
    editor.destroy();
  },
  componentWillUnmount: function componentWillUnmount() {
    if (this.state.editor) {
      this.destroyEditor(this.state.editor);
    }
  },
  setContent: function setContent(html) {
    var editor = this.state.editor;
    var range = editor.getSelection();
    editor.pasteHTML(html);
    editor.setSelection(range);
  },
  componentWillReceiveProps: function componentWillReceiveProps(props) {
    if (props.value && this.props.value !== props.value) {
      this.setContent(props.value);
    }
  },
  handleChange: function handleChange(html) {
    console.log(html);
    if (typeof this.props.onChange === 'function') {
      return this.props.onChange(html);
    }
  },
  getEditorContents: function getEditorContents() {
    return this.props.value == null ? '' : this.props.value;
  },
  shouldComponentUpdate: function shouldComponentUpdate() {
    return false;
  },
  render: function render() {
    return _react2.default.createElement(
      'div',
      { className: 'editor' },
      _react2.default.createElement(
        'div',
        { id: this.state.id, style: this.props.style },
        _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: this.getEditorContents() } })
      )
    );
  }
});

exports.default = Editor;

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
  displayName: 'loader',
  getDefaultProps: function getDefaultProps() {
    return {
      show: false
    };
  },
  render: function render() {
    var style = this.props.show ? { color: '#3B2B7F', margin: '15px auto', display: 'block' } : { display: 'none' };

    return _react2.default.createElement('i', { className: 'fa fa-spinner fa-pulse fa-3x fa-fw', style: style });
  }
});

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _clean_object = __webpack_require__(49);

var _clean_object2 = _interopRequireDefault(_clean_object);

var _form_select = __webpack_require__(22);

var _form_select2 = _interopRequireDefault(_form_select);

var _sectors = __webpack_require__(835);

var _sectors2 = _interopRequireDefault(_sectors);

var _cities = __webpack_require__(830);

var _cities2 = _interopRequireDefault(_cities);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CompaniesForm = _react2.default.createClass({
  displayName: 'CompaniesForm',
  getInitialState: function getInitialState() {
    return {
      company: {}
    };
  },
  componentDidMount: function componentDidMount() {
    if (this.props.company && Object.keys(this.props.company).length) {
      company = this.props.company;
      this.setState({ company: company });
    }
  },
  componentWillReceiveProps: function componentWillReceiveProps(props) {
    var company = props.company;


    if (company && Object.keys(company).length) {
      this.setState({ company: company });
    }
  },
  clean: function clean(e) {
    e.preventDefault();

    this.setState({ company: (0, _clean_object2.default)(this.state.company) });
    if (this.props.onCancel) {
      this.props.onCancel();
    }
  },
  handleChange: function handleChange(field, e) {
    var refs = this.refs;

    var val = e.currentTarget.value;
    var company = _extends({}, this.state.company, _defineProperty({}, field, val));
    this.setState({ company: company });
  },
  handleSubmit: function handleSubmit(e) {
    e.preventDefault();
    var company = this.state.company;
    if (typeof this.props.onSubmit === 'function') {
      this.props.onSubmit(company);
    }
  },
  render: function render() {
    var company = this.state.company;
    var btnCleanText = this.props.btnCleanText || 'limpiar';
    var btnStoreText = this.props.btnStoreText || _react2.default.createElement('i', { className: 'fa fa-chevron-right' });

    return _react2.default.createElement(
      'form',
      { onSubmit: function onSubmit(e) {
          return e.preventDefault();
        } },
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'form-group col-sm-6' },
          _react2.default.createElement('input', {
            className: 'form-control',
            ref: 'name',
            onChange: this.handleChange.bind(null, 'name'),
            value: company.name,
            placeholder: 'Raz\xF3n social'
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group col-sm-6' },
          _react2.default.createElement('input', {
            className: 'form-control',
            ref: 'nit',
            onChange: this.handleChange.bind(null, 'nit'),
            value: company.nit,
            placeholder: 'Nit'
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group col-sm-6' },
          _react2.default.createElement(_form_select2.default, {
            ref: 'sector',
            options: _sectors2.default,
            'default': 'Seleccionar sector',
            onSelectChange: this.handleChange.bind(null, 'sector'),
            value: company.sector
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group col-sm-6' },
          _react2.default.createElement(_form_select2.default, {
            ref: 'city',
            options: _cities2.default,
            'default': 'Seleccionar ciudad',
            onSelectChange: this.handleChange.bind(null, 'city'),
            value: company.city
          })
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'form-group' },
        _react2.default.createElement('input', {
          className: 'form-control',
          ref: 'address',
          onChange: this.handleChange.bind(null, 'address'),
          value: company.address,
          placeholder: 'Direcci\xF3n'
        })
      ),
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'form-group col-lg-6' },
          _react2.default.createElement('input', {
            className: 'form-control',
            ref: 'phone',
            onChange: this.handleChange.bind(null, 'phone'),
            value: company.phone,
            placeholder: 'Tel\xE9fono'
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group col-lg-6' },
          _react2.default.createElement('input', {
            className: 'form-control',
            ref: 'web',
            onChange: this.handleChange.bind(null, 'web'),
            value: company.web,
            placeholder: 'Web'
          })
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'form-group' },
        _react2.default.createElement('textarea', {
          className: 'form-control',
          ref: 'comment',
          onChange: this.handleChange.bind(null, 'comment'),
          value: company.comment,
          placeholder: 'Comentario'
        })
      ),
      _react2.default.createElement(
        'button',
        {
          className: 'btn btn-primary btn-sm pull-right',
          onClick: this.handleSubmit
        },
        btnStoreText
      ),
      _react2.default.createElement(
        'button',
        {
          className: 'btn btn-default btn-sm',
          onClick: this.clean },
        btnCleanText
      )
    );
  }
});

exports.default = CompaniesForm;

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _contact = __webpack_require__(512);

var _contact2 = _interopRequireDefault(_contact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
  displayName: 'list',
  handleEdit: function handleEdit(contact) {
    console.log(contact);
    this.props.onEdit(contact);
  },
  render: function render() {
    var _this = this;

    var contacts = this.props.contacts;

    var contactNodes = contacts.map(function (contact) {
      return _react2.default.createElement(_contact2.default, { key: contact.id, contact: contact, onEdit: _this.handleEdit });
    });

    return _react2.default.createElement(
      'div',
      { className: 'table-responsive' },
      _react2.default.createElement(
        'table',
        { className: 'table' },
        _react2.default.createElement(
          'thead',
          null,
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'th',
              null,
              'Nombre'
            ),
            _react2.default.createElement(
              'th',
              null,
              'Email'
            ),
            _react2.default.createElement(
              'th',
              null,
              'Tel\xE9fonos'
            ),
            _react2.default.createElement(
              'th',
              null,
              'Celulares'
            ),
            _react2.default.createElement(
              'th',
              null,
              'Empresa'
            ),
            _react2.default.createElement(
              'th',
              null,
              'Opciones'
            )
          )
        ),
        _react2.default.createElement(
          'tbody',
          null,
          contactNodes
        )
      )
    );
  }
});

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactQuill = __webpack_require__(147);

var _reactQuill2 = _interopRequireDefault(_reactQuill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var serviceForm = _react2.default.createClass({
  displayName: 'serviceForm',
  getInitialState: function getInitialState() {
    return {
      service: {
        title: '',
        price_1: '',
        price_2: '',
        text: ''
      }
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(props) {
    var service = props.service;

    if (Object.keys(service).length) this.setState({ service: service });
  },
  handleSubmit: function handleSubmit(e) {
    e.preventDefault();
    if (typeof this.props.onSubmit == 'function') {
      this.props.onSubmit(this.state.service);
    }
  },
  handleTextChange: function handleTextChange(html) {
    var ob = _extends({}, this.state.service, { text: html });
    this.setState({ service: ob });
  },
  handleChange: function handleChange(field, e) {
    var service = _extends({}, this.state.service, _defineProperty({}, field, e.currentTarget.value));
    this.setState({ service: service });
  },
  handleCancel: function handleCancel(e) {
    e.preventDefault();
    this.props.onCancel();
  },
  render: function render() {
    var service = this.state.service;

    return _react2.default.createElement(
      'form',
      { onSubmit: this.handleSubmit },
      _react2.default.createElement(
        'div',
        { className: 'form-group col-md-12' },
        _react2.default.createElement(
          'label',
          { htmlFor: '' },
          'T\xEDtulo'
        ),
        _react2.default.createElement('input', {
          onChange: this.handleChange.bind(null, 'title'),
          type: 'text',
          className: 'form-control',
          value: service.title
        })
      ),
      _react2.default.createElement(
        'div',
        { className: 'form-group col-md-12' },
        _react2.default.createElement(
          'label',
          { htmlFor: '' },
          'Contenido'
        ),
        _react2.default.createElement(_reactQuill2.default, {
          style: { height: '250px' },
          value: service.text,
          onChange: this.handleTextChange,
          edit: service.id ? true : false
        })
      ),
      _react2.default.createElement(
        'div',
        { className: 'form-group col-md-6' },
        _react2.default.createElement(
          'label',
          { htmlFor: '' },
          'Precio 1'
        ),
        _react2.default.createElement('input', {
          onChange: this.handleChange.bind(this, 'price_1'),
          type: 'text',
          className: 'form-control',
          value: service.price_1
        })
      ),
      _react2.default.createElement(
        'div',
        { className: 'form-group col-md-6' },
        _react2.default.createElement(
          'label',
          { htmlFor: '' },
          'Precio 2'
        ),
        _react2.default.createElement('input', {
          onChange: this.handleChange.bind(this, 'price_2'),
          type: 'text',
          className: 'form-control',
          value: service.price_2
        })
      ),
      _react2.default.createElement(
        'div',
        { className: this.props.errors.length ? "alert alert-danger col-md-12" : "hidden" },
        this.props.errors
      ),
      _react2.default.createElement(
        'button',
        { className: 'btn btn-default btn-sm', onClick: this.handleCancel },
        'Cancelar'
      ),
      _react2.default.createElement(
        'button',
        { className: 'btn btn-primary btn-sm pull-right' },
        'Guardar'
      )
    );
  }
});

exports.default = serviceForm;

/***/ }),
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */
/***/ (function(module, exports) {

module.exports = [{"value":"Asesores Comerciales","label":"Asesores comerciales"},{"value":"Cliente","label":"Cliente"},{"value":"Página Web Avante","label":"Página Web Avante"},{"value":"Google Adwords","label":"Google Adwords"},{"value":"Referido","label":"Referido"},{"value":"App Referidos","label":"App Referidos "},{"value":"Promoción","label":"Promoción"},{"value":"Teléfono","label":"Teléfono"},{"value":"Redes Sociales","label":"Redes Sociales"},{"value":"Banner","label":"Banner"},{"value":"Landing Page","label":"Landing Page"},{"value":"Chat","label":"Chat"},{"value":"WhatsApp","label":"WhatsApp"},{"value":"Otros","label":"Otros"}]

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(87),
    root = __webpack_require__(52);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(904),
    mapCacheDelete = __webpack_require__(905),
    mapCacheGet = __webpack_require__(906),
    mapCacheHas = __webpack_require__(907),
    mapCacheSet = __webpack_require__(908);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(862),
    isObjectLike = __webpack_require__(88);

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

var baseMatches = __webpack_require__(867),
    baseMatchesProperty = __webpack_require__(868),
    identity = __webpack_require__(926),
    isArray = __webpack_require__(53),
    property = __webpack_require__(929);

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),
/* 188 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(53),
    isSymbol = __webpack_require__(137);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),
/* 190 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 191 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(20);

var _reports = __webpack_require__(487);

var action = _interopRequireWildcard(_reports);

var _numeral = __webpack_require__(139);

var _numeral2 = _interopRequireDefault(_numeral);

var _advisor = __webpack_require__(513);

var _advisor2 = _interopRequireDefault(_advisor);

var _status = __webpack_require__(519);

var _status2 = _interopRequireDefault(_status);

var _how_find_us = __webpack_require__(516);

var _how_find_us2 = _interopRequireDefault(_how_find_us);

var _client_type = __webpack_require__(514);

var _client_type2 = _interopRequireDefault(_client_type);

var _no_effective = __webpack_require__(517);

var _no_effective2 = _interopRequireDefault(_no_effective);

var _sent_diff = __webpack_require__(518);

var _sent_diff2 = _interopRequireDefault(_sent_diff);

var _filters = __webpack_require__(515);

var _filters2 = _interopRequireDefault(_filters);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var section = _react2.default.createClass({
  displayName: 'section',
  getInitialState: function getInitialState() {
    return {
      filters: {},
      type: 'line'
    };
  },
  componentDidMount: function componentDidMount() {
    this.props.dispatch(action.fetch());
  },
  handleFilters: function handleFilters(query) {
    this.props.dispatch(action.fetch(query));
  },
  render: function render() {
    var data = this.props.data;


    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { className: 'col-md-12' },
        _react2.default.createElement(_filters2.default, { onChange: this.handleFilters })
      ),
      _react2.default.createElement(
        'div',
        { className: 'col-md-3' },
        _react2.default.createElement(
          'div',
          { className: 'panel' },
          _react2.default.createElement(
            'div',
            { className: 'panel-body' },
            _react2.default.createElement(
              'b',
              null,
              'Cotizaciones: '
            ),
            ' ',
            data.total_quotations
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'col-md-3' },
        _react2.default.createElement(
          'div',
          { className: 'panel' },
          _react2.default.createElement(
            'div',
            { className: 'panel-body' },
            _react2.default.createElement(
              'b',
              null,
              'Total: '
            ),
            (0, _numeral2.default)(data.total_quotations_money).format('0,0')
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'col-md-3' },
        _react2.default.createElement(
          'div',
          { className: 'panel' },
          _react2.default.createElement(
            'div',
            { className: 'panel-body' },
            _react2.default.createElement(
              'b',
              null,
              'Promedio cotizaciones enviadas: '
            ),
            data.average_sent,
            ' Minutos'
          )
        )
      ),
      _react2.default.createElement('div', { className: 'col-md-3' }),
      _react2.default.createElement(_status2.default, { type: this.state.type, graphsData: data }),
      _react2.default.createElement(_how_find_us2.default, { type: this.state.type, graphsData: data }),
      _react2.default.createElement(_advisor2.default, { type: this.state.type, graphsData: data }),
      _react2.default.createElement(_client_type2.default, { type: this.state.type, graphsData: data }),
      _react2.default.createElement(_no_effective2.default, { type: this.state.type, graphsData: data }),
      _react2.default.createElement(_sent_diff2.default, { type: this.state.type, graphsData: data })
    );
  }
});

exports.default = (0, _reactRedux.connect)(function (store) {
  return store.reports;
})(section);

/***/ }),
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Alert = _react2.default.createClass({
	displayName: "Alert",
	getDefaultProps: function getDefaultProps() {
		return {
			time: 3000
		};
	},
	getInitialState: function getInitialState() {
		return {
			show: false
		};
	},
	componentWillReceiveProps: function componentWillReceiveProps(props) {
		if (props.show) {
			this.show();
		}
	},
	show: function show(e) {
		var _this = this;

		if (e) e.preventDefault();
		this.setState({ show: true });

		setTimeout(function () {
			_this.setState({ show: false });
		}, this.props.time);
	},
	render: function render() {
		var message = this.props.message;

		return _react2.default.createElement(
			"div",
			{ className: this.state.show ? "alert-message" : "alert-message alert-message--outside" },
			message
		);
	}
});

exports.default = Alert;

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _underscore = __webpack_require__(1043);

var _underscore2 = _interopRequireDefault(_underscore);

var _loader = __webpack_require__(151);

var _loader2 = _interopRequireDefault(_loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
  displayName: 'autocomplete',
  getDefaultProps: function getDefaultProps() {
    return {
      collection: [],
      field: 'name',
      placeholder: "Buscar",
      loading: false
    };
  },
  search: function search(e) {
    var query = e.currentTarget.value;
    if (typeof this.props.search == 'function') {
      this.props.search(query);
    }
  },
  resultSelected: function resultSelected(model) {
    var query = {};
    query[this.props.field] = model;
    var result = _underscore2.default.where(this.props.collection, query);

    if (typeof this.props.selected == 'function') {
      this.props.selected(result);
    }
  },
  render: function render() {
    var _this = this;

    var options = this.props.collection.map(function (model) {
      return model[_this.props.field];
    });

    var results = options.map(function (model, i) {
      return _react2.default.createElement(
        'li',
        { key: i, className: 'list-group-item', onClick: _this.resultSelected.bind(_this, model) },
        model
      );
    });

    return _react2.default.createElement(
      'div',
      { className: 'form-group' },
      _react2.default.createElement('input', {
        placeholder: 'Buscar empresa',
        type: 'text',
        onChange: _underscore2.default.throttle(this.search, 1000),
        className: 'form-control'
      }),
      _react2.default.createElement(_loader2.default, { show: this.props.loading }),
      _react2.default.createElement(
        'ul',
        { className: 'list-group' },
        results
      )
    );
  }
});

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _timeago = __webpack_require__(1041);

var _timeago2 = _interopRequireDefault(_timeago);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var es = __webpack_require__(1042);

exports.default = _react2.default.createClass({
  displayName: 'timeago',

  getDefaultProps: function getDefaultProps() {
    return {
      date: Date.now()
    };
  },

  render: function render() {
    _timeago2.default.register('es', es);
    var created = new _timeago2.default().format(this.props.date, 'es');
    return _react2.default.createElement(
      'span',
      { className: 'timeago' },
      created
    );
  }
});

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(62);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tooltip = _react2.default.createClass({
	displayName: 'Tooltip',
	getInitialState: function getInitialState() {
		return {
			show: false
		};
	},
	componentDidMount: function componentDidMount() {
		var tooltip = _reactDom2.default.findDOMNode(this);
	},
	componentWillReceiveProps: function componentWillReceiveProps(props) {
		this.setState({ show: props.show });
	},
	render: function render() {
		var showStyle = {
			display: 'block',
			position: 'absolute',
			right: '-200px',
			fontSize: '10px',
			top: '-10%'
		};

		var hideStyle = { display: 'none' };

		return _react2.default.createElement(
			'div',
			{
				className: this.state.show ? "my-tooltip my-tooltip--active" : "my-tooltip",
				style: this.state.show ? showStyle : hideStyle
			},
			this.props.children
		);
	}
});

exports.default = Tooltip;

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var Alert = function Alert(message) {
	var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5000;

	var el = document.getElementById('toast_messsage');
	var timeout = void 0;
	el.innerHTML = message;
	el.className = "toast_messsage toast_messsage--show";

	timeout = setTimeout(function () {
		el.innerHTML = '';
		el.className = "toast_messsage";
	}, time);
};

exports.default = Alert;

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = updateItem;
function updateItem(collection, newModel, field) {
  return collection.map(function (model) {
    return model[field] == newModel[field] ? _extends({}, model, newModel) : model;
  });
}

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
  displayName: 'filters',
  getInitialState: function getInitialState() {
    return {
      offset: 0
    };
  },
  getDefaultProps: function getDefaultProps() {
    return {
      base: 15,
      offset: 0
    };
  },
  search: function search(e) {
    if (typeof this.props.onSearch === 'function') {
      this.props.onSearch(e.currentTarget.value);
    }
  },
  handlePrev: function handlePrev() {
    var offset = parseInt(this.props.offset) - this.props.base;
    if (typeof this.props.onPrev === 'function') {
      this.props.onPrev(offset);
    }
  },
  handleNext: function handleNext() {
    var offset = parseInt(this.props.offset) + this.props.base;
    if (typeof this.props.onNext === 'function') {
      this.props.onNext(offset);
    }
  },
  render: function render() {
    return _react2.default.createElement(
      'div',
      { className: 'panel' },
      _react2.default.createElement(
        'div',
        { className: 'panel-body' },
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement('input', {
            type: 'text',
            className: 'form-control',
            placeholder: 'Buscar empresas o contactos',
            onChange: this.search
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'btn-group', role: 'group' },
          _react2.default.createElement(
            'button',
            {
              className: 'btn btn-default btn-sm',
              onClick: this.handlePrev,
              disabled: !this.props.offset
            },
            _react2.default.createElement('i', { className: 'fa fa-chevron-left' })
          ),
          _react2.default.createElement(
            'button',
            {
              className: 'btn btn-default btn-sm',
              onClick: this.handleNext
            },
            _react2.default.createElement('i', { className: 'fa fa-chevron-right' })
          )
        )
      )
    );
  }
});

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _numeral = __webpack_require__(139);

var _numeral2 = _interopRequireDefault(_numeral);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var QuoProduct = _react2.default.createClass({
  displayName: 'QuoProduct',
  getDefaultProps: function getDefaultProps() {
    return {
      product: {}
    };
  },
  render: function render() {
    var product = this.props.product;
    var period = product.period;

    var plural = {
      Mes: "Meses",
      Semana: "Semanas",
      Día: "Días",
      "15 días": "15 días",
      "a 3 días": "a 3 días",
      Hora: "Horas",
      Servicio: "Servicios",
      Venta: "Ventas"
    };

    if (product.lapse > 1) {
      period = plural[product.period];
    }

    return _react2.default.createElement(
      'tr',
      {
        'data-id': product.id,
        'data-position': product.position || this.props.index,
        draggable: 'true',
        onDragEnd: this.props.onDragEnd,
        onDragStart: this.props.onDragStart,
        onDragOver: this.props.onDragOver,
        onDragLeave: this.props.onDragLeave
      },
      _react2.default.createElement(
        'td',
        null,
        product.name
      ),
      _react2.default.createElement(
        'td',
        null,
        product.lapse,
        ' ',
        period
      ),
      _react2.default.createElement(
        'td',
        null,
        product.quantity
      ),
      _react2.default.createElement(
        'td',
        null,
        (0, _numeral2.default)(product.price).format('0,0')
      ),
      _react2.default.createElement(
        'td',
        null,
        (0, _numeral2.default)(product.total).format('0,0')
      ),
      _react2.default.createElement(
        'td',
        null,
        _react2.default.createElement(
          'ul',
          { className: 'list-inline' },
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'button',
              {
                className: 'btn btn-default btn-sm',
                onClick: this.props.onEdit.bind(null, product),
                disabled: this.props.disabled ? true : false
              },
              'Editar'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'button',
              {
                className: 'btn btn-default btn-sm',
                onClick: this.props.onDuplicate.bind(null, product.id),
                disabled: this.props.disabled ? true : false
              },
              'Duplicar'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'button',
              {
                className: 'btn btn-default btn-sm',
                onClick: this.props.onOrder.bind(null, product)
              },
              product.ordered ? "Pedir" : "Pedido"
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'button',
              {
                className: 'btn btn-default btn-sm',
                onClick: this.props.onDelete.bind(null, product.id),
                disabled: this.props.disabled ? true : false
              },
              'Eliminar'
            )
          )
        )
      )
    );
  }
});

exports.default = QuoProduct;

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _status = __webpack_require__(276);

var _status2 = _interopRequireDefault(_status);

var _advisors = __webpack_require__(126);

var _advisors2 = _interopRequireDefault(_advisors);

var _type = __webpack_require__(129);

var _type2 = _interopRequireDefault(_type);

var _client_type = __webpack_require__(127);

var _client_type2 = _interopRequireDefault(_client_type);

var _priority = __webpack_require__(834);

var _priority2 = _interopRequireDefault(_priority);

var _form_select = __webpack_require__(22);

var _form_select2 = _interopRequireDefault(_form_select);

var _datetime = __webpack_require__(109);

var _datetime2 = _interopRequireDefault(_datetime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var quoFilters = _react2.default.createClass({
  displayName: 'quoFilters',
  getInitialState: function getInitialState() {
    return {
      query: {
        offset: 0,
        query: null,
        status: null,
        advisor: null,
        client_type: null,
        quotation_type: null,
        date_start: null,
        date_end: null,
        priority: null
      }
    };
  },
  triggerChange: function triggerChange(query) {
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(query);
    }
  },
  changeQuery: function changeQuery(field, value) {
    var query = _extends({}, this.state.query, _defineProperty({}, field, value));
    this.triggerChange(query);
    this.setState({ query: query });
  },
  handleDates: function handleDates(type, date, dateStr) {
    var field = type;
    var value = dateStr + ' 00:00:00';
    this.changeQuery(field, value);
  },
  handleChange: function handleChange(field, e) {
    var value = e.currentTarget.value;
    this.changeQuery(field, value);
  },
  render: function render() {
    var _this = this;

    var query = this.state.query;

    return _react2.default.createElement(
      'div',
      { className: 'panel' },
      _react2.default.createElement(
        'div',
        { className: 'panel-body' },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'form-group col-md-3' },
            _react2.default.createElement('input', {
              placeholder: 'Buscar cotizaciones',
              className: 'form-control input-query',
              onChange: this.handleChange.bind(null, 'query'),
              value: query.query || ''
            })
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group col-sm-3 filter-priority' },
            _react2.default.createElement(_form_select2.default, {
              options: _priority2.default,
              'default': 'Seleccionar prioridad',
              value: query.priority,
              onSelectChange: this.handleChange.bind(null, 'priority')
            })
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group col-md-3' },
            _react2.default.createElement(_datetime2.default, {
              placeholder: 'Seleccionar desde',
              styles: 'form-control',
              onChange: function onChange(date, str) {
                _this.handleDates('date_start', date, str);
              }
            })
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group col-md-3' },
            _react2.default.createElement(_datetime2.default, {
              placeholder: 'Seleccionar hasta',
              styles: 'form-control',
              onChange: function onChange(date, str) {
                _this.handleDates('date_end', date, str);
              }
            })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'form-group col-sm-3' },
            _react2.default.createElement(_form_select2.default, {
              options: _status2.default,
              'default': 'Seleccionar estado',
              value: query.status,
              onSelectChange: this.handleChange.bind(null, 'status')
            })
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group col-sm-3' },
            _react2.default.createElement(_form_select2.default, {
              options: _advisors2.default,
              'default': 'Seleccionar asesor',
              value: query.advisor,
              onSelectChange: this.handleChange.bind(null, 'advisor')
            })
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group col-sm-3' },
            _react2.default.createElement(_form_select2.default, {
              options: _client_type2.default,
              'default': 'Seleccionar cliente',
              value: query.client_type,
              onSelectChange: this.handleChange.bind(null, 'client_type')
            })
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group col-sm-3' },
            _react2.default.createElement(_form_select2.default, {
              ref: 'type',
              options: _type2.default,
              'default': 'Seleccionar tipo',

              value: query.quotation_type,
              onSelectChange: function onSelectChange(e) {
                return _this.handleChange('quotation_type', e);
              }
            })
          )
        )
      )
    );
  }
});

exports.default = quoFilters;

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _moment = __webpack_require__(1);

var _moment2 = _interopRequireDefault(_moment);

var _reactQuill = __webpack_require__(147);

var _reactQuill2 = _interopRequireDefault(_reactQuill);

var _form_select = __webpack_require__(22);

var _form_select2 = _interopRequireDefault(_form_select);

var _datetime = __webpack_require__(109);

var _datetime2 = _interopRequireDefault(_datetime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var trackingForm = _react2.default.createClass({
  displayName: 'trackingForm',

  getInitialState: function getInitialState() {
    return {
      tracking: {
        contact: {},
        register_date: '',
        register_time: '',
        report: '',
        contact_id: null
      },
      contacts: []
    };
  },

  componentDidMount: function componentDidMount() {},

  handleContact: function handleContact(e) {
    var contact = e.currentTarget.value;
    this.handleChange({ contact_id: parseInt(contact) });
  },

  handleReport: function handleReport(html) {
    this.handleChange({ report: html });
  },

  handleChange: function handleChange(data) {
    this.setState({
      tracking: _extends({}, this.state.tracking, data)
    });
  },

  handleSubmit: function handleSubmit(e) {
    e.preventDefault();
    this.handleReport();
    this.props.onSubmit(this.state.tracking);
  },

  handleDateTime: function handleDateTime(dateObj, dateStr) {
    var datetime = (0, _moment2.default)(dateObj).format('YYYY/MM/DD HH:mm:ss').split(' ');
    var date = datetime[0];
    var time = datetime[1];
    this.handleChange({ register_date: date, register_time: time });
  },


  render: function render() {
    var tracking = this.state.tracking;
    var contactValue = void 0;
    var contactSelect = void 0;

    if (tracking.contact_id) {
      contactSelect = this.props.contacts.filter(function (contact) {
        return contact.id == tracking.contact_id;
      });
      contactValue = contactSelect.name + " " + contactSelect.lastname;
    }

    var contactOptions = this.props.contacts.map(function (contact, i) {
      return { value: contact.id, label: contact.name + " " + contact.lastname };
    });

    return _react2.default.createElement(
      'form',
      _defineProperty({ onSubmit: this.handleSubmit }, 'onSubmit', this.handleSubmit),
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'div',
        { className: 'form-group col-md-6' },
        _react2.default.createElement(
          'label',
          null,
          'Fecha'
        ),
        _react2.default.createElement(_datetime2.default, {
          enableTime: true,
          styles: 'form-control',
          onChange: this.handleDateTime
        })
      ),
      _react2.default.createElement(
        'div',
        { className: 'form-group col-md-6' },
        _react2.default.createElement(
          'label',
          null,
          'Seleccionar o buscar contacto'
        ),
        _react2.default.createElement(_form_select2.default, {
          options: contactOptions,
          placeholder: 'Seleccionar contacto',
          onSelectChange: this.handleContact,
          value: this.state.tracking.contact_id
        })
      ),
      _react2.default.createElement(
        'div',
        { className: 'form-group col-md-12' },
        _react2.default.createElement(
          'label',
          null,
          'Reporte'
        ),
        _react2.default.createElement(_reactQuill2.default, {
          style: { height: '200px' },
          value: tracking.report,
          onChange: this.handleReport,
          edit: tracking.id ? true : false
        })
      ),
      _react2.default.createElement(
        'div',
        { className: 'col-md-12' },
        _react2.default.createElement(
          'button',
          { className: 'btn btn-primary btn-sm' },
          'Guardar'
        )
      )
    );
  }
});

exports.default = trackingForm;

/***/ }),
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var React = __webpack_require__(2);
var factory = __webpack_require__(266);

if (typeof React === 'undefined') {
  throw Error(
    'create-react-class could not find the React object. If you are using script tags, ' +
      'make sure that React is being loaded before create-react-class.'
  );
}

// Hack to grab NoopUpdateQueue from isomorphic React
var ReactNoopUpdateQueue = new React.Component().updater;

module.exports = factory(
  React.Component,
  React.isValidElement,
  ReactNoopUpdateQueue
);


/***/ }),
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */
/***/ (function(module, exports) {

module.exports = [{"value":"Inventario","label":"Inventario"},{"value":"Pedido","label":"Pedido"}]

/***/ }),
/* 272 */
/***/ (function(module, exports) {

module.exports = [{"value":"No disponible","label":"No disponible"},{"value":"No confiable","label":"No confiable"},{"value":"Competencia","label":"Competencia"},{"value":"Por cliente","label":"Por cliente"}]

/***/ }),
/* 273 */
/***/ (function(module, exports) {

module.exports = [{"value":"No confiable","label":"No confiable"},{"value":"Competencia","label":"Competencia"},{"value":"Por cliente","label":"Por cliente"}]

/***/ }),
/* 274 */
/***/ (function(module, exports) {

module.exports = [{"value":"Mes","label":"Mes"},{"value":"Semana","label":"Semana"},{"value":"Día","label":"Día"},{"value":"15 días","label":"15 días"},{"value":"a 7 días","label":"a 7 días"},{"value":"a 3 días","label":"a 3 días"},{"value":"Hora","label":"Hora"},{"value":"Servicio","label":"Servicio"},{"value":"Venta","label":"Venta"}]

/***/ }),
/* 275 */
/***/ (function(module, exports) {

module.exports = [{"value":"WorkPro","label":"WorkPro"},{"value":"WorkPlus","label":"WorkPlus"},{"value":"WorkPremium","label":"WorkPremium"}]

/***/ }),
/* 276 */
/***/ (function(module, exports) {

module.exports = [{"value":"Borrador","label":"Borrador"},{"value":"Enviada","label":"Enviada"},{"value":"Entregada","label":"Entregada"},{"value":"Seguimiento","label":"Seguimiento"},{"value":"No enviada","label":"No enviada"},{"value":"Efectiva","label":"Efectiva"},{"value":"No efectiva","label":"No efectiva"},{"value":"Replanteada","label":"Replanteada"},{"value":"Por confirmar","label":"Por confirmar"},{"value":"Nula","label":"Nula"}]

/***/ }),
/* 277 */,
/* 278 */,
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(130),
    stackClear = __webpack_require__(917),
    stackDelete = __webpack_require__(918),
    stackGet = __webpack_require__(919),
    stackHas = __webpack_require__(920),
    stackSet = __webpack_require__(921);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),
/* 280 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(282),
    toKey = __webpack_require__(135);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(53),
    isKey = __webpack_require__(189),
    stringToPath = __webpack_require__(922),
    toString = __webpack_require__(936);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(848),
    arraySome = __webpack_require__(280),
    cacheHas = __webpack_require__(875);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),
/* 284 */,
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(98);

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),
/* 286 */
/***/ (function(module, exports) {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),
/* 287 */,
/* 288 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

var createFind = __webpack_require__(879),
    findIndex = __webpack_require__(923);

/**
 * Iterates over elements of `collection`, returning the first element
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': true },
 *   { 'user': 'fred',    'age': 40, 'active': false },
 *   { 'user': 'pebbles', 'age': 1,  'active': true }
 * ];
 *
 * _.find(users, function(o) { return o.age < 40; });
 * // => object for 'barney'
 *
 * // The `_.matches` iteratee shorthand.
 * _.find(users, { 'age': 1, 'active': true });
 * // => object for 'pebbles'
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.find(users, ['active', false]);
 * // => object for 'fred'
 *
 * // The `_.property` iteratee shorthand.
 * _.find(users, 'active');
 * // => object for 'barney'
 */
var find = createFind(findIndex);

module.exports = find;


/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(861),
    isObjectLike = __webpack_require__(88);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(52),
    stubFalse = __webpack_require__(932);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(210)(module)))

/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(186);

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

module.exports = isEqual;


/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(86),
    isObject = __webpack_require__(98);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(865),
    baseUnary = __webpack_require__(874),
    nodeUtil = __webpack_require__(912);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var replace = String.prototype.replace;
var percentTwenties = /%20/g;

module.exports = {
    'default': 'RFC3986',
    formatters: {
        RFC1738: function (value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function (value) {
            return value;
        }
    },
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};


/***/ }),
/* 413 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    var obj;

    while (queue.length) {
        var item = queue.pop();
        obj = item.obj[item.prop];

        if (Array.isArray(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }

    return obj;
};

exports.arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

exports.merge = function merge(target, source, options) {
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (Array.isArray(target)) {
            target.push(source);
        } else if (typeof target === 'object') {
            if (options.plainObjects || options.allowPrototypes || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (Array.isArray(target) && !Array.isArray(source)) {
        mergeTarget = exports.arrayToObject(target, options);
    }

    if (Array.isArray(target) && Array.isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                if (target[i] && typeof target[i] === 'object') {
                    target[i] = exports.merge(target[i], item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has.call(acc, key)) {
            acc[key] = exports.merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

exports.assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

exports.decode = function (str) {
    try {
        return decodeURIComponent(str.replace(/\+/g, ' '));
    } catch (e) {
        return str;
    }
};

exports.encode = function encode(str) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = typeof str === 'string' ? str : String(str);

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D // -
            || c === 0x2E // .
            || c === 0x5F // _
            || c === 0x7E // ~
            || (c >= 0x30 && c <= 0x39) // 0-9
            || (c >= 0x41 && c <= 0x5A) // a-z
            || (c >= 0x61 && c <= 0x7A) // A-Z
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        out += hexTable[0xF0 | (c >> 18)]
            + hexTable[0x80 | ((c >> 12) & 0x3F)]
            + hexTable[0x80 | ((c >> 6) & 0x3F)]
            + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

exports.compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    return compactQueue(queue);
};

exports.isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

exports.isBuffer = function isBuffer(obj) {
    if (obj === null || typeof obj === 'undefined') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};


/***/ }),
/* 414 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

(function(f) {
  if (true) {
    module.exports = f(__webpack_require__(2));
    /* global define */
  } else if (typeof define === 'function' && define.amd) {
    define(['react'], f);
  } else {
    var g;
    if (typeof window !== 'undefined') {
      g = window;
    } else if (typeof global !== 'undefined') {
      g = global;
    } else if (typeof self !== 'undefined') {
      g = self;
    } else {
      g = this;
    }

    if (typeof g.React === 'undefined') {
      throw Error('React module should be required before ReactDOMFactories');
    }

    g.ReactDOMFactories = f(g.React);
  }
})(function(React) {
  /**
   * Create a factory that creates HTML tag elements.
   */
  function createDOMFactory(type) {
    var factory = React.createElement.bind(null, type);
    // Expose the type on the factory and the prototype so that it can be
    // easily accessed on elements. E.g. `<Foo />.type === Foo`.
    // This should not be named `constructor` since this may not be the function
    // that created the element, and it may not even be a constructor.
    factory.type = type;
    return factory;
  };

  /**
   * Creates a mapping from supported HTML tags to `ReactDOMComponent` classes.
   */
  var ReactDOMFactories = {
    a: createDOMFactory('a'),
    abbr: createDOMFactory('abbr'),
    address: createDOMFactory('address'),
    area: createDOMFactory('area'),
    article: createDOMFactory('article'),
    aside: createDOMFactory('aside'),
    audio: createDOMFactory('audio'),
    b: createDOMFactory('b'),
    base: createDOMFactory('base'),
    bdi: createDOMFactory('bdi'),
    bdo: createDOMFactory('bdo'),
    big: createDOMFactory('big'),
    blockquote: createDOMFactory('blockquote'),
    body: createDOMFactory('body'),
    br: createDOMFactory('br'),
    button: createDOMFactory('button'),
    canvas: createDOMFactory('canvas'),
    caption: createDOMFactory('caption'),
    cite: createDOMFactory('cite'),
    code: createDOMFactory('code'),
    col: createDOMFactory('col'),
    colgroup: createDOMFactory('colgroup'),
    data: createDOMFactory('data'),
    datalist: createDOMFactory('datalist'),
    dd: createDOMFactory('dd'),
    del: createDOMFactory('del'),
    details: createDOMFactory('details'),
    dfn: createDOMFactory('dfn'),
    dialog: createDOMFactory('dialog'),
    div: createDOMFactory('div'),
    dl: createDOMFactory('dl'),
    dt: createDOMFactory('dt'),
    em: createDOMFactory('em'),
    embed: createDOMFactory('embed'),
    fieldset: createDOMFactory('fieldset'),
    figcaption: createDOMFactory('figcaption'),
    figure: createDOMFactory('figure'),
    footer: createDOMFactory('footer'),
    form: createDOMFactory('form'),
    h1: createDOMFactory('h1'),
    h2: createDOMFactory('h2'),
    h3: createDOMFactory('h3'),
    h4: createDOMFactory('h4'),
    h5: createDOMFactory('h5'),
    h6: createDOMFactory('h6'),
    head: createDOMFactory('head'),
    header: createDOMFactory('header'),
    hgroup: createDOMFactory('hgroup'),
    hr: createDOMFactory('hr'),
    html: createDOMFactory('html'),
    i: createDOMFactory('i'),
    iframe: createDOMFactory('iframe'),
    img: createDOMFactory('img'),
    input: createDOMFactory('input'),
    ins: createDOMFactory('ins'),
    kbd: createDOMFactory('kbd'),
    keygen: createDOMFactory('keygen'),
    label: createDOMFactory('label'),
    legend: createDOMFactory('legend'),
    li: createDOMFactory('li'),
    link: createDOMFactory('link'),
    main: createDOMFactory('main'),
    map: createDOMFactory('map'),
    mark: createDOMFactory('mark'),
    menu: createDOMFactory('menu'),
    menuitem: createDOMFactory('menuitem'),
    meta: createDOMFactory('meta'),
    meter: createDOMFactory('meter'),
    nav: createDOMFactory('nav'),
    noscript: createDOMFactory('noscript'),
    object: createDOMFactory('object'),
    ol: createDOMFactory('ol'),
    optgroup: createDOMFactory('optgroup'),
    option: createDOMFactory('option'),
    output: createDOMFactory('output'),
    p: createDOMFactory('p'),
    param: createDOMFactory('param'),
    picture: createDOMFactory('picture'),
    pre: createDOMFactory('pre'),
    progress: createDOMFactory('progress'),
    q: createDOMFactory('q'),
    rp: createDOMFactory('rp'),
    rt: createDOMFactory('rt'),
    ruby: createDOMFactory('ruby'),
    s: createDOMFactory('s'),
    samp: createDOMFactory('samp'),
    script: createDOMFactory('script'),
    section: createDOMFactory('section'),
    select: createDOMFactory('select'),
    small: createDOMFactory('small'),
    source: createDOMFactory('source'),
    span: createDOMFactory('span'),
    strong: createDOMFactory('strong'),
    style: createDOMFactory('style'),
    sub: createDOMFactory('sub'),
    summary: createDOMFactory('summary'),
    sup: createDOMFactory('sup'),
    table: createDOMFactory('table'),
    tbody: createDOMFactory('tbody'),
    td: createDOMFactory('td'),
    textarea: createDOMFactory('textarea'),
    tfoot: createDOMFactory('tfoot'),
    th: createDOMFactory('th'),
    thead: createDOMFactory('thead'),
    time: createDOMFactory('time'),
    title: createDOMFactory('title'),
    tr: createDOMFactory('tr'),
    track: createDOMFactory('track'),
    u: createDOMFactory('u'),
    ul: createDOMFactory('ul'),
    var: createDOMFactory('var'),
    video: createDOMFactory('video'),
    wbr: createDOMFactory('wbr'),

    // SVG
    circle: createDOMFactory('circle'),
    clipPath: createDOMFactory('clipPath'),
    defs: createDOMFactory('defs'),
    ellipse: createDOMFactory('ellipse'),
    g: createDOMFactory('g'),
    image: createDOMFactory('image'),
    line: createDOMFactory('line'),
    linearGradient: createDOMFactory('linearGradient'),
    mask: createDOMFactory('mask'),
    path: createDOMFactory('path'),
    pattern: createDOMFactory('pattern'),
    polygon: createDOMFactory('polygon'),
    polyline: createDOMFactory('polyline'),
    radialGradient: createDOMFactory('radialGradient'),
    rect: createDOMFactory('rect'),
    stop: createDOMFactory('stop'),
    svg: createDOMFactory('svg'),
    text: createDOMFactory('text'),
    tspan: createDOMFactory('tspan'),
  };

  // due to wrapper and conditionals at the top, this will either become
  // `module.exports ReactDOMFactories` if that is available,
  // otherwise it will be defined via `define(['react'], ReactDOMFactories)`
  // if that is available,
  // otherwise it will be defined as global variable.
  return ReactDOMFactories;
});



/***/ }),
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */,
/* 437 */,
/* 438 */,
/* 439 */,
/* 440 */,
/* 441 */,
/* 442 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Quill = __webpack_require__(104);

var QuillMixin = {

	/**
	Creates an editor on the given element. The editor will
	be passed the configuration, have its events bound,
	*/
	createEditor: function($el, config) {
		var editor = new Quill($el, config);
		if (config.tabIndex !== undefined) {
			this.setEditorTabIndex(editor, config.tabIndex);
		}
		this.hookEditor(editor);
		return editor;
	},

	hookEditor: function(editor) {
		// Expose the editor on change events via a weaker,
		// unprivileged proxy object that does not allow
		// accidentally modifying editor state.
		var unprivilegedEditor = this.makeUnprivilegedEditor(editor);

		this.handleTextChange = function(delta, oldDelta, source) {
			if (this.onEditorChangeText) {
				this.onEditorChangeText(
					editor.root.innerHTML, delta, source,
					unprivilegedEditor
				);
				this.onEditorChangeSelection(
					editor.getSelection(), source,
					unprivilegedEditor
				);
			}
		}.bind(this);

		this.handleSelectionChange = function(range, oldRange, source) {
			if (this.onEditorChangeSelection) {
				this.onEditorChangeSelection(
					range, source,
					unprivilegedEditor
				);
			}
		}.bind(this);

		editor.on('editor-change', function(eventType, rangeOrDelta, oldRangeOrOldDelta, source) {
			if (eventType === Quill.events.SELECTION_CHANGE) {
				this.handleSelectionChange(rangeOrDelta, oldRangeOrOldDelta, source);
			}
			
			if (eventType === Quill.events.TEXT_CHANGE) {
				this.handleTextChange(rangeOrDelta, oldRangeOrOldDelta, source);
			}
		}.bind(this));
	},

	unhookEditor: function(editor) {
		editor.off('selection-change');
		editor.off('text-change');
	},

	setEditorReadOnly: function(editor, value) {
		value? editor.disable()
		     : editor.enable();
	},

	/*
	Replace the contents of the editor, but keep
	the previous selection hanging around so that
	the cursor won't move.
	*/
	setEditorContents: function(editor, value) {
		var sel = editor.getSelection();

		if (typeof value === 'string') {
			editor.setContents(editor.clipboard.convert(value));
		} else {
			editor.setContents(value);
		}

		if (sel && editor.hasFocus()) this.setEditorSelection(editor, sel);
	},

	setEditorSelection: function(editor, range) {
		if (range) {
			// Validate bounds before applying.
			var length = editor.getLength();
			range.index = Math.max(0, Math.min(range.index, length-1));
			range.length = Math.max(0, Math.min(range.length, (length-1) - range.index));
		}
		editor.setSelection(range);
	},

	setEditorTabIndex: function(editor, tabIndex) {
		if (editor.editor && editor.editor.scroll && editor.editor.scroll.domNode) {
			editor.editor.scroll.domNode.tabIndex = tabIndex;
		}
	},

	/*
	Returns an weaker, unprivileged proxy object that only
	exposes read-only accessors found on the editor instance,
	without any state-modificating methods.
	*/
	makeUnprivilegedEditor: function(editor) {
		var e = editor;
		return {
			getLength:    function(){ return e.getLength.apply(e, arguments); },
			getText:      function(){ return e.getText.apply(e, arguments); },
			getHTML:      function(){ return e.root.innerHTML },
			getContents:  function(){ return e.getContents.apply(e, arguments); },
			getSelection: function(){ return e.getSelection.apply(e, arguments); },
			getBounds:    function(){ return e.getBounds.apply(e, arguments); },
		};
	}

};

module.exports = QuillMixin;


/***/ }),
/* 443 */,
/* 444 */,
/* 445 */,
/* 446 */,
/* 447 */,
/* 448 */,
/* 449 */,
/* 450 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var repeat = exports.repeat = function repeat(str, times) {
  return new Array(times + 1).join(str);
};

var pad = exports.pad = function pad(num, maxLength) {
  return repeat("0", maxLength - num.toString().length) + num;
};

var formatTime = exports.formatTime = function formatTime(time) {
  return pad(time.getHours(), 2) + ":" + pad(time.getMinutes(), 2) + ":" + pad(time.getSeconds(), 2) + "." + pad(time.getMilliseconds(), 3);
};

// Use performance API if it's available in order to get better precision
var timer = exports.timer = typeof performance !== "undefined" && performance !== null && typeof performance.now === "function" ? performance : Date;

/***/ }),
/* 451 */,
/* 452 */,
/* 453 */,
/* 454 */
/***/ (function(module, exports) {

/**
 * Export `uid`
 */

module.exports = uid;

/**
 * Create a `uid`
 *
 * @param {String} len
 * @return {String} uid
 */

function uid(len) {
  len = len || 7;
  return Math.random().toString(35).substr(2, len);
}


/***/ }),
/* 455 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(19);

var _axios2 = _interopRequireDefault(_axios);

var _page = __webpack_require__(79);

var _page2 = _interopRequireDefault(_page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Alert = _react2.default.createClass({
	displayName: 'Alert',
	getDefaultProps: function getDefaultProps() {
		return {
			time: 3000
		};
	},
	getInitialState: function getInitialState() {
		return {
			email: '',
			password: ''
		};
	},
	login: function login(e) {
		e.preventDefault();
		console.log(this.state);
		_axios2.default.post('/login', this.state).then(function (res) {
			localStorage.setItem('optima-token', res.data.token);
			_page2.default.redirect('/');
		});
	},
	handleChange: function handleChange(field, e) {
		this.setState(_extends({}, this.state, _defineProperty({}, field, e.currentTarget.value)));
	},
	render: function render() {
		return _react2.default.createElement(
			'div',
			{ className: 'container' },
			_react2.default.createElement(
				'form',
				{ onSubmit: this.login, className: 'form-signin col-md-6', style: { margin: 'auto', float: 'none', background: '#fff', padding: '40px' } },
				_react2.default.createElement(
					'div',
					{ className: 'form-group' },
					_react2.default.createElement('input', {
						type: 'text',
						name: 'email',
						className: 'form-control',
						placeholder: 'Email',
						onChange: this.handleChange.bind(null, 'email')
					})
				),
				_react2.default.createElement(
					'div',
					{ className: 'form-group' },
					_react2.default.createElement('input', {
						type: 'password',
						name: 'password',
						className: 'form-control',
						placeholder: 'Contrase\xF1a',
						onChange: this.handleChange.bind(null, 'password')
					})
				),
				_react2.default.createElement(
					'button',
					{
						className: 'btn btn-lg btn-warning btn-block',
						type: 'submit',
						onClick: this.login
					},
					'Ingresar'
				)
			)
		);
	}
});

exports.default = Alert;

/***/ }),
/* 456 */,
/* 457 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(105);

var _reduxLogger = __webpack_require__(1034);

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _reduxThunk = __webpack_require__(213);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(498);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var middleware = (0, _redux.applyMiddleware)(_reduxThunk2.default, (0, _reduxLogger2.default)());

exports.default = (0, _redux.createStore)(_reducers2.default, middleware);

/***/ }),
/* 458 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _app_header = __webpack_require__(509);

var _app_header2 = _interopRequireDefault(_app_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _react2.default.createClass({
  displayName: 'exports',
  render: function render() {
    return _react2.default.createElement(
      'div',
      { id: 'app' },
      _react2.default.createElement(_app_header2.default, null),
      this.props.children
    );
  }
});

/***/ }),
/* 459 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(20);

var _page = __webpack_require__(79);

var _page2 = _interopRequireDefault(_page);

var _companies = __webpack_require__(106);

var action = _interopRequireWildcard(_companies);

var _contacts = __webpack_require__(56);

var contactAction = _interopRequireWildcard(_contacts);

var _quotations = __webpack_require__(57);

var quoAction = _interopRequireWildcard(_quotations);

var _form_create = __webpack_require__(152);

var _form_create2 = _interopRequireDefault(_form_create);

var _form_create3 = __webpack_require__(81);

var _form_create4 = _interopRequireDefault(_form_create3);

var _list = __webpack_require__(153);

var _list2 = _interopRequireDefault(_list);

var _loader = __webpack_require__(151);

var _loader2 = _interopRequireDefault(_loader);

var _autocomplete = __webpack_require__(220);

var _autocomplete2 = _interopRequireDefault(_autocomplete);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createPanel = _react2.default.createClass({
  displayName: 'createPanel',
  getInitialState: function getInitialState() {
    return {
      companyOptions: [],
      companies: [],
      contacts: [],
      loading: false,
      showCompanyForm: false,
      showContactForm: false
    };
  },
  componentDidMount: function componentDidMount() {
    this.props.dispatch(action.cleanItems());
    this.props.dispatch(contactAction.cleanItems());
  },
  searchCompanies: function searchCompanies(name) {
    this.setState({ loading: true });
    var query = { query_name: name };
    this.props.dispatch(action.fetch(query));
    this.setState({ loading: false });
  },
  storeSelected: function storeSelected(company) {
    var dispatch = this.props.dispatch;

    var query = { company_id: company[0].id };

    dispatch(contactAction.fetch(query)).then(function () {
      dispatch(action.setCompany(company[0]));
      dispatch(action.cleanItems());
    });
  },
  createQuotation: function createQuotation(contact, e) {
    e.preventDefault();
    var quo = { company_id: contact.company_id, contact_id: contact.id };
    this.props.dispatch(quoAction.store(quo)).then(function (res) {
      return (0, _page2.default)('/quotations/' + res.payload.id);
    });
  },
  handleSubmitCompany: function handleSubmitCompany(company) {
    var dispatch = this.props.dispatch;

    dispatch(action.store(company)).then(this.handleSubmitCompanyResponse);
  },
  handleSubmitCompanyResponse: function handleSubmitCompanyResponse(actionRes) {
    var _this = this;

    var dispatch = this.props.dispatch;

    if (actionRes.type == "COMPANIES_STORE") {
      dispatch(action.setCompany(actionRes.payload)).then(function () {
        return _this.setState({ showCompanyForm: false, showContactForm: true });
      });
    }
  },
  handleSubmitContact: function handleSubmitContact(contact) {
    this.props.dispatch(contactAction.store(contact));
  },
  toggleCompanyForm: function toggleCompanyForm(e) {
    if (e) e.preventDefault();

    this.setState({
      showCompanyForm: !this.state.showCompanyForm
    });
  },
  toggleContactForm: function toggleContactForm(e) {
    if (e) e.preventDefault();
    this.setState({ showContactForm: !this.state.showContactForm });
  },
  render: function render() {
    var _this2 = this;

    var classes = {
      input: "form-control autocomplete",
      results: 'list-group',
      listItem: 'list-group-item',
      token: 'btn btn-primary btn-sm'
    };

    return _react2.default.createElement(
      'div',
      { className: 'col-md-6', style: { float: 'none', margin: '0 auto' } },
      _react2.default.createElement(
        'div',
        { className: 'col-md-12' },
        _react2.default.createElement(
          'div',
          { className: 'panel' },
          _react2.default.createElement(
            'div',
            { className: 'panel-body' },
            _react2.default.createElement(_autocomplete2.default, {
              collection: this.props.companies.items,
              search: this.searchCompanies,
              selected: this.storeSelected,
              loading: this.state.loading
            }),
            _react2.default.createElement(
              'button',
              {
                className: 'btn btn-default pull-right btn-sm',
                onClick: this.toggleCompanyForm
              },
              'Nueva Empresa'
            ),
            _react2.default.createElement(
              'div',
              { className: this.state.showCompanyForm ? 'col-sm-12' : 'hidden' },
              _react2.default.createElement(
                'div',
                { className: this.props.companies.errors.length ? "alert alert-danger" : "" },
                this.props.companies.errors
              ),
              _react2.default.createElement(_form_create2.default, {
                btnStoreText: 'Guardar',
                btnCleanText: 'Cancelar',
                onCancel: this.toggleCompanyForm,
                onSubmit: this.handleSubmitCompany
              })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'panel' },
          _react2.default.createElement(
            'div',
            { className: 'panel-heading' },
            _react2.default.createElement(
              'h5',
              null,
              'Empresa: ',
              _react2.default.createElement(
                'b',
                null,
                this.props.companies.company.name
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'panel-body' },
            _react2.default.createElement(
              'div',
              { className: this.state.showContactForm ? 'col-sm-12' : 'hidden' },
              _react2.default.createElement(
                'div',
                { className: this.props.contacts.errors.length ? "alert alert-danger" : "" },
                this.props.contacts.errors
              ),
              _react2.default.createElement(_form_create4.default, {
                company_id: this.props.companies.company.id ? this.props.companies.company.id : null,
                btnText: 'Guardar',
                onSubmit: this.handleSubmitContact,
                onCancel: this.toggleContactForm
              })
            ),
            _react2.default.createElement(
              'button',
              {
                onClick: this.toggleContactForm,
                className: this.props.companies.company.id ? "btn btn-default pull-right btn-sm" : "hidden"
              },
              'Nuevo Contacto'
            ),
            _react2.default.createElement('div', { className: 'row' }),
            _react2.default.createElement(
              'div',
              { className: 'table-responsive' },
              _react2.default.createElement(
                'table',
                { className: 'table' },
                _react2.default.createElement(
                  'thead',
                  null,
                  _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                      'th',
                      null,
                      'Nombre'
                    ),
                    _react2.default.createElement(
                      'th',
                      null,
                      'Email'
                    ),
                    _react2.default.createElement(
                      'th',
                      null,
                      'Opciones'
                    )
                  )
                ),
                _react2.default.createElement(
                  'tbody',
                  null,
                  this.props.contacts.items.map(function (contact) {
                    return _react2.default.createElement(
                      'tr',
                      { key: contact.id },
                      _react2.default.createElement(
                        'td',
                        null,
                        contact.name + ' ' + contact.lastname
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        contact.email
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement(
                          'button',
                          { className: 'btn btn-primary btn-sm', onClick: _this2.createQuotation.bind(_this2, contact) },
                          'Crear Cotizaci\xF3n'
                        )
                      )
                    );
                  })
                )
              )
            )
          )
        )
      )
    );
  }
});

exports.default = (0, _reactRedux.connect)(function (store) {
  return { companies: store.companies, contacts: store.contacts };
})(createPanel);

/***/ }),
/* 460 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(20);

var _page = __webpack_require__(79);

var _page2 = _interopRequireDefault(_page);

var _companies = __webpack_require__(106);

var action = _interopRequireWildcard(_companies);

var _contacts = __webpack_require__(56);

var contactAction = _interopRequireWildcard(_contacts);

var _solicitudes = __webpack_require__(92);

var quoAction = _interopRequireWildcard(_solicitudes);

var _form_create = __webpack_require__(152);

var _form_create2 = _interopRequireDefault(_form_create);

var _form_create3 = __webpack_require__(81);

var _form_create4 = _interopRequireDefault(_form_create3);

var _list = __webpack_require__(153);

var _list2 = _interopRequireDefault(_list);

var _loader = __webpack_require__(151);

var _loader2 = _interopRequireDefault(_loader);

var _autocomplete = __webpack_require__(220);

var _autocomplete2 = _interopRequireDefault(_autocomplete);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createPanelSolicitudes = _react2.default.createClass({
  displayName: 'createPanelSolicitudes',
  getInitialState: function getInitialState() {
    return {
      companyOptions: [],
      companies: [],
      contacts: [],
      loading: false,
      showCompanyForm: false,
      showContactForm: false
    };
  },
  componentDidMount: function componentDidMount() {
    this.props.dispatch(action.cleanItems());
    this.props.dispatch(contactAction.cleanItems());
  },
  searchCompanies: function searchCompanies(name) {
    this.setState({ loading: true });
    var query = { query_name: name };
    this.props.dispatch(action.fetch(query));
    this.setState({ loading: false });
  },
  storeSelected: function storeSelected(company) {
    var dispatch = this.props.dispatch;

    var query = { company_id: company[0].id };

    dispatch(contactAction.fetch(query)).then(function () {
      dispatch(action.setCompany(company[0]));
      dispatch(action.cleanItems());
    });
  },
  createQuotation: function createQuotation(contact, e) {
    e.preventDefault();
    var quo = { company_id: contact.company_id, contact_id: contact.id };
    this.props.dispatch(quoAction.store(quo)).then(function (res) {
      return (0, _page2.default)('/solicitudes/' + res.payload.id);
    });
  },
  handleSubmitCompany: function handleSubmitCompany(company) {
    var dispatch = this.props.dispatch;

    dispatch(action.store(company)).then(this.handleSubmitCompanyResponse);
  },
  handleSubmitCompanyResponse: function handleSubmitCompanyResponse(actionRes) {
    var _this = this;

    var dispatch = this.props.dispatch;

    if (actionRes.type == "COMPANIES_STORE") {
      dispatch(action.setCompany(actionRes.payload)).then(function () {
        return _this.setState({ showCompanyForm: false, showContactForm: true });
      });
    }
  },
  handleSubmitContact: function handleSubmitContact(contact) {
    this.props.dispatch(contactAction.store(contact));
  },
  toggleCompanyForm: function toggleCompanyForm(e) {
    if (e) e.preventDefault();

    this.setState({
      showCompanyForm: !this.state.showCompanyForm
    });
  },
  toggleContactForm: function toggleContactForm(e) {
    if (e) e.preventDefault();
    this.setState({ showContactForm: !this.state.showContactForm });
  },
  render: function render() {
    var _this2 = this;

    var classes = {
      input: "form-control autocomplete",
      results: 'list-group',
      listItem: 'list-group-item',
      token: 'btn btn-primary btn-sm'
    };

    return _react2.default.createElement(
      'div',
      { className: 'col-md-6', style: { float: 'none', margin: '0 auto' } },
      _react2.default.createElement(
        'div',
        { className: 'col-md-12' },
        _react2.default.createElement(
          'div',
          { className: 'panel' },
          _react2.default.createElement(
            'div',
            { className: 'panel-body' },
            _react2.default.createElement(_autocomplete2.default, {
              collection: this.props.companies.items,
              search: this.searchCompanies,
              selected: this.storeSelected,
              loading: this.state.loading
            }),
            _react2.default.createElement(
              'button',
              {
                className: 'btn btn-default pull-right btn-sm',
                onClick: this.toggleCompanyForm
              },
              'Nueva Empresa'
            ),
            _react2.default.createElement(
              'div',
              { className: this.state.showCompanyForm ? 'col-sm-12' : 'hidden' },
              _react2.default.createElement(
                'div',
                { className: this.props.companies.errors.length ? "alert alert-danger" : "" },
                this.props.companies.errors
              ),
              _react2.default.createElement(_form_create2.default, {
                btnStoreText: 'Guardar',
                btnCleanText: 'Cancelar',
                onCancel: this.toggleCompanyForm,
                onSubmit: this.handleSubmitCompany
              })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'panel' },
          _react2.default.createElement(
            'div',
            { className: 'panel-heading' },
            _react2.default.createElement(
              'h5',
              null,
              'Empresa: ',
              _react2.default.createElement(
                'b',
                null,
                this.props.companies.company.name
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'panel-body' },
            _react2.default.createElement(
              'div',
              { className: this.state.showContactForm ? 'col-sm-12' : 'hidden' },
              _react2.default.createElement(
                'div',
                { className: this.props.contacts.errors.length ? "alert alert-danger" : "" },
                this.props.contacts.errors
              ),
              _react2.default.createElement(_form_create4.default, {
                company_id: this.props.companies.company.id ? this.props.companies.company.id : null,
                btnText: 'Guardar',
                onSubmit: this.handleSubmitContact,
                onCancel: this.toggleContactForm
              })
            ),
            _react2.default.createElement(
              'button',
              {
                onClick: this.toggleContactForm,
                className: this.props.companies.company.id ? "btn btn-default pull-right btn-sm" : "hidden"
              },
              'Nuevo Contacto'
            ),
            _react2.default.createElement('div', { className: 'row' }),
            _react2.default.createElement(
              'div',
              { className: 'table-responsive' },
              _react2.default.createElement(
                'table',
                { className: 'table' },
                _react2.default.createElement(
                  'thead',
                  null,
                  _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                      'th',
                      null,
                      'Nombre'
                    ),
                    _react2.default.createElement(
                      'th',
                      null,
                      'Email'
                    ),
                    _react2.default.createElement(
                      'th',
                      null,
                      'Opciones'
                    )
                  )
                ),
                _react2.default.createElement(
                  'tbody',
                  null,
                  this.props.contacts.items.map(function (contact) {
                    return _react2.default.createElement(
                      'tr',
                      { key: contact.id },
                      _react2.default.createElement(
                        'td',
                        null,
                        contact.name + ' ' + contact.lastname
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        contact.email
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement(
                          'button',
                          { className: 'btn btn-primary btn-sm', onClick: _this2.createQuotation.bind(_this2, contact) },
                          'Crear Solicitud'
                        )
                      )
                    );
                  })
                )
              )
            )
          )
        )
      )
    );
  }
});

exports.default = (0, _reactRedux.connect)(function (store) {
  return { companies: store.companies, contacts: store.contacts };
})(createPanelSolicitudes);

/***/ }),
/* 461 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(20);

var _companies = __webpack_require__(106);

var action = _interopRequireWildcard(_companies);

var _company = __webpack_require__(510);

var _company2 = _interopRequireDefault(_company);

var _form_create = __webpack_require__(152);

var _form_create2 = _interopRequireDefault(_form_create);

var _filters = __webpack_require__(225);

var _filters2 = _interopRequireDefault(_filters);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var list = _react2.default.createClass({
  displayName: 'list',

  getInitialState: function getInitialState() {
    return {
      filters: {
        query: null,
        offset: 0
      }
    };
  },

  componentDidMount: function componentDidMount() {
    this.fetch();
  },

  fetch: function fetch(filters) {
    var query = void 0;

    if (filters) {
      query = filters;
    } else {
      query = this.state.filters;
    }

    this.props.dispatch(action.fetch(query));
  },

  handleSearch: function handleSearch(val) {
    this.setState({ filters: { query: val } });
    this.fetch({ query: val });
  },

  loadMore: function loadMore(offset) {
    this.setState({
      filters: { offset: offset }
    });

    this.fetch({ offset: offset });
  },

  loadLess: function loadLess(offset) {
    this.setState({ filters: { offset: offset } });
    this.fetch({ offset: offset });
  },

  handleEdit: function handleEdit(company, e) {
    e.preventDefault();
    this.props.dispatch(action.setCompany(company));
  },

  handleSubmit: function handleSubmit(company) {
    if (company.id) {
      this.props.dispatch(action.update(company));
    } else {
      this.props.dispatch(action.store(company));
    }
  },

  render: function render() {
    var _this = this;

    var _props = this.props,
        errors = _props.errors,
        items = _props.items,
        company = _props.company;


    var companyNodes = items.map(function (company) {
      return _react2.default.createElement(_company2.default, {
        key: company.id,
        company: company,
        onEdit: _this.handleEdit
      });
    });

    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { className: 'col-md-8' },
        _react2.default.createElement(_filters2.default, {
          onSearch: this.handleSearch,
          onNext: this.loadMore,
          onPrev: this.loadLess,
          offset: this.state.filters.offset
        }),
        _react2.default.createElement(
          'div',
          { className: 'companies-list' },
          companyNodes
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'col-md-4' },
        _react2.default.createElement(
          'div',
          { className: 'panel sidebar__right-fixed' },
          _react2.default.createElement(
            'div',
            { className: 'panel-body' },
            _react2.default.createElement(
              'div',
              { className: errors.length ? "alert alert-danger" : "" },
              errors
            ),
            _react2.default.createElement(_form_create2.default, {
              company: company,
              btnCleanText: 'Cancelar',
              btnStoreText: 'Guardar',
              onSubmit: this.handleSubmit
            })
          )
        )
      )
    );
  }
});

exports.default = (0, _reactRedux.connect)(function (store) {
  return store.companies;
})(list);

/***/ }),
/* 462 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(20);

var _contacts = __webpack_require__(56);

var action = _interopRequireWildcard(_contacts);

var _form_create = __webpack_require__(81);

var _form_create2 = _interopRequireDefault(_form_create);

var _filters = __webpack_require__(225);

var _filters2 = _interopRequireDefault(_filters);

var _list = __webpack_require__(153);

var _list2 = _interopRequireDefault(_list);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var section = _react2.default.createClass({
  displayName: 'section',
  getInitialState: function getInitialState() {
    return {
      filters: {
        offset: 0
      }
    };
  },
  componentDidMount: function componentDidMount() {
    this.fetch();
  },
  fetch: function fetch(filters) {
    var query = filters ? filters : {};
    this.props.dispatch(action.fetch(query));
  },


  handleSearch: function handleSearch(val) {
    this.setState({ filters: { query: val } });
    this.fetch({ query: val });
  },

  paginate: function paginate(offset) {
    var filters = _extends({}, this.state.filters, { offset: offset });
    this.setState({ filters: filters });
    this.fetch(filters);
  },

  handleEdit: function handleEdit(contact) {
    this.props.dispatch(action.setContact(contact));
  },
  handleSubmit: function handleSubmit(contact) {
    if (contact.id) {
      this.props.dispatch(action.update(contact));
    } else {
      this.props.dispatch(action.store(contact));
    }
  },
  render: function render() {
    var contacts = this.props.items;

    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { className: 'col-md-8' },
        _react2.default.createElement(_filters2.default, {
          onSearch: this.handleSearch,
          onNext: this.paginate,
          onPrev: this.paginate,
          offset: this.state.filters.offset
        }),
        _react2.default.createElement(
          'div',
          { className: 'panel' },
          _react2.default.createElement(
            'div',
            { className: 'panel-body' },
            _react2.default.createElement(_list2.default, { contacts: contacts, onEdit: this.handleEdit })
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'col-md-4' },
        _react2.default.createElement(
          'div',
          { className: 'panel sidebar__right-fixed' },
          _react2.default.createElement(
            'div',
            { className: 'panel-body' },
            _react2.default.createElement(
              'div',
              { className: this.props.errors.length ? "alert alert-danger" : "" },
              this.props.errors
            ),
            _react2.default.createElement(_form_create2.default, {
              contact: this.props.contact,
              onSubmit: this.handleSubmit,
              btnText: 'Guardar'
            })
          )
        )
      )
    );
  }
});

exports.default = (0, _reactRedux.connect)(function (store) {
  return store.contacts;
})(section);

/***/ }),
/* 463 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QuotationSection = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(20);

var _quotations = __webpack_require__(57);

var action = _interopRequireWildcard(_quotations);

var _services = __webpack_require__(91);

var serviceAction = _interopRequireWildcard(_services);

var _activities = __webpack_require__(55);

var activityAction = _interopRequireWildcard(_activities);

var _products = __webpack_require__(107);

var productAction = _interopRequireWildcard(_products);

var _trackings = __webpack_require__(108);

var trackingAction = _interopRequireWildcard(_trackings);

var _contacts = __webpack_require__(56);

var contactAction = _interopRequireWildcard(_contacts);

var _contact = __webpack_require__(524);

var _contact2 = _interopRequireDefault(_contact);

var _filters = __webpack_require__(526);

var _filters2 = _interopRequireDefault(_filters);

var _edit = __webpack_require__(525);

var _edit2 = _interopRequireDefault(_edit);

var _status = __webpack_require__(532);

var _status2 = _interopRequireDefault(_status);

var _products2 = __webpack_require__(530);

var _products3 = _interopRequireDefault(_products2);

var _services2 = __webpack_require__(531);

var _services3 = _interopRequireDefault(_services2);

var _comment = __webpack_require__(523);

var _comment2 = _interopRequireDefault(_comment);

var _mails = __webpack_require__(527);

var _mails2 = _interopRequireDefault(_mails);

var _no_effective = __webpack_require__(528);

var _no_effective2 = _interopRequireDefault(_no_effective);

var _no_send = __webpack_require__(529);

var _no_send2 = _interopRequireDefault(_no_send);

var _times = __webpack_require__(533);

var _times2 = _interopRequireDefault(_times);

var _activity = __webpack_require__(522);

var _activity2 = _interopRequireDefault(_activity);

var _trackings2 = __webpack_require__(535);

var _trackings3 = _interopRequireDefault(_trackings2);

var _section = __webpack_require__(103);

var _section2 = _interopRequireDefault(_section);

var _alert = __webpack_require__(219);

var _alert2 = _interopRequireDefault(_alert);

var _alert3 = __webpack_require__(223);

var _alert4 = _interopRequireDefault(_alert3);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var QuotationSection = exports.QuotationSection = _react2.default.createClass({
  displayName: 'QuotationSection',

  alert: null,

  getInitialState: function getInitialState() {
    return {
      showComment: false,
      showMail: false,
      showNoEffective: false,
      showNoSend: false,
      showErrors: false,
      disabled: false
    };
  },

  componentWillMount: function componentWillMount() {
    this.fetchQuotation();
  },

  componentWillReceiveProps: function componentWillReceiveProps(props) {
    if (parseInt(props.params.id) !== parseInt(this.props.quotations.quotation.id)) {
      this.fetchQuotation();
    }
  },


  fetchQuotation: function fetchQuotation() {
    var _this = this;

    var _props = this.props,
        params = _props.params,
        dispatch = _props.dispatch;


    dispatch(action.fetchOne(params.id)).then(function (actionRes) {
      var query = { quotation_id: params.id };
      _this.handleDisabled(actionRes.payload.status);
      dispatch(productAction.fetch(query));
      dispatch(serviceAction.cleanItems());
      dispatch(action.fetchServices(params.id));
      dispatch(activityAction.fetch(query));
      dispatch(trackingAction.fetch(query));
      dispatch(contactAction.fetch(query));
    });
  },

  setActivity: function setActivity(message) {
    var _props2 = this.props,
        user = _props2.user,
        quotations = _props2.quotations;


    (0, _alert4.default)(message);

    var activity = {
      message: message,
      user_id: user.user.id,
      quotation_id: quotations.quotation.id
    };

    return this.props.dispatch(activityAction.store(activity));
  },


  handleShowComment: function handleShowComment() {
    var show = true;
    if (this.state.showComment) {
      show = false;
    }

    this.setState({ showComment: show });
  },

  handleShowMail: function handleShowMail() {
    this.setState({ showMail: !this.state.showMail });
  },
  handleShowNoEffective: function handleShowNoEffective() {
    this.setState({ showNoEffective: !this.state.showNoEffective });
  },
  handleShowNoSend: function handleShowNoSend() {
    this.setState({ showNoSend: !this.state.showNoSend });
  },
  handleOptions: function handleOptions(filters, message) {
    var _this2 = this;

    var quotations = this.props.quotations;


    this.setActivity(message).then(function () {
      var data = _extends({}, quotations.quotation, filters);
      _this2._update(data);
    });
  },


  handleSaveComment: function handleSaveComment(comment) {
    var _this3 = this;

    this.setActivity('edito el comentario').then(function () {
      _this3._update({ comment: comment });
      _this3.setState({ showComment: false });
    });
  },

  handleSaveMail: function handleSaveMail(mail) {
    var _this4 = this;

    this.setActivity('edito el mail').then(function () {
      _this4._update(mail);
      _this4.setState({ showMail: false });
    });
  },
  handleSendMail: function handleSendMail(mail) {
    var _this5 = this;

    var id = this.props.quotations.quotation.id;

    var quo = _extends({}, this.props.quotations.quotation, mail);

    return this.props.dispatch(action.update(quo)).then(function () {
      return _this5.props.dispatch(action.sendMail(id));
    }).then(function (res) {
      if (res.type == 'QUOTATIONS_FAIL') {
        console.log('inside');
        (0, _alert4.default)(res.payload[0]);
        return;
      }

      _this5.setActivity('envio el mail');
      return res;
    });
  },
  handleServiceApproval: function handleServiceApproval(serviceApproval) {
    this._update({ service_approval: serviceApproval });
  },
  handleSaveNoEffective: function handleSaveNoEffective(status) {
    var _this6 = this;

    var message = 'Cambio estado a ' + status.status;
    this.setActivity(message).then(function () {
      _this6._update(status);
      _this6.setState({
        showNoEffective: false,
        showNoSend: false
      });
    });
  },
  handleStatus: function handleStatus(status, message) {
    var _this7 = this;

    this.setActivity(message).then(function () {
      _this7._update(status);
    });
  },
  changeContact: function changeContact(contactId) {
    this._update({ contact_id: contactId });
  },
  _update: function _update(data) {
    var quo = _extends({}, this.props.quotations.quotation, data);
    this.props.dispatch(action.update(quo)).then(this.handleUpdate);
  },
  handleUpdate: function handleUpdate(actionRes) {
    if (actionRes.type == 'QUOTATIONS_FAIL') {
      return this.setState({ showErrors: true });
    } else {
      // return this.handleDisabled(actionRes.payload.status);
    }
  },
  handleDisabled: function handleDisabled(status) {
    var disabled = false;

    // if(status == 'Efectiva') {
    //   disabled = true;
    // } else {
    //   disabled = false;
    // }

    this.setState({
      showErrors: false,
      errors: [],
      disabled: disabled
    });
  },
  handlePriority: function handlePriority(priority, e) {
    e.preventDefault();
    this._update({ priority: priority });
  },
  render: function render() {
    var quotation = this.props.quotations.quotation;
    var user = this.props.user.user;


    return _react2.default.createElement(
      'div',
      { id: 'quotation-' + quotation.id },
      _react2.default.createElement(
        'div',
        { className: 'col-md-12' },
        _react2.default.createElement(
          'div',
          { className: 'panel' },
          _react2.default.createElement(
            'div',
            { className: 'panel-body quo-header' },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'h4',
                null,
                'Cotizaci\xF3n ',
                quotation.id,
                '  ',
                quotation.rethink_from ? _react2.default.createElement(
                  'a',
                  { href: '/quotations/' + quotation.rethink_from },
                  'replanteada de ',
                  quotation.rethink_from
                ) : "",
                ' \u2022 ',
                quotation.status,
                ' \u2022'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'quo-header__priority' },
              _react2.default.createElement(
                'h5',
                null,
                'Prioridad:',
                _react2.default.createElement(
                  'a',
                  {
                    className: 'btn btn-sm',
                    onClick: this.handlePriority.bind(null, '1'),
                    disabled: quotation.priority == 1 ? true : false
                  },
                  _react2.default.createElement('div', {
                    className: quotation.priority == 1 ? 'priority priority--1 priority--active' : 'priority priority--1 '
                  })
                ),
                _react2.default.createElement(
                  'a',
                  {
                    className: 'btn btn-sm',
                    onClick: this.handlePriority.bind(null, '2'),
                    disabled: quotation.priority == 2 ? true : false
                  },
                  _react2.default.createElement('div', { className: quotation.priority == 2 ? 'priority priority--2 priority--active' : 'priority priority--2 ' })
                ),
                _react2.default.createElement(
                  'a',
                  {
                    className: 'btn btn-sm',
                    onClick: this.handlePriority.bind(null, '3'),
                    disabled: quotation.priority == 3 ? true : false
                  },
                  _react2.default.createElement('div', { className: quotation.priority == 3 ? 'priority priority--3 priority--active' : 'priority priority--3 ' })
                )
              )
            )
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'col-md-9' },
        _react2.default.createElement(_filters2.default, {
          onChange: this.handleOptions,
          quotation: quotation,
          user: user,
          disabled: this.state.disabled
        }),
        _react2.default.createElement(_edit2.default, {
          quotation: quotation,
          onShowComment: this.handleShowComment,
          onShowMails: this.handleShowMail,
          onServiceApproval: this.handleServiceApproval
        }),
        _react2.default.createElement(_comment2.default, {
          show: this.state.showComment,
          onClose: this.handleShowComment,
          comment: quotation.comment,
          OnSaveComment: this.handleSaveComment
        }),
        _react2.default.createElement(_mails2.default, {
          show: this.state.showMail,
          onClose: this.handleShowMail,
          quotation: quotation,
          onSaveMail: this.handleSaveMail,
          onSendMail: this.handleSendMail
        }),
        _react2.default.createElement(_products3.default, _extends({}, this.props, {
          quotationId: quotation.id,
          disabled: this.state.disabled
        })),
        _react2.default.createElement(_services3.default, _extends({}, this.props, {
          quotationId: quotation.id,
          disabled: this.state.disabled,
          setActivity: this.setActivity
        })),
        _react2.default.createElement(_status2.default, _extends({}, this.props, {
          quotation: quotation,
          handleOpenNoEffective: this.handleShowNoEffective,
          handleOpenNoSend: this.handleShowNoSend,
          onStatusChange: this.handleStatus,
          disabled: this.state.disabled
        })),
        _react2.default.createElement(_no_effective2.default, {
          quotation: quotation,
          show: this.state.showNoEffective,
          onSave: this.handleSaveNoEffective
        }),
        _react2.default.createElement(_no_send2.default, {
          quotation: quotation,
          show: this.state.showNoSend,
          onSave: this.handleSaveNoEffective
        }),
        _react2.default.createElement(_trackings3.default, _extends({}, this.props, {
          quotationId: quotation.id,
          onStatusChange: this.handleStatus
        })),
        _react2.default.createElement(
          'div',
          { id: 'todos-' + quotation.id },
          _react2.default.createElement(_section2.default, { quotation_id: this.props.params.id })
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'col-md-3' },
        _react2.default.createElement(_contact2.default, _extends({}, this.props, {
          changeContact: this.changeContact
        })),
        _react2.default.createElement(_times2.default, { quotation: quotation }),
        _react2.default.createElement(_activity2.default, {
          quotationId: quotation.id,
          activities: this.props.activities.items,
          user: this.props.user.user
        })
      )
    );
  }
});

exports.default = (0, _reactRedux.connect)(function (store) {
  return store;
})(QuotationSection);

/***/ }),
/* 464 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _list = __webpack_require__(537);

var _list2 = _interopRequireDefault(_list);

var _list3 = __webpack_require__(508);

var _list4 = _interopRequireDefault(_list3);

var _section = __webpack_require__(103);

var _section2 = _interopRequireDefault(_section);

var _section3 = __webpack_require__(211);

var _section4 = _interopRequireDefault(_section3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dashboard = _react2.default.createClass({
  displayName: 'dashboard',

  render: function render() {
    var _props = this.props,
        user = _props.user,
        solicitudes = _props.solicitudes;


    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { className: 'col-md-9' },
        _react2.default.createElement(_list2.default, { solicitudes: this.props.solicitudes }),
        solicitudes ? '' : _react2.default.createElement(_section2.default, { user_id: user.id })
      ),
      _react2.default.createElement(
        'div',
        { className: 'col-md-3' },
        _react2.default.createElement(_list4.default, null)
      )
    );
  }
});

exports.default = dashboard;

/***/ }),
/* 465 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(20);

var _services = __webpack_require__(91);

var action = _interopRequireWildcard(_services);

var _form_create = __webpack_require__(154);

var _form_create2 = _interopRequireDefault(_form_create);

var _list = __webpack_require__(540);

var _list2 = _interopRequireDefault(_list);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var section = _react2.default.createClass({
  displayName: 'section',
  getInitialState: function getInitialState() {
    return {
      allServices: [],
      service: {
        price_1: '',
        price_2: ''
      },
      filters: {
        query: '',
        offset: 0
      },
      base: 15
    };
  },
  componentDidMount: function componentDidMount() {
    this.fetch();
  },
  componentWillReceiveProps: function componentWillReceiveProps(props) {
    if (props.items.length) {
      this.setState({ allServices: props.items });
    }
  },
  fetch: function fetch() {
    var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    this.props.dispatch(action.fetch(query));
  },
  handleEdit: function handleEdit(service) {
    this.props.dispatch(action.setService(service));
  },
  handleSubmit: function handleSubmit(service) {
    if (service.id) {
      this.props.dispatch(action.update(service));
    } else {
      this.props.dispatch(action.store(service));
    }
  },
  search: function search(e) {
    var val = e.currentTarget.value;
    this.setState({ query: val });
    this.fetch(_extends({}, this.state.filters, { query: val }));
  },


  // search(e) {
  //   let val = e.currentTarget.value;
  //   let q = new RegExp(val, 'i');
  //   let services = this.state.services.filter(service => service.title.match(q));
  //   if(val.length == 0) {
  //     this.setState({services: this.state.allServices});
  //   } else {
  //     this.setState({services});
  //   }
  // },

  clean: function clean() {
    this.setState({
      service: cleanObject(this.state.service)
    });
  },
  handlePrev: function handlePrev() {
    var _state = this.state,
        filters = _state.filters,
        base = _state.base;

    var offset = parseInt(filters.offset) - this.state.base;
    this.setState({ filters: _extends({}, this.state.filters, { offset: offset }) });
    this.fetch(_extends({}, this.state.filters, { offset: offset }));
  },
  handleNext: function handleNext() {
    var _state2 = this.state,
        filters = _state2.filters,
        base = _state2.base;

    var offset = parseInt(filters.offset) + this.state.base;
    this.setState({ filters: _extends({}, this.state.filters, { offset: offset }) });
    this.fetch(_extends({}, this.state.filters, { offset: offset }));
  },


  render: function render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { className: 'col-md-7' },
        _react2.default.createElement(
          'div',
          { className: 'panel' },
          _react2.default.createElement(
            'div',
            { className: 'panel-body' },
            _react2.default.createElement('input', {
              type: 'text',
              className: 'form-control',
              placeholder: 'Buscar',
              onChange: this.search
            }),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              'div',
              { className: 'btn-group', role: 'group' },
              _react2.default.createElement(
                'button',
                {
                  className: 'btn btn-default btn-sm',
                  onClick: this.handlePrev,
                  disabled: !this.state.filters.offset
                },
                _react2.default.createElement('i', { className: 'fa fa-chevron-left' })
              ),
              _react2.default.createElement(
                'button',
                {
                  className: 'btn btn-default btn-sm',
                  onClick: this.handleNext
                },
                _react2.default.createElement('i', { className: 'fa fa-chevron-right' })
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'panel' },
          _react2.default.createElement(
            'div',
            { className: 'panel-body' },
            _react2.default.createElement(_list2.default, {
              services: this.props.items,
              onEdit: this.handleEdit
            })
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'col-md-4' },
        _react2.default.createElement(
          'div',
          { className: 'panel sidebar__right-fixed' },
          _react2.default.createElement(
            'div',
            { className: 'panel-body' },
            _react2.default.createElement(_form_create2.default, {
              service: this.props.service,
              errors: this.props.errors,
              onSubmit: this.handleSubmit,
              onCancel: this.clean
            })
          )
        )
      )
    );
  }
});

exports.default = (0, _reactRedux.connect)(function (store) {
  return store.services;
})(section);

/***/ }),
/* 466 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SolicitudSection = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(20);

var _solicitudes = __webpack_require__(92);

var action = _interopRequireWildcard(_solicitudes);

var _services = __webpack_require__(91);

var serviceAction = _interopRequireWildcard(_services);

var _activities = __webpack_require__(55);

var activityAction = _interopRequireWildcard(_activities);

var _products = __webpack_require__(107);

var productAction = _interopRequireWildcard(_products);

var _trackings = __webpack_require__(108);

var trackingAction = _interopRequireWildcard(_trackings);

var _contacts = __webpack_require__(56);

var contactAction = _interopRequireWildcard(_contacts);

var _contact = __webpack_require__(543);

var _contact2 = _interopRequireDefault(_contact);

var _filters = __webpack_require__(545);

var _filters2 = _interopRequireDefault(_filters);

var _edit = __webpack_require__(544);

var _edit2 = _interopRequireDefault(_edit);

var _status = __webpack_require__(551);

var _status2 = _interopRequireDefault(_status);

var _products2 = __webpack_require__(549);

var _products3 = _interopRequireDefault(_products2);

var _services2 = __webpack_require__(550);

var _services3 = _interopRequireDefault(_services2);

var _comment = __webpack_require__(542);

var _comment2 = _interopRequireDefault(_comment);

var _mails = __webpack_require__(546);

var _mails2 = _interopRequireDefault(_mails);

var _no_effective = __webpack_require__(547);

var _no_effective2 = _interopRequireDefault(_no_effective);

var _no_send = __webpack_require__(548);

var _no_send2 = _interopRequireDefault(_no_send);

var _times = __webpack_require__(552);

var _times2 = _interopRequireDefault(_times);

var _trackings2 = __webpack_require__(554);

var _trackings3 = _interopRequireDefault(_trackings2);

var _section = __webpack_require__(103);

var _section2 = _interopRequireDefault(_section);

var _asesores = __webpack_require__(541);

var _asesores2 = _interopRequireDefault(_asesores);

var _alert = __webpack_require__(219);

var _alert2 = _interopRequireDefault(_alert);

var _alert3 = __webpack_require__(223);

var _alert4 = _interopRequireDefault(_alert3);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SolicitudSection = exports.SolicitudSection = _react2.default.createClass({
  displayName: 'SolicitudSection',

  alert: null,

  getInitialState: function getInitialState() {
    return {
      showComment: false,
      showMail: false,
      showNoEffective: false,
      showNoSend: false,
      showErrors: false,
      disabled: false
    };
  },

  componentWillMount: function componentWillMount() {
    this.fetchQuotation();
  },

  componentWillReceiveProps: function componentWillReceiveProps(props) {
    console.log('uta', this.props.solicitudes);
    if (this.props.solicitudes.solicitud) {
      if (parseInt(props.params.id) !== parseInt(this.props.solicitudes.solicitud.id)) {
        this.fetchQuotation();
      }
    }
  },
  setActivity: function setActivity(message) {
    var _props = this.props,
        user = _props.user,
        solicitudes = _props.solicitudes;


    (0, _alert4.default)(message);

    var activity = {
      message: message,
      user_id: user.user.id,
      solicitudes_id: solicitudes.solicitud.id
    };

    return this.props.dispatch(activityAction.store(activity));
  },


  fetchQuotation: function fetchQuotation() {
    var _this = this;

    var _props2 = this.props,
        params = _props2.params,
        dispatch = _props2.dispatch;


    dispatch(action.fetchOne(params.id)).then(function (actionRes) {
      var query = { solicitudes_id: params.id };
      _this.handleDisabled(actionRes.payload.status);
      dispatch(productAction.fetch(query));
      dispatch(serviceAction.cleanItems());
      dispatch(action.fetchServices(params.id));
      dispatch(activityAction.fetch(query));
      dispatch(trackingAction.fetch(query));
      dispatch(contactAction.fetch(query));
    });
  },

  handleShowComment: function handleShowComment() {
    var show = true;
    if (this.state.showComment) {
      show = false;
    }

    this.setState({ showComment: show });
  },

  handleShowMail: function handleShowMail() {
    this.setState({ showMail: !this.state.showMail });
  },
  handleShowNoEffective: function handleShowNoEffective() {
    this.setState({ showNoEffective: !this.state.showNoEffective });
  },
  handleShowNoSend: function handleShowNoSend() {
    this.setState({ showNoSend: !this.state.showNoSend });
  },
  handleOptions: function handleOptions(filters, message) {
    var _this2 = this;

    var quotations = this.props.quotations;


    this.setActivity(message).then(function () {
      var data = _extends({}, quotations.quotation, filters);
      _this2._update(data);
    });
  },


  handleSaveComment: function handleSaveComment(comment) {
    var _this3 = this;

    this.setActivity('edito el comentario').then(function () {
      _this3._update({ comment: comment });
      _this3.setState({ showComment: false });
    });
  },

  handleSaveMail: function handleSaveMail(mail) {
    var _this4 = this;

    this.setActivity('edito el mail').then(function () {
      _this4._update(mail);
      _this4.setState({ showMail: false });
    });
  },
  handleSendMail: function handleSendMail(mail) {
    var _this5 = this;

    var id = this.props.quotations.quotation.id;

    var quo = _extends({}, this.props.quotations.quotation, mail);

    return this.props.dispatch(action.update(quo)).then(function () {
      return _this5.props.dispatch(action.sendMail(id));
    }).then(function (res) {
      if (res.type == 'SOLICITUDES_FAIL') {
        console.log('inside');
        (0, _alert4.default)(res.payload[0]);
        return;
      }

      _this5.setActivity('envio el mail');
      return res;
    });
  },
  handleServiceApproval: function handleServiceApproval(serviceApproval) {
    this._update({ service_approval: serviceApproval });
  },
  handleSaveNoEffective: function handleSaveNoEffective(status) {
    var _this6 = this;

    var message = 'Cambio estado a ' + status.status;
    this.setActivity(message).then(function () {
      _this6._update(status);
      _this6.setState({
        showNoEffective: false,
        showNoSend: false
      });
    });
  },
  handleStatus: function handleStatus(status, message) {
    var _this7 = this;

    this.setActivity(message).then(function () {
      _this7._update(status);
    });
  },
  changeContact: function changeContact(contactId) {
    this._update({ contact_id: contactId });
  },
  _update: function _update(data) {
    var quo = _extends({}, this.props.solicitudes.solicitud, data);
    this.props.dispatch(action.update(quo)).then(this.handleUpdate);
  },
  handleUpdate: function handleUpdate(actionRes) {
    if (actionRes.type == 'QUOTATIONS_FAIL') {
      return this.setState({ showErrors: true });
    } else {
      // return this.handleDisabled(actionRes.payload.status);
    }
  },
  handleDisabled: function handleDisabled(status) {
    var disabled = false;

    // if(status == 'Efectiva') {
    //   disabled = true;
    // } else {
    //   disabled = false;
    // }

    this.setState({
      showErrors: false,
      errors: [],
      disabled: disabled
    });
  },
  handlePriority: function handlePriority(priority, e) {
    e.preventDefault();
    this._update({ priority: priority });
  },
  render: function render() {
    var solicitud = this.props.solicitudes.solicitud;
    var user = this.props.user.user;


    return solicitud ? _react2.default.createElement(
      'div',
      { id: 'solicitud-' + solicitud.id },
      _react2.default.createElement(
        'div',
        { className: 'col-md-12' },
        _react2.default.createElement(
          'div',
          { className: 'panel' },
          _react2.default.createElement(
            'div',
            { className: 'panel-body quo-header' },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'h4',
                null,
                'Solicitud ',
                solicitud.id,
                '  ',
                solicitud.rethink_from ? _react2.default.createElement(
                  'a',
                  { href: '/solicituds/' + solicitud.rethink_from },
                  'replanteada de ',
                  solicitud.rethink_from
                ) : "",
                ' \u2022 ',
                solicitud.status,
                ' \u2022'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'quo-header__priority' },
              _react2.default.createElement(
                'h5',
                null,
                'Prioridad:',
                _react2.default.createElement(
                  'a',
                  {
                    className: 'btn btn-sm',
                    onClick: this.handlePriority.bind(null, '1'),
                    disabled: solicitud.priority == 1 ? true : false
                  },
                  _react2.default.createElement('div', {
                    className: solicitud.priority == 1 ? 'priority priority--1 priority--active' : 'priority priority--1 '
                  })
                ),
                _react2.default.createElement(
                  'a',
                  {
                    className: 'btn btn-sm',
                    onClick: this.handlePriority.bind(null, '2'),
                    disabled: solicitud.priority == 2 ? true : false
                  },
                  _react2.default.createElement('div', { className: solicitud.priority == 2 ? 'priority priority--2 priority--active' : 'priority priority--2 ' })
                ),
                _react2.default.createElement(
                  'a',
                  {
                    className: 'btn btn-sm',
                    onClick: this.handlePriority.bind(null, '3'),
                    disabled: solicitud.priority == 3 ? true : false
                  },
                  _react2.default.createElement('div', { className: solicitud.priority == 3 ? 'priority priority--3 priority--active' : 'priority priority--3 ' })
                )
              )
            )
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'col-md-9' },
        _react2.default.createElement(_filters2.default, {
          onChange: this.handleOptions,
          solicitud: solicitud,
          user: user,
          disabled: this.state.disabled
        }),
        _react2.default.createElement(_edit2.default, {
          solicitud: solicitud,
          onShowComment: this.handleShowComment,
          onShowMails: this.handleShowMail,
          onServiceApproval: this.handleServiceApproval
        }),
        _react2.default.createElement(_comment2.default, {
          show: this.state.showComment,
          onClose: this.handleShowComment,
          comment: solicitud.comment,
          OnSaveComment: this.handleSaveComment
        }),
        _react2.default.createElement(_mails2.default, {
          show: this.state.showMail,
          onClose: this.handleShowMail,
          solicitud: solicitud,
          onSaveMail: this.handleSaveMail,
          onSendMail: this.handleSendMail
        }),
        _react2.default.createElement(_products3.default, _extends({}, this.props, {
          solicitudId: solicitud.id,
          disabled: this.state.disabled
        })),
        _react2.default.createElement(_services3.default, _extends({}, this.props, {
          solicitudId: solicitud.id,
          disabled: this.state.disabled,
          setActivity: this.setActivity
        })),
        _react2.default.createElement(_status2.default, _extends({}, this.props, {
          solicitud: solicitud,
          handleOpenNoEffective: this.handleShowNoEffective,
          handleOpenNoSend: this.handleShowNoSend,
          onStatusChange: this.handleStatus,
          disabled: this.state.disabled
        })),
        _react2.default.createElement(_no_effective2.default, {
          solicitud: solicitud,
          show: this.state.showNoEffective,
          onSave: this.handleSaveNoEffective
        }),
        _react2.default.createElement(_no_send2.default, {
          solicitud: solicitud,
          show: this.state.showNoSend,
          onSave: this.handleSaveNoEffective
        }),
        _react2.default.createElement(_trackings3.default, _extends({}, this.props, {
          solicitudId: solicitud.id,
          onStatusChange: this.handleStatus
        })),
        false ? _react2.default.createElement(
          'div',
          { id: 'todos-' + solicitud.id },
          _react2.default.createElement(_section2.default, { solicitudes_id: this.props.params.id })
        ) : null
      ),
      _react2.default.createElement(
        'div',
        { className: 'col-md-3' },
        _react2.default.createElement(_contact2.default, _extends({}, this.props, {
          changeContact: this.changeContact
        })),
        _react2.default.createElement(_asesores2.default, _extends({}, this.props, {
          solicitud: solicitud })),
        _react2.default.createElement(_times2.default, { solicitud: solicitud })
      )
    ) : null;
  }
});

exports.default = (0, _reactRedux.connect)(function (store) {
  return store;
})(SolicitudSection);

/***/ }),
/* 467 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _list = __webpack_require__(556);

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dashboardSolicitudes = _react2.default.createClass({
  displayName: 'dashboardSolicitudes',

  render: function render() {
    var user = this.props.user;


    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { className: 'col-md-12' },
        _react2.default.createElement(_list2.default, null)
      )
    );
  }
});

exports.default = dashboardSolicitudes;

/***/ }),
/* 468 */,
/* 469 */,
/* 470 */,
/* 471 */,
/* 472 */,
/* 473 */,
/* 474 */,
/* 475 */,
/* 476 */,
/* 477 */,
/* 478 */,
/* 479 */,
/* 480 */,
/* 481 */,
/* 482 */,
/* 483 */,
/* 484 */,
/* 485 */,
/* 486 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.fetch = fetch;
exports.store = store;
exports.update = update;
exports.setContact = setContact;
exports.cleanItems = cleanItems;

var _axios = __webpack_require__(19);

var _axios2 = _interopRequireDefault(_axios);

var _rest_actions = __webpack_require__(41);

var _rest_actions2 = _interopRequireDefault(_rest_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TYPE = 'ASESORES';
var endpoint = '/api/v1/asesores';
var rest = (0, _rest_actions2.default)(endpoint, TYPE, 'ASESOR');

function fetch() {
	var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	return function (dispatch) {
		return rest.fetch(params, dispatch);
	};
}

function store(contact) {
	console.log('here', rest);
	return function (dispatch) {
		return rest.store(contact, dispatch);
	};
}

function update(contact) {
	return function (dispatch) {
		return rest.update(contact, dispatch);
	};
}

function setContact(contact) {
	return { type: TYPE + '_SET_ASESOR', payload: contact };
}

function cleanItems() {
	return { type: TYPE + '_CLEAN_ITEMS', payload: [] };
}

/***/ }),
/* 487 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fetch = fetch;

var _axios = __webpack_require__(19);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TYPE = 'REPORTS';
var endpoint = '/api/v1/reports';

function fetch() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return function (dispatch) {
        return _axios2.default.get(endpoint, { params: params }).then(function (res) {
            return dispatch({ type: TYPE + '_FETCH', payload: res.data });
        }).catch(function (err) {
            return dispatch({ type: TYPE + '_FAIL', payload: err.response.data });
        });
    };
}

/***/ }),
/* 488 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.fetch = fetch;
exports.store = store;
exports.completed = completed;
exports.sendMail = sendMail;

var _axios = __webpack_require__(19);

var _axios2 = _interopRequireDefault(_axios);

var _rest_actions = __webpack_require__(41);

var _rest_actions2 = _interopRequireDefault(_rest_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TYPE = 'TODOS';
var endpoint = '/api/v1/todos';
var rest = (0, _rest_actions2.default)(endpoint, TYPE, 'TODO');

function fetch() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return function (dispatch) {
    return rest.fetch(params, dispatch);
  };
}

function store() {
  var todo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return function (dispatch) {
    return rest.store(todo, dispatch);
  };
}

function completed() {
  var todo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return function (dispatch) {
    return _axios2.default.put(endpoint + '/' + todo.id, _extends({}, todo, { completed: !todo.completed })).then(function (res) {
      return dispatch({ type: TYPE + '_COMPLETED', payload: res.data });
    }).catch(function (err) {
      return dispatch({ type: TYPE + '_FAIL', payload: err });
    });
  };
}

function sendMail(id) {
  return function (dispatch) {
    return _axios2.default.post(endpoint + '/' + id + '/sendmail').then(function (res) {
      return dispatch({ type: TYPE + '_SENT', payload: res.data });
    }).catch(function (err) {
      return dispatch({ type: TYPE + '_FAIL', payload: err.response.data });
    });
  };
}

/***/ }),
/* 489 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(62);

var _page = __webpack_require__(79);

var _page2 = _interopRequireDefault(_page);

var _axios = __webpack_require__(19);

var _axios2 = _interopRequireDefault(_axios);

var _reactRedux = __webpack_require__(20);

var _store = __webpack_require__(457);

var _store2 = _interopRequireDefault(_store);

var _app = __webpack_require__(458);

var _app2 = _interopRequireDefault(_app);

var _dashboard = __webpack_require__(464);

var _dashboard2 = _interopRequireDefault(_dashboard);

var _dashboard3 = __webpack_require__(467);

var _dashboard4 = _interopRequireDefault(_dashboard3);

var _create_panel = __webpack_require__(459);

var _create_panel2 = _interopRequireDefault(_create_panel);

var _create_panel_solicitudes = __webpack_require__(460);

var _create_panel_solicitudes2 = _interopRequireDefault(_create_panel_solicitudes);

var _login = __webpack_require__(455);

var _login2 = _interopRequireDefault(_login);

var _section = __webpack_require__(463);

var _section2 = _interopRequireDefault(_section);

var _section3 = __webpack_require__(466);

var _section4 = _interopRequireDefault(_section3);

var _list = __webpack_require__(461);

var _list2 = _interopRequireDefault(_list);

var _section5 = __webpack_require__(462);

var _section6 = _interopRequireDefault(_section5);

var _section7 = __webpack_require__(465);

var _section8 = _interopRequireDefault(_section7);

var _section9 = __webpack_require__(211);

var _section10 = _interopRequireDefault(_section9);

var _section11 = __webpack_require__(103);

var _section12 = _interopRequireDefault(_section11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function root(component) {
  return (0, _reactDom.render)(_react2.default.createElement(
    _app2.default,
    null,
    _react2.default.createElement(
      _reactRedux.Provider,
      { store: _store2.default },
      component
    )
  ), document.getElementById("app"));
}

(0, _page2.default)('/', function () {
  var user = JSON.parse(localStorage.getItem('user'));
  return root(_react2.default.createElement(_dashboard2.default, { user: user }));
});

(0, _page2.default)('/companies', function () {
  return root(_react2.default.createElement(_list2.default, null));
});

(0, _page2.default)('/quotation/create', function () {
  return root(_react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_create_panel2.default, null)
  ));
});

(0, _page2.default)('/solicitudes', function () {
  var user = JSON.parse(localStorage.getItem('user'));
  return root(_react2.default.createElement(_dashboard4.default, { user: user }));
});

(0, _page2.default)('/solicitudes/create', function () {
  return root(_react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_create_panel_solicitudes2.default, null)
  ));
});

(0, _page2.default)('/solicitudes/:id', function (ctx) {
  return root(_react2.default.createElement(_section4.default, { params: ctx.params }));
});

(0, _page2.default)('/todos', function () {
  return root(_react2.default.createElement(
    'div',
    { className: 'col-md-8' },
    _react2.default.createElement(_section12.default, null)
  ));
});

(0, _page2.default)('/contacts', function () {
  return root(_react2.default.createElement(_section6.default, null));
});

(0, _page2.default)('/services', function () {
  return root(_react2.default.createElement(_section8.default, null));
});

(0, _page2.default)('/reports', function () {
  return root(_react2.default.createElement(_section10.default, null));
});

(0, _page2.default)('/quotations/:id', function (ctx) {
  return root(_react2.default.createElement(_section2.default, { params: ctx.params }));
});

(0, _page2.default)();

/***/ }),
/* 490 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(2);

module.exports = React.createClass({
  displayName: 'exports',


  handleChange: function handleChange() {
    this.props.onInputChange();
  },

  render: function render() {
    return React.createElement('input', {
      type: 'text',
      ref: 'input',
      className: 'form-control',
      placeholder: this.props.placeholder,
      value: this.props.value,
      onChange: this.handleChange
    });
  }
});

/***/ }),
/* 491 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _react2.default.createClass({
  displayName: 'exports',
  getDefaultProps: function getDefaultProps() {
    return {
      value: ''
    };
  },


  handleChange: function handleChange() {
    this.props.onTextareaChange();
  },

  render: function render() {
    var value = this.props.value;


    return _react2.default.createElement('textarea', {
      className: 'form-control',
      ref: 'textarea',
      placeholder: this.props.placeholder,
      onChange: this.handleChange,
      value: value
    });
  }
});

/***/ }),
/* 492 */,
/* 493 */,
/* 494 */,
/* 495 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;
var TYPE = 'ACTIVITIES';
var initialState = {
	items: [],
	errors: []
};

function reducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];

	switch (action.type) {
		case TYPE + '_FETCH':
			return _extends({}, state, {
				items: action.payload
			});
			break;

		case TYPE + '_STORE':
			return _extends({}, state, {
				items: [action.payload].concat(state.items)
			});
			break;

		case TYPE + '_FAIL':
			return _extends({}, state, {
				errors: [action.payload]
			});
			break;

		default:
			return state;
			break;
	}
}

/***/ }),
/* 496 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;

var _clean_object = __webpack_require__(49);

var _clean_object2 = _interopRequireDefault(_clean_object);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var TYPE = 'COMPANIES';
var initialState = {
	items: [],
	errors: [],
	company: {}
};

function reducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];

	switch (action.type) {
		case TYPE + '_FETCH':
			return _extends({}, state, {
				items: action.payload
			});
			break;

		case TYPE + '_SET_COMPANY':
			return _extends({}, state, {
				company: action.payload
			});
			break;

		case TYPE + '_STORE':
			return _extends({}, state, {
				company: {},
				items: [action.payload].concat(_toConsumableArray(state.items))
			});
			break;

		case TYPE + '_UPDATE':
			var updated = action.payload;

			return _extends({}, state, {
				company: {},
				items: state.items.map(function (model) {
					return model.id == updated.id ? _extends({}, model, updated) : model;
				})
			});
			break;

		case TYPE + '_CLEAN_ITEMS':
			return _extends({}, state, {
				items: []
			});
			break;

		case TYPE + '_ADD_CONTACT':
			var company = action.payload.company;
			var contacts = [action.payload.contact].concat(_toConsumableArray(company.contacts));
			companyUpdated = _extends({}, company, { contacts: contacts });

			return _extends({}, state, {
				items: state.items.map(function (item) {
					return item.id == companyUpdated.id ? _extends({}, item, companyUpdated) : item;
				})
			});
			break;

		case TYPE + '_UPDATE_CONTACT':
			var contact = action.payload.contact;

			var contacts = action.payload.company.contacts.map(function (comContact) {
				return comContact.id == contact.id ? _extends({}, comContact, contact) : comContact;
			});

			var companyUpdated = _extends({}, action.payload.company, { contacts: contacts });

			return _extends({}, state, {
				items: state.items.map(function (item) {
					return item.id == companyUpdated.id ? _extends({}, item, companyUpdated) : item;
				})
			});
			break;

		case TYPE + '_FAIL':
			return _extends({}, state, {
				errors: [action.payload]
			});
			break;

		default:
			return state;
			break;
	}
}

/***/ }),
/* 497 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var TYPE = 'CONTACTS';
var initialState = {
	items: [],
	errors: [],
	contact: {}
};

function reducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];

	switch (action.type) {
		case TYPE + '_FETCH':
			return _extends({}, state, {
				items: action.payload
			});
			break;

		case TYPE + '_SET_CONTACT':
			return _extends({}, state, {
				errors: [],
				contact: action.payload
			});
			break;

		case TYPE + '_STORE':
			return _extends({}, state, {
				contact: {},
				errors: [],
				items: [action.payload].concat(_toConsumableArray(state.items))
			});
			break;

		case TYPE + '_UPDATE':
			var updated = action.payload;

			return _extends({}, state, {
				contact: {},
				errors: [],
				items: state.items.map(function (model) {
					return model.id == updated.id ? _extends({}, model, updated) : model;
				})
			});
			break;

		case TYPE + '_CLEAN_ITEMS':
			return _extends({}, state, {
				items: []
			});
			break;

		case TYPE + '_FAIL':
			return _extends({}, state, {
				errors: [action.payload]
			});
			break;

		default:
			return state;
			break;
	}
}

/***/ }),
/* 498 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = __webpack_require__(105);

var _quotations = __webpack_require__(500);

var _quotations2 = _interopRequireDefault(_quotations);

var _todos = __webpack_require__(504);

var _todos2 = _interopRequireDefault(_todos);

var _activities = __webpack_require__(495);

var _activities2 = _interopRequireDefault(_activities);

var _reports = __webpack_require__(501);

var _reports2 = _interopRequireDefault(_reports);

var _companies = __webpack_require__(496);

var _companies2 = _interopRequireDefault(_companies);

var _contacts = __webpack_require__(497);

var _contacts2 = _interopRequireDefault(_contacts);

var _services = __webpack_require__(502);

var _services2 = _interopRequireDefault(_services);

var _products = __webpack_require__(499);

var _products2 = _interopRequireDefault(_products);

var _trackings = __webpack_require__(505);

var _trackings2 = _interopRequireDefault(_trackings);

var _solicitudes = __webpack_require__(503);

var _solicitudes2 = _interopRequireDefault(_solicitudes);

var _asesores = __webpack_require__(1046);

var _asesores2 = _interopRequireDefault(_asesores);

var _user = __webpack_require__(506);

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
	todos: _todos2.default,
	quotations: _quotations2.default,
	solicitudes: _solicitudes2.default,
	activities: _activities2.default,
	reports: _reports2.default,
	companies: _companies2.default,
	contacts: _contacts2.default,
	services: _services2.default,
	products: _products2.default,
	trackings: _trackings2.default,
	asesores: _asesores2.default,
	user: _user2.default
});

/***/ }),
/* 499 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;
var TYPE = 'PRODUCTS';
var initialState = {
	items: [],
	errors: [],
	product: {}
};

function reducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];

	switch (action.type) {
		case TYPE + '_FETCH':
			return _extends({}, state, {
				items: action.payload
			});
			break;

		case TYPE + '_SET_PRODUCT':
			return _extends({}, state, {
				errors: [],
				product: action.payload
			});
			break;

		case TYPE + '_STORE':
			return _extends({}, state, {
				errors: [],
				items: [action.payload].concat(state.items)
			});
			break;

		case TYPE + '_UPDATE':
			var updated = action.payload;

			return _extends({}, state, {
				contact: {},
				errors: [],
				items: state.items.map(function (model) {
					return model.id == updated.id ? _extends({}, model, updated) : model;
				})
			});
			break;

		case TYPE + '_REMOVE':
			return _extends({}, state, {
				items: state.items.filter(function (item) {
					return item.id !== action.payload.id;
				})
			});
			break;

		case TYPE + '_FAIL':
			return _extends({}, state, {
				errors: [action.payload]
			});
			break;

		default:
			return state;
			break;
	}
}

/***/ }),
/* 500 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;
var TYPE = 'QUOTATIONS';
var initialState = {
	items: [],
	errors: [],
	quotation: {},
	contact: {},
	company: {},
	services: []
};

function reducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];

	switch (action.type) {
		case TYPE + '_FETCH':
			return _extends({}, state, {
				items: action.payload
			});
			break;

		case TYPE + '_STORE':
			return _extends({}, state, {
				quotation: action.payload
			});
			break;

		case TYPE + '_UPDATE':
			return _extends({}, state, {
				quotation: action.payload,
				company: action.payload.company,
				contact: action.payload.contact
			});
			break;

		case TYPE + '_SET_QUOTATION':
			return _extends({}, state, {
				quotation: action.payload,
				company: action.payload.company,
				contact: action.payload.contact
			});
			break;

		case TYPE + '_UPDATE_CONTACT':
			return _extends({}, state, {
				contact: action.payload
			});
			break;

		case TYPE + '_FETCH_SERVICES':
			return _extends({}, state, {
				services: action.payload
			});
			break;

		case TYPE + '_ADDED_SERVICE':
			return state;
			break;

		case TYPE + '_ADD_SERVICE':
			return _extends({}, state, {
				services: [action.payload].concat(state.services)
			});
			break;

		case TYPE + '_UPDATE_SERVICE':

			var services = state.services.map(function (serv) {
				return serv.id == action.payload.id ? _extends({}, serv, action.payload) : serv;
			});

			return _extends({}, state, {
				services: services
			});
			break;

		case TYPE + '_REMOVE_SERVICE':
			return _extends({}, state, {
				services: state.services.filter(function (service) {
					return service.id !== action.payload.id;
				})
			});
			break;

		case TYPE + '_FAIL':
			return _extends({}, state, {
				errors: [action.payload]
			});
			break;

		default:
			return state;
			break;
	}
}

/***/ }),
/* 501 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;
var TYPE = 'REPORTS';
var initialState = {
	data: [],
	errors: []
};

function reducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];

	switch (action.type) {
		case TYPE + '_FETCH':
			return _extends({}, state, {
				data: action.payload
			});
			break;

		case TYPE + '_FAIL':
			return _extends({}, state, {
				errors: [action.payload]
			});
			break;

		default:
			return state;
			break;
	}
}

/***/ }),
/* 502 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;

var _clean_object = __webpack_require__(49);

var _clean_object2 = _interopRequireDefault(_clean_object);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TYPE = 'SERVICES';
var initialState = {
	items: [],
	errors: [],
	service: {}
};

function reducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];

	switch (action.type) {
		case TYPE + '_FETCH':
			return _extends({}, state, {
				items: action.payload
			});
			break;

		case TYPE + '_SET_SERVICE':
			return _extends({}, state, {
				service: action.payload
			});
			break;

		case TYPE + '_STORE':
			return _extends({}, state, {
				service: {},
				items: [action.payload].concat(state.items)
			});
			break;

		case TYPE + '_UPDATE':
			var updated = action.payload;

			return _extends({}, state, {
				service: {},
				items: state.items.map(function (model) {
					return model.id == updated.id ? _extends({}, model, updated) : model;
				})
			});
			break;

		case TYPE + '_CLEAN_ITEMS':
			return _extends({}, state, {
				items: []
			});
			break;

		case TYPE + '_CLEAN_ITEM':
			return _extends({}, state, {
				service: (0, _clean_object2.default)(state.service)
			});
			break;

		case TYPE + '_FAIL':
			return _extends({}, state, {
				errors: [action.payload]
			});
			break;

		default:
			return state;
			break;
	}
}

/***/ }),
/* 503 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;
var TYPE = 'SOLICITUDES';
var initialState = {
	items: [],
	errors: [],
	quotation: {},
	contact: {},
	company: {},
	services: []
};

function reducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];

	switch (action.type) {
		case TYPE + '_FETCH':
			console.log(action.payload);
			return _extends({}, state, {
				items: action.payload
			});
			break;

		case TYPE + '_STORE':
			return _extends({}, state, {
				solicitud: action.payload
			});
			break;

		case TYPE + '_UPDATE':
			return _extends({}, state, {
				solicitud: action.payload,
				company: action.payload.company,
				contact: action.payload.contact
			});
			break;

		case TYPE + '_SET_SOLICITUD':
			return _extends({}, state, {
				solicitud: action.payload,
				company: action.payload.company,
				contact: action.payload.contact
			});
			break;

		case TYPE + '_UPDATE_CONTACT':
			return _extends({}, state, {
				contact: action.payload
			});
			break;

		case TYPE + '_FETCH_SERVICES':
			return _extends({}, state, {
				services: action.payload
			});
			break;

		case TYPE + '_ADDED_SERVICE':
			return state;
			break;

		case TYPE + '_ADD_SERVICE':
			return _extends({}, state, {
				services: [action.payload].concat(state.services)
			});
			break;

		case TYPE + '_UPDATE_SERVICE':

			var services = state.services.map(function (serv) {
				return serv.id == action.payload.id ? _extends({}, serv, action.payload) : serv;
			});

			return _extends({}, state, {
				services: services
			});
			break;

		case TYPE + '_REMOVE_SERVICE':
			return _extends({}, state, {
				services: state.services.filter(function (service) {
					return service.id !== action.payload.id;
				})
			});
			break;

		case TYPE + '_FAIL':
			return _extends({}, state, {
				errors: [action.payload]
			});
			break;

		default:
			return state;
			break;
	}
}

/***/ }),
/* 504 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;
var TYPE = 'TODOS';
var initialState = {
	items: [],
	errors: []
};

function reducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];

	switch (action.type) {
		case TYPE + '_FETCH':
			return _extends({}, state, {
				items: action.payload
			});
			break;

		case TYPE + '_COMPLETED':
			var updated = action.payload;

			return _extends({}, state, {
				items: state.items.map(function (model) {
					return model.id == updated.id ? _extends({}, model, updated) : model;
				})
			});
			break;

		case TYPE + '_STORE':
			return _extends({}, state, {
				items: [action.payload].concat(state.items)
			});
			break;

		case TYPE + '_FAIL':
			return _extends({}, state, {
				errors: [action.payload]
			});
			break;

		default:
			return state;
			break;
	}
}

/***/ }),
/* 505 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;
var TYPE = 'TRACKINGS';
var initialState = {
	items: [],
	errors: [],
	tracking: {}
};

function reducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];

	switch (action.type) {
		case TYPE + '_FETCH':
			return _extends({}, state, {
				items: action.payload
			});
			break;

		case TYPE + '_SET_TRACKING':
			return _extends({}, state, {
				errors: [],
				product: action.payload
			});
			break;

		case TYPE + '_STORE':
			return _extends({}, state, {
				errors: [],
				items: [action.payload].concat(state.items)
			});
			break;

		case TYPE + '_UPDATE':
			var updated = action.payload;

			return _extends({}, state, {
				contact: {},
				errors: [],
				items: state.items.map(function (model) {
					return model.id == updated.id ? _extends({}, model, updated) : model;
				})
			});
			break;

		case TYPE + '_FAIL':
			return _extends({}, state, {
				errors: [action.payload]
			});
			break;

		default:
			return state;
			break;
	}
}

/***/ }),
/* 506 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;
var TYPE = 'USER';
var initialState = {
	user: JSON.parse(localStorage.getItem('user')) || {},
	errors: []
};

function reducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];

	switch (action.type) {
		case TYPE + '_FAIL':
			return _extends({}, state, {
				errors: [action.payload]
			});
			break;

		default:
			return state;
			break;
	}
}

/***/ }),
/* 507 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _timeago = __webpack_require__(221);

var _timeago2 = _interopRequireDefault(_timeago);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
  displayName: 'item',
  render: function render() {
    var activity = this.props.activity;

    return _react2.default.createElement(
      'tr',
      null,
      _react2.default.createElement(
        'td',
        null,
        _react2.default.createElement(
          'b',
          null,
          activity.user ? activity.user.name + ' ' + activity.user.lastname : '',
          ' '
        ),
        ' ',
        activity.message,
        ' ',
        _react2.default.createElement(_timeago2.default, { date: activity.created_at })
      )
    );
  }
});

/***/ }),
/* 508 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(20);

var _activities = __webpack_require__(55);

var action = _interopRequireWildcard(_activities);

var _item = __webpack_require__(507);

var _item2 = _interopRequireDefault(_item);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var activities = _react2.default.createClass({
  displayName: 'activities',
  componentDidMount: function componentDidMount() {
    this.props.dispatch(action.fetch());
  },
  render: function render() {
    var activityNodes = this.props.items.map(function (activity) {
      return _react2.default.createElement(_item2.default, { key: activity.id, activity: activity });
    });

    return _react2.default.createElement(
      'div',
      { className: 'panel', style: { position: 'fixed', margin: '0 30px 0 0' } },
      _react2.default.createElement(
        'div',
        { className: 'panel-heading' },
        _react2.default.createElement(
          'h5',
          null,
          'Actividad'
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'panel-body' },
        _react2.default.createElement(
          'div',
          { className: 'quotations-table' },
          _react2.default.createElement(
            'div',
            { className: 'table-responsive' },
            _react2.default.createElement(
              'table',
              { className: 'table' },
              _react2.default.createElement(
                'tbody',
                null,
                activityNodes
              )
            )
          )
        )
      )
    );
  }
});

exports.default = (0, _reactRedux.connect)(function (store) {
  return store.activities;
})(activities);

/***/ }),
/* 509 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Dashboard = _react2.default.createClass({
  displayName: 'Dashboard',
  render: function render() {
    return _react2.default.createElement(
      'div',
      { id: 'app-header' },
      _react2.default.createElement(
        'nav',
        { className: 'navbar top-bar' },
        _react2.default.createElement(
          'div',
          { className: 'container-fluid' },
          _react2.default.createElement(
            'a',
            { className: 'navbar-brand', href: '#' },
            _react2.default.createElement('img', { src: '/img/logo.png', alt: '', style: { width: '50%' } })
          ),
          _react2.default.createElement(
            'ul',
            { className: 'nav navbar-nav navbar-collapse' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: '/' },
                'Dashboard'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: '/quotation/create' },
                'Nueva Cotizaci\xF3n'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: '/solicitudes' },
                'Solicitudes'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: '/todos' },
                'Tareas'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: '/companies' },
                'Empresas'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: '/contacts' },
                'Contactos'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: '/services' },
                'Servicios'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: '/reports' },
                'Reporte'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: '/logout' },
                'Cerrar sesion'
              )
            )
          )
        )
      )
    );
  }
});

exports.default = Dashboard;

/***/ }),
/* 510 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(20);

var _contacts = __webpack_require__(56);

var action = _interopRequireWildcard(_contacts);

var _companies = __webpack_require__(106);

var companyAction = _interopRequireWildcard(_companies);

var _form_create = __webpack_require__(81);

var _form_create2 = _interopRequireDefault(_form_create);

var _contact = __webpack_require__(511);

var _contact2 = _interopRequireDefault(_contact);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Company = _react2.default.createClass({
  displayName: 'Company',
  getDefaultProps: function getDefaultProps() {
    return {
      company: {}
    };
  },
  getInitialState: function getInitialState() {
    return {
      showForm: false
    };
  },
  handleSubmit: function handleSubmit(contact) {
    var contactData = _extends({}, contact, { company_id: this.props.company.id });

    if (contact.id) {
      this.props.dispatch(action.update(contact)).then(this.handleSubmitResponse);
    } else {
      contact = _extends({}, contact, { company_id: this.props.company.id });
      this.props.dispatch(action.store(contact)).then(this.handleSubmitResponse);
    }
  },
  handleSubmitResponse: function handleSubmitResponse(actionRes) {

    if (actionRes.type !== 'CONTACTS_FAIL') {
      if (actionRes.type == 'CONTACTS_UPDATE') {
        this.props.dispatch(companyAction.updateContact(this.props.company, actionRes.payload));
      }

      if (actionRes.type == 'CONTACTS_STORE') {
        this.props.dispatch(companyAction.addContact(this.props.company, actionRes.payload));
      }

      this.showForm();
    }
  },
  showForm: function showForm() {
    this.setState({ showForm: !this.state.showForm });
  },
  handleEditContact: function handleEditContact(contact, e) {
    if (e) e.preventDefault();
    this.showForm();
    this.props.dispatch(action.setContact(contact));
  },
  render: function render() {
    var _this = this;

    var company = this.props.company;
    var name = company.name,
        nit = company.nit,
        address = company.address,
        phone = company.phone;
    var showForm = this.state.showForm;


    return _react2.default.createElement(
      'div',
      { className: 'panel' },
      _react2.default.createElement(
        'div',
        { className: 'panel-body' },
        _react2.default.createElement(
          'table',
          { className: 'table' },
          _react2.default.createElement(
            'thead',
            null,
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                null,
                'Empresa'
              ),
              _react2.default.createElement(
                'th',
                null,
                'NIT'
              ),
              _react2.default.createElement(
                'th',
                null,
                'Direcci\xF3n'
              ),
              _react2.default.createElement(
                'th',
                null,
                'Telefono'
              ),
              _react2.default.createElement(
                'th',
                null,
                'Opciones'
              )
            )
          ),
          _react2.default.createElement(
            'tbody',
            null,
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'td',
                null,
                name
              ),
              _react2.default.createElement(
                'td',
                null,
                nit
              ),
              _react2.default.createElement(
                'td',
                null,
                address
              ),
              _react2.default.createElement(
                'td',
                null,
                phone
              ),
              _react2.default.createElement(
                'td',
                null,
                _react2.default.createElement(
                  'button',
                  { onClick: this.props.onEdit.bind(null, company), className: 'btn btn-sm' },
                  'Editar'
                )
              )
            )
          )
        ),
        _react2.default.createElement('hr', null),
        _react2.default.createElement(
          'table',
          { className: 'table' },
          _react2.default.createElement(
            'thead',
            null,
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                null,
                'Nombre'
              ),
              _react2.default.createElement(
                'th',
                null,
                'Email'
              ),
              _react2.default.createElement(
                'th',
                null,
                'Telefonos'
              ),
              _react2.default.createElement(
                'th',
                null,
                'Opciones'
              )
            )
          ),
          _react2.default.createElement(
            'tbody',
            null,
            company.contacts.map(function (contact) {
              return _react2.default.createElement(
                'tr',
                { key: contact.id },
                _react2.default.createElement(
                  'td',
                  null,
                  contact.name
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  contact.email
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  contact.phone_1
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement(
                    'button',
                    { className: 'btn btn-sm', onClick: _this.handleEditContact.bind(null, contact) },
                    'Editar'
                  )
                )
              );
            })
          )
        ),
        _react2.default.createElement(
          'button',
          {
            className: 'btn-primary btn-sm pull-right',
            onClick: this.showForm
          },
          'Agregar contacto'
        ),
        _react2.default.createElement(
          'div',
          { className: this.state.showForm ? '' : 'hidden' },
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'div',
            { className: this.props.contacts.errors.length ? "alert alert-danger" : "" },
            this.props.contacts.errors
          ),
          _react2.default.createElement(_form_create2.default, {
            contact: this.props.contacts.contact,
            btnText: 'Guardar',
            onSubmit: this.handleSubmit
          })
        )
      )
    );
  }
});

exports.default = (0, _reactRedux.connect)(function (props) {
  return props;
})(Company);

/***/ }),
/* 511 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
  displayName: 'contact',
  render: function render() {
    var contact = this.props.contact;
    var name = contact.name,
        lastname = contact.lastname,
        email = contact.email,
        phone_1 = contact.phone_1,
        phone_2 = contact.phone_2;


    return _react2.default.createElement(
      'tr',
      null,
      _react2.default.createElement(
        'td',
        null,
        name,
        ' ',
        lastname
      ),
      _react2.default.createElement(
        'td',
        null,
        email
      ),
      _react2.default.createElement(
        'td',
        null,
        phone_1,
        ' ',
        phone_2
      ),
      _react2.default.createElement(
        'td',
        null,
        _react2.default.createElement(
          'button',
          {
            onClick: this.props.onEdit(contact),
            className: 'btn btn-default btn-xs' },
          'Editar'
        )
      )
    );
  }
});

/***/ }),
/* 512 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
  displayName: 'contact',
  getDefaultProps: function getDefaultProps() {
    return {
      contact: {}
    };
  },
  handleClick: function handleClick() {
    var _props = this.props,
        onEdit = _props.onEdit,
        contact = _props.contact;

    if (typeof onEdit === 'function') {
      onEdit(contact);
    }
  },
  render: function render() {
    var _props$contact = this.props.contact,
        name = _props$contact.name,
        lastname = _props$contact.lastname,
        email = _props$contact.email,
        phone_1 = _props$contact.phone_1,
        phone_2 = _props$contact.phone_2,
        mobile_1 = _props$contact.mobile_1,
        mobile_2 = _props$contact.mobile_2,
        company = _props$contact.company;


    return _react2.default.createElement(
      'tr',
      null,
      _react2.default.createElement(
        'td',
        null,
        name,
        ' ',
        lastname
      ),
      _react2.default.createElement(
        'td',
        null,
        email
      ),
      _react2.default.createElement(
        'td',
        null,
        phone_1,
        ' ',
        phone_2
      ),
      _react2.default.createElement(
        'td',
        null,
        mobile_1,
        ' ',
        mobile_2
      ),
      _react2.default.createElement(
        'td',
        null,
        company ? company.name : ''
      ),
      _react2.default.createElement(
        'td',
        null,
        _react2.default.createElement(
          'button',
          { className: 'btn btn-sm', onClick: this.handleClick },
          'Editar'
        )
      )
    );
  }
});

/***/ }),
/* 513 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _chart_bar = __webpack_require__(80);

var _chart_bar2 = _interopRequireDefault(_chart_bar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _react2.default.createClass({
  displayName: 'exports',
  getInitialState: function getInitialState() {
    return {
      advisors: []
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(props) {
    if (props.graphsData.advisors) {
      this.setState({
        advisors: props.graphsData.advisors
      });
    }
  },
  render: function render() {
    var data1 = this.state.advisors.map(function (num) {
      return parseInt(num);
    });

    var myChart = {
      labels: ['Andrés Rojas', 'Diego Peña', 'No aplica', 'Otros'],
      datasets: [{
        label: 'Cotizaciones',
        data: data1,
        backgroundColor: ['rgba(255, 194, 1, 0.3)', 'rgba(255, 182, 61, 0.3)', 'rgba(255, 182, 61, 0.2)', 'rgba(255, 182, 61, 0.2)']
      }]
    };

    return _react2.default.createElement(
      'div',
      { className: 'col-md-6' },
      _react2.default.createElement(
        'div',
        { className: 'panel' },
        _react2.default.createElement(
          'div',
          { className: 'panel-body' },
          _react2.default.createElement(
            'b',
            null,
            'Asesor'
          ),
          _react2.default.createElement(_chart_bar2.default, { data: myChart })
        )
      )
    );
  }
});

/***/ }),
/* 514 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _chart_bar = __webpack_require__(80);

var _chart_bar2 = _interopRequireDefault(_chart_bar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _react2.default.createClass({
  displayName: 'exports',

  getInitialState: function getInitialState() {
    return {
      client_type: []
    };
  },

  componentWillReceiveProps: function componentWillReceiveProps(props) {
    if (props.graphsData.client_type) {
      this.setState({
        client_type: props.graphsData.client_type
      });
    }
  },

  render: function render() {
    var data1 = this.state.client_type.map(function (num) {
      return parseInt(num);
    });

    var labels = ['Activo', 'Inactivo', 'nuevo'];

    var dataSet1 = {
      label: 'Cotizaciones',
      data: data1,
      backgroundColor: ['rgba(68, 228, 135, 0.5)', 'rgba(68, 228, 135, 0.5)', 'rgba(68, 228, 135, 0.5)']
    };

    var chartData = {
      labels: labels,
      datasets: [dataSet1]
    };

    return _react2.default.createElement(
      'div',
      { className: 'col-md-6' },
      _react2.default.createElement(
        'div',
        { className: 'panel' },
        _react2.default.createElement(
          'div',
          { className: 'panel-body' },
          _react2.default.createElement(
            'b',
            null,
            'Tipo de cliente'
          ),
          _react2.default.createElement(_chart_bar2.default, { data: chartData })
        )
      )
    );
  }
});

/***/ }),
/* 515 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(19);

var _axios2 = _interopRequireDefault(_axios);

var _qs = __webpack_require__(941);

var _qs2 = _interopRequireDefault(_qs);

var _status = __webpack_require__(276);

var _status2 = _interopRequireDefault(_status);

var _advisors = __webpack_require__(126);

var _advisors2 = _interopRequireDefault(_advisors);

var _type = __webpack_require__(129);

var _type2 = _interopRequireDefault(_type);

var _client_type = __webpack_require__(127);

var _client_type2 = _interopRequireDefault(_client_type);

var _form_select = __webpack_require__(22);

var _form_select2 = _interopRequireDefault(_form_select);

var _datetime = __webpack_require__(109);

var _datetime2 = _interopRequireDefault(_datetime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
  displayName: 'filters',
  getInitialState: function getInitialState() {
    return {
      query: {
        offset: 0,
        query: null,
        status: null,
        advisor: null,
        client_type: null,
        type: null,
        date_start: null,
        date_end: null
      },
      loading: false
    };
  },
  triggerChange: function triggerChange(query) {
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(query);
    }
  },
  changeQuery: function changeQuery(field, value) {
    var query = {};
    query[field] = value;
    query = _extends({}, this.state.query, query);
    this.triggerChange(query);
    this.setState({ query: query });
  },
  handleDates: function handleDates(type, date, dateStr) {
    var field = type;
    var value = dateStr + ' 00:00:00';
    this.changeQuery(field, value);
  },
  handleChange: function handleChange(type, e) {
    var field = type;
    var value = e.currentTarget.value;
    this.changeQuery(field, value);
  },
  download: function download(e) {
    if (e) e.preventDefault();
    this.setState({ laoding: true });
    var url = encodeURI(location.origin + '/quotations/excel?' + _qs2.default.stringify(this.state.query));
    window.location = url;
    this.setState({ laoding: false });
  },
  render: function render() {
    var _this = this;

    var query = this.state.query;


    return _react2.default.createElement(
      'div',
      { className: 'panel' },
      _react2.default.createElement(
        'div',
        { className: 'panel-body' },
        _react2.default.createElement(
          'div',
          { className: 'form-group col-md-3' },
          _react2.default.createElement(_datetime2.default, {
            placeholder: 'Seleccionar desde',
            styles: 'form-control',
            onChange: function onChange(date, str) {
              _this.handleDates('date_start', date, str);
            }
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group col-md-3' },
          _react2.default.createElement(_datetime2.default, {
            placeholder: 'Seleccionar hasta',
            styles: 'form-control',
            onChange: function onChange(date, str) {
              _this.handleDates('date_end', date, str);
            }
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group col-sm-3' },
          _react2.default.createElement(_form_select2.default, {
            options: _status2.default,
            'default': 'Seleccionar estado',
            value: query.status,
            onSelectChange: function onSelectChange(e) {
              return _this.handleChange('status', e);
            }
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group col-sm-3' },
          _react2.default.createElement(_form_select2.default, {
            options: _client_type2.default,
            'default': 'Seleccionar cliente',
            value: query.client_type,
            onSelectChange: function onSelectChange(e) {
              return _this.handleChange('client_type', e);
            }
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group col-sm-3' },
          _react2.default.createElement(_form_select2.default, {
            ref: 'type',
            options: _type2.default,
            'default': 'Seleccionar tipo',
            value: query.type,
            onSelectChange: function onSelectChange(e) {
              return _this.handleChange('type', e);
            }
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group col-sm-3' },
          _react2.default.createElement(
            'button',
            { onClick: this.download, className: 'btn-sm btn btn-primary', disable: this.state.loading },
            'Descargar Reporte'
          )
        )
      )
    );
  }
});

/***/ }),
/* 516 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _numeral = __webpack_require__(139);

var _numeral2 = _interopRequireDefault(_numeral);

var _chart_bar = __webpack_require__(80);

var _chart_bar2 = _interopRequireDefault(_chart_bar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _react2.default.createClass({
  displayName: 'exports',

  getInitialState: function getInitialState() {
    return {
      findUs: [],
      count: []
    };
  },

  componentWillReceiveProps: function componentWillReceiveProps(props) {
    if (props.graphsData.findUS && props.graphsData.findUSCount) {
      this.setState({
        findUs: props.graphsData.findUS,
        count: props.graphsData.findUSCount
      });
    }
  },

  render: function render() {
    var data1 = this.state.findUs.map(function (num) {
      return parseInt(num);
    });
    var data2 = this.state.count.map(function (num) {
      return parseInt(num);
    });

    var labels = ['Asesores comerciales', 'Cliente', 'Página Web Avante', 'Google Adwords', 'Referido', 'App Referidos', 'Promoción', 'Paginas Amarilladas', 'Paginas Amarilladas Web', 'Teléfono', 'Redes Sociales'];

    var dataSet1 = {
      label: 'Dinero',
      data: data1,
      backgroundColor: ['rgba(255, 136, 124, 0.5)', 'rgba(255, 136, 124, 0.5)', 'rgba(255, 136, 124, 0.5)', 'rgba(255, 136, 124, 0.5)', 'rgba(255, 136, 124, 0.5)', 'rgba(255, 136, 124, 0.5)', 'rgba(255, 136, 124, 0.5)', 'rgba(255, 136, 124, 0.5)', 'rgba(255, 136, 124, 0.5)']
    };

    var dataSet2 = {
      label: 'Cantidad',
      data: data2
    };

    var chartData = {
      labels: labels,
      datasets: [dataSet1, dataSet2]
    };

    var options = {
      tooltips: {
        enabled: true,
        mode: 'single',
        callbacks: {
          label: function label(tooltipItems, data) {
            return ' ' + (0, _numeral2.default)(tooltipItems.yLabel).format('0,0');
          }
        }
      },
      scales: {
        yAxes: [{
          ticks: {
            callback: function callback(value) {
              return '' + (0, _numeral2.default)(value).format('0,0');
            }
          }
        }]
      }
    };

    return _react2.default.createElement(
      'div',
      { className: 'col-md-6' },
      _react2.default.createElement(
        'div',
        { className: 'panel' },
        _react2.default.createElement(
          'div',
          { className: 'panel-body' },
          _react2.default.createElement(
            'b',
            null,
            'Como nos encontr\xF3'
          ),
          _react2.default.createElement(_chart_bar2.default, { data: chartData, options: options })
        )
      )
    );
  }
});

/***/ }),
/* 517 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _chart_bar = __webpack_require__(80);

var _chart_bar2 = _interopRequireDefault(_chart_bar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _react2.default.createClass({
  displayName: 'exports',

  getInitialState: function getInitialState() {
    return {
      no_effective: [],
      count: []
    };
  },

  componentWillReceiveProps: function componentWillReceiveProps(props) {
    if (props.graphsData.no_effective && props.graphsData.no_effective_count) {
      this.setState({
        no_effective: props.graphsData.no_effective,
        count: props.graphsData.no_effective_count
      });
    }
  },

  render: function render() {
    var dataMoney = this.state.no_effective.map(function (num) {
      return parseInt(num);
    });
    var dataCount = this.state.count.map(function (num) {
      return parseInt(num);
    });

    var labels = ["No disponible", "No confiable", "Competencia", "Por cliente", "sin etiquetar"];

    var dataSet1 = { label: 'Dinero', data: dataMoney };
    var dataSet2 = { label: 'Cantidad', data: dataCount };

    var chartData = {
      labels: labels,
      datasets: [dataSet1, dataSet2]
    };

    return _react2.default.createElement(
      'div',
      { className: 'col-md-6' },
      _react2.default.createElement(
        'div',
        { className: 'panel' },
        _react2.default.createElement(
          'div',
          { className: 'panel-body' },
          _react2.default.createElement(
            'b',
            null,
            'No efectivas'
          ),
          _react2.default.createElement(_chart_bar2.default, { data: chartData })
        )
      )
    );
  }
});

/***/ }),
/* 518 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _chart_bar = __webpack_require__(80);

var _chart_bar2 = _interopRequireDefault(_chart_bar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _react2.default.createClass({
  displayName: 'exports',

  getInitialState: function getInitialState() {
    return {
      sent_diff: []
    };
  },

  componentWillReceiveProps: function componentWillReceiveProps(props) {
    if (props.graphsData.sent_diff) {
      this.setState({
        sent_diff: props.graphsData.sent_diff
      });
    }
  },

  render: function render() {
    var data1 = this.state.sent_diff.map(function (num) {
      return parseInt(num);
    });

    var labels = ["Dentro - Inventario", "Fuera - Inventario", "Dentro - Pedido", "Fuera - Pedido"];

    var dataSet1 = {
      label: 'Cotizaciones',
      data: data1
    };

    var chartData = {
      labels: labels,
      datasets: [dataSet1]
    };

    return _react2.default.createElement(
      'div',
      { className: 'col-md-6' },
      _react2.default.createElement(
        'div',
        { className: 'panel' },
        _react2.default.createElement(
          'div',
          { className: 'panel-body' },
          _react2.default.createElement(
            'b',
            null,
            'tipo'
          ),
          _react2.default.createElement(_chart_bar2.default, { data: chartData })
        )
      )
    );
  }
});

/***/ }),
/* 519 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _numeral = __webpack_require__(139);

var _numeral2 = _interopRequireDefault(_numeral);

var _chart_bar = __webpack_require__(80);

var _chart_bar2 = _interopRequireDefault(_chart_bar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _react2.default.createClass({
  displayName: 'exports',

  getInitialState: function getInitialState() {
    return {
      status: [],
      count: []
    };
  },

  componentWillReceiveProps: function componentWillReceiveProps(props) {
    if (props.graphsData.status && props.graphsData.statusCount) {
      this.setState({
        status: props.graphsData.status,
        count: props.graphsData.statusCount
      });
    }
  },

  render: function render() {
    var data1 = this.state.status.map(function (num) {
      return parseInt(num);
    });

    var data2 = this.state.count.map(function (num) {
      return parseInt(num);
    });

    var labels = ['Borrador', 'Enviada', 'Entregada', 'Seguimiento', 'Efectiva', 'No efectiva', 'No enviada', 'Replanteada', 'Por Confirmar', 'Nula'];

    var dataSet1 = {
      label: 'Dinero',
      data: data1,
      backgroundColor: ['rgba(0, 49, 103, 0.3)', 'rgba(0, 49, 103, 0.3)', 'rgba(0, 49, 103, 0.3)', 'rgba(0, 49, 103, 0.3)', 'rgba(0, 49, 103, 0.3)', 'rgba(0, 49, 103, 0.3)', 'rgba(0, 49, 103, 0.3)', 'rgba(0, 49, 103, 0.3)']
    };

    var dataSet2 = {
      label: 'Cantidad',
      data: data2
    };

    var chatData = {
      labels: labels,
      datasets: [dataSet1, dataSet2]
    };

    var options = {
      tooltips: {
        enabled: true,
        mode: 'single',
        callbacks: {
          label: function label(tooltipItems, data) {
            return ' ' + (0, _numeral2.default)(tooltipItems.yLabel).format('0,0');
          }
        }
      },
      scales: {
        yAxes: [{
          ticks: {
            callback: function callback(value) {
              return ' ' + (0, _numeral2.default)(value).format('0,0');
            }
          }
        }]
      }
    };

    return _react2.default.createElement(
      'div',
      { className: 'col-md-6' },
      _react2.default.createElement(
        'div',
        { className: 'panel' },
        _react2.default.createElement(
          'div',
          { className: 'panel-body' },
          _react2.default.createElement(
            'b',
            null,
            'Estado de cotizaci\xF3n'
          ),
          _react2.default.createElement(_chart_bar2.default, { data: chatData, options: options })
        )
      )
    );
  }
});

/***/ }),
/* 520 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _products = __webpack_require__(128);

var _products2 = _interopRequireDefault(_products);

var _product_type = __webpack_require__(275);

var _product_type2 = _interopRequireDefault(_product_type);

var _periods = __webpack_require__(274);

var _periods2 = _interopRequireDefault(_periods);

var _form_select = __webpack_require__(22);

var _form_select2 = _interopRequireDefault(_form_select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var productForm = _react2.default.createClass({
  displayName: 'productForm',
  getInitialState: function getInitialState() {
    return {
      product: {
        quotation_id: '',
        name: '',
        type: '',
        processor: '',
        ram: '',
        hdd: '',
        burner: '',
        network_card: '',
        battery: '',
        monitor: '',
        keyboard: '',
        os: '',
        office: '',
        antivirus: '',
        additional_1: '',
        additional_2: '',
        additional_3: '',
        additional_4: '',
        additional_5: '',
        additional_6: '',
        lapse: '',
        period: '',
        quantity: '',
        price: '',
        total: '',
        show: 0,
        iva: 0,
        note: '',
        spaces: ''
      },
      additional: false,
      errors: []
    };
  },
  getDefaultProps: function getDefaultProps() {
    return {
      product: {},
      errors: []
    };
  },
  componentDidMount: function componentDidMount() {
    var product = _extends({}, this.state.product, this.props.product);
    this.setState({ product: product });
  },
  componentWillReceiveProps: function componentWillReceiveProps(props) {
    var product = _extends({}, this.state.product, props.product);
    product = _extends({}, product, { quotation_id: this.props.quotationId });
    this.setState({ product: product });
  },
  handleChangeInput: function handleChangeInput(field, e) {
    e.preventDefault();
    var val = e.currentTarget.value;
    var product = _extends({}, this.state.product, _defineProperty({}, field, val));
    var additional = field == 'name' && val == 'Adicional' || val == 'Complements' ? true : false;
    if (field == 'price' || field == 'quantity' || field == 'lapse') product = this.getTotal(product);
    this.setState({ product: product, additional: additional });
  },
  handleChangeCheckbox: function handleChangeCheckbox(field, e) {
    var val = e.currentTarget.checked;
    var product = _extends({}, this.state.product, _defineProperty({}, field, val));
    this.setState({ product: product });
  },
  getTotal: function getTotal(product) {
    var total = parseInt(product.lapse) * parseInt(product.quantity) * parseInt(product.price);
    return _extends({}, product, { total: total });
  },
  handleSubmit: function handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.product);
  },
  close: function close(e) {
    e.preventDefault();
    this.props.onClose();
  },
  render: function render() {
    var product = this.state.product;


    return _react2.default.createElement(
      'form',
      { id: 'product-form', className: 'form', onSubmit: this.handleSubmit },
      _react2.default.createElement(
        'div',
        { className: 'form-group col-md-6' },
        _react2.default.createElement(
          'label',
          null,
          'Producto'
        ),
        _react2.default.createElement(_form_select2.default, {
          ref: 'name',
          options: _products2.default,
          'default': 'Seleccionar producto',
          onSelectChange: this.handleChangeInput.bind(null, 'name'),
          value: product.name
        })
      ),
      _react2.default.createElement(
        'div',
        { className: 'form-group col-md-6' },
        _react2.default.createElement(
          'label',
          null,
          'Tipo'
        ),
        _react2.default.createElement(_form_select2.default, {
          ref: 'type',
          options: _product_type2.default,
          'default': 'Seleccionar tipo',
          onSelectChange: this.handleChangeInput.bind(null, 'type'),
          value: product.type
        })
      ),
      _react2.default.createElement(
        'div',
        { className: this.state.additional ? "additional-hide hide" : "" },
        _react2.default.createElement(
          'div',
          { className: 'form-group col-md-6' },
          _react2.default.createElement(
            'label',
            null,
            'Procesador'
          ),
          _react2.default.createElement('input', {
            type: 'text',
            className: 'form-control input-processor',
            onChange: this.handleChangeInput.bind(null, 'processor'),
            value: product.processor
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group col-md-6' },
          _react2.default.createElement(
            'label',
            null,
            'RAM'
          ),
          _react2.default.createElement('input', {
            type: 'text',
            className: 'form-control',
            onChange: this.handleChangeInput.bind(null, 'ram'),
            value: product.ram })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group col-md-6' },
          _react2.default.createElement(
            'label',
            null,
            'Disco duro'
          ),
          _react2.default.createElement('input', {
            type: 'text',
            className: 'form-control',
            onChange: this.handleChangeInput.bind(null, 'hdd'),
            value: product.hdd
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group col-md-6' },
          _react2.default.createElement(
            'label',
            null,
            'Unidad optica'
          ),
          _react2.default.createElement('input', {
            type: 'text',
            className: 'form-control',
            onChange: this.handleChangeInput.bind(null, 'burner'),
            value: product.burner
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group col-md-6' },
          _react2.default.createElement(
            'label',
            null,
            'Tarjeta de red'
          ),
          _react2.default.createElement('input', {
            ref: 'network_card',
            type: 'text',
            className: 'form-control',
            onChange: this.handleChangeInput.bind(null, 'network_card'),
            value: product.network_card
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group col-md-6' },
          _react2.default.createElement(
            'label',
            null,
            'Bater\xEDa'
          ),
          _react2.default.createElement('input', {
            ref: 'battery',
            type: 'text',
            className: 'form-control',
            onChange: this.handleChangeInput.bind(null, 'battery'),
            value: product.battery
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group col-md-6' },
          _react2.default.createElement(
            'label',
            null,
            'Monitor'
          ),
          _react2.default.createElement('input', {
            ref: 'monitor',
            type: 'text',
            className: 'form-control',
            onChange: this.handleChangeInput.bind(null, 'monitor'),
            value: product.monitor
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group col-md-6' },
          _react2.default.createElement(
            'label',
            null,
            'Teclado y mouse'
          ),
          _react2.default.createElement('input', {
            ref: 'keyboard',
            type: 'text',
            className: 'form-control',
            onChange: this.handleChangeInput.bind(null, 'keyboard'),
            value: product.keyboard
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group col-md-6' },
          _react2.default.createElement(
            'label',
            null,
            'Sistema operativo'
          ),
          _react2.default.createElement('input', {
            ref: 'os',
            type: 'text',
            className: 'form-control',
            onChange: this.handleChangeInput.bind(null, 'os'),
            value: product.os
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group col-md-6' },
          _react2.default.createElement(
            'label',
            null,
            'Office'
          ),
          _react2.default.createElement('input', {
            ref: 'office',
            type: 'text',
            className: 'form-control',
            onChange: this.handleChangeInput.bind(null, 'office'),
            value: product.office
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group col-md-6' },
          _react2.default.createElement(
            'label',
            null,
            'Antivirus'
          ),
          _react2.default.createElement('input', {
            ref: 'antivirus',
            type: 'text',
            className: 'form-control',
            onChange: this.handleChangeInput.bind(null, 'antivirus'),
            value: product.antivirus
          })
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'form-group col-md-6' },
        _react2.default.createElement(
          'label',
          null,
          'Adicional'
        ),
        _react2.default.createElement('input', {
          ref: 'additional_1',
          type: 'text',
          className: 'form-control',
          onChange: this.handleChangeInput.bind(null, 'additional_1'),
          value: product.additional_1
        })
      ),
      _react2.default.createElement(
        'div',
        { className: 'form-group col-md-6' },
        _react2.default.createElement(
          'label',
          null,
          'Adicional'
        ),
        _react2.default.createElement('input', {
          ref: 'additional_2',
          type: 'text',
          className: 'form-control',
          onChange: this.handleChangeInput.bind(null, 'additional_2'),
          value: product.additional_2
        })
      ),
      _react2.default.createElement(
        'div',
        { className: 'form-group col-md-6' },
        _react2.default.createElement(
          'label',
          null,
          'Adicional'
        ),
        _react2.default.createElement('input', {
          ref: 'additional_3',
          type: 'text',
          className: 'form-control',
          onChange: this.handleChangeInput.bind(null, 'additional_3'),
          value: product.additional_3
        })
      ),
      _react2.default.createElement(
        'div',
        { className: 'form-group col-md-6' },
        _react2.default.createElement(
          'label',
          null,
          'Adicional'
        ),
        _react2.default.createElement('input', {
          ref: 'additional_4',
          type: 'text',
          className: 'form-control',
          onChange: this.handleChangeInput.bind(null, 'additional_4'),
          value: product.additional_4
        })
      ),
      _react2.default.createElement(
        'div',
        { className: 'form-group col-md-6' },
        _react2.default.createElement(
          'label',
          null,
          'Adicional'
        ),
        _react2.default.createElement('input', {
          ref: 'additional_5',
          type: 'text',
          className: 'form-control',
          onChange: this.handleChangeInput.bind(null, 'additional_5'),
          value: product.additional_5
        })
      ),
      _react2.default.createElement(
        'div',
        { className: 'form-group col-md-6' },
        _react2.default.createElement(
          'label',
          null,
          'Adicional'
        ),
        _react2.default.createElement('input', {
          ref: 'additional_6',
          type: 'text',
          className: 'form-control',
          onChange: this.handleChangeInput.bind(null, 'additional_6'),
          value: product.additional_6 })
      ),
      _react2.default.createElement('div', { className: 'col-md-12' }),
      _react2.default.createElement(
        'div',
        { className: 'form-group col-md-3' },
        _react2.default.createElement(
          'label',
          null,
          'Lapso'
        ),
        _react2.default.createElement('input', {
          ref: 'lapse',
          type: 'number',
          className: 'form-control',
          onChange: this.handleChangeInput.bind(null, 'lapse'),
          value: product.lapse })
      ),
      _react2.default.createElement(
        'div',
        { className: 'form-group col-md-3' },
        _react2.default.createElement(
          'label',
          null,
          'Periodo'
        ),
        _react2.default.createElement(_form_select2.default, {
          ref: 'period',
          options: _periods2.default,
          'default': 'Seleccionar periodo',
          onSelectChange: this.handleChangeInput.bind(null, 'period'),
          value: product.period
        })
      ),
      _react2.default.createElement(
        'div',
        { className: 'form-group col-md-3' },
        _react2.default.createElement(
          'label',
          null,
          'Cantidad'
        ),
        _react2.default.createElement('input', {
          ref: 'quantity',
          type: 'number',
          className: 'form-control',
          onChange: this.handleChangeInput.bind(null, 'quantity'),
          value: product.quantity })
      ),
      _react2.default.createElement(
        'div',
        { className: 'form-group col-md-3' },
        _react2.default.createElement(
          'label',
          null,
          'Precio'
        ),
        _react2.default.createElement('input', {
          ref: 'price',
          type: 'number',
          className: 'form-control',
          onChange: this.handleChangeInput.bind(null, 'price'),
          value: product.price })
      ),
      _react2.default.createElement(
        'div',
        { className: 'form-group col-xs-12' },
        _react2.default.createElement(
          'label',
          null,
          'Nota'
        ),
        _react2.default.createElement('textarea', {
          ref: 'note',
          cols: '4',
          className: 'form-control',
          onChange: this.handleChangeInput.bind(null, 'note'),
          value: product.note })
      ),
      _react2.default.createElement(
        'div',
        { className: 'checkbox col-md-3' },
        _react2.default.createElement(
          'label',
          null,
          _react2.default.createElement('input', {
            ref: 'iva',
            type: 'checkbox',
            onChange: this.handleChangeCheckbox.bind(null, 'iva'),
            checked: product.iva,
            value: product.iva
          }),
          ' ',
          _react2.default.createElement(
            'span',
            null,
            'Mostrar IVA ',
            product.iva
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'checkbox col-md-3', style: { 'marginTop': '10px' } },
        _react2.default.createElement(
          'label',
          null,
          _react2.default.createElement('input', {
            type: 'checkbox',
            onChange: this.handleChangeCheckbox.bind(null, 'show'),
            checked: product.show,
            value: product.show
          }),
          ' ',
          _react2.default.createElement(
            'span',
            null,
            'Mostrar total'
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'form-group col-md-3' },
        _react2.default.createElement(
          'label',
          null,
          'Espacios pdf'
        ),
        _react2.default.createElement('input', {
          ref: 'spaces',
          type: 'number',
          className: 'form-control',
          onChange: this.handleChangeInput.bind(null, 'spaces'),
          value: product.spaces
        })
      ),
      _react2.default.createElement(
        'div',
        {
          className: 'alert alert-danger col-md-12',
          style: this.props.errors.length ? {} : { display: 'none' }
        },
        this.props.errors
      ),
      _react2.default.createElement(
        'div',
        { className: 'form-group col-xs-12' },
        _react2.default.createElement(
          'button',
          { className: 'btn btn-primary btn-sm pull-right' },
          'Guardar'
        ),
        _react2.default.createElement(
          'button',
          { className: 'btn btn-default btn-sm pull-left', onClick: this.close },
          'Cerrar'
        )
      )
    );
  }
});

exports.default = productForm;

/***/ }),
/* 521 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _products = __webpack_require__(128);

var _products2 = _interopRequireDefault(_products);

var _product_type = __webpack_require__(275);

var _product_type2 = _interopRequireDefault(_product_type);

var _periods = __webpack_require__(274);

var _periods2 = _interopRequireDefault(_periods);

var _form_select = __webpack_require__(22);

var _form_select2 = _interopRequireDefault(_form_select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var productFormSolicitudes = _react2.default.createClass({
  displayName: 'productFormSolicitudes',
  getInitialState: function getInitialState() {
    return {
      product: {
        solicitudes_id: '',
        name: '',
        type: '',
        processor: '',
        ram: '',
        hdd: '',
        burner: '',
        network_card: '',
        battery: '',
        monitor: '',
        keyboard: '',
        os: '',
        office: '',
        antivirus: '',
        additional_1: '',
        additional_2: '',
        additional_3: '',
        additional_4: '',
        additional_5: '',
        additional_6: '',
        lapse: '',
        period: '',
        quantity: '',
        price: '',
        total: '',
        show: 0,
        iva: 0,
        note: '',
        spaces: ''
      },
      additional: false,
      errors: []
    };
  },
  getDefaultProps: function getDefaultProps() {
    return {
      product: {},
      errors: []
    };
  },
  componentDidMount: function componentDidMount() {
    var product = _extends({}, this.state.product, this.props.product);
    this.setState({ product: product });
  },
  componentWillReceiveProps: function componentWillReceiveProps(props) {
    var product = _extends({}, this.state.product, props.product);
    product = _extends({}, product, { solicitudes_id: this.props.solicitudId });
    this.setState({ product: product });
  },
  handleChangeInput: function handleChangeInput(field, e) {
    e.preventDefault();
    var val = e.currentTarget.value;
    var product = _extends({}, this.state.product, _defineProperty({}, field, val));
    var additional = field == 'name' && val == 'Adicional' || val == 'Complements' ? true : false;
    if (field == 'price' || field == 'quantity' || field == 'lapse') product = this.getTotal(product);
    this.setState({ product: product, additional: additional });
  },
  handleChangeCheckbox: function handleChangeCheckbox(field, e) {
    var val = e.currentTarget.checked;
    var product = _extends({}, this.state.product, _defineProperty({}, field, val));
    this.setState({ product: product });
  },
  getTotal: function getTotal(product) {
    var total = parseInt(product.lapse) * parseInt(product.quantity) * parseInt(product.price);
    return _extends({}, product, { total: total });
  },
  handleSubmit: function handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.product);
  },
  close: function close(e) {
    e.preventDefault();
    this.props.onClose();
  },
  render: function render() {
    var product = this.state.product;


    return _react2.default.createElement(
      'form',
      { id: 'product-form', className: 'form', onSubmit: this.handleSubmit },
      _react2.default.createElement(
        'div',
        { className: 'form-group col-md-6' },
        _react2.default.createElement(
          'label',
          null,
          'Producto'
        ),
        _react2.default.createElement(_form_select2.default, {
          ref: 'name',
          options: _products2.default,
          'default': 'Seleccionar producto',
          onSelectChange: this.handleChangeInput.bind(null, 'name'),
          value: product.name
        })
      ),
      _react2.default.createElement(
        'div',
        { className: 'form-group col-md-6' },
        _react2.default.createElement(
          'label',
          null,
          'Tipo'
        ),
        _react2.default.createElement(_form_select2.default, {
          ref: 'type',
          options: _product_type2.default,
          'default': 'Seleccionar tipo',
          onSelectChange: this.handleChangeInput.bind(null, 'type'),
          value: product.type
        })
      ),
      _react2.default.createElement(
        'div',
        { className: this.state.additional ? "additional-hide hide" : "" },
        _react2.default.createElement(
          'div',
          { className: 'form-group col-md-6' },
          _react2.default.createElement(
            'label',
            null,
            'Procesador'
          ),
          _react2.default.createElement('input', {
            type: 'text',
            className: 'form-control input-processor',
            onChange: this.handleChangeInput.bind(null, 'processor'),
            value: product.processor
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group col-md-6' },
          _react2.default.createElement(
            'label',
            null,
            'RAM'
          ),
          _react2.default.createElement('input', {
            type: 'text',
            className: 'form-control',
            onChange: this.handleChangeInput.bind(null, 'ram'),
            value: product.ram })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group col-md-6' },
          _react2.default.createElement(
            'label',
            null,
            'Disco duro'
          ),
          _react2.default.createElement('input', {
            type: 'text',
            className: 'form-control',
            onChange: this.handleChangeInput.bind(null, 'hdd'),
            value: product.hdd
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group col-md-6' },
          _react2.default.createElement(
            'label',
            null,
            'Unidad optica'
          ),
          _react2.default.createElement('input', {
            type: 'text',
            className: 'form-control',
            onChange: this.handleChangeInput.bind(null, 'burner'),
            value: product.burner
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group col-md-6' },
          _react2.default.createElement(
            'label',
            null,
            'Tarjeta de red'
          ),
          _react2.default.createElement('input', {
            ref: 'network_card',
            type: 'text',
            className: 'form-control',
            onChange: this.handleChangeInput.bind(null, 'network_card'),
            value: product.network_card
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group col-md-6' },
          _react2.default.createElement(
            'label',
            null,
            'Bater\xEDa'
          ),
          _react2.default.createElement('input', {
            ref: 'battery',
            type: 'text',
            className: 'form-control',
            onChange: this.handleChangeInput.bind(null, 'battery'),
            value: product.battery
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group col-md-6' },
          _react2.default.createElement(
            'label',
            null,
            'Monitor'
          ),
          _react2.default.createElement('input', {
            ref: 'monitor',
            type: 'text',
            className: 'form-control',
            onChange: this.handleChangeInput.bind(null, 'monitor'),
            value: product.monitor
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group col-md-6' },
          _react2.default.createElement(
            'label',
            null,
            'Teclado y mouse'
          ),
          _react2.default.createElement('input', {
            ref: 'keyboard',
            type: 'text',
            className: 'form-control',
            onChange: this.handleChangeInput.bind(null, 'keyboard'),
            value: product.keyboard
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group col-md-6' },
          _react2.default.createElement(
            'label',
            null,
            'Sistema operativo'
          ),
          _react2.default.createElement('input', {
            ref: 'os',
            type: 'text',
            className: 'form-control',
            onChange: this.handleChangeInput.bind(null, 'os'),
            value: product.os
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group col-md-6' },
          _react2.default.createElement(
            'label',
            null,
            'Office'
          ),
          _react2.default.createElement('input', {
            ref: 'office',
            type: 'text',
            className: 'form-control',
            onChange: this.handleChangeInput.bind(null, 'office'),
            value: product.office
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group col-md-6' },
          _react2.default.createElement(
            'label',
            null,
            'Antivirus'
          ),
          _react2.default.createElement('input', {
            ref: 'antivirus',
            type: 'text',
            className: 'form-control',
            onChange: this.handleChangeInput.bind(null, 'antivirus'),
            value: product.antivirus
          })
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'form-group col-md-6' },
        _react2.default.createElement(
          'label',
          null,
          'Adicional'
        ),
        _react2.default.createElement('input', {
          ref: 'additional_1',
          type: 'text',
          className: 'form-control',
          onChange: this.handleChangeInput.bind(null, 'additional_1'),
          value: product.additional_1
        })
      ),
      _react2.default.createElement(
        'div',
        { className: 'form-group col-md-6' },
        _react2.default.createElement(
          'label',
          null,
          'Adicional'
        ),
        _react2.default.createElement('input', {
          ref: 'additional_2',
          type: 'text',
          className: 'form-control',
          onChange: this.handleChangeInput.bind(null, 'additional_2'),
          value: product.additional_2
        })
      ),
      _react2.default.createElement(
        'div',
        { className: 'form-group col-md-6' },
        _react2.default.createElement(
          'label',
          null,
          'Adicional'
        ),
        _react2.default.createElement('input', {
          ref: 'additional_3',
          type: 'text',
          className: 'form-control',
          onChange: this.handleChangeInput.bind(null, 'additional_3'),
          value: product.additional_3
        })
      ),
      _react2.default.createElement(
        'div',
        { className: 'form-group col-md-6' },
        _react2.default.createElement(
          'label',
          null,
          'Adicional'
        ),
        _react2.default.createElement('input', {
          ref: 'additional_4',
          type: 'text',
          className: 'form-control',
          onChange: this.handleChangeInput.bind(null, 'additional_4'),
          value: product.additional_4
        })
      ),
      _react2.default.createElement(
        'div',
        { className: 'form-group col-md-6' },
        _react2.default.createElement(
          'label',
          null,
          'Adicional'
        ),
        _react2.default.createElement('input', {
          ref: 'additional_5',
          type: 'text',
          className: 'form-control',
          onChange: this.handleChangeInput.bind(null, 'additional_5'),
          value: product.additional_5
        })
      ),
      _react2.default.createElement(
        'div',
        { className: 'form-group col-md-6' },
        _react2.default.createElement(
          'label',
          null,
          'Adicional'
        ),
        _react2.default.createElement('input', {
          ref: 'additional_6',
          type: 'text',
          className: 'form-control',
          onChange: this.handleChangeInput.bind(null, 'additional_6'),
          value: product.additional_6 })
      ),
      _react2.default.createElement('div', { className: 'col-md-12' }),
      _react2.default.createElement(
        'div',
        { className: 'form-group col-md-3' },
        _react2.default.createElement(
          'label',
          null,
          'Lapso'
        ),
        _react2.default.createElement('input', {
          ref: 'lapse',
          type: 'number',
          className: 'form-control',
          onChange: this.handleChangeInput.bind(null, 'lapse'),
          value: product.lapse })
      ),
      _react2.default.createElement(
        'div',
        { className: 'form-group col-md-3' },
        _react2.default.createElement(
          'label',
          null,
          'Periodo'
        ),
        _react2.default.createElement(_form_select2.default, {
          ref: 'period',
          options: _periods2.default,
          'default': 'Seleccionar periodo',
          onSelectChange: this.handleChangeInput.bind(null, 'period'),
          value: product.period
        })
      ),
      _react2.default.createElement(
        'div',
        { className: 'form-group col-md-3' },
        _react2.default.createElement(
          'label',
          null,
          'Cantidad'
        ),
        _react2.default.createElement('input', {
          ref: 'quantity',
          type: 'number',
          className: 'form-control',
          onChange: this.handleChangeInput.bind(null, 'quantity'),
          value: product.quantity })
      ),
      _react2.default.createElement(
        'div',
        { className: 'form-group col-md-3' },
        _react2.default.createElement(
          'label',
          null,
          'Precio'
        ),
        _react2.default.createElement('input', {
          ref: 'price',
          type: 'number',
          className: 'form-control',
          onChange: this.handleChangeInput.bind(null, 'price'),
          value: product.price })
      ),
      _react2.default.createElement(
        'div',
        { className: 'form-group col-xs-12' },
        _react2.default.createElement(
          'label',
          null,
          'Nota'
        ),
        _react2.default.createElement('textarea', {
          ref: 'note',
          cols: '4',
          className: 'form-control',
          onChange: this.handleChangeInput.bind(null, 'note'),
          value: product.note })
      ),
      _react2.default.createElement(
        'div',
        { className: 'checkbox col-md-3' },
        _react2.default.createElement(
          'label',
          null,
          _react2.default.createElement('input', {
            ref: 'iva',
            type: 'checkbox',
            onChange: this.handleChangeCheckbox.bind(null, 'iva'),
            checked: product.iva,
            value: product.iva
          }),
          ' ',
          _react2.default.createElement(
            'span',
            null,
            'Mostrar IVA ',
            product.iva
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'checkbox col-md-3', style: { 'marginTop': '10px' } },
        _react2.default.createElement(
          'label',
          null,
          _react2.default.createElement('input', {
            type: 'checkbox',
            onChange: this.handleChangeCheckbox.bind(null, 'show'),
            checked: product.show,
            value: product.show
          }),
          ' ',
          _react2.default.createElement(
            'span',
            null,
            'Mostrar total'
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'form-group col-md-3' },
        _react2.default.createElement(
          'label',
          null,
          'Espacios pdf'
        ),
        _react2.default.createElement('input', {
          ref: 'spaces',
          type: 'number',
          className: 'form-control',
          onChange: this.handleChangeInput.bind(null, 'spaces'),
          value: product.spaces
        })
      ),
      _react2.default.createElement(
        'div',
        {
          className: 'alert alert-danger col-md-12',
          style: this.props.errors.length ? {} : { display: 'none' }
        },
        this.props.errors
      ),
      _react2.default.createElement(
        'div',
        { className: 'form-group col-xs-12' },
        _react2.default.createElement(
          'button',
          { className: 'btn btn-primary btn-sm pull-right' },
          'Guardar'
        ),
        _react2.default.createElement(
          'button',
          { className: 'btn btn-default btn-sm pull-left', onClick: this.close },
          'Cerrar'
        )
      )
    );
  }
});

exports.default = productFormSolicitudes;

/***/ }),
/* 522 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _moment = __webpack_require__(1);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var QuoActivity = _react2.default.createClass({
  displayName: 'QuoActivity',
  render: function render() {
    var _this = this;

    var activityNodes = this.props.activities.map(function (activity) {
      return _react2.default.createElement(
        'li',
        { key: activity.id },
        _react2.default.createElement('hr', null),
        _react2.default.createElement(
          'b',
          null,
          activity.user ? activity.user.name : _this.props.user.name
        ),
        ' ',
        activity.message,
        ' ',
        _react2.default.createElement(
          'i',
          null,
          (0, _moment2.default)(activity.created_at).fromNow()
        )
      );
    });

    return _react2.default.createElement(
      'div',
      { className: 'panel' },
      _react2.default.createElement(
        'div',
        { className: 'panel-heading' },
        _react2.default.createElement(
          'h5',
          null,
          'Actividad'
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'panel-body' },
        _react2.default.createElement(
          'ul',
          { className: 'activities' },
          activityNodes
        )
      )
    );
  }
});

exports.default = QuoActivity;

/***/ }),
/* 523 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactQuill = __webpack_require__(147);

var _reactQuill2 = _interopRequireDefault(_reactQuill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var QuoComment = _react2.default.createClass({
  displayName: 'QuoComment',
  getDefaultProps: function getDefaultProps() {
    return {
      show: false,
      comment: ''
    };
  },
  getInitialState: function getInitialState() {
    return {
      comment: ''
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    this.setState(nextProps);
  },
  handleClick: function handleClick() {
    this.props.OnSaveComment(this.state.comment);
  },
  handleChange: function handleChange(value) {
    this.setState({ comment: value });
  },
  handleClose: function handleClose() {
    this.props.onClose();
  },
  render: function render() {
    return _react2.default.createElement(
      'div',
      { className: this.props.show ? "panel" : "hidden" },
      _react2.default.createElement(
        'div',
        { className: 'panel-body' },
        _react2.default.createElement(
          'h5',
          null,
          'Comentario'
        ),
        _react2.default.createElement(_reactQuill2.default, {
          value: this.state.comment,
          onChange: this.handleChange
        }),
        _react2.default.createElement('div', { className: 'row' }),
        _react2.default.createElement('p', null),
        _react2.default.createElement(
          'button',
          {
            className: 'btn btn-sm btn-primary',
            onClick: this.handleClick },
          'Guardar'
        ),
        _react2.default.createElement(
          'button',
          {
            className: 'btn btn-sm btn-default pull-right',
            onClick: this.handleClose },
          'Cerrar'
        )
      )
    );
  }
});

exports.default = QuoComment;

/***/ }),
/* 524 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _contacts = __webpack_require__(56);

var action = _interopRequireWildcard(_contacts);

var _quotations = __webpack_require__(57);

var quoAction = _interopRequireWildcard(_quotations);

var _form_create = __webpack_require__(81);

var _form_create2 = _interopRequireDefault(_form_create);

var _form_select = __webpack_require__(22);

var _form_select2 = _interopRequireDefault(_form_select);

var _clean_object = __webpack_require__(49);

var _clean_object2 = _interopRequireDefault(_clean_object);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var QuoContact = _react2.default.createClass({
  displayName: 'QuoContact',
  getInitialState: function getInitialState() {
    return {
      showForm: false,
      contact: {}
    };
  },
  changeContact: function changeContact(e) {
    var id = e.currentTarget.value;
    this.props.changeContact(id);
  },
  editContact: function editContact() {
    this.setState({ contact: this.props.quotations.contact });
    this.showForm();
  },
  showForm: function showForm() {
    this.setState({ showForm: !this.state.showForm });
  },
  handleCancelForm: function handleCancelForm() {
    this.setState({ contact: (0, _clean_object2.default)(this.state.contact) });
    this.showForm();
  },
  handleSubmit: function handleSubmit(contact) {
    var _this = this;

    var contactData = _extends({}, contact, { company_id: this.props.quotations.company.id });

    if (contactData.id) {
      this.props.dispatch(action.update(contactData)).then(function (res) {
        return _this.props.dispatch(quoAction.updateContact(res.payload));
      }).then(function () {
        _this.setState({ contact: (0, _clean_object2.default)(_this.state.contact) });
        _this.showForm();
      });
    } else {
      this.props.dispatch(action.store(contactData)).then(function () {
        _this.showForm();
      });
    }
  },
  show: function show(field) {
    if (field && field != "") {
      return "";
    }
    return "hidden";
  },
  render: function render() {
    var _props$quotations = this.props.quotations,
        contact = _props$quotations.contact,
        company = _props$quotations.company;

    var contactSelect = void 0;

    var contactOptions = this.props.contacts.items.map(function (contact, i) {
      return { value: contact.id, label: contact.name + ' ' + contact.lastname };
    });

    return _react2.default.createElement(
      'div',
      { className: 'panel' },
      _react2.default.createElement(
        'div',
        { className: 'panel-body' },
        _react2.default.createElement(
          'button',
          {
            className: 'btn btn-primary btn-sm',
            onClick: this.showForm
          },
          'Agregar contacto'
        ),
        ' ',
        _react2.default.createElement(
          'button',
          { className: 'btn btn-primary btn-sm', onClick: this.editContact },
          'Editar contacto'
        ),
        _react2.default.createElement('hr', null),
        _react2.default.createElement(
          'div',
          { className: this.state.showForm ? "" : "hidden" },
          _react2.default.createElement(_form_create2.default, {
            size: 'col-md-12',
            btnText: 'Guardar',
            contact: this.state.contact,
            onSubmit: this.handleSubmit,
            onCancel: this.handleCancelForm
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          ' '
        ),
        _react2.default.createElement(
          'b',
          { className: this.show(company.name) },
          company.name,
          _react2.default.createElement('hr', null)
        ),
        _react2.default.createElement(
          'b',
          { className: this.show(contact.name) },
          contact.name,
          ' ',
          contact.lastname,
          _react2.default.createElement('hr', null)
        ),
        _react2.default.createElement(
          'span',
          { className: this.show(contact.email) },
          contact.email,
          _react2.default.createElement('hr', null)
        ),
        _react2.default.createElement(
          'span',
          { className: this.show(contact.phone_1) },
          contact.phone_1,
          _react2.default.createElement('hr', null)
        ),
        _react2.default.createElement(
          'span',
          { className: this.show(contact.phone_2) },
          ' ',
          contact.phone_2,
          _react2.default.createElement('hr', null)
        ),
        _react2.default.createElement(
          'span',
          { className: this.show(contact.mobile_1) },
          contact.mobile_1,
          _react2.default.createElement('hr', null)
        ),
        _react2.default.createElement(
          'span',
          { className: this.show(contact.mobile_2) },
          ' ',
          contact.mobile_2
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(_form_select2.default, {
            options: contactOptions,
            'default': 'Cambiar Contacto',
            onSelectChange: this.changeContact,
            value: ''
          })
        )
      )
    );
  }
});

exports.default = QuoContact;

/***/ }),
/* 525 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var QuoEdit = _react2.default.createClass({
  displayName: 'QuoEdit',
  getDefaultProps: function getDefaultProps() {
    return {
      quotation: {
        id: 0
      }
    };
  },
  getInitialState: function getInitialState() {
    return {
      quotation: {}
    };
  },
  openComment: function openComment() {
    this.props.onShowComment();
  },
  openMails: function openMails() {
    this.props.onShowMails();
  },
  handleServiceApproval: function handleServiceApproval() {
    var quotation = this.props.quotation;
    if (quotation.service_approval === 0) {
      this.props.onServiceApproval(1);
    } else {
      this.props.onServiceApproval(0);
    }
  },
  render: function render() {
    var quotation = this.props.quotation;
    var serviceApprovalText = 'Quitar aprobación de servicio';
    if (quotation.service_approval === 0) {
      serviceApprovalText = 'Agregar aprobación de servicio';
    }

    return _react2.default.createElement(
      'div',
      { className: 'panel' },
      _react2.default.createElement(
        'div',
        { className: 'panel-body' },
        _react2.default.createElement(
          'ul',
          { className: 'list-inline' },
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              {
                className: 'btn btn-default btn-sm',
                href: '/quotations/' + quotation.id + '/pdf/' + quotation.id,
                target: '_new' },
              'PDF'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              {
                className: 'btn btn-default btn-sm',
                href: '/quotations/' + quotation.id + '/pdfbn',
                target: '_blank' },
              ' PDF BN'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              {
                className: 'btn btn-default btn-sm',
                href: '/quotations/' + quotation.id + '/pdflogos',
                target: '_blank' },
              ' PDF con logos'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              {
                href: '/quotations/' + quotation.id + '/duplicate',
                className: 'btn btn-default btn-sm' },
              'Duplicar'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'button',
              {
                className: 'btn btn-default btn-sm',
                onClick: this.openComment },
              'Editar Comentario'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'button',
              {
                className: 'btn btn-default btn-sm',
                onClick: this.openMails
              },
              'Editar Mail'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'button',
              {
                className: 'btn btn-default btn-sm',
                onClick: this.handleServiceApproval
              },
              serviceApprovalText
            )
          )
        )
      )
    );
  }
});

exports.default = QuoEdit;

/***/ }),
/* 526 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _form_select = __webpack_require__(22);

var _form_select2 = _interopRequireDefault(_form_select);

var _category_type = __webpack_require__(271);

var _category_type2 = _interopRequireDefault(_category_type);

var _advisors = __webpack_require__(126);

var _advisors2 = _interopRequireDefault(_advisors);

var _type = __webpack_require__(129);

var _type2 = _interopRequireDefault(_type);

var _client_type = __webpack_require__(127);

var _client_type2 = _interopRequireDefault(_client_type);

var _found_us = __webpack_require__(183);

var _found_us2 = _interopRequireDefault(_found_us);

var _products = __webpack_require__(128);

var _products2 = _interopRequireDefault(_products);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var messages = {
  type: 'cambio tipo',
  type_category: 'cambio categoría',
  client_type: 'cambio tipo de cliente',
  found_us: 'cambio como llegó',
  offer: 'cambio ofrecer producto',
  advisor: 'cambio asesor'
};

var quoFilters = _react2.default.createClass({
  displayName: 'quoFilters',

  getDefaultProps: function getDefaultProps() {
    return {
      quotation: {},
      disabled: false
    };
  },

  getInitialState: function getInitialState() {
    return {
      filters: {}
    };
  },

  handleChange: function handleChange() {
    var field = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var e = arguments[1];

    var val = e.currentTarget.value;
    var filters = _extends({}, this.state.filters, _defineProperty({}, field, val));
    var message = messages[field];
    this.props.onChange(filters, message);
    this.setState({ filters: filters });
  },


  update: function update() {
    var filters = {
      type: 'cambio tipo de cotización',
      type_category: this.refs.type_category.refs.select.value,
      client_type: this.refs.client_type.refs.select.value,
      found_us: this.refs.found_us.refs.select.value,
      offer: this.refs.offer.refs.select.value,
      advisor: this.refs.advisor.refs.select.value
    };

    this.props.onChange(filters);
    this.setState({ filters: filters });
  },

  render: function render() {
    var quotation = this.props.quotation;

    return _react2.default.createElement(
      'div',
      { className: 'panel panel-default' },
      _react2.default.createElement(
        'div',
        { className: 'panel-body' },
        _react2.default.createElement(
          'div',
          { className: 'form-group col-sm-4' },
          _react2.default.createElement(_form_select2.default, {
            ref: 'type',
            options: _type2.default,
            'default': 'Seleccionar tipo',
            onSelectChange: this.handleChange.bind(null, 'type'),
            value: quotation.type,
            disabled: this.props.disabled
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group col-sm-4' },
          _react2.default.createElement(_form_select2.default, {
            ref: 'type_category',
            options: _category_type2.default,
            'default': 'Seleccionar categor\xEDa de tipo',
            onSelectChange: this.handleChange.bind(null, 'type_category'),
            value: quotation.type_category,
            disabled: this.props.disabled
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group col-sm-4' },
          _react2.default.createElement(_form_select2.default, {
            ref: 'client_type',
            options: _client_type2.default,
            'default': 'Seleccionar tipo de cliente',
            onSelectChange: this.handleChange.bind(null, 'client_type'),
            value: quotation.client_type,
            disabled: this.props.disabled
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group col-sm-4' },
          _react2.default.createElement(_form_select2.default, {
            ref: 'found_us',
            options: _found_us2.default,
            'default': 'Seleccionar como lleg\xF3',
            onSelectChange: this.handleChange.bind(null, 'found_us'),
            value: quotation.found_us,
            disabled: this.props.disabled
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group col-sm-4' },
          _react2.default.createElement(_form_select2.default, {
            ref: 'offer',
            options: _products2.default,
            'default': 'Seleccionar ofrecer producto',
            onSelectChange: this.handleChange.bind(null, 'offer'),
            value: quotation.offer,
            disabled: this.props.disabled
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group col-sm-4' },
          _react2.default.createElement(_form_select2.default, {
            ref: 'advisor',
            options: _advisors2.default,
            'default': 'Seleccionar asesor',
            onSelectChange: this.handleChange.bind(null, 'advisor'),
            value: quotation.advisor,
            disabled: this.props.disabled
          })
        )
      )
    );
  }
});

exports.default = quoFilters;

/***/ }),
/* 527 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _editor = __webpack_require__(150);

var _editor2 = _interopRequireDefault(_editor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var QuoMails = _react2.default.createClass({
  displayName: 'QuoMails',
  getDefaultProps: function getDefaultProps() {
    return {
      quotation: {
        mail_message: '',
        mail_recipient_1: '',
        mail_recipient_2: ''
      },
      show: false,
      loading: false
    };
  },
  getInitialState: function getInitialState() {
    return {
      quotation: {},
      show: false
    };
  },
  handleClose: function handleClose() {
    this.props.onClose();
  },
  handleTextChange: function handleTextChange(text) {
    this.setState({
      quotation: _extends({}, this.state.quotation, { mail_message: text })
    });
  },
  handleMail: function handleMail() {
    var _this = this;

    this.setState({ loading: true });
    this.props.onSendMail(this.state.quotation).then(function () {
      return _this.setState({ loading: false });
    });
  },
  handleChange: function handleChange() {
    var quotation = _extends({}, this.state.quotation, {
      mail_recipient_1: this.refs.mail_recipient_1.value,
      mail_recipient_2: this.refs.mail_recipient_2.value
    });

    this.setState({ quotation: quotation });
  },
  handleClick: function handleClick() {
    this.props.onSaveMail(this.state.quotation);
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    this.setState(nextProps);
  },
  render: function render() {
    var quotation = this.state.quotation;

    return _react2.default.createElement(
      'div',
      { className: this.state.show ? "panel" : "hidden" },
      _react2.default.createElement(
        'div',
        { className: 'panel-body' },
        _react2.default.createElement(
          'h5',
          null,
          'Email'
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'form-group col-sm-6' },
            _react2.default.createElement('input', {
              className: 'form-control',
              ref: 'mail_recipient_1',
              placeholder: 'Para',
              value: quotation.mail_recipient_1,
              onChange: this.handleChange
            })
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group col-sm-6' },
            _react2.default.createElement('input', {
              className: 'form-control',
              ref: 'mail_recipient_2',
              placeholder: 'Para',
              value: quotation.mail_recipient_2,
              onChange: this.handleChange
            })
          )
        ),
        _react2.default.createElement(_editor2.default, {
          value: quotation.mail_message,
          onChange: this.handleTextChange
        }),
        _react2.default.createElement('div', { className: 'row' }),
        _react2.default.createElement('p', null),
        _react2.default.createElement(
          'button',
          { className: 'btn btn-sm btn-primary mail-save', onClick: this.handleClick },
          'Guardar'
        ),
        _react2.default.createElement('span', { style: { margin: '0 7px' } }),
        _react2.default.createElement(
          'button',
          { className: 'btn btn-sm btn-primary mail-send', onClick: this.handleMail, disabled: this.state.loading },
          this.state.loading ? 'Enviado...' : 'Enviar Mail'
        ),
        _react2.default.createElement(
          'button',
          { className: 'btn btn-sm btn-default pull-right mail-close', onClick: this.handleClose },
          'Cerrar'
        )
      )
    );
  }
});

exports.default = QuoMails;

/***/ }),
/* 528 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var React = __webpack_require__(2);
var Select = __webpack_require__(22);
var reasonsOptions = __webpack_require__(272);

var QuoNoEffective = React.createClass({
  displayName: 'QuoNoEffective',
  getDefaultProps: function getDefaultProps() {
    return {
      show: false
    };
  },
  getInitialState: function getInitialState() {
    return {
      quotation: {
        status: 'No efectiva',
        status_cause: null,
        status_note: ''
      }
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(props) {
    this.setState(props);
  },
  handleChange: function handleChange() {
    var reason = {
      status: 'No efectiva',
      status_cause: this.refs.cause.refs.select.value,
      status_note: this.refs.note.value
    };

    this.setState({ quotation: reason });
  },
  handleClose: function handleClose() {
    this.props.onClose();
  },
  handleClick: function handleClick() {
    this.props.onSave(this.state.quotation);
  },
  render: function render() {
    return React.createElement(
      'div',
      { className: this.props.show ? "panel" : "hidden" },
      React.createElement(
        'div',
        { className: 'panel-body' },
        React.createElement(
          'h5',
          null,
          'No efectiva'
        ),
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement(Select, {
            ref: 'cause',
            options: reasonsOptions,
            'default': 'Seleccionar raz\xF3n',
            onSelectChange: this.handleChange,
            value: this.state.quotation.status_cause
          })
        ),
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement('textarea', {
            className: 'form-control',
            ref: 'note',
            placeholder: 'Nota',
            onChange: this.handleChange,
            value: this.state.quotation.status_note ? this.state.quotation.status_note : '' })
        ),
        React.createElement(
          'button',
          { className: 'btn btn-sm btn-primary', onClick: this.handleClick },
          'Guardar'
        ),
        React.createElement(
          'button',
          { className: 'btn btn-sm btn-default pull-right', onClick: this.handleClose },
          'Cerrar'
        )
      )
    );
  }
});

exports.default = QuoNoEffective;

/***/ }),
/* 529 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var React = __webpack_require__(2);
var reasonsOptions = __webpack_require__(273);
var Select = __webpack_require__(22);

var QuoNoSend = React.createClass({
  displayName: 'QuoNoSend',
  getDefaultProps: function getDefaultProps() {
    return {
      show: false
    };
  },
  getInitialState: function getInitialState() {
    return {
      quotation: {
        status: 'No enviada',
        status_cause: null,
        status_note: ''
      }
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(props) {
    this.setState(props);
  },
  handleChange: function handleChange() {
    var reason = {
      status: 'No enviada',
      status_cause: this.refs.cause.refs.select.value,
      status_note: this.refs.note.value
    };

    this.setState({ quotation: reason });
  },
  handleClose: function handleClose() {
    this.props.onClose();
  },
  handleClick: function handleClick() {
    this.props.onSave(this.state.quotation);
  },
  render: function render() {
    return React.createElement(
      'div',
      { className: this.props.show ? "panel" : "hidden" },
      React.createElement(
        'div',
        { className: 'panel-body' },
        React.createElement(
          'h5',
          null,
          'No enviada'
        ),
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement(Select, {
            ref: 'cause',
            options: reasonsOptions,
            'default': 'Seleccionar raz\xF3n',
            onSelectChange: this.handleChange,
            value: this.state.quotation.status_cause
          })
        ),
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement('textarea', {
            className: 'form-control',
            ref: 'note',
            placeholder: 'Nota',
            onChange: this.handleChange,
            value: this.state.quotation.status_note ? this.state.quotation.status_note : '' })
        ),
        React.createElement(
          'button',
          {
            className: 'btn btn-sm btn-primary',
            onClick: this.handleClick },
          'Guardar'
        ),
        React.createElement(
          'button',
          {
            className: 'btn btn-sm btn-default pull-right',
            onClick: this.handleClose },
          'Cancelar'
        )
      )
    );
  }
});

exports.default = QuoNoSend;

/***/ }),
/* 530 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _product = __webpack_require__(226);

var _product2 = _interopRequireDefault(_product);

var _form_create = __webpack_require__(520);

var _form_create2 = _interopRequireDefault(_form_create);

var _products = __webpack_require__(107);

var action = _interopRequireWildcard(_products);

var _activities = __webpack_require__(55);

var activityAction = _interopRequireWildcard(_activities);

var _clean_object = __webpack_require__(49);

var _clean_object2 = _interopRequireDefault(_clean_object);

var _activity = __webpack_require__(110);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var QuoProducts = _react2.default.createClass({
  displayName: 'QuoProducts',

  getDefaultProps: function getDefaultProps() {
    return {
      id: null,
      disabled: false
    };
  },

  getInitialState: function getInitialState() {
    return {
      product: {},
      showForm: false,
      errors: []
    };
  },
  _handleSubmit: function _handleSubmit(product) {
    this.setState({ product: product });

    if (product.id) {
      this.props.dispatch(action.update(product)).then(this.handleStoreReponse);
    } else {
      this.props.dispatch(action.store(product)).then(this.handleStoreReponse);
    }
  },
  handleStoreReponse: function handleStoreReponse(actionRes) {
    var payload = actionRes.payload;


    if (actionRes.type == "PRODUCTS_FAIL") {
      var errors = Object.keys(payload).map(function (key) {
        return payload[key];
      });
      this.setState({ errors: errors });
    } else {

      this.cleanProduct();
    }
  },


  handleDuplicate: function handleDuplicate(id, e) {
    e.preventDefault();
    this.props.dispatch(action.duplicate(id));
  },

  handleEdit: function handleEdit(product) {
    this.setState({
      product: product,
      showForm: true
    });
  },

  handleOrder: function handleOrder(product) {
    var order = true;

    if (product.ordered && product.ordered == true || product.ordered == 1) {
      order = false;
    }

    var product = _extends({}, product, { ordered: order });
    this.setState({ product: product });

    this.props.dispatch(action.update(product)).then(this.handleStoreReponse);
  },

  handleDelete: function handleDelete(id, e) {
    e.preventDefault();
    this.props.dispatch(action.remove(id));
  },

  showForm: function showForm(e) {
    var show = !this.state.showForm;
    if (show) this.cleanProduct();
    this.setState({ showForm: show });
  },

  cleanProduct: function cleanProduct() {
    this.setState({
      product: (0, _clean_object2.default)(this.state.product),
      errors: []
    });
  },
  dragStart: function dragStart(e) {
    this.dragged = e.currentTarget;
    this.startY = e.clientY;
  },
  dragOver: function dragOver(e) {
    e.preventDefault();
    e.currentTarget.style.opacity = '.2';
    this.over = e.currentTarget;
    this.direction = '';

    if (this.startY > e.clientY) {
      this.direction = 'up';
    } else {
      this.direction = 'down';
    }
  },
  dragLeave: function dragLeave(e) {
    e.currentTarget.style.opacity = '1';
  },
  dragEnd: function dragEnd(e) {
    var _this = this;

    this.dragged.style.display = 'table-row';
    this.over.style.opacity = '1';
    var toPosition = parseInt(this.over.dataset.position);
    var id = this.dragged.dataset.id;

    var products = this.props.products.items.map(function (product, i) {
      var position = i;
      if (id == product.id) {
        return _extends({}, product, { position: toPosition });
      }

      position = _this.getPosition(position, toPosition);

      return _extends({}, product, { position: position });
    }).sort(this.sortByPosition);

    products.forEach(function (product) {
      return _this.props.dispatch(action.update(product));
    });
  },
  getPosition: function getPosition(position, toPosition) {
    if (this.direction == 'down') {
      position = toPosition >= position ? position - 1 : position;
    } else {
      position = toPosition <= position ? position + 1 : position;
    }

    return position;
  },
  sortByPosition: function sortByPosition(left, right) {
    var a = left.position;
    var b = right.position;
    if (a > b) return 1;
    if (a < b) return -1;
  },


  render: function render() {
    var _this2 = this;

    var products = this.props.products.items;
    var productNodes = products.sort(this.sortByPosition).map(function (product, i) {
      return _react2.default.createElement(_product2.default, {
        product: product,
        index: i,
        key: product.id,
        onEdit: _this2.handleEdit,
        onDuplicate: _this2.handleDuplicate,
        onOrder: _this2.handleOrder,
        onDelete: _this2.handleDelete,
        disabled: _this2.props.disabled,
        onDragEnd: _this2.dragEnd,
        onDragStart: _this2.dragStart,
        onDragOver: _this2.dragOver,
        onDragLeave: _this2.dragLeave
      });
    });

    var showTable = false;

    if (products.length > 0) {
      showTable = true;
    }

    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { className: this.state.showForm ? "panel panel-default" : "hidden" },
        _react2.default.createElement(
          'div',
          { className: 'panel-body' },
          _react2.default.createElement(_form_create2.default, {
            onSubmit: this._handleSubmit,
            product: this.state.product,
            quotationId: this.props.quotationId,
            onClose: this.showForm,
            errors: this.state.errors
          })
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'panel panel-default' },
        _react2.default.createElement(
          'div',
          { className: 'panel-heading' },
          _react2.default.createElement(
            'h5',
            null,
            'Productos'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'panel-body' },
          _react2.default.createElement(
            'button',
            {
              className: 'btn btn-primary btn-sm',
              onClick: this.showForm,
              disabled: this.props.disabled
            },
            'Agregar producto'
          ),
          _react2.default.createElement(
            'div',
            { className: 'table-responsive' },
            _react2.default.createElement('hr', null),
            _react2.default.createElement(
              'table',
              { className: 'table table-striped' },
              _react2.default.createElement(
                'thead',
                null,
                _react2.default.createElement(
                  'tr',
                  null,
                  _react2.default.createElement(
                    'th',
                    null,
                    'Producto'
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    'Tiempo'
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    'Cantidad'
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    'Precio'
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    'Total'
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    'Opciones'
                  )
                )
              ),
              _react2.default.createElement(
                'tbody',
                null,
                productNodes
              )
            )
          )
        )
      )
    );
  }
});

exports.default = QuoProducts;

/***/ }),
/* 531 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(20);

var _form_create = __webpack_require__(154);

var _form_create2 = _interopRequireDefault(_form_create);

var _quotations = __webpack_require__(57);

var quoAction = _interopRequireWildcard(_quotations);

var _services = __webpack_require__(91);

var action = _interopRequireWildcard(_services);

var _activities = __webpack_require__(55);

var acitivityAction = _interopRequireWildcard(_activities);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var quoServices = _react2.default.createClass({
  displayName: 'quoServices',
  getInitialState: function getInitialState() {
    return {
      disableAdd: true,
      serviceId: null,
      quotationId: null,
      optionSelected: '',
      showForm: false
    };
  },
  store: function store(id) {
    var _this = this;

    var service = { service_id: id };
    var quotationId = this.props.quotations.quotation.id;
    this.props.dispatch(quoAction.storeService(quotationId, service)).then(function () {
      return _this.props.setActivity('agrego servicio');
    }).then(function () {
      return _this.props.dispatch(action.cleanItems());
    });
  },
  handleDelete: function handleDelete(id) {
    var quotationId = this.props.quotations.quotation.id;
    this.props.dispatch(quoAction.removeService(id, quotationId));
  },
  handleEdit: function handleEdit(service) {
    var _this2 = this;

    this.props.dispatch(action.setService(service)).then(function (res) {
      return _this2.setState({ showForm: true });
    });
  },
  updateService: function updateService(service) {
    var _this3 = this;

    this.props.dispatch(action.update(service)).then(function (res) {
      _this3.props.dispatch(quoAction.updateService(res.payload));
    });
  },
  fetch: function fetch() {
    var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    this.props.dispatch(action.fetch(query));
  },
  search: function search(e) {
    var val = e.currentTarget.value;
    this.setState({ query: val });
    this.fetch({ query: val });
  },
  handleCancel: function handleCancel() {
    var _this4 = this;

    this.props.dispatch(action.cleanItem()).then(function (res) {
      return _this4.setState({ showForm: false });
    });
  },
  render: function render() {
    var _this5 = this;

    var options = this.props.services.items.map(function (opt) {
      return { value: opt.id, label: opt.title };
    });

    var serviceNodes = this.props.quotations.services.map(function (service) {
      return _react2.default.createElement(
        'tr',
        { key: service.id, className: 'quotation-service' },
        _react2.default.createElement(
          'td',
          null,
          service.title
        ),
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement(
            'button',
            {
              className: 'btn btn-default btn-sm',
              onClick: _this5.handleEdit.bind(null, service)
            },
            'Editar'
          ),
          _react2.default.createElement(
            'button',
            {
              className: 'btn btn-default btn-sm',
              onClick: _this5.handleDelete.bind(null, service.id),
              disabled: _this5.props.disabled ? true : false
            },
            'Eliminar'
          )
        )
      );
    });

    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { className: this.state.showForm ? "panel" : "hide" },
        _react2.default.createElement(
          'div',
          { className: 'panel-body' },
          _react2.default.createElement(_form_create2.default, {
            service: this.props.services.service,
            errors: [],
            onSubmit: this.updateService,
            onCancel: this.handleCancel
          })
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'panel' },
        _react2.default.createElement(
          'div',
          { className: 'panel-heading' },
          _react2.default.createElement(
            'h5',
            null,
            'Servicios'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'panel-body' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'form-group col-sm-12' },
              _react2.default.createElement('input', {
                type: 'text',
                className: 'form-control',
                placeholder: 'Buscar',
                onChange: this.search
              }),
              _react2.default.createElement(
                'ul',
                { className: 'list-group' },
                this.props.services.items.map(function (service, i) {
                  return _react2.default.createElement(
                    'li',
                    { className: 'list-group-item', key: i },
                    service.title,
                    ' ',
                    _react2.default.createElement(
                      'button',
                      { className: 'btn btn-primary btn-sm', onClick: _this5.store.bind(null, service.id) },
                      ' Agregar Servicio '
                    )
                  );
                })
              ),
              _react2.default.createElement('br', null)
            ),
            _react2.default.createElement('hr', null),
            _react2.default.createElement(
              'div',
              { className: 'table-responsive col-sm-12' },
              _react2.default.createElement(
                'table',
                { className: 'table table-striped' },
                _react2.default.createElement(
                  'thead',
                  null,
                  _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                      'th',
                      null,
                      'Servicio'
                    ),
                    _react2.default.createElement(
                      'th',
                      null,
                      'Opciones'
                    )
                  )
                ),
                _react2.default.createElement(
                  'tbody',
                  null,
                  serviceNodes
                )
              )
            )
          )
        )
      )
    );
  }
});

exports.default = quoServices;

/***/ }),
/* 532 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _quotations = __webpack_require__(57);

var action = _interopRequireWildcard(_quotations);

var _activity = __webpack_require__(110);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var QuoStatus = _react2.default.createClass({
  displayName: 'QuoStatus',
  getDefaultProps: function getDefaultProps() {
    return {
      disabled: false
    };
  },
  getInitialState: function getInitialState() {
    return {
      sending: false
    };
  },
  handleClick: function handleClick(status, e) {
    e.preventDefault();
    var message = 'Cambio estado a ' + status;

    switch (status) {
      case 'Replanteada':
        window.location = '/quotations/' + this.props.quotation.id + '/rethink';
        break;
      case 'No enviada':
        this.props.handleOpenNoSend(message);
        break;
      case 'No efectiva':
        this.props.handleOpenNoEffective(message);
        break;
      default:
        this.props.onStatusChange({ status: status }, message);
    }
  },
  handleSend: function handleSend() {
    var _this = this;

    var id = this.props.quotation.id;
    var message = 'Cambio estado a enviada';
    this.setState({ sending: true });

    this.props.dispatch(action.sendMail(id)).then(function (actionRes) {
      _this.setState({ sending: false });
      if (actionRes.type == 'QUOTATIONS_FAIL') {
        console.error('quo fail', actionRes);
      } else {
        return _this.props.onStatusChange('Enviada', message);
      }
    });
  },
  render: function render() {
    var sending = this.state.sending ? "disabled" : "";
    var messageSend = this.state.sending ? "Enviando..." : "Enviar";

    return _react2.default.createElement(
      'div',
      { className: 'panel' },
      _react2.default.createElement(
        'div',
        { className: 'panel-body' },
        _react2.default.createElement(
          'ul',
          { className: 'list-inline' },
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'button',
              {
                className: 'btn btn-sm btn-warning',
                onClick: this.handleClick.bind(null, 'Enviada'),
                disabled: this.props.disabled ? true : false
              },
              'Enviada'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'button',
              {
                className: 'btn btn-warning btn-sm',
                onClick: this.handleClick.bind(null, 'Entregada'),
                disabled: this.props.disabled ? true : false
              },
              'Entregada'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'button',
              {
                className: 'btn btn-success btn-sm',
                onClick: this.handleClick.bind(null, 'Efectiva'),
                disabled: this.props.disabled ? true : false
              },
              'Efectiva'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'button',
              {
                className: 'btn btn-danger btn-sm',
                onClick: this.handleClick.bind(this, 'No enviada'),
                disabled: this.props.disabled ? true : false
              },
              'No enviada'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'button',
              {
                className: 'btn btn-danger btn-sm',
                onClick: this.handleClick.bind(this, 'No efectiva'),
                disabled: this.props.disabled ? true : false
              },
              'No efectiva'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              {
                className: 'btn btn-default btn-sm',
                onClick: this.handleClick.bind(this, 'Replanteada')
              },
              'Replantear'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              {
                className: 'btn btn-default btn-sm',
                disabled: this.props.disabled ? true : false,
                onClick: this.handleClick.bind(this, 'Nula')
              },
              'Anular'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              {
                className: 'btn btn-default btn-sm',
                disabled: this.props.disabled ? true : false,
                onClick: this.handleClick.bind(this, 'Por confirmar')
              },
              'Por confirmar'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              {
                className: 'btn btn-default btn-sm',
                disabled: this.props.disabled ? true : false,
                onClick: this.handleClick.bind(this, 'Seguimiento')
              },
              'Seguimiento'
            )
          )
        )
      )
    );
  }
});

exports.default = QuoStatus;

/***/ }),
/* 533 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var React = __webpack_require__(2);

var QuoTimes = React.createClass({
  displayName: 'QuoTimes',
  render: function render() {
    var created_sent_diff = void 0;

    if (this.props.quotation.created_sent_diff) {
      created_sent_diff = this.props.quotation.created_sent_diff + ' minutos';
    }

    return React.createElement(
      'div',
      { className: 'panel' },
      React.createElement(
        'div',
        { className: 'panel-heading' },
        React.createElement(
          'h5',
          null,
          'Tiempos'
        )
      ),
      React.createElement(
        'div',
        { className: 'panel-body' },
        React.createElement(
          'b',
          null,
          'Creada:'
        ),
        ' ',
        this.props.quotation.created_at,
        React.createElement('hr', null),
        React.createElement(
          'b',
          null,
          'Enviada:'
        ),
        ' ',
        this.props.quotation.sent_at,
        React.createElement('hr', null),
        React.createElement(
          'b',
          null,
          'Tiempo:'
        ),
        ' ',
        created_sent_diff
      )
    );
  }
});

exports.default = QuoTimes;

/***/ }),
/* 534 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _update_item = __webpack_require__(224);

var _update_item2 = _interopRequireDefault(_update_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var quoTracking = _react2.default.createClass({
  displayName: 'quoTracking',

  getDefaultProps: function getDefaultProps() {
    return {
      tracking: {}
    };
  },

  render: function render() {
    var tracking = this.props.tracking;
    var showTable = false;
    var contact = void 0;
    var by = void 0;

    if (tracking.contact) {
      contact = tracking.contact.name + ' ' + tracking.contact.lastname;
    }

    if (tracking.user) {
      by = tracking.user.name + ' ' + tracking.user.lastname;
    }

    return _react2.default.createElement(
      'li',
      { className: 'list-item' },
      _react2.default.createElement(
        'p',
        null,
        _react2.default.createElement(
          'b',
          null,
          'Contacto:'
        ),
        ' ',
        contact
      ),
      _react2.default.createElement(
        'b',
        null,
        'Reporte:'
      ),
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-md-12' },
          _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: tracking.report } })
        )
      ),
      _react2.default.createElement(
        'b',
        null,
        'Por: '
      ),
      ' ',
      by,
      ' ',
      _react2.default.createElement(
        'i',
        null,
        tracking.register_date + ' ' + tracking.register_time
      ),
      _react2.default.createElement('hr', null)
    );
  }
});

exports.default = quoTracking;

/***/ }),
/* 535 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _trackings = __webpack_require__(108);

var action = _interopRequireWildcard(_trackings);

var _tracking = __webpack_require__(534);

var _tracking2 = _interopRequireDefault(_tracking);

var _form_create = __webpack_require__(228);

var _form_create2 = _interopRequireDefault(_form_create);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var quoTrackings = _react2.default.createClass({
  displayName: 'quoTrackings',
  getInitialState: function getInitialState() {
    return {
      tracking: {
        todos: []
      }
    };
  },
  handleSubmit: function handleSubmit(tracking) {
    var model = _extends({}, tracking, { quotation_id: this.props.quotationId });
    this.props.dispatch(action.store(model)).then(this.changeStatus);
  },
  changeStatus: function changeStatus(res) {
    if (res.type == "TRACKINGS_STORE" && this.props.quotations.quotation.status == 'Enviada') {

      this.props.onStatusChange({ status: 'Seguimiento', message: 'cambio estado a seguimiento' });
    }
  },
  render: function render() {
    var trackingNodes = this.props.trackings.items.map(function (tracking) {
      return _react2.default.createElement(_tracking2.default, { key: tracking.id, tracking: tracking });
    });

    return _react2.default.createElement(
      'div',
      { className: 'panel' },
      _react2.default.createElement(
        'div',
        { className: 'panel-heading' },
        _react2.default.createElement(
          'h5',
          null,
          'Seguimiento'
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'panel-body' },
        _react2.default.createElement(_form_create2.default, { contacts: this.props.contacts.items, onSubmit: this.handleSubmit }),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'ul',
          { className: 'list-group col-md-12' },
          trackingNodes
        )
      )
    );
  }
});

exports.default = quoTrackings;

/***/ }),
/* 536 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _tooltip = __webpack_require__(222);

var _tooltip2 = _interopRequireDefault(_tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
  displayName: 'item',
  getDefaultProps: function getDefaultProps() {
    return {
      id: '',
      status: '',
      rethink_from: null,
      advisor: '',
      client_type: '',
      type: '',
      created_at: '',
      priority: 1,
      user: {},
      company: {},
      contact: {},
      todos: []
    };
  },
  getInitialState: function getInitialState() {
    return {
      showTooltip: false
    };
  },
  toogleTooltip: function toogleTooltip(e) {
    e.preventDefault();
    this.setState({ showTooltip: !this.state.showTooltip });
  },
  showStatusCase: function showStatusCase() {
    var quotation = this.props.quotation;

    if (quotation.status_cause && quotation.status == 'No efectiva') return quotation.status_cause;
    if (quotation.status_cause && quotation.status == 'No enviada') return quotation.status_cause;
    return '';
  },
  render: function render() {
    var quotation = this.props.quotation;
    var id = quotation.id,
        status = quotation.status,
        rethink_from = quotation.rethink_from,
        advisor = quotation.advisor,
        client_type = quotation.client_type,
        type = quotation.type,
        created_at = quotation.created_at,
        priority = quotation.priority,
        user = quotation.user,
        company = quotation.company,
        contact = quotation.contact,
        todos = quotation.todos;


    return _react2.default.createElement(
      'tr',
      { key: id },
      _react2.default.createElement(
        'td',
        null,
        _react2.default.createElement(
          'a',
          { href: '/quotations/' + id },
          id
        )
      ),
      _react2.default.createElement(
        'td',
        null,
        _react2.default.createElement(
          'span',
          { className: 'label label-' + status.replace(' ', '_') },
          status,
          ' ',
          this.showStatusCase()
        ),
        rethink_from ? _react2.default.createElement(
          'a',
          { className: 'label label-Replanteada', href: '/quotations/' + rethink_from },
          rethink_from
        ) : ""
      ),
      _react2.default.createElement(
        'td',
        null,
        advisor
      ),
      _react2.default.createElement(
        'td',
        null,
        client_type
      ),
      _react2.default.createElement(
        'td',
        null,
        type
      ),
      _react2.default.createElement(
        'td',
        {
          style: { position: 'relative' },
          onMouseOver: this.toogleTooltip,
          onMouseOut: this.toogleTooltip },
        company.name,
        _react2.default.createElement(
          _tooltip2.default,
          { show: this.state.showTooltip },
          _react2.default.createElement(
            'ul',
            { className: 'list-group' },
            company.address ? _react2.default.createElement(
              'li',
              { className: 'list-group-item' },
              company.address
            ) : '',
            company.nit ? _react2.default.createElement(
              'li',
              { className: 'list-group-item' },
              company.nit
            ) : '',
            company.phone ? _react2.default.createElement(
              'li',
              { className: 'list-group-item' },
              company.phone
            ) : ''
          )
        )
      ),
      _react2.default.createElement(
        'td',
        null,
        contact.name + ' ' + contact.lastname
      ),
      _react2.default.createElement(
        'td',
        null,
        created_at,
        ' por ',
        user.name
      ),
      _react2.default.createElement(
        'td',
        null,
        _react2.default.createElement('span', { className: 'center priority priority--' + (priority > 0 ? priority : 1) })
      ),
      _react2.default.createElement(
        'td',
        null,
        todos.length
      ),
      _react2.default.createElement(
        'td',
        null,
        _react2.default.createElement(
          'a',
          { href: '/quotations/' + id + '/pdf/' + id, target: '_new' },
          'PDF'
        ),
        ' \u2022',
        _react2.default.createElement(
          'a',
          { href: '/quotations/' + id + '/pdfbn', target: '_blank' },
          ' PDF BN'
        ),
        ' \u2022',
        _react2.default.createElement(
          'a',
          { href: '/quotations/' + id + '/pdflogos', target: '_blank' },
          ' PDF con logos'
        )
      )
    );
  }
});

/***/ }),
/* 537 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(20);

var _quotations = __webpack_require__(57);

var quo = _interopRequireWildcard(_quotations);

var _filters = __webpack_require__(227);

var _filters2 = _interopRequireDefault(_filters);

var _list_table = __webpack_require__(538);

var _list_table2 = _interopRequireDefault(_list_table);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var quotations = _react2.default.createClass({
  displayName: 'quotations',
  getInitialState: function getInitialState() {
    return {
      query: {
        offset: 0
      }
    };
  },
  componentDidMount: function componentDidMount() {
    this.props.dispatch(quo.fetch());
  },
  loadMore: function loadMore() {
    var offset = this.state.query.offset + 10;
    var query = _extends({}, this.state.query, { offset: offset });

    this.setState({
      query: query
    });

    this.props.dispatch(quo.fetch(query));
  },
  loadLess: function loadLess() {
    var offset = this.state.query.offset - 10;

    if (offset >= 0) {
      var query = _extends({}, this.state.query, { offset: offset });
      this.setState({ query: query });
      this.props.dispatch(quo.fetch(query));
    }
  },
  handleFilters: function handleFilters(query) {
    this.props.dispatch(quo.fetch(query));
    this.setState({ query: query });
  },
  render: function render() {

    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_filters2.default, { onChange: this.handleFilters }),
      _react2.default.createElement(
        'div',
        { className: 'panel quotations-table' },
        _react2.default.createElement(
          'div',
          { className: 'panel-heading' },
          _react2.default.createElement(
            'h5',
            null,
            'Cotizaciones'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'panel-body', style: { minHeight: '600px' } },
          _react2.default.createElement(
            'a',
            { href: '/quotation/create', className: 'btn btn-primary btn-sm' },
            'Nueva cotizaci\xF3n'
          ),
          _react2.default.createElement(
            'span',
            { className: 'pull-right' },
            'BD-COM-03'
          ),
          _react2.default.createElement('hr', null),
          _react2.default.createElement(
            'div',
            { className: 'btn-group', role: 'group' },
            _react2.default.createElement(
              'button',
              {
                className: 'btn btn-default btn-sm',
                onClick: this.loadLess },
              _react2.default.createElement('i', { className: 'fa fa-chevron-left' })
            ),
            _react2.default.createElement(
              'button',
              {
                className: 'btn btn-default btn-sm',
                onClick: this.loadMore },
              _react2.default.createElement('i', { className: 'fa fa-chevron-right' })
            )
          ),
          _react2.default.createElement(_list_table2.default, { quotations: this.props.items }),
          _react2.default.createElement(
            'div',
            { className: 'btn-group', role: 'group' },
            _react2.default.createElement(
              'button',
              {
                className: 'btn btn-default btn-sm',
                onClick: this.loadLess },
              _react2.default.createElement('i', { className: 'fa fa-chevron-left' })
            ),
            _react2.default.createElement(
              'button',
              {
                className: 'btn btn-default btn-sm',
                onClick: this.loadMore },
              _react2.default.createElement('i', { className: 'fa fa-chevron-right' })
            )
          )
        )
      )
    );
  }
});

exports.default = (0, _reactRedux.connect)(function (store) {
  return store.quotations;
})(quotations);

/***/ }),
/* 538 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _item = __webpack_require__(536);

var _item2 = _interopRequireDefault(_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _react2.default.createClass({
  displayName: 'exports',
  getDefaultProps: function getDefaultProps() {
    return {
      quotations: []
    };
  },
  render: function render() {
    var quotationNodes = this.props.quotations.map(function (quotation) {
      return _react2.default.createElement(_item2.default, { key: quotation.id, quotation: quotation });
    });

    return _react2.default.createElement(
      'div',
      { className: 'table-responsive' },
      _react2.default.createElement(
        'table',
        { className: 'table' },
        _react2.default.createElement(
          'thead',
          null,
          _react2.default.createElement(
            'tr',
            { className: 'thead' },
            _react2.default.createElement(
              'th',
              null,
              '#'
            ),
            _react2.default.createElement(
              'th',
              null,
              'Estado'
            ),
            _react2.default.createElement(
              'th',
              null,
              'Asesor'
            ),
            _react2.default.createElement(
              'th',
              null,
              'Cliente'
            ),
            _react2.default.createElement(
              'th',
              null,
              'Tipo'
            ),
            _react2.default.createElement(
              'th',
              null,
              'Empresa'
            ),
            _react2.default.createElement(
              'th',
              null,
              'Contacto'
            ),
            _react2.default.createElement(
              'th',
              null,
              'Creada'
            ),
            _react2.default.createElement(
              'th',
              null,
              'Prioridad'
            ),
            _react2.default.createElement(
              'th',
              null,
              'Tareas'
            ),
            _react2.default.createElement(
              'th',
              null,
              'Opciones'
            )
          )
        ),
        _react2.default.createElement(
          'tbody',
          null,
          quotationNodes
        )
      )
    );
  }
});

/***/ }),
/* 539 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
  displayName: 'item',
  handleEdit: function handleEdit(service, e) {
    if (typeof this.props.onEdit == 'function') {
      this.props.onEdit(service);
    }
  },
  render: function render() {
    var service = this.props.service;

    return _react2.default.createElement(
      'tr',
      { key: service.id },
      _react2.default.createElement(
        'td',
        null,
        service.title
      ),
      _react2.default.createElement(
        'td',
        null,
        service.price_1
      ),
      _react2.default.createElement(
        'td',
        null,
        service.price_2
      ),
      _react2.default.createElement(
        'td',
        null,
        _react2.default.createElement(
          'button',
          { className: 'btn btn-default btn-sm', onClick: this.handleEdit.bind(this, service) },
          'Editar'
        )
      )
    );
  }
});

/***/ }),
/* 540 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _item = __webpack_require__(539);

var _item2 = _interopRequireDefault(_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _react2.default.createClass({
  displayName: 'exports',
  getDefaultProps: function getDefaultProps() {
    return {
      services: []
    };
  },
  handleEdit: function handleEdit(service) {
    this.props.onEdit(service);
  },
  render: function render() {
    var _this = this;

    var serviceNodes = this.props.services.map(function (service) {
      return _react2.default.createElement(_item2.default, {
        key: service.id,
        service: service,
        onEdit: _this.handleEdit
      });
    });

    return _react2.default.createElement(
      'div',
      { className: 'table-responsive' },
      _react2.default.createElement(
        'table',
        { className: 'table' },
        _react2.default.createElement(
          'thead',
          null,
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'th',
              null,
              'T\xEDtulo'
            ),
            _react2.default.createElement(
              'th',
              null,
              'Precio 1'
            ),
            _react2.default.createElement(
              'th',
              null,
              'Precio 2'
            ),
            _react2.default.createElement(
              'th',
              null,
              'Opciones'
            )
          )
        ),
        _react2.default.createElement(
          'tbody',
          null,
          serviceNodes
        )
      )
    );
  }
});

/***/ }),
/* 541 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _asesores = __webpack_require__(486);

var action = _interopRequireWildcard(_asesores);

var _quotations = __webpack_require__(57);

var quoAction = _interopRequireWildcard(_quotations);

var _form_select = __webpack_require__(22);

var _form_select2 = _interopRequireDefault(_form_select);

var _clean_object = __webpack_require__(49);

var _clean_object2 = _interopRequireDefault(_clean_object);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Asesores = _react2.default.createClass({
  displayName: 'Asesores',
  getInitialState: function getInitialState() {
    return {
      showForm: false,
      contact: {},
      form: {
        name: name
      }
    };
  },
  componentDidMount: function componentDidMount() {
    this.props.dispatch(action.fetch());
  },
  handleInputChange: function handleInputChange(event) {
    this.setState({ form: { name: event.target.value } });
  },
  handleSave: function handleSave() {
    console.log('here', this.props);
    this.props.dispatch(action.store(this.state.form));
  },
  toggleShowForm: function toggleShowForm() {
    this.setState({ showForm: !this.state.showForm, form: { name: event.target.value } });
  },
  render: function render() {

    return _react2.default.createElement(
      'div',
      { className: 'panel' },
      _react2.default.createElement(
        'div',
        { className: 'panel-body' },
        _react2.default.createElement(
          'button',
          {
            className: 'btn btn-primary btn-sm',
            onClick: this.toggleShowForm
          },
          'Agregar asesor'
        ),
        this.state.showForm ? _react2.default.createElement(
          'div',
          { className: 'form-group', style: { marginTop: "2rem" } },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-12' },
              _react2.default.createElement('input', _defineProperty({ type: 'text', className: 'form-control', placeholder: 'Nombre', onKeyUp: this.handleInputChange }, 'placeholder', 'Nombre asesor'))
            ),
            _react2.default.createElement('hr', null),
            _react2.default.createElement(
              'div',
              { className: 'col-xs-12', style: { marginTop: "2rem" } },
              _react2.default.createElement(
                'button',
                { className: 'btn btn-default btn-sm pull-left', onClick: this.toggleShowForm },
                'Cancelar'
              ),
              _react2.default.createElement(
                'button',
                { className: 'btn btn-primary btn-sm pull-right', onClick: this.handleSave },
                'Guardar'
              )
            )
          )
        ) : null,
        this.props.asesores.items.length > 0 ? _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement('hr', null),
          _react2.default.createElement(
            'select',
            { className: 'form-control' },
            _react2.default.createElement(
              'option',
              null,
              'Seleccionar asesor'
            ),
            this.props.asesores.items.map(function (asesor) {
              return _react2.default.createElement(
                'option',
                { key: asesor.id, value: asesor.id },
                asesor.name
              );
            })
          )
        ) : null
      )
    );
  }
});

exports.default = Asesores;

/***/ }),
/* 542 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactQuill = __webpack_require__(147);

var _reactQuill2 = _interopRequireDefault(_reactQuill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var QuoComment = _react2.default.createClass({
  displayName: 'QuoComment',
  getDefaultProps: function getDefaultProps() {
    return {
      show: false,
      comment: ''
    };
  },
  getInitialState: function getInitialState() {
    return {
      comment: ''
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    this.setState(nextProps);
  },
  handleClick: function handleClick() {
    this.props.OnSaveComment(this.state.comment);
  },
  handleChange: function handleChange(value) {
    this.setState({ comment: value });
  },
  handleClose: function handleClose() {
    this.props.onClose();
  },
  render: function render() {
    return _react2.default.createElement(
      'div',
      { className: this.props.show ? "panel" : "hidden" },
      _react2.default.createElement(
        'div',
        { className: 'panel-body' },
        _react2.default.createElement(
          'h5',
          null,
          'Comentario'
        ),
        _react2.default.createElement(_reactQuill2.default, {
          value: this.state.comment,
          onChange: this.handleChange
        }),
        _react2.default.createElement('div', { className: 'row' }),
        _react2.default.createElement('p', null),
        _react2.default.createElement(
          'button',
          {
            className: 'btn btn-sm btn-primary',
            onClick: this.handleClick },
          'Guardar'
        ),
        _react2.default.createElement(
          'button',
          {
            className: 'btn btn-sm btn-default pull-right',
            onClick: this.handleClose },
          'Cerrar'
        )
      )
    );
  }
});

exports.default = QuoComment;

/***/ }),
/* 543 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _contacts = __webpack_require__(56);

var action = _interopRequireWildcard(_contacts);

var _quotations = __webpack_require__(57);

var quoAction = _interopRequireWildcard(_quotations);

var _form_create = __webpack_require__(81);

var _form_create2 = _interopRequireDefault(_form_create);

var _form_select = __webpack_require__(22);

var _form_select2 = _interopRequireDefault(_form_select);

var _clean_object = __webpack_require__(49);

var _clean_object2 = _interopRequireDefault(_clean_object);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var QuoContact = _react2.default.createClass({
  displayName: 'QuoContact',
  getInitialState: function getInitialState() {
    return {
      showForm: false,
      contact: {}
    };
  },
  changeContact: function changeContact(e) {
    var id = e.currentTarget.value;
    this.props.changeContact(id);
  },
  editContact: function editContact() {
    this.setState({ contact: this.props.solicitudes.contact });
    this.showForm();
  },
  showForm: function showForm() {
    this.setState({ showForm: !this.state.showForm });
  },
  handleCancelForm: function handleCancelForm() {
    this.setState({ contact: (0, _clean_object2.default)(this.state.contact) });
    this.showForm();
  },
  handleSubmit: function handleSubmit(contact) {
    var _this = this;

    var contactData = _extends({}, contact, { company_id: this.props.solicitudes.company.id });

    if (contactData.id) {
      this.props.dispatch(action.update(contactData)).then(function (res) {
        return _this.props.dispatch(quoAction.updateContact(res.payload));
      }).then(function () {
        _this.setState({ contact: (0, _clean_object2.default)(_this.state.contact) });
        _this.showForm();
      });
    } else {
      this.props.dispatch(action.store(contactData)).then(function () {
        _this.showForm();
      });
    }
  },
  show: function show(field) {
    if (field && field != "") {
      return "";
    }
    return "hidden";
  },
  render: function render() {
    var _props$solicitudes = this.props.solicitudes,
        contact = _props$solicitudes.contact,
        company = _props$solicitudes.company;

    var contactSelect = void 0;

    var contactOptions = this.props.contacts.items.map(function (contact, i) {
      return { value: contact.id, label: contact.name + ' ' + contact.lastname };
    });

    return _react2.default.createElement(
      'div',
      { className: 'panel' },
      _react2.default.createElement(
        'div',
        { className: 'panel-body' },
        _react2.default.createElement(
          'button',
          {
            className: 'btn btn-primary btn-sm',
            onClick: this.showForm
          },
          'Agregar contacto'
        ),
        ' ',
        _react2.default.createElement(
          'button',
          { className: 'btn btn-primary btn-sm', onClick: this.editContact },
          'Editar contacto'
        ),
        _react2.default.createElement('hr', null),
        _react2.default.createElement(
          'div',
          { className: this.state.showForm ? "" : "hidden" },
          _react2.default.createElement(_form_create2.default, {
            size: 'col-md-12',
            btnText: 'Guardar',
            contact: this.state.contact,
            onSubmit: this.handleSubmit,
            onCancel: this.handleCancelForm
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          ' '
        ),
        _react2.default.createElement(
          'b',
          { className: this.show(company.name) },
          company.name,
          _react2.default.createElement('hr', null)
        ),
        _react2.default.createElement(
          'b',
          { className: this.show(contact.name) },
          contact.name,
          ' ',
          contact.lastname,
          _react2.default.createElement('hr', null)
        ),
        _react2.default.createElement(
          'span',
          { className: this.show(contact.email) },
          contact.email,
          _react2.default.createElement('hr', null)
        ),
        _react2.default.createElement(
          'span',
          { className: this.show(contact.phone_1) },
          contact.phone_1,
          _react2.default.createElement('hr', null)
        ),
        _react2.default.createElement(
          'span',
          { className: this.show(contact.phone_2) },
          ' ',
          contact.phone_2,
          _react2.default.createElement('hr', null)
        ),
        _react2.default.createElement(
          'span',
          { className: this.show(contact.mobile_1) },
          contact.mobile_1,
          _react2.default.createElement('hr', null)
        ),
        _react2.default.createElement(
          'span',
          { className: this.show(contact.mobile_2) },
          ' ',
          contact.mobile_2
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group' },
          _react2.default.createElement(_form_select2.default, {
            options: contactOptions,
            'default': 'Cambiar Contacto',
            onSelectChange: this.changeContact,
            value: ''
          })
        )
      )
    );
  }
});

exports.default = QuoContact;

/***/ }),
/* 544 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var QuoEdit = _react2.default.createClass({
  displayName: 'QuoEdit',
  getDefaultProps: function getDefaultProps() {
    return {
      solicitud: {
        id: 0
      }
    };
  },
  getInitialState: function getInitialState() {
    return {
      solicitud: {}
    };
  },
  openComment: function openComment() {
    this.props.onShowComment();
  },
  openMails: function openMails() {
    this.props.onShowMails();
  },
  handleServiceApproval: function handleServiceApproval() {
    var solicitud = this.props.solicitud;
    if (solicitud.service_approval === 0) {
      this.props.onServiceApproval(1);
    } else {
      this.props.onServiceApproval(0);
    }
  },
  render: function render() {
    var solicitud = this.props.solicitud;
    var serviceApprovalText = 'Quitar aprobación de servicio';
    if (solicitud.service_approval === 0) {
      serviceApprovalText = 'Agregar aprobación de servicio';
    }

    return _react2.default.createElement(
      'div',
      { className: 'panel' },
      _react2.default.createElement(
        'div',
        { className: 'panel-body' },
        _react2.default.createElement(
          'ul',
          { className: 'list-inline' },
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              {
                href: '/solicitudes/' + solicitud.id + '/duplicate',
                className: 'btn btn-default btn-sm' },
              'Duplicar'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'button',
              {
                className: 'btn btn-default btn-sm',
                onClick: this.openComment },
              'Editar Comentario'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'button',
              {
                className: 'btn btn-default btn-sm',
                onClick: this.openMails
              },
              'Editar Mail'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              {
                href: '/solicitudes/' + solicitud.id + '/toquotation',
                className: 'btn btn-default btn-sm' },
              'Crear cotizaci\xF3n'
            )
          )
        )
      )
    );
  }
});

exports.default = QuoEdit;

/***/ }),
/* 545 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _form_select = __webpack_require__(22);

var _form_select2 = _interopRequireDefault(_form_select);

var _category_type = __webpack_require__(271);

var _category_type2 = _interopRequireDefault(_category_type);

var _advisors = __webpack_require__(126);

var _advisors2 = _interopRequireDefault(_advisors);

var _type = __webpack_require__(129);

var _type2 = _interopRequireDefault(_type);

var _client_type = __webpack_require__(127);

var _client_type2 = _interopRequireDefault(_client_type);

var _found_us = __webpack_require__(183);

var _found_us2 = _interopRequireDefault(_found_us);

var _products = __webpack_require__(128);

var _products2 = _interopRequireDefault(_products);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var messages = {
  type: 'cambio tipo',
  type_category: 'cambio categoría',
  client_type: 'cambio tipo de cliente',
  found_us: 'cambio como llegó',
  offer: 'cambio ofrecer producto',
  advisor: 'cambio asesor'
};

var quoFilters = _react2.default.createClass({
  displayName: 'quoFilters',

  getDefaultProps: function getDefaultProps() {
    return {
      solicitud: {},
      disabled: false
    };
  },

  getInitialState: function getInitialState() {
    return {
      filters: {}
    };
  },

  handleChange: function handleChange() {
    var field = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var e = arguments[1];

    var val = e.currentTarget.value;
    var filters = _extends({}, this.state.filters, _defineProperty({}, field, val));
    var message = messages[field];
    this.props.onChange(filters, message);
    this.setState({ filters: filters });
  },


  update: function update() {
    var filters = {
      type: 'cambio tipo de cotización',
      type_category: this.refs.type_category.refs.select.value,
      client_type: this.refs.client_type.refs.select.value,
      found_us: this.refs.found_us.refs.select.value,
      offer: this.refs.offer.refs.select.value,
      advisor: this.refs.advisor.refs.select.value
    };

    this.props.onChange(filters);
    this.setState({ filters: filters });
  },

  render: function render() {
    var solicitud = this.props.solicitud;

    return _react2.default.createElement(
      'div',
      { className: 'panel panel-default' },
      _react2.default.createElement(
        'div',
        { className: 'panel-body' },
        _react2.default.createElement(
          'div',
          { className: 'form-group col-sm-4' },
          _react2.default.createElement(_form_select2.default, {
            ref: 'type',
            options: _type2.default,
            'default': 'Seleccionar tipo',
            onSelectChange: this.handleChange.bind(null, 'type'),
            value: solicitud.type,
            disabled: this.props.disabled
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group col-sm-4' },
          _react2.default.createElement(_form_select2.default, {
            ref: 'type_category',
            options: _category_type2.default,
            'default': 'Seleccionar categor\xEDa de tipo',
            onSelectChange: this.handleChange.bind(null, 'type_category'),
            value: solicitud.type_category,
            disabled: this.props.disabled
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group col-sm-4' },
          _react2.default.createElement(_form_select2.default, {
            ref: 'client_type',
            options: _client_type2.default,
            'default': 'Seleccionar tipo de cliente',
            onSelectChange: this.handleChange.bind(null, 'client_type'),
            value: solicitud.client_type,
            disabled: this.props.disabled
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group col-sm-4' },
          _react2.default.createElement(_form_select2.default, {
            ref: 'found_us',
            options: _found_us2.default,
            'default': 'Seleccionar como lleg\xF3',
            onSelectChange: this.handleChange.bind(null, 'found_us'),
            value: solicitud.found_us,
            disabled: this.props.disabled
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group col-sm-4' },
          _react2.default.createElement(_form_select2.default, {
            ref: 'offer',
            options: _products2.default,
            'default': 'Seleccionar ofrecer producto',
            onSelectChange: this.handleChange.bind(null, 'offer'),
            value: solicitud.offer,
            disabled: this.props.disabled
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'form-group col-sm-4' },
          _react2.default.createElement(_form_select2.default, {
            ref: 'advisor',
            options: _advisors2.default,
            'default': 'Seleccionar asesor',
            onSelectChange: this.handleChange.bind(null, 'advisor'),
            value: solicitud.advisor,
            disabled: this.props.disabled
          })
        )
      )
    );
  }
});

exports.default = quoFilters;

/***/ }),
/* 546 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _editor = __webpack_require__(150);

var _editor2 = _interopRequireDefault(_editor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var QuoMails = _react2.default.createClass({
  displayName: 'QuoMails',
  getDefaultProps: function getDefaultProps() {
    return {
      solicitud: {
        mail_message: '',
        mail_recipient_1: '',
        mail_recipient_2: ''
      },
      show: false,
      loading: false
    };
  },
  getInitialState: function getInitialState() {
    return {
      solicitud: {},
      show: false
    };
  },
  handleClose: function handleClose() {
    this.props.onClose();
  },
  handleTextChange: function handleTextChange(text) {
    this.setState({
      solicitud: _extends({}, this.state.solicitud, { mail_message: text })
    });
  },
  handleMail: function handleMail() {
    var _this = this;

    this.setState({ loading: true });
    this.props.onSendMail(this.state.solicitud).then(function () {
      return _this.setState({ loading: false });
    });
  },
  handleChange: function handleChange() {
    var solicitud = _extends({}, this.state.solicitud, {
      mail_recipient_1: this.refs.mail_recipient_1.value,
      mail_recipient_2: this.refs.mail_recipient_2.value
    });

    this.setState({ solicitud: solicitud });
  },
  handleClick: function handleClick() {
    this.props.onSaveMail(this.state.solicitud);
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    this.setState(nextProps);
  },
  render: function render() {
    var solicitud = this.state.solicitud;

    return _react2.default.createElement(
      'div',
      { className: this.state.show ? "panel" : "hidden" },
      _react2.default.createElement(
        'div',
        { className: 'panel-body' },
        _react2.default.createElement(
          'h5',
          null,
          'Email'
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'form-group col-sm-6' },
            _react2.default.createElement('input', {
              className: 'form-control',
              ref: 'mail_recipient_1',
              placeholder: 'Para',
              value: solicitud.mail_recipient_1,
              onChange: this.handleChange
            })
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group col-sm-6' },
            _react2.default.createElement('input', {
              className: 'form-control',
              ref: 'mail_recipient_2',
              placeholder: 'Para',
              value: solicitud.mail_recipient_2,
              onChange: this.handleChange
            })
          )
        ),
        _react2.default.createElement(_editor2.default, {
          value: solicitud.mail_message,
          onChange: this.handleTextChange
        }),
        _react2.default.createElement('div', { className: 'row' }),
        _react2.default.createElement('p', null),
        _react2.default.createElement(
          'button',
          { className: 'btn btn-sm btn-primary mail-save', onClick: this.handleClick },
          'Guardar'
        ),
        _react2.default.createElement('span', { style: { margin: '0 7px' } }),
        _react2.default.createElement(
          'button',
          { className: 'btn btn-sm btn-primary mail-send', onClick: this.handleMail, disabled: this.state.loading },
          this.state.loading ? 'Enviado...' : 'Enviar Mail'
        ),
        _react2.default.createElement(
          'button',
          { className: 'btn btn-sm btn-default pull-right mail-close', onClick: this.handleClose },
          'Cerrar'
        )
      )
    );
  }
});

exports.default = QuoMails;

/***/ }),
/* 547 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var React = __webpack_require__(2);
var Select = __webpack_require__(22);
var reasonsOptions = __webpack_require__(272);

var QuoNoEffective = React.createClass({
  displayName: 'QuoNoEffective',
  getDefaultProps: function getDefaultProps() {
    return {
      show: false
    };
  },
  getInitialState: function getInitialState() {
    return {
      solicitud: {
        status: 'No efectiva',
        status_cause: null,
        status_note: ''
      }
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(props) {
    this.setState(props);
  },
  handleChange: function handleChange() {
    var reason = {
      status: 'No efectiva',
      status_cause: this.refs.cause.refs.select.value,
      status_note: this.refs.note.value
    };

    this.setState({ solicitud: reason });
  },
  handleClose: function handleClose() {
    this.props.onClose();
  },
  handleClick: function handleClick() {
    this.props.onSave(this.state.solicitud);
  },
  render: function render() {
    return React.createElement(
      'div',
      { className: this.props.show ? "panel" : "hidden" },
      React.createElement(
        'div',
        { className: 'panel-body' },
        React.createElement(
          'h5',
          null,
          'No efectiva'
        ),
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement(Select, {
            ref: 'cause',
            options: reasonsOptions,
            'default': 'Seleccionar raz\xF3n',
            onSelectChange: this.handleChange,
            value: this.state.solicitud.status_cause
          })
        ),
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement('textarea', {
            className: 'form-control',
            ref: 'note',
            placeholder: 'Nota',
            onChange: this.handleChange,
            value: this.state.solicitud.status_note ? this.state.solicitud.status_note : '' })
        ),
        React.createElement(
          'button',
          { className: 'btn btn-sm btn-primary', onClick: this.handleClick },
          'Guardar'
        ),
        React.createElement(
          'button',
          { className: 'btn btn-sm btn-default pull-right', onClick: this.handleClose },
          'Cerrar'
        )
      )
    );
  }
});

exports.default = QuoNoEffective;

/***/ }),
/* 548 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var React = __webpack_require__(2);
var reasonsOptions = __webpack_require__(273);
var Select = __webpack_require__(22);

var QuoNoSend = React.createClass({
  displayName: 'QuoNoSend',
  getDefaultProps: function getDefaultProps() {
    return {
      show: false
    };
  },
  getInitialState: function getInitialState() {
    return {
      solicitud: {
        status: 'No enviada',
        status_cause: null,
        status_note: ''
      }
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(props) {
    this.setState(props);
  },
  handleChange: function handleChange() {
    var reason = {
      status: 'No enviada',
      status_cause: this.refs.cause.refs.select.value,
      status_note: this.refs.note.value
    };

    this.setState({ solicitud: reason });
  },
  handleClose: function handleClose() {
    this.props.onClose();
  },
  handleClick: function handleClick() {
    this.props.onSave(this.state.solicitud);
  },
  render: function render() {
    return React.createElement(
      'div',
      { className: this.props.show ? "panel" : "hidden" },
      React.createElement(
        'div',
        { className: 'panel-body' },
        React.createElement(
          'h5',
          null,
          'No enviada'
        ),
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement(Select, {
            ref: 'cause',
            options: reasonsOptions,
            'default': 'Seleccionar raz\xF3n',
            onSelectChange: this.handleChange,
            value: this.state.solicitud.status_cause
          })
        ),
        React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement('textarea', {
            className: 'form-control',
            ref: 'note',
            placeholder: 'Nota',
            onChange: this.handleChange,
            value: this.state.solicitud.status_note ? this.state.solicitud.status_note : '' })
        ),
        React.createElement(
          'button',
          {
            className: 'btn btn-sm btn-primary',
            onClick: this.handleClick },
          'Guardar'
        ),
        React.createElement(
          'button',
          {
            className: 'btn btn-sm btn-default pull-right',
            onClick: this.handleClose },
          'Cancelar'
        )
      )
    );
  }
});

exports.default = QuoNoSend;

/***/ }),
/* 549 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _product = __webpack_require__(226);

var _product2 = _interopRequireDefault(_product);

var _form_create_solicitudes = __webpack_require__(521);

var _form_create_solicitudes2 = _interopRequireDefault(_form_create_solicitudes);

var _products = __webpack_require__(107);

var action = _interopRequireWildcard(_products);

var _activities = __webpack_require__(55);

var activityAction = _interopRequireWildcard(_activities);

var _clean_object = __webpack_require__(49);

var _clean_object2 = _interopRequireDefault(_clean_object);

var _activity = __webpack_require__(110);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var QuoProducts = _react2.default.createClass({
  displayName: 'QuoProducts',

  getDefaultProps: function getDefaultProps() {
    return {
      id: null,
      disabled: false
    };
  },

  getInitialState: function getInitialState() {
    return {
      product: {},
      showForm: false,
      errors: []
    };
  },
  _handleSubmit: function _handleSubmit(product) {
    this.setState({ product: product });

    if (product.id) {
      this.props.dispatch(action.update(product)).then(this.handleStoreReponse);
    } else {
      this.props.dispatch(action.store(product)).then(this.handleStoreReponse);
    }
  },
  handleStoreReponse: function handleStoreReponse(actionRes) {
    var payload = actionRes.payload;


    if (actionRes.type == "PRODUCTS_FAIL") {
      var errors = Object.keys(payload).map(function (key) {
        return payload[key];
      });
      this.setState({ errors: errors });
    } else {

      this.cleanProduct();
    }
  },


  handleDuplicate: function handleDuplicate(id, e) {
    e.preventDefault();
    this.props.dispatch(action.duplicate(id));
  },

  handleEdit: function handleEdit(product) {
    this.setState({
      product: product,
      showForm: true
    });
  },

  handleOrder: function handleOrder(product) {
    var order = true;

    if (product.ordered && product.ordered == true || product.ordered == 1) {
      order = false;
    }

    var product = _extends({}, product, { ordered: order });
    this.setState({ product: product });

    this.props.dispatch(action.update(product)).then(this.handleStoreReponse);
  },

  handleDelete: function handleDelete(id, e) {
    e.preventDefault();
    this.props.dispatch(action.remove(id));
  },

  showForm: function showForm(e) {
    var show = !this.state.showForm;
    if (show) this.cleanProduct();
    this.setState({ showForm: show });
  },

  cleanProduct: function cleanProduct() {
    this.setState({
      product: (0, _clean_object2.default)(this.state.product),
      errors: []
    });
  },
  dragStart: function dragStart(e) {
    this.dragged = e.currentTarget;
    this.startY = e.clientY;
  },
  dragOver: function dragOver(e) {
    e.preventDefault();
    e.currentTarget.style.opacity = '.2';
    this.over = e.currentTarget;
    this.direction = '';

    if (this.startY > e.clientY) {
      this.direction = 'up';
    } else {
      this.direction = 'down';
    }
  },
  dragLeave: function dragLeave(e) {
    e.currentTarget.style.opacity = '1';
  },
  dragEnd: function dragEnd(e) {
    var _this = this;

    this.dragged.style.display = 'table-row';
    this.over.style.opacity = '1';
    var toPosition = parseInt(this.over.dataset.position);
    var id = this.dragged.dataset.id;

    var products = this.props.products.items.map(function (product, i) {
      var position = i;
      if (id == product.id) {
        return _extends({}, product, { position: toPosition });
      }

      position = _this.getPosition(position, toPosition);

      return _extends({}, product, { position: position });
    }).sort(this.sortByPosition);

    products.forEach(function (product) {
      return _this.props.dispatch(action.update(product));
    });
  },
  getPosition: function getPosition(position, toPosition) {
    if (this.direction == 'down') {
      position = toPosition >= position ? position - 1 : position;
    } else {
      position = toPosition <= position ? position + 1 : position;
    }

    return position;
  },
  sortByPosition: function sortByPosition(left, right) {
    var a = left.position;
    var b = right.position;
    if (a > b) return 1;
    if (a < b) return -1;
  },


  render: function render() {
    var _this2 = this;

    var products = this.props.products.items;
    var productNodes = products.sort(this.sortByPosition).map(function (product, i) {
      return _react2.default.createElement(_product2.default, {
        product: product,
        index: i,
        key: product.id,
        onEdit: _this2.handleEdit,
        onDuplicate: _this2.handleDuplicate,
        onOrder: _this2.handleOrder,
        onDelete: _this2.handleDelete,
        disabled: _this2.props.disabled,
        onDragEnd: _this2.dragEnd,
        onDragStart: _this2.dragStart,
        onDragOver: _this2.dragOver,
        onDragLeave: _this2.dragLeave
      });
    });

    var showTable = false;

    if (products.length > 0) {
      showTable = true;
    }

    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { className: this.state.showForm ? "panel panel-default" : "hidden" },
        _react2.default.createElement(
          'div',
          { className: 'panel-body' },
          _react2.default.createElement(_form_create_solicitudes2.default, {
            onSubmit: this._handleSubmit,
            product: this.state.product,
            solicitudId: this.props.solicitudId,
            onClose: this.showForm,
            errors: this.state.errors
          })
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'panel panel-default' },
        _react2.default.createElement(
          'div',
          { className: 'panel-heading' },
          _react2.default.createElement(
            'h5',
            null,
            'Productos'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'panel-body' },
          _react2.default.createElement(
            'button',
            {
              className: 'btn btn-primary btn-sm',
              onClick: this.showForm,
              disabled: this.props.disabled
            },
            'Agregar producto'
          ),
          _react2.default.createElement(
            'div',
            { className: 'table-responsive' },
            _react2.default.createElement('hr', null),
            _react2.default.createElement(
              'table',
              { className: 'table table-striped' },
              _react2.default.createElement(
                'thead',
                null,
                _react2.default.createElement(
                  'tr',
                  null,
                  _react2.default.createElement(
                    'th',
                    null,
                    'Producto'
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    'Tiempo'
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    'Cantidad'
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    'Precio'
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    'Total'
                  ),
                  _react2.default.createElement(
                    'th',
                    null,
                    'Opciones'
                  )
                )
              ),
              _react2.default.createElement(
                'tbody',
                null,
                productNodes
              )
            )
          )
        )
      )
    );
  }
});

exports.default = QuoProducts;

/***/ }),
/* 550 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(20);

var _form_create = __webpack_require__(154);

var _form_create2 = _interopRequireDefault(_form_create);

var _solicitudes = __webpack_require__(92);

var quoAction = _interopRequireWildcard(_solicitudes);

var _services = __webpack_require__(91);

var action = _interopRequireWildcard(_services);

var _activities = __webpack_require__(55);

var acitivityAction = _interopRequireWildcard(_activities);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var quoServices = _react2.default.createClass({
  displayName: 'quoServices',
  getInitialState: function getInitialState() {
    return {
      disableAdd: true,
      serviceId: null,
      solicitudId: null,
      optionSelected: '',
      showForm: false
    };
  },
  store: function store(id) {
    var _this = this;

    var service = { service_id: id };
    var solicitudId = this.props.solicitudes.solicitud.id;
    this.props.dispatch(quoAction.storeService(solicitudId, service)).then(function () {
      return _this.props.setActivity('agrego servicio');
    }).then(function () {
      return _this.props.dispatch(action.cleanItems());
    });
  },
  handleDelete: function handleDelete(id) {
    var solicitudId = this.props.solicitudes.solicitud.id;
    this.props.dispatch(quoAction.removeService(id, solicitudId));
  },
  handleEdit: function handleEdit(service) {
    var _this2 = this;

    this.props.dispatch(action.setService(service)).then(function (res) {
      return _this2.setState({ showForm: true });
    });
  },
  updateService: function updateService(service) {
    var _this3 = this;

    this.props.dispatch(action.update(service)).then(function (res) {
      _this3.props.dispatch(quoAction.updateService(res.payload));
    });
  },
  fetch: function fetch() {
    var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    this.props.dispatch(action.fetch(query));
  },
  search: function search(e) {
    var val = e.currentTarget.value;
    this.setState({ query: val });
    this.fetch({ query: val });
  },
  handleCancel: function handleCancel() {
    var _this4 = this;

    this.props.dispatch(action.cleanItem()).then(function (res) {
      return _this4.setState({ showForm: false });
    });
  },
  render: function render() {
    var _this5 = this;

    var options = this.props.services.items.map(function (opt) {
      return { value: opt.id, label: opt.title };
    });

    var serviceNodes = this.props.solicitudes.services.map(function (service) {
      return _react2.default.createElement(
        'tr',
        { key: service.id, className: 'solicitud-service' },
        _react2.default.createElement(
          'td',
          null,
          service.title
        ),
        _react2.default.createElement(
          'td',
          null,
          _react2.default.createElement(
            'button',
            {
              className: 'btn btn-default btn-sm',
              onClick: _this5.handleEdit.bind(null, service)
            },
            'Editar'
          ),
          _react2.default.createElement(
            'button',
            {
              className: 'btn btn-default btn-sm',
              onClick: _this5.handleDelete.bind(null, service.id),
              disabled: _this5.props.disabled ? true : false
            },
            'Eliminar'
          )
        )
      );
    });

    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { className: this.state.showForm ? "panel" : "hide" },
        _react2.default.createElement(
          'div',
          { className: 'panel-body' },
          _react2.default.createElement(_form_create2.default, {
            service: this.props.services.service,
            errors: [],
            onSubmit: this.updateService,
            onCancel: this.handleCancel
          })
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'panel' },
        _react2.default.createElement(
          'div',
          { className: 'panel-heading' },
          _react2.default.createElement(
            'h5',
            null,
            'Servicios'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'panel-body' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'form-group col-sm-12' },
              _react2.default.createElement('input', {
                type: 'text',
                className: 'form-control',
                placeholder: 'Buscar',
                onChange: this.search
              }),
              _react2.default.createElement(
                'ul',
                { className: 'list-group' },
                this.props.services.items.map(function (service, i) {
                  return _react2.default.createElement(
                    'li',
                    { className: 'list-group-item', key: i },
                    service.title,
                    ' ',
                    _react2.default.createElement(
                      'button',
                      { className: 'btn btn-primary btn-sm', onClick: _this5.store.bind(null, service.id) },
                      ' Agregar Servicio '
                    )
                  );
                })
              ),
              _react2.default.createElement('br', null)
            ),
            _react2.default.createElement('hr', null),
            _react2.default.createElement(
              'div',
              { className: 'table-responsive col-sm-12' },
              _react2.default.createElement(
                'table',
                { className: 'table table-striped' },
                _react2.default.createElement(
                  'thead',
                  null,
                  _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                      'th',
                      null,
                      'Servicio'
                    ),
                    _react2.default.createElement(
                      'th',
                      null,
                      'Opciones'
                    )
                  )
                ),
                _react2.default.createElement(
                  'tbody',
                  null,
                  serviceNodes
                )
              )
            )
          )
        )
      )
    );
  }
});

exports.default = quoServices;

/***/ }),
/* 551 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _solicitudes = __webpack_require__(92);

var action = _interopRequireWildcard(_solicitudes);

var _activity = __webpack_require__(110);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var QuoStatus = _react2.default.createClass({
  displayName: 'QuoStatus',
  getDefaultProps: function getDefaultProps() {
    return {
      disabled: false
    };
  },
  getInitialState: function getInitialState() {
    return {
      sending: false
    };
  },
  handleClick: function handleClick(status, e) {
    e.preventDefault();
    var message = 'Cambio estado a ' + status;

    switch (status) {
      case 'Replanteada':
        window.location = '/solicitudes/' + this.props.solicitud.id + '/rethink';
        break;
      case 'No enviada':
        this.props.handleOpenNoSend(message);
        break;
      case 'No efectiva':
        this.props.handleOpenNoEffective(message);
        break;
      default:
        this.props.onStatusChange({ status: status }, message);
    }
  },
  handleSend: function handleSend() {
    var _this = this;

    var id = this.props.solicitud.id;
    var message = 'Cambio estado a enviada';
    this.setState({ sending: true });

    this.props.dispatch(action.sendMail(id)).then(function (actionRes) {
      _this.setState({ sending: false });
      if (actionRes.type == 'SOLICITUDES_FAIL') {
        console.error('quo fail', actionRes);
      } else {
        return _this.props.onStatusChange('Enviada', message);
      }
    });
  },
  render: function render() {
    var sending = this.state.sending ? "disabled" : "";
    var messageSend = this.state.sending ? "Enviando..." : "Enviar";

    return _react2.default.createElement(
      'div',
      { className: 'panel' },
      _react2.default.createElement(
        'div',
        { className: 'panel-body' },
        _react2.default.createElement(
          'ul',
          { className: 'list-inline' },
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'button',
              {
                className: 'btn btn-danger btn-sm',
                onClick: this.handleClick.bind(this, 'No enviada'),
                disabled: this.props.disabled ? true : false
              },
              'No enviada'
            )
          ),
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              'a',
              {
                className: 'btn btn-default btn-sm',
                disabled: this.props.disabled ? true : false,
                onClick: this.handleClick.bind(this, 'Nula')
              },
              'Anular'
            )
          )
        )
      )
    );
  }
});

exports.default = QuoStatus;

/***/ }),
/* 552 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var React = __webpack_require__(2);

var QuoTimes = React.createClass({
  displayName: 'QuoTimes',
  render: function render() {
    var created_sent_diff = void 0;

    if (this.props.solicitud.created_sent_diff) {
      created_sent_diff = this.props.solicitud.created_sent_diff + ' minutos';
    }

    return React.createElement(
      'div',
      { className: 'panel' },
      React.createElement(
        'div',
        { className: 'panel-heading' },
        React.createElement(
          'h5',
          null,
          'Tiempos'
        )
      ),
      React.createElement(
        'div',
        { className: 'panel-body' },
        React.createElement(
          'b',
          null,
          'Creada:'
        ),
        ' ',
        this.props.solicitud.created_at,
        React.createElement('hr', null),
        React.createElement(
          'b',
          null,
          'Enviada:'
        ),
        ' ',
        this.props.solicitud.sent_at,
        React.createElement('hr', null),
        React.createElement(
          'b',
          null,
          'Tiempo:'
        ),
        ' ',
        created_sent_diff
      )
    );
  }
});

exports.default = QuoTimes;

/***/ }),
/* 553 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _update_item = __webpack_require__(224);

var _update_item2 = _interopRequireDefault(_update_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var quoTracking = _react2.default.createClass({
  displayName: 'quoTracking',

  getDefaultProps: function getDefaultProps() {
    return {
      tracking: {}
    };
  },

  render: function render() {
    var tracking = this.props.tracking;
    var showTable = false;
    var contact = void 0;
    var by = void 0;

    if (tracking.contact) {
      contact = tracking.contact.name + ' ' + tracking.contact.lastname;
    }

    if (tracking.user) {
      by = tracking.user.name + ' ' + tracking.user.lastname;
    }

    return _react2.default.createElement(
      'li',
      { className: 'list-item' },
      _react2.default.createElement(
        'p',
        null,
        _react2.default.createElement(
          'b',
          null,
          'Contacto:'
        ),
        ' ',
        contact
      ),
      _react2.default.createElement(
        'b',
        null,
        'Reporte:'
      ),
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-md-12' },
          _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: tracking.report } })
        )
      ),
      _react2.default.createElement(
        'b',
        null,
        'Por: '
      ),
      ' ',
      by,
      ' ',
      _react2.default.createElement(
        'i',
        null,
        tracking.register_date + ' ' + tracking.register_time
      ),
      _react2.default.createElement('hr', null)
    );
  }
});

exports.default = quoTracking;

/***/ }),
/* 554 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _trackings = __webpack_require__(108);

var action = _interopRequireWildcard(_trackings);

var _tracking = __webpack_require__(553);

var _tracking2 = _interopRequireDefault(_tracking);

var _form_create = __webpack_require__(228);

var _form_create2 = _interopRequireDefault(_form_create);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var quoTrackings = _react2.default.createClass({
  displayName: 'quoTrackings',
  getInitialState: function getInitialState() {
    return {
      tracking: {
        todos: []
      }
    };
  },
  handleSubmit: function handleSubmit(tracking) {
    var model = _extends({}, tracking, { solicitudes_id: this.props.solicitudId });
    this.props.dispatch(action.store(model)).then(this.changeStatus);
  },
  changeStatus: function changeStatus(res) {
    if (res.type == "TRACKINGS_STORE" && this.props.solicitudes.solicitud.status == 'Enviada') {

      this.props.onStatusChange({ status: 'Seguimiento', message: 'cambio estado a seguimiento' });
    }
  },
  render: function render() {
    var trackingNodes = this.props.trackings.items.map(function (tracking) {
      return _react2.default.createElement(_tracking2.default, { key: tracking.id, tracking: tracking });
    });

    return _react2.default.createElement(
      'div',
      { className: 'panel' },
      _react2.default.createElement(
        'div',
        { className: 'panel-heading' },
        _react2.default.createElement(
          'h5',
          null,
          'Seguimiento'
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'panel-body' },
        _react2.default.createElement(_form_create2.default, { contacts: this.props.contacts.items, onSubmit: this.handleSubmit }),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'ul',
          { className: 'list-group col-md-12' },
          trackingNodes
        )
      )
    );
  }
});

exports.default = quoTrackings;

/***/ }),
/* 555 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _tooltip = __webpack_require__(222);

var _tooltip2 = _interopRequireDefault(_tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
  displayName: 'item',
  getDefaultProps: function getDefaultProps() {
    return {
      id: '',
      status: '',
      rethink_from: null,
      advisor: '',
      client_type: '',
      type: '',
      created_at: '',
      priority: 1,
      user: {},
      company: {},
      contact: {},
      found_us: ''
    };
  },
  getInitialState: function getInitialState() {
    return {
      showTooltip: false
    };
  },
  toogleTooltip: function toogleTooltip(e) {
    e.preventDefault();
    this.setState({ showTooltip: !this.state.showTooltip });
  },
  showStatusCase: function showStatusCase() {
    var solicitud = this.props.solicitud;

    if (solicitud.status_cause && solicitud.status == 'No efectiva') return solicitud.status_cause;
    if (solicitud.status_cause && solicitud.status == 'No enviada') return solicitud.status_cause;
    return '';
  },
  render: function render() {
    var solicitud = this.props.solicitud;
    var id = solicitud.id,
        status = solicitud.status,
        rethink_from = solicitud.rethink_from,
        advisor = solicitud.advisor,
        client_type = solicitud.client_type,
        type = solicitud.type,
        created_at = solicitud.created_at,
        priority = solicitud.priority,
        user = solicitud.user,
        company = solicitud.company,
        contact = solicitud.contact,
        found_us = solicitud.found_us;


    return _react2.default.createElement(
      'tr',
      { key: id },
      _react2.default.createElement(
        'td',
        null,
        _react2.default.createElement(
          'a',
          { href: '/solicitudes/' + id },
          id
        )
      ),
      _react2.default.createElement(
        'td',
        null,
        _react2.default.createElement(
          'span',
          { className: 'label label-' + status.replace(' ', '_') },
          status,
          ' ',
          this.showStatusCase()
        ),
        rethink_from ? _react2.default.createElement(
          'a',
          { className: 'label label-Replanteada', href: '/quotations/' + rethink_from },
          rethink_from
        ) : ""
      ),
      _react2.default.createElement(
        'td',
        null,
        advisor
      ),
      _react2.default.createElement(
        'td',
        null,
        client_type
      ),
      _react2.default.createElement(
        'td',
        null,
        type
      ),
      _react2.default.createElement(
        'td',
        {
          style: { position: 'relative' },
          onMouseOver: this.toogleTooltip,
          onMouseOut: this.toogleTooltip },
        company.name,
        _react2.default.createElement(
          _tooltip2.default,
          { show: this.state.showTooltip },
          _react2.default.createElement(
            'ul',
            { className: 'list-group' },
            company.address ? _react2.default.createElement(
              'li',
              { className: 'list-group-item' },
              company.address
            ) : '',
            company.nit ? _react2.default.createElement(
              'li',
              { className: 'list-group-item' },
              company.nit
            ) : '',
            company.phone ? _react2.default.createElement(
              'li',
              { className: 'list-group-item' },
              company.phone
            ) : ''
          )
        )
      ),
      _react2.default.createElement(
        'td',
        null,
        '' + (found_us ? found_us : '')
      ),
      _react2.default.createElement(
        'td',
        null,
        created_at,
        ' por ',
        user.name
      ),
      _react2.default.createElement(
        'td',
        null,
        _react2.default.createElement('span', { className: 'center priority priority--' + (priority > 0 ? priority : 1) })
      ),
      _react2.default.createElement('td', null),
      _react2.default.createElement('td', null)
    );
  }
});

/***/ }),
/* 556 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(20);

var _solicitudes = __webpack_require__(92);

var actions = _interopRequireWildcard(_solicitudes);

var _filters = __webpack_require__(227);

var _filters2 = _interopRequireDefault(_filters);

var _list_table_solicitudes = __webpack_require__(557);

var _list_table_solicitudes2 = _interopRequireDefault(_list_table_solicitudes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Solicitudes = _react2.default.createClass({
  displayName: 'Solicitudes',
  getInitialState: function getInitialState() {
    return {
      query: {
        offset: 0
      }
    };
  },
  componentDidMount: function componentDidMount() {
    this.props.dispatch(actions.fetch());
    // console.log(this.props)
  },
  loadMore: function loadMore() {
    var offset = this.state.query.offset + 10;
    var query = _extends({}, this.state.query, { offset: offset });

    this.setState({
      query: query
    });

    this.props.dispatch(actions.fetch(query));
  },
  componentDidUpdate: function componentDidUpdate() {
    console.log(this.props);
  },
  loadLess: function loadLess() {
    var offset = this.state.query.offset - 10;

    if (offset >= 0) {
      var query = _extends({}, this.state.query, { offset: offset });
      this.setState({ query: query });
      this.props.dispatch(actions.fetch(query));
    }
  },
  handleFilters: function handleFilters(query) {
    this.props.dispatch(actions.fetch(query));
    this.setState({ query: query });
  },
  render: function render() {

    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'div',
        { className: 'panel quotations-table' },
        _react2.default.createElement(
          'div',
          { className: 'panel-heading' },
          _react2.default.createElement(
            'h5',
            null,
            'Solicitudes'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'panel-body', style: { minHeight: '600px' } },
          _react2.default.createElement(
            'a',
            { href: '/solicitudes/create', className: 'btn btn-primary btn-sm' },
            'Nueva solicitud'
          ),
          _react2.default.createElement(
            'span',
            { className: 'pull-right' },
            'BD-COM-03'
          ),
          _react2.default.createElement('hr', null),
          _react2.default.createElement(
            'div',
            { className: 'btn-group', role: 'group' },
            _react2.default.createElement(
              'button',
              {
                className: 'btn btn-default btn-sm',
                onClick: this.loadLess },
              _react2.default.createElement('i', { className: 'fa fa-chevron-left' })
            ),
            _react2.default.createElement(
              'button',
              {
                className: 'btn btn-default btn-sm',
                onClick: this.loadMore },
              _react2.default.createElement('i', { className: 'fa fa-chevron-right' })
            )
          ),
          _react2.default.createElement(_list_table_solicitudes2.default, { solicitudes: this.props.items }),
          _react2.default.createElement(
            'div',
            { className: 'btn-group', role: 'group' },
            _react2.default.createElement(
              'button',
              {
                className: 'btn btn-default btn-sm',
                onClick: this.loadLess },
              _react2.default.createElement('i', { className: 'fa fa-chevron-left' })
            ),
            _react2.default.createElement(
              'button',
              {
                className: 'btn btn-default btn-sm',
                onClick: this.loadMore },
              _react2.default.createElement('i', { className: 'fa fa-chevron-right' })
            )
          )
        )
      )
    );
  }
});

exports.default = (0, _reactRedux.connect)(function (store) {
  return store.solicitudes;
})(Solicitudes);

/***/ }),
/* 557 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _item = __webpack_require__(555);

var _item2 = _interopRequireDefault(_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _react2.default.createClass({
  displayName: 'exports',
  getDefaultProps: function getDefaultProps() {
    return {
      solicitudes: []
    };
  },
  render: function render() {
    var solicitudNodes = this.props.solicitudes.map(function (solicitud) {
      return _react2.default.createElement(_item2.default, { key: solicitud.id, solicitud: solicitud });
    });

    return _react2.default.createElement(
      'div',
      { className: 'table-responsive' },
      _react2.default.createElement(
        'table',
        { className: 'table' },
        _react2.default.createElement(
          'thead',
          null,
          _react2.default.createElement(
            'tr',
            { className: 'thead' },
            _react2.default.createElement(
              'th',
              null,
              '#'
            ),
            _react2.default.createElement(
              'th',
              null,
              'Estado'
            ),
            _react2.default.createElement(
              'th',
              null,
              'Asesor'
            ),
            _react2.default.createElement(
              'th',
              null,
              'Cliente'
            ),
            _react2.default.createElement(
              'th',
              null,
              'Tipo'
            ),
            _react2.default.createElement(
              'th',
              null,
              'Empresa'
            ),
            _react2.default.createElement(
              'th',
              null,
              'Ubicaci\xF3n'
            ),
            _react2.default.createElement(
              'th',
              null,
              'Creada'
            ),
            _react2.default.createElement(
              'th',
              null,
              'Prioridad'
            ),
            _react2.default.createElement(
              'th',
              null,
              'Asesor Asignado'
            ),
            _react2.default.createElement(
              'th',
              null,
              'Pendiente por'
            )
          )
        ),
        _react2.default.createElement(
          'tbody',
          null,
          solicitudNodes
        )
      )
    );
  }
});

/***/ }),
/* 558 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(19);

var _axios2 = _interopRequireDefault(_axios);

var _moment = __webpack_require__(1);

var _moment2 = _interopRequireDefault(_moment);

var _datetime = __webpack_require__(109);

var _datetime2 = _interopRequireDefault(_datetime);

var _editor = __webpack_require__(150);

var _editor2 = _interopRequireDefault(_editor);

var _form_select = __webpack_require__(22);

var _form_select2 = _interopRequireDefault(_form_select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var todoForm = _react2.default.createClass({
  displayName: 'todoForm',
  getInitialState: function getInitialState() {
    return {
      todo: {
        expires_date: '',
        expires_time: '',
        company_id: null,
        title: '',
        description: ''
      },
      company: {},
      companies: [],
      users: []
    };
  },
  componentDidMount: function componentDidMount() {
    var _this = this;

    _axios2.default.get('/api/v1/users').then(function (res) {
      return _this.setState({ users: res.data });
    });
  },


  /**
   * Divide datetime and set it.
   */
  handleDateTime: function handleDateTime(dateObj, dateStr) {
    var datetime = (0, _moment2.default)(dateObj).format('YYYY/MM/DD HH:mm:ss').split(' ');
    var date = datetime[0];
    var time = datetime[1];
    this.handleChange({ expires_date: date, expires_time: time });
  },
  handleContact: function handleContact(id) {
    this.handleChange({
      user_id: parseInt(id)
    });
  },
  handleChange: function handleChange(data) {
    this.setState({ todo: _extends({}, this.state.todo, data) });
  },
  handleSubmit: function handleSubmit(e) {
    e.preventDefault();
    var trackingId = {};

    if (this.props.trackingId) {
      trackingId = { tracking_id: this.props.trackingId };
    }

    this.props.onSubmit(_extends({}, this.state.todo, trackingId));
    this.clean();
  },
  clean: function clean() {
    var todo = _extends({}, this.state.todo, { title: '', description: '' });
    this.setState({ todo: todo });
  },
  searchQuo: function searchQuo(e) {
    var _this2 = this;

    var val = e.currentTarget.value;

    _axios2.default.get('/api/v1/companies/', { params: { 'query': val } }).then(function (res) {
      return _this2.setState(_extends({}, _this2.state, { companies: res.data }));
    });
  },
  setCompany: function setCompany(q, e) {
    if (e) e.preventDefault();

    this.setState({
      todo: _extends({}, this.state.todo, { company_id: q.id }),
      companies: [],
      company: q
    });
  },
  render: function render() {
    var _this3 = this;

    var todo = this.state.todo;
    var contactSelect = void 0;
    var contactValue = void 0;

    var userOptions = this.state.users.map(function (user) {
      return { value: user.id, label: user.name + " " + user.lastname };
    });

    return _react2.default.createElement(
      'form',
      { className: 'form', onSubmit: function onSubmit(e) {
          return e.preventDefault();
        } },
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'div',
        { className: 'form-group col-md-6' },
        _react2.default.createElement(
          'label',
          null,
          'Fecha vencimiento'
        ),
        _react2.default.createElement(_datetime2.default, {
          styles: 'form-control',
          altFormat: 'Y-d-m H:i:s',
          onChange: this.handleDateTime,
          enableTime: true
        })
      ),
      _react2.default.createElement(
        'div',
        { className: 'form-group col-md-6' },
        _react2.default.createElement(
          'label',
          null,
          'Usuario'
        ),
        _react2.default.createElement(_form_select2.default, {
          value: todo.user_id,
          options: userOptions,
          onSelectChange: function onSelectChange(e) {
            return _this3.handleChange({ user_id: e.currentTarget.value });
          }
        })
      ),
      _react2.default.createElement(
        'div',
        { className: 'form-group col-md-12' },
        _react2.default.createElement(
          'label',
          null,
          'Cliente'
        ),
        _react2.default.createElement('input', {
          type: 'text',
          className: 'form-control',
          placeholder: 'Cliente',
          value: this.state.company.name,
          onChange: this.searchQuo
        }),
        _react2.default.createElement(
          'ul',
          { className: 'list-group' },
          this.state.companies.map(function (company) {
            return _react2.default.createElement(
              'li',
              { className: 'list-group-item', key: company.id },
              _react2.default.createElement(
                'a',
                { href: '#', onClick: _this3.setCompany.bind(null, company) },
                company.name
              )
            );
          })
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'form-group col-md-12' },
        _react2.default.createElement(
          'label',
          null,
          'T\xEDtulo'
        ),
        _react2.default.createElement('input', {
          type: 'text',
          className: 'form-control',
          onChange: function onChange(e) {
            return _this3.handleChange({ title: e.currentTarget.value });
          },
          value: todo.title
        })
      ),
      _react2.default.createElement(
        'div',
        { className: 'form-group col-md-12' },
        _react2.default.createElement(
          'label',
          null,
          'Descripci\xF3n'
        ),
        _react2.default.createElement('textarea', {
          className: 'form-control',
          onChange: function onChange(e) {
            return _this3.handleChange({ description: e.currentTarget.value });
          },
          value: todo.description
        })
      ),
      _react2.default.createElement(
        'div',
        { className: 'form-group col-md-12' },
        _react2.default.createElement(
          'button',
          {
            className: 'btn btn-primary btn-sm',
            onClick: this.handleSubmit },
          'Guardar'
        )
      )
    );
  }
});

exports.default = todoForm;

/***/ }),
/* 559 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _timeago = __webpack_require__(221);

var _timeago2 = _interopRequireDefault(_timeago);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TodoItem = _react2.default.createClass({
  displayName: 'TodoItem',
  getDefaultProps: function getDefaultProps() {
    return {
      title: '',
      description: '',
      created_at: '',
      expires_time: '',
      assigned: {
        name: '',
        lastname: ''
      },
      user: {
        name: '',
        lastname: ''
      },
      tracking: ''
    };
  },
  linkQuotation: function linkQuotation(todo) {
    if (todo.quotation_id) {
      return _react2.default.createElement(
        'a',
        { href: '/quotations/' + todo.quotation_id },
        todo.quotation_id
      );
    } else if (todo.tracking && todo.tracking.quotation_id) {
      return _react2.default.createElement(
        'a',
        { href: '/quotations/' + todo.tracking.quotation_id },
        todo.tracking.quotation_id
      );
    }
  },
  render: function render() {
    var _this = this;

    var todo = this.props.todo;
    var title = todo.title,
        description = todo.description,
        created_at = todo.created_at,
        expires_date = todo.expires_date,
        expires_time = todo.expires_time,
        assigned = todo.assigned,
        user = todo.user,
        tracking = todo.tracking,
        company = todo.company;


    return _react2.default.createElement(
      'tr',
      null,
      _react2.default.createElement(
        'td',
        null,
        title
      ),
      _react2.default.createElement(
        'td',
        null,
        description
      ),
      _react2.default.createElement(
        'td',
        null,
        _react2.default.createElement(_timeago2.default, { date: created_at })
      ),
      _react2.default.createElement(
        'td',
        null,
        _react2.default.createElement(_timeago2.default, { date: expires_date + ' ' + expires_time })
      ),
      _react2.default.createElement(
        'td',
        null,
        assigned ? assigned.name + ' ' + assigned.lastname : ""
      ),
      _react2.default.createElement(
        'td',
        null,
        user ? user.name : '',
        ' ',
        user ? user.lastname : ''
      ),
      _react2.default.createElement('td', null),
      _react2.default.createElement(
        'td',
        null,
        this.linkQuotation(todo)
      ),
      _react2.default.createElement(
        'td',
        null,
        _react2.default.createElement('input', {
          type: 'checkbox',
          value: todo.completed ? todo.completed : false,
          onChange: function onChange(e) {
            return _this.props.onCompleted(todo);
          },
          checked: todo.completed == 1 ? true : false
        })
      )
    );
  }
});

exports.default = TodoItem;

/***/ }),
/* 560 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _item = __webpack_require__(559);

var _item2 = _interopRequireDefault(_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
  displayName: 'list',
  getInitialState: function getInitialState() {
    return {
      todos: [],
      completed: false
    };
  },
  toggleCompleted: function toggleCompleted() {
    this.setState({ completed: !this.state.completed });
  },
  render: function render() {
    var _this = this;

    var todoNodes = this.props.todos.map(function (todo, i) {

      if (todo.completed == _this.state.completed) {
        return _react2.default.createElement(_item2.default, { key: i, todo: todo, onCompleted: _this.props.onCompleted });
      }

      if (todo.completed == null && _this.state.completed == false) {
        return _react2.default.createElement(_item2.default, { key: i, todo: todo, onCompleted: _this.props.onCompleted });
      }
    });

    return _react2.default.createElement(
      'div',
      { className: 'col-md-12' },
      _react2.default.createElement('hr', null),
      _react2.default.createElement(
        'div',
        { className: 'btn-group' },
        _react2.default.createElement(
          'button',
          {
            className: 'btn btn-default btn-xs',
            disabled: !this.state.completed,
            onClick: this.toggleCompleted },
          'Sin completar'
        ),
        _react2.default.createElement(
          'button',
          {
            className: 'btn btn-default btn-xs completed',
            disabled: this.state.completed,
            onClick: this.toggleCompleted },
          'Completadas'
        )
      ),
      _react2.default.createElement('hr', null),
      _react2.default.createElement(
        'div',
        { className: 'table-responsive' },
        _react2.default.createElement(
          'table',
          { className: 'table' },
          _react2.default.createElement(
            'thead',
            null,
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                null,
                'T\xEDtulo'
              ),
              _react2.default.createElement(
                'th',
                null,
                'Descripci\xF3n'
              ),
              _react2.default.createElement(
                'th',
                null,
                'Creada'
              ),
              _react2.default.createElement(
                'th',
                null,
                'Vencimiento'
              ),
              _react2.default.createElement(
                'th',
                null,
                'De'
              ),
              _react2.default.createElement(
                'th',
                null,
                'Para'
              ),
              _react2.default.createElement(
                'th',
                null,
                'Cliente'
              ),
              _react2.default.createElement(
                'th',
                null,
                'Cotizaci\xF3n'
              ),
              _react2.default.createElement(
                'th',
                null,
                'Completada'
              )
            )
          ),
          _react2.default.createElement(
            'tbody',
            null,
            todoNodes
          )
        )
      )
    );
  }
});

/***/ }),
/* 561 */,
/* 562 */,
/* 563 */,
/* 564 */,
/* 565 */,
/* 566 */,
/* 567 */,
/* 568 */,
/* 569 */,
/* 570 */,
/* 571 */,
/* 572 */,
/* 573 */,
/* 574 */,
/* 575 */,
/* 576 */,
/* 577 */,
/* 578 */,
/* 579 */,
/* 580 */,
/* 581 */,
/* 582 */,
/* 583 */,
/* 584 */,
/* 585 */,
/* 586 */,
/* 587 */,
/* 588 */,
/* 589 */,
/* 590 */,
/* 591 */,
/* 592 */,
/* 593 */,
/* 594 */,
/* 595 */,
/* 596 */,
/* 597 */,
/* 598 */,
/* 599 */,
/* 600 */,
/* 601 */,
/* 602 */,
/* 603 */,
/* 604 */,
/* 605 */,
/* 606 */,
/* 607 */,
/* 608 */,
/* 609 */,
/* 610 */,
/* 611 */,
/* 612 */,
/* 613 */,
/* 614 */,
/* 615 */,
/* 616 */,
/* 617 */,
/* 618 */,
/* 619 */,
/* 620 */,
/* 621 */,
/* 622 */,
/* 623 */,
/* 624 */,
/* 625 */,
/* 626 */,
/* 627 */,
/* 628 */,
/* 629 */,
/* 630 */,
/* 631 */,
/* 632 */,
/* 633 */,
/* 634 */,
/* 635 */,
/* 636 */,
/* 637 */,
/* 638 */,
/* 639 */,
/* 640 */,
/* 641 */,
/* 642 */,
/* 643 */,
/* 644 */,
/* 645 */,
/* 646 */,
/* 647 */,
/* 648 */,
/* 649 */,
/* 650 */,
/* 651 */,
/* 652 */,
/* 653 */,
/* 654 */,
/* 655 */,
/* 656 */,
/* 657 */,
/* 658 */,
/* 659 */,
/* 660 */,
/* 661 */,
/* 662 */,
/* 663 */,
/* 664 */,
/* 665 */,
/* 666 */,
/* 667 */,
/* 668 */,
/* 669 */,
/* 670 */,
/* 671 */,
/* 672 */,
/* 673 */,
/* 674 */,
/* 675 */,
/* 676 */,
/* 677 */,
/* 678 */,
/* 679 */,
/* 680 */,
/* 681 */,
/* 682 */,
/* 683 */,
/* 684 */,
/* 685 */,
/* 686 */,
/* 687 */,
/* 688 */,
/* 689 */,
/* 690 */,
/* 691 */,
/* 692 */,
/* 693 */,
/* 694 */,
/* 695 */,
/* 696 */,
/* 697 */,
/* 698 */,
/* 699 */,
/* 700 */,
/* 701 */,
/* 702 */,
/* 703 */,
/* 704 */,
/* 705 */,
/* 706 */,
/* 707 */,
/* 708 */,
/* 709 */,
/* 710 */,
/* 711 */,
/* 712 */,
/* 713 */,
/* 714 */,
/* 715 */,
/* 716 */,
/* 717 */,
/* 718 */,
/* 719 */,
/* 720 */,
/* 721 */,
/* 722 */,
/* 723 */,
/* 724 */,
/* 725 */,
/* 726 */,
/* 727 */,
/* 728 */,
/* 729 */,
/* 730 */,
/* 731 */,
/* 732 */,
/* 733 */,
/* 734 */,
/* 735 */,
/* 736 */,
/* 737 */,
/* 738 */,
/* 739 */,
/* 740 */,
/* 741 */,
/* 742 */,
/* 743 */,
/* 744 */,
/* 745 */,
/* 746 */,
/* 747 */,
/* 748 */,
/* 749 */,
/* 750 */,
/* 751 */,
/* 752 */,
/* 753 */,
/* 754 */,
/* 755 */,
/* 756 */,
/* 757 */,
/* 758 */,
/* 759 */,
/* 760 */,
/* 761 */,
/* 762 */,
/* 763 */,
/* 764 */,
/* 765 */,
/* 766 */,
/* 767 */,
/* 768 */,
/* 769 */,
/* 770 */,
/* 771 */,
/* 772 */,
/* 773 */,
/* 774 */,
/* 775 */,
/* 776 */,
/* 777 */,
/* 778 */,
/* 779 */,
/* 780 */,
/* 781 */,
/* 782 */,
/* 783 */,
/* 784 */,
/* 785 */,
/* 786 */,
/* 787 */,
/* 788 */,
/* 789 */,
/* 790 */,
/* 791 */,
/* 792 */,
/* 793 */,
/* 794 */,
/* 795 */,
/* 796 */,
/* 797 */,
/* 798 */,
/* 799 */,
/* 800 */,
/* 801 */,
/* 802 */,
/* 803 */,
/* 804 */,
/* 805 */,
/* 806 */,
/* 807 */,
/* 808 */,
/* 809 */,
/* 810 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * deep-diff.
 * Licensed under the MIT License.
 */
;(function(root, factory) {
  'use strict';
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
      return factory();
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.DeepDiff = factory();
  }
}(this, function(undefined) {
  'use strict';

  var $scope, conflict, conflictResolution = [];
  if (typeof global === 'object' && global) {
    $scope = global;
  } else if (typeof window !== 'undefined') {
    $scope = window;
  } else {
    $scope = {};
  }
  conflict = $scope.DeepDiff;
  if (conflict) {
    conflictResolution.push(
      function() {
        if ('undefined' !== typeof conflict && $scope.DeepDiff === accumulateDiff) {
          $scope.DeepDiff = conflict;
          conflict = undefined;
        }
      });
  }

  // nodejs compatible on server side and in the browser.
  function inherits(ctor, superCtor) {
    ctor.super_ = superCtor;
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  }

  function Diff(kind, path) {
    Object.defineProperty(this, 'kind', {
      value: kind,
      enumerable: true
    });
    if (path && path.length) {
      Object.defineProperty(this, 'path', {
        value: path,
        enumerable: true
      });
    }
  }

  function DiffEdit(path, origin, value) {
    DiffEdit.super_.call(this, 'E', path);
    Object.defineProperty(this, 'lhs', {
      value: origin,
      enumerable: true
    });
    Object.defineProperty(this, 'rhs', {
      value: value,
      enumerable: true
    });
  }
  inherits(DiffEdit, Diff);

  function DiffNew(path, value) {
    DiffNew.super_.call(this, 'N', path);
    Object.defineProperty(this, 'rhs', {
      value: value,
      enumerable: true
    });
  }
  inherits(DiffNew, Diff);

  function DiffDeleted(path, value) {
    DiffDeleted.super_.call(this, 'D', path);
    Object.defineProperty(this, 'lhs', {
      value: value,
      enumerable: true
    });
  }
  inherits(DiffDeleted, Diff);

  function DiffArray(path, index, item) {
    DiffArray.super_.call(this, 'A', path);
    Object.defineProperty(this, 'index', {
      value: index,
      enumerable: true
    });
    Object.defineProperty(this, 'item', {
      value: item,
      enumerable: true
    });
  }
  inherits(DiffArray, Diff);

  function arrayRemove(arr, from, to) {
    var rest = arr.slice((to || from) + 1 || arr.length);
    arr.length = from < 0 ? arr.length + from : from;
    arr.push.apply(arr, rest);
    return arr;
  }

  function realTypeOf(subject) {
    var type = typeof subject;
    if (type !== 'object') {
      return type;
    }

    if (subject === Math) {
      return 'math';
    } else if (subject === null) {
      return 'null';
    } else if (Array.isArray(subject)) {
      return 'array';
    } else if (Object.prototype.toString.call(subject) === '[object Date]') {
      return 'date';
    } else if (typeof subject.toString !== 'undefined' && /^\/.*\//.test(subject.toString())) {
      return 'regexp';
    }
    return 'object';
  }

  function deepDiff(lhs, rhs, changes, prefilter, path, key, stack) {
    path = path || [];
    var currentPath = path.slice(0);
    if (typeof key !== 'undefined') {
      if (prefilter) {
        if (typeof(prefilter) === 'function' && prefilter(currentPath, key)) { return; }
        else if (typeof(prefilter) === 'object') {
          if (prefilter.prefilter && prefilter.prefilter(currentPath, key)) { return; }
          if (prefilter.normalize) {
            var alt = prefilter.normalize(currentPath, key, lhs, rhs);
            if (alt) {
              lhs = alt[0];
              rhs = alt[1];
            }
          }
        }
      }
      currentPath.push(key);
    }

    // Use string comparison for regexes
    if (realTypeOf(lhs) === 'regexp' && realTypeOf(rhs) === 'regexp') {
      lhs = lhs.toString();
      rhs = rhs.toString();
    }

    var ltype = typeof lhs;
    var rtype = typeof rhs;
    if (ltype === 'undefined') {
      if (rtype !== 'undefined') {
        changes(new DiffNew(currentPath, rhs));
      }
    } else if (rtype === 'undefined') {
      changes(new DiffDeleted(currentPath, lhs));
    } else if (realTypeOf(lhs) !== realTypeOf(rhs)) {
      changes(new DiffEdit(currentPath, lhs, rhs));
    } else if (Object.prototype.toString.call(lhs) === '[object Date]' && Object.prototype.toString.call(rhs) === '[object Date]' && ((lhs - rhs) !== 0)) {
      changes(new DiffEdit(currentPath, lhs, rhs));
    } else if (ltype === 'object' && lhs !== null && rhs !== null) {
      stack = stack || [];
      if (stack.indexOf(lhs) < 0) {
        stack.push(lhs);
        if (Array.isArray(lhs)) {
          var i, len = lhs.length;
          for (i = 0; i < lhs.length; i++) {
            if (i >= rhs.length) {
              changes(new DiffArray(currentPath, i, new DiffDeleted(undefined, lhs[i])));
            } else {
              deepDiff(lhs[i], rhs[i], changes, prefilter, currentPath, i, stack);
            }
          }
          while (i < rhs.length) {
            changes(new DiffArray(currentPath, i, new DiffNew(undefined, rhs[i++])));
          }
        } else {
          var akeys = Object.keys(lhs);
          var pkeys = Object.keys(rhs);
          akeys.forEach(function(k, i) {
            var other = pkeys.indexOf(k);
            if (other >= 0) {
              deepDiff(lhs[k], rhs[k], changes, prefilter, currentPath, k, stack);
              pkeys = arrayRemove(pkeys, other);
            } else {
              deepDiff(lhs[k], undefined, changes, prefilter, currentPath, k, stack);
            }
          });
          pkeys.forEach(function(k) {
            deepDiff(undefined, rhs[k], changes, prefilter, currentPath, k, stack);
          });
        }
        stack.length = stack.length - 1;
      }
    } else if (lhs !== rhs) {
      if (!(ltype === 'number' && isNaN(lhs) && isNaN(rhs))) {
        changes(new DiffEdit(currentPath, lhs, rhs));
      }
    }
  }

  function accumulateDiff(lhs, rhs, prefilter, accum) {
    accum = accum || [];
    deepDiff(lhs, rhs,
      function(diff) {
        if (diff) {
          accum.push(diff);
        }
      },
      prefilter);
    return (accum.length) ? accum : undefined;
  }

  function applyArrayChange(arr, index, change) {
    if (change.path && change.path.length) {
      var it = arr[index],
          i, u = change.path.length - 1;
      for (i = 0; i < u; i++) {
        it = it[change.path[i]];
      }
      switch (change.kind) {
        case 'A':
          applyArrayChange(it[change.path[i]], change.index, change.item);
          break;
        case 'D':
          delete it[change.path[i]];
          break;
        case 'E':
        case 'N':
          it[change.path[i]] = change.rhs;
          break;
      }
    } else {
      switch (change.kind) {
        case 'A':
          applyArrayChange(arr[index], change.index, change.item);
          break;
        case 'D':
          arr = arrayRemove(arr, index);
          break;
        case 'E':
        case 'N':
          arr[index] = change.rhs;
          break;
      }
    }
    return arr;
  }

  function applyChange(target, source, change) {
    if (target && source && change && change.kind) {
      var it = target,
          i = -1,
          last = change.path ? change.path.length - 1 : 0;
      while (++i < last) {
        if (typeof it[change.path[i]] === 'undefined') {
          it[change.path[i]] = (typeof change.path[i] === 'number') ? [] : {};
        }
        it = it[change.path[i]];
      }
      switch (change.kind) {
        case 'A':
          applyArrayChange(change.path ? it[change.path[i]] : it, change.index, change.item);
          break;
        case 'D':
          delete it[change.path[i]];
          break;
        case 'E':
        case 'N':
          it[change.path[i]] = change.rhs;
          break;
      }
    }
  }

  function revertArrayChange(arr, index, change) {
    if (change.path && change.path.length) {
      // the structure of the object at the index has changed...
      var it = arr[index],
          i, u = change.path.length - 1;
      for (i = 0; i < u; i++) {
        it = it[change.path[i]];
      }
      switch (change.kind) {
        case 'A':
          revertArrayChange(it[change.path[i]], change.index, change.item);
          break;
        case 'D':
          it[change.path[i]] = change.lhs;
          break;
        case 'E':
          it[change.path[i]] = change.lhs;
          break;
        case 'N':
          delete it[change.path[i]];
          break;
      }
    } else {
      // the array item is different...
      switch (change.kind) {
        case 'A':
          revertArrayChange(arr[index], change.index, change.item);
          break;
        case 'D':
          arr[index] = change.lhs;
          break;
        case 'E':
          arr[index] = change.lhs;
          break;
        case 'N':
          arr = arrayRemove(arr, index);
          break;
      }
    }
    return arr;
  }

  function revertChange(target, source, change) {
    if (target && source && change && change.kind) {
      var it = target,
          i, u;
      u = change.path.length - 1;
      for (i = 0; i < u; i++) {
        if (typeof it[change.path[i]] === 'undefined') {
          it[change.path[i]] = {};
        }
        it = it[change.path[i]];
      }
      switch (change.kind) {
        case 'A':
          // Array was modified...
          // it will be an array...
          revertArrayChange(it[change.path[i]], change.index, change.item);
          break;
        case 'D':
          // Item was deleted...
          it[change.path[i]] = change.lhs;
          break;
        case 'E':
          // Item was edited...
          it[change.path[i]] = change.lhs;
          break;
        case 'N':
          // Item is new...
          delete it[change.path[i]];
          break;
      }
    }
  }

  function applyDiff(target, source, filter) {
    if (target && source) {
      var onChange = function(change) {
        if (!filter || filter(target, source, change)) {
          applyChange(target, source, change);
        }
      };
      deepDiff(target, source, onChange);
    }
  }

  Object.defineProperties(accumulateDiff, {

    diff: {
      value: accumulateDiff,
      enumerable: true
    },
    observableDiff: {
      value: deepDiff,
      enumerable: true
    },
    applyDiff: {
      value: applyDiff,
      enumerable: true
    },
    applyChange: {
      value: applyChange,
      enumerable: true
    },
    revertChange: {
      value: revertChange,
      enumerable: true
    },
    isConflict: {
      value: function() {
        return 'undefined' !== typeof conflict;
      },
      enumerable: true
    },
    noConflict: {
      value: function() {
        if (conflictResolution) {
          conflictResolution.forEach(function(it) {
            it();
          });
          conflictResolution = null;
        }
        return accumulateDiff;
      },
      enumerable: true
    }
  });

  return accumulateDiff;
}));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(78)))

/***/ }),
/* 811 */,
/* 812 */,
/* 813 */,
/* 814 */,
/* 815 */,
/* 816 */,
/* 817 */,
/* 818 */,
/* 819 */,
/* 820 */,
/* 821 */,
/* 822 */,
/* 823 */,
/* 824 */,
/* 825 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var flatpickr = function flatpickr(selector, config) {
	var elements = void 0;

	var createInstance = function createInstance(element) {
		if (element._flatpickr) {
			element._flatpickr.destroy();
		}

		element._flatpickr = new flatpickr.init(element, config);
		return element._flatpickr;
	};

	if (selector.nodeName) {
		return createInstance(selector);
	}
	/*
 Utilize the performance of native getters if applicable
 https://jsperf.com/getelementsbyclassname-vs-queryselectorall/18
 https://jsperf.com/jquery-vs-javascript-performance-comparison/22
 */
	else if (/^#[a-zA-Z0-9\-_]*$/.test(selector)) {
			return createInstance(document.getElementById(selector.slice(1)));
		} else if (/^\.[a-zA-Z0-9\-_]*$/.test(selector)) {
			elements = document.getElementsByClassName(selector.slice(1));
		} else {
			elements = document.querySelectorAll(selector);
		}

	var instances = [];

	for (var i = 0; i < elements.length; i++) {
		instances.push(createInstance(elements[i]));
	}

	if (instances.length === 1) {
		return instances[0];
	}

	return {
		calendars: instances,
		byID: function byID(id) {
			return document.getElementById(id)._flatpickr;
		}
	};
};

/**
 * @constructor
 */
flatpickr.init = function (element, instanceConfig) {
	function createElement(tag, className, content) {
		var newElement = document.createElement(tag);

		if (content) {
			newElement.textContent = content;
		}

		if (className) {
			newElement.className = className;
		}

		return newElement;
	}

	var debounce = function debounce(func, wait, immediate) {
		var timeout = void 0;
		return function () {
			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			var context = this;

			var later = function later() {
				timeout = null;
				if (!immediate) {
					func.apply(context, args);
				}
			};

			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (immediate && !timeout) {
				func.apply(context, args);
			}
		};
	};

	// functions
	var self = this;
	var parseConfig = void 0,
	    init = void 0,
	    wrap = void 0,
	    uDate = void 0,
	    equalDates = void 0,
	    pad = void 0,
	    monthToStr = void 0,
	    isEnabled = void 0,
	    buildMonthNavigation = void 0,
	    buildWeekdays = void 0,
	    buildCalendar = void 0,
	    buildDays = void 0,
	    buildWeeks = void 0,
	    buildTime = void 0,
	    timeWrapper = void 0,
	    yearScroll = void 0,
	    updateValue = void 0,
	    amPMToggle = void 0,
	    onKeyDown = void 0,
	    onResize = void 0,
	    updateNavigationCurrentMonth = void 0,
	    handleYearChange = void 0,
	    changeMonth = void 0,
	    getDaysinMonth = void 0,
	    documentClick = void 0,
	    selectDate = void 0,
	    getRandomCalendarIdStr = void 0,
	    bind = void 0,
	    triggerChange = void 0;

	// elements & variables
	var calendarContainer = void 0,
	    weekdayContainer = void 0,
	    timeContainer = void 0,
	    navigationCurrentMonth = void 0,
	    monthsNav = void 0,
	    prevMonthNav = void 0,
	    currentYearElement = void 0,
	    currentMonthElement = void 0,
	    nextMonthNav = void 0,
	    calendar = void 0,
	    weekNumbers = void 0,
	    now = new Date(),
	    wrapperElement = void 0,
	    clickEvt = void 0;

	self.formats = {
		// weekday name, short, e.g. Thu
		D: function D() {
			return self.l10n.weekdays.shorthand[self.formats.w()];
		},

		// full month name e.g. January
		F: function F() {
			return monthToStr(self.formats.n() - 1, false);
		},

		// hours with leading zero e.g. 03
		H: function H() {
			return pad(self.selectedDateObj.getHours());
		},

		// day (1-30) with ordinal suffix e.g. 1st, 2nd
		J: function J() {
			return self.formats.j() + self.l10n.ordinal(self.formats.j());
		},

		// AM/PM
		K: function K() {
			return self.selectedDateObj.getHours() > 11 ? "PM" : "AM";
		},

		// shorthand month e.g. Jan, Sep, Oct, etc
		M: function M() {
			return monthToStr(self.formats.n() - 1, true);
		},

		// seconds 00-59
		S: function S() {
			return pad(self.selectedDateObj.getSeconds());
		},

		// unix timestamp
		U: function U() {
			return self.selectedDateObj.getTime() / 1000;
		},

		// full year e.g. 2016
		Y: function Y() {
			return self.selectedDateObj.getFullYear();
		},

		// day in month, padded (01-30)
		d: function d() {
			return pad(self.formats.j());
		},

		// hour from 1-12 (am/pm)
		h: function h() {
			return self.selectedDateObj.getHours() % 12 ? self.selectedDateObj.getHours() % 12 : 12;
		},

		// minutes, padded with leading zero e.g. 09
		i: function i() {
			return pad(self.selectedDateObj.getMinutes());
		},

		// day in month (1-30)
		j: function j() {
			return self.selectedDateObj.getDate();
		},

		// weekday name, full, e.g. Thursday
		l: function l() {
			return self.l10n.weekdays.longhand[self.formats.w()];
		},

		// padded month number (01-12)
		m: function m() {
			return pad(self.formats.n());
		},

		// the month number (1-12)
		n: function n() {
			return self.selectedDateObj.getMonth() + 1;
		},

		// seconds 0-59
		s: function s() {
			return self.selectedDateObj.getSeconds();
		},

		// number of the day of the week
		w: function w() {
			return self.selectedDateObj.getDay();
		},

		// last two digits of year e.g. 16 for 2016
		y: function y() {
			return String(self.formats.Y()).substring(2);
		}
	};

	self.defaultConfig = {
		/* if true, dates will be parsed, formatted, and displayed in UTC.
  preloading date strings w/ timezones is recommended but not necessary */
		utc: false,

		// wrap: see https://chmln.github.io/flatpickr/#strap
		wrap: false,

		// enables week numbers
		weekNumbers: false,

		allowInput: false,

		/*
  	clicking on input opens the date(time)picker.
  	disable if you wish to open the calendar manually with .open()
  */
		clickOpens: true,

		// display time picker in 24 hour mode
		time_24hr: false,

		// enables the time picker functionality
		enableTime: false,

		// noCalendar: true will hide the calendar. use for a time picker along w/ enableTime
		noCalendar: false,

		// more date format chars at https://chmln.github.io/flatpickr/#dateformat
		dateFormat: "Y-m-d",

		// altInput - see https://chmln.github.io/flatpickr/#altinput
		altInput: false,

		// the created altInput element will have this class.
		altInputClass: "",

		// same as dateFormat, but for altInput
		altFormat: "F j, Y", // defaults to e.g. June 10, 2016

		// defaultDate - either a datestring or a date object. used for datetimepicker"s initial value
		defaultDate: null,

		// the minimum date that user can pick (inclusive)
		minDate: null,

		// the maximum date that user can pick (inclusive)
		maxDate: null,

		// dateparser that transforms a given string to a date object
		parseDate: null,

		// see https://chmln.github.io/flatpickr/#disable
		enable: [],

		// see https://chmln.github.io/flatpickr/#disable
		disable: [],

		// display the short version of month names - e.g. Sep instead of September
		shorthandCurrentMonth: false,

		// displays calendar inline. see https://chmln.github.io/flatpickr/#inline-calendar
		inline: false,

		// position calendar inside wrapper and next to the input element
		// leave at false unless you know what you"re doing
		static: false,

		// code for previous/next icons. this is where you put your custom icon code e.g. fontawesome
		prevArrow: "&lt;",
		nextArrow: "&gt;",

		// enables seconds in the time picker
		enableSeconds: false,

		// step size used when scrolling/incrementing the hour element
		hourIncrement: 1,

		// step size used when scrolling/incrementing the minute element
		minuteIncrement: 5,

		// onChange callback when user selects a date or time
		onChange: null, // function (dateObj, dateStr) {}

		// called every time calendar is opened
		onOpen: null, // function (dateObj, dateStr) {}

		// called every time calendar is closed
		onClose: null, // function (dateObj, dateStr) {}

		onValueUpdate: null
	};

	init = function init() {
		instanceConfig = instanceConfig || {};

		self.element = element;

		parseConfig();

		self.input = self.config.wrap ? element.querySelector("[data-input]") : element;
		self.input.classList.add("flatpickr-input");

		if (self.config.defaultDate) {
			self.config.defaultDate = uDate(self.config.defaultDate);
		}

		if (self.input.value || self.config.defaultDate) {
			self.selectedDateObj = uDate(self.config.defaultDate || self.input.value);
		}

		wrap();
		buildCalendar();
		bind();

		self.uDate = uDate;
		self.jumpToDate();
		updateValue();
	};

	parseConfig = function parseConfig() {
		self.config = {};

		Object.keys(self.defaultConfig).forEach(function (key) {
			if (instanceConfig.hasOwnProperty(key)) {
				self.config[key] = instanceConfig[key];
			} else if (self.element.dataset && self.element.dataset.hasOwnProperty(key.toLowerCase())) {
				self.config[key] = self.element.dataset[key.toLowerCase()];
			} else if (!self.element.dataset && self.element.hasAttribute("data-" + key)) {
				self.config[key] = self.element.getAttribute("data-" + key);
			} else {
				self.config[key] = flatpickr.init.prototype.defaultConfig[key] || self.defaultConfig[key];
			}

			if (typeof self.defaultConfig[key] === "boolean") {
				self.config[key] = self.config[key] === true || self.config[key] === "" || self.config[key] === "true";
			}

			if (key === "enableTime" && self.config[key]) {
				self.defaultConfig.dateFormat = !self.config.time_24hr ? "Y-m-d h:i K" : "Y-m-d H:i";
				self.defaultConfig.altFormat = !self.config.time_24hr ? "F j Y, h:i K" : "F j, Y H:i";
			} else if (key === "noCalendar" && self.config[key]) {
				self.defaultConfig.dateFormat = "h:i K";
				self.defaultConfig.altFormat = "h:i K";
			}
		});
	};

	getRandomCalendarIdStr = function getRandomCalendarIdStr() {
		var randNum = void 0,
		    idStr = void 0;
		do {
			randNum = Math.round(Math.random() * Math.pow(10, 10));
			idStr = "flatpickr-" + randNum;
		} while (document.getElementById(idStr) !== null);

		return idStr;
	};

	uDate = function uDate(date, timeless) {
		timeless = timeless || false;

		if (date === "today") {
			date = new Date();
			timeless = true;
		} else if (typeof date === "string") {
			date = date.trim();

			if (self.config.parseDate) {
				date = self.config.parseDate(date);
			} else if (/^\d\d\d\d\-\d{1,2}\-\d\d$/.test(date)) {
				// this utc datestring gets parsed, but incorrectly by Date.parse
				date = new Date(date.replace(/(\d)-(\d)/g, "$1/$2"));
			} else if (Date.parse(date)) {
				date = new Date(date);
			} else if (/^\d\d\d\d\-\d\d\-\d\d/.test(date)) {
				// disable special utc datestring
				date = new Date(date.replace(/(\d)-(\d)/g, "$1/$2"));
			} else if (/^(\d?\d):(\d\d)/.test(date)) {
				// time-only picker
				var matches = date.match(/^(\d?\d):(\d\d)(:(\d\d))?/),
				    seconds = matches[4] !== undefined ? matches[4] : 0;

				date = new Date();
				date.setHours(matches[1], matches[2], seconds, 0);
			} else {
				console.error("flatpickr: invalid date string " + date);
				console.info(self.element);
			}
		}

		if (!(date instanceof Date) || !date.getTime()) {
			return null;
		}

		if (self.config.utc && !date.fp_isUTC) {
			date = date.fp_toUTC();
		}

		if (timeless) {
			date.setHours(0, 0, 0, 0);
		}

		return date;
	};

	equalDates = function equalDates(date1, date2) {
		return date1.getDate() === date2.getDate() && date1.getMonth() === date2.getMonth() && date1.getFullYear() === date2.getFullYear();
	};

	wrap = function wrap() {
		wrapperElement = createElement("div", "flatpickr-wrapper");

		if (self.config.inline || self.config.static) {
			// Wrap input and place calendar underneath
			self.element.parentNode.insertBefore(wrapperElement, self.element);
			wrapperElement.appendChild(self.element);

			wrapperElement.classList.add(self.config.inline ? "inline" : "static");
		} else {
			// Insert at bottom of BODY tag to display outside
			// of relative positioned elements with css "overflow: hidden;"
			// property set.
			document.body.appendChild(wrapperElement);
		}

		if (self.config.altInput) {
			// replicate self.element
			self.altInput = createElement(self.input.nodeName, self.config.altInputClass + " flatpickr-input");
			self.altInput.placeholder = self.input.placeholder;
			self.altInput.type = "text";

			self.input.type = "hidden";
			self.input.parentNode.insertBefore(self.altInput, self.input.nextSibling);
		}
	};

	getDaysinMonth = function getDaysinMonth() {
		var month = arguments.length <= 0 || arguments[0] === undefined ? self.currentMonth : arguments[0];

		var yr = self.currentYear;

		if (month === 1 && (yr % 4 === 0 && yr % 100 !== 0 || yr % 400 === 0)) {
			return 29;
		}

		return self.l10n.daysInMonth[month];
	};

	updateValue = function updateValue(e) {
		if (self.config.noCalendar && !self.selectedDateObj) {
			// picking time only and method triggered from picker
			self.selectedDateObj = new Date();
		} else if (!self.selectedDateObj) {
			return;
		}

		if (e) {
			e.target.blur();
		}

		var timeHasChanged = void 0;

		if (self.config.enableTime) {
			var previousTimestamp = self.selectedDateObj.getTime();

			// update time
			var hours = parseInt(self.hourElement.value, 10) || 0,
			    seconds = void 0;

			var minutes = (60 + (parseInt(self.minuteElement.value, 10) || 0)) % 60;

			if (self.config.enableSeconds) {
				seconds = (60 + parseInt(self.secondElement.value, 10) || 0) % 60;
			}

			if (!self.config.time_24hr) {
				// the real number of hours for the date object
				hours = hours % 12 + 12 * (self.amPM.innerHTML === "PM");
			}

			self.selectedDateObj.setHours(hours, minutes, seconds === undefined ? self.selectedDateObj.getSeconds() : seconds);

			self.hourElement.value = pad(!self.config.time_24hr ? (12 + hours) % 12 + 12 * (hours % 12 === 0) : hours);
			self.minuteElement.value = pad(minutes);

			if (seconds !== undefined) {
				self.secondElement.value = pad(seconds);
			}

			timeHasChanged = self.selectedDateObj.getTime() !== previousTimestamp;
		}

		self.input.value = self.formatDate(self.config.dateFormat);

		if (self.altInput) {
			self.altInput.value = self.formatDate(self.config.altFormat);
		}

		if (e && (timeHasChanged || e.target.classList.contains("flatpickr-day"))) {
			triggerChange();
		}

		if (self.config.onValueUpdate) {
			self.config.onValueUpdate(self.selectedDateObj, self.input.value, self);
		}
	};

	pad = function pad(num) {
		return ("0" + num).slice(-2);
	};

	self.formatDate = function (dateFormat) {
		var formattedDate = "";
		var formatPieces = dateFormat.split("");

		for (var i = 0; i < formatPieces.length; i++) {
			var c = formatPieces[i];
			if (self.formats.hasOwnProperty(c) && formatPieces[i - 1] !== "\\") {
				formattedDate += self.formats[c]();
			} else if (c !== "\\") {
				formattedDate += c;
			}
		}

		return formattedDate;
	};

	monthToStr = function monthToStr(date, shorthand) {
		if (shorthand || self.config.shorthandCurrentMonth) {
			return self.l10n.months.shorthand[date];
		}

		return self.l10n.months.longhand[date];
	};

	isEnabled = function isEnabled(dateToCheck) {
		if (self.config.minDate && dateToCheck < self.config.minDate || self.config.maxDate && dateToCheck > self.config.maxDate) {
			return false;
		}

		dateToCheck = uDate(dateToCheck, true); // timeless

		var bool = self.config.enable.length > 0,
		    array = bool ? self.config.enable : self.config.disable;

		var d = void 0;

		for (var i = 0; i < array.length; i++) {
			d = array[i];

			if (d instanceof Function && d(dateToCheck)) {
				// disabled by function
				return bool;
			} else if ( // disabled weekday
			typeof d === "string" && /^wkd/.test(d) && dateToCheck.getDay() === (parseInt(d.slice(-1), 10) + self.l10n.firstDayOfWeek - 1) % 7) {
				return bool;
			} else if ((d instanceof Date || typeof d === "string" && !/^wkd/.test(d)) && uDate(d, true).getTime() === dateToCheck.getTime()) {
				// disabled by date string
				return bool;
			} else if ( // disabled by range
			(typeof d === "undefined" ? "undefined" : _typeof(d)) === "object" && d.hasOwnProperty("from") && dateToCheck >= uDate(d.from) && dateToCheck <= uDate(d.to)) {
				return bool;
			}
		}

		return !bool;
	};

	yearScroll = function yearScroll(event) {
		event.preventDefault();

		var delta = Math.max(-1, Math.min(1, event.wheelDelta || -event.deltaY));
		self.currentYear = event.target.value = parseInt(event.target.value, 10) + delta;
		self.redraw();
	};

	timeWrapper = function timeWrapper(e) {
		e.preventDefault();

		var min = parseInt(e.target.min, 10),
		    max = parseInt(e.target.max, 10),
		    step = parseInt(e.target.step, 10),
		    value = parseInt(e.target.value, 10);

		var newValue = value;

		if (e.type === "wheel") {
			newValue = value + step * Math.max(-1, Math.min(1, e.wheelDelta || -e.deltaY));
		}

		if (newValue <= min) {
			newValue = max - step;
		} else if (newValue >= max) {
			newValue = min + step;
		}

		e.target.value = pad(newValue);
	};

	updateNavigationCurrentMonth = function updateNavigationCurrentMonth() {
		currentMonthElement.textContent = monthToStr(self.currentMonth) + " ";
		currentYearElement.value = self.currentYear;
	};

	handleYearChange = function handleYearChange() {
		if (self.currentMonth < 0 || self.currentMonth > 11) {
			self.currentYear += self.currentMonth % 11;
			self.currentMonth = (self.currentMonth + 12) % 12;
		}
	};

	documentClick = function documentClick(e) {
		var isCalendarElement = wrapperElement.contains(e.relatedTarget || e.target),
		    isInput = self.element.contains(e.relatedTarget || e.target) || e.relatedTarget || e.target === self.altInput;

		if (self.isOpen && !isCalendarElement && !isInput) {
			self.close();
		}
	};

	changeMonth = function changeMonth(offset) {
		self.currentMonth += offset;

		handleYearChange();
		updateNavigationCurrentMonth();
		buildDays();
		(self.config.noCalendar ? timeContainer : calendar).focus();
	};

	selectDate = function selectDate(e) {
		e.preventDefault();
		e.stopPropagation();

		if (self.config.allowInput && e.target === (self.altInput || self.input) && e.which === 13) {
			self.setDate((self.altInput || self.input).value);
			self.redraw();
		} else if (e.target.classList.contains("flatpickr-day")) {
			var isPrevMonthDay = e.target.classList.contains("prevMonthDay"),
			    isNextMonthDay = e.target.classList.contains("nextMonthDay"),
			    monthNum = self.currentMonth - isPrevMonthDay + isNextMonthDay;

			if (isPrevMonthDay || isNextMonthDay) {
				changeMonth(+isNextMonthDay - isPrevMonthDay);
			}

			self.selectedDateObj = new Date(self.currentYear, monthNum, e.target.innerHTML);

			updateValue(e);
			buildDays();

			if (!self.config.enableTime) {
				self.close();
			}
		}
	};

	buildCalendar = function buildCalendar() {
		calendarContainer = createElement("div", "flatpickr-calendar");
		calendarContainer.id = getRandomCalendarIdStr();

		calendar = createElement("div", "flatpickr-days");
		calendar.tabIndex = -1;

		if (!self.config.noCalendar) {
			buildMonthNavigation();
			buildWeekdays();

			if (self.config.weekNumbers) {
				buildWeeks();
			}

			buildDays();

			calendarContainer.appendChild(calendar);
		}

		wrapperElement.appendChild(calendarContainer);

		if (self.config.enableTime) {
			buildTime();
		}
	};

	buildMonthNavigation = function buildMonthNavigation() {
		monthsNav = createElement("div", "flatpickr-month");

		prevMonthNav = createElement("span", "flatpickr-prev-month");
		prevMonthNav.innerHTML = self.config.prevArrow;

		currentMonthElement = createElement("span", "cur_month");

		currentYearElement = createElement("input", "cur_year");
		currentYearElement.type = "number";
		currentYearElement.title = self.l10n.scrollTitle;

		nextMonthNav = createElement("span", "flatpickr-next-month");
		nextMonthNav.innerHTML = self.config.nextArrow;

		navigationCurrentMonth = createElement("span", "flatpickr-current-month");
		navigationCurrentMonth.appendChild(currentMonthElement);
		navigationCurrentMonth.appendChild(currentYearElement);

		monthsNav.appendChild(prevMonthNav);
		monthsNav.appendChild(navigationCurrentMonth);
		monthsNav.appendChild(nextMonthNav);

		calendarContainer.appendChild(monthsNav);
		updateNavigationCurrentMonth();
	};

	buildWeekdays = function buildWeekdays() {
		weekdayContainer = createElement("div", "flatpickr-weekdays");
		var firstDayOfWeek = self.l10n.firstDayOfWeek;

		var weekdays = self.l10n.weekdays.shorthand.slice();

		if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {
			weekdays = [].concat(weekdays.splice(firstDayOfWeek, weekdays.length), weekdays.splice(0, firstDayOfWeek));
		}

		if (self.config.weekNumbers) {
			weekdayContainer.innerHTML = "<span>" + self.l10n.weekAbbreviation + "</span>";
		}

		weekdayContainer.innerHTML += "<span>" + weekdays.join("</span><span>") + "</span>";

		calendarContainer.appendChild(weekdayContainer);
	};

	buildWeeks = function buildWeeks() {
		calendarContainer.classList.add("hasWeeks");

		weekNumbers = createElement("div", "flatpickr-weeks");
		calendarContainer.appendChild(weekNumbers);
	};

	buildDays = function buildDays() {
		var firstOfMonth = (new Date(self.currentYear, self.currentMonth, 1).getDay() - self.l10n.firstDayOfWeek + 7) % 7,
		    daysInMonth = getDaysinMonth(),
		    prevMonthDays = getDaysinMonth((self.currentMonth - 1 + 12) % 12),
		    days = document.createDocumentFragment();

		var dayNumber = prevMonthDays + 1 - firstOfMonth,
		    currentDate = void 0,
		    dateIsDisabled = void 0;

		if (self.config.weekNumbers) {
			weekNumbers.innerHTML = "";
		}

		calendar.innerHTML = "";

		self.config.minDate = uDate(self.config.minDate, true);
		self.config.maxDate = uDate(self.config.maxDate, true);

		// prepend days from the ending of previous month
		for (; dayNumber <= prevMonthDays; dayNumber++) {
			var curDate = new Date(self.currentYear, self.currentMonth - 1, dayNumber, 0, 0, 0, 0, 0),
			    dateIsEnabled = isEnabled(curDate),
			    dayElem = createElement("span", dateIsEnabled ? "flatpickr-day prevMonthDay" : "disabled", dayNumber);

			if (dateIsEnabled) {
				dayElem.tabIndex = 0;
			}

			days.appendChild(dayElem);
		}

		// Start at 1 since there is no 0th day
		for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++) {
			currentDate = new Date(self.currentYear, self.currentMonth, dayNumber, 0, 0, 0, 0, 0);

			if (self.config.weekNumbers && dayNumber % 7 === 1) {
				weekNumbers.appendChild(createElement("span", "disabled flatpickr-day", currentDate.fp_getWeek()));
			}

			dateIsDisabled = !isEnabled(currentDate);

			var dayElement = createElement("span", dateIsDisabled ? "disabled" : "flatpickr-day", dayNumber);

			if (!dateIsDisabled) {
				dayElement.tabIndex = 0;

				if (equalDates(currentDate, now)) {
					dayElement.classList.add("today");
				}

				if (self.selectedDateObj && equalDates(currentDate, self.selectedDateObj)) {
					dayElement.classList.add("selected");
				}
			}

			days.appendChild(dayElement);
		}

		// append days from the next month
		for (var dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth; dayNum++) {
			var _curDate = new Date(self.currentYear, self.currentMonth + 1, dayNum % daysInMonth, 0, 0, 0, 0, 0),
			    _dateIsEnabled = isEnabled(_curDate),
			    _dayElement = createElement("span", _dateIsEnabled ? "nextMonthDay flatpickr-day" : "disabled", dayNum % daysInMonth);

			if (self.config.weekNumbers && dayNum % 7 === 1) {
				weekNumbers.appendChild(createElement("span", "disabled", _curDate.fp_getWeek()));
			}

			if (_dateIsEnabled) {
				_dayElement.tabIndex = 0;
			}

			days.appendChild(_dayElement);
		}

		calendar.appendChild(days);
	};

	buildTime = function buildTime() {
		timeContainer = createElement("div", "flatpickr-time");
		timeContainer.tabIndex = -1;
		var separator = createElement("span", "flatpickr-time-separator", ":");

		self.hourElement = createElement("input", "flatpickr-hour");
		self.minuteElement = createElement("input", "flatpickr-minute");

		self.hourElement.tabIndex = self.minuteElement.tabIndex = 0;
		self.hourElement.type = self.minuteElement.type = "number";

		self.hourElement.value = self.selectedDateObj ? pad(self.selectedDateObj.getHours()) : 12;

		self.minuteElement.value = self.selectedDateObj ? pad(self.selectedDateObj.getMinutes()) : "00";

		self.hourElement.step = self.config.hourIncrement;
		self.minuteElement.step = self.config.minuteIncrement;

		self.hourElement.min = -self.config.time_24hr;
		self.hourElement.max = self.config.time_24hr ? 24 : 13;

		self.minuteElement.min = -self.minuteElement.step;
		self.minuteElement.max = 60;

		self.hourElement.title = self.minuteElement.title = self.l10n.scrollTitle;

		timeContainer.appendChild(self.hourElement);
		timeContainer.appendChild(separator);
		timeContainer.appendChild(self.minuteElement);

		if (self.config.enableSeconds) {
			timeContainer.classList.add("has-seconds");

			self.secondElement = createElement("input", "flatpickr-second");
			self.secondElement.type = "number";
			self.secondElement.value = self.selectedDateObj ? pad(self.selectedDateObj.getSeconds()) : "00";

			self.secondElement.step = self.minuteElement.step;
			self.secondElement.min = self.minuteElement.min;
			self.secondElement.max = self.minuteElement.max;

			timeContainer.appendChild(createElement("span", "flatpickr-time-separator", ":"));
			timeContainer.appendChild(self.secondElement);
		}

		if (!self.config.time_24hr) {
			// add self.amPM if appropriate
			self.amPM = createElement("span", "flatpickr-am-pm", ["AM", "PM"][self.hourElement.value > 11 | 0]);
			self.amPM.title = self.l10n.toggleTitle;
			self.amPM.tabIndex = 0;
			timeContainer.appendChild(self.amPM);
		}

		calendarContainer.appendChild(timeContainer);
	};

	bind = function bind() {
		document.addEventListener("keydown", onKeyDown);
		window.addEventListener("resize", onResize);

		if (self.config.clickOpens) {
			(self.altInput || self.input).addEventListener("click", self.open);
			(self.altInput || self.input).addEventListener("focus", self.open);
		}

		if (self.config.wrap && self.element.querySelector("[data-open]")) {
			self.element.querySelector("[data-open]").addEventListener("click", self.open);
		}

		if (self.config.wrap && self.element.querySelector("[data-close]")) {
			self.element.querySelector("[data-close]").addEventListener("click", self.close);
		}

		if (self.config.wrap && self.element.querySelector("[data-toggle]")) {
			self.element.querySelector("[data-toggle]").addEventListener("click", self.toggle);
		}

		if (self.config.wrap && self.element.querySelector("[data-clear]")) {
			self.element.querySelector("[data-clear]").addEventListener("click", self.clear);
		}

		if (!self.config.noCalendar) {
			prevMonthNav.addEventListener("click", function () {
				changeMonth(-1);
			});

			nextMonthNav.addEventListener("click", function () {
				changeMonth(1);
			});

			currentYearElement.addEventListener("wheel", yearScroll);
			currentYearElement.addEventListener("focus", currentYearElement.select);

			currentYearElement.addEventListener("input", function (event) {
				self.currentYear = parseInt(event.target.value, 10);
				self.redraw();
			});

			calendar.addEventListener("click", selectDate);
		}

		document.addEventListener("click", documentClick, true);
		document.addEventListener("focus", documentClick, true);

		if (self.config.enableTime) {
			self.hourElement.addEventListener("wheel", timeWrapper);
			self.minuteElement.addEventListener("wheel", timeWrapper);

			self.hourElement.addEventListener("input", timeWrapper);
			self.minuteElement.addEventListener("input", timeWrapper);

			self.hourElement.addEventListener("mouseout", updateValue);
			self.minuteElement.addEventListener("mouseout", updateValue);

			self.hourElement.addEventListener("change", updateValue);
			self.minuteElement.addEventListener("change", updateValue);

			self.hourElement.addEventListener("focus", self.hourElement.select);
			self.minuteElement.addEventListener("focus", self.minuteElement.select);

			if (self.config.enableSeconds) {
				self.secondElement.addEventListener("wheel", timeWrapper);
				self.secondElement.addEventListener("input", timeWrapper);
				self.secondElement.addEventListener("mouseout", updateValue);
				self.secondElement.addEventListener("change", updateValue);
				self.secondElement.addEventListener("focus", self.secondElement.select);
			}

			if (!self.config.time_24hr) {
				self.amPM.addEventListener("click", amPMToggle);

				self.amPM.addEventListener("wheel", amPMToggle);
				self.amPM.addEventListener("mouseout", updateValue);

				self.amPM.addEventListener("keydown", function (e) {
					if (e.which === 38 || e.which === 40) {
						amPMToggle(e);
					}
				});
			}
		}

		if (document.createEvent) {
			clickEvt = document.createEvent("MouseEvent");
			// without all these args ms edge spergs out
			clickEvt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
		} else {
			clickEvt = new MouseEvent("click", {
				view: window,
				bubbles: true,
				cancelable: true
			});
		}
	};

	self.open = function () {
		if (self.isOpen || (self.altInput || self.input).disabled || self.config.inline) {
			return;
		} else if (!self.config.static) {
			self.positionCalendar();
		}

		self.isOpen = true;

		wrapperElement.classList.add("open");

		if (!self.config.allowInput) {
			(self.altInput || self.input).blur();
			(self.config.noCalendar ? timeContainer : calendar).focus();
		}

		(self.altInput || self.input).classList.add("active");

		if (self.config.onOpen) {
			self.config.onOpen(self.selectedDateObj, self.input.value, self);
		}
	};

	// For calendars inserted in BODY (as opposed to inline wrapper)
	// it"s necessary to properly calculate top/left position.
	self.positionCalendar = function () {
		var calendarHeight = calendarContainer.offsetHeight,
		    input = self.altInput || self.input,
		    inputBounds = input.getBoundingClientRect(),
		    distanceFromBottom = window.innerHeight - inputBounds.bottom + input.offsetHeight;

		var top = void 0,
		    left = window.pageXOffset + inputBounds.left;

		if (distanceFromBottom < calendarHeight) {
			top = window.pageYOffset - calendarHeight + inputBounds.top - 2;
			calendarContainer.classList.remove("arrowTop");
			calendarContainer.classList.add("arrowBottom");
		} else {
			top = window.pageYOffset + input.offsetHeight + inputBounds.top + 2;
			calendarContainer.classList.remove("arrowBottom");
			calendarContainer.classList.add("arrowTop");
		}

		wrapperElement.style.top = top + "px";
		wrapperElement.style.left = left + "px";
	};

	self.toggle = function () {
		if (self.isOpen) {
			self.close();
		} else {
			self.open();
		}
	};

	self.close = function () {
		self.isOpen = false;
		wrapperElement.classList.remove("open");
		(self.altInput || self.input).classList.remove("active");

		if (self.config.onClose) {
			self.config.onClose(self.selectedDateObj, self.input.value, self);
		}
	};

	self.clear = function () {
		self.input.value = "";

		if (self.altInput) {
			self.altInput.value = "";
		}

		self.selectedDateObj = null;

		triggerChange();
		self.jumpToDate();
	};

	triggerChange = function triggerChange() {
		self.input.dispatchEvent(clickEvt);

		if (self.config.onChange) {
			self.config.onChange(self.selectedDateObj, self.input.value, self);
		}
	};

	self.destroy = function () {
		document.removeEventListener("click", documentClick, false);

		if (self.altInput) {
			self.altInput.parentNode.removeChild(self.altInput);
		}

		if (self.config.inline) {
			var parent = self.element.parentNode,
			    removedElement = parent.removeChild(self.element);

			parent.removeChild(calendarContainer);
			parent.parentNode.replaceChild(removedElement, parent);
		} else {
			document.getElementsByTagName("body")[0].removeChild(wrapperElement);
		}
	};

	self.redraw = function () {
		if (self.config.noCalendar) {
			return;
		}

		updateNavigationCurrentMonth();
		buildDays();
	};

	self.jumpToDate = function (jumpDate) {
		jumpDate = uDate(jumpDate || self.selectedDateObj || self.config.defaultDate || self.config.minDate || now);

		self.currentYear = jumpDate.getFullYear();
		self.currentMonth = jumpDate.getMonth();
		self.redraw();
	};

	self.setDate = function (date, triggerChangeEvent) {
		date = uDate(date);

		if (date instanceof Date && date.getTime()) {
			self.selectedDateObj = uDate(date);
			self.jumpToDate(self.selectedDateObj);
			updateValue();

			if (triggerChangeEvent) {
				triggerChange();
			}
		}
	};

	self.setTime = function (hour, minute, triggerChangeEvent) {
		if (!self.selectedDateObj) {
			return;
		}

		self.hourElement.value = parseInt(hour, 10) % 24;
		self.minuteElement.value = parseInt(minute || 0, 10) % 60;

		if (!self.config.time_24hr) {
			self.amPM.innerHTML = hour > 11 ? "PM" : "AM";
		}

		updateValue();

		if (triggerChangeEvent) {
			triggerChange();
		}
	};

	self.set = function (key, value) {
		if (key in self.config) {
			self.config[key] = value;
			self.jumpToDate();
		}
	};

	amPMToggle = function amPMToggle(e) {
		e.preventDefault();
		self.amPM.textContent = ["AM", "PM"][self.amPM.innerHTML === "AM" | 0];
	};

	onKeyDown = function onKeyDown(e) {
		if (!self.isOpen || self.config.enableTime && timeContainer.contains(e.target)) {
			return;
		}

		switch (e.which) {
			case 13:
				selectDate(e);
				break;

			case 27:
				self.close();
				break;

			case 37:
				changeMonth(-1);
				break;

			case 38:
				e.preventDefault();
				self.currentYear++;
				self.redraw();
				break;

			case 39:
				changeMonth(1);
				break;

			case 40:
				e.preventDefault();
				self.currentYear--;
				self.redraw();
				break;

			default:
				break;
		}
	};

	onResize = debounce(function () {
		if (self.isOpen && !self.config.inline && !self.config.static) {
			self.positionCalendar();
		}
	}, 300);

	try {
		init();
	} catch (error) {
		// skip and carry on
		console.error(error);
		console.info(self.element);
	}

	return self;
};

flatpickr.init.prototype = {

	defaultConfig: {},

	l10n: {
		weekdays: {
			shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
			longhand: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
		},
		months: {
			shorthand: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			longhand: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
		},
		daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
		firstDayOfWeek: 0,
		ordinal: function ordinal(nth) {
			var s = nth % 100;
			if (s > 3 && s < 21) return "th";
			switch (s % 10) {
				case 1:
					return "st";
				case 2:
					return "nd";
				case 3:
					return "rd";
				default:
					return "th";
			}
		},
		weekAbbreviation: "Wk",
		scrollTitle: "Scroll to increment",
		toggleTitle: "Click to toggle"
	}

};

Date.prototype.fp_incr = function (days) {
	return new Date(this.getFullYear(), this.getMonth(), this.getDate() + parseInt(days, 10));
};

Date.prototype.fp_isUTC = false;
Date.prototype.fp_toUTC = function () {
	var newDate = new Date(this.getTime() + this.getTimezoneOffset() * 60000);
	newDate.fp_isUTC = true;

	return newDate;
};

Date.prototype.fp_getWeek = function () {
	var date = new Date(this.getTime());
	date.setHours(0, 0, 0, 0);

	// Thursday in current week decides the year.
	date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
	// January 4 is always in week 1.
	var week1 = new Date(date.getFullYear(), 0, 4);
	// Adjust to Thursday in week 1 and count number of weeks from date to week1.
	return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
};

// classList polyfill
if (!("classList" in document.documentElement) && Object.defineProperty && typeof HTMLElement !== "undefined") {
	Object.defineProperty(HTMLElement.prototype, "classList", {
		get: function get() {
			var selfElements = this;
			function update(fn) {
				return function (value) {
					var classes = selfElements.className.split(/\s+/);
					var index = classes.indexOf(value);

					fn(classes, index, value);
					selfElements.className = classes.join(" ");
				};
			}

			var ret = {
				add: update(function (classes, index, value) {
					return ~index || classes.push(value);
				}),
				remove: update(function (classes, index) {
					return ~index && classes.splice(index, 1);
				}),
				toggle: update(function (classes, index, value) {
					if (~index) {
						classes.splice(index, 1);
					} else {
						classes.push(value);
					}
				}),
				contains: function contains(value) {
					return !! ~selfElements.className.split(/\s+/).indexOf(value);
				}
			};

			return ret;
		}
	});
}

if (true) {
	module.exports = flatpickr;
}

/***/ }),
/* 826 */,
/* 827 */,
/* 828 */,
/* 829 */,
/* 830 */
/***/ (function(module, exports) {

module.exports = [{"value":"Bogotá","label":"Bogotá"},{"value":"Medellín","label":"Medellín"},{"value":"Cali","label":"Cali"},{"value":"Barranquilla","label":"Barranquilla"},{"value":"Cartagena","label":"Cartagena"},{"value":"Cúcuta","label":"Cúcuta"},{"value":"Soledad","label":"Soledad"},{"value":"Ibagué","label":"Ibagué"},{"value":"Bucaramanga","label":"Bucaramanga"},{"value":"Santa Marta","label":"Santa Marta"},{"value":"Pereira","label":"Pereira"},{"value":"Villavicencio","label":"Villavicencio"},{"value":"Bello","label":"Bello"},{"value":"Valledupar","label":"Valledupar"},{"value":"Pasto","label":"Pasto"},{"value":"Montería","label":"Montería"},{"value":"Manizales","label":"Manizales"},{"value":"Buenaventura","label":"Buenaventura"},{"value":"Neiva","label":"Neiva"},{"value":"Palmira","label":"Palmira"},{"value":"Armenia","label":"Armenia"},{"value":"Popayán","label":"Popayán"},{"value":"Sincelejo","label":"Sincelejo"},{"value":"Floridablanca","label":"Floridablanca"},{"value":"Itagüí","label":"Itagüí"},{"value":"Riohacha","label":"Riohacha"},{"value":"Envigado","label":"Envigado"},{"value":"Tuluá","label":"Tuluá"}]

/***/ }),
/* 831 */
/***/ (function(module, exports) {

module.exports = [{"value":"Masculino","label":"Masculino"},{"value":"Femenino","label":"Femenino"}]

/***/ }),
/* 832 */
/***/ (function(module, exports) {

module.exports = [{"value":"Nosotros","label":"Nosotros"},{"value":"Cliente","label":"Cliente"}]

/***/ }),
/* 833 */
/***/ (function(module, exports) {

module.exports = [{"value":"anticipado","label":"Anticipado"},{"value":"30","label":"30 Días"},{"value":"45","label":"45 Días"},{"value":"60","label":"60 Días"}]

/***/ }),
/* 834 */
/***/ (function(module, exports) {

module.exports = [{"value":3,"label":"Alta"},{"value":2,"label":"Media"},{"value":1,"label":"Baja"}]

/***/ }),
/* 835 */
/***/ (function(module, exports) {

module.exports = [{"value":"Administración gubernamental","label":"Administración gubernamental"},{"value":"Alimentación y bebidas","label":"Alimentación y bebidas"},{"value":"Almacenamiento","label":"Almacenamiento"},{"value":"Animación","label":"Animación"},{"value":"Apuestas y casinos","label":"Apuestas y casinos"},{"value":"Arquitectura y planificación","label":"Arquitectura y planificación"},{"value":"Artículos de consumo","label":"Artículos de consumo"},{"value":"Asuntos internacionales","label":"Asuntos internacionales"},{"value":"Atención sanitaria y hospitalaria","label":"Atención sanitaria y hospitalaria"},{"value":"Automatización industrial","label":"Automatización industrial"},{"value":"Banca","label":"Banca"},{"value":"Banca de inversiones","label":"Banca de inversiones"},{"value":"Bienes inmobiliarios","label":"Bienes inmobiliarios"},{"value":"Construcción","label":"Construcción"},{"value":"Comercializadora","label":"Comercializadora"},{"value":"Consultores","label":"Consultores"},{"value":"Derecho","label":"Derecho"},{"value":"Desarrollo de programación","label":"Desarrollo de programación"},{"value":"Desarrollo de software","label":"Desarrollo de software"},{"value":"Diseño","label":"Diseño"},{"value":"Dotación y selección de personal","label":"Dotación y selección de personal"},{"value":"Educación primaria secundaria","label":"Educación primaria/secundaria"},{"value":"Electrónica de consumo","label":"Electrónica de consumo"},{"value":"Enseñanza superior","label":"Enseñanza superior"},{"value":"Entretenimiento","label":"Entretenimiento"},{"value":"Eventos","label":"Eventos"},{"value":"Financiero","label":"Financiero"},{"value":"Hostelería","label":"Hostelería"},{"value":"Marketing y publicidad","label":"Marketing y publicidad"},{"value":"Ingeniería","label":"Ingeniería"},{"value":"Ocio, viajes y turismo","label":"Ocio, viajes y turismo"},{"value":"Organización política","label":"Organización política"},{"value":"Recursos humanos","label":"Recursos humanos"},{"value":"Restaurantes","label":"Restaurantes"},{"value":"Salud","label":"Salud"},{"value":"Seguridad","label":"Seguridad"},{"value":"Sistemas","label":"Sistemas"},{"value":"Soluciones de software","label":"Soluciones de software"},{"value":"Telecomunicaciones","label":"Telecomunicaciones"}]

/***/ }),
/* 836 */,
/* 837 */,
/* 838 */,
/* 839 */,
/* 840 */,
/* 841 */,
/* 842 */,
/* 843 */,
/* 844 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(87),
    root = __webpack_require__(52);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),
/* 845 */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(890),
    hashDelete = __webpack_require__(891),
    hashGet = __webpack_require__(892),
    hashHas = __webpack_require__(893),
    hashSet = __webpack_require__(894);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),
/* 846 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(87),
    root = __webpack_require__(52);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),
/* 847 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(87),
    root = __webpack_require__(52);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),
/* 848 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(185),
    setCacheAdd = __webpack_require__(914),
    setCacheHas = __webpack_require__(915);

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),
/* 849 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(52);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),
/* 850 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(87),
    root = __webpack_require__(52);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),
/* 851 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),
/* 852 */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(872),
    isArguments = __webpack_require__(290),
    isArray = __webpack_require__(53),
    isBuffer = __webpack_require__(291),
    isIndex = __webpack_require__(188),
    isTypedArray = __webpack_require__(294);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),
/* 853 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 854 */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),
/* 855 */
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__(858),
    createBaseEach = __webpack_require__(877);

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),
/* 856 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),
/* 857 */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(878);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),
/* 858 */
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(857),
    keys = __webpack_require__(138);

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),
/* 859 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(854),
    isArray = __webpack_require__(53);

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),
/* 860 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),
/* 861 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(86),
    isObjectLike = __webpack_require__(88);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),
/* 862 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(279),
    equalArrays = __webpack_require__(283),
    equalByTag = __webpack_require__(880),
    equalObjects = __webpack_require__(881),
    getTag = __webpack_require__(887),
    isArray = __webpack_require__(53),
    isBuffer = __webpack_require__(291),
    isTypedArray = __webpack_require__(294);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),
/* 863 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(279),
    baseIsEqual = __webpack_require__(186);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),
/* 864 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(293),
    isMasked = __webpack_require__(897),
    isObject = __webpack_require__(98),
    toSource = __webpack_require__(288);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),
/* 865 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(86),
    isLength = __webpack_require__(191),
    isObjectLike = __webpack_require__(88);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),
/* 866 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(898),
    nativeKeys = __webpack_require__(911);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),
/* 867 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMatch = __webpack_require__(863),
    getMatchData = __webpack_require__(883),
    matchesStrictComparable = __webpack_require__(286);

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),
/* 868 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(186),
    get = __webpack_require__(924),
    hasIn = __webpack_require__(925),
    isKey = __webpack_require__(189),
    isStrictComparable = __webpack_require__(285),
    matchesStrictComparable = __webpack_require__(286),
    toKey = __webpack_require__(135);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),
/* 869 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),
/* 870 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(281);

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),
/* 871 */
/***/ (function(module, exports, __webpack_require__) {

var baseEach = __webpack_require__(855);

/**
 * The base implementation of `_.some` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function baseSome(collection, predicate) {
  var result;

  baseEach(collection, function(value, index, collection) {
    result = predicate(value, index, collection);
    return !result;
  });
  return !!result;
}

module.exports = baseSome;


/***/ }),
/* 872 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),
/* 873 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(131),
    arrayMap = __webpack_require__(853),
    isArray = __webpack_require__(53),
    isSymbol = __webpack_require__(137);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),
/* 874 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),
/* 875 */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),
/* 876 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(52);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 877 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(136);

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),
/* 878 */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),
/* 879 */
/***/ (function(module, exports, __webpack_require__) {

var baseIteratee = __webpack_require__(187),
    isArrayLike = __webpack_require__(136),
    keys = __webpack_require__(138);

/**
 * Creates a `_.find` or `_.findLast` function.
 *
 * @private
 * @param {Function} findIndexFunc The function to find the collection index.
 * @returns {Function} Returns the new find function.
 */
function createFind(findIndexFunc) {
  return function(collection, predicate, fromIndex) {
    var iterable = Object(collection);
    if (!isArrayLike(collection)) {
      var iteratee = baseIteratee(predicate, 3);
      collection = keys(collection);
      predicate = function(key) { return iteratee(iterable[key], key, iterable); };
    }
    var index = findIndexFunc(collection, predicate, fromIndex);
    return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
  };
}

module.exports = createFind;


/***/ }),
/* 880 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(131),
    Uint8Array = __webpack_require__(849),
    eq = __webpack_require__(190),
    equalArrays = __webpack_require__(283),
    mapToArray = __webpack_require__(909),
    setToArray = __webpack_require__(916);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),
/* 881 */
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(882);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),
/* 882 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(859),
    getSymbols = __webpack_require__(886),
    keys = __webpack_require__(138);

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),
/* 883 */
/***/ (function(module, exports, __webpack_require__) {

var isStrictComparable = __webpack_require__(285),
    keys = __webpack_require__(138);

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),
/* 884 */,
/* 885 */,
/* 886 */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(851),
    stubArray = __webpack_require__(931);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),
/* 887 */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(844),
    Map = __webpack_require__(184),
    Promise = __webpack_require__(846),
    Set = __webpack_require__(847),
    WeakMap = __webpack_require__(850),
    baseGetTag = __webpack_require__(86),
    toSource = __webpack_require__(288);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),
/* 888 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 889 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(282),
    isArguments = __webpack_require__(290),
    isArray = __webpack_require__(53),
    isIndex = __webpack_require__(188),
    isLength = __webpack_require__(191),
    toKey = __webpack_require__(135);

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),
/* 890 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(134);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),
/* 891 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),
/* 892 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(134);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),
/* 893 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(134);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),
/* 894 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(134);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),
/* 895 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(190),
    isArrayLike = __webpack_require__(136),
    isIndex = __webpack_require__(188),
    isObject = __webpack_require__(98);

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),
/* 896 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),
/* 897 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(876);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),
/* 898 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),
/* 899 */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 900 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(132);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 901 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(132);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 902 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(132);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 903 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(132);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 904 */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(845),
    ListCache = __webpack_require__(130),
    Map = __webpack_require__(184);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),
/* 905 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(133);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),
/* 906 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(133);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),
/* 907 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(133);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),
/* 908 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(133);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),
/* 909 */
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),
/* 910 */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(928);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),
/* 911 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(287);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 912 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(284);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(210)(module)))

/***/ }),
/* 913 */,
/* 914 */
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),
/* 915 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),
/* 916 */
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),
/* 917 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(130);

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),
/* 918 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),
/* 919 */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),
/* 920 */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),
/* 921 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(130),
    Map = __webpack_require__(184),
    MapCache = __webpack_require__(185);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),
/* 922 */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(910);

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),
/* 923 */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(856),
    baseIteratee = __webpack_require__(187),
    toInteger = __webpack_require__(934);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */
function findIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger(fromIndex);
  if (index < 0) {
    index = nativeMax(length + index, 0);
  }
  return baseFindIndex(array, baseIteratee(predicate, 3), index);
}

module.exports = findIndex;


/***/ }),
/* 924 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(281);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),
/* 925 */
/***/ (function(module, exports, __webpack_require__) {

var baseHasIn = __webpack_require__(860),
    hasPath = __webpack_require__(889);

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),
/* 926 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 927 */,
/* 928 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(185);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),
/* 929 */
/***/ (function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__(869),
    basePropertyDeep = __webpack_require__(870),
    isKey = __webpack_require__(189),
    toKey = __webpack_require__(135);

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),
/* 930 */
/***/ (function(module, exports, __webpack_require__) {

var arraySome = __webpack_require__(280),
    baseIteratee = __webpack_require__(187),
    baseSome = __webpack_require__(871),
    isArray = __webpack_require__(53),
    isIterateeCall = __webpack_require__(895);

/**
 * Checks if `predicate` returns truthy for **any** element of `collection`.
 * Iteration is stopped once `predicate` returns truthy. The predicate is
 * invoked with three arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 * @example
 *
 * _.some([null, 0, 'yes', false], Boolean);
 * // => true
 *
 * var users = [
 *   { 'user': 'barney', 'active': true },
 *   { 'user': 'fred',   'active': false }
 * ];
 *
 * // The `_.matches` iteratee shorthand.
 * _.some(users, { 'user': 'barney', 'active': false });
 * // => false
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.some(users, ['active', false]);
 * // => true
 *
 * // The `_.property` iteratee shorthand.
 * _.some(users, 'active');
 * // => true
 */
function some(collection, predicate, guard) {
  var func = isArray(collection) ? arraySome : baseSome;
  if (guard && isIterateeCall(collection, predicate, guard)) {
    predicate = undefined;
  }
  return func(collection, baseIteratee(predicate, 3));
}

module.exports = some;


/***/ }),
/* 931 */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),
/* 932 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 933 */
/***/ (function(module, exports, __webpack_require__) {

var toNumber = __webpack_require__(935);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),
/* 934 */
/***/ (function(module, exports, __webpack_require__) {

var toFinite = __webpack_require__(933);

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ }),
/* 935 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(98),
    isSymbol = __webpack_require__(137);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),
/* 936 */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(873);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),
/* 937 */,
/* 938 */,
/* 939 */,
/* 940 */,
/* 941 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__(943);
var parse = __webpack_require__(942);
var formats = __webpack_require__(412);

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};


/***/ }),
/* 942 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(413);

var has = Object.prototype.hasOwnProperty;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    arrayLimit: 20,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    parameterLimit: 1000,
    plainObjects: false,
    strictNullHandling: false
};

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);

    for (var i = 0; i < parts.length; ++i) {
        var part = parts[i];

        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder);
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder);
            val = options.decoder(part.slice(pos + 1), defaults.decoder);
        }
        if (has.call(obj, key)) {
            obj[key] = [].concat(obj[key]).concat(val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function (chain, val, options) {
    var leaf = val;

    for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];

        if (root === '[]') {
            obj = [];
            obj = obj.concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (
                !isNaN(index)
                && root !== cleanRoot
                && String(index) === cleanRoot
                && index >= 0
                && (options.parseArrays && index <= options.arrayLimit)
            ) {
                obj = [];
                obj[index] = leaf;
            } else {
                obj[cleanRoot] = leaf;
            }
        }

        leaf = obj;
    }

    return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys
        // that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while ((segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options);
};

module.exports = function (str, opts) {
    var options = opts ? utils.assign({}, opts) : {};

    if (options.decoder !== null && options.decoder !== undefined && typeof options.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    options.ignoreQueryPrefix = options.ignoreQueryPrefix === true;
    options.delimiter = typeof options.delimiter === 'string' || utils.isRegExp(options.delimiter) ? options.delimiter : defaults.delimiter;
    options.depth = typeof options.depth === 'number' ? options.depth : defaults.depth;
    options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : defaults.arrayLimit;
    options.parseArrays = options.parseArrays !== false;
    options.decoder = typeof options.decoder === 'function' ? options.decoder : defaults.decoder;
    options.allowDots = typeof options.allowDots === 'boolean' ? options.allowDots : defaults.allowDots;
    options.plainObjects = typeof options.plainObjects === 'boolean' ? options.plainObjects : defaults.plainObjects;
    options.allowPrototypes = typeof options.allowPrototypes === 'boolean' ? options.allowPrototypes : defaults.allowPrototypes;
    options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : defaults.parameterLimit;
    options.strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options);
        obj = utils.merge(obj, newObj, options);
    }

    return utils.compact(obj);
};


/***/ }),
/* 943 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(413);
var formats = __webpack_require__(412);

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) { // eslint-disable-line func-name-matching
        return prefix + '[]';
    },
    indices: function indices(prefix, key) { // eslint-disable-line func-name-matching
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) { // eslint-disable-line func-name-matching
        return prefix;
    }
};

var toISO = Date.prototype.toISOString;

var defaults = {
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    serializeDate: function serializeDate(date) { // eslint-disable-line func-name-matching
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var stringify = function stringify( // eslint-disable-line func-name-matching
    object,
    prefix,
    generateArrayPrefix,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    formatter,
    encodeValuesOnly
) {
    var obj = object;
    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder) : prefix;
        }

        obj = '';
    }

    if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean' || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder);
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (Array.isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        if (Array.isArray(obj)) {
            values = values.concat(stringify(
                obj[key],
                generateArrayPrefix(prefix, key),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly
            ));
        } else {
            values = values.concat(stringify(
                obj[key],
                prefix + (allowDots ? '.' + key : '[' + key + ']'),
                generateArrayPrefix,
                strictNullHandling,
                skipNulls,
                encoder,
                filter,
                sort,
                allowDots,
                serializeDate,
                formatter,
                encodeValuesOnly
            ));
        }
    }

    return values;
};

module.exports = function (object, opts) {
    var obj = object;
    var options = opts ? utils.assign({}, opts) : {};

    if (options.encoder !== null && options.encoder !== undefined && typeof options.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var delimiter = typeof options.delimiter === 'undefined' ? defaults.delimiter : options.delimiter;
    var strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;
    var skipNulls = typeof options.skipNulls === 'boolean' ? options.skipNulls : defaults.skipNulls;
    var encode = typeof options.encode === 'boolean' ? options.encode : defaults.encode;
    var encoder = typeof options.encoder === 'function' ? options.encoder : defaults.encoder;
    var sort = typeof options.sort === 'function' ? options.sort : null;
    var allowDots = typeof options.allowDots === 'undefined' ? false : options.allowDots;
    var serializeDate = typeof options.serializeDate === 'function' ? options.serializeDate : defaults.serializeDate;
    var encodeValuesOnly = typeof options.encodeValuesOnly === 'boolean' ? options.encodeValuesOnly : defaults.encodeValuesOnly;
    if (typeof options.format === 'undefined') {
        options.format = formats['default'];
    } else if (!Object.prototype.hasOwnProperty.call(formats.formatters, options.format)) {
        throw new TypeError('Unknown format option provided.');
    }
    var formatter = formats.formatters[options.format];
    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (Array.isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (options.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = options.arrayFormat;
    } else if ('indices' in options) {
        arrayFormat = options.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (sort) {
        objKeys.sort(sort);
    }

    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (skipNulls && obj[key] === null) {
            continue;
        }

        keys = keys.concat(stringify(
            obj[key],
            key,
            generateArrayPrefix,
            strictNullHandling,
            skipNulls,
            encode ? encoder : null,
            filter,
            sort,
            allowDots,
            serializeDate,
            formatter,
            encodeValuesOnly
        ));
    }

    var joined = keys.join(delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    return joined.length > 0 ? prefix + joined : '';
};


/***/ }),
/* 944 */,
/* 945 */,
/* 946 */,
/* 947 */,
/* 948 */,
/* 949 */,
/* 950 */,
/* 951 */,
/* 952 */,
/* 953 */,
/* 954 */,
/* 955 */,
/* 956 */,
/* 957 */,
/* 958 */,
/* 959 */,
/* 960 */,
/* 961 */,
/* 962 */,
/* 963 */,
/* 964 */,
/* 965 */,
/* 966 */,
/* 967 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var ReactDefaultInjection = __webpack_require__(422);
var ReactServerRendering = __webpack_require__(985);
var ReactVersion = __webpack_require__(432);

ReactDefaultInjection.inject();

var ReactDOMServer = {
  renderToString: ReactServerRendering.renderToString,
  renderToStaticMarkup: ReactServerRendering.renderToStaticMarkup,
  version: ReactVersion
};

module.exports = ReactDOMServer;

/***/ }),
/* 968 */,
/* 969 */,
/* 970 */,
/* 971 */,
/* 972 */,
/* 973 */,
/* 974 */,
/* 975 */,
/* 976 */,
/* 977 */,
/* 978 */,
/* 979 */,
/* 980 */,
/* 981 */,
/* 982 */,
/* 983 */,
/* 984 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var ReactServerBatchingStrategy = {
  isBatchingUpdates: false,
  batchedUpdates: function (callback) {
    // Don't do anything here. During the server rendering we don't want to
    // schedule any updates. We will simply ignore them.
  }
};

module.exports = ReactServerBatchingStrategy;

/***/ }),
/* 985 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */


var _prodInvariant = __webpack_require__(10);

var React = __webpack_require__(76);
var ReactDOMContainerInfo = __webpack_require__(419);
var ReactDefaultBatchingStrategy = __webpack_require__(421);
var ReactInstrumentation = __webpack_require__(29);
var ReactMarkupChecksum = __webpack_require__(427);
var ReactReconciler = __webpack_require__(75);
var ReactServerBatchingStrategy = __webpack_require__(984);
var ReactServerRenderingTransaction = __webpack_require__(431);
var ReactUpdates = __webpack_require__(40);

var emptyObject = __webpack_require__(97);
var instantiateReactComponent = __webpack_require__(205);
var invariant = __webpack_require__(4);

var pendingTransactions = 0;

/**
 * @param {ReactElement} element
 * @return {string} the HTML markup
 */
function renderToStringImpl(element, makeStaticMarkup) {
  var transaction;
  try {
    ReactUpdates.injection.injectBatchingStrategy(ReactServerBatchingStrategy);

    transaction = ReactServerRenderingTransaction.getPooled(makeStaticMarkup);

    pendingTransactions++;

    return transaction.perform(function () {
      var componentInstance = instantiateReactComponent(element, true);
      var markup = ReactReconciler.mountComponent(componentInstance, transaction, null, ReactDOMContainerInfo(), emptyObject, 0 /* parentDebugID */
      );
      if (process.env.NODE_ENV !== 'production') {
        ReactInstrumentation.debugTool.onUnmountComponent(componentInstance._debugID);
      }
      if (!makeStaticMarkup) {
        markup = ReactMarkupChecksum.addChecksumToMarkup(markup);
      }
      return markup;
    }, null);
  } finally {
    pendingTransactions--;
    ReactServerRenderingTransaction.release(transaction);
    // Revert to the DOM batching strategy since these two renderers
    // currently share these stateful modules.
    if (!pendingTransactions) {
      ReactUpdates.injection.injectBatchingStrategy(ReactDefaultBatchingStrategy);
    }
  }
}

/**
 * Render a ReactElement to its initial HTML. This should only be used on the
 * server.
 * See https://facebook.github.io/react/docs/top-level-api.html#reactdomserver.rendertostring
 */
function renderToString(element) {
  !React.isValidElement(element) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'renderToString(): You must pass a valid ReactElement.') : _prodInvariant('46') : void 0;
  return renderToStringImpl(element, false);
}

/**
 * Similar to renderToString, except this doesn't create extra DOM attributes
 * such as data-react-id that React uses internally.
 * See https://facebook.github.io/react/docs/top-level-api.html#reactdomserver.rendertostaticmarkup
 */
function renderToStaticMarkup(element) {
  !React.isValidElement(element) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'renderToStaticMarkup(): You must pass a valid ReactElement.') : _prodInvariant('47') : void 0;
  return renderToStringImpl(element, true);
}

module.exports = {
  renderToString: renderToString,
  renderToStaticMarkup: renderToStaticMarkup
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 986 */,
/* 987 */,
/* 988 */,
/* 989 */,
/* 990 */,
/* 991 */,
/* 992 */,
/* 993 */,
/* 994 */,
/* 995 */,
/* 996 */,
/* 997 */,
/* 998 */,
/* 999 */,
/* 1000 */,
/* 1001 */,
/* 1002 */,
/* 1003 */,
/* 1004 */,
/* 1005 */,
/* 1006 */,
/* 1007 */,
/* 1008 */,
/* 1009 */,
/* 1010 */,
/* 1011 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(967);


/***/ }),
/* 1012 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__(2);
var ReactDOM = __webpack_require__(62);
var createClass = __webpack_require__(267);
var QuillMixin = __webpack_require__(442);
var find = __webpack_require__(289);
var some = __webpack_require__(930);
var isEqual = __webpack_require__(292);
var T = __webpack_require__(140);
var DOM = __webpack_require__(414);

var QuillComponent = createClass({

	displayName: 'Quill',

	mixins: [ QuillMixin ],

	propTypes: {
		id: T.string,
		className: T.string,
		theme: T.string,
		style: T.object,
		readOnly: T.bool,
		value: T.oneOfType([T.string, T.shape({ops: T.array})]),
		defaultValue: T.oneOfType([T.string, T.shape({ops: T.array})]),
		placeholder: T.string,
		tabIndex: T.number,
		bounds: T.oneOfType([T.string, T.element]),
		onChange: T.func,
		onChangeSelection: T.func,
		onFocus: T.func,
		onBlur: T.func,
		onKeyPress: T.func,
		onKeyDown: T.func,
		onKeyUp: T.func,
		preserveWhitespace: T.bool,

		modules: function(props) {
			var isNotObject = T.object.apply(this, arguments);
			if (isNotObject) return isNotObject;

			if (
				props.modules && 
				props.modules.toolbar &&
				props.modules.toolbar[0] &&
				props.modules.toolbar[0].type
			) return new Error(
				'Since v1.0.0, React Quill will not create a custom toolbar for you ' +
				'anymore. Create a toolbar explictly, or let Quill create one. ' +
				'See: https://github.com/zenoamaro/react-quill#upgrading-to-react-quill-v100'
			);
		},

		toolbar: function(props) {
			if ('toolbar' in props) return new Error(
				'The `toolbar` prop has been deprecated. Use `modules.toolbar` instead. ' +
				'See: https://github.com/zenoamaro/react-quill#upgrading-to-react-quill-v100'
			);
		},

		formats: function(props) {
			var isNotArrayOfString = T.arrayOf(T.string).apply(this, arguments);

			if (isNotArrayOfString) return new Error(
				'You cannot specify custom `formats` anymore. Use Parchment instead.  ' +
				'See: https://github.com/zenoamaro/react-quill#upgrading-to-react-quill-v100.'
			);
		},

		styles: function(props) {
			if ('styles' in props) return new Error(
				'The `styles` prop has been deprecated. Use custom stylesheets instead. ' +
				'See: https://github.com/zenoamaro/react-quill#upgrading-to-react-quill-v100.'
			);
		},

		pollInterval: function(props) {
			if ('pollInterval' in props) return new Error(
				'The `pollInterval` property does not have any effect anymore. ' +
				'You can safely remove it from your props.' +
				'See: https://github.com/zenoamaro/react-quill#upgrading-to-react-quill-v100.'
			);
		},

		children: function(props) {
			// Validate that the editor has only one child element and it is not a <textarea>
			var isNotASingleElement = T.element.apply(this, arguments);
			if (isNotASingleElement) return new Error(
				'The Quill editing area can only be composed of a single React element.'
			);

			if (React.Children.count(props.children)) {
				var child = React.Children.only(props.children);
				if (child.type === 'textarea') return new Error(
					'Quill does not support editing on a <textarea>. Use a <div> instead.'
				);
			}
		}
	},
		
	/*
	Changing one of these props should cause a full re-render.
	*/
	dirtyProps: [
		'modules',
		'formats',
		'bounds',
		'theme',
		'children',
	],

	/*
	Changing one of these props should cause a regular update.
	*/
	cleanProps: [
		'id',
		'className',
		'style',
		'placeholder',
		'tabIndex',
		'onChange',
		'onChangeSelection',
		'onFocus',
		'onBlur',
		'onKeyPress',
		'onKeyDown',
		'onKeyUp',
	],

	getDefaultProps: function() {
		return {
			theme: 'snow',
			modules: {},
		};
	},

	/*
	We consider the component to be controlled if `value` is being sent in props.
	*/
	isControlled: function() {
		return 'value' in this.props;
	},

	getInitialState: function() {
		return {
			generation: 0,
			value: this.isControlled()
				? this.props.value
				: this.props.defaultValue
		};
	},

	componentWillReceiveProps: function(nextProps, nextState) {
		var editor = this.editor;

		// If the component is unmounted and mounted too quickly
		// an error is thrown in setEditorContents since editor is
		// still undefined. Must check if editor is undefined
		// before performing this call.
		if (!editor) return;
		
		// Update only if we've been passed a new `value`.
		// This leaves components using `defaultValue` alone.
		if ('value' in nextProps) {
			var currentContents = this.getEditorContents();
			var nextContents = nextProps.value;

			if (nextContents === this.lastDeltaChangeSet) throw new Error(
				'You are passing the `delta` object from the `onChange` event back ' +
				'as `value`. You most probably want `editor.getContents()` instead. ' +
				'See: https://github.com/zenoamaro/react-quill#using-deltas'
			);

			// NOTE: Seeing that Quill is missing a way to prevent
			//       edits, we have to settle for a hybrid between
			//       controlled and uncontrolled mode. We can't prevent
			//       the change, but we'll still override content
			//       whenever `value` differs from current state.
			// NOTE: Comparing an HTML string and a Quill Delta will always trigger 
			//       a change, regardless of whether they represent the same document.
			if (!this.isEqualValue(nextContents, currentContents)) {
				this.setEditorContents(editor, nextContents);
			}
		}
		
		// We can update readOnly state in-place.
		if ('readOnly' in nextProps) {
			if (nextProps.readOnly !== this.props.readOnly) {
				this.setEditorReadOnly(editor, nextProps.readOnly);
			}
		}

		// If we need to regenerate the component, we can avoid a detailed
		// in-place update step, and just let everything rerender.
		if (this.shouldComponentRegenerate(nextProps, nextState)) {
			return this.regenerate();
		}
	},

	componentDidMount: function() {
		this.editor = this.createEditor(
			this.getEditingArea(),
			this.getEditorConfig()
		);
		// Restore editor from Quill's native formats in regeneration scenario
		if (this.quillDelta) {
			this.editor.setContents(this.quillDelta);
			this.editor.setSelection(this.quillSelection);		
			this.editor.focus();
			this.quillDelta = this.quillSelection = null;
			return;
		}
		if (this.state.value) {
			this.setEditorContents(this.editor, this.state.value);
			return;
		}
	},

	componentWillUnmount: function() {
		var editor; if ((editor = this.getEditor())) {
			this.unhookEditor(editor);
			this.editor = null;
		}
	},

	shouldComponentUpdate: function(nextProps, nextState) {
		var self = this;

		// If the component has been regenerated, we already know we should update.
		if (this.state.generation !== nextState.generation) {
			return true;
		}
		
		// Compare props that require React updating the DOM.
		return some(this.cleanProps, function(prop) {
			// Note that `isEqual` compares deeply, making it safe to perform
			// non-immutable updates, at the cost of performance.
			return !isEqual(nextProps[prop], self.props[prop]);
		});
	},

	shouldComponentRegenerate: function(nextProps, nextState) {
		var self = this;
		// Whenever a `dirtyProp` changes, the editor needs reinstantiation.
		return some(this.dirtyProps, function(prop) {
			// Note that `isEqual` compares deeply, making it safe to perform
			// non-immutable updates, at the cost of performance.
			return !isEqual(nextProps[prop], self.props[prop]);
		});
	},

	/*
	If we could not update settings from the new props in-place, we have to tear
	down everything and re-render from scratch.
	*/
	componentWillUpdate: function(nextProps, nextState) {
		if (this.state.generation !== nextState.generation) {
			this.componentWillUnmount();
		}
	},

	componentDidUpdate: function(prevProps, prevState) {
		if (this.state.generation !== prevState.generation) {
			this.componentDidMount();
		}
	},

	getEditorConfig: function() {
		return {
			bounds:       this.props.bounds,
			formats:      this.props.formats,
			modules:      this.props.modules,
			placeholder:  this.props.placeholder,
			readOnly:     this.props.readOnly,
      			scrollingContainer: this.props.scrollingContainer,
			tabIndex:     this.props.tabIndex,
			theme:        this.props.theme,
		};
	},

	getEditor: function() {
		return this.editor;
	},

	getEditingArea: function () {
		return ReactDOM.findDOMNode(this.editingArea);
	},

	getEditorContents: function() {
		return this.state.value;
	},

	getEditorSelection: function() {
		return this.state.selection;
	},

	/*
	True if the value is a Delta instance or a Delta look-alike.
	*/
	isDelta: function(value) {
		return value && value.ops;
	},

	/*
	Special comparison function that knows how to compare Deltas.
	*/
	isEqualValue: function(value, nextValue) {
		if (this.isDelta(value) && this.isDelta(nextValue)) {
			return isEqual(value.ops, nextValue.ops);
		} else {
			return isEqual(value, nextValue);
		}
	},

	/*
	Regenerating the editor will cause the whole tree, including the container,
	to be cleaned up and re-rendered from scratch.
	*/
	regenerate: function() {
		// Cache selection and contents in Quill's native format to be restored later
		this.quillDelta = this.editor.getContents();
		this.quillSelection = this.editor.getSelection();
		this.setState({
			generation: this.state.generation + 1,
		});
	},

	/*
	Renders an editor area, unless it has been provided one to clone.
	*/
	renderEditingArea: function() {
		var self = this;
		var children = this.props.children;
		var preserveWhitespace = this.props.preserveWhitespace;

		var properties = {
			key: this.state.generation,
			tabIndex: this.props.tabIndex,
			ref: function(element) { self.editingArea = element },
		};

		var customElement = React.Children.count(children)
			? React.Children.only(children)
			: null;
		var defaultElement = preserveWhitespace ? DOM.pre : DOM.div;
		var editingArea = customElement
			? React.cloneElement(customElement, properties)
			: defaultElement(properties);

		return editingArea;
	},

	render: function() {
		return DOM.div({
			id: this.props.id,
			style: this.props.style,
			key: this.state.generation,
			className: ['quill'].concat(this.props.className).join(' '),
			onKeyPress: this.props.onKeyPress,
			onKeyDown: this.props.onKeyDown,
			onKeyUp: this.props.onKeyUp },
			this.renderEditingArea()
		);
	},

	onEditorChangeText: function(value, delta, source, editor) {
		var currentContents = this.getEditorContents();

		// We keep storing the same type of value as what the user gives us,
		// so that value comparisons will be more stable and predictable.
		var nextContents = this.isDelta(currentContents)
			? editor.getContents()
			: editor.getHTML();
		
		if (!this.isEqualValue(nextContents, currentContents)) {
			// Taint this `delta` object, so we can recognize whether the user
			// is trying to send it back as `value`, preventing a likely loop.
			this.lastDeltaChangeSet = delta;

			this.setState({ value: nextContents });

			if (this.props.onChange) {
				this.props.onChange(value, delta, source, editor);
			}
		}
	},

	onEditorChangeSelection: function(nextSelection, source, editor) {
		var currentSelection = this.getEditorSelection();
		var hasGainedFocus = !currentSelection && nextSelection;
		var hasLostFocus = currentSelection && !nextSelection;

		if (isEqual(nextSelection, currentSelection)) {
			return;
		}
		
		this.setState({ selection: nextSelection });
		
		if (this.props.onChangeSelection) {
			this.props.onChangeSelection(nextSelection, source, editor);
		}

		if (hasGainedFocus && this.props.onFocus) {
			this.props.onFocus(nextSelection, source, editor);
		} else if (hasLostFocus && this.props.onBlur) {
			this.props.onBlur(currentSelection, source, editor);
		}
	},

	focus: function() {
		this.editor.focus();
	},

	blur: function() {
		this.setEditorSelection(this.editor, null);
	}

});

module.exports = QuillComponent;


/***/ }),
/* 1013 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
QuillToolbar is deprecated. Consider switching to the official Quill
toolbar format, or providing your own toolbar instead. 
See https://quilljs.com/docs/modules/toolbar
*/



var React = __webpack_require__(2);
var ReactDOMServer = __webpack_require__(1011);
var createClass = __webpack_require__(267);
var find = __webpack_require__(289);
var isEqual = __webpack_require__(292);
var T = __webpack_require__(140);
var DOM = __webpack_require__(414);

var defaultColors = [
	'rgb(  0,   0,   0)', 'rgb(230,   0,   0)', 'rgb(255, 153,   0)',
	'rgb(255, 255,   0)', 'rgb(  0, 138,   0)', 'rgb(  0, 102, 204)',
	'rgb(153,  51, 255)', 'rgb(255, 255, 255)', 'rgb(250, 204, 204)',
	'rgb(255, 235, 204)', 'rgb(255, 255, 204)', 'rgb(204, 232, 204)',
	'rgb(204, 224, 245)', 'rgb(235, 214, 255)', 'rgb(187, 187, 187)',
	'rgb(240, 102, 102)', 'rgb(255, 194, 102)', 'rgb(255, 255, 102)',
	'rgb(102, 185, 102)', 'rgb(102, 163, 224)', 'rgb(194, 133, 255)',
	'rgb(136, 136, 136)', 'rgb(161,   0,   0)', 'rgb(178, 107,   0)',
	'rgb(178, 178,   0)', 'rgb(  0,  97,   0)', 'rgb(  0,  71, 178)',
	'rgb(107,  36, 178)', 'rgb( 68,  68,  68)', 'rgb( 92,   0,   0)',
	'rgb(102,  61,   0)', 'rgb(102, 102,   0)', 'rgb(  0,  55,   0)',
	'rgb(  0,  41, 102)', 'rgb( 61,  20,  10)',
].map(function(color){ return { value: color } });

var defaultItems = [

	{ label:'Formats', type:'group', items: [
		{ label:'Font', type:'font', items: [
			{ label:'Sans Serif',  value:'sans-serif', selected:true },
			{ label:'Serif',       value:'serif' },
			{ label:'Monospace',   value:'monospace' }
		]},
		{ label:'Size', type:'size', items: [
			{ label:'Small',  value:'10px' },
			{ label:'Normal', value:'13px', selected:true },
			{ label:'Large',  value:'18px' },
			{ label:'Huge',   value:'32px' }
		]},
		{ label:'Alignment', type:'align', items: [
			{ label:'', value:'', selected:true },
			{ label:'', value:'center' },
			{ label:'', value:'right' },
			{ label:'', value:'justify' }
		]}
	]},

	{ label:'Text', type:'group', items: [
		{ type:'bold', label:'Bold' },
		{ type:'italic', label:'Italic' },
		{ type:'strike', label:'Strike' },
		{ type:'underline', label:'Underline' },
		{ type:'color', label:'Color', items:defaultColors },
		{ type:'background', label:'Background color', items:defaultColors },
		{ type:'link', label:'Link' }
	]},

	{ label:'Blocks', type:'group', items: [
		{ type:'list', value:'bullet' },
		{ type:'list', value:'ordered' }
	]},

	{ label:'Blocks', type:'group', items: [
		{ type:'image', label:'Image' }
	]}

];

var QuillToolbar = createClass({

	displayName: 'Quill Toolbar',

	propTypes: {
		id:        T.string,
		className: T.string,
		style:     T.object,
		items:     T.array
	},

	getDefaultProps: function() {
		return {
			items: defaultItems
		};
	},

	componentDidMount: function() {
		console.warn(
			'QuillToolbar is deprecated. Consider switching to the official Quill ' +
			'toolbar format, or providing your own toolbar instead. ' +
			'See: https://github.com/zenoamaro/react-quill#upgrading-to-react-quill-v1-0-0'
		);
	},

	shouldComponentUpdate: function(nextProps, nextState) {
		return !isEqual(nextProps, this.props);
	},

	renderGroup: function(item, key) {
		return DOM.span({
			key: item.label || key,
			className:'ql-formats' },
			item.items.map(this.renderItem)
		);
	},

	renderChoiceItem: function(item, key) {
		return DOM.option({
			key: item.label || item.value || key,
			value: item.value },
			item.label
		);
	},

	renderChoices: function(item, key) {
		var choiceItems = item.items.map(this.renderChoiceItem);
		var selectedItem = find(item.items, function(item){ return item.selected });
		var attrs = {
			key: item.label || key,
			title: item.label,
			className: 'ql-'+item.type,
			value: selectedItem.value,
		};
		return DOM.select(attrs, choiceItems);
	},

	renderButton: function(item, key) {
		return DOM.button({
			type: 'button',
			key: item.label || item.value || key,
			value: item.value,
			className: 'ql-'+item.type,
			title: item.label },
			item.children
		);
	},

	renderAction: function(item, key) {
		return DOM.button({
			key: item.label || item.value || key,
			className: 'ql-'+item.type,
			title: item.label },
			item.children
		);
	},

	/* jshint maxcomplexity: false */
	renderItem: function(item, key) {
		switch (item.type) {
			case 'group':
				return this.renderGroup(item, key);
			case 'font':
			case 'header':
			case 'align':
			case 'size':
			case 'color':
			case 'background':
				return this.renderChoices(item, key);
			case 'bold':
			case 'italic':
			case 'underline':
			case 'strike':
			case 'link':
			case 'list':
			case 'bullet':
			case 'ordered':
			case 'indent':
			case 'image':
			case 'video':
				return this.renderButton(item, key);
			default:
				return this.renderAction(item, key);
		}
	},

	getClassName: function() {
		return 'quill-toolbar ' + (this.props.className||'');
	},

	render: function() {
		var children = this.props.items.map(this.renderItem);
		var html = children.map(ReactDOMServer.renderToStaticMarkup).join('');
		return DOM.div({
			id: this.props.id,
			className: this.getClassName(),
			style: this.props.style,
			dangerouslySetInnerHTML: { __html:html }
		});
	},

});

module.exports = QuillToolbar;
QuillToolbar.defaultItems = defaultItems;
QuillToolbar.defaultColors = defaultColors;


/***/ }),
/* 1014 */,
/* 1015 */,
/* 1016 */,
/* 1017 */,
/* 1018 */,
/* 1019 */,
/* 1020 */,
/* 1021 */,
/* 1022 */,
/* 1023 */,
/* 1024 */,
/* 1025 */,
/* 1026 */,
/* 1027 */,
/* 1028 */,
/* 1029 */,
/* 1030 */,
/* 1031 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.printBuffer = printBuffer;

var _helpers = __webpack_require__(450);

var _diff = __webpack_require__(1033);

var _diff2 = _interopRequireDefault(_diff);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Get log level string based on supplied params
 *
 * @param {string | function | object} level - console[level]
 * @param {object} action - selected action
 * @param {array} payload - selected payload
 * @param {string} type - log entry type
 *
 * @returns {string} level
 */
function getLogLevel(level, action, payload, type) {
  switch (typeof level === 'undefined' ? 'undefined' : _typeof(level)) {
    case 'object':
      return typeof level[type] === 'function' ? level[type].apply(level, _toConsumableArray(payload)) : level[type];
    case 'function':
      return level(action);
    default:
      return level;
  }
}

function defaultTitleFormatter(options) {
  var timestamp = options.timestamp,
      duration = options.duration;


  return function (action, time, took) {
    var parts = ['action'];

    parts.push('%c' + String(action.type));
    if (timestamp) parts.push('%c@ ' + time);
    if (duration) parts.push('%c(in ' + took.toFixed(2) + ' ms)');

    return parts.join(' ');
  };
}

function printBuffer(buffer, options) {
  var logger = options.logger,
      actionTransformer = options.actionTransformer,
      _options$titleFormatt = options.titleFormatter,
      titleFormatter = _options$titleFormatt === undefined ? defaultTitleFormatter(options) : _options$titleFormatt,
      collapsed = options.collapsed,
      colors = options.colors,
      level = options.level,
      diff = options.diff;


  buffer.forEach(function (logEntry, key) {
    var started = logEntry.started,
        startedTime = logEntry.startedTime,
        action = logEntry.action,
        prevState = logEntry.prevState,
        error = logEntry.error;
    var took = logEntry.took,
        nextState = logEntry.nextState;

    var nextEntry = buffer[key + 1];

    if (nextEntry) {
      nextState = nextEntry.prevState;
      took = nextEntry.started - started;
    }

    // Message
    var formattedAction = actionTransformer(action);
    var isCollapsed = typeof collapsed === 'function' ? collapsed(function () {
      return nextState;
    }, action, logEntry) : collapsed;

    var formattedTime = (0, _helpers.formatTime)(startedTime);
    var titleCSS = colors.title ? 'color: ' + colors.title(formattedAction) + ';' : '';
    var headerCSS = ['color: gray; font-weight: lighter;'];
    headerCSS.push(titleCSS);
    if (options.timestamp) headerCSS.push('color: gray; font-weight: lighter;');
    if (options.duration) headerCSS.push('color: gray; font-weight: lighter;');
    var title = titleFormatter(formattedAction, formattedTime, took);

    // Render
    try {
      if (isCollapsed) {
        if (colors.title) logger.groupCollapsed.apply(logger, ['%c ' + title].concat(headerCSS));else logger.groupCollapsed(title);
      } else {
        if (colors.title) logger.group.apply(logger, ['%c ' + title].concat(headerCSS));else logger.group(title);
      }
    } catch (e) {
      logger.log(title);
    }

    var prevStateLevel = getLogLevel(level, formattedAction, [prevState], 'prevState');
    var actionLevel = getLogLevel(level, formattedAction, [formattedAction], 'action');
    var errorLevel = getLogLevel(level, formattedAction, [error, prevState], 'error');
    var nextStateLevel = getLogLevel(level, formattedAction, [nextState], 'nextState');

    if (prevStateLevel) {
      if (colors.prevState) logger[prevStateLevel]('%c prev state', 'color: ' + colors.prevState(prevState) + '; font-weight: bold', prevState);else logger[prevStateLevel]('prev state', prevState);
    }

    if (actionLevel) {
      if (colors.action) logger[actionLevel]('%c action    ', 'color: ' + colors.action(formattedAction) + '; font-weight: bold', formattedAction);else logger[actionLevel]('action    ', formattedAction);
    }

    if (error && errorLevel) {
      if (colors.error) logger[errorLevel]('%c error     ', 'color: ' + colors.error(error, prevState) + '; font-weight: bold;', error);else logger[errorLevel]('error     ', error);
    }

    if (nextStateLevel) {
      if (colors.nextState) logger[nextStateLevel]('%c next state', 'color: ' + colors.nextState(nextState) + '; font-weight: bold', nextState);else logger[nextStateLevel]('next state', nextState);
    }

    if (diff) {
      (0, _diff2.default)(prevState, nextState, logger, isCollapsed);
    }

    try {
      logger.groupEnd();
    } catch (e) {
      logger.log('\u2014\u2014 log end \u2014\u2014');
    }
  });
}

/***/ }),
/* 1032 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  level: "log",
  logger: console,
  logErrors: true,
  collapsed: undefined,
  predicate: undefined,
  duration: false,
  timestamp: true,
  stateTransformer: function stateTransformer(state) {
    return state;
  },
  actionTransformer: function actionTransformer(action) {
    return action;
  },
  errorTransformer: function errorTransformer(error) {
    return error;
  },
  colors: {
    title: function title() {
      return "inherit";
    },
    prevState: function prevState() {
      return "#9E9E9E";
    },
    action: function action() {
      return "#03A9F4";
    },
    nextState: function nextState() {
      return "#4CAF50";
    },
    error: function error() {
      return "#F20404";
    }
  },
  diff: false,
  diffPredicate: undefined,

  // Deprecated options
  transformer: undefined
};
module.exports = exports["default"];

/***/ }),
/* 1033 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = diffLogger;

var _deepDiff = __webpack_require__(810);

var _deepDiff2 = _interopRequireDefault(_deepDiff);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// https://github.com/flitbit/diff#differences
var dictionary = {
  'E': {
    color: '#2196F3',
    text: 'CHANGED:'
  },
  'N': {
    color: '#4CAF50',
    text: 'ADDED:'
  },
  'D': {
    color: '#F44336',
    text: 'DELETED:'
  },
  'A': {
    color: '#2196F3',
    text: 'ARRAY:'
  }
};

function style(kind) {
  return 'color: ' + dictionary[kind].color + '; font-weight: bold';
}

function render(diff) {
  var kind = diff.kind,
      path = diff.path,
      lhs = diff.lhs,
      rhs = diff.rhs,
      index = diff.index,
      item = diff.item;


  switch (kind) {
    case 'E':
      return [path.join('.'), lhs, '\u2192', rhs];
    case 'N':
      return [path.join('.'), rhs];
    case 'D':
      return [path.join('.')];
    case 'A':
      return [path.join('.') + '[' + index + ']', item];
    default:
      return [];
  }
}

function diffLogger(prevState, newState, logger, isCollapsed) {
  var diff = (0, _deepDiff2.default)(prevState, newState);

  try {
    if (isCollapsed) {
      logger.groupCollapsed('diff');
    } else {
      logger.group('diff');
    }
  } catch (e) {
    logger.log('diff');
  }

  if (diff) {
    diff.forEach(function (elem) {
      var kind = elem.kind;

      var output = render(elem);

      logger.log.apply(logger, ['%c ' + dictionary[kind].text, style(kind)].concat(_toConsumableArray(output)));
    });
  } else {
    logger.log('\u2014\u2014 no diff \u2014\u2014');
  }

  try {
    logger.groupEnd();
  } catch (e) {
    logger.log('\u2014\u2014 diff end \u2014\u2014 ');
  }
}
module.exports = exports['default'];

/***/ }),
/* 1034 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logger = exports.defaults = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _core = __webpack_require__(1031);

var _helpers = __webpack_require__(450);

var _defaults = __webpack_require__(1032);

var _defaults2 = _interopRequireDefault(_defaults);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Creates logger with following options
 *
 * @namespace
 * @param {object} options - options for logger
 * @param {string | function | object} options.level - console[level]
 * @param {boolean} options.duration - print duration of each action?
 * @param {boolean} options.timestamp - print timestamp with each action?
 * @param {object} options.colors - custom colors
 * @param {object} options.logger - implementation of the `console` API
 * @param {boolean} options.logErrors - should errors in action execution be caught, logged, and re-thrown?
 * @param {boolean} options.collapsed - is group collapsed?
 * @param {boolean} options.predicate - condition which resolves logger behavior
 * @param {function} options.stateTransformer - transform state before print
 * @param {function} options.actionTransformer - transform action before print
 * @param {function} options.errorTransformer - transform error before print
 *
 * @returns {function} logger middleware
 */
function createLogger() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var loggerOptions = _extends({}, _defaults2.default, options);

  var logger = loggerOptions.logger,
      transformer = loggerOptions.transformer,
      stateTransformer = loggerOptions.stateTransformer,
      errorTransformer = loggerOptions.errorTransformer,
      predicate = loggerOptions.predicate,
      logErrors = loggerOptions.logErrors,
      diffPredicate = loggerOptions.diffPredicate;

  // Return if 'console' object is not defined

  if (typeof logger === 'undefined') {
    return function () {
      return function (next) {
        return function (action) {
          return next(action);
        };
      };
    };
  }

  if (transformer) {
    console.error('Option \'transformer\' is deprecated, use \'stateTransformer\' instead!'); // eslint-disable-line no-console
  }

  // Detect if 'createLogger' was passed directly to 'applyMiddleware'.
  if (options.getState && options.dispatch) {
    // eslint-disable-next-line no-console
    console.error('[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n\n// Logger with default options\nimport { logger } from \'redux-logger\'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n\n\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from \'redux-logger\'\n\nconst logger = createLogger({\n  // ...options\n});\n\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n');

    return function () {
      return function (next) {
        return function (action) {
          return next(action);
        };
      };
    };
  }

  var logBuffer = [];

  return function (_ref) {
    var getState = _ref.getState;
    return function (next) {
      return function (action) {
        // Exit early if predicate function returns 'false'
        if (typeof predicate === 'function' && !predicate(getState, action)) {
          return next(action);
        }

        var logEntry = {};
        logBuffer.push(logEntry);

        logEntry.started = _helpers.timer.now();
        logEntry.startedTime = new Date();
        logEntry.prevState = stateTransformer(getState());
        logEntry.action = action;

        var returnedValue = void 0;
        if (logErrors) {
          try {
            returnedValue = next(action);
          } catch (e) {
            logEntry.error = errorTransformer(e);
          }
        } else {
          returnedValue = next(action);
        }

        logEntry.took = _helpers.timer.now() - logEntry.started;
        logEntry.nextState = stateTransformer(getState());

        var diff = loggerOptions.diff && typeof diffPredicate === 'function' ? diffPredicate(getState, action) : loggerOptions.diff;

        (0, _core.printBuffer)(logBuffer, _extends({}, loggerOptions, { diff: diff }));
        logBuffer.length = 0;

        if (logEntry.error) throw logEntry.error;
        return returnedValue;
      };
    };
  };
}

var defaultLogger = createLogger();

exports.defaults = _defaults2.default;
exports.logger = defaultLogger;
exports.default = createLogger;
module.exports = exports['default'];


/***/ }),
/* 1035 */,
/* 1036 */,
/* 1037 */,
/* 1038 */,
/* 1039 */,
/* 1040 */,
/* 1041 */
/***/ (function(module, exports) {

!function(t,e){"object"==typeof module&&module.exports?module.exports=e(t):t.timeago=e(t)}("undefined"!=typeof window?window:this,function(){function t(t){return t instanceof Date?t:isNaN(t)?/^\d+$/.test(t)?new Date(e(t)):(t=(t||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2"),new Date(t)):new Date(e(t))}function e(t){return parseInt(t)}function n(t,n,r){n=d[n]?n:d[r]?r:"en";var i=0,a=t<0?1:0;for(t=Math.abs(t);t>=l[i]&&i<h;i++)t/=l[i];return t=e(t),i*=2,t>(0===i?9:1)&&(i+=1),d[n](t,i)[a].replace("%s",t)}function r(e,n){return n=n?t(n):new Date,(n-t(e))/1e3}function i(t){for(var e=1,n=0,r=Math.abs(t);t>=l[n]&&n<h;n++)t/=l[n],e*=l[n];return r%=e,r=r?e-r:e,Math.ceil(r)}function a(t){return t.dataset.timeago?t.dataset.timeago:t.getAttribute?t.getAttribute(p):t.attr?t.attr(p):void 0}function o(t,e){function o(a,c,f,s){var d=r(c,t);a.innerHTML=n(d,f,e),u["k"+s]=setTimeout(function(){o(a,c,f,s)},Math.min(1e3*i(d),2147483647))}var u={};return e||(e="en"),this.format=function(i,a){return n(r(i,t),a,e)},this.render=function(t,e){void 0===t.length&&(t=[t]);for(var n=0;n<t.length;n++)o(t[n],a(t[n]),e,++c)},this.cancel=function(){for(var t in u)clearTimeout(u[t]);u={}},this.setLocale=function(t){e=t},this}function u(t,e){return new o(t,e)}var c=0,f="second_minute_hour_day_week_month_year".split("_"),s="秒_分钟_小时_天_周_月_年".split("_"),d={en:function(t,e){if(0===e)return["just now","right now"];var n=f[parseInt(e/2)];return t>1&&(n+="s"),[t+" "+n+" ago","in "+t+" "+n]},zh_CN:function(t,e){if(0===e)return["刚刚","片刻后"];var n=s[parseInt(e/2)];return[t+n+"前",t+n+"后"]}},l=[60,60,24,7,365/7/12,12],h=6,p="datetime";return u.register=function(t,e){d[t]=e},u});

/***/ }),
/* 1042 */
/***/ (function(module, exports) {

module.exports = function(number, index) {
  return [
    ['justo ahora', 'en un rato'],
    ['hace %s segundos', 'en %s segundos'],
    ['hace 1 minuto', 'en 1 minuto'],
    ['hace %s minutos', 'en %s minutos'],
    ['hace 1 hora', 'en 1 hora'],
    ['hace %s horas', 'en %s horas'],
    ['hace 1 día', 'en 1 día'],
    ['hace %s días', 'en %s días'],
    ['hace 1 semana', 'en 1 semana'],
    ['hace %s semanas', 'en %s semanas'],
    ['hace 1 mes', 'en 1 mes'],
    ['hace %s meses', 'en %s meses'],
    ['hace 1 año', 'en 1 año'],
    ['hace %s años', 'en %s años']
  ][index];
};

/***/ }),
/* 1043 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `exports` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var
    push             = ArrayProto.push,
    slice            = ArrayProto.slice,
    toString         = ObjProto.toString,
    hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind,
    nativeCreate       = Object.create;

  // Naked function reference for surrogate-prototype-swapping.
  var Ctor = function(){};

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object.
  if (true) {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.8.3';

  // Internal function that returns an efficient (for current engines) version
  // of the passed-in callback, to be repeatedly applied in other Underscore
  // functions.
  var optimizeCb = function(func, context, argCount) {
    if (context === void 0) return func;
    switch (argCount == null ? 3 : argCount) {
      case 1: return function(value) {
        return func.call(context, value);
      };
      case 2: return function(value, other) {
        return func.call(context, value, other);
      };
      case 3: return function(value, index, collection) {
        return func.call(context, value, index, collection);
      };
      case 4: return function(accumulator, value, index, collection) {
        return func.call(context, accumulator, value, index, collection);
      };
    }
    return function() {
      return func.apply(context, arguments);
    };
  };

  // A mostly-internal function to generate callbacks that can be applied
  // to each element in a collection, returning the desired result — either
  // identity, an arbitrary callback, a property matcher, or a property accessor.
  var cb = function(value, context, argCount) {
    if (value == null) return _.identity;
    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
    if (_.isObject(value)) return _.matcher(value);
    return _.property(value);
  };
  _.iteratee = function(value, context) {
    return cb(value, context, Infinity);
  };

  // An internal function for creating assigner functions.
  var createAssigner = function(keysFunc, undefinedOnly) {
    return function(obj) {
      var length = arguments.length;
      if (length < 2 || obj == null) return obj;
      for (var index = 1; index < length; index++) {
        var source = arguments[index],
            keys = keysFunc(source),
            l = keys.length;
        for (var i = 0; i < l; i++) {
          var key = keys[i];
          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
        }
      }
      return obj;
    };
  };

  // An internal function for creating a new object that inherits from another.
  var baseCreate = function(prototype) {
    if (!_.isObject(prototype)) return {};
    if (nativeCreate) return nativeCreate(prototype);
    Ctor.prototype = prototype;
    var result = new Ctor;
    Ctor.prototype = null;
    return result;
  };

  var property = function(key) {
    return function(obj) {
      return obj == null ? void 0 : obj[key];
    };
  };

  // Helper for collection methods to determine whether a collection
  // should be iterated as an array or as an object
  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
  var getLength = property('length');
  var isArrayLike = function(collection) {
    var length = getLength(collection);
    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
  };

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles raw objects in addition to array-likes. Treats all
  // sparse array-likes as if they were dense.
  _.each = _.forEach = function(obj, iteratee, context) {
    iteratee = optimizeCb(iteratee, context);
    var i, length;
    if (isArrayLike(obj)) {
      for (i = 0, length = obj.length; i < length; i++) {
        iteratee(obj[i], i, obj);
      }
    } else {
      var keys = _.keys(obj);
      for (i = 0, length = keys.length; i < length; i++) {
        iteratee(obj[keys[i]], keys[i], obj);
      }
    }
    return obj;
  };

  // Return the results of applying the iteratee to each element.
  _.map = _.collect = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length,
        results = Array(length);
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      results[index] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
  };

  // Create a reducing function iterating left or right.
  function createReduce(dir) {
    // Optimized iterator function as using arguments.length
    // in the main function will deoptimize the, see #1991.
    function iterator(obj, iteratee, memo, keys, index, length) {
      for (; index >= 0 && index < length; index += dir) {
        var currentKey = keys ? keys[index] : index;
        memo = iteratee(memo, obj[currentKey], currentKey, obj);
      }
      return memo;
    }

    return function(obj, iteratee, memo, context) {
      iteratee = optimizeCb(iteratee, context, 4);
      var keys = !isArrayLike(obj) && _.keys(obj),
          length = (keys || obj).length,
          index = dir > 0 ? 0 : length - 1;
      // Determine the initial value if none is provided.
      if (arguments.length < 3) {
        memo = obj[keys ? keys[index] : index];
        index += dir;
      }
      return iterator(obj, iteratee, memo, keys, index, length);
    };
  }

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`.
  _.reduce = _.foldl = _.inject = createReduce(1);

  // The right-associative version of reduce, also known as `foldr`.
  _.reduceRight = _.foldr = createReduce(-1);

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, predicate, context) {
    var key;
    if (isArrayLike(obj)) {
      key = _.findIndex(obj, predicate, context);
    } else {
      key = _.findKey(obj, predicate, context);
    }
    if (key !== void 0 && key !== -1) return obj[key];
  };

  // Return all the elements that pass a truth test.
  // Aliased as `select`.
  _.filter = _.select = function(obj, predicate, context) {
    var results = [];
    predicate = cb(predicate, context);
    _.each(obj, function(value, index, list) {
      if (predicate(value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, predicate, context) {
    return _.filter(obj, _.negate(cb(predicate)), context);
  };

  // Determine whether all of the elements match a truth test.
  // Aliased as `all`.
  _.every = _.all = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (!predicate(obj[currentKey], currentKey, obj)) return false;
    }
    return true;
  };

  // Determine if at least one element in the object matches a truth test.
  // Aliased as `any`.
  _.some = _.any = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (predicate(obj[currentKey], currentKey, obj)) return true;
    }
    return false;
  };

  // Determine if the array or object contains a given item (using `===`).
  // Aliased as `includes` and `include`.
  _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
    if (!isArrayLike(obj)) obj = _.values(obj);
    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
    return _.indexOf(obj, item, fromIndex) >= 0;
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    var isFunc = _.isFunction(method);
    return _.map(obj, function(value) {
      var func = isFunc ? method : value[method];
      return func == null ? func : func.apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, _.property(key));
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs) {
    return _.filter(obj, _.matcher(attrs));
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.find(obj, _.matcher(attrs));
  };

  // Return the maximum element (or element-based computation).
  _.max = function(obj, iteratee, context) {
    var result = -Infinity, lastComputed = -Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value > result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iteratee, context) {
    var result = Infinity, lastComputed = Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value < result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed < lastComputed || computed === Infinity && result === Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Shuffle a collection, using the modern version of the
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  _.shuffle = function(obj) {
    var set = isArrayLike(obj) ? obj : _.values(obj);
    var length = set.length;
    var shuffled = Array(length);
    for (var index = 0, rand; index < length; index++) {
      rand = _.random(0, index);
      if (rand !== index) shuffled[index] = shuffled[rand];
      shuffled[rand] = set[index];
    }
    return shuffled;
  };

  // Sample **n** random values from a collection.
  // If **n** is not specified, returns a single random element.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function(obj, n, guard) {
    if (n == null || guard) {
      if (!isArrayLike(obj)) obj = _.values(obj);
      return obj[_.random(obj.length - 1)];
    }
    return _.shuffle(obj).slice(0, Math.max(0, n));
  };

  // Sort the object's values by a criterion produced by an iteratee.
  _.sortBy = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value: value,
        index: index,
        criteria: iteratee(value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(behavior) {
    return function(obj, iteratee, context) {
      var result = {};
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index) {
        var key = iteratee(value, index, obj);
        behavior(result, value, key);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, value, key) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key]++; else result[key] = 1;
  });

  // Safely create a real, live array from anything iterable.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (isArrayLike(obj)) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
  };

  // Split a collection into two arrays: one whose elements all satisfy the given
  // predicate, and one whose elements all do not satisfy the predicate.
  _.partition = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var pass = [], fail = [];
    _.each(obj, function(value, key, obj) {
      (predicate(value, key, obj) ? pass : fail).push(value);
    });
    return [pass, fail];
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[0];
    return _.initial(array, array.length - n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array.
  _.last = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[array.length - 1];
    return _.rest(array, Math.max(0, array.length - n));
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, n == null || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, _.identity);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, strict, startIndex) {
    var output = [], idx = 0;
    for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
      var value = input[i];
      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
        //flatten current level of array or arguments object
        if (!shallow) value = flatten(value, shallow, strict);
        var j = 0, len = value.length;
        output.length += len;
        while (j < len) {
          output[idx++] = value[j++];
        }
      } else if (!strict) {
        output[idx++] = value;
      }
    }
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, false);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
    if (!_.isBoolean(isSorted)) {
      context = iteratee;
      iteratee = isSorted;
      isSorted = false;
    }
    if (iteratee != null) iteratee = cb(iteratee, context);
    var result = [];
    var seen = [];
    for (var i = 0, length = getLength(array); i < length; i++) {
      var value = array[i],
          computed = iteratee ? iteratee(value, i, array) : value;
      if (isSorted) {
        if (!i || seen !== computed) result.push(value);
        seen = computed;
      } else if (iteratee) {
        if (!_.contains(seen, computed)) {
          seen.push(computed);
          result.push(value);
        }
      } else if (!_.contains(result, value)) {
        result.push(value);
      }
    }
    return result;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(flatten(arguments, true, true));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    var result = [];
    var argsLength = arguments.length;
    for (var i = 0, length = getLength(array); i < length; i++) {
      var item = array[i];
      if (_.contains(result, item)) continue;
      for (var j = 1; j < argsLength; j++) {
        if (!_.contains(arguments[j], item)) break;
      }
      if (j === argsLength) result.push(item);
    }
    return result;
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = flatten(arguments, true, true, 1);
    return _.filter(array, function(value){
      return !_.contains(rest, value);
    });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function() {
    return _.unzip(arguments);
  };

  // Complement of _.zip. Unzip accepts an array of arrays and groups
  // each array's elements on shared indices
  _.unzip = function(array) {
    var length = array && _.max(array, getLength).length || 0;
    var result = Array(length);

    for (var index = 0; index < length; index++) {
      result[index] = _.pluck(array, index);
    }
    return result;
  };

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function(list, values) {
    var result = {};
    for (var i = 0, length = getLength(list); i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // Generator function to create the findIndex and findLastIndex functions
  function createPredicateIndexFinder(dir) {
    return function(array, predicate, context) {
      predicate = cb(predicate, context);
      var length = getLength(array);
      var index = dir > 0 ? 0 : length - 1;
      for (; index >= 0 && index < length; index += dir) {
        if (predicate(array[index], index, array)) return index;
      }
      return -1;
    };
  }

  // Returns the first index on an array-like that passes a predicate test
  _.findIndex = createPredicateIndexFinder(1);
  _.findLastIndex = createPredicateIndexFinder(-1);

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iteratee, context) {
    iteratee = cb(iteratee, context, 1);
    var value = iteratee(obj);
    var low = 0, high = getLength(array);
    while (low < high) {
      var mid = Math.floor((low + high) / 2);
      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
    }
    return low;
  };

  // Generator function to create the indexOf and lastIndexOf functions
  function createIndexFinder(dir, predicateFind, sortedIndex) {
    return function(array, item, idx) {
      var i = 0, length = getLength(array);
      if (typeof idx == 'number') {
        if (dir > 0) {
            i = idx >= 0 ? idx : Math.max(idx + length, i);
        } else {
            length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
        }
      } else if (sortedIndex && idx && length) {
        idx = sortedIndex(array, item);
        return array[idx] === item ? idx : -1;
      }
      if (item !== item) {
        idx = predicateFind(slice.call(array, i, length), _.isNaN);
        return idx >= 0 ? idx + i : -1;
      }
      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
        if (array[idx] === item) return idx;
      }
      return -1;
    };
  }

  // Return the position of the first occurrence of an item in an array,
  // or -1 if the item is not included in the array.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (stop == null) {
      stop = start || 0;
      start = 0;
    }
    step = step || 1;

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var range = Array(length);

    for (var idx = 0; idx < length; idx++, start += step) {
      range[idx] = start;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Determines whether to execute a function as a constructor
  // or a normal function with the provided arguments
  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
    var self = baseCreate(sourceFunc.prototype);
    var result = sourceFunc.apply(self, args);
    if (_.isObject(result)) return result;
    return self;
  };

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = function(func, context) {
    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
    var args = slice.call(arguments, 2);
    var bound = function() {
      return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
    };
    return bound;
  };

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context. _ acts
  // as a placeholder, allowing any combination of arguments to be pre-filled.
  _.partial = function(func) {
    var boundArgs = slice.call(arguments, 1);
    var bound = function() {
      var position = 0, length = boundArgs.length;
      var args = Array(length);
      for (var i = 0; i < length; i++) {
        args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
      }
      while (position < arguments.length) args.push(arguments[position++]);
      return executeBound(func, bound, this, this, args);
    };
    return bound;
  };

  // Bind a number of an object's methods to that object. Remaining arguments
  // are the method names to be bound. Useful for ensuring that all callbacks
  // defined on an object belong to it.
  _.bindAll = function(obj) {
    var i, length = arguments.length, key;
    if (length <= 1) throw new Error('bindAll must be passed function names');
    for (i = 1; i < length; i++) {
      key = arguments[i];
      obj[key] = _.bind(obj[key], obj);
    }
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memoize = function(key) {
      var cache = memoize.cache;
      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
      return cache[address];
    };
    memoize.cache = {};
    return memoize;
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){
      return func.apply(null, args);
    }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = _.partial(_.delay, _, 1);

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    if (!options) options = {};
    var later = function() {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };
    return function() {
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, args, context, timestamp, result;

    var later = function() {
      var last = _.now() - timestamp;

      if (last < wait && last >= 0) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          if (!timeout) context = args = null;
        }
      }
    };

    return function() {
      context = this;
      args = arguments;
      timestamp = _.now();
      var callNow = immediate && !timeout;
      if (!timeout) timeout = setTimeout(later, wait);
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return _.partial(wrapper, func);
  };

  // Returns a negated version of the passed-in predicate.
  _.negate = function(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var args = arguments;
    var start = args.length - 1;
    return function() {
      var i = start;
      var result = args[start].apply(this, arguments);
      while (i--) result = args[i].call(this, result);
      return result;
    };
  };

  // Returns a function that will only be executed on and after the Nth call.
  _.after = function(times, func) {
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Returns a function that will only be executed up to (but not including) the Nth call.
  _.before = function(times, func) {
    var memo;
    return function() {
      if (--times > 0) {
        memo = func.apply(this, arguments);
      }
      if (times <= 1) func = null;
      return memo;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = _.partial(_.before, 2);

  // Object Functions
  // ----------------

  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
                      'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

  function collectNonEnumProps(obj, keys) {
    var nonEnumIdx = nonEnumerableProps.length;
    var constructor = obj.constructor;
    var proto = (_.isFunction(constructor) && constructor.prototype) || ObjProto;

    // Constructor is a special case.
    var prop = 'constructor';
    if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

    while (nonEnumIdx--) {
      prop = nonEnumerableProps[nonEnumIdx];
      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
        keys.push(prop);
      }
    }
  }

  // Retrieve the names of an object's own properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = function(obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve all the property names of an object.
  _.allKeys = function(obj) {
    if (!_.isObject(obj)) return [];
    var keys = [];
    for (var key in obj) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Returns the results of applying the iteratee to each element of the object
  // In contrast to _.map it returns an object
  _.mapObject = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys =  _.keys(obj),
          length = keys.length,
          results = {},
          currentKey;
      for (var index = 0; index < length; index++) {
        currentKey = keys[index];
        results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
      }
      return results;
  };

  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = createAssigner(_.allKeys);

  // Assigns a given object with all the own properties in the passed-in object(s)
  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
  _.extendOwn = _.assign = createAssigner(_.keys);

  // Returns the first key on an object that passes a predicate test
  _.findKey = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = _.keys(obj), key;
    for (var i = 0, length = keys.length; i < length; i++) {
      key = keys[i];
      if (predicate(obj[key], key, obj)) return key;
    }
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(object, oiteratee, context) {
    var result = {}, obj = object, iteratee, keys;
    if (obj == null) return result;
    if (_.isFunction(oiteratee)) {
      keys = _.allKeys(obj);
      iteratee = optimizeCb(oiteratee, context);
    } else {
      keys = flatten(arguments, false, false, 1);
      iteratee = function(value, key, obj) { return key in obj; };
      obj = Object(obj);
    }
    for (var i = 0, length = keys.length; i < length; i++) {
      var key = keys[i];
      var value = obj[key];
      if (iteratee(value, key, obj)) result[key] = value;
    }
    return result;
  };

   // Return a copy of the object without the blacklisted properties.
  _.omit = function(obj, iteratee, context) {
    if (_.isFunction(iteratee)) {
      iteratee = _.negate(iteratee);
    } else {
      var keys = _.map(flatten(arguments, false, false, 1), String);
      iteratee = function(value, key) {
        return !_.contains(keys, key);
      };
    }
    return _.pick(obj, iteratee, context);
  };

  // Fill in a given object with default properties.
  _.defaults = createAssigner(_.allKeys, true);

  // Creates an object that inherits from the given prototype object.
  // If additional properties are provided then they will be added to the
  // created object.
  _.create = function(prototype, props) {
    var result = baseCreate(prototype);
    if (props) _.extendOwn(result, props);
    return result;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Returns whether an object has a given set of `key:value` pairs.
  _.isMatch = function(object, attrs) {
    var keys = _.keys(attrs), length = keys.length;
    if (object == null) return !length;
    var obj = Object(object);
    for (var i = 0; i < length; i++) {
      var key = keys[i];
      if (attrs[key] !== obj[key] || !(key in obj)) return false;
    }
    return true;
  };


  // Internal recursive comparison function for `isEqual`.
  var eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a === 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
      case '[object RegExp]':
      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return '' + a === '' + b;
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive.
        // Object(NaN) is equivalent to NaN
        if (+a !== +a) return +b !== +b;
        // An `egal` comparison is performed for other numeric values.
        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a === +b;
    }

    var areArrays = className === '[object Array]';
    if (!areArrays) {
      if (typeof a != 'object' || typeof b != 'object') return false;

      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
      // from different frames are.
      var aCtor = a.constructor, bCtor = b.constructor;
      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
                               _.isFunction(bCtor) && bCtor instanceof bCtor)
                          && ('constructor' in a && 'constructor' in b)) {
        return false;
      }
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] === a) return bStack[length] === b;
    }

    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);

    // Recursively compare objects and arrays.
    if (areArrays) {
      // Compare array lengths to determine if a deep comparison is necessary.
      length = a.length;
      if (length !== b.length) return false;
      // Deep compare the contents, ignoring non-numeric properties.
      while (length--) {
        if (!eq(a[length], b[length], aStack, bStack)) return false;
      }
    } else {
      // Deep compare objects.
      var keys = _.keys(a), key;
      length = keys.length;
      // Ensure that both objects contain the same number of properties before comparing deep equality.
      if (_.keys(b).length !== length) return false;
      while (length--) {
        // Deep compare each member
        key = keys[length];
        if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
    return _.keys(obj).length === 0;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) === '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) === '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE < 9), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return _.has(obj, 'callee');
    };
  }

  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
  // IE 11 (#1621), and in Safari 8 (#1929).
  if (typeof /./ != 'function' && typeof Int8Array != 'object') {
    _.isFunction = function(obj) {
      return typeof obj == 'function' || false;
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function(obj) {
    return _.isNumber(obj) && obj !== +obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, key) {
    return obj != null && hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iteratees.
  _.identity = function(value) {
    return value;
  };

  // Predicate-generating functions. Often useful outside of Underscore.
  _.constant = function(value) {
    return function() {
      return value;
    };
  };

  _.noop = function(){};

  _.property = property;

  // Generates a function for a given object that returns a given property.
  _.propertyOf = function(obj) {
    return obj == null ? function(){} : function(key) {
      return obj[key];
    };
  };

  // Returns a predicate for checking whether an object has a given set of
  // `key:value` pairs.
  _.matcher = _.matches = function(attrs) {
    attrs = _.extendOwn({}, attrs);
    return function(obj) {
      return _.isMatch(obj, attrs);
    };
  };

  // Run a function **n** times.
  _.times = function(n, iteratee, context) {
    var accum = Array(Math.max(0, n));
    iteratee = optimizeCb(iteratee, context, 1);
    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // A (possibly faster) way to get the current timestamp as an integer.
  _.now = Date.now || function() {
    return new Date().getTime();
  };

   // List of HTML entities for escaping.
  var escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
  };
  var unescapeMap = _.invert(escapeMap);

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  var createEscaper = function(map) {
    var escaper = function(match) {
      return map[match];
    };
    // Regexes for identifying a key that needs to be escaped
    var source = '(?:' + _.keys(map).join('|') + ')';
    var testRegexp = RegExp(source);
    var replaceRegexp = RegExp(source, 'g');
    return function(string) {
      string = string == null ? '' : '' + string;
      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
    };
  };
  _.escape = createEscaper(escapeMap);
  _.unescape = createEscaper(unescapeMap);

  // If the value of the named `property` is a function then invoke it with the
  // `object` as context; otherwise, return it.
  _.result = function(object, property, fallback) {
    var value = object == null ? void 0 : object[property];
    if (value === void 0) {
      value = fallback;
    }
    return _.isFunction(value) ? value.call(object) : value;
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'":      "'",
    '\\':     '\\',
    '\r':     'r',
    '\n':     'n',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

  var escapeChar = function(match) {
    return '\\' + escapes[match];
  };

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  // NB: `oldSettings` only exists for backwards compatibility.
  _.template = function(text, settings, oldSettings) {
    if (!settings && oldSettings) settings = oldSettings;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset).replace(escaper, escapeChar);
      index = offset + match.length;

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      } else if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      } else if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }

      // Adobe VMs need the match returned to produce the correct offest.
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + 'return __p;\n';

    try {
      var render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled source as a convenience for precompilation.
    var argument = settings.variable || 'obj';
    template.source = 'function(' + argument + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function. Start chaining a wrapped Underscore object.
  _.chain = function(obj) {
    var instance = _(obj);
    instance._chain = true;
    return instance;
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var result = function(instance, obj) {
    return instance._chain ? _(obj).chain() : obj;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    _.each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result(this, func.apply(_, args));
      };
    });
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
      return result(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  _.each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return result(this, method.apply(this._wrapped, arguments));
    };
  });

  // Extracts the result from a wrapped and chained object.
  _.prototype.value = function() {
    return this._wrapped;
  };

  // Provide unwrapping proxy for some methods used in engine operations
  // such as arithmetic and JSON stringification.
  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

  _.prototype.toString = function() {
    return '' + this._wrapped;
  };

  // AMD registration happens at the end for compatibility with AMD loaders
  // that may not enforce next-turn semantics on modules. Even though general
  // practice for AMD registration is to be anonymous, underscore registers
  // as a named module because, like jQuery, it is a base library that is
  // popular enough to be bundled in a third party lib, but not be part of
  // an AMD load request. Those cases could generate an error when an
  // anonymous define() is called outside of a loader request.
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
      return _;
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
}.call(this));


/***/ }),
/* 1044 */,
/* 1045 */,
/* 1046 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = reducer;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var TYPE = 'ASESORES';
var initialState = {
	items: [],
	errors: [],
	asesesor: {}
};

function reducer() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];

	switch (action.type) {
		case TYPE + '_FETCH':
			return _extends({}, state, {
				items: action.payload
			});
			break;

		case TYPE + '_SET_CONTACT':
			return _extends({}, state, {
				errors: [],
				contact: action.payload
			});
			break;

		case TYPE + '_STORE':
			return _extends({}, state, {
				contact: {},
				errors: [],
				items: [action.payload].concat(_toConsumableArray(state.items))
			});
			break;

		case TYPE + '_UPDATE':
			var updated = action.payload;

			return _extends({}, state, {
				contact: {},
				errors: [],
				items: state.items.map(function (model) {
					return model.id == updated.id ? _extends({}, model, updated) : model;
				})
			});
			break;

		case TYPE + '_CLEAN_ITEMS':
			return _extends({}, state, {
				items: []
			});
			break;

		case TYPE + '_FAIL':
			return _extends({}, state, {
				errors: [action.payload]
			});
			break;

		default:
			return state;
			break;
	}
}

/***/ })
]),[489]);